"use client";

import { useMemo, useState } from "react";
import { Project, ProjectStatus } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Dictionary } from "@/lib/i18n";
import { Locale } from "@/types/locale";

type ProjectsExplorerProps = {
  projects: Project[];
  locale: Locale;
  dictionary: Dictionary;
};

type StatusFilter = "all" | ProjectStatus;

export function ProjectsExplorer({
  projects,
  locale,
  dictionary,
}: ProjectsExplorerProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const categories = useMemo(() => {
    const uniqueCategories = new Set(
      projects.map((project) => project.category[locale]),
    );

    return Array.from(uniqueCategories);
  }, [projects, locale]);

  const filteredProjects = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesStatus =
        statusFilter === "all" || project.status === statusFilter;

      const matchesCategory =
        categoryFilter === "all" || project.category[locale] === categoryFilter;

      const searchableContent = [
        project.title,
        project.category[locale],
        project.shortDescription[locale],
        project.description[locale],
        project.technologies.join(" "),
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        normalizedSearchTerm.length === 0 ||
        searchableContent.includes(normalizedSearchTerm);

      return matchesStatus && matchesCategory && matchesSearch;
    });
  }, [projects, locale, searchTerm, statusFilter, categoryFilter]);

  const statusOptions: { value: StatusFilter; label: string }[] = [
    { value: "all", label: dictionary.projectsExplorer.allStatuses },
    { value: "completed", label: dictionary.status.completed },
    { value: "inProgress", label: dictionary.status.inProgress },
  ];

  function clearFilters() {
    setSearchTerm("");
    setStatusFilter("all");
    setCategoryFilter("all");
  }

  return (
    <section className="mt-12">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr_auto] lg:items-end">
          <label className="block">
            <span className="text-sm font-medium text-slate-300">
              {dictionary.projectsExplorer.searchLabel}
            </span>

            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder={dictionary.projectsExplorer.searchPlaceholder}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-300">
              {dictionary.projectsExplorer.statusLabel}
            </span>

            <select
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(event.target.value as StatusFilter)
              }
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/60"
            >
              {statusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-300">
              {dictionary.projectsExplorer.categoryLabel}
            </span>

            <select
              value={categoryFilter}
              onChange={(event) => setCategoryFilter(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/60"
            >
              <option value="all">
                {dictionary.projectsExplorer.allCategories}
              </option>

              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>

          <button
            type="button"
            onClick={clearFilters}
            className="rounded-2xl border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40"
          >
            {dictionary.projectsExplorer.clearFilters}
          </button>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {dictionary.projectsExplorer.resultsPrefix}{" "}
            <span className="font-semibold text-white">
              {filteredProjects.length}
            </span>{" "}
            {dictionary.projectsExplorer.resultsSuffix}
          </p>

          <p>{dictionary.projectsExplorer.helperText}</p>
        </div>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              locale={locale}
              dictionary={dictionary}
            />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-3xl border border-dashed border-white/15 bg-white/5 p-10 text-center">
          <p className="text-2xl font-semibold text-white">
            {dictionary.projectsExplorer.emptyTitle}
          </p>

          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            {dictionary.projectsExplorer.emptyDescription}
          </p>

          <button
            type="button"
            onClick={clearFilters}
            className="mt-6 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            {dictionary.projectsExplorer.clearFilters}
          </button>
        </div>
      )}
    </section>
  );
}
