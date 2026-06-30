"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { DeleteButton } from "../../_components/delete-button";

export interface AdminClient {
  id: string;
  name: string;
  ownerEmail: string | null;
  planName: string | null;
  status: string | null;
}

const STATUS_BADGE: Record<string, string> = {
  ACTIVE: "bg-emerald-100 text-emerald-700",
  TRIALING: "bg-sky-100 text-sky-700",
  PAST_DUE: "bg-amber-100 text-amber-700",
  PENDING: "bg-slate-100 text-slate-600",
  CANCELED: "bg-rose-100 text-rose-700",
};
const STATUS_DOT: Record<string, string> = {
  ACTIVE: "bg-emerald-500",
  TRIALING: "bg-sky-500",
  PAST_DUE: "bg-amber-500",
  PENDING: "bg-slate-400",
  CANCELED: "bg-rose-500",
};

const AVATAR = [
  "bg-primary text-primary-foreground",
  "bg-sky-600 text-white",
  "bg-teal-600 text-white",
  "bg-indigo-600 text-white",
  "bg-amber-600 text-white",
];

export function ClientsList({ clients }: { clients: AdminClient[] }) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return clients;
    return clients.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        (c.ownerEmail ?? "").toLowerCase().includes(q) ||
        (c.planName ?? "").toLowerCase().includes(q)
    );
  }, [clients, search]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Clientes</h1>
        <p className="mt-1 text-muted-foreground">
          {clients.length} cliente(s) na plataforma.
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquisar clientes…"
          className="w-full rounded-lg border bg-card py-2.5 pl-9 pr-3 text-sm shadow-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {/* List */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border bg-card py-16 text-center text-muted-foreground">
          Nenhum cliente encontrado.
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {filtered.map((c, i) => {
            const status = c.status ?? "";
            return (
              <div
                key={c.id}
                className="group relative flex items-center justify-between gap-4 rounded-2xl border bg-card p-4 shadow-sm transition-all hover:border-primary/30 hover:shadow-md md:p-5"
              >
                {/* Link em overlay: torna o cartão clicável sem englobar o botão de apagar */}
                <Link
                  href={`/admin/clients/${c.id}`}
                  aria-label={`Ver ${c.name}`}
                  className="absolute inset-0 rounded-2xl"
                />
                <div className="flex min-w-0 items-center gap-4">
                  <div
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-semibold",
                      AVATAR[i % AVATAR.length]
                    )}
                  >
                    {c.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <h2 className="truncate text-lg font-semibold">{c.name}</h2>
                    <p className="truncate text-sm text-muted-foreground">
                      {c.ownerEmail ?? "—"}
                    </p>
                    <div className="mt-1.5 flex flex-wrap items-center gap-2">
                      <span className="rounded border bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground">
                        Plano: {c.planName ?? "—"}
                      </span>
                      {status && (
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium",
                            STATUS_BADGE[status] ??
                              "bg-slate-100 text-slate-600"
                          )}
                        >
                          <span
                            className={cn(
                              "h-1.5 w-1.5 rounded-full",
                              STATUS_DOT[status] ?? "bg-slate-400"
                            )}
                          />
                          {status}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="relative z-10 flex shrink-0 items-center gap-1">
                  <DeleteButton
                    endpoint={`/api/businesses/${c.id}`}
                    itemLabel={c.name}
                    iconOnly
                    title="Apagar cliente?"
                    description={`Vais apagar o cliente "${c.name}" e a respetiva conta, subscrição, pedidos e anexos. Esta ação é permanente e não pode ser desfeita.`}
                  />
                  <ChevronRight className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
