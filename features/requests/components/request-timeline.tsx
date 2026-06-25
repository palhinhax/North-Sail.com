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

const stepDescriptions: Record<RequestStatus, string> = {
  SUBMITTED: "O seu pedido foi recebido.",
  IN_REVIEW: "A nossa equipa está a rever o pedido.",
  IN_DEVELOPMENT: "Estamos a trabalhar no seu pedido.",
  AWAITING_CLIENT: "Precisamos de uma resposta sua para continuar.",
  READY_FOR_REVIEW: "Está tudo pronto para a sua revisão.",
  PUBLISHED: "O seu pedido foi publicado.",
  DONE: "Pedido concluído. Obrigado!",
  REJECTED: "Este pedido foi rejeitado.",
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
    <ol className="relative flex flex-col">
      {requestStatusOrder.map((status, idx) => {
        const reached = currentIdx >= idx;
        const isDone = currentIdx > idx;
        const isCurrent = currentStatus === status;
        const isLast = idx === requestStatusOrder.length - 1;
        const matched = eventsByStatus.get(status) ?? [];
        const latest = matched[matched.length - 1];
        const Icon = stepIcons[status];

        return (
          <li
            key={status}
            className={cn(
              "relative flex gap-4 pb-7 last:pb-0",
              !reached && "opacity-50"
            )}
          >
            {/* Connector line */}
            {!isLast && (
              <span
                className={cn(
                  "absolute -bottom-0 left-5 top-10 w-0.5 -translate-x-1/2 rounded-full",
                  isDone ? "bg-emerald-400" : "bg-border"
                )}
                aria-hidden
              />
            )}

            {/* Node */}
            <span
              className={cn(
                "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors",
                isDone
                  ? "border-emerald-300 bg-emerald-50 text-emerald-600"
                  : isCurrent
                    ? "active-step-indicator border-transparent bg-secondary text-secondary-foreground"
                    : "border-border bg-muted text-muted-foreground"
              )}
            >
              {isDone ? (
                <Check className="h-5 w-5" strokeWidth={3} />
              ) : (
                <Icon className="h-[18px] w-[18px]" />
              )}
            </span>

            {/* Content */}
            <div className="min-w-0 flex-1 pt-2">
              <h3
                className={cn(
                  "font-medium leading-tight",
                  isCurrent
                    ? "font-bold text-secondary"
                    : isDone
                      ? "font-semibold text-foreground"
                      : "text-muted-foreground"
                )}
              >
                {requestStatusLabels[status]}
              </h3>
              {isCurrent && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {latest?.note ?? stepDescriptions[status]}
                </p>
              )}
              {!isCurrent && latest && (
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {formatWhen(latest.createdAt)}
                  {latest.note ? ` — ${latest.note}` : ""}
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
