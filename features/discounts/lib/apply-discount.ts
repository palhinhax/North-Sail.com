import { DiscountType } from "@prisma/client";

/** Dados mínimos de um código necessários para descrever o seu efeito. */
export interface DiscountEffectInput {
  type: DiscountType;
  value: number;
  durationMonths: number | null;
}

const cents = (n: number) => (n / 100).toFixed(2).replace(".", ",");

const months = (n: number) => (n === 1 ? "1 mês" : `${n} meses`);

/**
 * Frase pt-PT que resume o benefício de um código — usada na pré-visualização
 * ao cliente e no snapshot (`effectSummary`) da redemption.
 */
export function effectSummary(code: DiscountEffectInput): string {
  switch (code.type) {
    case DiscountType.FREE_PERIOD:
      return `${months(code.durationMonths ?? 0)} grátis`;
    case DiscountType.PERCENT:
      return `-${code.value}% durante ${months(code.durationMonths ?? 0)}`;
    case DiscountType.FIXED:
      return `-${cents(code.value)} € durante ${months(code.durationMonths ?? 0)}`;
    case DiscountType.FREE_SETUP:
      return "Setup grátis";
    default:
      return "Desconto";
  }
}

/** Soma `n` meses a uma data, preservando o final do mês quando possível. */
export function addMonths(date: Date, n: number): Date {
  const d = new Date(date.getTime());
  const targetMonth = d.getMonth() + n;
  d.setMonth(targetMonth);
  return d;
}
