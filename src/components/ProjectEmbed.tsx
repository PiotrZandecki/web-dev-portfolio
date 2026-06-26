import { Project } from "@/content/projects";
import { getResolvedProjectLinks } from "@/lib/project-links";
import { Locale } from "@/types/locale";

type ProjectEmbedProps = {
  project: Project;
  locale: Locale;
};

const projectEmbedCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    browserLabel: string;
    openLive: string;
    unavailableTitle: string;
    unavailableDescription: string;
  }
> = {
  en: {
    eyebrow: "Live preview",
    title: "Embedded project preview",
    description:
      "When a project has a deployed live version, it can be previewed directly inside the portfolio case study.",
    browserLabel: "Live browser preview",
    openLive: "Open live version",
    unavailableTitle: "Live preview is not connected yet",
    unavailableDescription:
      "This area is prepared for a future embedded preview. Once the project is deployed, the live URL can be connected here.",
  },
  pl: {
    eyebrow: "Podgląd live",
    title: "Osadzony podgląd projektu",
    description:
      "Jeśli projekt ma wdrożoną wersję live, można go podejrzeć bezpośrednio w case study portfolio.",
    browserLabel: "Podgląd live w przeglądarce",
    openLive: "Otwórz wersję live",
    unavailableTitle: "Podgląd live nie jest jeszcze podpięty",
    unavailableDescription:
      "Ten obszar jest przygotowany pod przyszły osadzony podgląd. Po wdrożeniu projektu można tutaj podłączyć adres live.",
  },
};

export function ProjectEmbed({ project, locale }: ProjectEmbedProps) {
  const copy = projectEmbedCopy[locale];
  const resolvedLinks = getResolvedProjectLinks(project);

  return (
    <section
      id="project-live-preview"
      aria-labelledby="project-live-preview-heading"
      className="mt-16 scroll-mt-32"
    >
      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          {copy.eyebrow}
        </p>

        <h2
          id="project-live-preview-heading"
          className="mt-4 text-3xl font-bold tracking-tight text-white"
        >
          {copy.title}
        </h2>

        <p className="mt-3 max-w-2xl text-slate-300">{copy.description}</p>
      </div>

      {resolvedLinks.hasEmbedUrl ? (
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div aria-hidden="true" className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <span className="truncate pl-4 text-xs text-slate-500">
                {copy.browserLabel}
              </span>
            </div>

            <iframe
              title={`${project.title} ${copy.browserLabel}`}
              src={resolvedLinks.embedUrl}
              className="h-140 w-full bg-white"
              loading="lazy"
            />
          </div>

          <a
            href={resolvedLinks.liveUrl || resolvedLinks.embedUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            {copy.openLive}
          </a>
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-white/15 bg-white/5 p-8">
          <h3 className="text-2xl font-semibold tracking-tight text-white">
            {copy.unavailableTitle}
          </h3>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
            {copy.unavailableDescription}
          </p>
        </div>
      )}
    </section>
  );
}
