import { Project } from "@/content/projects";
import { projectTechnicalDetails } from "@/content/projectTechnicalDetails";
import { Locale } from "@/types/locale";

type ProjectTestingSectionProps = {
  project: Project;
  locale: Locale;
};

const testingCopy: Record<
  Locale,
  {
    eyebrow: string;
    checksLabel: string;
  }
> = {
  en: {
    eyebrow: "Testing & review",
    checksLabel: "Checks",
  },
  pl: {
    eyebrow: "Testy i przegląd",
    checksLabel: "Kontrole",
  },
};

export function ProjectTestingSection({
  project,
  locale,
}: ProjectTestingSectionProps) {
  const details = projectTechnicalDetails[project.slug];

  if (!details) {
    return null;
  }

  const copy = testingCopy[locale];

  return (
    <section
      id="project-testing"
      aria-labelledby="project-testing-heading"
      className="mt-16 scroll-mt-32"
    >
      <div className="mb-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            {copy.eyebrow}
          </p>

          <h2
            id="project-testing-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            {details.testingTitle[locale]}
          </h2>
        </div>

        <p className="max-w-2xl text-slate-300 lg:justify-self-end">
          {details.testingDescription[locale]}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {details.testingAreas.map((area) => (
          <article
            key={area.title.en}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
          >
            <h3 className="text-xl font-semibold tracking-tight text-white">
              {area.title[locale]}
            </h3>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              {area.description[locale]}
            </p>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {copy.checksLabel}
            </p>

            <ul className="mt-4 space-y-3">
              {area.checks[locale].map((check) => (
                <li
                  key={check}
                  className="rounded-2xl bg-slate-950 p-4 text-sm leading-6 text-slate-300"
                >
                  {check}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
