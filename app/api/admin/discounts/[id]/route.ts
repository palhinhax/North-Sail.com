import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { updateDiscountSchema } from "@/features/discounts/schemas";
import { effectSummary } from "@/features/discounts/lib";

export const runtime = "nodejs";

// PATCH /api/admin/discounts/:id — alterna `active` e edita `validUntil`/`notes`.
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const guard = await requireAdmin();
  if ("error" in guard) return guard.error;

  const body = await request.json().catch(() => null);
  const parsed = updateDiscountSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        message: "Validation failed",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const existing = await prisma.discountCode.findUnique({
    where: { id: params.id },
  });
  if (!existing) {
    return NextResponse.json({ message: "Não encontrado" }, { status: 404 });
  }

  const updated = await prisma.discountCode.update({
    where: { id: params.id },
    data: {
      active: parsed.data.active ?? undefined,
      validUntil:
        parsed.data.validUntil === undefined
          ? undefined
          : parsed.data.validUntil,
      notes: parsed.data.notes === undefined ? undefined : parsed.data.notes,
    },
    include: { createdBy: { select: { id: true, name: true, email: true } } },
  });

  return NextResponse.json({
    id: updated.id,
    code: updated.code,
    type: updated.type,
    value: updated.value,
    durationMonths: updated.durationMonths,
    appliesToPlanIds: updated.appliesToPlanIds,
    maxRedemptions: updated.maxRedemptions,
    redemptionsUsed: updated.redemptionsUsed,
    perAccountLimit: updated.perAccountLimit,
    validFrom: updated.validFrom.toISOString(),
    validUntil: updated.validUntil?.toISOString() ?? null,
    active: updated.active,
    notes: updated.notes,
    benefit: effectSummary(updated),
    createdAt: updated.createdAt.toISOString(),
    createdBy: updated.createdBy,
  });
}
