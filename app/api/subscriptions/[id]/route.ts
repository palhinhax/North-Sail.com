import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth, isAdmin } from "@/lib/auth";
import { updateSubscriptionSchema } from "@/features/subscriptions/schemas";
import { SubscriptionStatus } from "@prisma/client";

interface RouteParams {
  params: Promise<{ id: string }>;
}

async function loadSubscription(id: string) {
  return prisma.subscription.findUnique({
    where: { id },
    include: { plan: true, business: true },
  });
}

export async function GET(_request: Request, { params }: RouteParams) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const subscription = await loadSubscription(id);
  if (!subscription) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }
  if (!isAdmin(session) && subscription.business.ownerId !== session.user.id) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }
  return NextResponse.json(subscription);
}

export async function PATCH(request: Request, { params }: RouteParams) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const subscription = await loadSubscription(id);
  if (!subscription) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  const body = await request.json();
  const result = updateSubscriptionSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      {
        message: "Validation failed",
        errors: result.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const isOwner = subscription.business.ownerId === session.user.id;
  const admin = isAdmin(session);

  if (!admin && !isOwner) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  // Clients can only confirm their subscription (TRIALING -> ACTIVE)
  if (!admin) {
    const { status, planId, billingCycle } = result.data;
    if (planId || billingCycle) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }
    if (status && status !== SubscriptionStatus.ACTIVE) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }
  }

  const data: Record<string, unknown> = { ...result.data };
  if (result.data.status === SubscriptionStatus.CANCELED) {
    data.canceledAt = new Date();
  }
  if (
    result.data.status === SubscriptionStatus.ACTIVE &&
    subscription.status === SubscriptionStatus.TRIALING
  ) {
    // TODO: integrar pagamentos — por agora apenas marca como ACTIVE
    const periodEnd = new Date();
    periodEnd.setMonth(
      periodEnd.getMonth() + (subscription.billingCycle === "ANNUAL" ? 12 : 1)
    );
    data.currentPeriodEnd = periodEnd;
  }

  const updated = await prisma.subscription.update({
    where: { id },
    data,
    include: { plan: true, business: true },
  });
  return NextResponse.json(updated);
}
