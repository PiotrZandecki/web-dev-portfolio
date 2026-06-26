import Link from "next/link";
import { FeaturedProject } from "@/components/FeaturedProject";
import { ProjectCard } from "@/components/ProjectCard";
import { Project } from "@/content/projects";
import { Dictionary } from "@/lib/i18n";
import { Locale } from "@/types/locale";

type HomeProjectShowcaseProps = {
  locale: Locale;
  dictionary: Dictionary;
  projects: Project[];
};

const projectShowcaseCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    helperTitle: string;
    helperDescription: string;
  }
> = {
  en: {
    eyebrow: "Selected work",
    title: "Projects built as practical case studies.",
    description:
      "The project section is designed as a growing hub of frontend work — each project has its own structure, process notes, visual preview and deployment-ready space for links.",
    helperTitle: "Project-based development",
    helperDescription:
      "Every project is treated as a practical learning and delivery unit: planned, built, documented and prepared for public presentation.",
  },
  pl: {
    eyebrow: "Wybrane realizacje",
    title: "Projekty budowane jako praktyczne case studies.",
    description:
      "Sekcja projektów działa jako rozwijany hub pracy frontendowej — każdy projekt ma własną strukturę, opis procesu, podgląd wizualny i miejsce na linki po wdrożeniu.",
    helperTitle: "Development oparty o projekty",
    helperDescription:
      "Każdy projekt jest traktowany jako praktyczna jednostka nauki i realizacji: zaplanowana, zbudowana, opisana i przygotowana do publicznej prezentacji.",
  },
};

export function HomeProjectShowcase({
  locale,
  dictionary,
  projects,
}: HomeProjectShowcaseProps) {
  const [featuredProject, ...otherProjects] = projects;
  const copy = projectShowcaseCopy[locale];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            {copy.eyebrow}
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            {copy.title}
          </h2>

          <p className="mt-5 max-w-2xl text-slate-300">{copy.description}</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold text-white">
            {copy.helperTitle}
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-300">
            {copy.helperDescription}
          </p>

          <Link
            href={`/${locale}/projects/`}
            className="mt-6 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
          >
            {dictionary.common.viewProjects}
          </Link>
        </div>
      </div>

      <FeaturedProject
        project={featuredProject}
        locale={locale}
        dictionary={dictionary}
      />

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {otherProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            locale={locale}
            dictionary={dictionary}
          />
        ))}
      </div>
    </section>
  );
}
