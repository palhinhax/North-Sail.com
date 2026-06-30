"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";
import { useToast } from "@/components/ui/use-toast";

interface DeleteButtonProps {
  /** Endpoint a chamar com método DELETE, ex: `/api/leads/123`. */
  endpoint: string;
  /** Nome do item a apagar, mostrado na confirmação. */
  itemLabel: string;
  /** Título do diálogo. Por defeito "Apagar?". */
  title?: string;
  /** Texto descritivo extra no diálogo. */
  description?: string;
  /** Mostrar só o ícone (lixo), sem texto. */
  iconOnly?: boolean;
  /** Classe extra no botão. */
  className?: string;
}

/**
 * Botão de apagar com confirmação para o admin.
 * Chama o endpoint com DELETE e atualiza a página em caso de sucesso.
 */
export function DeleteButton({
  endpoint,
  itemLabel,
  title = "Apagar?",
  description,
  iconOnly = false,
  className,
}: DeleteButtonProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    setLoading(true);
    try {
      const res = await fetch(endpoint, { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message ?? "Não foi possível apagar.");
      }
      toast({ title: "Apagado", description: `${itemLabel} foi removido.` });
      setOpen(false);
      router.refresh();
    } catch (err) {
      toast({
        title: "Erro",
        description: err instanceof Error ? err.message : "Tenta novamente.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Button
        type="button"
        variant="ghost"
        size={iconOnly ? "icon" : "sm"}
        className={
          "text-muted-foreground hover:bg-destructive/10 hover:text-destructive" +
          (className ? ` ${className}` : "")
        }
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(true);
        }}
        aria-label={`Apagar ${itemLabel}`}
      >
        <Trash2 className="h-4 w-4" />
        {!iconOnly && <span className="ml-1.5">Apagar</span>}
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
              {description ?? (
                <>
                  Vais apagar <strong>{itemLabel}</strong>. Esta ação é
                  permanente e não pode ser desfeita.
                </>
              )}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={handleDelete}
              disabled={loading}
            >
              {loading ? <Spinner className="mr-2 h-4 w-4" /> : null}
              Apagar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
