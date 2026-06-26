import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutSection } from "@/components/AboutSection";
import { ContactCta } from "@/components/ContactCta";
import { FaqSection } from "@/components/FaqSection";
import { FinalCta } from "@/components/FinalCta";
import { HeroSection } from "@/components/HeroSection";
import { HomeProjectShowcase } from "@/components/HomeProjectShowcase";
import { JsonLd } from "@/components/JsonLd";
import { ServicesSection } from "@/components/ServicesSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ValuePropositionSection } from "@/components/ValuePropositionSection";
import { WorkProcessSection } from "@/components/WorkProcessSection";
import { projects } from "@/content/projects";
import { getDictionary, isLocale } from "@/lib/i18n";
import { getHomeStructuredData } from "@/lib/structured-data";

type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale);

  return {
    title: dictionary.seo.homeTitle,
    description: dictionary.seo.homeDescription,
    alternates: {
      languages: {
        en: "/en/",
        pl: "/pl/",
      },
    },
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  return (
    <main id="main-content" tabIndex={-1}>
      <JsonLd data={getHomeStructuredData(locale)} />

      <HeroSection locale={locale} dictionary={dictionary} />

      <ValuePropositionSection locale={locale} />

      <ServicesSection locale={locale} />

      <HomeProjectShowcase
        locale={locale}
        dictionary={dictionary}
        projects={projects}
      />

      <AboutSection locale={locale} />

      <WorkProcessSection locale={locale} />

      <SkillsSection locale={locale} dictionary={dictionary} />

      <FaqSection locale={locale} />

      <FinalCta locale={locale} />

      <ContactCta locale={locale} dictionary={dictionary} />
    </main>
  );
}
