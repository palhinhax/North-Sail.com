/**
 * Cria/atualiza os produtos e preços recorrentes na Stripe a partir dos planos
 * da base de dados e guarda os IDs (stripeProductId, stripePriceMonthlyId,
 * stripePriceAnnualId) em cada plano.
 *
 * Regra: anual = mensal × 10. O setup NÃO é um preço recorrente — é cobrado
 * como item único na primeira fatura (ver /api/billing/subscribe).
 *
 * Uso:  npx tsx scripts/stripe-sync-plans.ts
 */
import { PrismaClient } from "@prisma/client";
import Stripe from "stripe";

const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "");

async function ensurePrice(
  productId: string,
  amount: number,
  interval: "month" | "year"
) {
  const price = await stripe.prices.create({
    product: productId,
    currency: "eur",
    unit_amount: amount,
    recurring: { interval },
  });
  return price.id;
}

async function main() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("Falta STRIPE_SECRET_KEY no ambiente (.env).");
  }

  const plans = await prisma.plan.findMany();

  for (const plan of plans) {
    // Product
    let productId = plan.stripeProductId;
    if (!productId) {
      const product = await stripe.products.create({
        name: `NorthSail — ${plan.name}`,
        metadata: { planCode: plan.code },
      });
      productId = product.id;
    }

    // Prices (criados se ainda não existirem)
    const monthlyId =
      plan.stripePriceMonthlyId ||
      (await ensurePrice(productId, plan.monthlyPrice, "month"));
    const annualId =
      plan.stripePriceAnnualId ||
      (await ensurePrice(productId, plan.monthlyPrice * 10, "year"));

    await prisma.plan.update({
      where: { id: plan.id },
      data: {
        stripeProductId: productId,
        stripePriceMonthlyId: monthlyId,
        stripePriceAnnualId: annualId,
      },
    });

    console.log(`✅ ${plan.code}: product ${productId}`);
    console.log(`   mensal ${monthlyId} · anual ${annualId}`);
  }

  console.log(
    "\nFeito. Se mudares preços, apaga os IDs do plano e volta a correr para gerar novos."
  );
}

main()
  .catch((e) => {
    console.error("❌", e.message);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
