import Link from "next/link";
import { redirect } from "next/navigation";
import { AlertTriangle, CheckCircle2, Clock, CreditCard } from "lucide-react";
import { SubscriptionStatus } from "@prisma/client";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe/server";
import { getTrialDaysLeft } from "@/features/subscriptions/lib";
import {
  annualFromMonthly,
  effectiveSetupPrice,
  isSetupFree,
} from "@/features/plans/lib";
import { syncSubscriptionFromStripe } from "@/lib/stripe/sync";
import { planSelfServeEnabled } from "@/lib/stripe/portal-config";
import { StripeCheckout } from "./_components/stripe-checkout";
import { ManageBillingButton } from "./_components/manage-billing-button";

const outlineButton =
  "flex w-full items-center justify-center rounded-lg border border-line bg-surface-lowest px-4 py-3 text-label-md font-medium text-brand shadow-sm transition-colors hover:bg-surface-low";
const subtleLink =
  "py-1 text-label-sm font-medium text-brand-accent hover:underline";

const cents = (n: number) => (n / 100).toFixed(2).replace(".", ",");

const statusBadges: Record<
  SubscriptionStatus,
  { label: string; dot: string; badge: string }
> = {
  TRIALING: {
    label: "Em período grátis",
    dot: "bg-teal",
    badge: "bg-teal-surface text-teal-ink",
  },
  ACTIVE: {
    label: "Ativa",
    dot: "bg-emerald-500",
    badge: "bg-emerald-50 text-emerald-700",
  },
  PAST_DUE: {
    label: "Pagamento falhado",
    dot: "bg-destructive",
    badge: "bg-destructive/10 text-destructive",
  },
  CANCELED: {
    label: "Cancelada",
    dot: "bg-ink-subtle",
    badge: "bg-surface-high text-ink-muted",
  },
  PENDING: {
    label: "Pagamento pendente",
    dot: "bg-amber-500",
    badge: "bg-amber-100 text-amber-700",
  },
};

export default async function SubscriptionPage({
  searchParams,
}: {
  searchParams: { status?: string };
}) {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/login");
  if (session.user.role === "ADMIN") redirect("/admin/subscriptions");

  let business = await prisma.business.findUnique({
    where: { ownerId: session.user.id },
    include: { subscription: { include: { plan: true } } },
  });
  if (!business?.subscription) {
    return <EmptyState />;
  }

  // Reconcile with Stripe whenever there's a Stripe subscription that isn't yet
  // settled locally (covers the case where the webhook isn't configured and the
  // user navigates here without the ?status=pago return param).
  if (
    business.subscription.stripeSubscriptionId &&
    business.subscription.status !== "ACTIVE" &&
    business.subscription.status !== "CANCELED"
  ) {
    try {
      await syncSubscriptionFromStripe(
        business.subscription.stripeSubscriptionId
      );
      business = await prisma.business.findUnique({
        where: { ownerId: session.user.id },
        include: { subscription: { include: { plan: true } } },
      });
    } catch {
      // ignore — webhook will reconcile
    }
  }
  if (!business?.subscription) {
    return <EmptyState />;
  }

  const { subscription } = business;
  const plan = subscription.plan;
  const isAnnual = subscription.billingCycle === "ANNUAL";
  const recurring = isAnnual
    ? annualFromMonthly(plan.monthlyPrice)
    : plan.monthlyPrice;
  const setup = effectiveSetupPrice(plan);
  const firstTotal = recurring + setup;
  const status = subscription.status;
  const isActive = status === "ACTIVE";
  const isTrialing = status === "TRIALING";
  const hasBilling = !!business.stripeCustomerId;
  const hasStripeSub = !!subscription.stripeSubscriptionId;
  // No real Stripe subscription yet (trial, pending, or a demo/manual "active")
  // → let the customer subscribe so it becomes manageable online.
  const needsStripeSetup = status !== "CANCELED" && !hasStripeSub;
  // When plans are synced to Stripe, plan/cycle changes are self-service in the
  // portal; otherwise they go through a request to our team.
  const selfServe = hasBilling ? await planSelfServeEnabled() : false;

  const trialDays = getTrialDaysLeft({
    status,
    trialEndsAt: subscription.trialEndsAt?.toISOString() ?? null,
  });

  // Best-effort: show the saved card. Never block the page if Stripe is down.
  let card: { brand: string; last4: string } | null = null;
  if (hasBilling) {
    try {
      const pms = await stripe.paymentMethods.list({
        customer: business.stripeCustomerId!,
        type: "card",
        limit: 1,
      });
      const c = pms.data[0]?.card;
      if (c) card = { brand: c.brand, last4: c.last4 };
    } catch {
      // ignore
    }
  }

  const badge = statusBadges[status];
  const renewal = subscription.currentPeriodEnd
    ? new Date(subscription.currentPeriodEnd).toLocaleDateString("pt-PT", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : null;
  const chargeDate = subscription.trialEndsAt
    ? new Date(subscription.trialEndsAt).toLocaleDateString("pt-PT", {
        day: "2-digit",
        month: "long",
      })
    : null;

  return (
    <div className="mx-auto w-full max-w-2xl space-y-5">
      <h1 className="text-display-sm text-brand">A tua subscrição</h1>

      {searchParams?.status === "pago" && (
        <Banner tone="success">
          <CheckCircle2 className="h-5 w-5 shrink-0" />
          Pagamento recebido — a tua subscrição está a ser confirmada.
        </Banner>
      )}

      {/* Plan overview */}
      <section className="relative overflow-hidden rounded-2xl border border-line bg-surface-lowest p-6 shadow-card">
        <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-brand-accent/5 blur-2xl" />
        <div className="relative flex items-start justify-between gap-4">
          <div>
            <h2 className="text-headline-sm text-brand">O teu plano</h2>
            <p className="text-body-md text-ink-muted">{plan.name}</p>
          </div>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-label-sm font-semibold uppercase tracking-wide ${badge.badge}`}
          >
            <span className={`h-2 w-2 rounded-full ${badge.dot}`} />
            {badge.label}
          </span>
        </div>

        <p className="relative mt-4 text-display-sm text-brand">
          {cents(recurring)}€{" "}
          <span className="text-body-md font-normal text-ink-muted">
            / {isAnnual ? "ano" : "mês"}
          </span>
        </p>

        {plan.features.length > 0 && (
          <>
            <div className="relative my-4 h-px w-full bg-line/60" />
            <ul className="relative flex flex-col gap-2">
              {plan.features.slice(0, 3).map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-body-md text-ink"
                >
                  <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-teal" />
                  {f}
                </li>
              ))}
            </ul>
          </>
        )}
      </section>

      {/* Trial highlight */}
      {isTrialing && trialDays !== null && (
        <div className="flex items-start gap-3 rounded-2xl border border-teal/30 bg-teal-surface p-4">
          <span className="mt-0.5 rounded-full bg-teal/10 p-1">
            <Clock className="h-5 w-5 text-teal-ink" />
          </span>
          <div>
            <p className="text-label-md font-bold text-teal-ink">
              Tens {trialDays} dia{trialDays === 1 ? "" : "s"} grátis restantes
            </p>
            <p className="mt-1 text-label-sm text-teal-ink/80">
              Sem cartão, sem compromisso.
              {chargeDate ? ` Começas a pagar a ${chargeDate}.` : ""}
            </p>
          </div>
        </div>
      )}

      {/* Past-due alert */}
      {status === "PAST_DUE" && (
        <Banner tone="error">
          <AlertTriangle className="h-5 w-5 shrink-0" />O último pagamento
          falhou. Atualiza o método de pagamento para manteres o serviço ativo.
        </Banner>
      )}

      {/* Canceled note */}
      {status === "CANCELED" && (
        <Banner tone="muted">
          A tua subscrição foi cancelada. Podes reativá-la quando quiseres.
        </Banner>
      )}

      {/* Payment flow — whenever there's no real Stripe subscription yet */}
      {needsStripeSetup && (
        <div className="space-y-3">
          <p className="text-body-md text-ink-muted">
            {isTrialing
              ? "Confirma agora a subscrição para garantir o serviço sem interrupção — ficas já com pagamento ativo."
              : isActive
                ? "A tua subscrição está ativa mas ainda não está ligada a um pagamento. Confirma para poderes geri-la, cancelar e renovar automaticamente."
                : "Confirma a subscrição para ativares o pagamento e a gestão online."}
          </p>
          <div className="rounded-2xl border border-line bg-surface-low p-4 text-sm">
            <div className="flex justify-between">
              <span className="text-ink-muted">
                {plan.name} ({isAnnual ? "anual" : "mensal"})
              </span>
              <span>{cents(recurring)}€</span>
            </div>
            {!isSetupFree(plan) && (
              <div className="mt-1 flex justify-between">
                <span className="text-ink-muted">Setup (uma vez)</span>
                <span>{cents(plan.setupPrice)}€</span>
              </div>
            )}
            <div className="mt-2 flex justify-between border-t border-line pt-2 font-semibold">
              <span>Total hoje</span>
              <span>{cents(firstTotal)}€</span>
            </div>
          </div>
          <StripeCheckout priceLabel={`${cents(firstTotal)}€`} />
        </div>
      )}

      {/* Billing details */}
      {(isActive || isTrialing || status === "PAST_DUE") && (
        <section className="rounded-2xl border border-line bg-surface-lowest p-6 shadow-card">
          <h2 className="mb-4 text-headline-sm text-brand">
            Detalhes de faturação
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-4">
            <Detail label="Ciclo" value={isAnnual ? "Anual" : "Mensal"} />
            <Detail label="Valor recorrente" value={`${cents(recurring)}€`} />
            {renewal && <Detail label="Próxima renovação" value={renewal} />}
            <div className="flex flex-col gap-1">
              <span className="text-label-sm uppercase tracking-wider text-ink-muted">
                Método
              </span>
              {card ? (
                <span className="flex items-center gap-2 text-body-md font-medium capitalize text-ink">
                  <CreditCard className="h-[18px] w-[18px] text-ink-subtle" />
                  {card.brand} •••• {card.last4}
                </span>
              ) : (
                <span className="text-body-md font-medium text-ink-muted">
                  —
                </span>
              )}
            </div>
            {!isSetupFree(plan) && (
              <Detail
                label="Setup (1ª fatura)"
                value={`${cents(plan.setupPrice)}€`}
              />
            )}
          </div>
        </section>
      )}

      {/* Actions */}
      {hasBilling && (
        <div className="flex flex-col gap-3">
          <ManageBillingButton
            withExternalIcon
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-container px-4 py-3 text-label-md font-medium text-white shadow-sm transition-colors hover:bg-brand disabled:opacity-60"
          >
            {status === "PAST_DUE" ? "Atualizar pagamento" : "Gerir pagamentos"}
          </ManageBillingButton>

          {selfServe ? (
            <ManageBillingButton className={outlineButton}>
              Alterar plano ou ciclo
            </ManageBillingButton>
          ) : (
            <Link href="/dashboard/requests" className={outlineButton}>
              Alterar plano
            </Link>
          )}

          <div className="mt-1 flex items-center justify-between px-1">
            {!selfServe && (
              <Link href="/dashboard/requests" className={subtleLink}>
                Mudar ciclo de faturação
              </Link>
            )}
            <a
              href="mailto:ajuda@north-sail.com"
              className={`${subtleLink} ${selfServe ? "ml-auto" : ""}`}
            >
              Pedir ajuda
            </a>
          </div>
        </div>
      )}

      {/* Destructive action */}
      {hasBilling &&
        subscription.stripeSubscriptionId &&
        status !== "CANCELED" && (
          <div className="pt-2 text-center">
            <ManageBillingButton
              flow="cancel"
              className="px-4 py-2 text-label-sm font-medium text-destructive/80 transition-colors hover:text-destructive hover:underline disabled:opacity-60"
            >
              Cancelar subscrição
            </ManageBillingButton>
          </div>
        )}
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-label-sm uppercase tracking-wider text-ink-muted">
        {label}
      </span>
      <span className="text-body-md font-medium text-ink">{value}</span>
    </div>
  );
}

function Banner({
  tone,
  children,
}: {
  tone: "success" | "error" | "muted";
  children: React.ReactNode;
}) {
  const tones = {
    success: "border-emerald-200 bg-emerald-50 text-emerald-700",
    error: "border-destructive/30 bg-destructive/10 text-destructive",
    muted: "border-line bg-surface-low text-ink-muted",
  };
  return (
    <div
      className={`flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm ${tones[tone]}`}
    >
      {children}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="mx-auto w-full max-w-2xl space-y-5">
      <h1 className="text-display-sm text-brand">A tua subscrição</h1>
      <div className="flex flex-col items-center rounded-2xl border border-line bg-surface-lowest px-6 py-16 text-center shadow-card">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-surface-high">
          <CreditCard className="h-7 w-7 text-ink-subtle" />
        </div>
        <p className="font-medium text-ink">Ainda não tens uma subscrição</p>
        <p className="mt-1 text-body-md text-ink-muted">
          Escolhe um plano para colocares o teu site online.
        </p>
        <Link
          href="/dashboard/business"
          className="mt-6 rounded-lg bg-brand-container px-5 py-2.5 text-label-md font-medium text-white shadow-sm transition-colors hover:bg-brand"
        >
          Ver planos
        </Link>
      </div>
    </div>
  );
}
