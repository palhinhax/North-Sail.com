import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { onboardingSchema } from "@/features/onboarding/schemas";
import { recommendPlan } from "@/features/plans/lib";
import { buildTrialEnd } from "@/features/subscriptions/lib";
import { slugify } from "@/lib/slug";
import {
  BillingCycle,
  RequestStatus,
  RequestType,
  Role,
  SubscriptionStatus,
} from "@prisma/client";

export async function POST(request: Request) {
  const body = await request.json();
  const result = onboardingSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      {
        message: "Validation failed",
        errors: result.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const { business, account, answers, billingCycle } = result.data;
  account.email = account.email.trim().toLowerCase();

  const existingUser = await prisma.user.findFirst({
    where: { email: { equals: account.email, mode: "insensitive" } },
  });
  if (existingUser) {
    return NextResponse.json(
      { message: "Email já registado" },
      { status: 409 }
    );
  }

  const recommendation = recommendPlan({ ...answers, sector: business.sector });
  const planCode = result.data.planCode ?? recommendation.planCode;

  const plan = await prisma.plan.findUnique({ where: { code: planCode } });
  if (!plan) {
    return NextResponse.json({ message: "Plano inválido" }, { status: 400 });
  }

  const passwordHash = await bcrypt.hash(account.password, 12);

  const baseSlug = slugify(business.name) || `cliente-${Date.now()}`;
  let slug = baseSlug;
  for (let i = 2; i < 50; i++) {
    const existing = await prisma.business.findUnique({ where: { slug } });
    if (!existing) break;
    slug = `${baseSlug}-${i}`;
  }

  const trialEndsAt = buildTrialEnd();

  const created = await prisma.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: {
        name: account.name,
        email: account.email,
        passwordHash,
        role: Role.CLIENT,
      },
    });

    const biz = await tx.business.create({
      data: {
        ownerId: user.id,
        name: business.name,
        sector: business.sector,
        slug,
        description: business.description,
        phone: business.phone,
        whatsapp: business.whatsapp,
        domainDesired: business.domainDesired,
      },
    });

    const subscription = await tx.subscription.create({
      data: {
        businessId: biz.id,
        planId: plan.id,
        status: SubscriptionStatus.TRIALING,
        billingCycle:
          billingCycle === "ANNUAL"
            ? BillingCycle.ANNUAL
            : BillingCycle.MONTHLY,
        trialEndsAt,
        currentPeriodEnd: trialEndsAt,
      },
    });

    const description =
      answers.description?.trim() ||
      `Pedido inicial para ${business.name} (${business.sector}).`;

    const serviceRequest = await tx.serviceRequest.create({
      data: {
        businessId: biz.id,
        type: RequestType.NEW_APP,
        title: `App para ${business.name}`,
        description,
        sector: business.sector,
        status: RequestStatus.SUBMITTED,
        statusEvents: {
          create: {
            status: RequestStatus.SUBMITTED,
            note: "Pedido recebido pelo onboarding.",
            changedById: user.id,
          },
        },
      },
    });

    return { user, business: biz, subscription, serviceRequest };
  });

  return NextResponse.json(
    {
      userId: created.user.id,
      businessId: created.business.id,
      subscriptionId: created.subscription.id,
      requestId: created.serviceRequest.id,
      recommendation,
    },
    { status: 201 }
  );
}
