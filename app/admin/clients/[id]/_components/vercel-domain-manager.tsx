"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Clock, Plus, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { useToast } from "@/components/ui/use-toast";

interface DnsRecord {
  type: string;
  name: string;
  value: string;
}
interface Status {
  name: string;
  verified: boolean;
  verification: DnsRecord[];
  dns: DnsRecord[];
  error?: string;
}

interface Props {
  businessId: string;
  defaultDomain: string;
  currentProjectId: string | null;
}

export function VercelDomainManager({
  businessId,
  defaultDomain,
  currentProjectId,
}: Props) {
  const router = useRouter();
  const { toast } = useToast();
  const [projectId, setProjectId] = useState(currentProjectId ?? "");
  const [domain, setDomain] = useState(defaultDomain);
  const [status, setStatus] = useState<Status | null>(null);
  const [busy, setBusy] = useState(false);

  async function attach() {
    setBusy(true);
    try {
      const res = await fetch("/api/admin/site/domain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ businessId, domain, projectId }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Falha ao associar.");
      setStatus(data);
      toast({
        title: data.verified ? "Domínio verificado" : "Domínio associado",
        description: data.verified
          ? "Já aponta para o site."
          : "Configura os registos DNS abaixo.",
      });
      router.refresh();
    } catch (e) {
      toast({
        title: "Erro",
        description: (e as Error).message,
        variant: "destructive",
      });
    } finally {
      setBusy(false);
    }
  }

  async function check() {
    setBusy(true);
    try {
      const res = await fetch(
        `/api/admin/site/domain?businessId=${businessId}&domain=${encodeURIComponent(
          domain
        )}`
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Falha ao verificar.");
      setStatus(data);
    } catch (e) {
      toast({
        title: "Erro",
        description: (e as Error).message,
        variant: "destructive",
      });
    } finally {
      setBusy(false);
    }
  }

  const records = status
    ? status.verification.length
      ? status.verification
      : status.dns
    : [];

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="vercelProjectId">ID do projeto Vercel</Label>
        <Input
          id="vercelProjectId"
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
          placeholder="prj_xxx ou o nome do projeto"
        />
        <p className="text-xs text-muted-foreground">
          Encontras em Vercel → projeto do site → Settings → General.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="vercelDomain">Domínio a associar</Label>
        <Input
          id="vercelDomain"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="cliente.north-sail.com ou dominio-do-cliente.pt"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <Button onClick={attach} disabled={busy || !projectId || !domain}>
          {busy ? (
            <Spinner size="sm" className="mr-2" />
          ) : (
            <Plus className="mr-2 h-4 w-4" />
          )}
          Associar na Vercel
        </Button>
        <Button variant="outline" onClick={check} disabled={busy || !domain}>
          <RefreshCw className="mr-2 h-4 w-4" />
          Verificar estado
        </Button>
      </div>

      {status && (
        <div className="rounded-lg border p-4">
          {status.error ? (
            <p className="text-sm text-destructive">{status.error}</p>
          ) : (
            <>
              <div className="flex items-center gap-2 text-sm font-medium">
                {status.verified ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    Verificado — o domínio já serve o site.
                  </>
                ) : (
                  <>
                    <Clock className="h-4 w-4 text-amber-600" />A aguardar DNS.
                    Adiciona estes registos no domínio:
                  </>
                )}
              </div>

              {!status.verified && records.length > 0 && (
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="text-muted-foreground">
                      <tr>
                        <th className="py-1 pr-4">Tipo</th>
                        <th className="py-1 pr-4">Nome</th>
                        <th className="py-1">Valor</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono">
                      {records.map((r, i) => (
                        <tr key={i} className="border-t">
                          <td className="py-1 pr-4">{r.type}</td>
                          <td className="break-all py-1 pr-4">{r.name}</td>
                          <td className="break-all py-1">{r.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
