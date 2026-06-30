import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DeleteButton } from "../_components/delete-button";

export const dynamic = "force-dynamic";

function formatDate(d: Date): string {
  return new Intl.DateTimeFormat("pt-PT", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(d);
}

export default async function AdminLeadsPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/login");
  if (session.user.role !== "ADMIN") redirect("/dashboard");

  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
    take: 200,
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Leads</h1>
        <span className="text-sm text-muted-foreground">
          {leads.length} {leads.length === 1 ? "lead" : "leads"}
        </span>
      </div>

      {leads.length === 0 ? (
        <Card>
          <CardContent className="py-10 text-center text-muted-foreground">
            Ainda não há leads. Os pedidos do formulário de contacto aparecem
            aqui.
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {leads.map((lead) => (
            <Card key={lead.id}>
              <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0">
                <div>
                  <CardTitle className="text-lg">{lead.businessName}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {lead.businessType}
                    {lead.country ? ` · ${lead.country}` : ""}
                    {lead.locale ? ` · ${lead.locale}` : ""}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="whitespace-nowrap rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
                    {formatDate(lead.createdAt)}
                  </span>
                  <DeleteButton
                    endpoint={`/api/leads/${lead.id}`}
                    itemLabel={lead.businessName}
                    iconOnly
                    title="Apagar lead?"
                    description={`Vais apagar a lead "${lead.businessName}". Esta ação é permanente e não pode ser desfeita.`}
                  />
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="whitespace-pre-wrap">{lead.need}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-muted-foreground">
                  <a
                    href={`mailto:${lead.email}`}
                    className="text-primary hover:underline"
                  >
                    {lead.email}
                  </a>
                  {lead.phone && <span>{lead.phone}</span>}
                  {lead.currentSite && (
                    <a
                      href={lead.currentSite}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-primary hover:underline"
                    >
                      {lead.currentSite}
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
