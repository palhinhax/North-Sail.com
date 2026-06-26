import "server-only";
import { DiscountType, type DiscountCode } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { stripe, stripeReady } from "@/lib/stripe/server";
import { normalizeCode } from "../lib/generate-code";
import { canRedeem, type RedeemableCode } from "../lib/can-redeem";
import { addMonths, effectSummary } from "../lib/apply-discount";
import type { RedeemResult } from "../schemas";

function toRedeemable(code: DiscountCode): RedeemableCode {
  return {
    type: code.type,
    active: code.active,
    validFrom: code.validFrom,
    validUntil: code.validUntil,
    maxRedemptions: code.maxRedemptions,
    redemptionsUsed: code.redemptionsUsed,
    perAccountLimit: code.perAccountLimit,
    appliesToPlanIds: code.appliesToPlanIds,
  };
}

/** Carrega o código + o contexto do negócio e corre a validação pura. */
async function load(ownerId: string, rawCode: string) {
  const normalized = normalizeCode(rawCode);
  const [code, business] = await Promise.all([
    prisma.discountCode.findUnique({ where: { code: normalized } }),
    prisma.business.findUnique({
      where: { ownerId },
      include: { subscription: true },
    }),
  ]);

  if (!business) {
    return { error: "Sem negócio associado à conta." as const };
  }

  const businessRedemptionCount = code
    ? await prisma.discountRedemption.count({
        where: { codeId: code.id, businessId: business.id },
      })
    : 0;

  const check = canRedeem(code ? toRedeemable(code) : null, {
    now: new Date(),
    businessRedemptionCount,
    currentPlanId: business.subscription?.planId ?? null,
  });

  return { code, business, check };
}

/**
 * Valida um código para o negócio do utilizador autenticado e devolve uma
 * pré-visualização do efeito. Não aplica nada nem toca em contadores.
 */
export async function previewRedeem(
  ownerId: string,
  rawCode: string
): Promise<RedeemResult> {
  const res = await load(ownerId, rawCode);
  if ("error" in res) return { ok: false, reason: res.error };
  if (!res.check.ok || !res.code) {
    return { ok: false, reason: res.check.reason };
  }
  return { ok: true, preview: effectSummary(res.code) };
}

/**
 * Garante que existe um cupão Stripe para um código PERCENT/FIXED, criando-o
 * (e guardando o id) na primeira utilização e reutilizando-o depois.
 */
async function ensureStripeCoupon(code: DiscountCode): Promise<string> {
  if (code.stripeCouponId) return code.stripeCouponId;
  if (!stripeReady) {
    throw new Error("Stripe não está configurada.");
  }

  const duration_in_months = code.durationMonths ?? 1;
  const coupon =
    code.type === DiscountType.PERCENT
      ? await stripe.coupons.create({
          percent_off: code.value,
          duration: "repeating",
          duration_in_months,
          name: code.code,
        })
      : await stripe.coupons.create({
          amount_off: code.value,
          currency: "eur",
          duration: "repeating",
          duration_in_months,
          name: code.code,
        });

  await prisma.discountCode.update({
    where: { id: code.id },
    data: { stripeCouponId: coupon.id },
  });
  return coupon.id;
}

/**
 * Resgata um código para o negócio do utilizador. Atómico: o contador só é
 * incrementado se ainda houver utilizações disponíveis, e a redemption é única
 * por (código, negócio).
 */
export async function redeemCode(
  ownerId: string,
  rawCode: string
): Promise<RedeemResult> {
  const res = await load(ownerId, rawCode);
  if ("error" in res) return { ok: false, reason: res.error };
  if (!res.check.ok || !res.code) {
    return { ok: false, reason: res.check.reason };
  }
  const { code, business } = res;

  if (!business.subscription) {
    return {
      ok: false,
      reason: "Precisas de um plano escolhido antes de usar o código.",
    };
  }

  // PERCENT/FIXED: o cupão é uma chamada externa — feita fora da transação
  // para não a manter aberta enquanto fala com a Stripe. Fica guardado no
  // código e reutilizado no checkout.
  if (code.type === DiscountType.PERCENT || code.type === DiscountType.FIXED) {
    await ensureStripeCoupon(code);
  }

  const summary = effectSummary(code);

  try {
    await prisma.$transaction(async (tx) => {
      // Reivindica uma utilização de forma atómica (anti-corrida).
      const claimed = await tx.discountCode.updateMany({
        where: {
          id: code.id,
          active: true,
          OR: [
            { maxRedemptions: null },
            { redemptionsUsed: { lt: code.maxRedemptions ?? 0 } },
          ],
        },
        data: { redemptionsUsed: { increment: 1 } },
      });
      if (claimed.count !== 1) {
        throw new Error("Código esgotado.");
      }

      let appliedUntil: Date | null = null;
      let consumed = false;

      if (code.type === DiscountType.FREE_PERIOD) {
        // Oferta interna: empurra o período, nunca toca na Stripe.
        const now = new Date();
        const current = business.subscription!.currentPeriodEnd;
        const base = current && current > now ? current : now;
        appliedUntil = addMonths(base, code.durationMonths ?? 0);
        await tx.subscription.update({
          where: { id: business.subscription!.id },
          data: {
            currentPeriodEnd: appliedUntil,
            isComped: true,
            // Sai do trial: passa a ativo (valor real do enum).
            status: "ACTIVE",
          },
        });
        consumed = true;
      } else if (code.type === DiscountType.FREE_SETUP) {
        // Aplicado no checkout (/api/billing/subscribe).
        await tx.subscription.update({
          where: { id: business.subscription!.id },
          data: { setupWaived: true },
        });
        consumed = false;
      } else {
        // PERCENT/FIXED: o cupão é aplicado no checkout.
        consumed = false;
      }

      await tx.discountRedemption.create({
        data: {
          codeId: code.id,
          businessId: business.id,
          effectType: code.type,
          effectSummary: summary,
          appliedUntil,
          consumed,
        },
      });
    });
  } catch (err) {
    const message =
      err instanceof Error && err.message === "Código esgotado."
        ? "Este código já atingiu o limite de utilizações."
        : "Não foi possível resgatar o código.";
    return { ok: false, reason: message };
  }

  return { ok: true, preview: summary };
}

/**
 * Cupão Stripe a aplicar no checkout deste negócio, vindo de uma redemption
 * PERCENT/FIXED ainda não consumida (ou null se não houver). Não marca nada.
 */
export async function pendingCheckoutCoupon(
  businessId: string
): Promise<string | null> {
  const redemption = await prisma.discountRedemption.findFirst({
    where: {
      businessId,
      consumed: false,
      effectType: { in: [DiscountType.PERCENT, DiscountType.FIXED] },
    },
    orderBy: { redeemedAt: "asc" },
    include: { code: true },
  });
  return redemption?.code.stripeCouponId ?? null;
}

/**
 * Marca como consumidas as redemptions usadas no checkout (PERCENT/FIXED e
 * FREE_SETUP). Chamar depois de criar a subscrição na Stripe com sucesso.
 */
export async function consumeCheckoutDiscounts(
  businessId: string
): Promise<void> {
  await prisma.discountRedemption.updateMany({
    where: {
      businessId,
      consumed: false,
      effectType: {
        in: [DiscountType.PERCENT, DiscountType.FIXED, DiscountType.FREE_SETUP],
      },
    },
    data: { consumed: true },
  });
}
