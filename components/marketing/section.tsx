import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

type Tone = "default" | "muted" | "hero";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: Tone;
  bordered?: boolean;
  containerClassName?: string;
  /**
   * Render children without the default Container wrapper.
   * Useful when the page section needs custom layout.
   */
  bare?: boolean;
}

const toneClasses: Record<Tone, string> = {
  default: "bg-background",
  muted: "bg-surface-low",
  hero: "hero-gradient relative overflow-hidden",
};

export function Section({
  className,
  containerClassName,
  tone = "default",
  bordered = false,
  bare = false,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-20 md:py-24",
        toneClasses[tone],
        bordered && "border-y border-line",
        className
      )}
      {...props}
    >
      {bare ? (
        children
      ) : (
        <Container className={containerClassName}>{children}</Container>
      )}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <header
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start",
        "mb-12 md:mb-16",
        className
      )}
    >
      {eyebrow && (
        <span className="text-label-md uppercase tracking-wider text-ink-muted">
          {eyebrow}
        </span>
      )}
      <h2 className="text-display-sm text-brand md:text-display-lg">{title}</h2>
      {subtitle && (
        <p className="max-w-2xl text-body-lg text-ink-muted">{subtitle}</p>
      )}
    </header>
  );
}
