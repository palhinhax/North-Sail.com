"use client";

import { useState } from "react";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { getStripe } from "@/lib/stripe/client";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useToast } from "@/components/ui/use-toast";

export function StripeCheckout({ priceLabel }: { priceLabel: string }) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  async function start() {
    setLoading(true);
    try {
      const res = await fetch("/api/billing/subscribe", { method: "POST" });
      const data = await res.json();
      if (!res.ok || !data.clientSecret) {
        throw new Error(
          data.message || "Não foi possível iniciar o pagamento."
        );
      }
      setClientSecret(data.clientSecret);
    } catch (e) {
      toast({
        title: "Erro",
        description: (e as Error).message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  if (!clientSecret) {
    return (
      <Button onClick={start} disabled={loading} size="lg">
        {loading && <Spinner size="sm" className="mr-2" />}
        Confirmar subscrição e pagar
      </Button>
    );
  }

  return (
    <Elements
      stripe={getStripe()}
      options={{ clientSecret, appearance: { theme: "stripe" } }}
    >
      <PayForm priceLabel={priceLabel} />
    </Elements>
  );
}

function PayForm({ priceLabel }: { priceLabel: string }) {
  const stripe = useStripe();
  const elements = useElements();
  const [paying, setPaying] = useState(false);
  const { toast } = useToast();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;
    setPaying(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/dashboard/subscription?status=pago`,
      },
    });
    if (error) {
      toast({
        title: "Pagamento falhou",
        description: error.message,
        variant: "destructive",
      });
      setPaying(false);
    }
  }

  return (
    <form
      onSubmit={submit}
      className="space-y-4 rounded-2xl border bg-card p-6 shadow-sm"
    >
      <PaymentElement />
      <Button type="submit" disabled={!stripe || paying} className="w-full">
        {paying && <Spinner size="sm" className="mr-2" />}
        Pagar {priceLabel}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        Pagamento seguro processado pela Stripe.
      </p>
    </form>
  );
}
