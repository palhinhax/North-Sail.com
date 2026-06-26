// Crockford base32 sem caracteres ambíguos (0 O 1 I L) — legível ao telefone.
const ALPHABET = "23456789ABCDEFGHJKMNPQRSTUVWXYZ";

/** Gera um código legível e aleatório, ex.: `NS-7K2P-QX9R`. */
export function generateDiscountCode(): string {
  const block = (n: number) =>
    Array.from(
      { length: n },
      () => ALPHABET[Math.floor(Math.random() * ALPHABET.length)]
    ).join("");
  return `NS-${block(4)}-${block(4)}`;
}

/** Normaliza um código introduzido pelo cliente (trim + maiúsculas). */
export function normalizeCode(code: string): string {
  return code.trim().toUpperCase();
}
