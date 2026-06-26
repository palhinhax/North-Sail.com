import { NextResponse } from "next/server";
import type { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { createDiscountSchema } from "@/features/discounts/schemas";
import { generateDiscountCode, effectSummary } from "@/features/discounts/lib";

export const runtime = "nodejs";

type DiscountWithCreator = Prisma.DiscountCodeGetPayload<{
  include: {
    createdBy: { select: { id: true; name: true; email: true } };
  };
}>;

function toDTO(c: DiscountWithCreator) {
  return {
    id: c.id,
    code: c.code,
    type: c.type,
    value: c.value,
    durationMonths: c.durationMonths,
    appliesToPlanIds: c.appliesToPlanIds,
    maxRedemptions: c.maxRedemptions,
    redemptionsUsed: c.redemptionsUsed,
    perAccountLimit: c.perAccountLimit,
    validFrom: c.validFrom.toISOString(),
    validUntil: c.validUntil?.toISOString() ?? null,
    active: c.active,
    notes: c.notes,
    benefit: effectSummary(c),
    createdAt: c.createdAt.toISOString(),
    createdBy: c.createdBy,
  };
}

// GET /api/admin/discounts — lista de códigos.
export async function GET() {
  const guard = await requireAdmin();
  if ("error" in guard) return guard.error;

  const codes = await prisma.discountCode.findMany({
    orderBy: { createdAt: "desc" },
    include: { createdBy: { select: { id: true, name: true, email: true } } },
  });

  return NextResponse.json(codes.map(toDTO));
}

// POST /api/admin/discounts — gera um código único.
//
// Decisão: o cupão Stripe NÃO é criado aqui. Só é criado na 1.ª redemption de
// um código PERCENT/FIXED (ver `ensureStripeCoupon`), evitando cupões órfãos
// para códigos que nunca chegam a ser usados.
export async function POST(request: Request) {
  const guard = await requireAdmin();
  if ("error" in guard) return guard.error;

  const body = await request.json().catch(() => null);
  const parsed = createDiscountSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        message: "Validation failed",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }
  const input = parsed.data;

  // Gera um código único (colisões são raras; tenta algumas vezes).
  let code = generateDiscountCode();
  for (let i = 0; i < 5; i++) {
    const exists = await prisma.discountCode.findUnique({ where: { code } });
    if (!exists) break;
    code = generateDiscountCode();
  }

  const created = await prisma.discountCode.create({
    data: {
      code,
      type: input.type,
      value: input.value,
      durationMonths: input.durationMonths ?? null,
      appliesToPlanIds: input.appliesToPlanIds,
      maxRedemptions: input.maxRedemptions ?? null,
      perAccountLimit: input.perAccountLimit,
      validUntil: input.validUntil ?? null,
      notes: input.notes ?? null,
      createdById: guard.session.user.id,
    },
    include: { createdBy: { select: { id: true, name: true, email: true } } },
  });

  return NextResponse.json(toDTO(created), { status: 201 });
}
