import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

export async function GET() {
  const guard = await requireAdmin();
  if ("error" in guard) return guard.error;

  const subscriptions = await prisma.subscription.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      plan: true,
      business: {
        include: {
          owner: { select: { id: true, name: true, email: true } },
        },
      },
    },
  });
  return NextResponse.json(subscriptions);
}
