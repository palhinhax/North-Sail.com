"use client";

import { RequestStatus } from "@prisma/client";
import {
  Check,
  Inbox,
  Search,
  Hammer,
  Hourglass,
  Eye,
  Rocket,
  Flag,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  requestStatusLabels,
  requestStatusOrder,
  type RequestStatusEvent,
} from "../schemas";

interface RequestTimelineProps {
  currentStatus: RequestStatus;
  events?: RequestStatusEvent[];
}

const stepIcons: Record<RequestStatus, LucideIcon> = {
  SUBMITTED: Inbox,
  IN_REVIEW: Search,
  IN_DEVELOPMENT: Hammer,
  AWAITING_CLIENT: Hourglass,
  READY_FOR_REVIEW: Eye,
  PUBLISHED: Rocket,
  DONE: Flag,
  REJECTED: Flag,
};

function formatWhen(iso: string) {
  return new Date(iso).toLocaleString("pt-PT", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function RequestTimeline({
  currentStatus,
  events = [],
}: RequestTimelineProps) {
  const currentIdx = requestStatusOrder.indexOf(currentStatus);
  const eventsByStatus = new Map<RequestStatus, RequestStatusEvent[]>();
  for (const evt of events) {
    const arr = eventsByStatus.get(evt.status) ?? [];
    arr.push(evt);
    eventsByStatus.set(evt.status, arr);
  }

  return (
    <ol className="flex flex-col">
      {requestStatusOrder.map((status, idx) => {
        const reached = currentIdx >= idx;
        const isCurrent = currentStatus === status;
        const isLast = idx === requestStatusOrder.length - 1;
        const matched = eventsByStatus.get(status) ?? [];
        const latest = matched[matched.length - 1];
        const Icon = stepIcons[status];

        return (
          <li key={status} className="relative flex gap-4 pb-6 last:pb-0">
            {/* Connector line */}
            {!isLast && (
              <span
                className={cn(
                  "absolute -bottom-0 left-5 top-10 w-0.5 -translate-x-1/2",
                  currentIdx > idx ? "bg-primary/40" : "bg-border"
                )}
                aria-hidden
              />
            )}

            {/* Node */}
            <span
              className={cn(
                "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                isCurrent
                  ? "border-primary bg-primary text-primary-foreground shadow-[0_0_0_4px] shadow-primary/15"
                  : reached
                    ? "border-primary/40 bg-primary/10 text-primary"
                    : "border-border bg-muted text-muted-foreground"
              )}
            >
              {reached && !isCurrent ? (
                <Check className="h-4 w-4" strokeWidth={3} />
              ) : (
                <Icon className="h-[18px] w-[18px]" />
              )}
            </span>

            {/* Content */}
            <div className="min-w-0 flex-1 pt-1">
              {isCurrent ? (
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                  <h3 className="font-semibold text-primary">
                    {requestStatusLabels[status]}
                  </h3>
                  {latest && (
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {formatWhen(latest.createdAt)}
                    </p>
                  )}
                  {latest?.note && (
                    <p className="mt-2 rounded-md border bg-background px-3 py-2 text-sm text-foreground">
                      {latest.note}
                    </p>
                  )}
                </div>
              ) : (
                <>
                  <h3
                    className={cn(
                      "font-medium",
                      reached ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {requestStatusLabels[status]}
                  </h3>
                  {latest && (
                    <p className="text-xs text-muted-foreground">
                      {formatWhen(latest.createdAt)}
                      {latest.note ? ` — ${latest.note}` : ""}
                    </p>
                  )}
                </>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
