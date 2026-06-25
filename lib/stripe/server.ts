import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY;

if (!key) {
  // Don't throw at import time in build; routes that need it will fail clearly.
  console.warn("STRIPE_SECRET_KEY is not set — Stripe features are disabled.");
}

export const stripe = new Stripe(key ?? "", {
  appInfo: { name: "NorthSail" },
});
