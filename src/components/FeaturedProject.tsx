import Image from "next/image";
import Link from "next/link";
import { ProjectLinkStatusBadges } from "@/components/ProjectLinkStatusBadges";
import { Project } from "@/content/projects";
import { Dictionary } from "@/lib/i18n";
import { Locale } from "@/types/locale";

type FeaturedProjectProps = {
  project: Project;
  locale: Locale;
  dictionary: Dictionary;
};

export function FeaturedProject({
  project,
  locale,
  dictionary,
}: FeaturedProjectProps) {
  const previewImage = project.mockups[0];

  return (
    <article className="overflow-hidden rounded-3xl border border-cyan-400/20 bg-cyan-400/4 shadow-2xl shadow-cyan-950/20">
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-slate-950">
              {dictionary.featuredProject.eyebrow}
            </span>

            <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-slate-300">
              {project.category[locale]}
            </span>

            <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-slate-300">
              {project.year}
            </span>
          </div>

          <h3 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            {project.title}
          </h3>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            {project.shortDescription[locale]}
          </p>

          <div className="mt-7">
            <ProjectLinkStatusBadges project={project} locale={locale} />
          </div>

          <ul
            aria-label={dictionary.common.technologies}
            className="mt-7 flex flex-wrap gap-2"
          >
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-300"
              >
                {technology}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href={`/${locale}/projects/${project.slug}/`}
              aria-label={`${dictionary.common.viewProject}: ${project.title}`}
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              {dictionary.common.viewProject}
            </Link>

            <Link
              href={`/${locale}/projects/`}
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              {dictionary.common.viewProjects}
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 bg-slate-950/70 p-6 lg:border-l lg:border-t-0">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div aria-hidden="true" className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <span className="text-xs text-slate-500">{project.slug}</span>
            </div>

            <Image
              src={previewImage.imageSrc}
              alt={previewImage.title[locale]}
              width={1200}
              height={760}
              sizes="(min-width: 1024px) 520px, calc(100vw - 48px)"
              className="aspect-1200/760 w-full object-cover"
              priority
            />

            <div className="border-t border-white/10 p-5">
              <p className="text-sm font-semibold text-white">
                {dictionary.featuredProject.previewTitle}
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {dictionary.featuredProject.previewDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
