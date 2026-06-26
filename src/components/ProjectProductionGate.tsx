import { Project } from "@/content/projects";
import {
  getProjectProductionStatus,
  getProjectProductionSummary,
} from "@/lib/project-production";
import { Locale } from "@/types/locale";

type ProjectProductionGateProps = {
  projects: Project[];
  locale: Locale;
};

const productionGateCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    portfolioReady: string;
    deploymentReady: string;
    averagePortfolio: string;
    averageDeployment: string;
    content: string;
    preview: string;
    technical: string;
    release: string;
    implementation: string;
    testing: string;
    roadmap: string;
    live: string;
    source: string;
    ready: string;
    pending: string;
    portfolioLabel: string;
    deploymentLabel: string;
  }
> = {
  en: {
    eyebrow: "Production gate",
    title: "What makes a project portfolio-ready.",
    description:
      "This section separates portfolio readiness from deployment readiness. A project can be fully documented and presentable even before its live demo or public source repository is connected.",
    portfolioReady: "Portfolio-ready projects",
    deploymentReady: "Deployment-ready projects",
    averagePortfolio: "Average portfolio readiness",
    averageDeployment: "Average deployment readiness",
    content: "Content",
    preview: "Preview",
    technical: "Technical notes",
    release: "Release notes",
    implementation: "Implementation",
    testing: "Testing",
    roadmap: "Roadmap",
    live: "Live",
    source: "Source",
    ready: "Ready",
    pending: "Pending",
    portfolioLabel: "Portfolio",
    deploymentLabel: "Deployment",
  },
  pl: {
    eyebrow: "Brama produkcyjna",
    title: "Co sprawia, że projekt jest gotowy do portfolio.",
    description:
      "Ta sekcja oddziela gotowość portfolio od gotowości wdrożeniowej. Projekt może być w pełni opisany i prezentowalny nawet zanim zostanie podpięte live demo albo publiczne repozytorium.",
    portfolioReady: "Projekty gotowe do portfolio",
    deploymentReady: "Projekty gotowe wdrożeniowo",
    averagePortfolio: "Średnia gotowość portfolio",
    averageDeployment: "Średnia gotowość wdrożeniowa",
    content: "Treść",
    preview: "Preview",
    technical: "Notatki techniczne",
    release: "Release notes",
    implementation: "Implementacja",
    testing: "Testy",
    roadmap: "Roadmapa",
    live: "Live",
    source: "Kod",
    ready: "Gotowe",
    pending: "Oczekuje",
    portfolioLabel: "Portfolio",
    deploymentLabel: "Wdrożenie",
  },
};

function ReadinessPill({
  isReady,
  readyLabel,
  pendingLabel,
}: {
  isReady: boolean;
  readyLabel: string;
  pendingLabel: string;
}) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        isReady ? "bg-cyan-400/10 text-cyan-300" : "bg-white/10 text-slate-400"
      }`}
    >
      {isReady ? readyLabel : pendingLabel}
    </span>
  );
}

export function ProjectProductionGate({
  projects,
  locale,
}: ProjectProductionGateProps) {
  const copy = productionGateCopy[locale];
  const summary = getProjectProductionSummary(projects);

  const summaryItems = [
    {
      label: copy.portfolioReady,
      value: `${summary.portfolioReadyProjects}/${summary.totalProjects}`,
    },
    {
      label: copy.deploymentReady,
      value: `${summary.deploymentReadyProjects}/${summary.totalProjects}`,
    },
    {
      label: copy.averagePortfolio,
      value: `${summary.averagePortfolioReadiness}%`,
    },
    {
      label: copy.averageDeployment,
      value: `${summary.averageDeploymentReadiness}%`,
    },
  ];

  return (
    <section
      aria-labelledby="project-production-gate-heading"
      className="mt-16"
    >
      <div className="mb-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            {copy.eyebrow}
          </p>

          <h2
            id="project-production-gate-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            {copy.title}
          </h2>
        </div>

        <p className="max-w-2xl text-slate-300 lg:justify-self-end">
          {copy.description}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {summaryItems.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-white/10 bg-white/5 p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {item.label}
            </p>

            <p className="mt-3 text-3xl font-bold text-white">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6">
        {projects.map((project) => {
          const status = getProjectProductionStatus(project);

          const portfolioChecks = [
            {
              label: copy.content,
              isReady: status.hasProjectContent,
            },
            {
              label: copy.preview,
              isReady: status.hasVisualPreview,
            },
            {
              label: copy.technical,
              isReady: status.hasTechnicalDetails,
            },
            {
              label: copy.release,
              isReady: status.hasReleaseDetails,
            },
            {
              label: copy.implementation,
              isReady: status.hasImplementationNotes,
            },
            {
              label: copy.testing,
              isReady: status.hasTestingNotes,
            },
            {
              label: copy.roadmap,
              isReady: status.hasRoadmap,
            },
          ];

          const deploymentChecks = [
            {
              label: copy.live,
              isReady: status.hasLiveDemo,
            },
            {
              label: copy.source,
              isReady: status.hasSourceCode,
            },
          ];

          return (
            <article
              key={project.slug}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    {project.category[locale]}
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    <div className="rounded-2xl bg-slate-950 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {copy.portfolioLabel}
                      </p>

                      <p className="mt-2 text-2xl font-bold text-white">
                        {status.portfolioReadyScore}%
                      </p>
                    </div>

                    <div className="rounded-2xl bg-slate-950 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {copy.deploymentLabel}
                      </p>

                      <p className="mt-2 text-2xl font-bold text-white">
                        {status.deploymentReadyScore}%
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-5">
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      {copy.portfolioLabel}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {portfolioChecks.map((check) => (
                        <ReadinessPill
                          key={check.label}
                          isReady={check.isReady}
                          readyLabel={check.label}
                          pendingLabel={check.label}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      {copy.deploymentLabel}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {deploymentChecks.map((check) => (
                        <ReadinessPill
                          key={check.label}
                          isReady={check.isReady}
                          readyLabel={check.label}
                          pendingLabel={check.label}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
