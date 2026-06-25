import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowRight, CalendarDays, Inbox } from "lucide-react";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { cn } from "@/lib/utils";
import {
  getStatusStyle,
  totalRequestSteps,
} from "@/features/requests/status-style";
import { NewRequestButton } from "./_components/new-request-button";

export default async function RequestsListPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/login");
  if (session.user.role === "ADMIN") redirect("/admin/requests");

  const business = await prisma.business.findUnique({
    where: { ownerId: session.user.id },
    include: { requests: { orderBy: { createdAt: "desc" } } },
  });

  return (
    <div className="mx-auto w-full max-w-2xl space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Os meus pedidos
        </h1>
        <NewRequestButton />
      </div>

      {!business?.requests.length ? (
        <div className="flex flex-col items-center justify-center rounded-[24px] border border-border/60 bg-card px-6 py-16 text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#2F6BFF]/10 text-[#2F6BFF]">
            <Inbox className="h-7 w-7" />
          </div>
          <p className="font-medium">Ainda não tens pedidos</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Cria o teu primeiro pedido para começarmos a trabalhar.
          </p>
          <div className="mt-6">
            <NewRequestButton />
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {business.requests.map((r) => {
            const s = getStatusStyle(r.status);
            const isDone = s.progress >= 100 && s.step !== null;
            return (
              <Link
                key={r.id}
                href={`/dashboard/requests/${r.id}`}
                className="group block"
              >
                <article
                  className={cn(
                    "rounded-[24px] border border-border/60 bg-card p-6 shadow-[0px_4px_20px_rgba(10,37,64,0.03)] transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0px_8px_28px_rgba(10,37,64,0.08)]",
                    isDone && "opacity-90"
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h2 className="truncate text-lg font-semibold tracking-tight">
                        {r.title}
                      </h2>
                      <span className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {new Date(r.createdAt).toLocaleDateString("pt-PT", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <span
                      className={cn(
                        "inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
                        s.badge
                      )}
                    >
                      <span className={cn("h-1.5 w-1.5 rounded-full", s.dot)} />
                      {s.label}
                    </span>
                  </div>

                  <div className="mt-6">
                    <div className="mb-2 flex items-end justify-between">
                      <span className="text-sm font-medium">Progresso</span>
                      <span className="text-sm font-medium tabular-nums text-muted-foreground">
                        {s.step ? `${s.step} / ${totalRequestSteps}` : "—"}
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className={cn(
                          "h-full rounded-full transition-all",
                          s.bar
                        )}
                        style={{ width: `${s.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="mt-5 flex justify-end border-t border-border/40 pt-4">
                    <ArrowRight className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
