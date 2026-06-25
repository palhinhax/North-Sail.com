import { z } from "zod";
import { Sector } from "@prisma/client";

export const updateBusinessSchema = z.object({
  name: z.string().min(2).max(120).optional(),
  sector: z.nativeEnum(Sector).optional(),
  description: z.string().max(2000).optional().nullable(),
  phone: z.string().max(40).optional().nullable(),
  whatsapp: z.string().max(40).optional().nullable(),
  address: z.string().max(200).optional().nullable(),
  domainDesired: z.string().max(120).optional().nullable(),
  logoUrl: z.string().url().max(500).optional().nullable(),
  // Admin-only (gated in the API route)
  customDomain: z.string().max(255).optional().nullable(),
  siteUrl: z.string().url().max(500).optional().nullable(),
  sitePublished: z.boolean().optional(),
  vercelProjectId: z.string().max(120).optional().nullable(),
});

export type UpdateBusinessInput = z.infer<typeof updateBusinessSchema>;

/** Fields only an admin may change. */
export const ADMIN_ONLY_BUSINESS_FIELDS = [
  "customDomain",
  "siteUrl",
  "sitePublished",
  "vercelProjectId",
] as const;

export interface Business {
  id: string;
  name: string;
  sector: Sector;
  slug: string;
  description: string | null;
  phone: string | null;
  whatsapp: string | null;
  address: string | null;
  logoUrl: string | null;
  domainDesired: string | null;
  customDomain: string | null;
  siteUrl: string | null;
  sitePublished: boolean;
  vercelProjectId: string | null;
  ownerId: string;
  createdAt: string;
}
