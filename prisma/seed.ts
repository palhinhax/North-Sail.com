import {
  PrismaClient,
  Role,
  Sector,
  SubscriptionStatus,
  RequestType,
  RequestStatus,
  BillingCycle,
} from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const plans = [
  {
    code: "PRESENCA",
    name: "Presença",
    monthlyPrice: 500,
    annualPrice: 6000,
    setupPrice: 4900,
    description: "Site simples com contactos, horários e WhatsApp.",
    features: [
      "Site mobile-first com a identidade do negócio",
      "Contactos, horários, mapa e WhatsApp",
      "Subdomínio northsail.app incluído",
      "Atualizações de conteúdo por pedido",
    ],
  },
  {
    code: "MINI_APP",
    name: "Mini App",
    monthlyPrice: 1500,
    annualPrice: 18000,
    setupPrice: 9900,
    description:
      "Site + uma funcionalidade essencial (reservas, marcações, pedidos ou aulas).",
    features: [
      "Tudo do Presença",
      "1 funcionalidade essencial à escolha",
      "Reservas, marcações, pedidos ou inscrições",
      "Notificações por email",
    ],
  },
  {
    code: "MINI_APP_PLUS",
    name: "Mini App+",
    monthlyPrice: 2500,
    annualPrice: 30000,
    setupPrice: 14900,
    description:
      "Vários profissionais, horários semanais, calendário, categorias.",
    features: [
      "Tudo do Mini App",
      "Vários profissionais / quartos / turmas",
      "Calendário semanal automático",
      "Gestão de categorias e horários",
    ],
  },
  {
    code: "BUSINESS_LOCAL",
    name: "Business Local",
    monthlyPrice: 3900,
    annualPrice: 46800,
    setupPrice: 19900,
    description: "Equipa com múltiplos utilizadores, histórico, exportações.",
    features: [
      "Tudo do Mini App+",
      "Múltiplos utilizadores na equipa",
      "Histórico e exportações",
      "Salas, eventos e gestão de membros",
    ],
  },
  {
    code: "PRO_GESTAO",
    name: "PRO Gestão",
    monthlyPrice: 6900,
    annualPrice: 82800,
    setupPrice: 29900,
    description:
      "Automações, dashboards, permissões, pagamentos e integrações.",
    features: [
      "Tudo do Business Local",
      "Automações e dashboards",
      "Permissões avançadas",
      "Pagamentos online",
      "Integrações sob orçamento",
    ],
  },
] as const;

async function main() {
  console.log("🌱 Seeding NorthSail database...");

  const passwordHash = await bcrypt.hash("password123", 12);

  for (const p of plans) {
    await prisma.plan.upsert({
      where: { code: p.code },
      update: {
        name: p.name,
        monthlyPrice: p.monthlyPrice,
        annualPrice: p.annualPrice,
        setupPrice: p.setupPrice,
        description: p.description,
        features: [...p.features],
        active: true,
      },
      create: {
        code: p.code,
        name: p.name,
        monthlyPrice: p.monthlyPrice,
        annualPrice: p.annualPrice,
        setupPrice: p.setupPrice,
        description: p.description,
        features: [...p.features],
        active: true,
      },
    });
  }
  console.log("✅ Plans seeded");

  const admin = await prisma.user.upsert({
    where: { email: "admin@northsail.com" },
    update: { role: Role.ADMIN },
    create: {
      email: "admin@northsail.com",
      name: "NorthSail Admin",
      passwordHash,
      role: Role.ADMIN,
    },
  });
  console.log("✅ Admin:", admin.email);

  const miniPlus = await prisma.plan.findUniqueOrThrow({
    where: { code: "MINI_APP_PLUS" },
  });

  const clientUser = await prisma.user.upsert({
    where: { email: "ginasio@demo.com" },
    update: {},
    create: {
      email: "ginasio@demo.com",
      name: "Ana — Ginásio Demo",
      passwordHash,
      role: Role.CLIENT,
    },
  });

  let business = await prisma.business.findUnique({
    where: { ownerId: clientUser.id },
  });
  if (!business) {
    business = await prisma.business.create({
      data: {
        ownerId: clientUser.id,
        name: "Ginásio Demo",
        sector: Sector.GYM,
        slug: "ginasio-demo",
        description: "Ginásio de bairro com aulas de grupo e marcações.",
        phone: "+351 910 000 000",
        whatsapp: "+351 910 000 000",
      },
    });
  }

  const now = new Date();
  const trialEndsAt = new Date(now.getTime() + 20 * 24 * 60 * 60 * 1000);
  await prisma.subscription.upsert({
    where: { businessId: business.id },
    update: {
      planId: miniPlus.id,
      status: SubscriptionStatus.TRIALING,
      billingCycle: BillingCycle.MONTHLY,
      trialEndsAt,
      currentPeriodEnd: trialEndsAt,
    },
    create: {
      businessId: business.id,
      planId: miniPlus.id,
      status: SubscriptionStatus.TRIALING,
      billingCycle: BillingCycle.MONTHLY,
      trialEndsAt,
      currentPeriodEnd: trialEndsAt,
    },
  });
  console.log("✅ Demo client subscription (trialing)");

  const existingRequest = await prisma.serviceRequest.findFirst({
    where: { businessId: business.id, type: RequestType.NEW_APP },
  });
  if (!existingRequest) {
    const req = await prisma.serviceRequest.create({
      data: {
        businessId: business.id,
        type: RequestType.NEW_APP,
        title: "App para ginásio: aulas, horários e inscrições",
        description:
          "Queremos gerir as aulas semanais, permitir aos clientes inscreverem-se nas aulas e ter um calendário público.",
        sector: Sector.GYM,
        status: RequestStatus.IN_DEVELOPMENT,
        estimatedHours: 16,
        actualHours: 6,
        statusEvents: {
          create: [
            {
              status: RequestStatus.SUBMITTED,
              note: "Pedido recebido — vamos analisar e contactar-vos.",
            },
            {
              status: RequestStatus.IN_REVIEW,
              note: "Estamos a desenhar o calendário e o fluxo de inscrição.",
            },
            {
              status: RequestStatus.IN_DEVELOPMENT,
              note: "Em desenvolvimento — primeira versão pronta esta semana.",
            },
          ],
        },
      },
    });
    console.log("✅ Demo request with timeline:", req.title);
  }

  console.log("\n📧 Login credentials:");
  console.log("   Admin:  admin@northsail.com / password123");
  console.log("   Client: ginasio@demo.com   / password123");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
