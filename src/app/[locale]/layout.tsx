import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RouteScrollManager } from "@/components/RouteScrollManager";
import { getDictionary, isLocale } from "@/lib/i18n";
import { locales } from "@/types/locale";
import { notFound } from "next/navigation";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  return (
    <>
      <RouteScrollManager />
      <Header locale={locale} dictionary={dictionary} />
      {children}
      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}
