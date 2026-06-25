import { z } from "zod";
import { Sector } from "@prisma/client";

export const planCodes = [
  "PRESENCA",
  "MINI_APP",
  "MINI_APP_PLUS",
  "BUSINESS_LOCAL",
  "PRO_GESTAO",
] as const;

export type PlanCode = (typeof planCodes)[number];

export const updatePlanSchema = z.object({
  name: z.string().min(2).max(120).optional(),
  monthlyPrice: z.number().int().min(0).optional(),
  annualPrice: z.number().int().min(0).optional(),
  setupPrice: z.number().int().min(0).optional(),
  setupPromo: z.boolean().optional(),
  description: z.string().max(2000).optional(),
  features: z.array(z.string().max(200)).max(50).optional(),
  active: z.boolean().optional(),
});

export type UpdatePlanInput = z.infer<typeof updatePlanSchema>;

export const recommendInputSchema = z.object({
  sector: z.nativeEnum(Sector),
  needsBookings: z.boolean().optional().default(false),
  multipleStaff: z.boolean().optional().default(false),
  weeklySchedule: z.boolean().optional().default(false),
  multipleLocationsOrRooms: z.boolean().optional().default(false),
  teamUsers: z.boolean().optional().default(false),
  payments: z.boolean().optional().default(false),
  externalIntegrations: z.boolean().optional().default(false),
  description: z.string().max(2000).optional(),
});

export type RecommendInput = z.infer<typeof recommendInputSchema>;

export interface Plan {
  id: string;
  code: PlanCode;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  setupPrice: number;
  setupPromo: boolean;
  description: string;
  features: string[];
  active: boolean;
}

export interface Recommendation {
  planCode: PlanCode;
  reason: string;
  quoteOnly: boolean;
}
