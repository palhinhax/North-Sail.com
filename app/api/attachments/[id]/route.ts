import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth, isAdmin } from "@/lib/auth";
import { presignDownload } from "@/lib/storage/b2";

export const runtime = "nodejs";

interface RouteParams {
  params: Promise<{ id: string }>;
}

/** Redirects to a short-lived presigned URL for the (private) attachment. */
export async function GET(_req: Request, { params }: RouteParams) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const att = await prisma.attachment.findUnique({
    where: { id },
    include: {
      request: { include: { business: { select: { ownerId: true } } } },
    },
  });
  if (!att) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }
  if (!isAdmin(session) && att.request.business.ownerId !== session.user.id) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  const url = await presignDownload(att.key, att.fileName);
  return NextResponse.redirect(url);
}
