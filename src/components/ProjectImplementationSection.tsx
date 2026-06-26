import { Project } from "@/content/projects";
import { projectTechnicalDetails } from "@/content/projectTechnicalDetails";
import { Locale } from "@/types/locale";

type ProjectImplementationSectionProps = {
  project: Project;
  locale: Locale;
};

const fallbackCopy: Record<
  Locale,
  {
    eyebrow: string;
    missingTitle: string;
    missingDescription: string;
  }
> = {
  en: {
    eyebrow: "Implementation",
    missingTitle: "Implementation details are being prepared.",
    missingDescription:
      "This section is ready for project-specific technical notes.",
  },
  pl: {
    eyebrow: "Implementacja",
    missingTitle: "Szczegóły implementacji są w przygotowaniu.",
    missingDescription:
      "Ta sekcja jest gotowa na techniczne notatki konkretnego projektu.",
  },
};

const implementationCopy: Record<
  Locale,
  {
    eyebrow: string;
    pointsLabel: string;
  }
> = {
  en: {
    eyebrow: "Implementation",
    pointsLabel: "Key points",
  },
  pl: {
    eyebrow: "Implementacja",
    pointsLabel: "Kluczowe punkty",
  },
};

export function ProjectImplementationSection({
  project,
  locale,
}: ProjectImplementationSectionProps) {
  const details = projectTechnicalDetails[project.slug];
  const copy = implementationCopy[locale];

  if (!details) {
    const fallback = fallbackCopy[locale];

    return (
      <section
        id="project-implementation"
        aria-labelledby="project-implementation-heading"
        className="mt-16 scroll-mt-32 rounded-3xl border border-dashed border-white/15 bg-white/5 p-8"
      >
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          {fallback.eyebrow}
        </p>

        <h2
          id="project-implementation-heading"
          className="mt-4 text-3xl font-bold tracking-tight text-white"
        >
          {fallback.missingTitle}
        </h2>

        <p className="mt-3 max-w-2xl text-slate-300">
          {fallback.missingDescription}
        </p>
      </section>
    );
  }

  return (
    <section
      id="project-implementation"
      aria-labelledby="project-implementation-heading"
      className="mt-16 scroll-mt-32"
    >
      <div className="mb-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            {copy.eyebrow}
          </p>

          <h2
            id="project-implementation-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            {details.implementationTitle[locale]}
          </h2>
        </div>

        <p className="max-w-2xl text-slate-300 lg:justify-self-end">
          {details.implementationDescription[locale]}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {details.implementationAreas.map((area) => (
          <article
            key={area.title.en}
            className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
          >
            <h3 className="text-xl font-semibold tracking-tight text-white">
              {area.title[locale]}
            </h3>

            <p className="mt-4 flex-1 text-sm leading-6 text-slate-300">
              {area.description[locale]}
            </p>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {copy.pointsLabel}
              </p>

              <ul className="mt-4 space-y-3">
                {area.points[locale].map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-6 text-slate-300"
                  >
                    <span aria-hidden="true" className="text-cyan-300">
                      ✓
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
