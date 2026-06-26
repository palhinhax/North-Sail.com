import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import { redeemSchema } from "@/features/discounts/schemas";
import { redeemCode } from "@/features/discounts/api/redeem";

export const runtime = "nodejs";

// POST /api/discounts/redeem — valida e aplica o código (transação atómica).
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

  const result = await redeemCode(guard.session.user.id, parsed.data.code);
  return NextResponse.json(result, { status: result.ok ? 200 : 400 });
}
