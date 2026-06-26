import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getDictionary, isLocale } from "@/lib/i18n";
import { locales } from "@/types/locale";

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
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header locale={locale} dictionary={dictionary} />
      {children}
      <Footer dictionary={dictionary} />
    </div>
  );
}
