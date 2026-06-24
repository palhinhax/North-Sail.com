import {
  ArrowRight,
  Building2,
  Dumbbell,
  HeartPulse,
  Hotel,
  LayoutDashboard,
  Scissors,
  ShoppingCart,
  Store,
  UtensilsCrossed,
  Wrench,
} from "lucide-react";
import { prisma } from "@/lib/prisma";
import {
  CtaLink,
  FaqItem,
  FeatureCard,
  Hero,
  HeroDashboardMockup,
  MarketingLayout,
  PricingCard,
  Section,
  SectionHeader,
  StepCard,
} from "@/components/marketing";

const cents = (n: number) => (n / 100).toFixed(0).replace(".", ",");

const SECTORS = [
  {
    icon: <UtensilsCrossed className="h-5 w-5" />,
    title: "Restaurantes",
    description: "Menus digitais, reservas de mesa e horários.",
  },
  {
    icon: <Scissors className="h-5 w-5" />,
    title: "Cabeleireiros",
    description: "Marcações online, serviços e portfólio.",
  },
  {
    icon: <Hotel className="h-5 w-5" />,
    title: "Hotéis",
    description: "Reservas diretas, quartos e comodidades.",
  },
  {
    icon: <Dumbbell className="h-5 w-5" />,
    title: "Ginásios",
    description: "Aulas, horários e inscrições de sócios.",
  },
  {
    icon: <Store className="h-5 w-5" />,
    title: "Serviços",
    description: "Para eletricistas, canalizadores e mais.",
  },
];

const STEPS = [
  {
    icon: <ShoppingCart className="h-7 w-7" />,
    title: "Escolha o plano",
    description:
      "Selecione o plano que melhor se adapta às necessidades do seu negócio.",
  },
  {
    icon: <Wrench className="h-7 w-7" />,
    title: "Nós criamos e publicamos",
    description: "Preparamos tudo para si. Sem dores de cabeça técnicas.",
  },
  {
    icon: <LayoutDashboard className="h-7 w-7" />,
    title: "Você gere tudo num só painel",
    description: "Aceda às reservas, atualize menus e horários facilmente.",
  },
];

const TRUST_ICONS = [
  <UtensilsCrossed key="r" className="h-8 w-8" />,
  <Scissors key="s" className="h-8 w-8" />,
  <Hotel key="h" className="h-8 w-8" />,
  <Dumbbell key="g" className="h-8 w-8" />,
  <Store key="t" className="h-8 w-8" />,
  <HeartPulse key="c" className="h-8 w-8" />,
  <Building2 key="b" className="h-8 w-8" />,
];

const FAQS = [
  {
    question: "Preciso de conhecimentos técnicos para usar a NorthSail?",
    answer:
      "Não. Nós tratamos de toda a configuração inicial, publicação e manutenção técnica. Terá acesso a um painel simples e intuitivo para gerir as suas reservas e atualizar conteúdos básicos.",
  },
  {
    question: "Posso usar o meu próprio domínio?",
    answer:
      "Sim. Se já possui um domínio, podemos conectá-lo ao seu novo site NorthSail. Se não tiver, os nossos planos incluem o registo de um domínio novo sem custo adicional no primeiro ano.",
  },
  {
    question: "O que acontece após o mês de teste grátis?",
    answer:
      "No final do período de teste, será convidado a subscrever um dos nossos planos. Não cobramos nada automaticamente e não é necessário cartão de crédito para iniciar o teste.",
  },
  {
    question: "Existe um período de fidelização?",
    answer:
      "Não. Pode cancelar a sua subscrição a qualquer momento, sem taxas de cancelamento ou perguntas complicadas.",
  },
];

export default async function HomePage() {
  const plans = await prisma.plan
    .findMany({ where: { active: true }, orderBy: { monthlyPrice: "asc" } })
    .catch(() => []);

  const highlightIndex = plans.length >= 2 ? 1 : 0;

  return (
    <MarketingLayout>
      <Hero
        title="O site do seu negócio, com reservas e marcações incluídas."
        subtitle="Web apps profissionais para negócios locais — domínio, gestão e manutenção, desde 15€/mês."
        actions={
          <>
            <CtaLink href="/comecar" variant="primary" size="lg">
              Começar agora
              <ArrowRight className="h-4 w-4" />
            </CtaLink>
            <CtaLink href="#planos" variant="outline" size="lg">
              Ver planos
            </CtaLink>
          </>
        }
        visual={<HeroDashboardMockup />}
      />

      {/* Trust strip */}
      <section className="border-y border-line bg-surface-lowest py-12">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <p className="mb-6 text-label-md uppercase tracking-wider text-ink-muted">
            Para restaurantes, cabeleireiros, hotéis, ginásios e serviços
            locais.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 text-ink-subtle opacity-70">
            {TRUST_ICONS.map((icon) => icon)}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <Section id="setores">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {SECTORS.map((sector) => (
            <FeatureCard key={sector.title} {...sector} />
          ))}
        </div>
      </Section>

      {/* Como funciona */}
      <Section id="como-funciona" tone="muted" bordered>
        <SectionHeader title="Como funciona" />
        <div className="relative grid grid-cols-1 gap-16 md:grid-cols-3">
          <div className="absolute left-[16.6%] right-[16.6%] top-8 z-0 hidden h-px bg-line md:block" />
          {STEPS.map((step, i) => (
            <StepCard key={step.title} index={i + 1} {...step} />
          ))}
        </div>
      </Section>

      {/* Planos */}
      <Section id="planos">
        <SectionHeader
          title="Planos simples e transparentes"
          subtitle="Comece com 1 mês de teste grátis. Cancele quando quiser."
        />
        {plans.length > 0 ? (
          <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-6 md:grid-cols-3">
            {plans
              .slice(0, 3)
              .map((plan: (typeof plans)[number], i: number) => (
                <PricingCard
                  key={plan.id}
                  name={plan.name}
                  price={`${cents(plan.monthlyPrice)}€`}
                  features={plan.features.slice(0, 4)}
                  ctaLabel="Selecionar Plano"
                  ctaHref="/comecar"
                  highlighted={i === highlightIndex}
                  badge={i === highlightIndex ? "Mais Popular" : undefined}
                />
              ))}
          </div>
        ) : (
          <p className="text-center text-ink-muted">
            Os planos serão publicados em breve.
          </p>
        )}
      </Section>

      {/* FAQ */}
      <Section id="faq" tone="muted" bordered>
        <SectionHeader title="Perguntas Frequentes" />
        <div className="mx-auto flex max-w-[800px] flex-col gap-3">
          {FAQS.map((faq, i) => (
            <FaqItem key={faq.question} {...faq} defaultOpen={i === 0} />
          ))}
        </div>
      </Section>
    </MarketingLayout>
  );
}
