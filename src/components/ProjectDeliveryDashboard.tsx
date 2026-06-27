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
    planned: string;
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
    planned: "Planned",
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
    planned: "Planowane",
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
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl flex-1 basis-[24rem]">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              {copy.eyebrow}
            </p>

            <h2
              id="project-delivery-dashboard-heading"
              className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl"
            >
              {copy.title}
            </h2>

            <p className="mt-4 text-slate-300">{copy.description}</p>
          </div>

          <dl className="grid flex-1 basis-152 gap-4 grid-cols-[repeat(auto-fit,minmax(9rem,1fr))]">
            {summaryItems.map((item) => (
              <div
                key={item.label}
                className="flex min-h-28 min-w-0 flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-4"
              >
                <dt className="max-w-full text-[0.68rem] font-medium uppercase leading-4 tracking-[0.14em] text-slate-500">
                  {item.label}
                </dt>

                <dd className="mt-4 text-2xl font-bold leading-none text-white">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-8 grid gap-4 grid-cols-[repeat(auto-fit,minmax(17rem,1fr))]">
          {projects.map((project) => {
            const readiness = getProjectReadiness(project);
            const isReady = readiness.score >= 80;

            return (
              <article
                key={project.slug}
                className="min-w-0 rounded-3xl border border-white/10 bg-slate-950/70 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold leading-6 text-white">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm leading-5 text-slate-400">
                      {project.category[locale]}
                    </p>
                  </div>

                  <span
                    className={`shrink-0 whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${
                      isReady
                        ? "bg-cyan-400/10 text-cyan-300"
                        : "bg-white/10 text-slate-400"
                    }`}
                  >
                    {isReady ? copy.ready : copy.planned}
                  </span>
                </div>

                <div className="mt-5">
                  <div className="mb-2 flex justify-between gap-4 text-xs text-slate-500">
                    <span>{copy.readinessLabel}</span>
                    <span className="shrink-0">{readiness.score}%</span>
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
