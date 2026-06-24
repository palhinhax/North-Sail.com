import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { statusChangeSchema } from "@/features/requests/schemas";
import { RequestStatus } from "@prisma/client";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function POST(request: Request, { params }: RouteParams) {
  const guard = await requireAdmin();
  if ("error" in guard) return guard.error;
  const { session } = guard;

  const { id } = await params;
  const body = await request.json();
  const result = statusChangeSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      {
        message: "Validation failed",
        errors: result.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const existing = await prisma.serviceRequest.findUnique({ where: { id } });
  if (!existing)
    return NextResponse.json({ message: "Not found" }, { status: 404 });

  const data: Record<string, unknown> = { status: result.data.status };
  if (result.data.status === RequestStatus.PUBLISHED) {
    data.publishedAt = new Date();
  }

  const [updated] = await prisma.$transaction([
    prisma.serviceRequest.update({ where: { id }, data }),
    prisma.requestStatusEvent.create({
      data: {
        requestId: id,
        status: result.data.status,
        note: result.data.note,
        changedById: session.user.id,
      },
    }),
  ]);

  return NextResponse.json(updated);
}
