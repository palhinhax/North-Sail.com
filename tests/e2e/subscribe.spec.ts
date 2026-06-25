import { test, expect } from "@playwright/test";
import { completeOnboarding, fillStripeTestCard, makeUser } from "./helpers";

/**
 * Full money path: onboard → confirm subscription → pay with the Stripe test
 * card → subscription becomes ACTIVE.
 *
 * Requires the dev server with Stripe TEST keys configured and plans synced
 * (scripts/stripe-sync-plans.ts). The subscription page auto-syncs on return,
 * so a local Stripe webhook is NOT required for this test.
 */
test("o cliente confirma e paga a subscrição (cartão de teste)", async ({
  page,
}) => {
  const user = makeUser();
  await completeOnboarding(page, user);

  await page.goto("/dashboard/subscription");

  // Start the payment flow.
  await page
    .getByRole("button", { name: /Confirmar subscrição e pagar/i })
    .click();

  // Stripe Payment Element appears; fill the success test card.
  await fillStripeTestCard(page);

  await page.getByRole("button", { name: /^Pagar/ }).click();

  // Returns to the subscription page confirmed.
  await page.waitForURL(/\/dashboard\/subscription\?status=pago/, {
    timeout: 45_000,
  });
  await expect(page.getByText(/Pagamento recebido|Ativa/i).first()).toBeVisible(
    {
      timeout: 30_000,
    }
  );
});
