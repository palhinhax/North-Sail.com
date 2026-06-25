import { redirect } from "next/navigation";
import { ExternalLink, Globe } from "lucide-react";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Card, CardContent } from "@/components/ui/card";
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
      {/* Page header with subtle brand gradient */}
      <div className="relative overflow-hidden rounded-2xl border border-brand-container/15 bg-gradient-to-br from-brand-container via-brand to-brand p-6 text-white shadow-sm md:p-8">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-brand-accent/30 blur-3xl"
        />
        <div className="relative">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-white/90 ring-1 ring-inset ring-white/15">
            <Globe className="h-3.5 w-3.5" />
            NorthSail
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight">
            O meu negócio
          </h1>
          <p className="mt-1 max-w-xl text-sm text-white/70">
            Gere as informações públicas e de contacto da tua empresa.
          </p>
        </div>
      </div>

      {/* "O meu site" highlight card */}
      <Card className="overflow-hidden border-line bg-gradient-to-br from-card to-surface-low">
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent ring-1 ring-inset ring-brand-accent/15">
                <Globe className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <span className="text-xs font-medium uppercase tracking-wider text-ink-subtle">
                  Endereço do teu site
                </span>
                <div className="mt-1 flex flex-wrap items-center gap-2">
                  <span className="truncate text-base font-semibold text-ink">
                    {getPublicSiteLabel(business)}
                  </span>
                  <span
                    className={cn(
                      "inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
                      business.sitePublished
                        ? "bg-teal-surface text-teal-ink"
                        : "bg-amber-100 text-amber-700"
                    )}
                  >
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        business.sitePublished ? "bg-teal" : "bg-amber-500"
                      )}
                    />
                    {business.sitePublished ? "No ar" : "Em preparação"}
                  </span>
                </div>
                {!business.customDomain && (
                  <p className="mt-1.5 text-xs text-ink-subtle">
                    Quando tiveres um domínio próprio, fala connosco para o
                    associarmos.
                  </p>
                )}
              </div>
            </div>
            {business.sitePublished && (
              <a
                href={getPublicSiteUrl(business)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-brand-accent px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-brand-accent-hover"
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
