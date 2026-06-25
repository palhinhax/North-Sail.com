import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth, isAdmin } from "@/lib/auth";
import { presignSchema } from "@/features/requests/schemas";
import {
  b2Configured,
  buildAttachmentKey,
  presignUpload,
} from "@/lib/storage/b2";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  if (!b2Configured) {
    return NextResponse.json(
      { message: "Armazenamento não configurado." },
      { status: 400 }
    );
  }

  const body = await req.json();
  const result = presignSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ message: "Dados inválidos." }, { status: 400 });
  }
  const { requestId, fileName, contentType } = result.data;

  // Authorize: must own the request (or be admin).
  const reqRow = await prisma.serviceRequest.findUnique({
    where: { id: requestId },
    include: { business: { select: { ownerId: true } } },
  });
  if (!reqRow) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }
  if (!isAdmin(session) && reqRow.business.ownerId !== session.user.id) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  const key = buildAttachmentKey(requestId, fileName);
  const uploadUrl = await presignUpload(key, contentType);

  return NextResponse.json({ key, uploadUrl });
}
