import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutSection } from "@/components/AboutSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCta } from "@/components/FinalCta";
import { PageIntro } from "@/components/PageIntro";
import { SkillsSection } from "@/components/SkillsSection";
import { WorkProcessSection } from "@/components/WorkProcessSection";
import { getDictionary, isLocale } from "@/lib/i18n";
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
    eyebrow: "About",
    title: "About Z-TECH and the way this portfolio is built.",
    description:
      "Z-TECH is a frontend-focused web development portfolio and service-oriented project built around practical work, clean structure, bilingual content and deployment-ready delivery.",
    metaTitle: "About | Z-TECH",
    metaDescription:
      "Learn more about Z-TECH Piotr Zandecki, frontend development focus, project workflow and technology stack.",
    breadcrumbHome: "Home",
    breadcrumbAbout: "About",
  },
  pl: {
    eyebrow: "O Z-TECH",
    title: "O Z-TECH i sposobie budowania tego portfolio.",
    description:
      "Z-TECH to portfolio web development skupione na frontendzie oraz projekt usługowy oparty o praktyczną pracę, czystą strukturę, dwujęzyczne treści i przygotowanie pod wdrożenie.",
    metaTitle: "O Z-TECH | Z-TECH",
    metaDescription:
      "Dowiedz się więcej o Z-TECH Piotr Zandecki, kierunku frontendowym, workflow projektowym i stacku technologicznym.",
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
