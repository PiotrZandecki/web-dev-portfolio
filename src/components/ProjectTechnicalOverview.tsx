import { Project } from "@/content/projects";
import { Dictionary } from "@/lib/i18n";
import { getResolvedProjectLinks } from "@/lib/project-links";
import { Locale } from "@/types/locale";

type ProjectTechnicalOverviewProps = {
  project: Project;
  locale: Locale;
  dictionary: Dictionary;
};

const technicalOverviewCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    available: string;
    pending: string;
    liveDemo: string;
    sourceCode: string;
    visualPreview: string;
    stack: string;
    liveAvailableDescription: string;
    livePendingDescription: string;
    sourceAvailableDescription: string;
    sourcePendingDescription: string;
    previewDescription: string;
    stackDescription: string;
    notAddedYet: string;
    designedPreview: string;
  }
> = {
  en: {
    eyebrow: "Technical overview",
    title: "Project delivery status",
    description:
      "A quick technical status of the project: deployment, source code, visual preview and implementation stack.",
    available: "Available",
    pending: "Pending",
    liveDemo: "Live demo",
    sourceCode: "Source code",
    visualPreview: "Visual preview",
    stack: "Stack",
    liveAvailableDescription:
      "This project has a live version that can be opened and tested in the browser.",
    livePendingDescription:
      "The live version has not been connected yet. This area is ready for a future deployment link.",
    sourceAvailableDescription:
      "The source repository is available and can be reviewed externally.",
    sourcePendingDescription:
      "The source code link has not been added yet. This area is ready for a future repository link.",
    previewDescription:
      "The project currently uses a designed preview image prepared for the portfolio case study.",
    stackDescription:
      "Technologies used to build or present this project inside the portfolio.",
    notAddedYet: "Not added yet",
    designedPreview: "Designed portfolio preview",
  },
  pl: {
    eyebrow: "Przegląd techniczny",
    title: "Status realizacji projektu",
    description:
      "Szybki status techniczny projektu: deployment, kod źródłowy, podgląd wizualny i stack implementacyjny.",
    available: "Dostępne",
    pending: "Oczekuje",
    liveDemo: "Wersja live",
    sourceCode: "Kod źródłowy",
    visualPreview: "Podgląd wizualny",
    stack: "Stack",
    liveAvailableDescription:
      "Ten projekt ma wersję live, którą można otworzyć i przetestować w przeglądarce.",
    livePendingDescription:
      "Wersja live nie została jeszcze podpięta. Ten obszar jest gotowy na przyszły link do wdrożenia.",
    sourceAvailableDescription:
      "Repozytorium z kodem źródłowym jest dostępne i można je przejrzeć zewnętrznie.",
    sourcePendingDescription:
      "Link do kodu źródłowego nie został jeszcze dodany. Ten obszar jest gotowy na przyszły link do repozytorium.",
    previewDescription:
      "Projekt aktualnie korzysta z zaprojektowanego obrazu preview przygotowanego pod case study w portfolio.",
    stackDescription:
      "Technologie użyte do zbudowania albo zaprezentowania tego projektu w portfolio.",
    notAddedYet: "Jeszcze nie dodano",
    designedPreview: "Zaprojektowany podgląd portfolio",
  },
};

export function ProjectTechnicalOverview({
  project,
  locale,
}: ProjectTechnicalOverviewProps) {
  const copy = technicalOverviewCopy[locale];
  const resolvedLinks = getResolvedProjectLinks(project);

  const cards = [
    {
      title: copy.liveDemo,
      status: resolvedLinks.hasLiveUrl ? copy.available : copy.pending,
      isAvailable: resolvedLinks.hasLiveUrl,
      value: resolvedLinks.liveUrl || copy.notAddedYet,
      description: resolvedLinks.hasLiveUrl
        ? copy.liveAvailableDescription
        : copy.livePendingDescription,
    },
    {
      title: copy.sourceCode,
      status: resolvedLinks.hasSourceUrl ? copy.available : copy.pending,
      isAvailable: resolvedLinks.hasSourceUrl,
      value: resolvedLinks.sourceUrl || copy.notAddedYet,
      description: resolvedLinks.hasSourceUrl
        ? copy.sourceAvailableDescription
        : copy.sourcePendingDescription,
    },
    {
      title: copy.visualPreview,
      status: project.mockups.length > 0 ? copy.available : copy.pending,
      isAvailable: project.mockups.length > 0,
      value:
        project.mockups.length > 0 ? copy.designedPreview : copy.notAddedYet,
      description: copy.previewDescription,
    },
    {
      title: copy.stack,
      status: copy.available,
      isAvailable: true,
      value: project.technologies.join(", "),
      description: copy.stackDescription,
    },
  ];

  return (
    <section
      id="project-technical"
      aria-labelledby="project-technical-heading"
      className="mt-16 scroll-mt-32"
    >
      <div className="mb-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            {copy.eyebrow}
          </p>

          <h2
            id="project-technical-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            {copy.title}
          </h2>
        </div>

        <p className="max-w-2xl text-slate-300 lg:justify-self-end">
          {copy.description}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((card) => (
          <article
            key={card.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold tracking-tight text-white">
                {card.title}
              </h3>

              <span
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                  card.isAvailable
                    ? "bg-cyan-400/10 text-cyan-300"
                    : "bg-white/10 text-slate-400"
                }`}
              >
                {card.status}
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              {card.description}
            </p>

            <p className="mt-5 break-all rounded-2xl bg-slate-950 p-4 text-sm text-slate-400">
              {card.value}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
