import { notFound, redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RequestTimeline } from "@/features/requests/components";
import { AdminRequestPanel } from "./_components/admin-request-panel";
import { MessageThread } from "@/app/dashboard/requests/[id]/_components/message-thread";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function AdminRequestDetail({ params }: Props) {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/login");
  if (session.user.role !== "ADMIN") redirect("/dashboard");

  const { id } = await params;
  const req = await prisma.serviceRequest.findUnique({
    where: { id },
    include: {
      business: {
        include: { owner: { select: { id: true, email: true, name: true } } },
      },
      assignedTo: { select: { id: true, name: true, email: true } },
      statusEvents: { orderBy: { createdAt: "asc" } },
      messages: {
        orderBy: { createdAt: "asc" },
        include: { attachments: true },
      },
    },
  });
  if (!req) notFound();

  const admins = await prisma.user.findMany({
    where: { role: "ADMIN" },
    select: { id: true, name: true, email: true },
  });

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="space-y-6 lg:col-span-2">
        <div>
          <h1 className="text-3xl font-bold">{req.title}</h1>
          <p className="text-sm text-muted-foreground">
            {req.business.name} · {req.business.owner?.email}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Descrição</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap text-sm">{req.description}</p>
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

      <div className="space-y-6">
        <AdminRequestPanel
          request={{
            id: req.id,
            status: req.status,
            estimatedHours: req.estimatedHours,
            actualHours: req.actualHours,
            assignedToId: req.assignedToId,
          }}
          admins={admins}
        />

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
      </div>
    </div>
  );
}
