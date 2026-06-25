# NorthSail — Checklist de Produção

Guia para passar do localhost para produção. Faz por esta ordem.

## 0. Rodar segredos expostos (URGENTE)

Várias chaves foram partilhadas em texto durante o desenvolvimento. Antes de ir
a sério, **gera novas** e atualiza no `.env` local e na Vercel:

- [ ] **Neon** — rodar a password da base de dados (Neon → projeto → Roles) e
      atualizar `DATABASE_URL` / `DATABASE_URL_UNPOOLED`.
- [ ] **Stripe** — Developers → API keys → roll da `sk_test…` (e usar as keys
      **live** quando for a sério).
- [ ] **Vercel** — Account → Tokens → revogar o token antigo e criar novo
      (`VERCEL_TOKEN`).
- [ ] **Backblaze B2** — App Keys → apagar a key antiga e criar nova
      (`B2_KEY_ID` / `B2_APP_KEY`).
- [ ] **AUTH_SECRET** — gerar um novo para produção: `openssl rand -base64 32`.

## 1. Base de dados (Neon)

- [ ] `pnpm prisma generate`
- [ ] `pnpm db:push` (aplica o schema atual: planos, anexos, site/domínio, Stripe…)
- [ ] `npx tsx scripts/reset-plan-prices.ts` (preços canónicos: anual = mensal × 10)
- [ ] (opcional) `pnpm db:seed` para dados demo / admin
- [ ] Criar o teu admin real: `npx tsx scripts/create-admin.ts <email> '<password>' '<Nome>'`

## 2. Deploy da plataforma (Vercel)

- [ ] Importar o repo `palhinhax/North-Sail.com` na Vercel (se ainda não está).
- [ ] **Environment Variables** (Production + Preview):
  - `DATABASE_URL`, `DATABASE_URL_UNPOOLED`
  - `AUTH_SECRET`
  - `NEXTAUTH_URL` = `https://www.north-sail.com`
  - `NEXT_PUBLIC_SITE_URL` = `https://www.north-sail.com`
  - `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_WEBHOOK_SECRET`
  - `VERCEL_TOKEN`, `VERCEL_TEAM_ID`
  - `B2_ENDPOINT`, `B2_REGION`, `B2_BUCKET`, `B2_KEY_ID`, `B2_APP_KEY`
- [ ] Deploy e confirmar que o build passa.

## 3. Domínio principal (north-sail.com)

- [ ] Adicionar `www.north-sail.com` (e apex) ao projeto da plataforma na Vercel.
- [ ] DNS na Namecheap (já feito): `A @ 76.76.21.21` e `CNAME www → vercel`.
- [ ] **Wildcard para subdomínios de clientes:** `CNAME * → cname.vercel-dns.com`
      (permite `cliente.north-sail.com` sem mexer no DNS por cada cliente).

## 4. Sites dos clientes (por cliente)

- [ ] Em `/admin/clients/[id]` → "Domínio na Vercel": meter o ID do projeto
      Vercel do site e associar `slug.north-sail.com` (ou o domínio próprio).
- [ ] Confirmar o estado verde (DNS já coberto pelo wildcard).
- [ ] Marcar **Publicado** no cartão "Site & domínio".

## 5. Stripe (modo live)

- [ ] Trocar as keys de teste pelas **live** nas env vars.
- [ ] `npx tsx scripts/stripe-sync-plans.ts` (cria produtos/preços na conta live).
- [ ] Criar o **webhook**: Stripe → Developers → Webhooks → endpoint
      `https://www.north-sail.com/api/webhooks/stripe`, eventos:
      `invoice.payment_succeeded`, `customer.subscription.updated`,
      `customer.subscription.created`, `customer.subscription.deleted`.
      Copiar o `whsec_…` para `STRIPE_WEBHOOK_SECRET`.
- [ ] Configurar o Customer Portal (a app cria a configuração sozinha; confirmar
      em Settings → Billing → Customer portal se quiseres ajustar).
- [ ] Preencher o perfil do negócio no Stripe ("What does your business do?").

## 6. Backblaze B2 (anexos)

- [ ] CORS de produção (B2 → bucket → CORS, via CLI):
      `allowedOrigins` = `https://www.north-sail.com` (e `https://*.north-sail.com`),
      `allowedOperations` = `s3_put`, `s3_get`, `s3_head`.
- [ ] Confirmar que o bucket é **privado** (já está).

## 7. Qualidade / testes

- [ ] `pnpm typecheck` e `pnpm lint` sem erros.
- [ ] `pnpm test` (unitários) verdes.
- [ ] `pnpm test:e2e` (cliente + admin) verdes localmente.
- [ ] CI no GitHub verde (workflows **CI** e **E2E**).
- [ ] (opcional) Adicionar os secrets Stripe no GitHub para o E2E de pagamento.

## 8. Pós-lançamento

- [ ] Testar a jornada real: onboarding → pagar (cartão real pequeno ou teste) →
      ACTIVE → gerir/cancelar no portal.
- [ ] Testar anexos numa conversa (imagem + PDF).
- [ ] Monitorizar logs (Vercel) e pagamentos (Stripe) nos primeiros dias.

---

### Notas de arquitetura

- Sites de clientes são deployments **separados** servidos no seu próprio host
  (`slug.north-sail.com` ou domínio próprio). A plataforma só guarda o domínio e
  liga-o ao projeto Vercel — **não** há proxy.
- A pré-visualização do cliente usa um **screenshot** (não iframe), porque os
  sites bloqueiam embedding por segurança.
- A subscrição fica ACTIVE via webhook do Stripe; a página de subscrição também
  sincroniza ao voltar do pagamento (para funcionar mesmo sem webhook local).
