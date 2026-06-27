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
  }
> = {
  en: {
    live: "Live",
    source: "Source",
    preview: "Preview",
    available: "Available",
    planned: "Planned",
  },
  pl: {
    live: "Live",
    source: "Kod",
    preview: "Preview",
    available: "Dostępne",
    planned: "Planowane",
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
    },
    {
      label: copy.source,
      isAvailable: resolvedLinks.hasSourceUrl,
    },
    {
      label: copy.preview,
      isAvailable: project.mockups.length > 0,
    },
  ];

  return (
    <ul className="flex flex-wrap gap-2" aria-label="Project technical status">
      {items.map((item) => (
        <li
          key={item.label}
          className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition ${
            item.isAvailable
              ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-300 shadow-[0_0_18px_rgb(34_211_238/0.06)]"
              : "border-white/10 bg-white/5 text-slate-400"
          } ${compact ? "text-[11px]" : ""}`}
          title={item.isAvailable ? copy.available : copy.planned}
        >
          <span
            aria-hidden="true"
            className={`mr-2 h-1.5 w-1.5 rounded-full ${
              item.isAvailable ? "bg-cyan-300" : "bg-slate-500"
            }`}
          />
          <span>{item.label}</span>
          <span className="ml-2 text-[10px] uppercase tracking-[0.14em] opacity-70">
            {item.isAvailable ? "on" : "soon"}
          </span>
        </li>
      ))}
    </ul>
  );
}
