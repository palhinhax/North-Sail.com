// Apenas o módulo de acesso a dados do cliente é reexportado no barrel.
// `redeem.ts` é server-only e deve ser importado diretamente pelas rotas.
export * from "./discounts";
