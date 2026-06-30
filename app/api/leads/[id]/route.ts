import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth, isAdmin } from "@/lib/auth";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function DELETE(_request: Request, { params }: RouteParams) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  // Apagar uma lead só é permitido a admins.
  if (!isAdmin(session)) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  const { id } = await params;
  const existing = await prisma.lead.findUnique({
    where: { id },
    select: { id: true },
  });
  if (!existing) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  await prisma.lead.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
