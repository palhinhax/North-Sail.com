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
    <div className="glass-panel relative overflow-hidden rounded-[24px] border border-line p-2 shadow-card-lg">
      {/* Full, uncropped screenshot of the dashboard — one clean image. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/Business%20Management%20Platform%20Design/screenshots/01-dash.png"
        alt="NorthSail management dashboard"
        loading="eager"
        className="block w-full rounded-[16px]"
      />
    </div>
  );
}
