import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { ServicePackagesSection } from "@/components/ServicePackagesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ValuePropositionSection } from "@/components/ValuePropositionSection";
import { WorkProcessSection } from "@/components/WorkProcessSection";
import { isLocale } from "@/lib/i18n";
import { getServicesPageStructuredData } from "@/lib/structured-data";
import { locales, Locale } from "@/types/locale";

type ServicesPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const servicesPageCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
    breadcrumbHome: string;
    breadcrumbServices: string;
  }
> = {
  en: {
    eyebrow: "Services",
    title:
      "Frontend services for websites that need to look clear and work reliably.",
    description:
      "I help with modern business websites, portfolio pages, landing pages and bilingual frontend projects. The focus is simple: clean structure, readable content, responsive UI and deployment-ready delivery.",
    metaTitle: "Services | Z-TECH",
    metaDescription:
      "Frontend services by Z-TECH Piotr Zandecki: business websites, portfolio pages, landing pages and bilingual web projects built with a deployment-ready workflow.",
    breadcrumbHome: "Home",
    breadcrumbServices: "Services",
  },
  pl: {
    eyebrow: "Usługi",
    title:
      "Usługi frontendowe dla stron, które mają wyglądać czytelnie i działać stabilnie.",
    description:
      "Pomagam przy nowoczesnych stronach firmowych, portfolio, landing page’ach i dwujęzycznych projektach frontendowych. Cel jest prosty: czysta struktura, zrozumiałe treści, responsywny interfejs i przygotowanie pod wdrożenie.",
    metaTitle: "Usługi | Z-TECH",
    metaDescription:
      "Usługi frontendowe Z-TECH Piotr Zandecki: strony firmowe, portfolio, landing page’e i dwujęzyczne projekty webowe budowane w workflow gotowym pod wdrożenie.",
    breadcrumbHome: "Start",
    breadcrumbServices: "Usługi",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const copy = servicesPageCopy[locale];

  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: {
      languages: {
        en: "/en/services/",
        pl: "/pl/services/",
      },
    },
  };
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = servicesPageCopy[locale];

  const breadcrumbItems = [
    {
      label: copy.breadcrumbHome,
      href: `/${locale}/`,
    },
    {
      label: copy.breadcrumbServices,
    },
  ];

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <JsonLd data={getServicesPageStructuredData(locale)} />

      <Breadcrumbs items={breadcrumbItems} />

      <PageIntro
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />

      <ServicePackagesSection locale={locale} />

      <ValuePropositionSection locale={locale} />

      <ServicesSection locale={locale} />

      <WorkProcessSection locale={locale} />

      <FaqSection locale={locale} />

      <FinalCta locale={locale} />
    </main>
  );
}
