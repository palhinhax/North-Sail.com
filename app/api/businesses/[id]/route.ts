import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth, isAdmin } from "@/lib/auth";
import {
  updateBusinessSchema,
  ADMIN_ONLY_BUSINESS_FIELDS,
} from "@/features/businesses/schemas";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(_req: Request, { params }: RouteParams) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const business = await prisma.business.findUnique({
    where: { id },
    include: {
      subscription: { include: { plan: true } },
      owner: { select: { id: true, name: true, email: true } },
    },
  });
  if (!business)
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  if (!isAdmin(session) && business.ownerId !== session.user.id) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }
  return NextResponse.json(business);
}

export async function PATCH(request: Request, { params }: RouteParams) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const existing = await prisma.business.findUnique({ where: { id } });
  if (!existing)
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  if (!isAdmin(session) && existing.ownerId !== session.user.id) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  const body = await request.json();
  const result = updateBusinessSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      {
        message: "Validation failed",
        errors: result.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  // Strip admin-only fields when the requester is not an admin.
  const data: Record<string, unknown> = { ...result.data };
  if (!isAdmin(session)) {
    for (const field of ADMIN_ONLY_BUSINESS_FIELDS) {
      delete data[field];
    }
  }

  const updated = await prisma.business.update({
    where: { id },
    data,
  });
  return NextResponse.json(updated);
}

export async function DELETE(_request: Request, { params }: RouteParams) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  // Apagar um cliente é uma ação destrutiva: só admins.
  if (!isAdmin(session)) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  const { id } = await params;
  const business = await prisma.business.findUnique({
    where: { id },
    select: { ownerId: true, owner: { select: { role: true } } },
  });
  if (!business) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  // Apaga o negócio (em cascade: subscrição, pedidos, mensagens, anexos,
  // eventos de estado e resgates de desconto) e, se o dono for um cliente,
  // também a sua conta de utilizador — libertando o email para reutilizar.
  await prisma.$transaction(async (tx) => {
    await tx.business.delete({ where: { id } });
    if (business.owner.role === "CLIENT") {
      await tx.user.delete({ where: { id: business.ownerId } });
    }
  });

  return NextResponse.json({ ok: true });
}
