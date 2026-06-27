import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutSection } from "@/components/AboutSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { SkillsSection } from "@/components/SkillsSection";
import { WorkProcessSection } from "@/components/WorkProcessSection";
import { getDictionary, isLocale } from "@/lib/i18n";
import { getAboutPageStructuredData } from "@/lib/structured-data";
import { locales, Locale } from "@/types/locale";

type AboutPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const aboutPageCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
    breadcrumbHome: string;
    breadcrumbAbout: string;
  }
> = {
  en: {
    eyebrow: "About Z-TECH",
    title: "A personal web development brand by Piotr Zandecki.",
    description:
      "Z-TECH is my frontend-focused web development space for building clean, bilingual and maintainable websites. I focus on practical project delivery: clear structure, reusable components, readable content and deployment-ready results.",
    metaTitle: "About | Z-TECH",
    metaDescription:
      "Learn more about Z-TECH Piotr Zandecki, a frontend-focused web development brand built around clean structure, bilingual content and maintainable projects.",
    breadcrumbHome: "Home",
    breadcrumbAbout: "About",
  },
  pl: {
    eyebrow: "O Z-TECH",
    title: "Osobista marka web developmentowa Piotra Zandeckiego.",
    description:
      "Z-TECH to moje frontendowe miejsce do budowania czystych, dwujęzycznych i łatwych w utrzymaniu stron internetowych. Skupiam się na praktycznej realizacji projektów: czytelnej strukturze, komponentach wielokrotnego użytku, zrozumiałych treściach i rezultatach gotowych do wdrożenia.",
    metaTitle: "O Z-TECH | Z-TECH",
    metaDescription:
      "Dowiedz się więcej o Z-TECH Piotr Zandecki — frontendowej marce web developmentowej opartej na czystej strukturze, dwujęzycznych treściach i łatwych w utrzymaniu projektach.",
    breadcrumbHome: "Start",
    breadcrumbAbout: "O Z-TECH",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const copy = aboutPageCopy[locale];

  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: {
      languages: {
        en: "/en/about/",
        pl: "/pl/about/",
      },
    },
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);
  const copy = aboutPageCopy[locale];

  const breadcrumbItems = [
    {
      label: copy.breadcrumbHome,
      href: `/${locale}/`,
    },
    {
      label: copy.breadcrumbAbout,
    },
  ];

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <JsonLd data={getAboutPageStructuredData(locale)} />

      <Breadcrumbs items={breadcrumbItems} />

      <PageIntro
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />

      <AboutSection locale={locale} />

      <SkillsSection locale={locale} dictionary={dictionary} />

      <WorkProcessSection locale={locale} />

      <FinalCta locale={locale} />
    </main>
  );
}
