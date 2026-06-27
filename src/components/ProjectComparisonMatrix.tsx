import Link from "next/link";
import { Project } from "@/content/projects";
import { getResolvedProjectLinks } from "@/lib/project-links";
import { getProjectReadiness } from "@/lib/project-readiness";
import { Locale } from "@/types/locale";

type ProjectComparisonMatrixProps = {
  projects: Project[];
  locale: Locale;
};

const matrixCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    project: string;
    status: string;
    type: string;
    live: string;
    source: string;
    preview: string;
    readiness: string;
    action: string;
    available: string;
    planned: string;
    viewCaseStudy: string;
    shortCaseStudy: string;
    completed: string;
    inProgress: string;
  }
> = {
  en: {
    eyebrow: "Technical matrix",
    title: "Compare project readiness",
    description:
      "A clearer way to review which projects already have live demos, source code, visual previews and strong case study coverage.",
    project: "Project",
    status: "Status",
    type: "Type",
    live: "Live",
    source: "Source",
    preview: "Preview",
    readiness: "Readiness",
    action: "Action",
    available: "Available",
    planned: "Planned",
    viewCaseStudy: "View case study",
    shortCaseStudy: "Case study",
    completed: "Completed",
    inProgress: "In progress",
  },
  pl: {
    eyebrow: "Macierz techniczna",
    title: "Porównaj gotowość projektów",
    description:
      "Czytelniejszy sposób sprawdzenia, które projekty mają już wersję live, kod źródłowy, preview wizualne i mocne case study.",
    project: "Projekt",
    status: "Status",
    type: "Typ",
    live: "Live",
    source: "Kod",
    preview: "Preview",
    readiness: "Gotowość",
    action: "Akcja",
    available: "Dostępne",
    planned: "Planowane",
    viewCaseStudy: "Zobacz case study",
    shortCaseStudy: "Case study",
    completed: "Ukończony",
    inProgress: "W trakcie",
  },
};

const desktopGridColumns =
  "grid-cols-[minmax(10rem,1.35fr)_minmax(6.5rem,0.8fr)_minmax(8.5rem,1fr)_minmax(5.5rem,0.7fr)_minmax(5.5rem,0.7fr)_minmax(5.75rem,0.75fr)_minmax(5rem,0.65fr)_minmax(7.25rem,0.85fr)]";

function StatusPill({
  isAvailable,
  availableLabel,
  plannedLabel,
}: {
  isAvailable: boolean;
  availableLabel: string;
  plannedLabel: string;
}) {
  return (
    <span
      className={`inline-flex max-w-full whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${
        isAvailable
          ? "bg-cyan-400/10 text-cyan-300"
          : "bg-white/10 text-slate-400"
      }`}
    >
      {isAvailable ? availableLabel : plannedLabel}
    </span>
  );
}

function getStatusLabel(project: Project, locale: Locale) {
  if (project.status === "completed") {
    return matrixCopy[locale].completed;
  }

  return matrixCopy[locale].inProgress;
}

export function ProjectComparisonMatrix({
  projects,
  locale,
}: ProjectComparisonMatrixProps) {
  const copy = matrixCopy[locale];

  return (
    <section aria-labelledby="project-comparison-heading" className="mt-16">
      <div className="mb-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            {copy.eyebrow}
          </p>

          <h2
            id="project-comparison-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            {copy.title}
          </h2>
        </div>

        <p className="max-w-2xl text-slate-300 lg:justify-self-end">
          {copy.description}
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <div className="hidden xl:block">
          <div
            className={`grid ${desktopGridColumns} border-b border-white/10 bg-slate-950 text-xs uppercase tracking-[0.18em] text-slate-500`}
          >
            <div className="px-5 py-4 font-semibold">{copy.project}</div>
            <div className="px-5 py-4 font-semibold">{copy.status}</div>
            <div className="px-5 py-4 font-semibold">{copy.type}</div>
            <div className="px-5 py-4 font-semibold">{copy.live}</div>
            <div className="px-5 py-4 font-semibold">{copy.source}</div>
            <div className="px-5 py-4 font-semibold">{copy.preview}</div>
            <div className="px-5 py-4 font-semibold">{copy.readiness}</div>
            <div className="px-5 py-4 font-semibold">{copy.action}</div>
          </div>

          <div className="divide-y divide-white/10">
            {projects.map((project) => {
              const links = getResolvedProjectLinks(project);
              const readiness = getProjectReadiness(project);

              return (
                <div
                  key={project.slug}
                  className={`grid ${desktopGridColumns} items-center text-sm text-slate-300`}
                >
                  <div className="min-w-0 px-5 py-5">
                    <p className="font-semibold leading-5 text-white">
                      {project.title}
                    </p>

                    <p className="mt-1 truncate text-xs text-slate-500">
                      {project.slug}
                    </p>
                  </div>

                  <div className="min-w-0 px-5 py-5">
                    <span className="text-slate-300">
                      {getStatusLabel(project, locale)}
                    </span>
                  </div>

                  <div className="min-w-0 px-5 py-5">
                    <span className="leading-5 text-slate-300">
                      {project.category[locale]}
                    </span>
                  </div>

                  <div className="min-w-0 px-5 py-5">
                    <StatusPill
                      isAvailable={links.hasLiveUrl}
                      availableLabel={copy.available}
                      plannedLabel={copy.planned}
                    />
                  </div>

                  <div className="min-w-0 px-5 py-5">
                    <StatusPill
                      isAvailable={links.hasSourceUrl}
                      availableLabel={copy.available}
                      plannedLabel={copy.planned}
                    />
                  </div>

                  <div className="min-w-0 px-5 py-5">
                    <StatusPill
                      isAvailable={project.mockups.length > 0}
                      availableLabel={copy.available}
                      plannedLabel={copy.planned}
                    />
                  </div>

                  <div className="min-w-0 px-5 py-5">
                    <span className="font-semibold text-white">
                      {readiness.score}%
                    </span>
                  </div>

                  <div className="min-w-0 px-5 py-5">
                    <Link
                      href={`/${locale}/projects/${project.slug}/`}
                      className="inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-3 py-2 text-center text-[11px] font-semibold leading-none text-slate-950 transition hover:bg-cyan-300"
                    >
                      <span className="hidden 2xl:inline">
                        {copy.viewCaseStudy}
                      </span>
                      <span className="2xl:hidden">{copy.shortCaseStudy}</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4 p-4 xl:hidden">
          {projects.map((project) => {
            const links = getResolvedProjectLinks(project);
            const readiness = getProjectReadiness(project);

            return (
              <article
                key={project.slug}
                className="rounded-3xl border border-white/10 bg-slate-950 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold leading-7 text-white">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {project.slug}
                    </p>

                    <p className="mt-2 text-sm text-slate-400">
                      {project.category[locale]}
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-300">
                    {readiness.score}%
                  </span>
                </div>

                <div className="mt-5 grid gap-3">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm text-slate-500">
                      {copy.status}
                    </span>

                    <span className="text-sm font-medium text-slate-300">
                      {getStatusLabel(project, locale)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm text-slate-500">{copy.live}</span>

                    <StatusPill
                      isAvailable={links.hasLiveUrl}
                      availableLabel={copy.available}
                      plannedLabel={copy.planned}
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm text-slate-500">
                      {copy.source}
                    </span>

                    <StatusPill
                      isAvailable={links.hasSourceUrl}
                      availableLabel={copy.available}
                      plannedLabel={copy.planned}
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm text-slate-500">
                      {copy.preview}
                    </span>

                    <StatusPill
                      isAvailable={project.mockups.length > 0}
                      availableLabel={copy.available}
                      plannedLabel={copy.planned}
                    />
                  </div>
                </div>

                <Link
                  href={`/${locale}/projects/${project.slug}/`}
                  className="mt-6 inline-flex rounded-full bg-cyan-400 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  {copy.viewCaseStudy}
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
