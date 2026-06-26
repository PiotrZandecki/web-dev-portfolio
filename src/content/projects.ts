import { Locale } from "@/types/locale";

export type ProjectStatus = "completed" | "inProgress";

export type Project = {
  slug: string;
  title: string;
  status: ProjectStatus;
  year: string;
  shortDescription: Record<Locale, string>;
  description: Record<Locale, string>;
  technologies: string[];
  highlights: Record<Locale, string[]>;
  liveUrl?: string;
  sourceUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "private-space",
    title: "Private Space",
    status: "inProgress",
    year: "2026",
    shortDescription: {
      en: "A personal productivity app for managing notes, lists and plans in one clean dashboard.",
      pl: "Osobista aplikacja produktywności do zarządzania notatkami, listami i planami w jednym przejrzystym panelu.",
    },
    description: {
      en: "Private Space is a project focused on building a practical productivity dashboard. It combines notes, lists and plans into one structured interface and is designed as a training ground for state management, reusable components and clean UI patterns.",
      pl: "Private Space to projekt skupiony na stworzeniu praktycznego panelu produktywności. Łączy notatki, listy i plany w jednym uporządkowanym interfejsie i służy jako miejsce do ćwiczenia zarządzania stanem, komponentów wielokrotnego użytku oraz czystych wzorców UI.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Local Storage"],
    highlights: {
      en: [
        "Dashboard-based structure",
        "Notes, lists and plans modules",
        "Local storage persistence",
        "Reusable UI components",
      ],
      pl: [
        "Struktura oparta o dashboard",
        "Moduły notatek, list i planów",
        "Zapisywanie danych w localStorage",
        "Komponenty UI wielokrotnego użytku",
      ],
    },
  },
  {
    slug: "aurora-beauty",
    title: "Aurora Beauty",
    status: "completed",
    year: "2026",
    shortDescription: {
      en: "A modern business website concept for a beauty brand with responsive layout and polished visual style.",
      pl: "Nowoczesna strona firmowa dla marki beauty z responsywnym layoutem i dopracowaną warstwą wizualną.",
    },
    description: {
      en: "Aurora Beauty is a business website project created for the beauty industry. It focuses on presentation, trust building, services, testimonials and visual consistency across the whole page.",
      pl: "Aurora Beauty to projekt strony firmowej dla branży beauty. Skupia się na prezentacji oferty, budowaniu zaufania, usługach, opiniach klientów i spójności wizualnej całej strony.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: {
      en: [
        "Business landing page structure",
        "Service sections",
        "Testimonials",
        "Responsive design",
      ],
      pl: [
        "Struktura strony firmowej",
        "Sekcje usług",
        "Opinie klientów",
        "Responsywny design",
      ],
    },
  },
  {
    slug: "web-dev-portfolio",
    title: "Web Dev Portfolio",
    status: "inProgress",
    year: "2026",
    shortDescription: {
      en: "A bilingual portfolio website used as a central hub for smaller web development projects.",
      pl: "Dwujęzyczne portfolio pełniące rolę centralnego miejsca dla mniejszych projektów web development.",
    },
    description: {
      en: "This portfolio is designed to present skills, projects and development progress. The main idea is to use it as a hub where smaller projects can be embedded, described and expanded as separate pages.",
      pl: "To portfolio zostało zaprojektowane do prezentowania umiejętności, projektów i postępów w nauce. Główna idea polega na tym, żeby było hubem, w którym mniejsze projekty mogą być osadzane, opisywane i rozwijane jako osobne podstrony.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"],
    highlights: {
      en: [
        "Polish and English versions",
        "Dynamic project pages",
        "Scalable content structure",
        "Portfolio-focused layout",
      ],
      pl: [
        "Wersja polska i angielska",
        "Dynamiczne podstrony projektów",
        "Skalowalna struktura treści",
        "Layout skupiony na portfolio",
      ],
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
