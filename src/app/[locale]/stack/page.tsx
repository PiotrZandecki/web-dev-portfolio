import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { SiteProductionChecklist } from "@/components/SiteProductionChecklist";
import { SkillsSection } from "@/components/SkillsSection";
import { TechStackSection } from "@/components/TechStackSection";
import { WorkProcessSection } from "@/components/WorkProcessSection";
import { getDictionary, isLocale } from "@/lib/i18n";
import { getStackPageStructuredData } from "@/lib/structured-data";
import { locales, Locale } from "@/types/locale";

type StackPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const stackPageCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
    breadcrumbHome: string;
    breadcrumbStack: string;
  }
> = {
  en: {
    eyebrow: "Stack",
    title: "Technology stack and frontend workflow.",
    description:
      "A closer look at the tools, structure and workflow used to build Z-TECH projects: Next.js, TypeScript, Tailwind CSS, bilingual content and static deployment.",
    metaTitle: "Stack | Z-TECH",
    metaDescription:
      "Technology stack behind Z-TECH frontend projects: Next.js, TypeScript, Tailwind CSS, bilingual content and Netlify deployment.",
    breadcrumbHome: "Home",
    breadcrumbStack: "Stack",
  },
  pl: {
    eyebrow: "Technologie",
    title: "Stack technologiczny i workflow frontendowy.",
    description:
      "Bliższy widok narzędzi, struktury i workflow używanego do budowania projektów Z-TECH: Next.js, TypeScript, Tailwind CSS, treści dwujęzyczne i statyczny deployment.",
    metaTitle: "Technologie | Z-TECH",
    metaDescription:
      "Stack technologiczny projektów frontendowych Z-TECH: Next.js, TypeScript, Tailwind CSS, treści dwujęzyczne i deployment na Netlify.",
    breadcrumbHome: "Start",
    breadcrumbStack: "Technologie",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: StackPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const copy = stackPageCopy[locale];

  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: {
      languages: {
        en: "/en/stack/",
        pl: "/pl/stack/",
      },
    },
  };
}

export default async function StackPage({ params }: StackPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);
  const copy = stackPageCopy[locale];

  const breadcrumbItems = [
    {
      label: copy.breadcrumbHome,
      href: `/${locale}/`,
    },
    {
      label: copy.breadcrumbStack,
    },
  ];

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <JsonLd data={getStackPageStructuredData(locale)} />

      <Breadcrumbs items={breadcrumbItems} />

      <PageIntro
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />

      <TechStackSection locale={locale} />

      <SkillsSection locale={locale} dictionary={dictionary} />

      <SiteProductionChecklist locale={locale} />

      <WorkProcessSection locale={locale} />

      <FinalCta locale={locale} />
    </main>
  );
}
