import { Project } from "@/content/projects";
import {
  getPortfolioReadinessSummary,
  getProjectReadiness,
} from "@/lib/project-readiness";
import { Locale } from "@/types/locale";

type ProjectDeliveryDashboardProps = {
  projects: Project[];
  locale: Locale;
};

const dashboardCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    totalProjects: string;
    liveProjects: string;
    sourceAvailable: string;
    visualPreviews: string;
    averageReadiness: string;
    readinessLabel: string;
    ready: string;
    pending: string;
  }
> = {
  en: {
    eyebrow: "Project control center",
    title: "Portfolio delivery status",
    description:
      "A technical snapshot of the current project portfolio: live demos, source repositories, visual previews and overall project readiness.",
    totalProjects: "Total projects",
    liveProjects: "Live demos",
    sourceAvailable: "Source available",
    visualPreviews: "Visual previews",
    averageReadiness: "Average readiness",
    readinessLabel: "Readiness",
    ready: "Ready",
    pending: "Pending",
  },
  pl: {
    eyebrow: "Centrum kontroli projektów",
    title: "Status realizacji portfolio",
    description:
      "Techniczny snapshot aktualnego portfolio projektów: wersje live, repozytoria, podglądy wizualne i ogólna gotowość projektów.",
    totalProjects: "Liczba projektów",
    liveProjects: "Wersje live",
    sourceAvailable: "Kod dostępny",
    visualPreviews: "Podglądy wizualne",
    averageReadiness: "Średnia gotowość",
    readinessLabel: "Gotowość",
    ready: "Gotowe",
    pending: "Oczekuje",
  },
};

export function ProjectDeliveryDashboard({
  projects,
  locale,
}: ProjectDeliveryDashboardProps) {
  const copy = dashboardCopy[locale];
  const summary = getPortfolioReadinessSummary(projects);

  const summaryItems = [
    {
      label: copy.totalProjects,
      value: summary.totalProjects.toString(),
    },
    {
      label: copy.liveProjects,
      value: `${summary.liveProjects}/${summary.totalProjects}`,
    },
    {
      label: copy.sourceAvailable,
      value: `${summary.sourceAvailableProjects}/${summary.totalProjects}`,
    },
    {
      label: copy.visualPreviews,
      value: `${summary.visualPreviewProjects}/${summary.totalProjects}`,
    },
    {
      label: copy.averageReadiness,
      value: `${summary.averageReadiness}%`,
    },
  ];

  return (
    <section
      aria-labelledby="project-delivery-dashboard-heading"
      className="mt-12"
    >
      <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              {copy.eyebrow}
            </p>

            <h2
              id="project-delivery-dashboard-heading"
              className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl"
            >
              {copy.title}
            </h2>

            <p className="mt-4 max-w-2xl text-slate-300">{copy.description}</p>
          </div>

          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {summaryItems.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-4"
              >
                <dt className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  {item.label}
                </dt>

                <dd className="mt-3 text-2xl font-bold text-white">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {projects.map((project) => {
            const readiness = getProjectReadiness(project);

            return (
              <article
                key={project.slug}
                className="rounded-3xl border border-white/10 bg-slate-950/70 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      {project.category[locale]}
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      readiness.score >= 80
                        ? "bg-cyan-400/10 text-cyan-300"
                        : "bg-white/10 text-slate-400"
                    }`}
                  >
                    {readiness.score >= 80 ? copy.ready : copy.pending}
                  </span>
                </div>

                <div className="mt-5">
                  <div className="mb-2 flex justify-between text-xs text-slate-500">
                    <span>{copy.readinessLabel}</span>
                    <span>{readiness.score}%</span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-cyan-400"
                      style={{ width: `${readiness.score}%` }}
                    />
                  </div>
                </div>

                <p className="mt-4 text-xs text-slate-500">
                  {readiness.readyChecks}/{readiness.totalChecks}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
