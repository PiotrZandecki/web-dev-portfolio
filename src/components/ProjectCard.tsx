import Link from "next/link";
import { Dictionary } from "@/lib/i18n";
import { Project } from "@/content/projects";
import { Locale } from "@/types/locale";

type ProjectCardProps = {
  project: Project;
  locale: Locale;
  dictionary: Dictionary;
};

export function ProjectCard({ project, locale, dictionary }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
      <div className="mb-4 inline-flex w-fit rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
        {dictionary.status[project.status]}
      </div>

      <h2 className="text-xl font-semibold text-white">{project.title}</h2>

      <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">
        {project.shortDescription[locale]}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-300"
          >
            {technology}
          </span>
        ))}
      </div>

      <Link
        href={`/${locale}/projects/${project.slug}`}
        className="mt-6 inline-flex text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
      >
        {dictionary.common.viewProject} →
      </Link>
    </article>
  );
}
