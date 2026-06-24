import * as React from "react";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Small teal pill that highlights the free-trial offer. Uses the teal accent
 * sparingly (tinted surface + accessible teal-ink text, WCAG AA).
 */
export function TrialBadge({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-1.5 rounded-full bg-teal-surface px-3 py-1 text-label-md font-medium text-teal-ink",
        className
      )}
    >
      <ShieldCheck className="h-4 w-4 shrink-0 text-teal" aria-hidden />
      {label}
    </span>
  );
}

/**
 * Muted reassurance line ("Sem cartão, sem compromisso.") that travels with
 * every CTA across the page.
 */
export function TrialReassurance({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-label-sm text-ink-subtle", className)}>{children}</p>
  );
}
