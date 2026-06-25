"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Phone,
  MessageCircle,
  MapPin,
  Globe,
  Info,
  Building2,
  Contact,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { useUpdateBusiness } from "@/features/businesses/hooks";

interface Props {
  business: {
    id: string;
    name: string;
    description: string | null;
    phone: string | null;
    whatsapp: string | null;
    address: string | null;
    domainDesired: string | null;
  };
}

const DESC_MAX = 500;

export function BusinessForm({ business }: Props) {
  const [name, setName] = useState(business.name);
  const [description, setDescription] = useState(business.description ?? "");
  const [phone, setPhone] = useState(business.phone ?? "");
  const [whatsapp, setWhatsapp] = useState(business.whatsapp ?? "");
  const [address, setAddress] = useState(business.address ?? "");
  const [domainDesired, setDomainDesired] = useState(
    business.domainDesired ?? ""
  );
  const update = useUpdateBusiness();
  const { toast } = useToast();
  const router = useRouter();

  function reset() {
    setName(business.name);
    setDescription(business.description ?? "");
    setPhone(business.phone ?? "");
    setWhatsapp(business.whatsapp ?? "");
    setAddress(business.address ?? "");
    setDomainDesired(business.domainDesired ?? "");
  }

  async function submit() {
    try {
      await update.mutateAsync({
        id: business.id,
        data: {
          name,
          description: description || null,
          phone: phone || null,
          whatsapp: whatsapp || null,
          address: address || null,
          domainDesired: domainDesired || null,
        },
      });
      toast({ title: "Atualizado" });
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      className="grid grid-cols-1 gap-6 lg:grid-cols-12"
    >
      {/* Main column */}
      <div className="flex flex-col gap-6 lg:col-span-8">
        <Section
          title="Informações gerais"
          icon={<Building2 className="h-4 w-4" />}
        >
          <div className="space-y-2">
            <Label htmlFor="name">Nome do negócio</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Descrição</Label>
            <textarea
              id="description"
              rows={4}
              maxLength={DESC_MAX}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full resize-y rounded-md border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <p className="text-right text-xs text-muted-foreground">
              {description.length} / {DESC_MAX} caracteres
            </p>
          </div>
        </Section>

        <Section
          title="Contactos e localização"
          icon={<Contact className="h-4 w-4" />}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <IconField
              id="phone"
              label="Telefone"
              icon={<Phone className="h-4 w-4" />}
              value={phone}
              onChange={setPhone}
              type="tel"
            />
            <IconField
              id="whatsapp"
              label="WhatsApp"
              icon={<MessageCircle className="h-4 w-4" />}
              value={whatsapp}
              onChange={setWhatsapp}
              type="tel"
            />
          </div>
          <IconField
            id="address"
            label="Morada"
            icon={<MapPin className="h-4 w-4" />}
            value={address}
            onChange={setAddress}
          />
        </Section>
      </div>

      {/* Side column */}
      <div className="flex flex-col gap-6 lg:col-span-4">
        <Section title="Presença digital" icon={<Globe className="h-4 w-4" />}>
          <div className="space-y-2">
            <Label htmlFor="domain">Domínio desejado</Label>
            <div className="flex items-center overflow-hidden rounded-md border bg-background transition-colors focus-within:border-brand-accent focus-within:ring-2 focus-within:ring-brand-accent/20">
              <Globe className="ml-3 h-4 w-4 shrink-0 text-muted-foreground" />
              <input
                id="domain"
                value={domainDesired}
                onChange={(e) => setDomainDesired(e.target.value)}
                className="w-full bg-transparent px-2 py-2 text-sm outline-none"
                placeholder="omeunegocio.pt"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Será o endereço do teu site NorthSail (sujeito a validação de
              disponibilidade).
            </p>
          </div>
        </Section>

        <div className="sticky top-6 flex flex-col gap-4 rounded-2xl border border-line bg-gradient-to-br from-card to-surface-low p-5 shadow-sm">
          <div className="flex items-start gap-3 rounded-xl bg-brand-accent/[0.06] p-3 ring-1 ring-inset ring-brand-accent/10">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
            <p className="text-sm text-ink-muted">
              Ao guardar, as alterações refletem-se na tua página pública.
            </p>
          </div>
          <Button
            type="submit"
            disabled={update.isPending}
            className="w-full bg-brand-accent text-white shadow-sm hover:bg-brand-accent-hover"
          >
            {update.isPending && <Spinner size="sm" className="mr-2" />}
            Guardar alterações
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={reset}
            disabled={update.isPending}
          >
            Descartar
          </Button>
        </div>
      </div>
    </form>
  );
}

function Section({
  title,
  icon,
  children,
  className,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-2xl border border-line bg-card p-6 shadow-sm transition-shadow hover:shadow-md md:p-8",
        className
      )}
    >
      <h3 className="mb-4 flex items-center gap-2.5 border-b pb-3 text-lg font-semibold text-ink">
        {icon && (
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent ring-1 ring-inset ring-brand-accent/15">
            {icon}
          </span>
        )}
        {title}
      </h3>
      <div className="flex flex-col gap-4">{children}</div>
    </section>
  );
}

function IconField({
  id,
  label,
  icon,
  value,
  onChange,
  type = "text",
}: {
  id: string;
  label: string;
  icon: React.ReactNode;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative flex items-center">
        <span className="absolute left-3 text-muted-foreground">{icon}</span>
        <Input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-9"
        />
      </div>
    </div>
  );
}
