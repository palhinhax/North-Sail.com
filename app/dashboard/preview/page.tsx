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

      {/* Browser mockup */}
      <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-xl border bg-card shadow-[0_8px_32px_rgba(10,37,64,0.10)]">
        {/* Mock browser bar */}
        <div className="flex shrink-0 items-center gap-2 border-b bg-muted/60 px-4 py-2.5">
          <span className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </span>
          <span className="ml-2 flex flex-1 items-center gap-2 truncate rounded-md bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
            <Lock className="h-3 w-3 shrink-0" />
            {label}
          </span>
        </div>

        {/* Content (16:10 web viewport) */}
        {live ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[16/10] overflow-hidden bg-white"
          >
            {/* Live screenshot of the site (not an iframe → not blocked) */}
            <img
              src={`https://s0.wp.com/mshots/v1/${encodeURIComponent(
                url
              )}?w=1280&h=800`}
              alt="Pré-visualização do site"
              className="h-full w-full object-cover object-top"
            />
            <span className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 bg-brand-container/85 py-2.5 text-sm font-medium text-white opacity-90 transition-opacity group-hover:opacity-100">
              <ExternalLink className="h-4 w-4" />
              Abrir site
            </span>
          </a>
        ) : (
          <div className="flex aspect-[16/10] flex-col items-center justify-center gap-3 bg-background px-8 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
              <MonitorSmartphone className="h-7 w-7 text-muted-foreground" />
            </div>
            <p className="font-medium">O teu site está em preparação</p>
            <p className="text-sm text-muted-foreground">
              Assim que estiver no ar, aparece aqui o link e podes partilhá-lo.
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

      {live && (
        <p className="text-center text-xs text-muted-foreground">
          A imagem é uma pré-visualização e pode demorar uns segundos a gerar na
          primeira vez. Clica para abrires o site real.
        </p>
      )}
    </div>
  );
}
