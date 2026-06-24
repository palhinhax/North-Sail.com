import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth, isAdmin } from "@/lib/auth";
import { createRequestSchema } from "@/features/requests/schemas";
import { RequestStatus } from "@prisma/client";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  if (isAdmin(session)) {
    const requests = await prisma.serviceRequest.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        business: {
          include: { owner: { select: { id: true, name: true, email: true } } },
        },
        assignedTo: { select: { id: true, name: true, email: true } },
      },
    });
    return NextResponse.json(requests);
  }

  const business = await prisma.business.findUnique({
    where: { ownerId: session.user.id },
  });
  if (!business) return NextResponse.json([]);

  const requests = await prisma.serviceRequest.findMany({
    where: { businessId: business.id },
    orderBy: { createdAt: "desc" },
    include: {
      assignedTo: { select: { id: true, name: true, email: true } },
    },
  });
  return NextResponse.json(requests);
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const result = createRequestSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      {
        message: "Validation failed",
        errors: result.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const business = await prisma.business.findUnique({
    where: { ownerId: session.user.id },
  });
  if (!business) {
    return NextResponse.json(
      { message: "No business for user" },
      { status: 400 }
    );
  }

  const created = await prisma.serviceRequest.create({
    data: {
      businessId: business.id,
      type: result.data.type,
      title: result.data.title,
      description: result.data.description,
      sector: result.data.sector ?? business.sector,
      priority: result.data.priority ?? 2,
      statusEvents: {
        create: {
          status: RequestStatus.SUBMITTED,
          note: "Pedido recebido.",
          changedById: session.user.id,
        },
      },
    },
  });
  return NextResponse.json(created, { status: 201 });
}
