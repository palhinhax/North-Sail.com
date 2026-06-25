import type Stripe from "stripe";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe/server";

// Bump the version suffix to force a fresh configuration after changing the
// feature set below (old configs are matched/reused by this marker).
const MARKER = "northsail-portal-v1";

/**
 * Returns a Stripe Billing Portal configuration id, creating one on first use
 * so the portal works without any manual setup in the Stripe dashboard.
 *
 * Enables: update payment method, invoice history, edit customer details and
 * self-service cancellation. If plans are synced to Stripe (see
 * scripts/stripe-sync-plans.ts) it also enables plan / billing-cycle switching.
 */
export async function ensurePortalConfiguration(): Promise<string> {
  const existing = await stripe.billingPortal.configurations.list({
    limit: 100,
  });
  const mine = existing.data.find(
    (c) => c.active && c.metadata?.northsail === MARKER
  );
  if (mine) return mine.id;

  const products = await planSwitchProducts();

  const features: Stripe.BillingPortal.ConfigurationCreateParams.Features = {
    payment_method_update: { enabled: true },
    invoice_history: { enabled: true },
    customer_update: {
      enabled: true,
      allowed_updates: ["email", "address", "name", "phone"],
    },
    subscription_cancel: {
      enabled: true,
      mode: "at_period_end",
      cancellation_reason: {
        enabled: true,
        options: [
          "too_expensive",
          "missing_features",
          "switched_service",
          "unused",
          "other",
        ],
      },
    },
  };

  if (products.length > 0) {
    features.subscription_update = {
      enabled: true,
      default_allowed_updates: ["price"],
      proration_behavior: "create_prorations",
      products,
    };
  }

  const cfg = await stripe.billingPortal.configurations.create({
    business_profile: { headline: "NorthSail — gestão da subscrição" },
    features,
    metadata: { northsail: MARKER },
  });
  return cfg.id;
}

/** Catalogue of synced plans the customer may switch between (plan + cycle). */
async function planSwitchProducts(): Promise<
  { product: string; prices: string[] }[]
> {
  const plans = await prisma.plan.findMany({
    where: { active: true, stripeProductId: { not: null } },
  });
  return plans
    .map((p) => {
      const prices = [p.stripePriceMonthlyId, p.stripePriceAnnualId].filter(
        (x): x is string => !!x
      );
      return p.stripeProductId && prices.length
        ? { product: p.stripeProductId, prices }
        : null;
    })
    .filter((x): x is { product: string; prices: string[] } => !!x);
}

/** Whether plan / cycle changes can be done in the portal (vs. via a request). */
export async function planSelfServeEnabled(): Promise<boolean> {
  const count = await prisma.plan.count({
    where: { active: true, stripeProductId: { not: null } },
  });
  return count > 0;
}
