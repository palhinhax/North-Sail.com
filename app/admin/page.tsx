import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SubscriptionStatus } from "@prisma/client";

const cents = (n: number) => (n / 100).toFixed(2).replace(".", ",");

export default async function AdminHomePage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/login");
  if (session.user.role !== "ADMIN") redirect("/dashboard");

  const [clients, trialing, active, canceled, openRequests, subscriptions] =
    await Promise.all([
      prisma.business.count(),
      prisma.subscription.count({
        where: { status: SubscriptionStatus.TRIALING },
      }),
      prisma.subscription.count({
        where: { status: SubscriptionStatus.ACTIVE },
      }),
      prisma.subscription.count({
        where: { status: SubscriptionStatus.CANCELED },
      }),
      prisma.serviceRequest.count({
        where: { NOT: { status: { in: ["DONE", "REJECTED", "PUBLISHED"] } } },
      }),
      prisma.subscription.findMany({
        where: { status: SubscriptionStatus.ACTIVE },
        include: { plan: true },
      }),
    ]);

  const mrr = subscriptions.reduce((acc, s) => {
    const monthly =
      s.billingCycle === "ANNUAL"
        ? s.plan.annualPrice / 12
        : s.plan.monthlyPrice;
    return acc + monthly;
  }, 0);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin</h1>

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        <Stat label="Clientes" value={clients} />
        <Stat label="Trial" value={trialing} />
        <Stat label="Ativas" value={active} />
        <Stat label="Canceladas" value={canceled} />
        <Stat label="Pedidos abertos" value={openRequests} />
        <Stat label="MRR" value={`${cents(mrr)}€`} />
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">{label}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}
