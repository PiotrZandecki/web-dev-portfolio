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
  return (
    <section className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
      <div>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            {dictionary.common.projectDetails}
          </span>

          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-slate-300">
            {project.category[locale]}
          </span>
        </div>

        <h1 className="mt-6 text-5xl font-bold tracking-tight text-white md:text-7xl">
          {project.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          {project.description[locale]}
        </p>

        <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs text-slate-500">{dictionary.common.status}</p>
            <p className="mt-2 text-sm font-semibold text-white">
              {dictionary.status[project.status]}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs text-slate-500">{dictionary.common.year}</p>
            <p className="mt-2 text-sm font-semibold text-white">
              {project.year}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs text-slate-500">{dictionary.common.type}</p>
            <p className="mt-2 text-sm font-semibold text-white">
              {project.category[locale]}
            </p>
          </div>
        </div>
      </div>

      <aside className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div>
          <p className="text-sm text-slate-400">
            {dictionary.common.technologies}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
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

        <div className="mt-8">
          <p className="text-sm text-slate-400">
            {dictionary.common.highlights}
          </p>

          <ul className="mt-3 space-y-3 text-sm text-slate-300">
            {project.highlights[locale].map((highlight) => (
              <li key={highlight} className="rounded-xl bg-white/5 p-3">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
}
