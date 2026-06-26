import { auth } from "@/lib/auth/edge";
import { NextResponse } from "next/server";
import { DEFAULT_LOCALE, LOCALES, isLocale } from "@/lib/i18n/config";

/** Strip a leading `/{locale}` segment so route checks are locale-agnostic. */
function stripLocale(pathname: string): string {
  const segments = pathname.split("/");
  if (
    segments.length > 1 &&
    (LOCALES as readonly string[]).includes(segments[1])
  ) {
    const rest = "/" + segments.slice(2).join("/");
    return rest === "/" ? "/" : rest;
  }
  return pathname;
}

/**
 * Resolve the request locale from the URL prefix, falling back to the
 * `Accept-Language` header and then the default. Stamped onto the `x-locale`
 * request header so non-localized boundaries — notably the global 404 page,
 * which doesn't receive route params — can render in the right language.
 */
function resolveLocale(pathname: string, acceptLanguage: string | null) {
  const prefix = pathname.split("/")[1];
  if (prefix && isLocale(prefix)) return prefix;
  for (const part of acceptLanguage?.split(",") ?? []) {
    const tag = part.split(";")[0]?.trim().slice(0, 2).toLowerCase();
    if (tag && isLocale(tag)) return tag;
  }
  return DEFAULT_LOCALE;
}

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const role = req.auth?.user?.role;
  const { pathname } = req.nextUrl;
  // Auth pages are localized (`/{locale}/auth/*`) while dashboard/admin are not;
  // normalize so a single check covers both prefixed and bare paths.
  const normalizedPath = stripLocale(pathname);

  const isDashboardRoute = normalizedPath.startsWith("/dashboard");
  const isAdminRoute = normalizedPath.startsWith("/admin");
  const isProtectedRoute = isDashboardRoute || isAdminRoute;

  const authRoutes = ["/auth/login", "/auth/register"];
  const isAuthRoute = authRoutes.some((route) =>
    normalizedPath.startsWith(route)
  );

  if (isProtectedRoute && !isLoggedIn) {
    const loginUrl = new URL("/auth/login", req.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAdminRoute && isLoggedIn && role !== "ADMIN") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (isAuthRoute && isLoggedIn) {
    const target = role === "ADMIN" ? "/admin" : "/dashboard";
    return NextResponse.redirect(new URL(target, req.url));
  }

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set(
    "x-locale",
    resolveLocale(pathname, req.headers.get("accept-language"))
  );
  return NextResponse.next({ request: { headers: requestHeaders } });
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
