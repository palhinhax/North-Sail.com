import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

/**
 * Marketing lead capture. Validates an inbound lead from the public lead form,
 * persists it to the database and (optionally) forwards a notification to an
 * external webhook so the team is alerted in real time.
 *
 * Set `LEAD_NOTIFY_WEBHOOK` (e.g. a Slack/Make/Zapier inbound URL or your own
 * email service endpoint) to receive each new lead as JSON. It is optional —
 * leads are always stored regardless.
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

/** Normalize empty strings to null for nullable columns. */
function nullable(v: string | undefined): string | null {
  return v && v.trim() ? v.trim() : null;
}

async function notify(payload: Record<string, unknown>): Promise<void> {
  const url = process.env.LEAD_NOTIFY_WEBHOOK;
  if (!url) return;
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    // A failed notification must never lose the lead — it's already persisted.
    console.error("[lead] notification webhook failed", err);
  }
}

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

  const d = parsed.data;

  try {
    const lead = await prisma.lead.create({
      data: {
        businessName: d.businessName,
        businessType: d.businessType,
        country: nullable(d.country),
        preferredLanguage: nullable(d.preferredLanguage),
        currentSite: nullable(d.currentSite),
        need: d.need,
        email: d.email,
        phone: nullable(d.phone),
        locale: nullable(d.locale),
      },
    });

    // Fire-and-forget notification; never block the response on it.
    await notify({
      id: lead.id,
      businessName: lead.businessName,
      businessType: lead.businessType,
      country: lead.country,
      need: lead.need,
      email: lead.email,
      phone: lead.phone,
      locale: lead.locale,
      createdAt: lead.createdAt,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[lead] failed to persist lead", err);
    return NextResponse.json(
      { error: "Could not save your request. Please try again." },
      { status: 500 }
    );
  }
}
