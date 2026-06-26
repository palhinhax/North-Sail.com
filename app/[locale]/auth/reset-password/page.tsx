"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/ui/password-input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { AuthShell } from "@/components/marketing";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/lib/i18n/config";
import { authPath } from "@/lib/i18n/routes";
import { getAuthCopy } from "@/lib/content/auth";

function ResetPasswordForm({ locale }: { locale: Locale }) {
  const t = getAuthCopy(locale);
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [done, setDone] = useState(false);

  const resetSchema = z
    .object({
      password: z.string().min(8, t.validation.passwordMin),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t.validation.passwordsNoMatch,
      path: ["confirmPassword"],
    });
  type ResetFormData = z.infer<typeof resetSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetFormData>({
    resolver: zodResolver(resetSchema),
  });

  const onSubmit = async (data: ResetFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/auth/password/reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password: data.password }),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || t.reset.errorFallback);
      }

      setDone(true);
      setTimeout(() => router.push(authPath(locale, "login")), 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : t.reset.errorFallback);
    } finally {
      setIsLoading(false);
    }
  };

  if (!token) {
    return (
      <AuthShell
        title={t.reset.invalidTitle}
        subtitle={t.reset.invalidSubtitle}
        homeHref={`/${locale}`}
        footer={
          <Link
            href={authPath(locale, "forgot-password")}
            className="font-medium text-brand-accent hover:underline"
          >
            {t.reset.requestNew}
          </Link>
        }
      >
        <p className="text-sm text-muted-foreground">{t.reset.invalidBody}</p>
      </AuthShell>
    );
  }

  if (done) {
    return (
      <AuthShell
        title={t.reset.doneTitle}
        subtitle={t.reset.doneSubtitle}
        homeHref={`/${locale}`}
        footer={
          <Link
            href={authPath(locale, "login")}
            className="font-medium text-brand-accent hover:underline"
          >
            {t.reset.goToLogin}
          </Link>
        }
      >
        <p className="text-sm text-muted-foreground">{t.reset.doneBody}</p>
      </AuthShell>
    );
  }

  return (
    <AuthShell
      title={t.reset.title}
      subtitle={t.reset.subtitle}
      homeHref={`/${locale}`}
      footer={
        <Link
          href={authPath(locale, "login")}
          className="font-medium text-brand-accent hover:underline"
        >
          {t.reset.backToLogin}
        </Link>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {error && (
          <div className="rounded-md border border-destructive/20 bg-destructive/10 p-3 text-sm text-destructive">
            {error}
          </div>
        )}
        <div className="space-y-2">
          <Label htmlFor="password">{t.reset.newPasswordLabel}</Label>
          <PasswordInput
            id="password"
            placeholder="••••••••"
            {...register("password")}
            aria-invalid={!!errors.password}
          />
          {errors.password && (
            <p className="text-sm text-destructive">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">{t.reset.confirmLabel}</Label>
          <PasswordInput
            id="confirmPassword"
            placeholder="••••••••"
            {...register("confirmPassword")}
            aria-invalid={!!errors.confirmPassword}
          />
          {errors.confirmPassword && (
            <p className="text-sm text-destructive">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading && <Spinner size="sm" className="mr-2" />}
          {t.reset.submit}
        </Button>
      </form>
    </AuthShell>
  );
}

export default function ResetPasswordPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale)
    ? params.locale
    : DEFAULT_LOCALE;
  return (
    <Suspense fallback={null}>
      <ResetPasswordForm locale={locale} />
    </Suspense>
  );
}
