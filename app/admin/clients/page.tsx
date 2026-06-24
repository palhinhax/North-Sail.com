import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function AdminClientsPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/login");
  if (session.user.role !== "ADMIN") redirect("/dashboard");

  const businesses = await prisma.business.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      owner: { select: { id: true, name: true, email: true } },
      subscription: { include: { plan: true } },
    },
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Clientes</h1>
      <div className="grid gap-3">
        {businesses.map((b) => (
          <Link key={b.id} href={`/admin/clients/${b.id}`}>
            <Card className="transition hover:bg-muted/40">
              <CardHeader>
                <CardTitle className="text-base">{b.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <div>{b.owner?.email}</div>
                <div>
                  Plano: {b.subscription?.plan.name ?? "—"} · Estado:{" "}
                  {b.subscription?.status ?? "—"}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
