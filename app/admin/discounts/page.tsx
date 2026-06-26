import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { DiscountsTable } from "@/features/discounts/components";

export default async function AdminDiscountsPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/login");
  if (session.user.role !== "ADMIN") redirect("/dashboard");

  const plans = await prisma.plan.findMany({
    where: { active: true },
    orderBy: { monthlyPrice: "asc" },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Descontos</h1>
        <p className="mt-1 text-muted-foreground">
          Gera códigos de meses grátis, descontos ou setup grátis e acompanha as
          utilizações.
        </p>
      </div>
      <DiscountsTable
        plans={plans.map((p) => ({
          id: p.id,
          name: p.name,
          monthlyPrice: p.monthlyPrice,
        }))}
      />
    </div>
  );
}
