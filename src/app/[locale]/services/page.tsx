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
    title: "Frontend services for clear and practical web projects.",
    description:
      "Z-TECH focuses on business websites, frontend interfaces, portfolio pages and bilingual project structures built with a deployment-ready mindset.",
    metaTitle: "Services | Z-TECH",
    metaDescription:
      "Frontend services by Z-TECH: business websites, frontend interfaces, portfolio pages and bilingual web projects.",
    breadcrumbHome: "Home",
    breadcrumbServices: "Services",
  },
  pl: {
    eyebrow: "Usługi",
    title:
      "Usługi frontendowe dla czytelnych i praktycznych projektów webowych.",
    description:
      "Z-TECH skupia się na stronach firmowych, interfejsach frontendowych, portfolio i dwujęzycznych strukturach projektów przygotowanych pod wdrożenie.",
    metaTitle: "Usługi | Z-TECH",
    metaDescription:
      "Usługi frontendowe Z-TECH: strony firmowe, interfejsy frontendowe, portfolio i dwujęzyczne projekty webowe.",
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
