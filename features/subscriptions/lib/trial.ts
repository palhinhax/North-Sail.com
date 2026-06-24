import type { Subscription } from "../schemas";

export function getTrialDaysLeft(
  subscription: Pick<Subscription, "trialEndsAt" | "status"> | null | undefined
): number | null {
  if (!subscription?.trialEndsAt) return null;
  if (subscription.status !== "TRIALING") return null;
  const end = new Date(subscription.trialEndsAt).getTime();
  const now = Date.now();
  const ms = end - now;
  if (ms <= 0) return 0;
  return Math.ceil(ms / (1000 * 60 * 60 * 24));
}

export function buildTrialEnd(now: Date = new Date()): Date {
  return new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
}
