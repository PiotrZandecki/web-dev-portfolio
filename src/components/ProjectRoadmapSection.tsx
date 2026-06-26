import Link from "next/link";
import { Project } from "@/content/projects";
import { Locale } from "@/types/locale";

type ProjectRoadmapSectionProps = {
  project: Project;
  locale: Locale;
};

const roadmapCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    ctaTitle: string;
    ctaDescription: string;
    contactLabel: string;
    projectsLabel: string;
  }
> = {
  en: {
    eyebrow: "Roadmap",
    title: "What could be improved next",
    description:
      "A project roadmap helps keep the case study honest: what is already done, what is still pending and what can be improved in the next iteration.",
    ctaTitle: "Every project can evolve.",
    ctaDescription:
      "This portfolio is designed so new deployments, source links, screenshots and technical notes can be added without rebuilding the whole structure.",
    contactLabel: "Discuss a project",
    projectsLabel: "All projects",
  },
  pl: {
    eyebrow: "Roadmap",
    title: "Co można ulepszyć dalej",
    description:
      "Roadmapa projektu pomaga utrzymać case study w uczciwej formie: co już działa, co jeszcze oczekuje i co można poprawić w kolejnej iteracji.",
    ctaTitle: "Każdy projekt może się rozwijać.",
    ctaDescription:
      "To portfolio jest zaprojektowane tak, żeby nowe deploymenty, linki do kodu, screenshoty i notatki techniczne można było dodawać bez przebudowy całej struktury.",
    contactLabel: "Omów projekt",
    projectsLabel: "Wszystkie projekty",
  },
};

export function ProjectRoadmapSection({
  project,
  locale,
}: ProjectRoadmapSectionProps) {
  const copy = roadmapCopy[locale];

  return (
    <section
      id="project-roadmap"
      aria-labelledby="project-roadmap-heading"
      className="mt-16 scroll-mt-32"
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            {copy.eyebrow}
          </p>

          <h2
            id="project-roadmap-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            {copy.title}
          </h2>

          <p className="mt-4 text-slate-300">{copy.description}</p>
        </div>

        <div className="grid gap-4">
          {project.nextSteps[locale].map((step, index) => (
            <article
              key={step}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
            >
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-950">
                  {index + 1}
                </div>

                <p className="text-sm leading-6 text-slate-300">{step}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/6 p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              {copy.ctaTitle}
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
              {copy.ctaDescription}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href={`/${locale}/contact/`}
              className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              {copy.contactLabel}
            </Link>

            <Link
              href={`/${locale}/projects/`}
              className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              {copy.projectsLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
