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
  features: Record<Locale, string[]>;
  whatILearned: Record<Locale, string[]>;
  challenges: Record<Locale, string[]>;
  nextSteps: Record<Locale, string[]>;
  embedUrl?: string;
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
    features: {
      en: [
        "Separate modules for notes, lists and plans.",
        "Dashboard layout designed to keep important information in one place.",
        "Local data persistence using browser storage.",
        "Reusable cards and page sections.",
      ],
      pl: [
        "Oddzielne moduły dla notatek, list i planów.",
        "Layout dashboardu zaprojektowany tak, żeby trzymać ważne informacje w jednym miejscu.",
        "Zapisywanie danych lokalnie w przeglądarce.",
        "Komponenty kart i sekcji wielokrotnego użytku.",
      ],
    },
    whatILearned: {
      en: [
        "How to split an application into smaller feature modules.",
        "How to work with localStorage in a safer and more predictable way.",
        "How to keep UI components reusable across multiple pages.",
        "How to debug state updates and rendering issues in React.",
      ],
      pl: [
        "Jak dzielić aplikację na mniejsze moduły funkcjonalne.",
        "Jak pracować z localStorage w bezpieczniejszy i bardziej przewidywalny sposób.",
        "Jak utrzymywać komponenty UI jako elementy wielokrotnego użytku.",
        "Jak debugować aktualizacje stanu i problemy z renderowaniem w React.",
      ],
    },
    challenges: {
      en: [
        "Avoiding UI flashes when loading data from localStorage.",
        "Keeping the application structure clean as new features were added.",
        "Designing list and priority logic in a way that stays easy to extend.",
      ],
      pl: [
        "Unikanie migania interfejsu podczas ładowania danych z localStorage.",
        "Utrzymanie czystej struktury aplikacji przy dodawaniu kolejnych funkcji.",
        "Zaprojektowanie logiki list i priorytetów tak, żeby można ją było łatwo rozwijać.",
      ],
    },
    nextSteps: {
      en: [
        "Add better filtering and search across modules.",
        "Improve empty states and onboarding screens.",
        "Prepare the app for deployment and portfolio embedding.",
      ],
      pl: [
        "Dodać lepsze filtrowanie i wyszukiwanie między modułami.",
        "Dopracować puste stany i ekrany wprowadzające.",
        "Przygotować aplikację do deploya i osadzenia w portfolio.",
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
    features: {
      en: [
        "Hero section focused on brand presentation.",
        "Service sections with clear descriptions.",
        "Testimonials to build trust.",
        "Responsive layout for mobile and desktop users.",
      ],
      pl: [
        "Sekcja hero skupiona na prezentacji marki.",
        "Sekcje usług z czytelnymi opisami.",
        "Opinie klientów budujące zaufanie.",
        "Responsywny layout dla użytkowników mobilnych i desktopowych.",
      ],
    },
    whatILearned: {
      en: [
        "How to structure a business landing page.",
        "How to keep visual style consistent across multiple sections.",
        "How to work with image assets in a real website layout.",
        "How to build a page that feels more client-ready.",
      ],
      pl: [
        "Jak układać strukturę firmowej strony landing page.",
        "Jak utrzymać spójny styl wizualny między wieloma sekcjami.",
        "Jak pracować z grafikami w realnym layoucie strony.",
        "Jak budować stronę, która wygląda bardziej jak gotowy projekt dla klienta.",
      ],
    },
    challenges: {
      en: [
        "Maintaining visual consistency across generated images.",
        "Balancing beauty-oriented design with clear information architecture.",
        "Keeping the page polished without overcomplicating the structure.",
      ],
      pl: [
        "Utrzymanie spójności wizualnej między wygenerowanymi grafikami.",
        "Połączenie estetyki branży beauty z czytelną architekturą informacji.",
        "Dopracowanie strony bez niepotrzebnego komplikowania struktury.",
      ],
    },
    nextSteps: {
      en: [
        "Add live deployment link.",
        "Prepare final screenshots for the portfolio.",
        "Add source code link if the repository is public.",
      ],
      pl: [
        "Dodać link do wersji live.",
        "Przygotować finalne screeny do portfolio.",
        "Dodać link do kodu źródłowego, jeśli repozytorium będzie publiczne.",
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
    features: {
      en: [
        "Bilingual routing with Polish and English versions.",
        "Dynamic project pages generated from shared content data.",
        "Project cards and case study sections.",
        "Prepared structure for embedded project previews.",
      ],
      pl: [
        "Dwujęzyczny routing z wersją polską i angielską.",
        "Dynamiczne podstrony projektów generowane ze wspólnych danych.",
        "Karty projektów i sekcje case study.",
        "Struktura przygotowana pod osadzanie podglądów projektów.",
      ],
    },
    whatILearned: {
      en: [
        "How to organize multilingual content without overcomplicating the project.",
        "How to use dynamic routes for project detail pages.",
        "How to separate content, components and routing concerns.",
        "How to build a scalable foundation for future portfolio projects.",
      ],
      pl: [
        "Jak organizować wielojęzyczne treści bez nadmiernego komplikowania projektu.",
        "Jak używać dynamicznych tras dla stron szczegółów projektu.",
        "Jak oddzielać treść, komponenty i routing.",
        "Jak budować skalowalną bazę pod przyszłe projekty portfolio.",
      ],
    },
    challenges: {
      en: [
        "Designing the routing structure around locales and project slugs.",
        "Keeping the content model flexible enough for future projects.",
        "Creating a layout that works both as a portfolio and a project hub.",
      ],
      pl: [
        "Zaprojektowanie routingu wokół języków i slugów projektów.",
        "Utrzymanie modelu treści wystarczająco elastycznego pod przyszłe projekty.",
        "Stworzenie layoutu, który działa jednocześnie jako portfolio i hub projektów.",
      ],
    },
    nextSteps: {
      en: [
        "Improve the visual identity of the homepage.",
        "Add real live links and source code links.",
        "Prepare screenshots or mockups for each project.",
        "Deploy the portfolio.",
      ],
      pl: [
        "Dopracować identyfikację wizualną strony głównej.",
        "Dodać prawdziwe linki live i linki do kodu źródłowego.",
        "Przygotować screeny lub mockupy dla każdego projektu.",
        "Wdrożyć portfolio online.",
      ],
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
