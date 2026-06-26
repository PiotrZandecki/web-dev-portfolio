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
    <section className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {summaryItems.map((item) => (
        <div
          key={item.label}
          className="rounded-3xl border border-white/10 bg-white/5 p-6"
        >
          <p className="text-3xl font-bold text-white">{item.value}</p>
          <p className="mt-2 text-sm text-slate-400">{item.label}</p>
        </div>
      ))}
    </section>
  );
}
