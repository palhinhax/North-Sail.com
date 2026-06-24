"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";
import { useToast } from "@/components/ui/use-toast";
import { useCreateRequest } from "@/features/requests/hooks";
import { RequestType } from "@prisma/client";

export function NewRequestButton() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState<RequestType>(RequestType.CHANGE);
  const { toast } = useToast();
  const router = useRouter();
  const create = useCreateRequest();

  async function submit() {
    try {
      await create.mutateAsync({ title, description, type });
      toast({ title: "Pedido criado", description: "Já estamos a tratar." });
      setOpen(false);
      setTitle("");
      setDescription("");
      router.refresh();
    } catch (err) {
      toast({
        title: "Erro",
        description:
          err instanceof Error ? err.message : "Falha ao criar pedido",
        variant: "destructive",
      });
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Novo pedido</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Novo pedido</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <div className="space-y-2">
            <Label htmlFor="type">Tipo</Label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value as RequestType)}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
            >
              <option value={RequestType.CHANGE}>Alteração</option>
              <option value={RequestType.SUPPORT}>Suporte</option>
              <option value={RequestType.UPGRADE}>Upgrade</option>
              <option value={RequestType.CANCEL}>Cancelamento</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="title">Título</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Descrição</Label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[100px] w-full rounded-md border bg-background px-3 py-2 text-sm"
            />
          </div>
          <div className="flex justify-end">
            <Button
              onClick={submit}
              disabled={create.isPending || !title || description.length < 3}
            >
              {create.isPending && <Spinner size="sm" className="mr-2" />}
              Submeter
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
