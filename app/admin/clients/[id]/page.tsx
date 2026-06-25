import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { requestStatusLabels } from "@/features/requests/schemas";
import { getPublicSiteHost } from "@/lib/site/public-url";
import { SiteSettingsForm } from "./_components/site-settings-form";
import { VercelDomainManager } from "./_components/vercel-domain-manager";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function AdminClientDetail({ params }: Props) {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/login");
  if (session.user.role !== "ADMIN") redirect("/dashboard");

  const { id } = await params;
  const business = await prisma.business.findUnique({
    where: { id },
    include: {
      owner: { select: { id: true, name: true, email: true } },
      subscription: { include: { plan: true } },
      requests: { orderBy: { createdAt: "desc" } },
    },
  });
  if (!business) notFound();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{business.name}</h1>
        <p className="text-muted-foreground">{business.owner?.email}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Subscrição</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          {business.subscription ? (
            <>
              <div>Plano: {business.subscription.plan.name}</div>
              <div>Estado: {business.subscription.status}</div>
              <div>Ciclo: {business.subscription.billingCycle}</div>
              <Link
                href="/admin/subscriptions"
                className="mt-2 inline-block text-primary"
              >
                Gerir →
              </Link>
            </>
          ) : (
            "Sem subscrição"
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Site &amp; domínio</CardTitle>
        </CardHeader>
        <CardContent>
          <SiteSettingsForm
            business={{
              id: business.id,
              slug: business.slug,
              customDomain: business.customDomain,
              siteUrl: business.siteUrl,
              sitePublished: business.sitePublished,
            }}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Domínio na Vercel</CardTitle>
        </CardHeader>
        <CardContent>
          <VercelDomainManager
            businessId={business.id}
            defaultDomain={getPublicSiteHost({
              slug: business.slug,
              customDomain: business.customDomain,
            })}
            currentProjectId={business.vercelProjectId}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pedidos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {business.requests.length === 0 ? (
            <p className="text-sm text-muted-foreground">Sem pedidos.</p>
          ) : (
            business.requests.map((r) => (
              <Link
                key={r.id}
                href={`/admin/requests/${r.id}`}
                className="flex justify-between border-b py-2 text-sm last:border-0 hover:bg-muted/30"
              >
                <span>{r.title}</span>
                <span className="text-muted-foreground">
                  {requestStatusLabels[r.status]}
                </span>
              </Link>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}
