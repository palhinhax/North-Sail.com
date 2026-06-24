import { z } from "zod";
import { Sector } from "@prisma/client";
import { recommendInputSchema } from "@/features/plans/schemas";

export const onboardingSchema = z.object({
  business: z.object({
    name: z.string().min(2, "Nome do negócio").max(120),
    sector: z.nativeEnum(Sector),
    description: z.string().max(1000).optional(),
    phone: z.string().max(40).optional(),
    whatsapp: z.string().max(40).optional(),
    domainDesired: z.string().max(120).optional(),
  }),
  answers: recommendInputSchema,
  account: z.object({
    name: z.string().min(2, "Nome").max(120),
    email: z.string().email("Email inválido"),
    password: z.string().min(8, "Mínimo 8 caracteres"),
  }),
  planCode: z.string().optional(),
  billingCycle: z.enum(["MONTHLY", "ANNUAL"]).default("MONTHLY"),
});

export type OnboardingInput = z.infer<typeof onboardingSchema>;
