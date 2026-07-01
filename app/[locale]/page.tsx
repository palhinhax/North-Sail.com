import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { buildMetadata } from "@/lib/seo/metadata";
import { getHomeContent } from "@/lib/content/locales";
import {
  HomeTemplate,
  LocaleMarketingLayout,
  OfferPopup,
} from "@/components/i18n";

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  if (!isLocale(params.locale)) return {};
  const home = getHomeContent(params.locale as Locale);
  return buildMetadata({
    locale: params.locale as Locale,
    pageKey: "home",
    title: home.metaTitle,
    description: home.metaDescription,
  });
}

export default function LocaleHomePage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  return (
    <LocaleMarketingLayout locale={locale} pageKey="home">
      <HomeTemplate locale={locale} />
      <OfferPopup locale={locale} />
    </LocaleMarketingLayout>
  );
}
