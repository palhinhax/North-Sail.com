import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth, isAdmin } from "@/lib/auth";
import { messageSchema } from "@/features/requests/schemas";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function POST(request: Request, { params }: RouteParams) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const existing = await prisma.serviceRequest.findUnique({
    where: { id },
    include: { business: true },
  });
  if (!existing)
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  if (!isAdmin(session) && existing.business.ownerId !== session.user.id) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  const body = await request.json();
  const result = messageSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      {
        message: "Validation failed",
        errors: result.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const { body: messageBody, attachments } = result.data;

  const created = await prisma.requestMessage.create({
    data: {
      requestId: id,
      authorId: session.user.id,
      body: messageBody,
      ...(attachments.length
        ? {
            attachments: {
              create: attachments.map((a) => ({
                requestId: id,
                uploadedById: session.user.id,
                key: a.key,
                fileName: a.fileName,
                contentType: a.contentType,
                size: a.size,
              })),
            },
          }
        : {}),
    },
    include: { attachments: true },
  });
  return NextResponse.json(created, { status: 201 });
}
