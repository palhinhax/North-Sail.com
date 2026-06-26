import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import { redeemSchema } from "@/features/discounts/schemas";
import { previewRedeem } from "@/features/discounts/api/redeem";

export const runtime = "nodejs";

// POST /api/discounts/validate — corre `canRedeem` e devolve a pré-visualização.
// Não aplica nada.
export async function POST(request: Request) {
  const guard = await requireAuth();
  if ("error" in guard) return guard.error;

  const body = await request.json().catch(() => null);
  const parsed = redeemSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, reason: "Código inválido." },
      { status: 400 }
    );
  }

  const result = await previewRedeem(guard.session.user.id, parsed.data.code);
  return NextResponse.json(result);
}
