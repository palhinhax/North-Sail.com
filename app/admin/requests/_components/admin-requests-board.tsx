"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { RequestStatus } from "@prisma/client";
import { Clock, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { requestStatusLabels } from "@/features/requests/schemas";
import { getStatusStyle } from "@/features/requests/status-style";
import { DeleteButton } from "../../_components/delete-button";

export interface AdminRequest {
  id: string;
  title: string;
  description: string;
  status: RequestStatus;
  type: string;
  estimatedHours: number | null;
  businessId: string;
  businessName: string;
  ownerName: string | null;
  ownerEmail: string | null;
}

const ACTIVE = (s: RequestStatus) =>
  s !== RequestStatus.DONE && s !== RequestStatus.REJECTED;

export function AdminRequestsBoard({ requests }: { requests: AdminRequest[] }) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<RequestStatus | "ALL">("ALL");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return requests.filter((r) => {
      if (status !== "ALL" && r.status !== status) return false;
      if (!q) return true;
      return (
        r.businessName.toLowerCase().includes(q) ||
        (r.ownerEmail ?? "").toLowerCase().includes(q) ||
        r.title.toLowerCase().includes(q)
      );
    });
  }, [requests, search, status]);

  const groups = useMemo(() => {
    const map = new Map<string, { name: string; items: AdminRequest[] }>();
    for (const r of filtered) {
      const g = map.get(r.businessId) ?? { name: r.businessName, items: [] };
      g.items.push(r);
      map.set(r.businessId, g);
    }
    return Array.from(map.values()).sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }, [filtered]);

  return (
    <div className="space-y-8">
      {/* Header + filters */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Pedidos</h1>
          <p className="mt-1 text-muted-foreground">
            Gere e acompanha os pedidos dos clientes.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Procurar cliente, email ou pedido…"
              className="w-full rounded-lg border bg-background py-2 pl-9 pr-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 sm:w-72"
            />
          </div>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as RequestStatus | "ALL")}
            className="rounded-lg border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            <option value="ALL">Todos os estados</option>
            {Object.entries(requestStatusLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {groups.length === 0 ? (
        <div className="rounded-2xl border bg-card py-16 text-center text-muted-foreground">
          Nenhum pedido corresponde aos filtros.
        </div>
      ) : (
        groups.map((group, gi) => {
          const activeCount = group.items.filter((r) =>
            ACTIVE(r.status)
          ).length;
          return (
            <section key={group.name} className="space-y-4">
              {gi > 0 && <hr className="border-border" />}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-lg font-semibold text-primary">
                  {group.name.charAt(0).toUpperCase()}
                </div>
                <h2 className="text-xl font-semibold">{group.name}</h2>
                <span className="ml-auto rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
                  {activeCount} ativo(s) · {group.items.length} total
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {group.items.map((r) => {
                  const s = getStatusStyle(r.status);
                  return (
                    <div
                      key={r.id}
                      className="group relative flex h-full flex-col rounded-2xl border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-md"
                    >
                      {/* Link em overlay: cartão clicável sem englobar o botão de apagar */}
                      <Link
                        href={`/admin/requests/${r.id}`}
                        aria-label={`Ver ${r.title}`}
                        className="absolute inset-0 rounded-2xl"
                      />
                      <div className="mb-4 flex items-start justify-between">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
                            s.badge
                          )}
                        >
                          <span
                            className={cn("h-1.5 w-1.5 rounded-full", s.dot)}
                          />
                          {s.label}
                        </span>
                        <div className="relative z-10">
                          <DeleteButton
                            endpoint={`/api/requests/${r.id}`}
                            itemLabel={r.title}
                            iconOnly
                            title="Apagar pedido?"
                            description={`Vais apagar o pedido "${r.title}" e o respetivo histórico, mensagens e anexos. Esta ação é permanente e não pode ser desfeita.`}
                          />
                        </div>
                      </div>
                      <h3 className="mb-1.5 line-clamp-2 font-semibold">
                        {r.title}
                      </h3>
                      <p className="mb-5 line-clamp-3 flex-1 text-sm text-muted-foreground">
                        {r.description}
                      </p>
                      <div className="flex items-center justify-between border-t pt-3 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="h-4 w-4" />
                          {r.estimatedHours != null
                            ? `${r.estimatedHours}h est.`
                            : "Sem estimativa"}
                        </span>
                        <span className="text-xs">{r.type}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })
      )}
    </div>
  );
}
