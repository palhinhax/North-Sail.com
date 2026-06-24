"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Sector } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { useToast } from "@/components/ui/use-toast";
import { Container, MarketingNav } from "@/components/marketing";
import { recommendPlan } from "@/features/plans/lib";
import { usePlans } from "@/features/plans/hooks";
import type { PlanCode } from "@/features/plans/schemas";
import { fetchApi } from "@/lib/api";

const sectorOptions: { value: Sector; label: string }[] = [
  { value: Sector.RESTAURANT, label: "Restaurante" },
  { value: Sector.HAIR_SALON, label: "Cabeleireiro / Barbearia" },
  { value: Sector.HOTEL, label: "Hotel / Alojamento" },
  { value: Sector.GYM, label: "Ginásio / Estúdio" },
  { value: Sector.LOCAL_SERVICES, label: "Serviços locais" },
  { value: Sector.SMALL_SHOP, label: "Loja pequena" },
  { value: Sector.CLINIC, label: "Clínica" },
  { value: Sector.OTHER, label: "Outro" },
];

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

  return (
    <div className="hero-gradient ambient-glow relative min-h-screen overflow-hidden">
      <MarketingNav />
      <Container className="relative z-10 max-w-2xl pb-16 pt-28">
        <div className="mb-10 text-center">
          <span className="text-label-md uppercase tracking-wider text-ink-muted">
            Passo {step} de 4
          </span>
          <h1 className="mt-2 text-display-sm text-brand md:text-display-lg">
            Começar com a NorthSail
          </h1>
          <p className="mt-3 text-body-md text-ink-muted">
            Tratamos da app, domínio e manutenção. Tu focas no negócio.
          </p>
        </div>

        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>1. O teu negócio</CardTitle>
              <CardDescription>Em que setor estás?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                {sectorOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setSector(opt.value)}
                    className={`rounded-md border px-3 py-3 text-left text-sm transition ${
                      sector === opt.value
                        ? "border-primary bg-primary/5"
                        : "hover:bg-muted"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              <div className="flex justify-end">
                <Button onClick={() => setStep(2)}>Continuar</Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>2. O que precisas</CardTitle>
              <CardDescription>Marca o que se aplica.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Checkbox
                label="Reservas / marcações / pedidos / inscrições"
                checked={needsBookings}
                onChange={setNeedsBookings}
              />
              <Checkbox
                label="Vários profissionais / aulas / turmas"
                checked={multipleStaff}
                onChange={setMultipleStaff}
              />
              <Checkbox
                label="Calendário ou horários semanais"
                checked={weeklySchedule}
                onChange={setWeeklySchedule}
              />
              <Checkbox
                label="Vários quartos, salas ou espaços"
                checked={multipleLocationsOrRooms}
                onChange={setMultipleLocationsOrRooms}
              />
              <Checkbox
                label="Equipa com vários utilizadores"
                checked={teamUsers}
                onChange={setTeamUsers}
              />
              <Checkbox
                label="Pagamentos online"
                checked={payments}
                onChange={setPayments}
              />
              <Checkbox
                label="Integrações externas (Booking, POS, ERP, faturação…)"
                checked={externalIntegrations}
                onChange={setExternalIntegrations}
              />
              <div className="space-y-2">
                <Label htmlFor="description">
                  Descreve o que queres em 1-2 frases
                </Label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="min-h-[80px] w-full rounded-md border bg-background px-3 py-2 text-sm"
                  placeholder="Ex: tenho um ginásio e quero uma app para gerir as aulas semanais e permitir inscrições."
                />
              </div>
              <div className="flex justify-between">
                <Button variant="ghost" onClick={() => setStep(1)}>
                  Voltar
                </Button>
                <Button onClick={() => setStep(3)}>
                  Ver plano recomendado
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>3. O plano que recomendamos</CardTitle>
              <CardDescription>{recommendation.reason}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recommendedPlan ? (
                <div className="rounded-lg border bg-background p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-wide text-muted-foreground">
                        {recommendedPlan.code}
                      </div>
                      <div className="text-xl font-bold">
                        {recommendedPlan.name}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">
                        {cents(
                          billingCycle === "ANNUAL"
                            ? recommendedPlan.annualPrice
                            : recommendedPlan.monthlyPrice
                        )}
                        €
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {billingCycle === "ANNUAL" ? "/ ano" : "/ mês"}
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Setup: {cents(recommendedPlan.setupPrice)}€
                  </p>
                  <ul className="mt-3 space-y-1 text-sm">
                    {recommendedPlan.features.map((f) => (
                      <li key={f}>• {f}</li>
                    ))}
                  </ul>
                  {recommendation.quoteOnly && (
                    <p className="mt-3 text-sm text-amber-700">
                      Como pediste integrações externas, este preço é uma base —
                      confirmamos o orçamento contigo.
                    </p>
                  )}
                </div>
              ) : (
                <p>A carregar plano…</p>
              )}

              <div className="flex gap-2">
                <Button
                  type="button"
                  variant={billingCycle === "MONTHLY" ? "default" : "outline"}
                  onClick={() => setBillingCycle("MONTHLY")}
                >
                  Mensal
                </Button>
                <Button
                  type="button"
                  variant={billingCycle === "ANNUAL" ? "default" : "outline"}
                  onClick={() => setBillingCycle("ANNUAL")}
                >
                  Anual
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                Começas com 30 dias grátis. Só pagas no fim do trial.
              </p>

              <div className="flex justify-between">
                <Button variant="ghost" onClick={() => setStep(2)}>
                  Voltar
                </Button>
                <Button onClick={() => setStep(4)}>Continuar</Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 4 && (
          <Card>
            <CardHeader>
              <CardTitle>4. Criar conta</CardTitle>
              <CardDescription>
                Últimos detalhes para arrancarmos.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
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
                <Label htmlFor="accountName">O teu nome</Label>
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
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-between">
                <Button variant="ghost" onClick={() => setStep(3)}>
                  Voltar
                </Button>
                <Button
                  onClick={submit}
                  disabled={
                    submitting ||
                    !businessName ||
                    !accountName ||
                    !email ||
                    password.length < 8
                  }
                >
                  {submitting && <Spinner size="sm" className="mr-2" />}
                  Criar conta e começar
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </Container>
    </div>
  );
}

function Checkbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded-md border px-3 py-2 hover:bg-muted">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4"
      />
      <span className="text-sm">{label}</span>
    </label>
  );
}
