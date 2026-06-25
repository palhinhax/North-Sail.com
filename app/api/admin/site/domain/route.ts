import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth, isAdmin } from "@/lib/auth";
import {
  addProjectDomain,
  getProjectDomain,
  vercelConfigured,
} from "@/lib/vercel/api";
import { ROOT_DOMAIN } from "@/lib/site/public-url";

export const runtime = "nodejs";

async function loadBusiness(id: string) {
  return prisma.business.findUnique({ where: { id } });
}

/** Attach a domain to the client's Vercel project. */
export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id || !isAdmin(session)) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }
  if (!vercelConfigured()) {
    return NextResponse.json(
      { message: "Falta VERCEL_TOKEN no ambiente (.env)." },
      { status: 400 }
    );
  }

  const { businessId, domain, projectId } = await req.json();
  if (!businessId || !domain) {
    return NextResponse.json(
      { message: "businessId e domain são obrigatórios." },
      { status: 400 }
    );
  }

  const business = await loadBusiness(businessId);
  if (!business) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  const pid = projectId || business.vercelProjectId;
  if (!pid) {
    return NextResponse.json(
      { message: "Define o ID do projeto Vercel deste cliente." },
      { status: 400 }
    );
  }

  const name = String(domain).trim().toLowerCase();
  const status = await addProjectDomain(pid, name);

  // Persist project id, and set customDomain only for the client's own domain
  // (a NorthSail subdomain stays as the default fallback, not a "custom" domain).
  const isSubdomain = name.endsWith(`.${ROOT_DOMAIN}`);
  await prisma.business.update({
    where: { id: business.id },
    data: {
      vercelProjectId: pid,
      ...(isSubdomain ? {} : { customDomain: name }),
    },
  });

  return NextResponse.json(status);
}

/** Re-check verification status for a domain. */
export async function GET(req: Request) {
  const session = await auth();
  if (!session?.user?.id || !isAdmin(session)) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }
  const url = new URL(req.url);
  const businessId = url.searchParams.get("businessId");
  const domain = url.searchParams.get("domain");
  if (!businessId || !domain) {
    return NextResponse.json(
      { message: "Faltam parâmetros." },
      { status: 400 }
    );
  }
  const business = await loadBusiness(businessId);
  if (!business?.vercelProjectId) {
    return NextResponse.json(
      { message: "Sem projeto Vercel associado." },
      { status: 400 }
    );
  }
  const status = await getProjectDomain(
    business.vercelProjectId,
    domain.trim().toLowerCase()
  );
  return NextResponse.json(status);
}
