import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { RequestStatus, SubscriptionStatus, LeadStatus } from "@prisma/client";
import { requestStatusLabels } from "@/features/requests/schemas/request.schema";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  CreditCard,
  History,
  Hourglass,
  Inbox,
  LayoutGrid,
  UserPlus,
  UserX,
  XCircle,
} from "lucide-react";

export const dynamic = "force-dynamic";

// Statuses that still need work from us (excludes terminal + client-blocked).
const OPEN_STATUSES: RequestStatus[] = [
  RequestStatus.SUBMITTED,
  RequestStatus.IN_REVIEW,
  RequestStatus.IN_DEVELOPMENT,
  RequestStatus.AWAITING_CLIENT,
  RequestStatus.READY_FOR_REVIEW,
];

const euro = new Intl.NumberFormat("pt-PT", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const priorityLabels: Record<number, { label: string; tone: string }> = {
  1: { label: "Alta", tone: "bg-destructive/10 text-destructive" },
  2: { label: "Média", tone: "bg-amber-100 text-amber-700" },
  3: { label: "Baixa", tone: "bg-surface-high text-ink-muted" },
};

function timeAgo(from: Date, now: Date): string {
  const s = Math.max(0, Math.floor((now.getTime() - from.getTime()) / 1000));
  if (s < 60) return "agora mesmo";
  const m = Math.floor(s / 60);
  if (m < 60) return `há ${m} min`;
  const h = Math.floor(m / 60);
  if (h < 24) return `há ${h}h`;
  const d = Math.floor(h / 24);
  if (d < 7) return `há ${d}d`;
  const w = Math.floor(d / 7);
  return `há ${w} sem`;
}

export default async function AdminHomePage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/login");
  if (session.user.role !== "ADMIN") redirect("/dashboard");

  const now = new Date();
  const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);

  const [
    submittedCount,
    unassignedCount,
    pastDueCount,
    stalledCount,
    newLeadsCount,
    readyForReviewCount,
    pipelineGroups,
    devUrgent,
    activeSubs,
    activeCount,
    totalBusinesses,
    trialingCount,
    totalLeads,
    convertedLeads,
    recentLeads,
    recentStatusEvents,
    recentCanceled,
  ] = await Promise.all([
    prisma.serviceRequest.count({ where: { status: RequestStatus.SUBMITTED } }),
    prisma.serviceRequest.count({
      where: { assignedToId: null, status: { in: OPEN_STATUSES } },
    }),
    prisma.subscription.count({
      where: { status: SubscriptionStatus.PAST_DUE },
    }),
    prisma.serviceRequest.count({
      where: { status: { in: OPEN_STATUSES }, updatedAt: { lt: threeDaysAgo } },
    }),
    prisma.lead.count({ where: { status: LeadStatus.NEW } }),
    prisma.serviceRequest.count({
      where: { status: RequestStatus.READY_FOR_REVIEW },
    }),
    prisma.serviceRequest.groupBy({
      by: ["status"],
      _count: { _all: true },
    }),
    prisma.serviceRequest.findMany({
      where: { status: RequestStatus.IN_DEVELOPMENT },
      orderBy: [{ priority: "asc" }, { updatedAt: "asc" }],
      take: 3,
      include: { business: { select: { name: true } } },
    }),
    prisma.subscription.findMany({
      where: { status: SubscriptionStatus.ACTIVE },
      include: { plan: true },
    }),
    prisma.subscription.count({ where: { status: SubscriptionStatus.ACTIVE } }),
    prisma.business.count(),
    prisma.subscription.count({
      where: { status: SubscriptionStatus.TRIALING },
    }),
    prisma.lead.count(),
    prisma.lead.count({ where: { status: LeadStatus.CONVERTED } }),
    prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
      take: 6,
      select: { id: true, businessName: true, createdAt: true },
    }),
    prisma.requestStatusEvent.findMany({
      orderBy: { createdAt: "desc" },
      take: 6,
      include: { request: { select: { id: true, title: true } } },
    }),
    prisma.subscription.findMany({
      where: { status: SubscriptionStatus.CANCELED, canceledAt: { not: null } },
      orderBy: { canceledAt: "desc" },
      take: 6,
      include: { business: { select: { name: true } } },
    }),
  ]);

  // --- Business health ---
  const mrr = activeSubs.reduce((acc, s) => {
    const monthly =
      s.billingCycle === "ANNUAL"
        ? s.plan.annualPrice / 12
        : s.plan.monthlyPrice;
    return acc + monthly;
  }, 0);
  const conversionRate =
    totalLeads > 0 ? Math.round((convertedLeads / totalLeads) * 100) : 0;

  // --- Pipeline counts ---
  const countByStatus = Object.fromEntries(
    pipelineGroups.map((g) => [g.status, g._count._all])
  ) as Record<RequestStatus, number>;

  const pipeline: { status: RequestStatus; short: string }[] = [
    { status: RequestStatus.SUBMITTED, short: "Submetidos" },
    { status: RequestStatus.IN_REVIEW, short: "Em análise" },
    { status: RequestStatus.IN_DEVELOPMENT, short: "Em dev." },
    { status: RequestStatus.AWAITING_CLIENT, short: "Espera cliente" },
    { status: RequestStatus.READY_FOR_REVIEW, short: "Para revisão" },
    { status: RequestStatus.PUBLISHED, short: "Publicados" },
  ];

  // --- Action queue ---
  const actions = [
    {
      label: "Novos pedidos",
      value: submittedCount,
      tone: "critical" as const,
      badge: "Por triar",
      icon: Inbox,
      href: "/admin/requests",
    },
    {
      label: "Sem responsável",
      value: unassignedCount,
      tone: "warning" as const,
      badge: "Atribuir",
      icon: UserX,
      href: "/admin/requests",
    },
    {
      label: "Pagamentos falhados",
      value: pastDueCount,
      tone: "critical" as const,
      badge: "Crítico",
      icon: CreditCard,
      href: "/admin/subscriptions",
    },
    {
      label: "Parados há +3 dias",
      value: stalledCount,
      tone: "critical" as const,
      badge: "Atraso",
      icon: Hourglass,
      href: "/admin/requests",
    },
    {
      label: "Leads novas",
      value: newLeadsCount,
      tone: "warning" as const,
      badge: "Contactar",
      icon: UserPlus,
      href: "/admin/leads",
    },
    {
      label: "Prontos para revisão",
      value: readyForReviewCount,
      tone: "neutral" as const,
      badge: "Rever",
      icon: ClipboardCheck,
      href: "/admin/requests",
    },
  ];
  const allClear = actions.every((a) => a.value === 0);

  // --- Recent activity (merged + sorted) ---
  type Feed = {
    id: string;
    at: Date;
    icon: typeof UserPlus;
    iconClass: string;
    body: React.ReactNode;
  };
  const feed: Feed[] = [
    ...recentLeads.map((l) => ({
      id: `lead-${l.id}`,
      at: l.createdAt,
      icon: UserPlus,
      iconClass: "bg-sky-100 text-sky-600",
      body: (
        <>
          Nova lead: <span className="font-medium">{l.businessName}</span>
        </>
      ),
    })),
    ...recentStatusEvents.map((e) => ({
      id: `evt-${e.id}`,
      at: e.createdAt,
      icon: CheckCircle2,
      iconClass: "bg-teal-100 text-teal-600",
      body: (
        <>
          {e.request?.title ? `“${e.request.title}”` : "Pedido"} →{" "}
          <span className="font-medium">{requestStatusLabels[e.status]}</span>
        </>
      ),
    })),
    ...recentCanceled.map((s) => ({
      id: `cancel-${s.id}`,
      at: s.canceledAt as Date,
      icon: XCircle,
      iconClass: "bg-destructive/10 text-destructive",
      body: (
        <>
          Subscrição cancelada:{" "}
          <span className="font-medium">{s.business.name}</span>
        </>
      ),
    })),
  ]
    .sort((a, b) => b.at.getTime() - a.at.getTime())
    .slice(0, 6);

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <header className="flex flex-col gap-1">
        <h1 className="text-display-sm text-brand">Visão geral</h1>
        <p className="text-body-lg text-ink-muted">
          Resumo da operação e fila de trabalho.
        </p>
      </header>

      {/* 1. Action queue */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-headline-sm font-bold text-brand">
            Fila de ação
          </h2>
          {allClear && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-surface px-3 py-1 text-label-sm font-medium text-teal-ink">
              <CheckCircle2 className="h-4 w-4" /> Tudo em dia
            </span>
          )}
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {actions.map((a) => (
            <ActionCard key={a.label} {...a} />
          ))}
        </div>
      </section>

      {/* Content grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* 2. Pipeline */}
        <section className="flex flex-col gap-5 rounded-lg border border-line bg-surface-lowest p-6 shadow-card lg:col-span-2">
          <div className="flex items-center justify-between border-b border-line pb-4">
            <h2 className="flex items-center gap-2 text-headline-sm font-bold text-brand">
              <LayoutGrid className="h-5 w-5" /> Pipeline
            </h2>
            <Link
              href="/admin/requests"
              className="flex items-center gap-1 text-label-md font-medium text-brand-accent hover:underline"
            >
              Ver quadro <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-2 border-b border-line pb-5 sm:grid-cols-3 md:grid-cols-6">
            {pipeline.map((p) => (
              <PipelineTile
                key={p.status}
                status={p.status}
                short={p.short}
                count={countByStatus[p.status] ?? 0}
              />
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-label-sm font-bold uppercase tracking-wider text-ink-muted">
              Urgentes em desenvolvimento
            </span>
            {devUrgent.length === 0 ? (
              <p className="rounded-lg border border-dashed border-line py-6 text-center text-body-md text-ink-muted">
                Nada em desenvolvimento de momento.
              </p>
            ) : (
              <div className="flex flex-col gap-2">
                {devUrgent.map((r) => {
                  const pr = priorityLabels[r.priority] ?? priorityLabels[2];
                  return (
                    <Link
                      key={r.id}
                      href={`/admin/requests/${r.id}`}
                      className="flex items-center justify-between gap-3 rounded-lg border border-line bg-surface-low p-3 transition-colors hover:bg-surface-container"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                        <span className="truncate text-body-md font-medium">
                          {r.title}
                          <span className="text-ink-muted">
                            {" "}
                            · {r.business.name}
                          </span>
                        </span>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        <span
                          className={`rounded-full px-2 py-0.5 text-label-sm font-medium ${pr.tone}`}
                        >
                          {pr.label}
                        </span>
                        <span className="hidden items-center gap-1 text-label-sm text-ink-subtle sm:flex">
                          <Clock className="h-3.5 w-3.5" />
                          {timeAgo(r.updatedAt, now)}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Right column */}
        <div className="flex flex-col gap-6">
          {/* 4. Business health */}
          <section className="flex flex-col gap-4 rounded-lg bg-brand-container p-6 text-white shadow-card">
            <h2 className="flex items-center gap-2 border-b border-white/15 pb-3 text-headline-sm font-bold">
              <Activity className="h-5 w-5" /> Saúde do negócio
            </h2>
            <div className="grid grid-cols-2 gap-5">
              <HealthStat label="MRR" value={euro.format(mrr / 100)} />
              <HealthStat
                label="Clientes ativos"
                value={`${activeCount}`}
                sub={`de ${totalBusinesses}`}
              />
              <HealthStat
                label="Trials a decorrer"
                value={`${trialingCount}`}
              />
              <HealthStat
                label="Conversão de leads"
                value={`${conversionRate}%`}
                sub={`${convertedLeads}/${totalLeads}`}
              />
            </div>
          </section>

          {/* 3. Recent activity */}
          <section className="flex flex-1 flex-col gap-3 rounded-lg border border-line bg-surface-lowest p-6 shadow-card">
            <h2 className="flex items-center gap-2 border-b border-line pb-3 text-headline-sm font-bold text-brand">
              <History className="h-5 w-5" /> Atividade recente
            </h2>
            {feed.length === 0 ? (
              <p className="py-6 text-center text-body-md text-ink-muted">
                Sem atividade recente.
              </p>
            ) : (
              <ul className="flex flex-col gap-4">
                {feed.map((f) => (
                  <li key={f.id} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${f.iconClass}`}
                    >
                      <f.icon className="h-4 w-4" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-body-md">{f.body}</span>
                      <span className="text-label-sm text-ink-subtle">
                        {timeAgo(f.at, now)}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

const toneStyles = {
  critical: {
    bar: "bg-destructive",
    badge: "bg-destructive/10 text-destructive",
    icon: "text-destructive",
    border: "border-destructive/30",
  },
  warning: {
    bar: "bg-amber-500",
    badge: "bg-amber-100 text-amber-700",
    icon: "text-amber-600",
    border: "border-amber-300/50",
  },
  neutral: {
    bar: "bg-line-strong",
    badge: "bg-surface-high text-ink-muted",
    icon: "text-ink-subtle",
    border: "border-line",
  },
} as const;

function ActionCard({
  label,
  value,
  tone,
  badge,
  icon: Icon,
  href,
}: {
  label: string;
  value: number;
  tone: keyof typeof toneStyles;
  badge: string;
  icon: typeof Inbox;
  href: string;
}) {
  // A zero count never needs attention — render it calm regardless of tone.
  const t = value === 0 ? toneStyles.neutral : toneStyles[tone];
  return (
    <Link
      href={href}
      className={`group relative flex flex-col items-start gap-2 overflow-hidden rounded-lg border bg-surface-lowest p-6 shadow-card transition-colors hover:bg-surface-low ${t.border}`}
    >
      <span className={`absolute left-0 top-0 h-full w-1 ${t.bar}`} />
      <div className="flex w-full items-center justify-between">
        <span
          className={`rounded-full px-2 py-1 text-label-sm font-medium ${t.badge}`}
        >
          {badge}
        </span>
        <Icon className={`h-5 w-5 ${t.icon}`} />
      </div>
      <span className="mt-1 text-display-sm text-ink">{value}</span>
      <span className="text-body-md font-medium text-ink-muted">{label}</span>
    </Link>
  );
}

const pipeTone: Record<RequestStatus, string> = {
  SUBMITTED: "text-sky-600 bg-sky-50",
  IN_REVIEW: "text-indigo-600 bg-indigo-50",
  IN_DEVELOPMENT: "text-amber-600 bg-amber-50",
  AWAITING_CLIENT: "text-orange-600 bg-orange-50",
  READY_FOR_REVIEW: "text-teal-600 bg-teal-50",
  PUBLISHED: "text-emerald-600 bg-emerald-50",
  DONE: "text-emerald-600 bg-emerald-50",
  REJECTED: "text-rose-600 bg-rose-50",
};

function PipelineTile({
  status,
  short,
  count,
}: {
  status: RequestStatus;
  short: string;
  count: number;
}) {
  const blocked = status === RequestStatus.AWAITING_CLIENT;
  return (
    <div
      className={`relative flex flex-col items-center rounded-lg p-2 ${pipeTone[status]}`}
    >
      {blocked && (
        <span className="absolute -right-1.5 -top-2 rounded-full bg-orange-500 px-1.5 py-0.5 text-[10px] font-medium text-white shadow-sm">
          Bloqueado
        </span>
      )}
      <span className="text-display-sm">{count}</span>
      <span className="text-center text-label-sm text-ink-muted">{short}</span>
    </div>
  );
}

function HealthStat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-label-sm text-white/60">{label}</span>
      <span className="text-headline-sm font-bold">
        {value}
        {sub && (
          <span className="ml-1 text-label-md font-normal text-white/60">
            {sub}
          </span>
        )}
      </span>
    </div>
  );
}
