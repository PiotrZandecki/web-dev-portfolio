import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ProjectCaseStudy } from "@/components/ProjectCaseStudy";
import { ProjectDetailsHero } from "@/components/ProjectDetailsHero";
import { ProjectEmbed } from "@/components/ProjectEmbed";
import { ProjectLinks } from "@/components/ProjectLinks";
import { ProjectMockups } from "@/components/ProjectMockups";
import { ProjectPager } from "@/components/ProjectPager";
import { ProjectProcess } from "@/components/ProjectProcess";
import { ProjectSectionNav } from "@/components/ProjectSectionNav";
import { ProjectSnapshot } from "@/components/ProjectSnapshot";
import { ProjectTechnicalOverview } from "@/components/ProjectTechnicalOverview";
import { RelatedProjects } from "@/components/RelatedProjects";
import { getProjectBySlug, projects } from "@/content/projects";
import { getDictionary, isLocale } from "@/lib/i18n";
import { getProjectStructuredData } from "@/lib/structured-data";
import { locales } from "@/types/locale";

type ProjectDetailsPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((project) => ({
      locale,
      slug: project.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: ProjectDetailsPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const dictionary = getDictionary(locale);

  return {
    title: `${project.title} | ${dictionary.seo.projectTitleSuffix}`,
    description: project.shortDescription[locale],
    alternates: {
      languages: {
        en: `/en/projects/${project.slug}/`,
        pl: `/pl/projects/${project.slug}/`,
      },
    },
  };
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const project = getProjectBySlug(slug);

  if (!project) {
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
      href: `/${locale}/projects/`,
    },
    {
      label: project.title,
    },
  ];

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <JsonLd data={getProjectStructuredData(locale, project)} />

      <Breadcrumbs items={breadcrumbItems} />

      <ProjectDetailsHero
        project={project}
        locale={locale}
        dictionary={dictionary}
      />

      <ProjectSectionNav locale={locale} />

      <ProjectSnapshot
        project={project}
        locale={locale}
        dictionary={dictionary}
      />

      <ProjectTechnicalOverview
        project={project}
        locale={locale}
        dictionary={dictionary}
      />

      <ProjectLinks project={project} dictionary={dictionary} />

      <ProjectEmbed project={project} locale={locale} />

      <ProjectProcess
        project={project}
        locale={locale}
        dictionary={dictionary}
      />

      <ProjectMockups
        project={project}
        locale={locale}
        dictionary={dictionary}
      />

      <ProjectCaseStudy
        project={project}
        locale={locale}
        dictionary={dictionary}
      />

      <ProjectPager
        currentProjectSlug={project.slug}
        projects={projects}
        locale={locale}
      />

      <RelatedProjects
        currentProjectSlug={project.slug}
        locale={locale}
        dictionary={dictionary}
      />
    </main>
  );
}
