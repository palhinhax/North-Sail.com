"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Phone, MessageCircle, MapPin, Globe, Info } from "lucide-react";
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
        <Section title="Informações gerais">
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

        <Section title="Contactos e localização">
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
        <Section title="Presença digital">
          <div className="space-y-2">
            <Label htmlFor="domain">Domínio desejado</Label>
            <div className="flex items-center overflow-hidden rounded-md border bg-background transition-colors focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
              <Globe className="ml-3 h-4 w-4 shrink-0 text-muted-foreground" />
              <input
                id="domain"
                value={domainDesired}
                onChange={(e) => setDomainDesired(e.target.value)}
                className="w-full bg-transparent px-2 py-2 text-sm outline-none"
                placeholder="omeunegocio"
              />
              <span className="border-l bg-muted px-3 py-2 text-sm text-muted-foreground">
                .pt
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Será o endereço do teu site NorthSail (sujeito a validação de
              disponibilidade).
            </p>
          </div>
        </Section>

        <div className="sticky top-6 flex flex-col gap-4 rounded-2xl border bg-card p-5 shadow-sm">
          <div className="flex items-start gap-2">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <p className="text-sm text-muted-foreground">
              Ao guardar, as alterações refletem-se na tua página pública.
            </p>
          </div>
          <Button type="submit" disabled={update.isPending} className="w-full">
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
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-2xl border bg-card p-6 shadow-sm md:p-8",
        className
      )}
    >
      <h3 className="mb-4 border-b pb-3 text-lg font-semibold">{title}</h3>
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
