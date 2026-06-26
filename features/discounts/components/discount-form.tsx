"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { DiscountType } from "@prisma/client";
import { createDiscountSchema, type CreateDiscountInput } from "../schemas";

export interface PlanOption {
  id: string;
  name: string;
  monthlyPrice: number; // cêntimos
}

interface Props {
  plans: PlanOption[];
  onSubmit: (data: CreateDiscountInput) => void;
  isLoading?: boolean;
}

const typeLabels: Record<DiscountType, string> = {
  FREE_PERIOD: "Meses grátis",
  PERCENT: "Percentagem",
  FIXED: "Valor fixo",
  FREE_SETUP: "Setup grátis",
};

const euros = (cents: number) => (cents / 100).toFixed(2).replace(".", ",");

export function DiscountForm({ plans, onSubmit, isLoading }: Props) {
  const [type, setType] = useState<DiscountType>(DiscountType.FREE_PERIOD);
  const [value, setValue] = useState(""); // % (PERCENT) ou € (FIXED)
  const [durationMonths, setDurationMonths] = useState("");
  const [appliesToPlanIds, setAppliesToPlanIds] = useState<string[]>([]);
  const [maxRedemptions, setMaxRedemptions] = useState("");
  const [perAccountLimit, setPerAccountLimit] = useState("1");
  const [validUntil, setValidUntil] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const needsValue =
    type === DiscountType.PERCENT || type === DiscountType.FIXED;
  const needsDuration = type !== DiscountType.FREE_SETUP;

  // Custo estimado (apenas indicativo) para FREE_PERIOD.
  const estimate = useMemo(() => {
    if (type !== DiscountType.FREE_PERIOD) return null;
    const m = parseInt(durationMonths, 10);
    if (!m) return null;
    const targets = appliesToPlanIds.length
      ? plans.filter((p) => appliesToPlanIds.includes(p.id))
      : plans;
    if (!targets.length) return null;
    const prices = targets.map((p) => p.monthlyPrice * m);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    return min === max ? `~${euros(min)} €` : `${euros(min)}–${euros(max)} €`;
  }, [type, durationMonths, appliesToPlanIds, plans]);

  function togglePlan(id: string) {
    setAppliesToPlanIds((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});

    // FIXED é introduzido em € e guardado em cêntimos.
    const numericValue = value === "" ? 0 : Number(value);
    const candidate = {
      type,
      value:
        type === DiscountType.FIXED
          ? Math.round(numericValue * 100)
          : type === DiscountType.PERCENT
            ? numericValue
            : 0,
      durationMonths: durationMonths ? Number(durationMonths) : null,
      appliesToPlanIds,
      maxRedemptions: maxRedemptions ? Number(maxRedemptions) : null,
      perAccountLimit: perAccountLimit ? Number(perAccountLimit) : 1,
      validUntil: validUntil ? new Date(validUntil) : null,
      notes: notes || undefined,
    };

    const parsed = createDiscountSchema.safeParse(candidate);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0]?.toString() ?? "form";
        fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    onSubmit(parsed.data);
  }

  const unlimited = !maxRedemptions && !validUntil;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="type">Tipo de código</Label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value as DiscountType)}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        >
          {Object.values(DiscountType).map((t) => (
            <option key={t} value={t}>
              {typeLabels[t]}
            </option>
          ))}
        </select>
      </div>

      {needsValue && (
        <div className="space-y-2">
          <Label htmlFor="value">
            {type === DiscountType.PERCENT
              ? "Percentagem (%)"
              : "Valor fixo (€)"}
          </Label>
          <Input
            id="value"
            type="number"
            min={type === DiscountType.PERCENT ? 1 : 0.01}
            max={type === DiscountType.PERCENT ? 100 : undefined}
            step={type === DiscountType.PERCENT ? 1 : 0.01}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={type === DiscountType.PERCENT ? "50" : "5,00"}
          />
          {errors.value && (
            <p className="text-sm text-destructive">{errors.value}</p>
          )}
        </div>
      )}

      {needsDuration && (
        <div className="space-y-2">
          <Label htmlFor="durationMonths">
            {type === DiscountType.FREE_PERIOD
              ? "Meses grátis"
              : "Duração do desconto (meses)"}
          </Label>
          <Input
            id="durationMonths"
            type="number"
            min={1}
            max={60}
            value={durationMonths}
            onChange={(e) => setDurationMonths(e.target.value)}
            placeholder={type === DiscountType.FREE_PERIOD ? "12" : "3"}
          />
          {errors.durationMonths && (
            <p className="text-sm text-destructive">{errors.durationMonths}</p>
          )}
        </div>
      )}

      <div className="space-y-2">
        <Label>Planos elegíveis</Label>
        <p className="text-xs text-muted-foreground">
          Deixa vazio para aplicar a todos os planos.
        </p>
        <div className="grid grid-cols-2 gap-2">
          {plans.map((p) => (
            <label
              key={p.id}
              className="flex cursor-pointer items-center gap-2 rounded-md border border-input px-3 py-2 text-sm"
            >
              <input
                type="checkbox"
                checked={appliesToPlanIds.includes(p.id)}
                onChange={() => togglePlan(p.id)}
              />
              {p.name}
            </label>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="maxRedemptions">Usos máximos</Label>
          <Input
            id="maxRedemptions"
            type="number"
            min={1}
            value={maxRedemptions}
            onChange={(e) => setMaxRedemptions(e.target.value)}
            placeholder="Ilimitado"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="perAccountLimit">Usos por conta</Label>
          <Input
            id="perAccountLimit"
            type="number"
            min={1}
            value={perAccountLimit}
            onChange={(e) => setPerAccountLimit(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="validUntil">Válido até (opcional)</Label>
        <Input
          id="validUntil"
          type="date"
          value={validUntil}
          onChange={(e) => setValidUntil(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Notas (opcional)</Label>
        <Input
          id="notes"
          value={notes}
          maxLength={280}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Campanha, parceiro, motivo…"
        />
      </div>

      {estimate && (
        <p className="rounded-md bg-surface-low px-3 py-2 text-sm text-muted-foreground">
          Custo estimado da oferta: {estimate} (domínio + alojamento incluídos
          enquanto ativo).
        </p>
      )}

      {unlimited && (
        <p className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-700">
          Este código fica sem limite de usos e sem validade. Considera definir
          pelo menos um.
        </p>
      )}

      <div className="flex justify-end">
        <Button type="submit" disabled={isLoading}>
          {isLoading && <Spinner size="sm" className="mr-2" />}
          Gerar código
        </Button>
      </div>
    </form>
  );
}
