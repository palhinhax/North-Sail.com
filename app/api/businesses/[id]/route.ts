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
