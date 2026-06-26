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
  const projectFacts = [
    {
      label: dictionary.common.status,
      value: dictionary.status[project.status],
    },
    {
      label: dictionary.common.year,
      value: project.year,
    },
    {
      label: dictionary.common.type,
      value: project.category[locale],
    },
  ];

  return (
    <section
      aria-labelledby="project-details-heading"
      className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]"
    >
      <div>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            {dictionary.common.projectDetails}
          </span>

          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-slate-300">
            {project.category[locale]}
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

        <dl className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
          {projectFacts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <dt className="text-xs text-slate-500">{fact.label}</dt>
              <dd className="mt-2 text-sm font-semibold text-white">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <aside
        aria-label={dictionary.common.highlights}
        className="rounded-3xl border border-white/10 bg-white/5 p-6"
      >
        <div>
          <h2 className="text-sm font-medium text-slate-400">
            {dictionary.common.technologies}
          </h2>

          <ul className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-300"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-sm font-medium text-slate-400">
            {dictionary.common.highlights}
          </h2>

          <ul className="mt-3 space-y-3 text-sm text-slate-300">
            {project.highlights[locale].map((highlight) => (
              <li
                key={highlight}
                className="rounded-xl bg-white/5 p-3 leading-6"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
}
