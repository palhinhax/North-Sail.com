import { Page, expect } from "@playwright/test";

export function uniqueEmail(prefix = "e2e") {
  return `${prefix}+${Date.now()}${Math.floor(Math.random() * 1000)}@example.com`;
}

export interface NewUser {
  email: string;
  password: string;
  accountName: string;
  businessName: string;
}

export function makeUser(overrides: Partial<NewUser> = {}): NewUser {
  return {
    email: uniqueEmail(),
    password: "Passw0rd!test",
    accountName: "Cliente E2E",
    businessName: `Negócio E2E ${Date.now()}`,
    ...overrides,
  };
}

/**
 * Runs the public onboarding wizard end-to-end, creating an account and landing
 * on the dashboard (signed in). Targets the Portuguese route directly so the
 * selectors below stay deterministic regardless of `Accept-Language` (the bare
 * `/comecar` now redirects to the negotiated locale).
 */
export async function completeOnboarding(
  page: Page,
  user: NewUser,
  opts: { sector?: string } = {}
) {
  const sector = opts.sector ?? "Restaurante";

  await page.goto("/pt/comecar");

  // Step 1 — sector
  await page.getByRole("button", { name: sector, exact: true }).click();
  await page.getByRole("button", { name: "Continuar" }).click();

  // Step 2 — needs (skip toggles) → go to plan
  await page.getByRole("button", { name: "Ver plano recomendado" }).click();

  // Step 3 — plan recommendation → continue
  await page.getByRole("button", { name: "Continuar" }).click();

  // Step 4 — account details
  await page.getByLabel("Nome do negócio").fill(user.businessName);
  await page.getByLabel("O seu nome").fill(user.accountName);
  await page.getByLabel("Email").fill(user.email);
  await page.getByLabel("Password", { exact: true }).fill(user.password);

  await page.getByRole("button", { name: "Criar conta e começar" }).click();

  // Lands on the dashboard, signed in.
  await page.waitForURL("**/dashboard", { timeout: 30_000 });
}

/**
 * Fills the Stripe Payment Element (test mode) with the success test card.
 * Stripe renders fields inside nested iframes — we target by placeholder.
 */
export async function fillStripeTestCard(page: Page) {
  // The Payment Element lives in one or more Stripe iframes.
  const stripeFrame = page
    .frameLocator(
      'iframe[title*="payment" i], iframe[name^="__privateStripeFrame"]'
    )
    .first();

  await stripeFrame
    .getByPlaceholder("1234 1234 1234 1234")
    .fill("4242424242424242");
  await stripeFrame.getByPlaceholder("MM / YY").fill("12 / 34");
  await stripeFrame.getByPlaceholder("CVC").fill("123");

  // Postal code / country may or may not appear depending on config.
  const zip = stripeFrame.getByPlaceholder(/ZIP|Postal|Código/i);
  if (await zip.count()) {
    await zip.first().fill("1000-001");
  }
}

export async function expectLoggedIn(page: Page) {
  await expect(page).toHaveURL(/\/dashboard/);
}

export const ADMIN = {
  email: process.env.E2E_ADMIN_EMAIL || "admin@northsail.com",
  password: process.env.E2E_ADMIN_PASSWORD || "password123",
};

/** Logs in via the credentials form. */
export async function login(page: Page, email: string, password: string) {
  await page.goto("/auth/login");
  await page.getByLabel("Email").fill(email);
  await page.getByLabel("Password", { exact: true }).fill(password);
  await page.getByRole("button", { name: "Entrar" }).click();
}

/** Logs in as the admin and lands on the admin area. */
export async function loginAsAdmin(page: Page) {
  await login(page, ADMIN.email, ADMIN.password);
  await page.waitForURL(/\/(admin|dashboard)/, { timeout: 30_000 });
  await page.goto("/admin/requests");
}
