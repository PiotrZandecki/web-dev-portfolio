import { Project } from "@/content/projects";
import { Locale } from "@/types/locale";

type ProjectEmbedProps = {
  project: Project;
  locale: Locale;
};

const embedCopy = {
  en: {
    eyebrow: "Live Preview",
    title: "Embedded project preview",
    availableDescription:
      "This section shows the project directly inside the portfolio. You can also open it in a separate tab.",
    unavailableTitle: "Preview is not available yet",
    unavailableDescription:
      "This project does not have a deployed preview link yet. Once the project is published, it will be embedded here.",
    openProject: "Open Project",
    comingSoon: "Coming soon",
  },
  pl: {
    eyebrow: "Podgląd live",
    title: "Osadzony podgląd projektu",
    availableDescription:
      "Ta sekcja pokazuje projekt bezpośrednio wewnątrz portfolio. Możesz też otworzyć go w osobnej karcie.",
    unavailableTitle: "Podgląd nie jest jeszcze dostępny",
    unavailableDescription:
      "Ten projekt nie ma jeszcze wdrożonego linku do podglądu. Po publikacji projektu zostanie on osadzony w tym miejscu.",
    openProject: "Otwórz projekt",
    comingSoon: "Wkrótce",
  },
};

export function ProjectEmbed({ project, locale }: ProjectEmbedProps) {
  const copy = embedCopy[locale];

  return (
    <section className="mt-16">
      <div className="mb-6">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          {copy.eyebrow}
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
          {copy.title}
        </h2>

        <p className="mt-3 max-w-2xl text-slate-300">
          {project.embedUrl
            ? copy.availableDescription
            : copy.unavailableDescription}
        </p>
      </div>

      {project.embedUrl ? (
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-cyan-950/20">
          <div className="flex items-center justify-between border-b border-white/10 bg-slate-900 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <p className="hidden text-xs text-slate-400 md:block">
              {project.title}
            </p>

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-cyan-300 transition hover:text-cyan-200"
              >
                {copy.openProject}
              </a>
            ) : null}
          </div>

          <div className="aspect-[16/10] bg-slate-950">
            <iframe
              src={project.embedUrl}
              title={`${project.title} preview`}
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-white/15 bg-white/5 p-8">
          <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl bg-slate-900 px-6 py-16 text-center">
            <div className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              {copy.comingSoon}
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-white">
              {copy.unavailableTitle}
            </h3>

            <p className="mt-4 max-w-xl text-slate-300">
              {copy.unavailableDescription}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
