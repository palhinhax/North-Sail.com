import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const cents = (n: number) => (n / 100).toFixed(2).replace(".", ",");

const examples = [
  {
    sector: "Ginásios",
    text: "App para gerir aulas, horários semanais e inscrições.",
  },
  {
    sector: "Restaurantes",
    text: "Menu digital, pedidos take-away e reservas de mesa.",
  },
  {
    sector: "Cabeleireiros",
    text: "Marcações online com vários profissionais.",
  },
  {
    sector: "Hotéis e AL",
    text: "Site com disponibilidade e pedidos diretos.",
  },
];

export default async function Home() {
  const plans = await prisma.plan
    .findMany({ where: { active: true }, orderBy: { monthlyPrice: "asc" } })
    .catch(() => []);

  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="text-xl font-bold">NorthSail</div>
          <div className="flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="ghost">Entrar</Button>
            </Link>
            <Link href="/comecar">
              <Button>Começar</Button>
            </Link>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Mini web apps para negócios locais
          <br />
          <span className="text-primary">desde 15€/mês</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Tu cuidas do negócio. Nós tratamos do site, do domínio, do alojamento
          e das atualizações. Reservas, marcações, pedidos, aulas — tudo pronto
          a usar.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/comecar">
            <Button size="lg">
              Começar agora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/auth/login">
            <Button size="lg" variant="outline">
              Entrar
            </Button>
          </Link>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          30 dias grátis. Só pagas no fim do trial.
        </p>
      </section>

      <section className="border-t bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold">Exemplos por setor</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {examples.map((e) => (
              <div
                key={e.sector}
                className="rounded-lg border bg-background p-5"
              >
                <div className="text-sm text-primary">{e.sector}</div>
                <p className="mt-2 text-sm text-muted-foreground">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {plans.length > 0 && (
        <section className="border-t py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-2xl font-bold">Planos simples</h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-muted-foreground">
              Começa pequeno. Cresce quando precisares.
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
              {plans.map((p) => (
                <Card key={p.id}>
                  <CardHeader>
                    <CardTitle className="text-base">{p.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="text-3xl font-bold">
                      {cents(p.monthlyPrice)}€
                      <span className="text-sm font-normal text-muted-foreground">
                        {" "}
                        / mês
                      </span>
                    </div>
                    <p className="text-muted-foreground">{p.description}</p>
                    <ul className="space-y-1">
                      {p.features.slice(0, 4).map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/comecar">
                <Button size="lg">Escolher um plano</Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      <footer className="border-t py-10">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          NorthSail · Mini web apps para negócios locais
        </div>
      </footer>
    </div>
  );
}
