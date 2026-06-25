import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth, isAdmin } from "@/lib/auth";
import { updatePlanSchema } from "@/features/plans/schemas";
import { annualFromMonthly } from "@/features/plans/lib";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function PATCH(request: Request, { params }: RouteParams) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  if (!isAdmin(session)) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  const { id } = await params;
  const existing = await prisma.plan.findUnique({ where: { id } });
  if (!existing) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  const body = await request.json();
  const result = updatePlanSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      {
        message: "Validation failed",
        errors: result.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  // Enforce the pricing rule: annual = monthly × 10.
  const data = { ...result.data };
  if (data.monthlyPrice != null) {
    data.annualPrice = annualFromMonthly(data.monthlyPrice);
  }

  const updated = await prisma.plan.update({
    where: { id },
    data,
  });
  return NextResponse.json(updated);
}
