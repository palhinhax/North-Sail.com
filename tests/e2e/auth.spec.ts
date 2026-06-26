import { test, expect } from "@playwright/test";
import { completeOnboarding, makeUser } from "./helpers";

test.describe("Autenticação", () => {
  test("login com credenciais inválidas mostra erro", async ({ page }) => {
    await page.goto("/pt/auth/login");
    await page.getByLabel("Email").fill("naoexiste@example.com");
    await page.getByLabel("Password", { exact: true }).fill("errada123");
    await page.getByRole("button", { name: "Entrar" }).click();

    await expect(page.getByText(/Email ou password inválidos/i)).toBeVisible();
  });

  test("login é case-insensitive no email", async ({ page, context }) => {
    const user = makeUser();
    await completeOnboarding(page, user);

    // Log out by clearing cookies, then log in with an UPPERCASED email.
    await context.clearCookies();
    await page.goto("/pt/auth/login");
    await page.getByLabel("Email").fill(user.email.toUpperCase());
    await page.getByLabel("Password", { exact: true }).fill(user.password);
    await page.getByRole("button", { name: "Entrar" }).click();

    await page.waitForURL("**/dashboard", { timeout: 30_000 });
    await expect(page).toHaveURL(/\/dashboard/);
  });
});
