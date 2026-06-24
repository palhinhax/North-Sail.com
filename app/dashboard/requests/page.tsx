import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { requestStatusLabels } from "@/features/requests/schemas";
import { NewRequestButton } from "./_components/new-request-button";

export default async function RequestsListPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/login");
  if (session.user.role === "ADMIN") redirect("/admin/requests");

  const business = await prisma.business.findUnique({
    where: { ownerId: session.user.id },
    include: { requests: { orderBy: { createdAt: "desc" } } },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Os meus pedidos</h1>
        <NewRequestButton />
      </div>

      {!business?.requests.length ? (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            Ainda não tens pedidos.
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-3">
          {business.requests.map((r) => (
            <Link key={r.id} href={`/dashboard/requests/${r.id}`}>
              <Card className="transition hover:bg-muted/40">
                <CardHeader>
                  <CardTitle className="text-base">{r.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <div>Estado: {requestStatusLabels[r.status]}</div>
                  <div>
                    Criado: {new Date(r.createdAt).toLocaleDateString()}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
