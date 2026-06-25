"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ExternalLink, Globe, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { useUpdateBusiness } from "@/features/businesses/hooks";
import { getPublicSiteLabel } from "@/lib/site/public-url";

interface Props {
  business: {
    id: string;
    slug: string;
    customDomain: string | null;
    siteUrl: string | null;
    sitePublished: boolean;
  };
}

export function SiteSettingsForm({ business }: Props) {
  const [ownDomain, setOwnDomain] = useState(!!business.customDomain);
  const [customDomain, setCustomDomain] = useState(business.customDomain ?? "");
  const [siteUrl, setSiteUrl] = useState(business.siteUrl ?? "");
  const [sitePublished, setSitePublished] = useState(business.sitePublished);

  const update = useUpdateBusiness();
  const { toast } = useToast();
  const router = useRouter();

  const publicLabel = getPublicSiteLabel({
    slug: business.slug,
    customDomain: ownDomain ? customDomain || null : null,
  });

  async function submit() {
    try {
      await update.mutateAsync({
        id: business.id,
        data: {
          customDomain: ownDomain ? customDomain.trim() || null : null,
          siteUrl: siteUrl.trim() || null,
          sitePublished,
        },
      });
      toast({ title: "Site atualizado" });
      router.refresh();
    } catch {
      toast({
        title: "Erro",
        description: "Não foi possível guardar.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="space-y-5">
      {/* Public link preview */}
      <div className="rounded-lg border bg-muted/40 p-3">
        <span className="text-xs uppercase tracking-wider text-muted-foreground">
          Link público do cliente
        </span>
        <div className="mt-1 flex items-center gap-2">
          <Globe className="h-4 w-4 shrink-0 text-primary" />
          <span className="truncate font-medium">{publicLabel}</span>
          <span
            className={cn(
              "ml-auto shrink-0 rounded-full px-2 py-0.5 text-xs font-medium",
              sitePublished
                ? "bg-emerald-100 text-emerald-700"
                : "bg-amber-100 text-amber-700"
            )}
          >
            {sitePublished ? "Publicado" : "Rascunho"}
          </span>
        </div>
      </div>

      {/* Has own domain toggle */}
      <div className="flex flex-col gap-3">
        <Label>Domínio</Label>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setOwnDomain(false)}
            className={cn(
              "rounded-lg border p-3 text-left text-sm transition-colors",
              !ownDomain ? "border-primary bg-primary/5" : "hover:bg-muted/40"
            )}
          >
            <span className="font-medium">Subdomínio NorthSail</span>
            <span className="mt-0.5 block text-xs text-muted-foreground">
              Usa {business.slug}.{`north-sail.com`}
            </span>
          </button>
          <button
            type="button"
            onClick={() => setOwnDomain(true)}
            className={cn(
              "rounded-lg border p-3 text-left text-sm transition-colors",
              ownDomain ? "border-primary bg-primary/5" : "hover:bg-muted/40"
            )}
          >
            <span className="font-medium">Domínio próprio</span>
            <span className="mt-0.5 block text-xs text-muted-foreground">
              O cliente tem o seu próprio domínio
            </span>
          </button>
        </div>

        {ownDomain && (
          <div className="space-y-2">
            <Label htmlFor="customDomain">Domínio do cliente</Label>
            <Input
              id="customDomain"
              value={customDomain}
              onChange={(e) => setCustomDomain(e.target.value)}
              placeholder="exemplo.pt"
            />
            <p className="text-xs text-muted-foreground">
              Sem http:// — apenas o domínio. Aponta o DNS para o deployment do
              cliente.
            </p>
          </div>
        )}
      </div>

      {/* Internal site URL (admin-only) */}
      <div className="space-y-2">
        <Label htmlFor="siteUrl" className="flex items-center gap-1.5">
          <Lock className="h-3.5 w-3.5 text-muted-foreground" />
          URL interno do site (Vercel)
        </Label>
        <Input
          id="siteUrl"
          value={siteUrl}
          onChange={(e) => setSiteUrl(e.target.value)}
          placeholder="https://north-sail-com.vercel.app"
        />
        <p className="text-xs text-muted-foreground">
          Só visível para a equipa. É o deployment real (ex.: Vercel) onde o
          site está alojado.
        </p>
      </div>

      {/* How-to: pointing the public host at the deployment */}
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800">
        <p className="font-medium">Como ligar o link público ao site</p>
        <p className="mt-1">
          Para o link público funcionar e esconder o endereço Vercel, associa{" "}
          <span className="font-medium">{publicLabel}</span> ao projeto do site
          na Vercel (Settings → Domains) e aponta o DNS:
        </p>
        <ul className="mt-1 list-disc pl-4">
          <li>
            Subdomínio NorthSail: regista um CNAME do subdomínio para a Vercel
            (precisa de DNS wildcard *.north-sail.com).
          </li>
          <li>
            Domínio próprio: adiciona-o na Vercel e segue as instruções de DNS
            que a Vercel mostrar.
          </li>
        </ul>
      </div>

      {/* Published toggle */}
      <label className="flex items-center gap-3 rounded-lg border p-3">
        <input
          type="checkbox"
          checked={sitePublished}
          onChange={(e) => setSitePublished(e.target.checked)}
          className="h-4 w-4"
        />
        <span className="text-sm">
          <span className="font-medium">Publicado</span>
          <span className="block text-xs text-muted-foreground">
            Quando ativo, o link público serve o site do cliente.
          </span>
        </span>
      </label>

      <div className="flex items-center gap-3">
        <Button onClick={submit} disabled={update.isPending}>
          {update.isPending && <Spinner size="sm" className="mr-2" />}
          Guardar
        </Button>
        {siteUrl && (
          <a
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            Abrir URL interno <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}
