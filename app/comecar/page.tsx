"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Dumbbell,
  Gift,
  Handshake,
  Hotel,
  Scissors,
  Sparkles,
  Stethoscope,
  Store,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import { Sector } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { useToast } from "@/components/ui/use-toast";
import {
  recommendPlan,
  annualFromMonthly,
  isSetupFree,
} from "@/features/plans/lib";
import { usePlans } from "@/features/plans/hooks";
import type { PlanCode } from "@/features/plans/schemas";
import { fetchApi } from "@/lib/api";
import { TRIAL_COPY_PT } from "@/lib/content/trial";
import { cn } from "@/lib/utils";

const sectorOptions: { value: Sector; label: string; icon: LucideIcon }[] = [
  { value: Sector.RESTAURANT, label: "Restaurante", icon: Utensils },
  {
    value: Sector.HAIR_SALON,
    label: "Cabeleireiro / Barbearia",
    icon: Scissors,
  },
  { value: Sector.HOTEL, label: "Hotel / Alojamento", icon: Hotel },
  { value: Sector.GYM, label: "Ginásio / Estúdio", icon: Dumbbell },
  { value: Sector.LOCAL_SERVICES, label: "Serviços locais", icon: Handshake },
  { value: Sector.SMALL_SHOP, label: "Loja local", icon: Store },
  { value: Sector.CLINIC, label: "Clínica", icon: Stethoscope },
  { value: Sector.OTHER, label: "Outro", icon: Sparkles },
];

const TOTAL_STEPS = 4;

const cents = (n: number) => (n / 100).toFixed(2).replace(".", ",");

export default function ComecarPage() {
  const router = useRouter();
  const { toast } = useToast();
  const { data: plans } = usePlans();

  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);

  const [sector, setSector] = useState<Sector>(Sector.RESTAURANT);
  const [needsBookings, setNeedsBookings] = useState(false);
  const [multipleStaff, setMultipleStaff] = useState(false);
  const [weeklySchedule, setWeeklySchedule] = useState(false);
  const [multipleLocationsOrRooms, setMultipleLocationsOrRooms] =
    useState(false);
  const [teamUsers, setTeamUsers] = useState(false);
  const [payments, setPayments] = useState(false);
  const [externalIntegrations, setExternalIntegrations] = useState(false);
  const [description, setDescription] = useState("");

  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [accountName, setAccountName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [billingCycle, setBillingCycle] = useState<"MONTHLY" | "ANNUAL">(
    "MONTHLY"
  );

  const recommendation = useMemo(
    () =>
      recommendPlan({
        sector,
        needsBookings,
        multipleStaff,
        weeklySchedule,
        multipleLocationsOrRooms,
        teamUsers,
        payments,
        externalIntegrations,
        description,
      }),
    [
      sector,
      needsBookings,
      multipleStaff,
      weeklySchedule,
      multipleLocationsOrRooms,
      teamUsers,
      payments,
      externalIntegrations,
      description,
    ]
  );

  const recommendedPlan = plans?.find(
    (p) => p.code === recommendation.planCode
  );

  async function submit() {
    setSubmitting(true);
    try {
      await fetchApi("/api/onboarding", {
        method: "POST",
        body: JSON.stringify({
          business: {
            name: businessName,
            sector,
            description,
            phone: phone || undefined,
            whatsapp: whatsapp || undefined,
          },
          answers: {
            sector,
            needsBookings,
            multipleStaff,
            weeklySchedule,
            multipleLocationsOrRooms,
            teamUsers,
            payments,
            externalIntegrations,
            description,
          },
          account: { name: accountName, email, password },
          planCode: recommendation.planCode as PlanCode,
          billingCycle,
        }),
      });

      await signIn("credentials", { email, password, redirect: false });
      toast({
        title: "Conta criada",
        description: "Bem-vindo à NorthSail! Estamos a tratar do teu pedido.",
      });
      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      toast({
        title: "Erro",
        description:
          err instanceof Error ? err.message : "Falha ao criar conta",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  }

  const canSubmit =
    !submitting &&
    !!businessName &&
    !!accountName &&
    !!email &&
    password.length >= 8;

  const stepMeta = [
    {
      title: "Qual é o seu negócio?",
      subtitle:
        "Personalizamos a plataforma para as suas necessidades específicas.",
    },
    {
      title: "O que precisa?",
      subtitle: "Marque tudo o que se aplica ao seu dia a dia.",
    },
    { title: "O plano que recomendamos", subtitle: recommendation.reason },
    { title: "Criar conta", subtitle: "Últimos detalhes para arrancarmos." },
  ][step - 1];

  return (
    <main className="hero-gradient ambient-glow relative flex min-h-screen flex-col items-center justify-center gap-6 overflow-hidden px-4 py-12 md:px-6 lg:flex-row lg:items-start lg:justify-center">
      {/* Main onboarding card */}
      <div className="relative z-10 flex w-full max-w-2xl flex-col rounded-2xl border border-line/40 bg-surface-lowest p-6 shadow-card md:p-8">
        {/* Header & brand */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="text-headline-sm font-black tracking-tight text-brand"
          >
            NorthSail
          </Link>
          <span className="text-label-sm text-ink-muted">
            Passo {step} de {TOTAL_STEPS}
          </span>
        </div>

        {/* Segmented progress bar */}
        <div className="mb-8 flex gap-1.5">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-1 flex-1 rounded-full transition-colors",
                i < step ? "bg-brand-accent" : "bg-surface-highest"
              )}
            />
          ))}
        </div>

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-headline-md text-brand">{stepMeta.title}</h1>
          <p className="mt-2 text-body-md text-ink-muted">
            {stepMeta.subtitle}
          </p>
        </div>

        {/* Step content */}
        <div className="flex-1">
          {step === 1 && (
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {sectorOptions.map((opt) => {
                  const selected = sector === opt.value;
                  const Icon = opt.icon;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setSector(opt.value)}
                      className={cn(
                        "group relative flex flex-col items-center justify-center gap-2 rounded-lg border p-4 text-center transition-colors",
                        selected
                          ? "border-2 border-brand-accent bg-brand-accent/5"
                          : "border-line/40 hover:border-line hover:bg-surface-low"
                      )}
                    >
                      {selected && (
                        <span className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-brand-accent text-white">
                          <Check className="h-2.5 w-2.5" strokeWidth={3} />
                        </span>
                      )}
                      <Icon
                        className={cn(
                          "h-8 w-8 transition-colors",
                          selected
                            ? "text-brand-accent"
                            : "text-ink-subtle group-hover:text-brand"
                        )}
                      />
                      <span
                        className={cn(
                          "text-label-md",
                          selected
                            ? "font-semibold text-brand-accent"
                            : "text-brand"
                        )}
                      >
                        {opt.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-2">
              <Toggle
                label="Reservas, marcações, pedidos ou inscrições"
                checked={needsBookings}
                onChange={setNeedsBookings}
              />
              <Toggle
                label="Vários profissionais, aulas ou turmas"
                checked={multipleStaff}
                onChange={setMultipleStaff}
              />
              <Toggle
                label="Calendário ou horários semanais"
                checked={weeklySchedule}
                onChange={setWeeklySchedule}
              />
              <Toggle
                label="Vários quartos, salas ou espaços"
                checked={multipleLocationsOrRooms}
                onChange={setMultipleLocationsOrRooms}
              />
              <Toggle
                label="Equipa com vários utilizadores"
                checked={teamUsers}
                onChange={setTeamUsers}
              />
              <Toggle
                label="Pagamentos online"
                checked={payments}
                onChange={setPayments}
              />
              <Toggle
                label="Integrações externas (Booking, POS, ERP, faturação…)"
                checked={externalIntegrations}
                onChange={setExternalIntegrations}
              />
              <div className="space-y-2 pt-2">
                <Label htmlFor="description">
                  Descreva o que pretende em 1-2 frases
                </Label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="min-h-[80px] w-full rounded-lg border border-line/40 bg-surface-lowest px-3 py-2 text-body-md outline-none transition-colors focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
                  placeholder="Ex: tenho um ginásio e quero uma app para gerir as aulas semanais e permitir inscrições."
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              {recommendedPlan ? (
                <div className="rounded-xl border border-line/40 bg-surface-low p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-label-sm uppercase tracking-wide text-ink-subtle">
                        {recommendedPlan.code}
                      </div>
                      <div className="text-headline-sm font-bold text-brand">
                        {recommendedPlan.name}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-headline-md text-brand">
                        {cents(
                          billingCycle === "ANNUAL"
                            ? annualFromMonthly(recommendedPlan.monthlyPrice)
                            : recommendedPlan.monthlyPrice
                        )}
                        €
                      </div>
                      <div className="text-label-sm text-ink-muted">
                        {billingCycle === "ANNUAL" ? "/ ano" : "/ mês"}
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-label-md text-ink-muted">
                    Setup:{" "}
                    {isSetupFree(recommendedPlan) ? (
                      <>
                        {recommendedPlan.setupPrice > 0 && (
                          <span className="line-through">
                            {cents(recommendedPlan.setupPrice)}€
                          </span>
                        )}{" "}
                        <span className="font-semibold text-teal">grátis</span>
                      </>
                    ) : (
                      `${cents(recommendedPlan.setupPrice)}€`
                    )}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {recommendedPlan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-teal"
                          aria-hidden
                        />
                        <span className="text-label-md text-ink-muted">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {recommendation.quoteOnly && (
                    <p className="mt-4 rounded-lg bg-amber-50 px-3 py-2 text-label-md text-amber-700">
                      Como pediu integrações externas, este preço é uma base —
                      confirmamos o orçamento consigo.
                    </p>
                  )}
                </div>
              ) : (
                <p className="text-body-md text-ink-muted">A carregar plano…</p>
              )}

              <div className="inline-flex rounded-lg border border-line/40 bg-surface-low p-1">
                <button
                  type="button"
                  onClick={() => setBillingCycle("MONTHLY")}
                  className={cn(
                    "rounded-md px-4 py-1.5 text-label-md transition-colors",
                    billingCycle === "MONTHLY"
                      ? "bg-surface-lowest text-brand shadow-sm"
                      : "text-ink-muted hover:text-brand"
                  )}
                >
                  Mensal
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle("ANNUAL")}
                  className={cn(
                    "rounded-md px-4 py-1.5 text-label-md transition-colors",
                    billingCycle === "ANNUAL"
                      ? "bg-surface-lowest text-brand shadow-sm"
                      : "text-ink-muted hover:text-brand"
                  )}
                >
                  Anual
                </button>
              </div>

              <div className="rounded-lg border border-teal/30 bg-teal-surface p-3">
                <p className="flex items-center gap-2 text-label-md font-medium text-teal-ink">
                  <Gift className="h-4 w-4 shrink-0" aria-hidden />
                  {TRIAL_COPY_PT.badge}
                </p>
                <p className="mt-1 text-label-md text-teal-ink/90">
                  {TRIAL_COPY_PT.onboarding}
                </p>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="businessName">Nome do negócio</Label>
                <Input
                  id="businessName"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Ginásio Vento Norte"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp</Label>
                  <Input
                    id="whatsapp"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="accountName">O seu nome</Label>
                <Input
                  id="accountName"
                  value={accountName}
                  onChange={(e) => setAccountName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <PasswordInput
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="mt-8 flex items-center justify-between border-t border-line/30 pt-6">
          {step > 1 ? (
            <Button
              variant="ghost"
              onClick={() => setStep((s) => s - 1)}
              className="gap-2 text-ink-muted"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
          ) : (
            <span />
          )}

          {step < TOTAL_STEPS ? (
            <Button onClick={() => setStep((s) => s + 1)} className="gap-2">
              {step === 2 ? "Ver plano recomendado" : "Continuar"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={submit} disabled={!canSubmit} className="gap-2">
              {submitting && <Spinner size="sm" className="mr-1" />}
              Criar conta e começar
            </Button>
          )}
        </div>
      </div>

      {/* Live recommended-plan preview */}
      <aside className="relative z-10 w-full lg:sticky lg:top-12 lg:w-[340px]">
        <div className="relative overflow-hidden rounded-2xl border border-line/40 bg-surface-lowest p-6 shadow-card">
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-brand-accent to-teal" />
          <div className="mt-1 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-brand-accent" aria-hidden />
            <span className="text-label-sm font-bold uppercase tracking-wide text-brand-accent">
              Recomendado para si
            </span>
          </div>

          <h3 className="mt-4 text-headline-sm font-bold text-brand">
            {recommendedPlan?.name ?? "A calcular…"}
          </h3>

          {recommendedPlan && (
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-headline-md text-brand">
                {cents(
                  billingCycle === "ANNUAL"
                    ? recommendedPlan.annualPrice
                    : recommendedPlan.monthlyPrice
                )}
                €
              </span>
              <span className="text-body-md text-ink-muted">
                {billingCycle === "ANNUAL" ? "/ano" : "/mês"}
              </span>
            </div>
          )}

          <ul className="mt-5 space-y-2">
            {(recommendedPlan?.features ?? []).slice(0, 4).map((f) => (
              <li key={f} className="flex items-start gap-2">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-teal"
                  aria-hidden
                />
                <span className="text-label-md leading-tight text-ink-muted">
                  {f}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex items-center justify-center gap-2 rounded-full border border-teal/20 bg-teal-surface px-4 py-2">
            <Gift className="h-4 w-4 text-teal-ink" aria-hidden />
            <span className="text-label-sm font-semibold text-teal-ink">
              {TRIAL_COPY_PT.badge}
            </span>
          </div>
        </div>
        <p className="mt-3 text-balance px-2 text-center text-label-sm text-ink-subtle">
          O plano recomendado ajusta-se automaticamente às suas respostas para
          garantir a melhor solução.
        </p>
      </aside>
    </main>
  );
}

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 transition-colors",
        checked
          ? "border-brand-accent/40 bg-brand-accent/5"
          : "border-transparent hover:border-line/40 hover:bg-surface-low"
      )}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 rounded border-line text-brand-accent focus:ring-brand-accent/50"
      />
      <span className="text-label-md text-brand">{label}</span>
    </label>
  );
}
