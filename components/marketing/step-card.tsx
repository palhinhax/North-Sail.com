import * as React from "react";

interface StepCardProps {
  index: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function StepCard({ index, icon, title, description }: StepCardProps) {
  return (
    <div className="relative z-10 flex flex-col items-center text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-line bg-surface-lowest text-brand-accent shadow-card">
        {icon}
      </div>
      <h3 className="mb-2 text-headline-sm text-brand">
        {index}. {title}
      </h3>
      <p className="max-w-[260px] text-body-md text-ink-muted">{description}</p>
    </div>
  );
}
