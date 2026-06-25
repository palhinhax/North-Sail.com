import Link from "next/link";
import { redirect } from "next/navigation";
import {
  ArrowRight,
  CalendarClock,
  Check,
  ChevronRight,
  ClipboardList,
  CheckCircle2,
  CreditCard,
  ListChecks,
  MessageCircle,
  Timer,
} from "lucide-react";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getTrialDaysLeft } from "@/features/subscriptions/lib";
import { requestStatusOrder } from "@/features/requests/schemas";
import {
  getStatusStyle,
  totalRequestSteps,
} from "@/features/requests/status-style";

const cents = (n: number) => (n / 100).toFixed(2).replace(".", ",");
const shortDate = (d: Date) =>
  new Date(d).toLocaleDateString("pt-PT", { day: "2-digit", month: "short" });

export default async function DashboardHomePage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/login");
  if (session.user.role === "ADMIN") redirect("/admin");

  const business = await prisma.business.findUnique({
    where: { ownerId: session.user.id },
    include: {
      subscription: { include: { plan: true } },
      requests: { orderBy: { createdAt: "desc" } },
    },
  });

  if (!business) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Bem-vindo</h1>
        <p className="text-muted-foreground">
          Ainda não temos o teu negócio configurado. Começa aqui:
        </p>
        <Link href="/comecar">
          <Button>Começar onboarding</Button>
        </Link>
      </div>
    );
  }

  const subscription = business.subscription;
  const trialDays = getTrialDaysLeft(
    subscription
      ? {
          status: subscription.status,
          trialEndsAt: subscription.trialEndsAt?.toISOString() ?? null,
        }
      : null
  );

  const requests = business.requests;
  const lastRequest = requests[0];
  const openRequests = requests.filter(
    (r) => r.status !== "DONE" && r.status !== "REJECTED"
  ).length;
  const doneRequests = requests.filter((r) => r.status === "DONE").length;
  const nextRenewal =
    subscription?.currentPeriodEnd ?? subscription?.trialEndsAt;
  const lastStyle = lastRequest ? getStatusStyle(lastRequest.status) : null;
  const lastIdx = lastRequest
    ? requestStatusOrder.indexOf(lastRequest.status)
    : -1;

  return (
    <div className="space-y-6">
      {/* Top bar */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <nav className="mb-1 flex items-center gap-1.5 text-xs text-muted-foreground">
            <span>Painel</span>
            <ChevronRight className="h-3 w-3" />
            <span className="font-medium text-foreground">Visão geral</span>
          </nav>
          <h1 className="text-3xl font-bold">Olá, {business.name}</h1>
        </div>
        <Link href="/dashboard/requests">
          <Button variant="outline" className="gap-2">
            <MessageCircle className="h-4 w-4" />
            Falar connosco
          </Button>
        </Link>
      </div>

      {/* Trial banner */}
      {trialDays !== null && (
        <div className="relative overflow-hidden rounded-xl border bg-card p-5 shadow-sm">
          <span className="absolute inset-y-0 left-0 w-1 bg-amber-500" />
          <div className="flex flex-col items-start justify-between gap-4 pl-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <Timer className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-semibold">
                  {trialDays > 0
                    ? `Estás em período de teste — faltam ${trialDays} dia(s).`
                    : "O teu mês grátis terminou."}
                </h2>
                <p className="text-sm text-muted-foreground">
                  Aproveita para explorar todas as funcionalidades do plano{" "}
                  {subscription?.plan.name}.
                </p>
              </div>
            </div>
            <Link href="/dashboard/subscription" className="w-full sm:w-auto">
              <Button className="w-full whitespace-nowrap">
                Confirmar subscrição
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* Bento grid */}
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
          {/* Subscription card */}
          <div className="relative flex flex-col overflow-hidden rounded-2xl border bg-card p-6 shadow-sm">
            <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2F6BFF] via-[#19B5A7] to-[#2F6BFF]" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#2F6BFF]/10 blur-2xl" />
            <div className="relative mb-6 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2F6BFF]/10 text-[#2F6BFF]">
                  <CreditCard className="h-5 w-5" />
                </span>
                <div>
                  <span className="mb-0.5 block text-xs uppercase tracking-wider text-muted-foreground">
                    O teu plano atual
                  </span>
                  <h3 className="text-xl font-semibold">
                    {subscription?.plan.name ?? "—"}
                  </h3>
                </div>
              </div>
              {subscription && (
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
                    subscription.status === "ACTIVE"
                      ? "bg-emerald-100 text-emerald-700"
                      : subscription.status === "TRIALING"
                        ? "bg-teal-100 text-teal-700"
                        : subscription.status === "PENDING"
                          ? "bg-amber-100 text-amber-700"
                          : subscription.status === "PAST_DUE"
                            ? "bg-rose-100 text-rose-700"
                            : "bg-slate-100 text-slate-600"
                  )}
                >
                  {subscription.status === "TRIALING"
                    ? "Em teste"
                    : subscription.status === "ACTIVE"
                      ? "Ativa"
                      : subscription.status === "PENDING"
                        ? "Pendente"
                        : subscription.status}
                </span>
              )}
            </div>
            <div className="relative mt-auto">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-[#0A2540]">
                  {subscription
                    ? `${cents(
                        subscription.billingCycle === "ANNUAL"
                          ? subscription.plan.annualPrice
                          : subscription.plan.monthlyPrice
                      )}€`
                    : "—"}
                </span>
                <span className="text-sm text-muted-foreground">
                  /{subscription?.billingCycle === "ANNUAL" ? "ano" : "mês"}
                </span>
              </div>
              <Link
                href="/dashboard/subscription"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#2F6BFF] hover:underline"
              >
                Gerir subscrição <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Request status card */}
          <div className="flex flex-col rounded-2xl border bg-card p-6 shadow-sm">
            <div className="mb-6 flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#19B5A7]/10 text-[#19B5A7]">
                <ListChecks className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <span className="mb-0.5 block text-xs uppercase tracking-wider text-muted-foreground">
                  Estado do pedido
                </span>
                <h3 className="truncate text-xl font-semibold">
                  {lastRequest?.title ?? "Sem pedidos"}
                </h3>
              </div>
            </div>

            {lastRequest && lastStyle ? (
              <Link
                href={`/dashboard/requests/${lastRequest.id}`}
                className="mt-auto block"
              >
                {/* Horizontal timeline */}
                <div className="relative mb-4 flex items-center justify-between">
                  <div className="absolute left-3 right-3 top-1/2 h-0.5 -translate-y-1/2 bg-muted" />
                  <div
                    className="absolute left-3 top-1/2 h-0.5 -translate-y-1/2 bg-primary transition-all"
                    style={{
                      width: `calc((100% - 1.5rem) * ${
                        lastIdx <= 0
                          ? 0
                          : lastIdx / (requestStatusOrder.length - 1)
                      })`,
                    }}
                  />
                  {requestStatusOrder.map((status, idx) => {
                    const reached = lastIdx >= idx;
                    const isCurrent = lastIdx === idx;
                    return (
                      <span
                        key={status}
                        className={cn(
                          "relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-card transition-colors",
                          isCurrent
                            ? "border-primary bg-primary text-primary-foreground shadow-[0_0_0_4px] shadow-primary/15"
                            : reached
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-muted bg-muted text-muted-foreground"
                        )}
                      >
                        {reached && (
                          <Check className="h-3 w-3" strokeWidth={3} />
                        )}
                      </span>
                    );
                  })}
                </div>
                <div className="text-center">
                  <span className="block font-semibold">{lastStyle.label}</span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    Passo {lastStyle.step ?? "—"} de {totalRequestSteps}
                  </span>
                </div>
              </Link>
            ) : (
              <div className="mt-auto">
                <Link href="/dashboard/requests">
                  <Button variant="outline" size="sm" className="gap-2">
                    Fazer um pedido <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Quick stats */}
        <div className="flex flex-col gap-6 lg:col-span-4">
          <StatCard
            href="/dashboard/requests"
            label="Pedidos abertos"
            value={String(openRequests)}
            icon={<ClipboardList className="h-5 w-5" />}
            tint="bg-sky-100 text-sky-600 group-hover:bg-sky-500"
          />
          <StatCard
            href="/dashboard/subscription"
            label="Próxima renovação"
            value={nextRenewal ? shortDate(nextRenewal) : "—"}
            icon={<CalendarClock className="h-5 w-5" />}
            tint="bg-violet-100 text-violet-600 group-hover:bg-violet-500"
          />
          <StatCard
            href="/dashboard/requests"
            label="Pedidos concluídos"
            value={String(doneRequests)}
            icon={<CheckCircle2 className="h-5 w-5" />}
            tint="bg-emerald-100 text-emerald-600 group-hover:bg-emerald-500"
          />
        </div>
      </div>
    </div>
  );
}

function StatCard({
  href,
  label,
  value,
  icon,
  tint,
}: {
  href: string;
  label: string;
  value: string;
  icon: React.ReactNode;
  tint: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between rounded-2xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <div>
        <span className="mb-1 block text-xs text-muted-foreground">
          {label}
        </span>
        <span className="text-2xl font-bold">{value}</span>
      </div>
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full transition-colors group-hover:text-white",
          tint
        )}
      >
        {icon}
      </div>
    </Link>
  );
}
