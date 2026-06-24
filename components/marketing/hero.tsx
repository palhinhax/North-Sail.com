import * as React from "react";
import { Container } from "./container";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Highlight shown between the subtitle and the CTAs (e.g. the trial badge). */
  badge?: React.ReactNode;
  actions?: React.ReactNode;
  /** Muted line rendered directly under the CTAs (e.g. the trial reassurance). */
  actionsNote?: React.ReactNode;
  visual?: React.ReactNode;
  className?: string;
}

export function Hero({
  title,
  subtitle,
  badge,
  actions,
  actionsNote,
  visual,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "hero-gradient ambient-glow relative overflow-hidden pb-20 pt-32 md:pb-24 md:pt-36",
        className
      )}
    >
      <Container className="relative z-10">
        <div
          className={cn(
            "grid items-center gap-16",
            visual ? "lg:grid-cols-2" : "max-w-3xl"
          )}
        >
          <div className="flex flex-col gap-8">
            <h1 className="max-w-[600px] text-display-sm text-brand md:text-display-lg">
              {title}
            </h1>
            {subtitle && (
              <p className="max-w-[500px] text-body-lg text-ink-muted">
                {subtitle}
              </p>
            )}
            {badge && <div className="-mt-2">{badge}</div>}
            {actions && (
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-3 sm:flex-row">{actions}</div>
                {actionsNote}
              </div>
            )}
          </div>
          {visual && <div className="relative">{visual}</div>}
        </div>
      </Container>
    </section>
  );
}

export function HeroDashboardMockup() {
  return (
    <div className="glass-panel relative flex aspect-[4/3] w-full flex-col gap-4 overflow-hidden rounded-[24px] border border-line p-4 shadow-card-lg">
      <div className="flex items-center justify-between border-b border-line pb-4">
        <div className="h-6 w-32 rounded bg-surface-highest" />
        <div className="flex gap-2">
          <div className="h-8 w-8 rounded-full bg-surface-highest" />
          <div className="h-8 w-8 rounded-full bg-surface-highest" />
        </div>
      </div>
      <div className="flex h-full gap-4">
        <div className="flex w-1/4 flex-col gap-2 border-r border-line pr-4">
          <div className="h-8 w-full rounded bg-surface-highest" />
          <div className="h-8 w-full rounded bg-surface-highest" />
          <div className="h-8 w-full rounded bg-surface-highest" />
        </div>
        <div className="flex h-full w-3/4 flex-col gap-4">
          <div className="h-8 w-1/2 rounded bg-surface-highest" />
          <div className="grid h-full grid-cols-2 gap-4">
            <div className="rounded-lg border border-line bg-surface-low p-2" />
            <div className="rounded-lg border border-line bg-surface-low p-2" />
            <div className="col-span-2 rounded-lg border border-line bg-surface-low p-2" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 right-8 flex items-center gap-2 rounded-lg border border-line bg-white p-2 shadow-card">
        <span className="flex h-2 w-2 rounded-full bg-brand-accent" />
        <span className="text-label-sm text-brand">Nova reserva!</span>
      </div>
    </div>
  );
}
