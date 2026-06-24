"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useUpdateSubscription } from "@/features/subscriptions/hooks";
import { SubscriptionStatus, BillingCycle } from "@prisma/client";

interface Row {
  id: string;
  status: SubscriptionStatus;
  billingCycle: BillingCycle;
  planId: string;
  planName: string;
  businessName: string;
  ownerEmail: string;
}

interface Props {
  subscriptions: Row[];
  plans: { id: string; name: string }[];
}

const statuses: SubscriptionStatus[] = [
  SubscriptionStatus.TRIALING,
  SubscriptionStatus.ACTIVE,
  SubscriptionStatus.PAST_DUE,
  SubscriptionStatus.CANCELED,
  SubscriptionStatus.PENDING,
];

export function SubscriptionsTable({ subscriptions, plans }: Props) {
  const update = useUpdateSubscription();
  const { toast } = useToast();
  const router = useRouter();

  async function patch(id: string, data: Partial<Row>) {
    try {
      await update.mutateAsync({
        id,
        data: {
          status: data.status,
          planId: data.planId,
          billingCycle: data.billingCycle,
        },
      });
      toast({ title: "Atualizado" });
      router.refresh();
    } catch {
      toast({
        title: "Erro",
        description: "Falha ao atualizar.",
        variant: "destructive",
      });
    }
  }

  return (
    <Card>
      <CardContent className="p-0">
        <table className="w-full text-sm">
          <thead className="border-b text-left">
            <tr>
              <th className="p-3">Negócio</th>
              <th className="p-3">Cliente</th>
              <th className="p-3">Plano</th>
              <th className="p-3">Ciclo</th>
              <th className="p-3">Estado</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((s) => (
              <tr key={s.id} className="border-b last:border-0">
                <td className="p-3">{s.businessName}</td>
                <td className="p-3 text-muted-foreground">{s.ownerEmail}</td>
                <td className="p-3">
                  <select
                    value={s.planId}
                    onChange={(e) => patch(s.id, { planId: e.target.value })}
                    className="rounded-md border bg-background px-2 py-1"
                  >
                    {plans.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="p-3">
                  <select
                    value={s.billingCycle}
                    onChange={(e) =>
                      patch(s.id, {
                        billingCycle: e.target.value as BillingCycle,
                      })
                    }
                    className="rounded-md border bg-background px-2 py-1"
                  >
                    <option value={BillingCycle.MONTHLY}>Mensal</option>
                    <option value={BillingCycle.ANNUAL}>Anual</option>
                  </select>
                </td>
                <td className="p-3">
                  <select
                    value={s.status}
                    onChange={(e) =>
                      patch(s.id, {
                        status: e.target.value as SubscriptionStatus,
                      })
                    }
                    className="rounded-md border bg-background px-2 py-1"
                  >
                    {statuses.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
