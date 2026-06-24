"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { useToast } from "@/components/ui/use-toast";
import {
  useChangeRequestStatus,
  useUpdateRequest,
} from "@/features/requests/hooks";
import {
  requestStatusLabels,
  requestStatusOrder,
} from "@/features/requests/schemas";
import { RequestStatus } from "@prisma/client";

interface Props {
  request: {
    id: string;
    status: RequestStatus;
    estimatedHours: number | null;
    actualHours: number | null;
    assignedToId: string | null;
  };
  admins: { id: string; name: string | null; email: string }[];
}

const allStatuses: RequestStatus[] = [
  ...requestStatusOrder,
  RequestStatus.REJECTED,
];

export function AdminRequestPanel({ request, admins }: Props) {
  const router = useRouter();
  const { toast } = useToast();
  const changeStatus = useChangeRequestStatus();
  const update = useUpdateRequest();

  const [status, setStatus] = useState<RequestStatus>(request.status);
  const [note, setNote] = useState("");
  const [estimated, setEstimated] = useState(
    request.estimatedHours?.toString() ?? ""
  );
  const [actual, setActual] = useState(request.actualHours?.toString() ?? "");
  const [assigned, setAssigned] = useState(request.assignedToId ?? "");

  async function applyStatus() {
    try {
      await changeStatus.mutateAsync({
        id: request.id,
        data: { status, note: note || undefined },
      });
      setNote("");
      toast({ title: "Estado atualizado" });
      router.refresh();
    } catch {
      toast({
        title: "Erro",
        description: "Falha ao atualizar.",
        variant: "destructive",
      });
    }
  }

  async function applyDetails() {
    try {
      await update.mutateAsync({
        id: request.id,
        data: {
          estimatedHours: estimated ? Number(estimated) : undefined,
          actualHours: actual ? Number(actual) : undefined,
          assignedToId: assigned || null,
        },
      });
      toast({ title: "Pedido atualizado" });
      router.refresh();
    } catch {
      toast({
        title: "Erro",
        description: "Falha ao atualizar.",
        variant: "destructive",
      });
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gerir pedido</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        <div className="space-y-2">
          <Label htmlFor="status">Estado</Label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as RequestStatus)}
            className="w-full rounded-md border bg-background px-3 py-2"
          >
            {allStatuses.map((s) => (
              <option key={s} value={s}>
                {requestStatusLabels[s]}
              </option>
            ))}
          </select>
          <Label htmlFor="note">Nota</Label>
          <textarea
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="min-h-[60px] w-full rounded-md border bg-background px-3 py-2"
            placeholder="Visível para o cliente na timeline"
          />
          <Button onClick={applyStatus} disabled={changeStatus.isPending}>
            {changeStatus.isPending && <Spinner size="sm" className="mr-2" />}
            Atualizar estado
          </Button>
        </div>

        <div className="space-y-2 border-t pt-4">
          <Label htmlFor="estimated">Horas estimadas</Label>
          <Input
            id="estimated"
            type="number"
            min="0"
            step="0.5"
            value={estimated}
            onChange={(e) => setEstimated(e.target.value)}
          />
          <Label htmlFor="actual">Horas reais</Label>
          <Input
            id="actual"
            type="number"
            min="0"
            step="0.5"
            value={actual}
            onChange={(e) => setActual(e.target.value)}
          />
          <Label htmlFor="assigned">Atribuído a</Label>
          <select
            id="assigned"
            value={assigned}
            onChange={(e) => setAssigned(e.target.value)}
            className="w-full rounded-md border bg-background px-3 py-2"
          >
            <option value="">— Nenhum —</option>
            {admins.map((a) => (
              <option key={a.id} value={a.id}>
                {a.name ?? a.email}
              </option>
            ))}
          </select>
          <Button onClick={applyDetails} disabled={update.isPending}>
            {update.isPending && <Spinner size="sm" className="mr-2" />}
            Guardar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
