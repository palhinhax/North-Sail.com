import {
  canRedeem,
  type RedeemableCode,
} from "@/features/discounts/lib/can-redeem";
import { effectSummary } from "@/features/discounts/lib/apply-discount";
import { DiscountType } from "@prisma/client";

const NOW = new Date("2026-06-26T12:00:00.000Z");

function makeCode(overrides: Partial<RedeemableCode> = {}): RedeemableCode {
  return {
    type: DiscountType.FREE_PERIOD,
    active: true,
    validFrom: new Date("2026-01-01T00:00:00.000Z"),
    validUntil: null,
    maxRedemptions: null,
    redemptionsUsed: 0,
    perAccountLimit: 1,
    appliesToPlanIds: [],
    ...overrides,
  };
}

const baseCtx = {
  now: NOW,
  businessRedemptionCount: 0,
  currentPlanId: "plan_1",
};

describe("canRedeem", () => {
  it("caminho feliz — FREE_PERIOD", () => {
    expect(canRedeem(makeCode(), baseCtx)).toEqual({ ok: true });
  });

  it("caminho feliz — PERCENT", () => {
    const code = makeCode({ type: DiscountType.PERCENT });
    expect(canRedeem(code, baseCtx).ok).toBe(true);
  });

  it("caminho feliz — FIXED", () => {
    const code = makeCode({ type: DiscountType.FIXED });
    expect(canRedeem(code, baseCtx).ok).toBe(true);
  });

  it("caminho feliz — FREE_SETUP", () => {
    const code = makeCode({ type: DiscountType.FREE_SETUP });
    expect(canRedeem(code, baseCtx).ok).toBe(true);
  });

  it("código inexistente", () => {
    const r = canRedeem(null, baseCtx);
    expect(r.ok).toBe(false);
    expect(r.reason).toBe("Código inválido ou inativo.");
  });

  it("código inativo", () => {
    const r = canRedeem(makeCode({ active: false }), baseCtx);
    expect(r.ok).toBe(false);
    expect(r.reason).toBe("Código inválido ou inativo.");
  });

  it("código expirado", () => {
    const code = makeCode({ validUntil: new Date("2026-06-01T00:00:00.000Z") });
    const r = canRedeem(code, baseCtx);
    expect(r.ok).toBe(false);
    expect(r.reason).toBe("Este código já expirou.");
  });

  it("código ainda não disponível", () => {
    const code = makeCode({ validFrom: new Date("2026-07-01T00:00:00.000Z") });
    expect(canRedeem(code, baseCtx).ok).toBe(false);
  });

  it("esgotado (maxRedemptions atingido)", () => {
    const code = makeCode({ maxRedemptions: 5, redemptionsUsed: 5 });
    const r = canRedeem(code, baseCtx);
    expect(r.ok).toBe(false);
    expect(r.reason).toBe("Este código já atingiu o limite de utilizações.");
  });

  it("limite por conta excedido", () => {
    const code = makeCode({ perAccountLimit: 1 });
    const r = canRedeem(code, { ...baseCtx, businessRedemptionCount: 1 });
    expect(r.ok).toBe(false);
    expect(r.reason).toBe("Já usaste este código.");
  });

  it("plano não elegível", () => {
    const code = makeCode({ appliesToPlanIds: ["plan_2"] });
    const r = canRedeem(code, { ...baseCtx, currentPlanId: "plan_1" });
    expect(r.ok).toBe(false);
    expect(r.reason).toBe("Este código não se aplica ao teu plano.");
  });

  it("plano elegível quando incluído na lista", () => {
    const code = makeCode({ appliesToPlanIds: ["plan_1", "plan_2"] });
    expect(canRedeem(code, baseCtx).ok).toBe(true);
  });

  it("maxRedemptions ilimitado (null) permite resgate", () => {
    const code = makeCode({ maxRedemptions: null, redemptionsUsed: 9999 });
    expect(canRedeem(code, baseCtx).ok).toBe(true);
  });
});

describe("effectSummary", () => {
  it("FREE_PERIOD", () => {
    expect(
      effectSummary({
        type: DiscountType.FREE_PERIOD,
        value: 0,
        durationMonths: 12,
      })
    ).toBe("12 meses grátis");
  });

  it("FREE_PERIOD singular", () => {
    expect(
      effectSummary({
        type: DiscountType.FREE_PERIOD,
        value: 0,
        durationMonths: 1,
      })
    ).toBe("1 mês grátis");
  });

  it("PERCENT", () => {
    expect(
      effectSummary({
        type: DiscountType.PERCENT,
        value: 50,
        durationMonths: 3,
      })
    ).toBe("-50% durante 3 meses");
  });

  it("FIXED converte cêntimos para euros", () => {
    expect(
      effectSummary({ type: DiscountType.FIXED, value: 500, durationMonths: 2 })
    ).toBe("-5,00 € durante 2 meses");
  });

  it("FREE_SETUP", () => {
    expect(
      effectSummary({
        type: DiscountType.FREE_SETUP,
        value: 0,
        durationMonths: null,
      })
    ).toBe("Setup grátis");
  });
});
