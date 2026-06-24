import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getTrialDaysLeft } from "@/features/subscriptions/lib";
import { SubscriptionActions } from "./_components/subscription-actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const cents = (n: number) => (n / 100).toFixed(2).replace(".", ",");

export default async function SubscriptionPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/login");
  if (session.user.role === "ADMIN") redirect("/admin/subscriptions");

  const business = await prisma.business.findUnique({
    where: { ownerId: session.user.id },
    include: { subscription: { include: { plan: true } } },
  });
  if (!business?.subscription) {
    return <p>Sem subscrição.</p>;
  }
  const { subscription } = business;
  const trialDays = getTrialDaysLeft({
    status: subscription.status,
    trialEndsAt: subscription.trialEndsAt?.toISOString() ?? null,
  });

  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="text-3xl font-bold">A tua subscrição</h1>

      <Card>
        <CardHeader>
          <CardTitle>{subscription.plan.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <Row label="Estado" value={subscription.status} />
          <Row label="Ciclo" value={subscription.billingCycle} />
          <Row
            label="Preço"
            value={`${cents(
              subscription.billingCycle === "ANNUAL"
                ? subscription.plan.annualPrice
                : subscription.plan.monthlyPrice
            )}€ / ${subscription.billingCycle === "ANNUAL" ? "ano" : "mês"}`}
          />
          {trialDays !== null && (
            <Row label="Trial" value={`${trialDays} dia(s) restantes`} />
          )}
          {subscription.currentPeriodEnd && (
            <Row
              label="Próxima renovação"
              value={new Date(
                subscription.currentPeriodEnd
              ).toLocaleDateString()}
            />
          )}
        </CardContent>
      </Card>

      <SubscriptionActions
        subscriptionId={subscription.id}
        status={subscription.status}
      />

      <p className="text-xs text-muted-foreground">
        Pagamento ainda em fase manual. A integração com cartão chega em breve.
      </p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b py-2 last:border-0">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
