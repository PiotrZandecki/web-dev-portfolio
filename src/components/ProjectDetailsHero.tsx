import Image from "next/image";
import { ProjectLinkStatusBadges } from "@/components/ProjectLinkStatusBadges";
import { Project } from "@/content/projects";
import { Dictionary } from "@/lib/i18n";
import { Locale } from "@/types/locale";

type ProjectDetailsHeroProps = {
  project: Project;
  locale: Locale;
  dictionary: Dictionary;
};

export function ProjectDetailsHero({
  project,
  locale,
  dictionary,
}: ProjectDetailsHeroProps) {
  const previewImage = project.mockups[0];

  return (
    <section
      id="project-overview"
      aria-labelledby="project-details-heading"
      className="mt-10 scroll-mt-32"
    >
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {dictionary.common.projectDetails}
            </span>

            <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-slate-300">
              {project.category[locale]}
            </span>

            <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-slate-300">
              {dictionary.status[project.status]}
            </span>
          </div>

          <h1
            id="project-details-heading"
            className="mt-6 text-5xl font-bold tracking-tight text-white md:text-7xl"
          >
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {project.description[locale]}
          </p>

          <div className="mt-8">
            <ProjectLinkStatusBadges project={project} locale={locale} />
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-cyan-950/20">
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
              sizes="(min-width: 1024px) 560px, calc(100vw - 48px)"
              className="aspect-1200/760 w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
