import { NextResponse } from "next/server";
import crypto from "crypto";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { sendPasswordResetEmail } from "@/lib/email";
import { DEFAULT_LOCALE, LOCALES } from "@/lib/i18n/config";

const forgotSchema = z.object({
  email: z.string().email("Email inválido"),
  // The locale of the page the request came from, so the reset link in the
  // email points to the matching `/{locale}/auth/reset-password`.
  locale: z.enum(LOCALES).optional(),
});

/** How long a reset link stays valid. */
const EXPIRES_IN_MINUTES = 60;

function resolveBaseUrl(request: Request): string {
  const fromEnv = process.env.NEXTAUTH_URL || process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  return new URL(request.url).origin;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = forgotSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          message: "Validation failed",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const email = result.data.email.trim().toLowerCase();

    const user = await prisma.user.findFirst({
      where: { email: { equals: email, mode: "insensitive" } },
      select: { id: true, name: true, email: true },
    });

    // Always respond 200 regardless of whether the user exists, so we don't
    // leak which emails are registered.
    if (user) {
      // Invalidate any previous unused tokens for this user.
      await prisma.passwordResetToken.deleteMany({
        where: { userId: user.id, usedAt: null },
      });

      const rawToken = crypto.randomBytes(32).toString("hex");
      const tokenHash = crypto
        .createHash("sha256")
        .update(rawToken)
        .digest("hex");
      const expiresAt = new Date(Date.now() + EXPIRES_IN_MINUTES * 60 * 1000);

      await prisma.passwordResetToken.create({
        data: { tokenHash, userId: user.id, expiresAt },
      });

      const locale = result.data.locale ?? DEFAULT_LOCALE;
      const resetUrl = `${resolveBaseUrl(request)}/${locale}/auth/reset-password?token=${rawToken}`;

      try {
        await sendPasswordResetEmail({
          to: user.email,
          name: user.name,
          resetUrl,
          expiresInMinutes: EXPIRES_IN_MINUTES,
        });
      } catch (err) {
        console.error("Failed to send password reset email:", err);
        return NextResponse.json(
          { message: "Não foi possível enviar o email. Tenta novamente." },
          { status: 502 }
        );
      }
    }

    return NextResponse.json({
      message:
        "Se existir uma conta com esse email, enviámos instruções para repor a password.",
    });
  } catch (error) {
    console.error("Forgot password error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
