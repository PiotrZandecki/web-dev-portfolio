import { Project } from "@/content/projects";
import { Dictionary } from "@/lib/i18n";
import { Locale } from "@/types/locale";

type ProjectSnapshotProps = {
  project: Project;
  locale: Locale;
  dictionary: Dictionary;
};

const snapshotCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    highlightsLabel: string;
  }
> = {
  en: {
    eyebrow: "Snapshot",
    title: "Project at a glance",
    description:
      "A compact overview of the project type, status, stack and the most important implementation highlights.",
    highlightsLabel: "Key highlights",
  },
  pl: {
    eyebrow: "Podsumowanie",
    title: "Projekt w skrócie",
    description:
      "Kompaktowy przegląd typu projektu, statusu, stacku i najważniejszych elementów implementacji.",
    highlightsLabel: "Najważniejsze elementy",
  },
};

export function ProjectSnapshot({
  project,
  locale,
  dictionary,
}: ProjectSnapshotProps) {
  const copy = snapshotCopy[locale];

  const facts = [
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
    {
      label: dictionary.common.technologies,
      value: project.technologies.slice(0, 3).join(", "),
    },
  ];

  return (
    <section
      id="project-snapshot"
      aria-labelledby="project-snapshot-heading"
      className="mt-16 scroll-mt-32"
    >
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            {copy.eyebrow}
          </p>

          <h2
            id="project-snapshot-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white"
          >
            {copy.title}
          </h2>

          <p className="mt-3 text-slate-300">{copy.description}</p>
        </div>

        <div className="grid gap-6">
          <dl className="grid gap-4 sm:grid-cols-2">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-5"
              >
                <dt className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                  {fact.label}
                </dt>

                <dd className="mt-3 text-base font-semibold text-white">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          <article className="rounded-3xl border border-cyan-400/20 bg-cyan-400/6 p-6">
            <h3 className="text-xl font-semibold text-white">
              {copy.highlightsLabel}
            </h3>

            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {project.highlights[locale].map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm leading-6 text-slate-300"
                >
                  <span
                    aria-hidden="true"
                    className="mr-3 inline-block h-2 w-2 rounded-full bg-cyan-400"
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
