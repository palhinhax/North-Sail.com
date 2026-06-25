import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { stripe } from "@/lib/stripe/server";
import { ensurePortalConfiguration } from "@/lib/stripe/portal-config";

export const runtime = "nodejs";

/**
 * Opens a Stripe Billing Portal session for the signed-in customer so they can
 * update their payment method, download invoices or cancel. Pass
 * `{ flow: "cancel" }` to deep-link straight into the cancellation flow.
 */
export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const business = await prisma.business.findUnique({
    where: { ownerId: session.user.id },
    include: { subscription: true },
  });

  if (!business?.stripeCustomerId) {
    return NextResponse.json(
      { message: "Ainda não há dados de faturação para gerir." },
      { status: 400 }
    );
  }

  let flow: string | undefined;
  try {
    const body = await req.json();
    flow = body?.flow;
  } catch {
    // no body — open the portal home
  }

  const returnUrl = `${new URL(req.url).origin}/dashboard/subscription`;

  const params: Stripe.BillingPortal.SessionCreateParams = {
    customer: business.stripeCustomerId,
    return_url: returnUrl,
    configuration: await ensurePortalConfiguration(),
  };

  if (flow === "cancel" && business.subscription?.stripeSubscriptionId) {
    params.flow_data = {
      type: "subscription_cancel",
      subscription_cancel: {
        subscription: business.subscription.stripeSubscriptionId,
      },
    };
  }

  try {
    const portal = await stripe.billingPortal.sessions.create(params);
    return NextResponse.json({ url: portal.url });
  } catch (e) {
    return NextResponse.json(
      { message: (e as Error).message || "Não foi possível abrir o portal." },
      { status: 500 }
    );
  }
}
