import { redirect } from "next/navigation";
import { ExternalLink, Globe } from "lucide-react";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getPublicSiteUrl, getPublicSiteLabel } from "@/lib/site/public-url";
import { BusinessForm } from "./_components/business-form";

export default async function BusinessPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/login");
  if (session.user.role === "ADMIN") redirect("/admin");

  const business = await prisma.business.findUnique({
    where: { ownerId: session.user.id },
  });
  if (!business) {
    return <p>Sem negócio.</p>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">O meu negócio</h1>
        <p className="mt-1 text-muted-foreground">
          Gere as informações públicas e de contacto da tua empresa.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>O meu site</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                Endereço do teu site
              </span>
              <div className="mt-1 flex items-center gap-2">
                <Globe className="h-4 w-4 shrink-0 text-primary" />
                <span className="truncate font-medium">
                  {getPublicSiteLabel(business)}
                </span>
                <span
                  className={cn(
                    "shrink-0 rounded-full px-2 py-0.5 text-xs font-medium",
                    business.sitePublished
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700"
                  )}
                >
                  {business.sitePublished ? "No ar" : "Em preparação"}
                </span>
              </div>
              {!business.customDomain && (
                <p className="mt-1 text-xs text-muted-foreground">
                  Quando tiveres um domínio próprio, fala connosco para o
                  associarmos.
                </p>
              )}
            </div>
            {business.sitePublished && (
              <a
                href={getPublicSiteUrl(business)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
              >
                Abrir site <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </CardContent>
      </Card>

      <BusinessForm
        business={{
          id: business.id,
          name: business.name,
          description: business.description,
          phone: business.phone,
          whatsapp: business.whatsapp,
          address: business.address,
          domainDesired: business.domainDesired,
        }}
      />
    </div>
  );
}
