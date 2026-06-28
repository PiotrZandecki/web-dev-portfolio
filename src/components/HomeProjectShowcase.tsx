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
    title: "Projects presented as professional case studies.",
    description:
      "The project section presents frontend work through structured case studies: each project includes scope, interface context, technical decisions, visual previews and deployment-ready links.",
    helperTitle: "Structured project presentation",
    helperDescription:
      "Every project is prepared to show not only the final interface, but also the thinking behind the implementation: structure, features, delivery decisions and next steps.",
  },
  pl: {
    eyebrow: "Wybrane realizacje",
    title: "Projekty prezentowane jako profesjonalne case studies.",
    description:
      "Sekcja projektów prezentuje realizacje frontendowe w uporządkowanej formie case studies: każdy projekt zawiera zakres, kontekst interfejsu, decyzje techniczne, podgląd wizualny i linki przygotowane pod wdrożenie.",
    helperTitle: "Uporządkowana prezentacja projektów",
    helperDescription:
      "Każdy projekt jest przygotowany tak, aby pokazać nie tylko finalny interfejs, ale też decyzje stojące za implementacją: strukturę, funkcje, sposób realizacji i kolejne kroki.",
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
            className="zt-button-press group/link mt-6 inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-100"
          >
            {dictionary.common.viewProjects}
            <span
              aria-hidden="true"
              className="ml-2 transition group-hover/link:translate-x-0.5"
            >
              →
            </span>
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
