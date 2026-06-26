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
    pending: string;
    viewCaseStudy: string;
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
    pending: "Pending",
    viewCaseStudy: "View case study",
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
    pending: "Oczekuje",
    viewCaseStudy: "Zobacz case study",
  },
};

function StatusPill({
  isAvailable,
  availableLabel,
  pendingLabel,
}: {
  isAvailable: boolean;
  availableLabel: string;
  pendingLabel: string;
}) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        isAvailable
          ? "bg-cyan-400/10 text-cyan-300"
          : "bg-white/10 text-slate-400"
      }`}
    >
      {isAvailable ? availableLabel : pendingLabel}
    </span>
  );
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
        <div className="hidden overflow-x-auto lg:block">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="border-b border-white/10 bg-slate-950">
              <tr className="text-xs uppercase tracking-[0.18em] text-slate-500">
                <th className="px-5 py-4 font-semibold">{copy.project}</th>
                <th className="px-5 py-4 font-semibold">{copy.status}</th>
                <th className="px-5 py-4 font-semibold">{copy.type}</th>
                <th className="px-5 py-4 font-semibold">{copy.live}</th>
                <th className="px-5 py-4 font-semibold">{copy.source}</th>
                <th className="px-5 py-4 font-semibold">{copy.preview}</th>
                <th className="px-5 py-4 font-semibold">{copy.readiness}</th>
                <th className="px-5 py-4 font-semibold">{copy.action}</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/10">
              {projects.map((project) => {
                const links = getResolvedProjectLinks(project);
                const readiness = getProjectReadiness(project);

                return (
                  <tr key={project.slug} className="text-slate-300">
                    <td className="px-5 py-5">
                      <div>
                        <p className="font-semibold text-white">
                          {project.title}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          {project.slug}
                        </p>
                      </div>
                    </td>

                    <td className="px-5 py-5">{project.status}</td>
                    <td className="px-5 py-5">{project.category[locale]}</td>

                    <td className="px-5 py-5">
                      <StatusPill
                        isAvailable={links.hasLiveUrl}
                        availableLabel={copy.available}
                        pendingLabel={copy.pending}
                      />
                    </td>

                    <td className="px-5 py-5">
                      <StatusPill
                        isAvailable={links.hasSourceUrl}
                        availableLabel={copy.available}
                        pendingLabel={copy.pending}
                      />
                    </td>

                    <td className="px-5 py-5">
                      <StatusPill
                        isAvailable={project.mockups.length > 0}
                        availableLabel={copy.available}
                        pendingLabel={copy.pending}
                      />
                    </td>

                    <td className="px-5 py-5">
                      <span className="font-semibold text-white">
                        {readiness.score}%
                      </span>
                    </td>

                    <td className="px-5 py-5">
                      <Link
                        href={`/${locale}/projects/${project.slug}/`}
                        className="rounded-full bg-cyan-400 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-300"
                      >
                        {copy.viewCaseStudy}
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="grid gap-4 p-4 lg:hidden">
          {projects.map((project) => {
            const links = getResolvedProjectLinks(project);
            const readiness = getProjectReadiness(project);

            return (
              <article
                key={project.slug}
                className="rounded-3xl border border-white/10 bg-slate-950 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      {project.category[locale]}
                    </p>
                  </div>

                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
                    {readiness.score}%
                  </span>
                </div>

                <div className="mt-5 grid gap-3">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm text-slate-500">{copy.live}</span>
                    <StatusPill
                      isAvailable={links.hasLiveUrl}
                      availableLabel={copy.available}
                      pendingLabel={copy.pending}
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm text-slate-500">
                      {copy.source}
                    </span>
                    <StatusPill
                      isAvailable={links.hasSourceUrl}
                      availableLabel={copy.available}
                      pendingLabel={copy.pending}
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm text-slate-500">
                      {copy.preview}
                    </span>
                    <StatusPill
                      isAvailable={project.mockups.length > 0}
                      availableLabel={copy.available}
                      pendingLabel={copy.pending}
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
