import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ProjectComparisonMatrix } from "@/components/ProjectComparisonMatrix";
import { ProjectDeliveryDashboard } from "@/components/ProjectDeliveryDashboard";
import { ProjectDeliveryPipeline } from "@/components/ProjectDeliveryPipeline";
import { ProjectMaintenanceGuide } from "@/components/ProjectMaintenanceGuide";
import { ProjectProductionGate } from "@/components/ProjectProductionGate";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { ProjectSummaryBar } from "@/components/ProjectSummaryBar";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/content/projects";
import { getDictionary, isLocale } from "@/lib/i18n";
import { getProjectsPageStructuredData } from "@/lib/structured-data";

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
        en: "/en/projects/",
        pl: "/pl/projects/",
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

  const breadcrumbItems = [
    {
      label: dictionary.navigation.home,
      href: `/${locale}/`,
    },
    {
      label: dictionary.navigation.projects,
    },
  ];

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <JsonLd data={getProjectsPageStructuredData(locale, projects)} />

      <Breadcrumbs items={breadcrumbItems} />

      <SectionHeader
        eyebrow={dictionary.projectsPage.eyebrow}
        title={dictionary.projectsPage.title}
        description={dictionary.projectsPage.description}
      />

      <ProjectDeliveryDashboard projects={projects} locale={locale} />

      <ProjectProductionGate projects={projects} locale={locale} />

      <ProjectDeliveryPipeline locale={locale} />

      <ProjectComparisonMatrix projects={projects} locale={locale} />

      <ProjectMaintenanceGuide locale={locale} />

      <ProjectSummaryBar dictionary={dictionary} />

      <ProjectsExplorer
        projects={projects}
        locale={locale}
        dictionary={dictionary}
      />
    </main>
  );
}
