import * as React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ctaClasses } from "./cta-button";

interface PricingCardProps {
  name: string;
  price: string;
  priceSuffix?: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
  badge?: string;
  /** Small muted line rendered under the CTA (e.g. trial reassurance). */
  footnote?: React.ReactNode;
}

export function PricingCard({
  name,
  price,
  priceSuffix = "/mês",
  features,
  ctaLabel,
  ctaHref,
  highlighted = false,
  badge,
  footnote,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-2xl border p-8",
        highlighted
          ? "z-10 scale-[1.03] border-brand-container bg-brand-container text-white shadow-card-lg"
          : "border-line bg-surface-lowest shadow-card"
      )}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-accent px-3 py-1 text-label-sm font-bold uppercase tracking-wider text-white">
          {badge}
        </span>
      )}
      <h3
        className={cn(
          "mb-3 text-headline-md",
          highlighted ? "text-white" : "text-brand"
        )}
      >
        {name}
      </h3>
      <div className="mb-6 flex items-baseline gap-1">
        <span
          className={cn(
            "text-display-sm",
            highlighted ? "text-white" : "text-brand"
          )}
        >
          {price}
        </span>
        <span
          className={cn(
            "text-body-md",
            highlighted ? "text-surface-highest" : "text-ink-muted"
          )}
        >
          {priceSuffix}
        </span>
      </div>
      <ul className="mb-10 flex flex-grow flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <CheckCircle2
              className={cn(
                "mt-1 h-4 w-4 shrink-0",
                highlighted ? "text-white" : "text-brand-accent"
              )}
            />
            <span
              className={cn(
                "text-body-md",
                highlighted ? "text-surface-highest" : "text-ink-muted"
              )}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <Link
        href={ctaHref}
        className={ctaClasses({
          variant: highlighted ? "primary" : "outline",
          className: "w-full",
        })}
      >
        {ctaLabel}
      </Link>
      {footnote && (
        <p
          className={cn(
            "mt-3 text-center text-label-sm",
            highlighted ? "text-surface-highest" : "text-ink-subtle"
          )}
        >
          {footnote}
        </p>
      )}
    </div>
  );
}
