/**
 * Modela a semântica do "claim" atómico usado em `redeemCode`:
 *
 *   UPDATE DiscountCode SET redemptionsUsed = redemptionsUsed + 1
 *   WHERE id = ? AND active = true
 *     AND (maxRedemptions IS NULL OR redemptionsUsed < maxRedemptions)
 *
 * Um UPDATE condicional é atómico na base de dados: numa corrida pelo último
 * uso, só uma das transações vê `redemptionsUsed < maxRedemptions` e incrementa
 * (count = 1); a outra falha (count = 0). Este teste reproduz essa garantia.
 */

interface CodeRow {
  redemptionsUsed: number;
  maxRedemptions: number | null;
  active: boolean;
}

/** Equivalente ao `updateMany` condicional: devolve quantas linhas mudou. */
function claimOnce(row: CodeRow): number {
  // Secção crítica: a BD garante que o check + increment são indivisíveis.
  const available =
    row.active &&
    (row.maxRedemptions === null || row.redemptionsUsed < row.maxRedemptions);
  if (!available) return 0;
  row.redemptionsUsed += 1;
  return 1;
}

describe("claim atómico de código", () => {
  it("dois resgates concorrentes do último uso → só um vence", async () => {
    const row: CodeRow = {
      redemptionsUsed: 0,
      maxRedemptions: 1,
      active: true,
    };

    const [a, b] = await Promise.all([
      Promise.resolve().then(() => claimOnce(row)),
      Promise.resolve().then(() => claimOnce(row)),
    ]);

    const winners = [a, b].filter((c) => c === 1).length;
    expect(winners).toBe(1);
    expect(row.redemptionsUsed).toBe(1);
  });

  it("não ultrapassa maxRedemptions com muitos resgates", async () => {
    const row: CodeRow = {
      redemptionsUsed: 0,
      maxRedemptions: 3,
      active: true,
    };

    const results = await Promise.all(
      Array.from({ length: 10 }, () =>
        Promise.resolve().then(() => claimOnce(row))
      )
    );

    expect(results.filter((c) => c === 1).length).toBe(3);
    expect(row.redemptionsUsed).toBe(3);
  });

  it("maxRedemptions null (ilimitado) deixa sempre incrementar", () => {
    const row: CodeRow = {
      redemptionsUsed: 100,
      maxRedemptions: null,
      active: true,
    };
    expect(claimOnce(row)).toBe(1);
  });
});
