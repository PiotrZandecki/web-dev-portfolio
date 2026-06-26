import { Locale } from "@/types/locale";

export type ProjectStatus = "completed" | "inProgress";

type LocalizedText = Record<Locale, string>;
type LocalizedList = Record<Locale, string[]>;

export type ProjectProcessStep = {
  title: LocalizedText;
  description: LocalizedText;
};

export type ProjectMockup = {
  title: LocalizedText;
  description: LocalizedText;
};

export type Project = {
  slug: string;
  title: string;
  status: ProjectStatus;
  year: string;
  category: LocalizedText;
  shortDescription: LocalizedText;
  description: LocalizedText;
  technologies: string[];
  highlights: LocalizedList;
  features: LocalizedList;
  whatILearned: LocalizedList;
  challenges: LocalizedList;
  nextSteps: LocalizedList;
  process: ProjectProcessStep[];
  mockups: ProjectMockup[];
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
    category: {
      en: "Productivity App",
      pl: "Aplikacja produktywności",
    },
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
    process: [
      {
        title: {
          en: "Structure planning",
          pl: "Planowanie struktury",
        },
        description: {
          en: "The project started with separating the application into notes, lists and plans so each feature could grow independently.",
          pl: "Projekt rozpoczął się od podziału aplikacji na notatki, listy i plany, żeby każda funkcja mogła rozwijać się niezależnie.",
        },
      },
      {
        title: {
          en: "Local data handling",
          pl: "Obsługa danych lokalnych",
        },
        description: {
          en: "The next step was building a predictable localStorage layer and reducing UI flashes during loading.",
          pl: "Kolejnym krokiem było przygotowanie przewidywalnej warstwy localStorage i ograniczenie migania interfejsu podczas ładowania.",
        },
      },
      {
        title: {
          en: "Feature refinement",
          pl: "Dopracowanie funkcji",
        },
        description: {
          en: "The project was improved with priorities, sorting options and cleaner reusable components.",
          pl: "Projekt został rozwinięty o priorytety, opcje sortowania i czystsze komponenty wielokrotnego użytku.",
        },
      },
    ],
    mockups: [
      {
        title: {
          en: "Dashboard overview",
          pl: "Widok dashboardu",
        },
        description: {
          en: "A central place for quickly accessing notes, lists and plans.",
          pl: "Centralne miejsce do szybkiego dostępu do notatek, list i planów.",
        },
      },
      {
        title: {
          en: "Lists module",
          pl: "Moduł list",
        },
        description: {
          en: "A task-focused view prepared for priorities, sorting and completion states.",
          pl: "Widok list przygotowany pod priorytety, sortowanie i oznaczanie wykonania.",
        },
      },
      {
        title: {
          en: "Notes module",
          pl: "Moduł notatek",
        },
        description: {
          en: "A simple note management area focused on clean editing and local persistence.",
          pl: "Prosty obszar zarządzania notatkami skupiony na edycji i lokalnym zapisie danych.",
        },
      },
    ],
  },
  {
    slug: "aurora-beauty",
    title: "Aurora Beauty",
    status: "completed",
    year: "2026",
    category: {
      en: "Business Website",
      pl: "Strona firmowa",
    },
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
    process: [
      {
        title: {
          en: "Brand direction",
          pl: "Kierunek wizualny marki",
        },
        description: {
          en: "The project started with defining a soft, modern and trustworthy visual direction for a beauty business.",
          pl: "Projekt rozpoczął się od określenia miękkiego, nowoczesnego i wiarygodnego kierunku wizualnego dla biznesu beauty.",
        },
      },
      {
        title: {
          en: "Section structure",
          pl: "Struktura sekcji",
        },
        description: {
          en: "The page was structured around services, trust signals, testimonials and clear calls to action.",
          pl: "Strona została ułożona wokół usług, elementów budujących zaufanie, opinii klientów i czytelnych wezwań do działania.",
        },
      },
      {
        title: {
          en: "Visual polish",
          pl: "Dopracowanie wizualne",
        },
        description: {
          en: "The final step focused on visual consistency, responsive behavior and image placement.",
          pl: "Ostatni etap skupiał się na spójności wizualnej, responsywności i rozmieszczeniu grafik.",
        },
      },
    ],
    mockups: [
      {
        title: {
          en: "Landing page hero",
          pl: "Hero strony głównej",
        },
        description: {
          en: "A first impression section focused on brand mood, clarity and service positioning.",
          pl: "Pierwsza sekcja strony skupiona na nastroju marki, czytelności i pozycjonowaniu usług.",
        },
      },
      {
        title: {
          en: "Services area",
          pl: "Obszar usług",
        },
        description: {
          en: "A structured place for presenting beauty services in a clean and understandable way.",
          pl: "Uporządkowane miejsce do prezentacji usług beauty w czytelny i estetyczny sposób.",
        },
      },
      {
        title: {
          en: "Testimonials section",
          pl: "Sekcja opinii",
        },
        description: {
          en: "A trust-building section prepared for client feedback and social proof.",
          pl: "Sekcja budująca zaufanie, przygotowana pod opinie klientów i social proof.",
        },
      },
    ],
  },
  {
    slug: "web-dev-portfolio",
    title: "Web Dev Portfolio",
    status: "inProgress",
    year: "2026",
    category: {
      en: "Portfolio Website",
      pl: "Strona portfolio",
    },
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
    process: [
      {
        title: {
          en: "Architecture setup",
          pl: "Przygotowanie architektury",
        },
        description: {
          en: "The portfolio was structured around localized routes, reusable components and a shared project content model.",
          pl: "Portfolio zostało oparte o lokalizowane trasy, komponenty wielokrotnego użytku i wspólny model treści projektów.",
        },
      },
      {
        title: {
          en: "Project hub",
          pl: "Hub projektów",
        },
        description: {
          en: "The projects section was built as a central place for project cards, dynamic pages and future embedded previews.",
          pl: "Sekcja projektów została zbudowana jako centralne miejsce dla kart projektów, dynamicznych podstron i przyszłych osadzonych podglądów.",
        },
      },
      {
        title: {
          en: "Case study layout",
          pl: "Layout case study",
        },
        description: {
          en: "Each project page was expanded with process, links, lessons learned, challenges and next steps.",
          pl: "Każda podstrona projektu została rozszerzona o proces, linki, wnioski z nauki, wyzwania i kolejne kroki.",
        },
      },
    ],
    mockups: [
      {
        title: {
          en: "Homepage",
          pl: "Strona główna",
        },
        description: {
          en: "A portfolio landing page focused on clear positioning, featured work and skills.",
          pl: "Landing page portfolio skupiony na jasnym pozycjonowaniu, wyróżnionych projektach i umiejętnościach.",
        },
      },
      {
        title: {
          en: "Projects hub",
          pl: "Hub projektów",
        },
        description: {
          en: "A project overview page that collects all portfolio projects in one structured view.",
          pl: "Strona zbierająca wszystkie projekty portfolio w jednym uporządkowanym widoku.",
        },
      },
      {
        title: {
          en: "Project case study",
          pl: "Case study projektu",
        },
        description: {
          en: "A detail page prepared for project description, links, process, mockups and embedded previews.",
          pl: "Podstrona szczegółów przygotowana pod opis projektu, linki, proces, mockupy i osadzone podglądy.",
        },
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
