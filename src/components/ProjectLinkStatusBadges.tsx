import { Project } from "@/content/projects";
import { getResolvedProjectLinks } from "@/lib/project-links";
import { Locale } from "@/types/locale";

type ProjectLinkStatusBadgesProps = {
  project: Project;
  locale: Locale;
  compact?: boolean;
};

const statusCopy: Record<
  Locale,
  {
    live: string;
    source: string;
    preview: string;
    available: string;
    planned: string;
    previewAvailable: string;
  }
> = {
  en: {
    live: "Live",
    source: "Source",
    preview: "Preview",
    available: "Available",
    planned: "Planned",
    previewAvailable: "Preview available",
  },
  pl: {
    live: "Live",
    source: "Kod",
    preview: "Preview",
    available: "Dostępne",
    planned: "Planowane",
    previewAvailable: "Preview dostępne",
  },
};

export function ProjectLinkStatusBadges({
  project,
  locale,
  compact = false,
}: ProjectLinkStatusBadgesProps) {
  const copy = statusCopy[locale];
  const resolvedLinks = getResolvedProjectLinks(project);

  const items = [
    {
      label: copy.live,
      isAvailable: resolvedLinks.hasLiveUrl,
      unavailableLabel: copy.planned,
    },
    {
      label: copy.source,
      isAvailable: resolvedLinks.hasSourceUrl,
      unavailableLabel: copy.planned,
    },
    {
      label: copy.preview,
      isAvailable: project.mockups.length > 0,
      unavailableLabel: copy.planned,
    },
  ];

  return (
    <ul className="flex flex-wrap gap-2" aria-label="Project technical status">
      {items.map((item) => (
        <li
          key={item.label}
          className={`rounded-full border px-3 py-1 text-xs font-semibold ${
            item.isAvailable
              ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
              : "border-white/10 bg-white/5 text-slate-400"
          } ${compact ? "text-[11px]" : ""}`}
          title={item.isAvailable ? copy.available : item.unavailableLabel}
        >
          <span>{item.label}</span>
          <span className="ml-2" aria-hidden="true">
            {item.isAvailable ? "✓" : "planned"}
          </span>
        </li>
      ))}
    </ul>
  );
}
