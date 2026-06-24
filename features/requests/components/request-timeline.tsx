"use client";

import { RequestStatus } from "@prisma/client";
import { Check, Circle } from "lucide-react";
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
    <ol className="relative space-y-4 border-l pl-6">
      {requestStatusOrder.map((status, idx) => {
        const reached = currentIdx >= idx;
        const isCurrent = currentStatus === status;
        const matched = eventsByStatus.get(status) ?? [];
        const latest = matched[matched.length - 1];
        return (
          <li key={status} className="relative">
            <span
              className={cn(
                "absolute -left-[33px] flex h-6 w-6 items-center justify-center rounded-full border bg-background",
                reached
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-muted-foreground/40 text-muted-foreground"
              )}
            >
              {reached ? (
                <Check className="h-3 w-3" />
              ) : (
                <Circle className="h-2 w-2" />
              )}
            </span>
            <div className={cn("font-medium", isCurrent && "text-primary")}>
              {requestStatusLabels[status]}
            </div>
            {latest && (
              <div className="text-xs text-muted-foreground">
                {new Date(latest.createdAt).toLocaleString()}
                {latest.note ? ` — ${latest.note}` : ""}
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
