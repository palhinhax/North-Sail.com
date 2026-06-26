import { DiscountType } from "@prisma/client";

/**
 * Estado de um código relevante para a decisão de resgate. Mantido puro
 * (sem Prisma/Stripe) para ser a fonte única de verdade e fácil de testar.
 */
export interface RedeemableCode {
  type: DiscountType;
  active: boolean;
  validFrom: Date;
  validUntil: Date | null;
  maxRedemptions: number | null;
  redemptionsUsed: number;
  perAccountLimit: number;
  appliesToPlanIds: string[];
}

export interface CanRedeemContext {
  now: Date;
  /** Quantas vezes este negócio já resgatou ESTE código. */
  businessRedemptionCount: number;
  /** Plano atual da subscrição do negócio (null se ainda não tiver). */
  currentPlanId: string | null;
}

export interface CanRedeemResult {
  ok: boolean;
  reason?: string;
}

const OK: CanRedeemResult = { ok: true };

/**
 * Decide se `code` pode ser resgatado por um negócio, na ordem definida pelo
 * produto. Devolve uma mensagem pt-PT pronta a mostrar quando `ok` é falso.
 */
export function canRedeem(
  code: RedeemableCode | null | undefined,
  ctx: CanRedeemContext
): CanRedeemResult {
  // 1. Existe e está ativo.
  if (!code || !code.active) {
    return { ok: false, reason: "Código inválido ou inativo." };
  }

  // 2. Dentro da janela de validade.
  if (ctx.now < code.validFrom) {
    return { ok: false, reason: "Este código ainda não está disponível." };
  }
  if (code.validUntil && ctx.now > code.validUntil) {
    return { ok: false, reason: "Este código já expirou." };
  }

  // 3. Limite global de utilizações.
  if (
    code.maxRedemptions !== null &&
    code.redemptionsUsed >= code.maxRedemptions
  ) {
    return {
      ok: false,
      reason: "Este código já atingiu o limite de utilizações.",
    };
  }

  // 4. Limite por conta (FREE_PERIOD: impede uma 2.ª oferta do mesmo código).
  if (ctx.businessRedemptionCount >= code.perAccountLimit) {
    return { ok: false, reason: "Já usaste este código." };
  }

  // 5. Elegibilidade de plano.
  if (code.appliesToPlanIds.length > 0) {
    if (
      !ctx.currentPlanId ||
      !code.appliesToPlanIds.includes(ctx.currentPlanId)
    ) {
      return { ok: false, reason: "Este código não se aplica ao teu plano." };
    }
  }

  return OK;
}
