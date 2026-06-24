import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth, isAdmin } from "@/lib/auth";
import { updateRequestSchema } from "@/features/requests/schemas";

interface RouteParams {
  params: Promise<{ id: string }>;
}

async function loadRequest(id: string) {
  return prisma.serviceRequest.findUnique({
    where: { id },
    include: {
      business: {
        include: { owner: { select: { id: true, name: true, email: true } } },
      },
      assignedTo: { select: { id: true, name: true, email: true } },
      statusEvents: { orderBy: { createdAt: "asc" } },
      messages: { orderBy: { createdAt: "asc" } },
    },
  });
}

export async function GET(_req: Request, { params }: RouteParams) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const req = await loadRequest(id);
  if (!req) return NextResponse.json({ message: "Not found" }, { status: 404 });
  if (!isAdmin(session) && req.business.ownerId !== session.user.id) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }
  return NextResponse.json(req);
}

export async function PATCH(request: Request, { params }: RouteParams) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const req = await loadRequest(id);
  if (!req) return NextResponse.json({ message: "Not found" }, { status: 404 });

  const admin = isAdmin(session);
  const isOwner = req.business.ownerId === session.user.id;
  if (!admin && !isOwner) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  const body = await request.json();
  const result = updateRequestSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      {
        message: "Validation failed",
        errors: result.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  if (!admin) {
    const { estimatedHours, actualHours, assignedToId, priority } = result.data;
    if (
      estimatedHours !== undefined ||
      actualHours !== undefined ||
      assignedToId !== undefined ||
      priority !== undefined
    ) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }
  }

  const updated = await prisma.serviceRequest.update({
    where: { id },
    data: result.data,
    include: {
      business: true,
      assignedTo: { select: { id: true, name: true, email: true } },
    },
  });
  return NextResponse.json(updated);
}
