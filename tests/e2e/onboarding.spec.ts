import { test, expect } from "@playwright/test";
import { completeOnboarding, makeUser } from "./helpers";

test.describe("Onboarding do cliente", () => {
  test("um utilizador novo cria conta e chega ao dashboard com pedido inicial", async ({
    page,
  }) => {
    const user = makeUser();

    await completeOnboarding(page, user);

    // Dashboard greets the business and shows the plan.
    await expect(
      page.getByRole("heading", {
        name: new RegExp(user.businessName, "i"),
        level: 1,
      })
    ).toBeVisible();

    // Initial request was created → visible in "Os meus pedidos".
    await page.goto("/dashboard/requests");
    await expect(
      page.getByText(new RegExp(`App para ${user.businessName}`, "i"))
    ).toBeVisible();
  });

  test("o cliente consegue navegar pelas áreas principais", async ({
    page,
  }) => {
    const user = makeUser();
    await completeOnboarding(page, user);

    for (const path of [
      "/dashboard/preview",
      "/dashboard/requests",
      "/dashboard/subscription",
      "/dashboard/business",
    ]) {
      await page.goto(path);
      await expect(page.locator("h1")).toBeVisible();
    }
  });

  test("o cliente consegue criar um novo pedido pela conversa", async ({
    page,
  }) => {
    const user = makeUser();
    await completeOnboarding(page, user);

    await page.goto("/dashboard/requests");
    await page
      .getByText(new RegExp(`App para ${user.businessName}`, "i"))
      .click();

    await page.waitForURL("**/dashboard/requests/**");
    const msg = `Mensagem de teste ${Date.now()}`;
    await page.getByPlaceholder(/Escreve uma mensagem/i).fill(msg);
    await page.getByRole("button", { name: "Enviar" }).click();

    await expect(page.getByText(msg)).toBeVisible();
  });
});
