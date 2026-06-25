/**
 * Central pricing rules for NorthSail plans.
 *
 * - Annual price = monthly × 10 (pay 10 months, get 12 → ~2 months free).
 * - Setup is always shown; a per-plan promotion can make the effective setup
 *   free while still displaying the original (struck-through) price.
 */

export const ANNUAL_MONTHS = 10;

/** Annual price (cents) derived from the monthly price (cents). */
export function annualFromMonthly(monthlyCents: number): number {
  return monthlyCents * ANNUAL_MONTHS;
}

export interface SetupPricing {
  setupPrice: number;
  setupPromo: boolean;
}

/** What the client actually pays for setup right now (cents). */
export function effectiveSetupPrice(plan: SetupPricing): number {
  return plan.setupPromo ? 0 : plan.setupPrice;
}

export function isSetupFree(plan: SetupPricing): boolean {
  return plan.setupPromo || plan.setupPrice === 0;
}
