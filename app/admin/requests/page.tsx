import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { requestStatusLabels } from "@/features/requests/schemas";

export default async function AdminRequestsPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/login");
  if (session.user.role !== "ADMIN") redirect("/dashboard");

  const requests = await prisma.serviceRequest.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      business: { include: { owner: { select: { name: true, email: true } } } },
      assignedTo: { select: { id: true, name: true, email: true } },
    },
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Pedidos</h1>
      <div className="grid gap-3">
        {requests.map((r) => (
          <Link key={r.id} href={`/admin/requests/${r.id}`}>
            <Card className="transition hover:bg-muted/40">
              <CardHeader>
                <CardTitle className="text-base">{r.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <div>
                  {r.business.name} · {r.business.owner?.email}
                </div>
                <div>
                  Estado: {requestStatusLabels[r.status]} · Tipo: {r.type}
                </div>
                <div>
                  Horas: {r.actualHours ?? "?"} / estimado{" "}
                  {r.estimatedHours ?? "?"}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
