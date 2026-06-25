import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { PlansManager, type AdminPlan } from "./_components/plans-manager";

const eur = (cents: number) =>
  (cents / 100).toLocaleString("pt-PT", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

export default async function AdminPlansPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/login");
  if (session.user.role !== "ADMIN") redirect("/dashboard");

  const [plans, subscriptions, clientCount] = await Promise.all([
    prisma.plan.findMany({
      orderBy: { monthlyPrice: "asc" },
      include: { _count: { select: { subscriptions: true } } },
    }),
    prisma.subscription.findMany({
      where: { status: { in: ["ACTIVE", "TRIALING"] } },
      include: { plan: { select: { monthlyPrice: true, annualPrice: true } } },
    }),
    prisma.business.count(),
  ]);

  // Estimated MRR from active/trialing subscriptions (cents).
  const mrrCents = subscriptions.reduce((sum, s) => {
    const monthly =
      s.billingCycle === "ANNUAL"
        ? Math.round(s.plan.annualPrice / 12)
        : s.plan.monthlyPrice;
    return sum + monthly;
  }, 0);

  const data: AdminPlan[] = plans.map((p) => ({
    id: p.id,
    code: p.code,
    name: p.name,
    monthlyPrice: p.monthlyPrice,
    annualPrice: p.annualPrice,
    setupPrice: p.setupPrice,
    setupPromo: p.setupPromo,
    description: p.description,
    features: p.features,
    active: p.active,
    clientCount: p._count.subscriptions,
  }));

  const stats = [
    { label: "Subscrições ativas", value: String(subscriptions.length) },
    { label: "Receita mensal estimada", value: `€${eur(mrrCents)}` },
    { label: "Clientes totais", value: String(clientCount) },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Gestão de planos</h1>
        <p className="mt-1 text-muted-foreground">
          Administra preços, estados e configurações dos planos.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border bg-card p-5 shadow-sm"
          >
            <span className="text-sm text-muted-foreground">{s.label}</span>
            <div className="mt-1 text-2xl font-bold">{s.value}</div>
          </div>
        ))}
      </div>

      <PlansManager plans={data} />
    </div>
  );
}
