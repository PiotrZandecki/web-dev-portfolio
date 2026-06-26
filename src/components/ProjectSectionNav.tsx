import { Locale } from "@/types/locale";

type ProjectSectionNavProps = {
  locale: Locale;
};

const projectSectionNavCopy: Record<
  Locale,
  {
    label: string;
    overview: string;
    links: string;
    livePreview: string;
    snapshot: string;
    technical: string;
    implementation: string;
    review: string;
    release: string;
    assets: string;
    caseStudy: string;
    roadmap: string;
  }
> = {
  en: {
    label: "Case study navigation",
    overview: "Overview",
    links: "Links",
    livePreview: "Live preview",
    snapshot: "Snapshot",
    technical: "Technical",
    implementation: "Implementation",
    review: "Review",
    release: "Release",
    assets: "Assets",
    caseStudy: "Case study",
    roadmap: "Roadmap",
  },
  pl: {
    label: "Nawigacja case study",
    overview: "Opis",
    links: "Linki",
    livePreview: "Live preview",
    snapshot: "Podsumowanie",
    technical: "Technicznie",
    implementation: "Implementacja",
    review: "Przegląd",
    release: "Release",
    assets: "Assety",
    caseStudy: "Case study",
    roadmap: "Roadmap",
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
      label: copy.links,
      href: "#project-links",
    },
    {
      label: copy.livePreview,
      href: "#project-live-preview",
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
      label: copy.implementation,
      href: "#project-implementation",
    },
    {
      label: copy.review,
      href: "#project-testing",
    },
    {
      label: copy.release,
      href: "#project-release",
    },
    {
      label: copy.assets,
      href: "#project-assets",
    },
    {
      label: copy.caseStudy,
      href: "#project-case-study",
    },
    {
      label: copy.roadmap,
      href: "#project-roadmap",
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
