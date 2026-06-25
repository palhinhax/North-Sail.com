import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY;

if (!key) {
  // Don't crash the build (page-data collection imports this module). A
  // placeholder keeps construction valid; real API calls only happen at runtime,
  // where STRIPE_SECRET_KEY must be set.
  console.warn("STRIPE_SECRET_KEY is not set — Stripe features are disabled.");
}

export const stripe = new Stripe(key || "sk_test_placeholder_build_only", {
  appInfo: { name: "NorthSail" },
});

/** True when a real Stripe key is configured (use to guard runtime calls). */
export const stripeReady = !!key;
