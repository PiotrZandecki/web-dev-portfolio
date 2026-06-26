import { Locale } from "@/types/locale";

type ProjectSectionNavProps = {
  locale: Locale;
};

const projectSectionNavCopy: Record<
  Locale,
  {
    label: string;
    links: string;
    process: string;
    preview: string;
    caseStudy: string;
  }
> = {
  en: {
    label: "Case study navigation",
    links: "Links",
    process: "Process",
    preview: "Preview",
    caseStudy: "Case study",
  },
  pl: {
    label: "Nawigacja case study",
    links: "Linki",
    process: "Proces",
    preview: "Podgląd",
    caseStudy: "Case study",
  },
};

export function ProjectSectionNav({ locale }: ProjectSectionNavProps) {
  const copy = projectSectionNavCopy[locale];

  const items = [
    {
      label: copy.links,
      href: "#project-links",
    },
    {
      label: copy.process,
      href: "#project-process",
    },
    {
      label: copy.preview,
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
