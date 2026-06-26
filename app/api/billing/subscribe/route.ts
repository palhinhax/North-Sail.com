import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { stripe } from "@/lib/stripe/server";
import { isSetupFree } from "@/features/plans/lib";
import {
  pendingCheckoutCoupon,
  consumeCheckoutDiscounts,
} from "@/features/discounts/api/redeem";

export const runtime = "nodejs";

export async function POST() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const business = await prisma.business.findUnique({
    where: { ownerId: session.user.id },
    include: {
      owner: { select: { email: true, name: true } },
      subscription: { include: { plan: true } },
    },
  });

  if (!business?.subscription) {
    return NextResponse.json({ message: "Sem subscrição" }, { status: 404 });
  }

  const { subscription } = business;
  const plan = subscription.plan;
  const isAnnual = subscription.billingCycle === "ANNUAL";
  const priceId = isAnnual
    ? plan.stripePriceAnnualId
    : plan.stripePriceMonthlyId;

  if (!priceId || !plan.stripeProductId) {
    return NextResponse.json(
      { message: "Planos ainda não sincronizados com a Stripe." },
      { status: 400 }
    );
  }

  // Ensure a Stripe customer for this business.
  let customerId = business.stripeCustomerId;
  if (!customerId) {
    const customer = await stripe.customers.create({
      email: business.owner?.email ?? undefined,
      name: business.name,
      metadata: { businessId: business.id },
    });
    customerId = customer.id;
    await prisma.business.update({
      where: { id: business.id },
      data: { stripeCustomerId: customerId },
    });
  }

  // One-time setup fee on the first invoice (unless the plan is on promo / free,
  // or a FREE_SETUP discount code waived it for this subscription).
  const addInvoiceItems: Stripe.SubscriptionCreateParams.AddInvoiceItem[] =
    isSetupFree(plan) || subscription.setupWaived
      ? []
      : [
          {
            price_data: {
              currency: "eur",
              product: plan.stripeProductId,
              unit_amount: plan.setupPrice,
            },
            quantity: 1,
          },
        ];

  // PERCENT/FIXED discount code redeemed but not yet applied → attach its coupon.
  const couponId = await pendingCheckoutCoupon(business.id);

  const sub = await stripe.subscriptions.create({
    customer: customerId,
    items: [{ price: priceId }],
    add_invoice_items: addInvoiceItems,
    ...(couponId ? { discounts: [{ coupon: couponId }] } : {}),
    payment_behavior: "default_incomplete",
    payment_settings: { save_default_payment_method: "on_subscription" },
    expand: ["latest_invoice.payment_intent"],
    metadata: { businessId: business.id, subscriptionId: subscription.id },
  });

  // Mark the discount redemptions used at checkout as consumed.
  await consumeCheckoutDiscounts(business.id);

  const invoice = sub.latest_invoice as Stripe.Invoice;
  const paymentIntent = invoice.payment_intent as Stripe.PaymentIntent;

  await prisma.subscription.update({
    where: { id: subscription.id },
    data: { stripeSubscriptionId: sub.id, status: "PENDING" },
  });

  return NextResponse.json({
    subscriptionId: subscription.id,
    clientSecret: paymentIntent?.client_secret ?? null,
  });
}
