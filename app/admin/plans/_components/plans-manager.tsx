"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Globe,
  Smartphone,
  LayoutGrid,
  Store,
  ShieldCheck,
  Pencil,
  type LucideIcon,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { annualFromMonthly, isSetupFree } from "@/features/plans/lib";

export interface AdminPlan {
  id: string;
  code: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  setupPrice: number;
  setupPromo: boolean;
  description: string;
  features: string[];
  active: boolean;
  clientCount: number;
}

const ICONS: Record<string, LucideIcon> = {
  PRESENCA: Globe,
  MINI_APP: Smartphone,
  MINI_APP_PLUS: LayoutGrid,
  BUSINESS_LOCAL: Store,
  PRO_GESTAO: ShieldCheck,
};

const eur = (cents: number) => (cents / 100).toFixed(2).replace(".", ",");
const toEurInput = (cents: number) => (cents / 100).toString();
const toCents = (v: string) => Math.round((parseFloat(v) || 0) * 100);

export function PlansManager({ plans }: { plans: AdminPlan[] }) {
  const router = useRouter();
  const { toast } = useToast();
  const [editing, setEditing] = useState<AdminPlan | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  async function patch(id: string, data: Record<string, unknown>) {
    const res = await fetch(`/api/plans/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("PATCH failed");
  }

  async function toggleActive(plan: AdminPlan) {
    setBusyId(plan.id);
    try {
      await patch(plan.id, { active: !plan.active });
      toast({
        title: plan.active ? "Plano desativado" : "Plano ativado",
      });
      router.refresh();
    } catch {
      toast({
        title: "Erro",
        description: "Não foi possível atualizar.",
        variant: "destructive",
      });
    } finally {
      setBusyId(null);
    }
  }

  return (
    <>
      <div className="flex flex-col gap-3">
        {plans.map((plan) => {
          const Icon = ICONS[plan.code] ?? LayoutGrid;
          return (
            <div
              key={plan.id}
              className="flex flex-col gap-4 rounded-xl border bg-card p-5 shadow-sm transition-colors hover:border-primary/30 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex flex-1 items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-muted text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-xs font-medium",
                        plan.active
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-rose-100 text-rose-700"
                      )}
                    >
                      {plan.active ? "Ativo" : "Inativo"}
                    </span>
                    {plan.setupPromo && (
                      <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
                        Promo: setup grátis
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{plan.code}</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-6 md:justify-end">
                <div className="flex flex-col">
                  <span className="font-medium">
                    {eur(plan.monthlyPrice)}€
                    <span className="font-normal text-muted-foreground">
                      /mês
                    </span>
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {eur(annualFromMonthly(plan.monthlyPrice))}€/ano
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Setup:{" "}
                    {isSetupFree(plan) ? (
                      <>
                        {plan.setupPrice > 0 && (
                          <span className="line-through">
                            {eur(plan.setupPrice)}€
                          </span>
                        )}{" "}
                        <span className="font-medium text-emerald-600">
                          Grátis
                        </span>
                      </>
                    ) : (
                      `${eur(plan.setupPrice)}€`
                    )}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium tabular-nums">
                    {plan.clientCount}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Clientes
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => toggleActive(plan)}
                    disabled={busyId === plan.id}
                    aria-label={plan.active ? "Desativar" : "Ativar"}
                    className={cn(
                      "relative h-6 w-11 shrink-0 rounded-full transition-colors disabled:opacity-50",
                      plan.active ? "bg-emerald-500" : "bg-muted-foreground/30"
                    )}
                  >
                    <span
                      className={cn(
                        "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all",
                        plan.active ? "left-[22px]" : "left-0.5"
                      )}
                    />
                  </button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setEditing(plan)}
                    aria-label="Editar"
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <EditDialog
        plan={editing}
        onClose={() => setEditing(null)}
        onSaved={() => {
          setEditing(null);
          router.refresh();
        }}
        patch={patch}
      />
    </>
  );
}

function EditDialog({
  plan,
  onClose,
  onSaved,
  patch,
}: {
  plan: AdminPlan | null;
  onClose: () => void;
  onSaved: () => void;
  patch: (id: string, data: Record<string, unknown>) => Promise<void>;
}) {
  const { toast } = useToast();
  const [saving, setSaving] = useState(false);

  // Local form state, keyed by plan id so it resets when a new plan opens.
  const [form, setForm] = useState(() => emptyForm());
  const [loadedId, setLoadedId] = useState<string | null>(null);

  if (plan && plan.id !== loadedId) {
    setLoadedId(plan.id);
    setForm({
      name: plan.name,
      monthly: toEurInput(plan.monthlyPrice),
      setup: toEurInput(plan.setupPrice),
      setupPromo: plan.setupPromo,
      description: plan.description,
      features: plan.features.join("\n"),
    });
  }

  const annualPreview = (toCents(form.monthly) * 10) / 100;

  async function save() {
    if (!plan) return;
    setSaving(true);
    try {
      await patch(plan.id, {
        name: form.name,
        monthlyPrice: toCents(form.monthly),
        setupPrice: toCents(form.setup),
        setupPromo: form.setupPromo,
        description: form.description,
        features: form.features
          .split("\n")
          .map((f) => f.trim())
          .filter(Boolean),
      });
      toast({ title: "Plano atualizado" });
      onSaved();
    } catch {
      toast({
        title: "Erro",
        description: "Não foi possível guardar.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  }

  return (
    <Dialog open={!!plan} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Editar plano {plan?.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="p-name">Nome</Label>
            <Input
              id="p-name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="p-monthly">Mensal (€)</Label>
              <Input
                id="p-monthly"
                type="number"
                step="0.01"
                value={form.monthly}
                onChange={(e) => setForm({ ...form, monthly: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="p-setup">Setup (€)</Label>
              <Input
                id="p-setup"
                type="number"
                step="0.01"
                value={form.setup}
                onChange={(e) => setForm({ ...form, setup: e.target.value })}
              />
            </div>
          </div>

          <p className="rounded-md bg-muted/50 px-3 py-2 text-xs text-muted-foreground">
            Anual (automático: mensal × 10):{" "}
            <span className="font-medium text-foreground">
              {annualPreview.toFixed(2).replace(".", ",")}€
            </span>
          </p>

          <label className="flex items-center gap-3 rounded-lg border p-3">
            <input
              type="checkbox"
              checked={form.setupPromo}
              onChange={(e) =>
                setForm({ ...form, setupPromo: e.target.checked })
              }
              className="h-4 w-4"
            />
            <span className="text-sm">
              <span className="font-medium">Promoção: setup grátis</span>
              <span className="block text-xs text-muted-foreground">
                O preço de setup continua visível, mas riscado e a 0€.
              </span>
            </span>
          </label>
          <div className="space-y-2">
            <Label htmlFor="p-desc">Descrição</Label>
            <textarea
              id="p-desc"
              rows={2}
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="w-full resize-y rounded-md border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="p-feats">Funcionalidades (uma por linha)</Label>
            <textarea
              id="p-feats"
              rows={5}
              value={form.features}
              onChange={(e) => setForm({ ...form, features: e.target.value })}
              className="w-full resize-y rounded-md border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={saving}>
            Cancelar
          </Button>
          <Button onClick={save} disabled={saving}>
            {saving && <Spinner size="sm" className="mr-2" />}
            Guardar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function emptyForm() {
  return {
    name: "",
    monthly: "0",
    setup: "0",
    setupPromo: false,
    description: "",
    features: "",
  };
}
