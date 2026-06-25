import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Tag } from "lucide-react";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { RequestTimeline } from "@/features/requests/components";
import { getStatusStyle } from "@/features/requests/status-style";
import { MessageThread } from "./_components/message-thread";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ClientRequestDetailPage({ params }: Props) {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/login");
  if (session.user.role === "ADMIN") redirect("/admin/requests");

  const { id } = await params;
  const req = await prisma.serviceRequest.findUnique({
    where: { id },
    include: {
      business: true,
      statusEvents: { orderBy: { createdAt: "asc" } },
      messages: {
        orderBy: { createdAt: "asc" },
        include: { attachments: true },
      },
    },
  });
  if (!req) notFound();
  if (req.business.ownerId !== session.user.id) redirect("/dashboard/requests");

  const s = getStatusStyle(req.status);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Link
          href="/dashboard/requests"
          className="mb-3 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Os meus pedidos
        </Link>
        <h1 className="text-3xl font-bold">{req.title}</h1>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
              s.badge
            )}
          >
            <span className={cn("h-1.5 w-1.5 rounded-full", s.dot)} />
            {s.label}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4" />
            {new Date(req.createdAt).toLocaleDateString("pt-PT")}
          </span>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Progresso</CardTitle>
            </CardHeader>
            <CardContent>
              <RequestTimeline
                currentStatus={req.status}
                events={req.statusEvents.map((e) => ({
                  id: e.id,
                  status: e.status,
                  note: e.note,
                  changedById: e.changedById,
                  createdAt: e.createdAt.toISOString(),
                }))}
              />
            </CardContent>
          </Card>

          <MessageThread
            requestId={req.id}
            currentUserId={session.user.id}
            messages={req.messages.map((m) => ({
              id: m.id,
              authorId: m.authorId,
              body: m.body,
              createdAt: m.createdAt.toISOString(),
              attachments: m.attachments.map((a) => ({
                id: a.id,
                fileName: a.fileName,
                contentType: a.contentType,
                size: a.size,
              })),
            }))}
          />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Descrição</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap text-sm text-muted-foreground">
                {req.description}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Detalhes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Negócio</span>
                <span className="font-medium">{req.business.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Estado</span>
                <span className="font-medium">{s.label}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <Tag className="h-3.5 w-3.5" />
                  Tipo
                </span>
                <span className="font-medium">{req.type}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Criado</span>
                <span className="font-medium">
                  {new Date(req.createdAt).toLocaleDateString("pt-PT")}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
