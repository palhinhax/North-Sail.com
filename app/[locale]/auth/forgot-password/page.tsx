"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { AuthShell } from "@/components/marketing";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/lib/i18n/config";
import { authPath } from "@/lib/i18n/routes";
import { getAuthCopy } from "@/lib/content/auth";

const RESET_LINK_EXPIRY_MINUTES = 60;

export default function ForgotPasswordPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale)
    ? params.locale
    : DEFAULT_LOCALE;
  const t = getAuthCopy(locale);

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [done, setDone] = useState(false);

  const forgotSchema = z.object({
    email: z.string().email(t.validation.emailInvalid),
  });
  type ForgotFormData = z.infer<typeof forgotSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotFormData>({
    resolver: zodResolver(forgotSchema),
  });

  const onSubmit = async (data: ForgotFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/auth/password/forgot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email, locale }),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || t.forgot.errorFallback);
      }

      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : t.forgot.errorFallback);
    } finally {
      setIsLoading(false);
    }
  };

  if (done) {
    return (
      <AuthShell
        title={t.forgot.doneTitle}
        subtitle={t.forgot.doneSubtitle}
        homeHref={`/${locale}`}
        footer={
          <Link
            href={authPath(locale, "login")}
            className="font-medium text-brand-accent hover:underline"
          >
            {t.forgot.backToLogin}
          </Link>
        }
      >
        <p className="text-sm text-muted-foreground">
          {t.forgot.doneBody.replace(
            "{minutes}",
            String(RESET_LINK_EXPIRY_MINUTES)
          )}
        </p>
      </AuthShell>
    );
  }

  return (
    <AuthShell
      title={t.forgot.title}
      subtitle={t.forgot.subtitle}
      homeHref={`/${locale}`}
      footer={
        <>
          {t.forgot.remembered}{" "}
          <Link
            href={authPath(locale, "login")}
            className="font-medium text-brand-accent hover:underline"
          >
            {t.forgot.login}
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {error && (
          <div className="rounded-md border border-destructive/20 bg-destructive/10 p-3 text-sm text-destructive">
            {error}
          </div>
        )}
        <div className="space-y-2">
          <Label htmlFor="email">{t.shared.emailLabel}</Label>
          <Input
            id="email"
            type="email"
            placeholder={t.shared.emailPlaceholder}
            {...register("email")}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading && <Spinner size="sm" className="mr-2" />}
          {t.forgot.submit}
        </Button>
      </form>
    </AuthShell>
  );
}
