/**
 * Repõe os preços canónicos dos planos (em cêntimos) na base de dados.
 *
 * Regras: anual = mensal × 10 · setup visível · promoção desligada.
 *
 * Uso:  npx tsx scripts/reset-plan-prices.ts
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Valores canónicos em cêntimos (mensal, setup). Anual é calculado (× 10).
const PRICES: Record<string, { monthly: number; setup: number }> = {
  PRESENCA: { monthly: 500, setup: 4900 },
  MINI_APP: { monthly: 1500, setup: 9900 },
  MINI_APP_PLUS: { monthly: 2500, setup: 14900 },
  BUSINESS_LOCAL: { monthly: 3900, setup: 19900 },
  PRO_GESTAO: { monthly: 6900, setup: 29900 },
};

async function main() {
  for (const [code, p] of Object.entries(PRICES)) {
    const res = await prisma.plan.updateMany({
      where: { code },
      data: {
        monthlyPrice: p.monthly,
        annualPrice: p.monthly * 10,
        setupPrice: p.setup,
        setupPromo: false,
      },
    });
    const status = res.count > 0 ? "✅" : "⚠️ (não existe)";
    console.log(
      `${status} ${code}: mensal ${(p.monthly / 100).toFixed(2)}€ · anual ${(
        (p.monthly * 10) /
        100
      ).toFixed(2)}€ · setup ${(p.setup / 100).toFixed(2)}€`
    );
  }
}

main()
  .catch((e) => {
    console.error("❌", e.message);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
