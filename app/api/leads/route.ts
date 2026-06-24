import { NextResponse } from "next/server";
import { z } from "zod";

/**
 * Marketing lead capture. Validates an inbound lead from the public lead form.
 *
 * NOTE: This endpoint currently validates and acknowledges the lead. Wire it to
 * email (e.g. transactional email), a CRM, or persist to the database as needed.
 * It is intentionally simple so the public marketing pages have a working form.
 */
const leadSchema = z.object({
  businessName: z.string().min(1).max(200),
  businessType: z.string().min(1).max(60),
  country: z.string().max(100).optional().or(z.literal("")),
  preferredLanguage: z.string().max(10).optional(),
  currentSite: z.string().max(300).optional().or(z.literal("")),
  need: z.string().min(1).max(2000),
  email: z.string().email(),
  phone: z.string().max(40).optional().or(z.literal("")),
  locale: z.string().max(10).optional(),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid lead", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  // Lead is valid. Hook your delivery mechanism here (email/CRM/DB).
  // Keeping logs minimal to avoid leaking PII into general logs.
  console.info("[lead] received", {
    businessType: parsed.data.businessType,
    locale: parsed.data.locale,
  });

  return NextResponse.json({ ok: true }, { status: 200 });
}
