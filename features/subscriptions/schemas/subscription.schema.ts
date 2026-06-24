import { z } from "zod";
import { SubscriptionStatus, BillingCycle } from "@prisma/client";
import type { Plan } from "@/features/plans/schemas";

export const updateSubscriptionSchema = z.object({
  planId: z.string().optional(),
  status: z.nativeEnum(SubscriptionStatus).optional(),
  billingCycle: z.nativeEnum(BillingCycle).optional(),
});

export type UpdateSubscriptionInput = z.infer<typeof updateSubscriptionSchema>;

export interface Subscription {
  id: string;
  businessId: string;
  planId: string;
  status: SubscriptionStatus;
  billingCycle: BillingCycle;
  trialEndsAt: string | null;
  currentPeriodEnd: string | null;
  startedAt: string;
  canceledAt: string | null;
  createdAt: string;
  updatedAt: string;
  plan?: Plan;
}
