"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useId, useMemo, useState } from "react";
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

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
  },
};

export function ProjectsExplorer({
  projects,
  locale,
  dictionary,
}: ProjectsExplorerProps) {
  const searchInputId = useId();
  const statusSelectId = useId();
  const categorySelectId = useId();
  const shouldReduceMotion = useReducedMotion();

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const categories = useMemo(() => {
    const uniqueCategories = new Set(
      projects.map((project) => project.category[locale]),
    );

    return Array.from(uniqueCategories).sort((firstCategory, secondCategory) =>
      firstCategory.localeCompare(secondCategory, locale),
    );
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
        project.highlights[locale].join(" "),
        project.features[locale].join(" "),
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

  const hasActiveFilters =
    searchTerm.trim().length > 0 ||
    statusFilter !== "all" ||
    categoryFilter !== "all";

  function clearFilters() {
    setSearchTerm("");
    setStatusFilter("all");
    setCategoryFilter("all");
  }

  return (
    <section className="mt-12" aria-label={dictionary.projectsPage.title}>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/20 hover:bg-white/6">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr_auto] lg:items-end">
          <div>
            <label
              htmlFor={searchInputId}
              className="text-sm font-medium text-slate-300"
            >
              {dictionary.projectsExplorer.searchLabel}
            </label>

            <input
              id={searchInputId}
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder={dictionary.projectsExplorer.searchPlaceholder}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:shadow-[0_0_0_3px_rgb(34_211_238/0.08)]"
            />
          </div>

          <div>
            <label
              htmlFor={statusSelectId}
              className="text-sm font-medium text-slate-300"
            >
              {dictionary.projectsExplorer.statusLabel}
            </label>

            <select
              id={statusSelectId}
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(event.target.value as StatusFilter)
              }
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/60 focus:shadow-[0_0_0_3px_rgb(34_211_238/0.08)]"
            >
              {statusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor={categorySelectId}
              className="text-sm font-medium text-slate-300"
            >
              {dictionary.projectsExplorer.categoryLabel}
            </label>

            <select
              id={categorySelectId}
              value={categoryFilter}
              onChange={(event) => setCategoryFilter(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/60 focus:shadow-[0_0_0_3px_rgb(34_211_238/0.08)]"
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
          </div>

          <button
            type="button"
            onClick={clearFilters}
            disabled={!hasActiveFilters}
            className="zt-button-press rounded-2xl border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-white/10 disabled:hover:bg-transparent"
          >
            {dictionary.projectsExplorer.clearFilters}
          </button>
        </div>

        <div
          className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between"
          aria-live="polite"
        >
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
        <motion.div
          layout
          className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                variants={shouldReduceMotion ? undefined : cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{
                  duration: 0.45,
                  delay: shouldReduceMotion ? 0 : index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ProjectCard
                  project={project}
                  locale={locale}
                  dictionary={dictionary}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 rounded-3xl border border-dashed border-white/15 bg-white/5 p-10 text-center"
        >
          <p className="text-2xl font-semibold text-white">
            {dictionary.projectsExplorer.emptyTitle}
          </p>

          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            {dictionary.projectsExplorer.emptyDescription}
          </p>

          <button
            type="button"
            onClick={clearFilters}
            className="zt-button-press mt-6 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            {dictionary.projectsExplorer.clearFilters}
          </button>
        </motion.div>
      )}
    </section>
  );
}
