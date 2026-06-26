import { Project } from "@/content/projects";
import {
  projectReleaseDetails,
  ReleaseStatus,
} from "@/content/projectReleaseDetails";
import { getResolvedProjectLinks } from "@/lib/project-links";
import { Locale } from "@/types/locale";

type ProjectReleaseStatusProps = {
  project: Project;
  locale: Locale;
};

const releaseCopy: Record<
  Locale,
  {
    eyebrow: string;
    missingTitle: string;
    missingDescription: string;
    liveUrl: string;
    sourceUrl: string;
    buildCommand: string;
    buildOutput: string;
    checks: string;
    openLive: string;
    openSource: string;
    statusLabels: Record<ReleaseStatus, string>;
  }
> = {
  en: {
    eyebrow: "Release status",
    missingTitle: "Release details are being prepared.",
    missingDescription:
      "This area is ready for deployment, source and preview notes.",
    liveUrl: "Resolved live URL",
    sourceUrl: "Resolved source URL",
    buildCommand: "Build command",
    buildOutput: "Build output",
    checks: "Checks",
    openLive: "Open live",
    openSource: "Open source",
    statusLabels: {
      connected: "Connected",
      prepared: "Prepared",
      pending: "Pending",
    },
  },
  pl: {
    eyebrow: "Status release",
    missingTitle: "Szczegóły release są w przygotowaniu.",
    missingDescription:
      "Ten obszar jest gotowy na notatki o deploymencie, kodzie i preview.",
    liveUrl: "Rozwiązany adres live",
    sourceUrl: "Rozwiązany adres source",
    buildCommand: "Komenda build",
    buildOutput: "Output builda",
    checks: "Kontrole",
    openLive: "Otwórz live",
    openSource: "Otwórz source",
    statusLabels: {
      connected: "Podpięte",
      prepared: "Przygotowane",
      pending: "Oczekuje",
    },
  },
};

function getStatusClasses(status: ReleaseStatus) {
  if (status === "connected") {
    return "bg-cyan-400/10 text-cyan-300";
  }

  if (status === "prepared") {
    return "bg-blue-400/10 text-blue-300";
  }

  return "bg-white/10 text-slate-400";
}

export function ProjectReleaseStatus({
  project,
  locale,
}: ProjectReleaseStatusProps) {
  const details = projectReleaseDetails[project.slug];
  const copy = releaseCopy[locale];
  const links = getResolvedProjectLinks(project);

  if (!details) {
    return (
      <section
        id="project-release"
        aria-labelledby="project-release-heading"
        className="mt-16 scroll-mt-32 rounded-3xl border border-dashed border-white/15 bg-white/5 p-8"
      >
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          {copy.eyebrow}
        </p>

        <h2
          id="project-release-heading"
          className="mt-4 text-3xl font-bold tracking-tight text-white"
        >
          {copy.missingTitle}
        </h2>

        <p className="mt-3 max-w-2xl text-slate-300">
          {copy.missingDescription}
        </p>
      </section>
    );
  }

  const releaseCards = [
    {
      ...details.liveDemo,
      resolvedLabel: copy.liveUrl,
      resolvedValue: links.liveUrl,
      actionLabel: copy.openLive,
      actionHref: links.liveUrl,
    },
    {
      ...details.sourceCode,
      resolvedLabel: copy.sourceUrl,
      resolvedValue: links.sourceUrl,
      actionLabel: copy.openSource,
      actionHref: links.sourceUrl,
    },
    {
      ...details.visualPreview,
      resolvedLabel: "Asset",
      resolvedValue: project.mockups[0]?.imageSrc ?? "",
      actionLabel: "",
      actionHref: "",
    },
  ];

  return (
    <section
      id="project-release"
      aria-labelledby="project-release-heading"
      className="mt-16 scroll-mt-32"
    >
      <div className="mb-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            {copy.eyebrow}
          </p>

          <h2
            id="project-release-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            {details.releaseTitle[locale]}
          </h2>
        </div>

        <p className="max-w-2xl text-slate-300 lg:justify-self-end">
          {details.releaseDescription[locale]}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {releaseCards.map((card) => (
          <article
            key={card.title.en}
            className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {card.title[locale]}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {card.label[locale]}
                </p>
              </div>

              <span
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(
                  card.status,
                )}`}
              >
                {copy.statusLabels[card.status]}
              </span>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-300">
              {card.description[locale]}
            </p>

            <div className="mt-5 rounded-2xl bg-slate-950 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {card.resolvedLabel}
              </p>

              <p className="mt-2 break-all text-sm text-slate-300">
                {card.resolvedValue || "—"}
              </p>
            </div>

            <ul className="mt-5 flex-1 space-y-3">
              {card.notes[locale].map((note) => (
                <li
                  key={note}
                  className="flex gap-3 text-sm leading-6 text-slate-300"
                >
                  <span aria-hidden="true" className="text-cyan-300">
                    ✓
                  </span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>

            {card.actionHref ? (
              <a
                href={card.actionHref}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-fit rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                {card.actionLabel}
              </a>
            ) : null}
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-3xl border border-cyan-400/20 bg-cyan-400/6 p-6">
        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {copy.buildCommand}
            </p>

            <p className="mt-3 rounded-2xl bg-slate-950 p-4 font-mono text-sm text-slate-300">
              {details.build.command}
            </p>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {copy.buildOutput}
            </p>

            <p className="mt-3 rounded-2xl bg-slate-950 p-4 font-mono text-sm text-slate-300">
              {details.build.output}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {copy.checks}
            </p>

            <ul className="mt-4 grid gap-3">
              {details.build.checks[locale].map((check) => (
                <li
                  key={check}
                  className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
                >
                  {check}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
