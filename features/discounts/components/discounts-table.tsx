"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { useToast } from "@/components/ui/use-toast";
import { Plus, Copy, Check, Ticket } from "lucide-react";
import { DiscountForm, type PlanOption } from "./discount-form";
import { useDiscounts, useCreateDiscount, useUpdateDiscount } from "../hooks";
import type { CreateDiscountInput, DiscountCodeDTO } from "../schemas";

interface Props {
  plans: PlanOption[];
}

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      toast({ title: "Não foi possível copiar", variant: "destructive" });
    }
  }

  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-1.5 rounded-md font-mono text-sm hover:text-brand-accent"
      title="Copiar código"
    >
      {code}
      {copied ? (
        <Check className="h-3.5 w-3.5 text-[#16A34A]" />
      ) : (
        <Copy className="h-3.5 w-3.5 text-muted-foreground" />
      )}
    </button>
  );
}

function validityLabel(c: DiscountCodeDTO): string {
  if (!c.validUntil) return "Sem validade";
  return new Date(c.validUntil).toLocaleDateString("pt-PT", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function DiscountsTable({ plans }: Props) {
  const { data: discounts, isLoading, error } = useDiscounts();
  const create = useCreateDiscount();
  const update = useUpdateDiscount();
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [generated, setGenerated] = useState<DiscountCodeDTO | null>(null);

  async function handleCreate(data: CreateDiscountInput) {
    try {
      const code = await create.mutateAsync(data);
      setGenerated(code);
      toast({ title: "Código gerado", description: code.code });
    } catch {
      toast({
        title: "Erro",
        description: "Não foi possível gerar o código.",
        variant: "destructive",
      });
    }
  }

  async function toggleActive(c: DiscountCodeDTO) {
    try {
      await update.mutateAsync({ id: c.id, data: { active: !c.active } });
      toast({ title: c.active ? "Código desativado" : "Código ativado" });
    } catch {
      toast({
        title: "Erro",
        description: "Não foi possível atualizar.",
        variant: "destructive",
      });
    }
  }

  function closeDialog(open: boolean) {
    setIsDialogOpen(open);
    if (!open) setGenerated(null);
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Spinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent className="py-12">
          <p className="text-center text-destructive">
            Falha ao carregar os códigos.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Códigos de desconto</h2>
        <Dialog open={isDialogOpen} onOpenChange={closeDialog}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Gerar código
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Gerar código de desconto</DialogTitle>
            </DialogHeader>
            {generated ? (
              <div className="space-y-4">
                <div className="rounded-xl border border-line bg-surface-low p-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    {generated.benefit}
                  </p>
                  <div className="mt-2 flex items-center justify-center gap-2 text-2xl font-bold">
                    <CopyButton code={generated.code} />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Copia o código e partilha-o. Já aparece na tabela.
                </p>
                <div className="flex justify-end">
                  <Button onClick={() => closeDialog(false)}>Fechar</Button>
                </div>
              </div>
            ) : (
              <DiscountForm
                plans={plans}
                onSubmit={handleCreate}
                isLoading={create.isPending}
              />
            )}
          </DialogContent>
        </Dialog>
      </div>

      {!discounts?.length ? (
        <Card>
          <CardHeader className="items-center text-center">
            <Ticket className="h-8 w-8 text-muted-foreground" />
            <CardTitle className="text-lg">Ainda não há códigos</CardTitle>
            <CardDescription>
              Gera o primeiro código para ofereceres meses grátis, descontos ou
              setup grátis.
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <Card>
          <CardContent className="p-0">
            <table className="w-full text-sm">
              <thead className="border-b text-left">
                <tr>
                  <th className="p-3">Código</th>
                  <th className="p-3">Tipo</th>
                  <th className="p-3">Benefício</th>
                  <th className="p-3">Usos</th>
                  <th className="p-3">Validade</th>
                  <th className="p-3">Estado</th>
                  <th className="p-3 text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                {discounts.map((c) => (
                  <tr key={c.id} className="border-b last:border-0">
                    <td className="p-3">
                      <CopyButton code={c.code} />
                    </td>
                    <td className="p-3 text-muted-foreground">{c.type}</td>
                    <td className="p-3">{c.benefit}</td>
                    <td className="p-3">
                      {c.redemptionsUsed}/{c.maxRedemptions ?? "∞"}
                    </td>
                    <td className="p-3 text-muted-foreground">
                      {validityLabel(c)}
                    </td>
                    <td className="p-3">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          c.active
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-surface-high text-ink-muted"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            c.active ? "bg-[#16A34A]" : "bg-ink-subtle"
                          }`}
                        />
                        {c.active ? "Ativo" : "Inativo"}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleActive(c)}
                        disabled={update.isPending}
                      >
                        {c.active ? "Desativar" : "Ativar"}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
