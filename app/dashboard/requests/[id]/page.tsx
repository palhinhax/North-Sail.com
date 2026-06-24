import { notFound, redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RequestTimeline } from "@/features/requests/components";
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
      messages: { orderBy: { createdAt: "asc" } },
    },
  });
  if (!req) notFound();
  if (req.business.ownerId !== session.user.id) redirect("/dashboard/requests");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="space-y-6 lg:col-span-2">
        <div>
          <h1 className="text-3xl font-bold">{req.title}</h1>
          <p className="text-sm text-muted-foreground">
            Criado em {new Date(req.createdAt).toLocaleDateString()}
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
          }))}
        />
      </div>

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
  );
}
