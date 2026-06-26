"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { AuthShell } from "@/components/marketing";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/lib/i18n/config";
import { authPath } from "@/lib/i18n/routes";
import { getAuthCopy } from "@/lib/content/auth";

export default function RegisterPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale)
    ? params.locale
    : DEFAULT_LOCALE;
  const t = getAuthCopy(locale);

  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const registerSchema = z
    .object({
      name: z.string().min(2, t.validation.nameMin),
      email: z.string().email(t.validation.emailInvalid),
      password: z.string().min(8, t.validation.passwordMin),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t.validation.passwordsNoMatch,
      path: ["confirmPassword"],
    });
  type RegisterFormData = z.infer<typeof registerSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || t.register.errorFallback);
      }

      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        router.push(authPath(locale, "login"));
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : t.register.errorFallback);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthShell
      title={t.register.title}
      subtitle={t.register.subtitle}
      homeHref={`/${locale}`}
      footer={
        <>
          {t.register.haveAccount}{" "}
          <Link
            href={authPath(locale, "login")}
            className="font-medium text-brand-accent hover:underline"
          >
            {t.register.login}
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
          <Label htmlFor="name">{t.register.nameLabel}</Label>
          <Input
            id="name"
            placeholder={t.register.namePlaceholder}
            {...register("name")}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>
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
        <div className="space-y-2">
          <Label htmlFor="password">{t.shared.passwordLabel}</Label>
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
          <Label htmlFor="confirmPassword">{t.register.confirmLabel}</Label>
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
          {t.register.submit}
        </Button>
      </form>
    </AuthShell>
  );
}
