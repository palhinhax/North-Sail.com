import Link from "next/link";
import { redirect } from "next/navigation";
import { ShieldCheck } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getTrialDaysLeft } from "@/features/subscriptions/lib";
import { requestStatusLabels } from "@/features/requests/schemas";

const cents = (n: number) => (n / 100).toFixed(2).replace(".", ",");

export default async function DashboardHomePage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/login");
  if (session.user.role === "ADMIN") redirect("/admin");

  const business = await prisma.business.findUnique({
    where: { ownerId: session.user.id },
    include: {
      subscription: { include: { plan: true } },
      requests: { orderBy: { createdAt: "desc" }, take: 3 },
    },
  });

  if (!business) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Bem-vindo</h1>
        <p className="text-muted-foreground">
          Ainda não temos o teu negócio configurado. Começa aqui:
        </p>
        <Link href="/comecar">
          <Button>Começar onboarding</Button>
        </Link>
      </div>
    );
  }

  const subscription = business.subscription;
  const trialDays = getTrialDaysLeft(
    subscription
      ? {
          status: subscription.status,
          trialEndsAt: subscription.trialEndsAt?.toISOString() ?? null,
        }
      : null
  );
  const lastRequest = business.requests[0];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{business.name}</h1>
        <p className="text-muted-foreground">
          Olá, {session.user.name || session.user.email}
        </p>
      </div>

      {trialDays !== null && (
        <div className="flex flex-wrap items-center gap-2 rounded-lg border border-teal/30 bg-teal-surface px-4 py-3 text-sm text-teal-ink">
          <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden />
          <span className="font-medium">
            Estás no teu mês grátis — sem cartão, sem compromisso.
          </span>
          <span className="text-teal-ink/90">
            {trialDays > 0
              ? `Faltam ${trialDays} dia(s).`
              : "O teu mês grátis terminou."}
          </span>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Plano</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {subscription?.plan.name ?? "—"}
            </div>
            <p className="text-xs text-muted-foreground">
              {subscription
                ? `${cents(
                    subscription.billingCycle === "ANNUAL"
                      ? subscription.plan.annualPrice
                      : subscription.plan.monthlyPrice
                  )}€ / ${subscription.billingCycle === "ANNUAL" ? "ano" : "mês"}`
                : "Sem subscrição"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Subscrição</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {subscription?.status ?? "—"}
            </div>
            <p className="text-xs text-muted-foreground">
              {trialDays !== null
                ? `${trialDays} dia(s) de trial restantes`
                : "Sem trial ativo"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Último pedido</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {lastRequest ? requestStatusLabels[lastRequest.status] : "—"}
            </div>
            <p className="line-clamp-1 text-xs text-muted-foreground">
              {lastRequest?.title ?? "Sem pedidos"}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-3">
        <Link href="/dashboard/subscription">
          <Button variant="outline">Ver subscrição</Button>
        </Link>
        <Link href="/dashboard/requests">
          <Button variant="outline">Os meus pedidos</Button>
        </Link>
        <Link href="/dashboard/business">
          <Button variant="outline">Editar negócio</Button>
        </Link>
      </div>
    </div>
  );
}
