import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCaseStudy } from "@/components/ProjectCaseStudy";
import { ProjectDetailsHero } from "@/components/ProjectDetailsHero";
import { ProjectEmbed } from "@/components/ProjectEmbed";
import { ProjectLinks } from "@/components/ProjectLinks";
import { getProjectBySlug, projects } from "@/content/projects";
import { getDictionary, isLocale } from "@/lib/i18n";
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

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <Link
        href={`/${locale}/projects`}
        className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
      >
        ← {dictionary.common.backToProjects}
      </Link>

      <ProjectDetailsHero
        project={project}
        locale={locale}
        dictionary={dictionary}
      />

      <ProjectLinks project={project} dictionary={dictionary} />

      <ProjectCaseStudy
        project={project}
        locale={locale}
        dictionary={dictionary}
      />

      <ProjectEmbed project={project} locale={locale} />
    </main>
  );
}
