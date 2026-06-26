import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";
import { Dictionary } from "@/lib/i18n";
import { Locale } from "@/types/locale";

type RelatedProjectsProps = {
  currentProjectSlug: string;
  locale: Locale;
  dictionary: Dictionary;
};

export function RelatedProjects({
  currentProjectSlug,
  locale,
  dictionary,
}: RelatedProjectsProps) {
  const relatedProjects = projects
    .filter((project) => project.slug !== currentProjectSlug)
    .slice(0, 2);

  return (
    <section className="mt-16">
      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          {dictionary.relatedProjects.eyebrow}
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
          {dictionary.relatedProjects.title}
        </h2>

        <p className="mt-3 max-w-2xl text-slate-300">
          {dictionary.relatedProjects.description}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {relatedProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            locale={locale}
            dictionary={dictionary}
          />
        ))}
      </div>
    </section>
  );
}
