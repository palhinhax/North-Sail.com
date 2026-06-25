import Link from "next/link";
import { redirect } from "next/navigation";
import { Lock, Pencil, MonitorSmartphone, ExternalLink } from "lucide-react";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { getPublicSiteUrl, getPublicSiteLabel } from "@/lib/site/public-url";
import { ShareLinkButton } from "./_components/share-link-button";

export default async function PreviewPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/login");
  if (session.user.role === "ADMIN") redirect("/admin");

  const business = await prisma.business.findUnique({
    where: { ownerId: session.user.id },
  });
  if (!business) redirect("/dashboard");

  const url = getPublicSiteUrl(business);
  const label = getPublicSiteLabel(business);
  const live = business.sitePublished;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Pré-visualização</h1>
          <p className="mt-1 max-w-lg text-muted-foreground">
            Vê como o teu site aparece aos visitantes e prepara o lançamento.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/dashboard/requests">
            <Button variant="outline" className="w-full gap-2">
              <Pencil className="h-4 w-4" />
              Pedir alteração
            </Button>
          </Link>
          {live && (
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full gap-2">
                <ExternalLink className="h-4 w-4" />
                Abrir site
              </Button>
            </a>
          )}
          {live && <ShareLinkButton url={url} />}
        </div>
      </div>

      {/* Phone mockup */}
      <div className="flex justify-center pt-2">
        <div className="flex h-[720px] w-full max-w-[380px] flex-col overflow-hidden rounded-[40px] border bg-card shadow-[0_8px_32px_rgba(10,37,64,0.10)]">
          {/* Mock browser bar */}
          <div className="flex shrink-0 items-center gap-2 border-b bg-muted/60 px-4 py-2.5">
            <Lock className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="truncate rounded-full bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
              {label}
            </span>
          </div>

          {/* Content */}
          {live ? (
            <iframe
              src={url}
              title="Pré-visualização do site"
              className="h-full w-full flex-1 bg-white"
              loading="lazy"
            />
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center gap-3 bg-background px-8 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
                <MonitorSmartphone className="h-7 w-7 text-muted-foreground" />
              </div>
              <p className="font-medium">O teu site está em preparação</p>
              <p className="text-sm text-muted-foreground">
                Assim que estiver no ar, aparece aqui a pré-visualização e podes
                partilhar o link.
              </p>
              <Link href="/dashboard/requests" className="mt-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Pencil className="h-4 w-4" />
                  Falar connosco
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {live && (
        <p className="text-center text-xs text-muted-foreground">
          Se a pré-visualização não carregar aqui, usa “Abrir site” — alguns
          sites não permitem ser mostrados dentro de outra página.
        </p>
      )}
    </div>
  );
}
