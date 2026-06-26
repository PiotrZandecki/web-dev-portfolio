import Link from "next/link";
import { Project } from "@/content/projects";
import { Dictionary } from "@/lib/i18n";
import { Locale } from "@/types/locale";

type ProjectCardProps = {
  project: Project;
  locale: Locale;
  dictionary: Dictionary;
};

export function ProjectCard({ project, locale, dictionary }: ProjectCardProps) {
  const visibleTechnologies = project.technologies.slice(0, 4);
  const hiddenTechnologiesCount =
    project.technologies.length - visibleTechnologies.length;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.07] focus-within:border-cyan-400/60">
      <div className="border-b border-white/10 bg-slate-950/80 p-4">
        <div
          aria-hidden="true"
          className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            </div>

            <span className="text-xs text-slate-500">{project.year}</span>
          </div>

          <div className="space-y-3 p-4">
            <div className="h-3 w-2/3 rounded-full bg-cyan-400/30" />
            <div className="h-3 w-full rounded-full bg-white/10" />
            <div className="h-3 w-5/6 rounded-full bg-white/10" />

            <div className="grid grid-cols-3 gap-2 pt-3">
              <div className="h-14 rounded-xl bg-white/10 transition group-hover:bg-cyan-400/10" />
              <div className="h-14 rounded-xl bg-white/10 transition group-hover:bg-cyan-400/10" />
              <div className="h-14 rounded-xl bg-white/10 transition group-hover:bg-cyan-400/10" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
            {dictionary.status[project.status]}
          </span>

          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-slate-300">
            {project.category[locale]}
          </span>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-white">
          {project.title}
        </h2>

        <p className="mt-4 flex-1 text-sm leading-6 text-slate-300">
          {project.shortDescription[locale]}
        </p>

        <ul
          aria-label={dictionary.common.technologies}
          className="mt-6 flex flex-wrap gap-2"
        >
          {visibleTechnologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-300"
            >
              {technology}
            </li>
          ))}

          {hiddenTechnologiesCount > 0 ? (
            <li className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-400">
              +{hiddenTechnologiesCount}
            </li>
          ) : null}
        </ul>

        <div className="mt-7 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
          <div>
            <p className="text-xs text-slate-500">{dictionary.common.year}</p>
            <p className="mt-1 text-sm font-medium text-slate-300">
              {project.year}
            </p>
          </div>

          <Link
            href={`/${locale}/projects/${project.slug}`}
            aria-label={`${dictionary.common.viewProject}: ${project.title}`}
            className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            {dictionary.common.viewProject}
          </Link>
        </div>
      </div>
    </article>
  );
}
