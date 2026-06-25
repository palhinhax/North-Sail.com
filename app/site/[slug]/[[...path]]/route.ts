import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Reverse-proxy for client sites hosted on separate (Vercel) deployments.
 *
 * Public:  {SITE_URL}/site/{slug}/...
 * Upstream: {business.siteUrl}/...   (never exposed to the client)
 *
 * Everything the upstream references at the root ("/_next", "/assets", ...) is
 * rewritten to "/site/{slug}/..." so the browser keeps routing back through
 * this proxy, and the proxy maps it back to the upstream root. Absolute links
 * to the upstream origin are rewritten to the public base so the real URL never
 * leaks into the HTML.
 */

// Headers we must not forward verbatim.
const STRIP_REQUEST_HEADERS = new Set([
  "host",
  "connection",
  "content-length",
  "accept-encoding",
]);
const STRIP_RESPONSE_HEADERS = new Set([
  "content-encoding",
  "content-length",
  "transfer-encoding",
  "connection",
  "strict-transport-security",
  // Allow the site to render inside our preview iframe (same-origin proxy).
  "x-frame-options",
  "content-security-policy",
]);

function publicBase() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://www.north-sail.com"
  );
}

async function resolveSite(slug: string) {
  const business = await prisma.business.findUnique({
    where: { slug },
    select: { siteUrl: true, sitePublished: true, customDomain: true },
  });
  if (!business || !business.sitePublished || !business.siteUrl) return null;
  return business.siteUrl.replace(/\/$/, "");
}

function rewriteHtml(html: string, upstreamOrigin: string, prefix: string) {
  let out = html;
  // 1) Absolute links to the upstream origin -> public prefix (hide real URL).
  out = out.split(upstreamOrigin).join(prefix);
  // 2) Root-relative attributes -> prefixed (so they round-trip through proxy).
  out = out.replace(
    /(\s(?:href|src|action|poster|data-src)=)(["'])\/(?!\/)/gi,
    `$1$2${prefix}/`
  );
  // 3) CSS url(/...) and srcset root-relative entries (best effort).
  out = out.replace(/url\((["']?)\/(?!\/)/gi, `url($1${prefix}/`);
  return out;
}

async function handle(
  req: Request,
  ctx: { params: Promise<{ slug: string; path?: string[] }> }
) {
  const { slug, path } = await ctx.params;
  const upstream = await resolveSite(slug);
  if (!upstream) {
    return new NextResponse("Site não encontrado.", { status: 404 });
  }

  const upstreamOrigin = new URL(upstream).origin;
  const prefix = `${publicBase()}/site/${slug}`;
  const search = new URL(req.url).search;
  const targetPath = path?.length ? `/${path.join("/")}` : "/";
  const targetUrl = `${upstream}${targetPath}${search}`;

  // Forward request headers (minus host etc.) + a secret the upstream can check.
  const headers = new Headers();
  req.headers.forEach((value, key) => {
    if (!STRIP_REQUEST_HEADERS.has(key.toLowerCase())) headers.set(key, value);
  });
  if (process.env.SITE_PROXY_SECRET) {
    headers.set("x-northsail-proxy", process.env.SITE_PROXY_SECRET);
  }

  const init: RequestInit = {
    method: req.method,
    headers,
    redirect: "manual",
    body:
      req.method === "GET" || req.method === "HEAD"
        ? undefined
        : await req.arrayBuffer(),
  };

  let upstreamRes: Response;
  try {
    upstreamRes = await fetch(targetUrl, init);
  } catch {
    return new NextResponse("Site indisponível.", { status: 502 });
  }

  // Build response headers.
  const resHeaders = new Headers();
  upstreamRes.headers.forEach((value, key) => {
    if (STRIP_RESPONSE_HEADERS.has(key.toLowerCase())) return;
    // Rewrite redirects that point back to the upstream origin.
    if (key.toLowerCase() === "location") {
      resHeaders.set(key, value.split(upstreamOrigin).join(prefix));
      return;
    }
    resHeaders.set(key, value);
  });

  const contentType = upstreamRes.headers.get("content-type") ?? "";

  // Rewrite HTML so no upstream URL leaks and assets route back through us.
  if (contentType.includes("text/html")) {
    const html = await upstreamRes.text();
    const rewritten = rewriteHtml(html, upstreamOrigin, prefix);
    return new NextResponse(rewritten, {
      status: upstreamRes.status,
      headers: resHeaders,
    });
  }

  // Everything else (assets, JSON, etc.) is streamed through untouched.
  return new NextResponse(upstreamRes.body, {
    status: upstreamRes.status,
    headers: resHeaders,
  });
}

export const GET = handle;
export const POST = handle;
export const PUT = handle;
export const PATCH = handle;
export const DELETE = handle;
export const HEAD = handle;
export const OPTIONS = handle;
