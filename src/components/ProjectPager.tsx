import Link from "next/link";
import { Project } from "@/content/projects";
import { Locale } from "@/types/locale";

type ProjectPagerProps = {
  currentProjectSlug: string;
  projects: Project[];
  locale: Locale;
};

const projectPagerCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    previous: string;
    next: string;
    allProjects: string;
  }
> = {
  en: {
    eyebrow: "Continue exploring",
    title: "More project case studies",
    previous: "Previous project",
    next: "Next project",
    allProjects: "All projects",
  },
  pl: {
    eyebrow: "Kontynuuj przeglądanie",
    title: "Więcej case studies",
    previous: "Poprzedni projekt",
    next: "Następny projekt",
    allProjects: "Wszystkie projekty",
  },
};

export function ProjectPager({
  currentProjectSlug,
  projects,
  locale,
}: ProjectPagerProps) {
  const copy = projectPagerCopy[locale];
  const currentProjectIndex = projects.findIndex(
    (project) => project.slug === currentProjectSlug,
  );

  const previousProject =
    currentProjectIndex > 0 ? projects[currentProjectIndex - 1] : undefined;

  const nextProject =
    currentProjectIndex >= 0 && currentProjectIndex < projects.length - 1
      ? projects[currentProjectIndex + 1]
      : undefined;

  return (
    <section className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            {copy.eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
            {copy.title}
          </h2>
        </div>

        <Link
          href={`/${locale}/projects/`}
          className="w-fit rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
        >
          {copy.allProjects}
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {previousProject ? (
          <Link
            href={`/${locale}/projects/${previousProject.slug}/`}
            className="rounded-3xl border border-white/10 bg-slate-950 p-5 transition hover:border-cyan-400/40 hover:bg-slate-900"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              ← {copy.previous}
            </p>

            <p className="mt-3 text-xl font-semibold text-white">
              {previousProject.title}
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              {previousProject.shortDescription[locale]}
            </p>
          </Link>
        ) : (
          <div className="rounded-3xl border border-dashed border-white/10 bg-slate-950/50 p-5 text-sm text-slate-500">
            {copy.previous}
          </div>
        )}

        {nextProject ? (
          <Link
            href={`/${locale}/projects/${nextProject.slug}/`}
            className="rounded-3xl border border-white/10 bg-slate-950 p-5 text-left transition hover:border-cyan-400/40 hover:bg-slate-900 md:text-right"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {copy.next} →
            </p>

            <p className="mt-3 text-xl font-semibold text-white">
              {nextProject.title}
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              {nextProject.shortDescription[locale]}
            </p>
          </Link>
        ) : (
          <div className="rounded-3xl border border-dashed border-white/10 bg-slate-950/50 p-5 text-sm text-slate-500 md:text-right">
            {copy.next}
          </div>
        )}
      </div>
    </section>
  );
}
