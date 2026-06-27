import Image from "next/image";
import Link from "next/link";
import { ProjectLinkStatusBadges } from "@/components/ProjectLinkStatusBadges";
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
  const previewImage = project.mockups[0];

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-cyan-950/20 focus-within:border-cyan-400/60">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
      >
        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-cyan-400/60 via-cyan-300/20 to-transparent" />
      </div>

      <div className="relative border-b border-white/10 bg-slate-950/80 p-4">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
          <Image
            src={previewImage.imageSrc}
            alt={previewImage.title[locale]}
            width={1200}
            height={760}
            sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, calc(100vw - 48px)"
            className="aspect-1200/760 w-full object-cover transition duration-500 ease-out group-hover:scale-[1.055] group-hover:-translate-y-1"
          />
        </div>
      </div>

      <div className="relative flex flex-1 flex-col p-6">
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300 ring-1 ring-cyan-400/10 transition group-hover:bg-cyan-400/15 group-hover:ring-cyan-400/25">
            {dictionary.status[project.status]}
          </span>

          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-slate-300 transition group-hover:border-white/20 group-hover:text-slate-200">
            {project.category[locale]}
          </span>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-white transition group-hover:text-cyan-50">
          {project.title}
        </h2>

        <p className="mt-4 flex-1 text-sm leading-6 text-slate-300">
          {project.shortDescription[locale]}
        </p>

        <div className="mt-6">
          <ProjectLinkStatusBadges project={project} locale={locale} compact />
        </div>

        <ul
          aria-label={dictionary.common.technologies}
          className="mt-6 flex flex-wrap gap-2"
        >
          {visibleTechnologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-300 transition group-hover:bg-slate-900/80"
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
            href={`/${locale}/projects/${project.slug}/`}
            aria-label={`${dictionary.common.viewProject}: ${project.title}`}
            className="zt-button-press group/link inline-flex items-center rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            <span>{dictionary.common.viewProject}</span>
            <span
              aria-hidden="true"
              className="ml-2 transition group-hover/link:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
