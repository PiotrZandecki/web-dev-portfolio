import { projects } from "@/content/projects";
import { Dictionary } from "@/lib/i18n";

type ProjectSummaryBarProps = {
  dictionary: Dictionary;
};

export function ProjectSummaryBar({ dictionary }: ProjectSummaryBarProps) {
  const completedProjects = projects.filter(
    (project) => project.status === "completed",
  ).length;

  const inProgressProjects = projects.filter(
    (project) => project.status === "inProgress",
  ).length;

  const summaryItems = [
    {
      value: projects.length.toString(),
      label: dictionary.projectsSummary.total,
    },
    {
      value: completedProjects.toString(),
      label: dictionary.projectsSummary.completed,
    },
    {
      value: inProgressProjects.toString(),
      label: dictionary.projectsSummary.inProgress,
    },
    {
      value: "2",
      label: dictionary.projectsSummary.languages,
    },
  ];

  return (
    <section
      aria-label={dictionary.projectsPage.title}
      className="mb-12 grid grid-cols-2 gap-4 lg:grid-cols-4"
    >
      {summaryItems.map((item) => (
        <article
          key={item.label}
          className="group relative flex min-h-32 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-5 top-5 h-px bg-linear-to-r from-cyan-400/40 via-white/10 to-transparent"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-1 w-full bg-linear-to-r from-cyan-400/70 via-cyan-300/20 to-transparent opacity-60 transition group-hover:opacity-100"
          />

          <div className="relative flex w-full items-center justify-between gap-5">
            <p className="text-4xl font-bold leading-none tracking-tight text-white md:text-5xl">
              {item.value}
            </p>

            <p className="max-w-32 text-right text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-slate-400">
              {item.label}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}
