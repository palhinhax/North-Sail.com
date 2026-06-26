"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Tag, CheckCircle2, XCircle } from "lucide-react";
import { useValidateDiscount, useRedeemDiscount } from "../hooks";
import type { RedeemResult } from "../schemas";

interface Props {
  /** Chamado após um resgate com sucesso (ex.: refrescar a página). */
  onRedeemed?: (result: RedeemResult) => void;
  /** Começa expandido (ex.: no onboarding). Por defeito recolhido. */
  defaultOpen?: boolean;
}

const SUCCESS = "#16A34A";
const DANGER = "#E5484D";

export function RedeemField({ onRedeemed, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const [code, setCode] = useState("");
  const [preview, setPreview] = useState<RedeemResult | null>(null);
  const router = useRouter();
  const validate = useValidateDiscount();
  const redeem = useRedeemDiscount();
  const debounce = useRef<ReturnType<typeof setTimeout>>();

  // Valida com debounce enquanto o cliente escreve.
  useEffect(() => {
    if (debounce.current) clearTimeout(debounce.current);
    const trimmed = code.trim();
    if (trimmed.length < 3) {
      setPreview(null);
      return;
    }
    debounce.current = setTimeout(() => {
      validate.mutate(trimmed, { onSuccess: (r) => setPreview(r) });
    }, 450);
    return () => {
      if (debounce.current) clearTimeout(debounce.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  async function handleRedeem() {
    const result = await redeem.mutateAsync(code.trim());
    setPreview(result);
    if (result.ok) {
      onRedeemed?.(result);
      router.refresh();
    }
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 text-sm font-medium text-brand-accent hover:underline"
      >
        <Tag className="h-4 w-4" />
        Tens um código de desconto?
      </button>
    );
  }

  const canRedeem = preview?.ok && !redeem.isPending;

  return (
    <div className="space-y-3 rounded-xl border border-line bg-surface-lowest p-4">
      <label className="text-sm font-medium text-ink">Código de desconto</label>
      <div className="flex gap-2">
        <Input
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          placeholder="NS-XXXX-XXXX"
          autoCapitalize="characters"
          className="font-mono"
        />
        <Button type="button" onClick={handleRedeem} disabled={!canRedeem}>
          {redeem.isPending && <Spinner size="sm" className="mr-2" />}
          Aplicar
        </Button>
      </div>

      {validate.isPending && code.trim().length >= 3 && (
        <p className="text-sm text-muted-foreground">A verificar…</p>
      )}

      {preview && preview.ok && preview.preview && (
        <p
          className="flex items-center gap-1.5 text-sm font-medium"
          style={{ color: SUCCESS }}
        >
          <CheckCircle2 className="h-4 w-4" />
          {redeem.isSuccess
            ? `Aplicado: ${preview.preview}.`
            : `Vais ter ${preview.preview}.`}
        </p>
      )}

      {preview && !preview.ok && preview.reason && (
        <p
          className="flex items-center gap-1.5 text-sm font-medium"
          style={{ color: DANGER }}
        >
          <XCircle className="h-4 w-4" />
          {preview.reason}
        </p>
      )}
    </div>
  );
}
