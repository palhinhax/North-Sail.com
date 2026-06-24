import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const cents = (n: number) => (n / 100).toFixed(2).replace(".", ",");

export default async function AdminPlansPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/login");
  if (session.user.role !== "ADMIN") redirect("/dashboard");

  const plans = await prisma.plan.findMany({
    orderBy: { monthlyPrice: "asc" },
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Planos</h1>
      <div className="grid gap-3 md:grid-cols-2">
        {plans.map((p) => (
          <Card key={p.id}>
            <CardHeader>
              <CardTitle>{p.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="text-xs uppercase text-muted-foreground">
                {p.code}
              </div>
              <p>{p.description}</p>
              <div>
                {cents(p.monthlyPrice)}€ / mês · {cents(p.annualPrice)}€ / ano ·
                setup {cents(p.setupPrice)}€
              </div>
              <ul className="list-disc pl-4 text-muted-foreground">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
