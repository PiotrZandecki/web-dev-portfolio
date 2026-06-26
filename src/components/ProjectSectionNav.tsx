import { Locale } from "@/types/locale";

type ProjectSectionNavProps = {
  locale: Locale;
};

const projectSectionNavCopy: Record<
  Locale,
  {
    label: string;
    overview: string;
    snapshot: string;
    technical: string;
    links: string;
    livePreview: string;
    process: string;
    visualPreview: string;
    caseStudy: string;
  }
> = {
  en: {
    label: "Case study navigation",
    overview: "Overview",
    snapshot: "Snapshot",
    technical: "Technical",
    links: "Links",
    livePreview: "Live preview",
    process: "Process",
    visualPreview: "Visual preview",
    caseStudy: "Case study",
  },
  pl: {
    label: "Nawigacja case study",
    overview: "Opis",
    snapshot: "Podsumowanie",
    technical: "Technicznie",
    links: "Linki",
    livePreview: "Live preview",
    process: "Proces",
    visualPreview: "Podgląd",
    caseStudy: "Case study",
  },
};

export function ProjectSectionNav({ locale }: ProjectSectionNavProps) {
  const copy = projectSectionNavCopy[locale];

  const items = [
    {
      label: copy.overview,
      href: "#project-overview",
    },
    {
      label: copy.snapshot,
      href: "#project-snapshot",
    },
    {
      label: copy.technical,
      href: "#project-technical",
    },
    {
      label: copy.links,
      href: "#project-links",
    },
    {
      label: copy.livePreview,
      href: "#project-live-preview",
    },
    {
      label: copy.process,
      href: "#project-process",
    },
    {
      label: copy.visualPreview,
      href: "#project-preview",
    },
    {
      label: copy.caseStudy,
      href: "#project-case-study",
    },
  ];

  return (
    <nav
      aria-label={copy.label}
      className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-4"
    >
      <ul className="flex flex-wrap gap-3">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-200"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
