"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useToast } from "@/components/ui/use-toast";
import { useUpdateSubscription } from "@/features/subscriptions/hooks";
import { useRouter } from "next/navigation";
import { SubscriptionStatus } from "@prisma/client";

interface Props {
  subscriptionId: string;
  status: SubscriptionStatus;
}

export function SubscriptionActions({ subscriptionId, status }: Props) {
  const router = useRouter();
  const { toast } = useToast();
  const update = useUpdateSubscription();

  async function confirm() {
    try {
      await update.mutateAsync({
        id: subscriptionId,
        data: { status: SubscriptionStatus.ACTIVE },
      });
      toast({ title: "Subscrição confirmada", description: "Obrigado!" });
      router.refresh();
    } catch {
      toast({
        title: "Erro",
        description: "Não foi possível confirmar.",
        variant: "destructive",
      });
    }
  }

  if (status !== SubscriptionStatus.TRIALING) {
    return null;
  }

  return (
    <div className="flex gap-2">
      <Button onClick={confirm} disabled={update.isPending}>
        {update.isPending && <Spinner size="sm" className="mr-2" />}
        Confirmar subscrição
      </Button>
    </div>
  );
}
