import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { ProjectSummaryBar } from "@/components/ProjectSummaryBar";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/content/projects";
import { getDictionary, isLocale } from "@/lib/i18n";

type ProjectsPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProjectsPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale);

  return {
    title: dictionary.seo.projectsTitle,
    description: dictionary.seo.projectsDescription,
    alternates: {
      languages: {
        en: "/en/projects",
        pl: "/pl/projects",
      },
    },
  };
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <SectionHeader
        eyebrow={dictionary.projectsPage.eyebrow}
        title={dictionary.projectsPage.title}
        description={dictionary.projectsPage.description}
      />

      <ProjectSummaryBar dictionary={dictionary} />

      <ProjectsExplorer
        projects={projects}
        locale={locale}
        dictionary={dictionary}
      />
    </main>
  );
}
