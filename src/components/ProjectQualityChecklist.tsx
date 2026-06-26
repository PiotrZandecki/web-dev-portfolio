import { Project } from "@/content/projects";
import { getResolvedProjectLinks } from "@/lib/project-links";
import { Locale } from "@/types/locale";

type ProjectQualityChecklistProps = {
  project: Project;
  locale: Locale;
};

const qualityCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    passed: string;
    pending: string;
    checks: {
      caseStudy: string;
      liveDemo: string;
      sourceCode: string;
      visualPreview: string;
      technicalStack: string;
      nextSteps: string;
    };
    descriptions: {
      caseStudy: string;
      liveDemo: string;
      sourceCode: string;
      visualPreview: string;
      technicalStack: string;
      nextSteps: string;
    };
  }
> = {
  en: {
    eyebrow: "Quality checklist",
    title: "Technical presentation readiness",
    description:
      "A project-focused checklist showing which presentation and delivery elements are already available inside the case study.",
    passed: "Ready",
    pending: "Pending",
    checks: {
      caseStudy: "Case study page",
      liveDemo: "Live demo",
      sourceCode: "Source code",
      visualPreview: "Visual preview",
      technicalStack: "Technical stack",
      nextSteps: "Next steps",
    },
    descriptions: {
      caseStudy:
        "The project has a dedicated case study page with structured sections.",
      liveDemo:
        "The deployed project can be opened and tested directly in the browser.",
      sourceCode:
        "The source repository is connected and can be reviewed externally.",
      visualPreview:
        "The project has a visual preview prepared for portfolio presentation.",
      technicalStack:
        "The technologies used in the project are listed and visible.",
      nextSteps:
        "The project has a clear list of future improvements or development notes.",
    },
  },
  pl: {
    eyebrow: "Checklist jakości",
    title: "Gotowość prezentacji technicznej",
    description:
      "Checklist projektowy pokazujący, które elementy prezentacji i realizacji są już dostępne w case study.",
    passed: "Gotowe",
    pending: "Oczekuje",
    checks: {
      caseStudy: "Podstrona case study",
      liveDemo: "Wersja live",
      sourceCode: "Kod źródłowy",
      visualPreview: "Podgląd wizualny",
      technicalStack: "Stack technologiczny",
      nextSteps: "Kolejne kroki",
    },
    descriptions: {
      caseStudy:
        "Projekt ma dedykowaną podstronę case study z uporządkowanymi sekcjami.",
      liveDemo:
        "Wdrożony projekt można otworzyć i przetestować bezpośrednio w przeglądarce.",
      sourceCode:
        "Repozytorium źródłowe jest podpięte i można je przejrzeć zewnętrznie.",
      visualPreview:
        "Projekt ma przygotowany podgląd wizualny do prezentacji w portfolio.",
      technicalStack: "Technologie użyte w projekcie są opisane i widoczne.",
      nextSteps:
        "Projekt ma jasną listę kolejnych usprawnień albo notatek rozwojowych.",
    },
  },
};

export function ProjectQualityChecklist({
  project,
  locale,
}: ProjectQualityChecklistProps) {
  const copy = qualityCopy[locale];
  const resolvedLinks = getResolvedProjectLinks(project);

  const checks = [
    {
      title: copy.checks.caseStudy,
      description: copy.descriptions.caseStudy,
      isReady: true,
    },
    {
      title: copy.checks.liveDemo,
      description: copy.descriptions.liveDemo,
      isReady: resolvedLinks.hasLiveUrl,
    },
    {
      title: copy.checks.sourceCode,
      description: copy.descriptions.sourceCode,
      isReady: resolvedLinks.hasSourceUrl,
    },
    {
      title: copy.checks.visualPreview,
      description: copy.descriptions.visualPreview,
      isReady: project.mockups.length > 0,
    },
    {
      title: copy.checks.technicalStack,
      description: copy.descriptions.technicalStack,
      isReady: project.technologies.length > 0,
    },
    {
      title: copy.checks.nextSteps,
      description: copy.descriptions.nextSteps,
      isReady: project.nextSteps[locale].length > 0,
    },
  ];

  return (
    <section
      id="project-quality"
      aria-labelledby="project-quality-heading"
      className="mt-16 scroll-mt-32"
    >
      <div className="mb-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            {copy.eyebrow}
          </p>

          <h2
            id="project-quality-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            {copy.title}
          </h2>
        </div>

        <p className="max-w-2xl text-slate-300 lg:justify-self-end">
          {copy.description}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {checks.map((check) => (
          <article
            key={check.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-white">
                {check.title}
              </h3>

              <span
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                  check.isReady
                    ? "bg-cyan-400/10 text-cyan-300"
                    : "bg-white/10 text-slate-400"
                }`}
              >
                {check.isReady ? copy.passed : copy.pending}
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {check.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
