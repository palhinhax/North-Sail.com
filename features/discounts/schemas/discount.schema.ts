import { z } from "zod";
import { DiscountType } from "@prisma/client";

/**
 * Input para gerar um código de desconto (admin).
 *
 * Convenções de valores:
 * - PERCENT  → `value` é a percentagem (1–100).
 * - FIXED    → `value` é em cêntimos (ex.: 500 = 5,00 €).
 * - FREE_PERIOD / FREE_SETUP → `value` é ignorado.
 * - `durationMonths` → meses grátis (FREE_PERIOD) ou meses de desconto
 *   (PERCENT/FIXED). Ignorado em FREE_SETUP.
 */
export const createDiscountSchema = z
  .object({
    type: z.nativeEnum(DiscountType),
    value: z.number().int().min(0).default(0),
    durationMonths: z.number().int().min(1).max(60).nullable().optional(),
    appliesToPlanIds: z.array(z.string()).default([]),
    maxRedemptions: z.number().int().min(1).nullable().optional(),
    perAccountLimit: z.number().int().min(1).default(1),
    validUntil: z.coerce.date().nullable().optional(),
    notes: z.string().max(280).optional(),
  })
  .superRefine((v, ctx) => {
    if (v.type === "PERCENT" && (v.value < 1 || v.value > 100))
      ctx.addIssue({
        code: "custom",
        path: ["value"],
        message: "Percentagem entre 1 e 100.",
      });
    if (v.type === "FIXED" && v.value < 1)
      ctx.addIssue({
        code: "custom",
        path: ["value"],
        message: "Valor fixo deve ser positivo (cêntimos).",
      });
    if (v.type === "FREE_PERIOD" && !v.durationMonths)
      ctx.addIssue({
        code: "custom",
        path: ["durationMonths"],
        message: "Indica os meses grátis.",
      });
    if ((v.type === "PERCENT" || v.type === "FIXED") && !v.durationMonths)
      ctx.addIssue({
        code: "custom",
        path: ["durationMonths"],
        message: "Indica a duração do desconto.",
      });
  });

export const updateDiscountSchema = z.object({
  active: z.boolean().optional(),
  validUntil: z.coerce.date().nullable().optional(),
  notes: z.string().max(280).nullable().optional(),
});

export const redeemSchema = z.object({
  code: z.string().trim().min(3).max(40),
});

export type CreateDiscountInput = z.infer<typeof createDiscountSchema>;
export type UpdateDiscountInput = z.infer<typeof updateDiscountSchema>;
export type RedeemInput = z.infer<typeof redeemSchema>;

/** Forma serializada de um código de desconto para a UI de admin. */
export interface DiscountCodeDTO {
  id: string;
  code: string;
  type: DiscountType;
  value: number;
  durationMonths: number | null;
  appliesToPlanIds: string[];
  maxRedemptions: number | null;
  redemptionsUsed: number;
  perAccountLimit: number;
  validFrom: string;
  validUntil: string | null;
  active: boolean;
  notes: string | null;
  benefit: string;
  createdAt: string;
  createdBy: { id: string; name: string | null; email: string } | null;
}

/** Resposta de validação/resgate ao cliente. */
export interface RedeemResult {
  ok: boolean;
  reason?: string;
  preview?: string;
}
