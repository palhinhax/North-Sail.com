import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { stripe } from "@/lib/stripe/server";

export const runtime = "nodejs";

export async function POST() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const business = await prisma.business.findUnique({
    where: { ownerId: session.user.id },
    include: { subscription: true },
  });
  const stripeSubId = business?.subscription?.stripeSubscriptionId;
  if (!stripeSubId) {
    return NextResponse.json(
      { message: "Sem subscrição ativa na Stripe." },
      { status: 400 }
    );
  }

  // Cancel at the end of the current paid period (keeps access until then).
  const sub = await stripe.subscriptions.update(stripeSubId, {
    cancel_at_period_end: true,
  });

  return NextResponse.json({
    cancelAtPeriodEnd: sub.cancel_at_period_end,
    currentPeriodEnd: sub.current_period_end,
  });
}
