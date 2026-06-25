/**
 * Cria (ou promove) um utilizador ADMIN diretamente na base de dados.
 *
 * Uso:
 *   npx tsx scripts/create-admin.ts <email> <password> ["Nome"]
 *
 * Exemplo:
 *   npx tsx scripts/create-admin.ts joao.mduart@gmail.com "aMinhaPass123"
 *
 * Se o email já existir, apenas o promove a ADMIN (e atualiza a password
 * se for fornecida). Se não existir, cria-o de raiz.
 */
import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = (process.argv[2] || process.env.ADMIN_EMAIL || "")
    .trim()
    .toLowerCase();
  const password = process.argv[3] || process.env.ADMIN_PASSWORD || "";
  const name = process.argv[4] || "João — Admin";

  if (!email) {
    throw new Error(
      'Falta o email. Uso: npx tsx scripts/create-admin.ts <email> <password> ["Nome"]'
    );
  }

  const existing = await prisma.user.findUnique({ where: { email } });

  if (existing) {
    const data: { role: Role; passwordHash?: string; name?: string } = {
      role: Role.ADMIN,
    };
    if (password) data.passwordHash = await bcrypt.hash(password, 12);
    if (process.argv[4]) data.name = name;
    const updated = await prisma.user.update({ where: { email }, data });
    console.log(`✅ Utilizador existente promovido a ADMIN: ${updated.email}`);
    if (password) console.log("   Password atualizada.");
    else console.log("   (sem password nova — mantém a anterior)");
    return;
  }

  if (!password) {
    throw new Error(
      "Utilizador novo precisa de password. Uso: npx tsx scripts/create-admin.ts <email> <password>"
    );
  }

  const passwordHash = await bcrypt.hash(password, 12);
  const created = await prisma.user.create({
    data: { email, name, passwordHash, role: Role.ADMIN },
  });
  console.log(`✅ Admin criado: ${created.email}`);
}

main()
  .catch((e) => {
    console.error("❌", e.message);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
