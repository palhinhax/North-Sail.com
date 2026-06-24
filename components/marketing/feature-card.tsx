import * as React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-line bg-surface-lowest p-6 shadow-card transition-transform duration-300 hover:-translate-y-1",
        className
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface-low text-brand">
        {icon}
      </div>
      <h3 className="mb-2 text-headline-sm text-brand">{title}</h3>
      <p className="text-body-md text-ink-muted">{description}</p>
    </div>
  );
}
