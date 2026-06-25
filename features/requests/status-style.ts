import { RequestStatus } from "@prisma/client";
import {
  requestStatusOrder,
  requestStatusLabels,
} from "./schemas/request.schema";

export interface StatusStyle {
  label: string;
  /** Tailwind classes for the pill badge (bg + text). */
  badge: string;
  /** Tailwind class for the small status dot. */
  dot: string;
  /** Tailwind class for the progress-bar fill. */
  bar: string;
  /** 0–100 fill percentage based on position in the happy path. */
  progress: number;
  /** Step index (1-based) within the happy path, or null for REJECTED. */
  step: number | null;
}

const totalSteps = requestStatusOrder.length;

const palette: Record<
  RequestStatus,
  { badge: string; dot: string; bar: string }
> = {
  SUBMITTED: {
    badge: "bg-sky-100 text-sky-700",
    dot: "bg-sky-500",
    bar: "bg-sky-500",
  },
  IN_REVIEW: {
    badge: "bg-indigo-100 text-indigo-700",
    dot: "bg-indigo-500",
    bar: "bg-indigo-500",
  },
  IN_DEVELOPMENT: {
    badge: "bg-amber-100 text-amber-700",
    dot: "bg-amber-500",
    bar: "bg-amber-500",
  },
  AWAITING_CLIENT: {
    badge: "bg-orange-100 text-orange-700",
    dot: "bg-orange-500",
    bar: "bg-orange-500",
  },
  READY_FOR_REVIEW: {
    badge: "bg-teal-100 text-teal-700",
    dot: "bg-teal-500",
    bar: "bg-teal-500",
  },
  PUBLISHED: {
    badge: "bg-emerald-100 text-emerald-700",
    dot: "bg-emerald-500",
    bar: "bg-emerald-500",
  },
  DONE: {
    badge: "bg-emerald-100 text-emerald-700",
    dot: "bg-emerald-500",
    bar: "bg-emerald-500",
  },
  REJECTED: {
    badge: "bg-rose-100 text-rose-700",
    dot: "bg-rose-500",
    bar: "bg-rose-500",
  },
};

export const totalRequestSteps = totalSteps;

export function getStatusStyle(status: RequestStatus): StatusStyle {
  const idx = requestStatusOrder.indexOf(status);
  const isRejected = status === RequestStatus.REJECTED;
  const step = idx >= 0 ? idx + 1 : null;
  const progress = isRejected ? 100 : step ? (step / totalSteps) * 100 : 0;

  return {
    label: requestStatusLabels[status],
    progress,
    step,
    ...palette[status],
  };
}
