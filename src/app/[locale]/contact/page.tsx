import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactMethodsSection } from "@/components/ContactMethodsSection";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { ProjectInquirySection } from "@/components/ProjectInquirySection";
import { isLocale } from "@/lib/i18n";
import { getContactPageStructuredData } from "@/lib/structured-data";
import { locales, Locale } from "@/types/locale";

type ContactPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const contactPageCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
    breadcrumbHome: string;
    breadcrumbContact: string;
  }
> = {
  en: {
    eyebrow: "Contact",
    title: "Have a website or frontend idea to build?",
    description:
      "Send a message if you need a business website, portfolio page, landing page or clean frontend interface. I focus on practical, bilingual and deployment-ready web projects.",
    metaTitle: "Contact | Z-TECH",
    metaDescription:
      "Contact Z-TECH Piotr Zandecki for business websites, portfolio pages, landing pages and frontend web development.",
    breadcrumbHome: "Home",
    breadcrumbContact: "Contact",
  },
  pl: {
    eyebrow: "Kontakt",
    title: "Masz pomysł na stronę albo projekt frontendowy?",
    description:
      "Napisz, jeśli potrzebujesz strony firmowej, portfolio, landing page’a albo czystego interfejsu frontendowego. Skupiam się na praktycznych, dwujęzycznych projektach webowych gotowych do wdrożenia.",
    metaTitle: "Kontakt | Z-TECH",
    metaDescription:
      "Kontakt z Z-TECH Piotr Zandecki w sprawie stron firmowych, portfolio, landing page’y i projektów frontendowych.",
    breadcrumbHome: "Start",
    breadcrumbContact: "Kontakt",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const copy = contactPageCopy[locale];

  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: {
      languages: {
        en: "/en/contact/",
        pl: "/pl/contact/",
      },
    },
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = contactPageCopy[locale];

  const breadcrumbItems = [
    {
      label: copy.breadcrumbHome,
      href: `/${locale}/`,
    },
    {
      label: copy.breadcrumbContact,
    },
  ];

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <JsonLd data={getContactPageStructuredData(locale)} />

      <Breadcrumbs items={breadcrumbItems} />

      <PageIntro
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />

      <ContactMethodsSection locale={locale} />

      <ProjectInquirySection locale={locale} />

      <FinalCta locale={locale} />
    </main>
  );
}
