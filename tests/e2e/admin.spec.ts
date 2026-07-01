import { test, expect, type BrowserContext } from "@playwright/test";
import { completeOnboarding, loginAsAdmin, makeUser } from "./helpers";

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Admin side. Requires an admin account — defaults to the seeded
 * admin@northsail.com / password123 (override with E2E_ADMIN_EMAIL /
 * E2E_ADMIN_PASSWORD). Run `pnpm db:seed` first if needed.
 */
test.describe("Admin", () => {
  // Each test creates its own client first (so there is data to manage).
  async function seedClient(context: BrowserContext) {
    const user = makeUser();
    const page = await context.newPage();
    await completeOnboarding(page, user);
    await page.close();
    return user;
  }

  test("admin encontra o pedido do cliente, muda o estado e responde", async ({
    browser,
  }) => {
    const clientCtx = await browser.newContext();
    const user = await seedClient(clientCtx);
    await clientCtx.close();

    const adminCtx = await browser.newContext();
    const page = await adminCtx.newPage();
    await loginAsAdmin(page);

    // Find the client's request via search.
    await page.goto("/admin/requests");
    await page
      .getByPlaceholder(/Procurar cliente, email ou pedido/i)
      .fill(user.businessName);
    await page
      .getByRole("link", {
        name: new RegExp(
          `Ver App para ${escapeRegExp(user.businessName)}`,
          "i"
        ),
      })
      .click();
    await page.waitForURL("**/admin/requests/**");

    // Change status + add a note visible in the client's timeline.
    const note = `Nota admin ${Date.now()}`;
    await page
      .getByLabel("Estado")
      .selectOption({ label: "Em desenvolvimento" });
    await page.getByLabel("Nota").fill(note);
    await page.getByRole("button", { name: "Atualizar estado" }).click();
    await expect(page.getByText(note)).toBeVisible({ timeout: 15_000 });

    // Reply in the conversation.
    const reply = `Resposta admin ${Date.now()}`;
    await page.getByPlaceholder(/Escreve uma mensagem/i).fill(reply);
    await page.getByRole("button", { name: "Enviar" }).click();
    await expect(page.getByText(reply)).toBeVisible();

    // Set estimated hours.
    await page.getByLabel("Horas estimadas").fill("8");
    await page.getByRole("button", { name: "Guardar" }).click();

    await adminCtx.close();
  });

  test("admin vê o cliente e os cartões de site/domínio", async ({
    browser,
  }) => {
    const clientCtx = await browser.newContext();
    const user = await seedClient(clientCtx);
    await clientCtx.close();

    const adminCtx = await browser.newContext();
    const page = await adminCtx.newPage();
    await loginAsAdmin(page);

    await page.goto("/admin/clients");
    await page.getByPlaceholder(/Pesquisar clientes/i).fill(user.businessName);
    await page
      .getByRole("link", {
        name: new RegExp(`Ver ${escapeRegExp(user.businessName)}`, "i"),
      })
      .click();
    await page.waitForURL("**/admin/clients/**");

    await expect(
      page.getByRole("heading", { name: "Site & domínio" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Domínio na Vercel" })
    ).toBeVisible();

    await adminCtx.close();
  });

  test("admin abre a gestão de planos e o editor de um plano", async ({
    page,
  }) => {
    await loginAsAdmin(page);
    await page.goto("/admin/plans");

    await expect(
      page.getByRole("heading", { name: /Gest[ãa]o de planos/i })
    ).toBeVisible();
    await expect(page.getByText("Subscrições ativas")).toBeVisible();

    // Open the edit dialog of the first plan, then cancel (no side effects).
    await page.getByRole("button", { name: "Editar" }).first().click();
    await expect(
      page.getByRole("heading", { name: /Editar plano/i })
    ).toBeVisible();
    await page.getByRole("button", { name: "Cancelar" }).click();
  });
});
