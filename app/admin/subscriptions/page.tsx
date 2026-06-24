import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { SubscriptionsTable } from "./_components/subscriptions-table";

export default async function AdminSubscriptionsPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/login");
  if (session.user.role !== "ADMIN") redirect("/dashboard");

  const [subscriptions, plans] = await Promise.all([
    prisma.subscription.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        plan: true,
        business: {
          include: { owner: { select: { id: true, name: true, email: true } } },
        },
      },
    }),
    prisma.plan.findMany({
      where: { active: true },
      orderBy: { monthlyPrice: "asc" },
    }),
  ]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Subscrições</h1>
      <SubscriptionsTable
        subscriptions={subscriptions.map((s) => ({
          id: s.id,
          status: s.status,
          billingCycle: s.billingCycle,
          planId: s.planId,
          planName: s.plan.name,
          businessName: s.business.name,
          ownerEmail: s.business.owner?.email ?? "",
        }))}
        plans={plans.map((p) => ({ id: p.id, name: p.name }))}
      />
    </div>
  );
}
