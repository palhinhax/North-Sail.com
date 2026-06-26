"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { AuthShell } from "@/components/marketing";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/lib/i18n/config";
import { authPath, onboardingPath } from "@/lib/i18n/routes";
import { getAuthCopy } from "@/lib/content/auth";

export default function LoginPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale)
    ? params.locale
    : DEFAULT_LOCALE;
  const t = getAuthCopy(locale);

  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const loginSchema = z.object({
    email: z.string().email(t.validation.emailInvalid),
    password: z.string().min(1, t.validation.passwordRequired),
  });
  type LoginFormData = z.infer<typeof loginSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        setError(t.login.errorInvalid);
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    } catch {
      setError(t.login.errorUnexpected);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthShell
      title={t.login.title}
      subtitle={t.login.subtitle}
      homeHref={`/${locale}`}
      footer={
        <>
          {t.login.noAccount}{" "}
          <Link
            href={onboardingPath(locale)}
            className="font-medium text-brand-accent hover:underline"
          >
            {t.login.startNow}
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
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">{t.shared.passwordLabel}</Label>
            <Link
              href={authPath(locale, "forgot-password")}
              className="text-sm font-medium text-brand-accent hover:underline"
            >
              {t.login.forgotLink}
            </Link>
          </div>
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
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading && <Spinner size="sm" className="mr-2" />}
          {t.login.submit}
        </Button>
      </form>
    </AuthShell>
  );
}
