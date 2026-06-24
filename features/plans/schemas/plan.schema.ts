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
  description: string;
  features: string[];
  active: boolean;
}

export interface Recommendation {
  planCode: PlanCode;
  reason: string;
  quoteOnly: boolean;
}
