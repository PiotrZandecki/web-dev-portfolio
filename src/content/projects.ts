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
      en: "A personal productivity dashboard for managing notes, lists and plans in one structured workspace.",
      pl: "Osobisty dashboard produktywności do zarządzania notatkami, listami i planami w jednym uporządkowanym miejscu.",
    },
    description: {
      en: "Private Space is a practical productivity application built to organize personal notes, task lists and plans inside one dashboard. The project focuses on modular structure, local data persistence, reusable UI components and clear user flows.",
      pl: "Private Space to praktyczna aplikacja produktywności zaprojektowana do organizowania notatek, list zadań i planów w jednym dashboardzie. Projekt skupia się na modułowej strukturze, lokalnym zapisie danych, komponentach wielokrotnego użytku i czytelnych przepływach użytkownika.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Local Storage"],
    highlights: {
      en: [
        "Dashboard-based application structure",
        "Separate modules for notes, lists and plans",
        "Local browser data persistence",
        "Reusable interface components",
      ],
      pl: [
        "Struktura aplikacji oparta o dashboard",
        "Oddzielne moduły notatek, list i planów",
        "Lokalny zapis danych w przeglądarce",
        "Komponenty interfejsu wielokrotnego użytku",
      ],
    },
    features: {
      en: [
        "Dedicated areas for notes, lists and plans.",
        "Dashboard layout that keeps the most important sections easy to access.",
        "Local data persistence without a backend.",
        "Reusable cards, headers and page-level UI patterns.",
      ],
      pl: [
        "Oddzielne obszary dla notatek, list i planów.",
        "Layout dashboardu zapewniający szybki dostęp do najważniejszych sekcji.",
        "Lokalny zapis danych bez backendu.",
        "Komponenty kart, nagłówków i wzorców UI wielokrotnego użytku.",
      ],
    },
    whatILearned: {
      en: [
        "How to split a growing app into smaller feature modules.",
        "How to handle localStorage in a more predictable and safer way.",
        "How to reduce UI flashing while loading client-side data.",
        "How to keep React components reusable across multiple pages.",
      ],
      pl: [
        "Jak dzielić rosnącą aplikację na mniejsze moduły funkcjonalne.",
        "Jak obsługiwać localStorage w bardziej przewidywalny i bezpieczny sposób.",
        "Jak ograniczać miganie interfejsu podczas ładowania danych po stronie klienta.",
        "Jak utrzymywać komponenty React jako elementy wielokrotnego użytku.",
      ],
    },
    challenges: {
      en: [
        "Keeping local data synchronized with the UI without unnecessary flashes.",
        "Designing priority and sorting logic that can be extended later.",
        "Maintaining a clean project structure while adding new modules.",
      ],
      pl: [
        "Synchronizacja lokalnych danych z UI bez niepotrzebnego migania interfejsu.",
        "Zaprojektowanie logiki priorytetów i sortowania tak, aby można ją było dalej rozwijać.",
        "Utrzymanie czystej struktury projektu podczas dodawania kolejnych modułów.",
      ],
    },
    nextSteps: {
      en: [
        "Add stronger search and filtering across modules.",
        "Improve empty states and onboarding messages.",
        "Prepare deployment and connect the project with the portfolio preview area.",
      ],
      pl: [
        "Dodać mocniejsze wyszukiwanie i filtrowanie między modułami.",
        "Dopracować puste stany i komunikaty wprowadzające.",
        "Przygotować deploy i połączyć projekt z obszarem podglądu w portfolio.",
      ],
    },
    process: [
      {
        title: {
          en: "Application structure",
          pl: "Struktura aplikacji",
        },
        description: {
          en: "The app was divided into clear modules for notes, lists and plans so each feature could be developed independently.",
          pl: "Aplikacja została podzielona na czytelne moduły notatek, list i planów, żeby każdą funkcję można było rozwijać niezależnie.",
        },
      },
      {
        title: {
          en: "Data persistence",
          pl: "Zapis danych",
        },
        description: {
          en: "A localStorage layer was added to keep user data in the browser and preserve the app state between sessions.",
          pl: "Dodana została warstwa localStorage, która przechowuje dane użytkownika w przeglądarce i zachowuje stan aplikacji między sesjami.",
        },
      },
      {
        title: {
          en: "UX refinement",
          pl: "Dopracowanie UX",
        },
        description: {
          en: "The interface was improved with priorities, sorting options, cleaner components and better handling of loading states.",
          pl: "Interfejs został rozbudowany o priorytety, opcje sortowania, czystsze komponenty i lepszą obsługę stanów ładowania.",
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
          en: "A central screen for quickly accessing notes, lists and plans.",
          pl: "Centralny ekran umożliwiający szybki dostęp do notatek, list i planów.",
        },
      },
      {
        title: {
          en: "Lists module",
          pl: "Moduł list",
        },
        description: {
          en: "A task-oriented view prepared for priorities, sorting and completion states.",
          pl: "Widok zadań przygotowany pod priorytety, sortowanie i oznaczanie wykonania.",
        },
      },
      {
        title: {
          en: "Notes module",
          pl: "Moduł notatek",
        },
        description: {
          en: "A focused area for creating, editing and storing notes locally.",
          pl: "Prosty obszar do tworzenia, edytowania i lokalnego zapisywania notatek.",
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
      en: "A modern business website for a beauty brand, focused on services, trust and responsive presentation.",
      pl: "Nowoczesna strona firmowa dla marki beauty, skupiona na usługach, zaufaniu i responsywnej prezentacji.",
    },
    description: {
      en: "Aurora Beauty is a business website project created for the beauty industry. It focuses on clear service presentation, trust-building sections, testimonials, responsive layout and consistent visual direction.",
      pl: "Aurora Beauty to projekt strony firmowej dla branży beauty. Skupia się na czytelnej prezentacji usług, sekcjach budujących zaufanie, opiniach klientów, responsywnym layoucie i spójnym kierunku wizualnym.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: {
      en: [
        "Business landing page structure",
        "Service-focused content sections",
        "Testimonials and trust signals",
        "Responsive layout for mobile and desktop",
      ],
      pl: [
        "Struktura firmowej strony landing page",
        "Sekcje skupione na prezentacji usług",
        "Opinie klientów i elementy budujące zaufanie",
        "Responsywny layout dla mobile i desktopu",
      ],
    },
    features: {
      en: [
        "Hero section designed for a strong first impression.",
        "Service sections with clear descriptions and visual separation.",
        "Testimonials prepared for social proof.",
        "Responsive design adjusted for different screen sizes.",
      ],
      pl: [
        "Sekcja hero zaprojektowana pod mocne pierwsze wrażenie.",
        "Sekcje usług z czytelnymi opisami i wyraźnym podziałem wizualnym.",
        "Opinie klientów przygotowane pod social proof.",
        "Responsywny design dopasowany do różnych rozmiarów ekranu.",
      ],
    },
    whatILearned: {
      en: [
        "How to structure a client-oriented business landing page.",
        "How to keep visual consistency across many page sections.",
        "How to work with image assets inside a real website layout.",
        "How to balance aesthetics with clear information architecture.",
      ],
      pl: [
        "Jak układać strukturę strony firmowej nastawionej na klienta.",
        "Jak utrzymać spójność wizualną między wieloma sekcjami strony.",
        "Jak pracować z grafikami w realnym layoucie strony internetowej.",
        "Jak połączyć estetykę z czytelną architekturą informacji.",
      ],
    },
    challenges: {
      en: [
        "Maintaining one consistent visual direction across the whole page.",
        "Making the design feel polished without overcomplicating the layout.",
        "Balancing beauty-oriented visuals with practical service information.",
      ],
      pl: [
        "Utrzymanie jednego spójnego kierunku wizualnego na całej stronie.",
        "Dopracowanie wyglądu bez niepotrzebnego komplikowania layoutu.",
        "Połączenie estetyki branży beauty z praktyczną prezentacją usług.",
      ],
    },
    nextSteps: {
      en: [
        "Add the final live deployment link.",
        "Prepare real screenshots for the portfolio case study.",
        "Add the source code link if the repository becomes public.",
      ],
      pl: [
        "Dodać finalny link do wersji live.",
        "Przygotować prawdziwe screeny do case study w portfolio.",
        "Dodać link do kodu źródłowego, jeśli repozytorium będzie publiczne.",
      ],
    },
    process: [
      {
        title: {
          en: "Visual direction",
          pl: "Kierunek wizualny",
        },
        description: {
          en: "The project started with defining a soft, modern and trustworthy visual direction suitable for a beauty business.",
          pl: "Projekt rozpoczął się od określenia miękkiego, nowoczesnego i wiarygodnego kierunku wizualnego odpowiedniego dla biznesu beauty.",
        },
      },
      {
        title: {
          en: "Content sections",
          pl: "Sekcje treści",
        },
        description: {
          en: "The page was structured around services, benefits, trust signals, testimonials and clear calls to action.",
          pl: "Strona została ułożona wokół usług, korzyści, elementów budujących zaufanie, opinii klientów i jasnych wezwań do działania.",
        },
      },
      {
        title: {
          en: "Responsive polish",
          pl: "Dopracowanie responsywności",
        },
        description: {
          en: "The final step focused on responsive behavior, spacing, consistency and visual balance.",
          pl: "Ostatni etap skupiał się na responsywności, odstępach, spójności i równowadze wizualnej.",
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
          en: "A first-impression section focused on brand mood, positioning and clarity.",
          pl: "Pierwsza sekcja strony skupiona na nastroju marki, pozycjonowaniu i czytelności.",
        },
      },
      {
        title: {
          en: "Services area",
          pl: "Obszar usług",
        },
        description: {
          en: "A structured section for presenting beauty services in a clean and understandable way.",
          pl: "Uporządkowana sekcja prezentująca usługi beauty w czysty i zrozumiały sposób.",
        },
      },
      {
        title: {
          en: "Testimonials",
          pl: "Opinie klientów",
        },
        description: {
          en: "A trust-building section prepared for customer feedback and social proof.",
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
      en: "A bilingual portfolio website that works as a central hub for smaller frontend projects and case studies.",
      pl: "Dwujęzyczne portfolio pełniące rolę centralnego huba dla mniejszych projektów frontendowych i case studies.",
    },
    description: {
      en: "Web Dev Portfolio is a bilingual website designed to present frontend projects, skills and development progress. It uses localized routes, reusable components and dynamic project pages to create a scalable project hub.",
      pl: "Web Dev Portfolio to dwujęzyczna strona zaprojektowana do prezentowania projektów frontendowych, umiejętności i postępów w nauce. Wykorzystuje lokalizowane trasy, komponenty wielokrotnego użytku i dynamiczne podstrony projektów, tworząc skalowalny hub portfolio.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"],
    highlights: {
      en: [
        "Polish and English language versions",
        "Dynamic project pages",
        "Reusable portfolio components",
        "SEO and deployment-ready structure",
      ],
      pl: [
        "Polska i angielska wersja językowa",
        "Dynamiczne podstrony projektów",
        "Komponenty portfolio wielokrotnego użytku",
        "Struktura przygotowana pod SEO i deployment",
      ],
    },
    features: {
      en: [
        "Bilingual routing with dedicated Polish and English pages.",
        "Project hub with filtering, search and dynamic case studies.",
        "Reusable components for cards, summaries, sections and project details.",
        "Prepared areas for live previews, source links and future project screenshots.",
      ],
      pl: [
        "Dwujęzyczny routing z osobnymi stronami po polsku i angielsku.",
        "Hub projektów z filtrowaniem, wyszukiwarką i dynamicznymi case studies.",
        "Komponenty wielokrotnego użytku dla kart, podsumowań, sekcji i szczegółów projektów.",
        "Przygotowane miejsca na podglądy live, linki do kodu i przyszłe screeny projektów.",
      ],
    },
    whatILearned: {
      en: [
        "How to organize multilingual content without making the project too complex.",
        "How to use dynamic routes for scalable project detail pages.",
        "How to separate content, configuration, UI components and routing.",
        "How to prepare a portfolio project for deployment, SEO and future growth.",
      ],
      pl: [
        "Jak organizować wielojęzyczne treści bez nadmiernego komplikowania projektu.",
        "Jak używać dynamicznych tras dla skalowalnych podstron projektów.",
        "Jak oddzielać treść, konfigurację, komponenty UI i routing.",
        "Jak przygotować projekt portfolio pod deployment, SEO i dalszy rozwój.",
      ],
    },
    challenges: {
      en: [
        "Designing routing around locales and project slugs.",
        "Keeping the content model flexible enough for future projects.",
        "Balancing portfolio presentation with project hub functionality.",
      ],
      pl: [
        "Zaprojektowanie routingu wokół języków i slugów projektów.",
        "Utrzymanie modelu treści wystarczająco elastycznego pod przyszłe projekty.",
        "Połączenie prezentacji portfolio z funkcją huba projektów.",
      ],
    },
    nextSteps: {
      en: [
        "Add real production links and source code links.",
        "Replace placeholder mockups with real screenshots.",
        "Deploy the portfolio and connect environment variables.",
        "Continue adding new frontend projects as separate case studies.",
      ],
      pl: [
        "Dodać prawdziwe linki produkcyjne i linki do kodu źródłowego.",
        "Zastąpić placeholdery mockupów prawdziwymi screenami.",
        "Wdrożyć portfolio i podłączyć zmienne środowiskowe.",
        "Dodawać kolejne projekty frontendowe jako osobne case studies.",
      ],
    },
    process: [
      {
        title: {
          en: "Portfolio architecture",
          pl: "Architektura portfolio",
        },
        description: {
          en: "The project was structured around localized routes, shared project data and reusable UI components.",
          pl: "Projekt został oparty o lokalizowane trasy, wspólne dane projektów i komponenty UI wielokrotnego użytku.",
        },
      },
      {
        title: {
          en: "Project hub",
          pl: "Hub projektów",
        },
        description: {
          en: "The projects section was built as a searchable and filterable hub with dynamic project pages.",
          pl: "Sekcja projektów została zbudowana jako przeszukiwalny i filtrowalny hub z dynamicznymi podstronami projektów.",
        },
      },
      {
        title: {
          en: "Deployment readiness",
          pl: "Przygotowanie do deploymentu",
        },
        description: {
          en: "The final phase focused on metadata, sitemap, robots, manifest, Open Graph image and production checks.",
          pl: "Końcowy etap skupił się na metadanych, sitemapie, robots, manifeście, obrazie Open Graph i testach produkcyjnych.",
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
          en: "A landing page focused on positioning, featured work, skills and contact.",
          pl: "Landing page skupiony na pozycjonowaniu, wyróżnionych projektach, umiejętnościach i kontakcie.",
        },
      },
      {
        title: {
          en: "Projects hub",
          pl: "Hub projektów",
        },
        description: {
          en: "A structured overview of all portfolio projects with search and filters.",
          pl: "Uporządkowany widok wszystkich projektów portfolio z wyszukiwarką i filtrami.",
        },
      },
      {
        title: {
          en: "Project case study",
          pl: "Case study projektu",
        },
        description: {
          en: "A detail page prepared for project overview, links, process, mockups and embedded previews.",
          pl: "Podstrona szczegółów przygotowana pod opis projektu, linki, proces, mockupy i osadzone podglądy.",
        },
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
