"use client";

import * as React from "react";
import { ExternalLink } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { useToast } from "@/components/ui/use-toast";

interface Props {
  /** Optional deep-link flow inside the portal (e.g. cancellation). */
  flow?: "cancel";
  className?: string;
  children: React.ReactNode;
  /** Show an "open in new" icon (used on the primary action). */
  withExternalIcon?: boolean;
}

/**
 * Opens the Stripe Billing Portal. Styling is driven entirely by `className`
 * so the same component works as a primary button or a subtle text link.
 */
export function ManageBillingButton({
  flow,
  className,
  children,
  withExternalIcon,
}: Props) {
  const [loading, setLoading] = React.useState(false);
  const { toast } = useToast();

  async function open() {
    setLoading(true);
    try {
      const res = await fetch("/api/billing/portal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ flow }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.message || "Não foi possível abrir o portal.");
      }
      window.location.href = data.url;
    } catch (e) {
      toast({
        title: "Erro",
        description: (e as Error).message,
        variant: "destructive",
      });
      setLoading(false);
    }
  }

  return (
    <button onClick={open} disabled={loading} className={className}>
      {loading && <Spinner size="sm" className="mr-2" />}
      {children}
      {withExternalIcon && !loading && (
        <ExternalLink className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}
