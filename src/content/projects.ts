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
  imageSrc: string;
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
        "Prepare a public live demo under a dedicated subdomain.",
        "Add stronger search and filtering across modules.",
        "Improve empty states and onboarding messages.",
      ],
      pl: [
        "Przygotować publiczne live demo pod dedykowaną subdomeną.",
        "Dodać mocniejsze wyszukiwanie i filtrowanie między modułami.",
        "Dopracować puste stany i komunikaty wprowadzające.",
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
        imageSrc: "/project-previews/private-space-dashboard.svg",
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
        "Publish the project as a live preview under a dedicated subdomain.",
        "Replace the designed preview with real production screenshots.",
        "Add the source code link if the repository becomes public.",
      ],
      pl: [
        "Opublikować projekt jako live preview pod dedykowaną subdomeną.",
        "Zastąpić zaprojektowany preview prawdziwymi screenshotami produkcyjnymi.",
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
        imageSrc: "/project-previews/aurora-beauty-home.svg",
      },
    ],
  },
  {
    slug: "web-dev-portfolio",
    title: "Web Dev Portfolio",
    status: "completed",
    year: "2026",
    category: {
      en: "Portfolio Website",
      pl: "Strona portfolio",
    },
    shortDescription: {
      en: "A production bilingual portfolio website deployed under a custom domain and built as a hub for frontend projects and case studies.",
      pl: "Produkcyjne dwujęzyczne portfolio wdrożone pod własną domeną i zbudowane jako hub dla projektów frontendowych oraz case studies.",
    },
    description: {
      en: "Web Dev Portfolio is the production portfolio you are currently browsing. It presents frontend projects, services and case studies through bilingual routes, reusable components, dynamic project pages, static export and Cloudflare Pages deployment under a custom domain.",
      pl: "Web Dev Portfolio to produkcyjne portfolio, które właśnie przeglądasz. Prezentuje projekty frontendowe, usługi i case studies przez dwujęzyczne trasy, komponenty wielokrotnego użytku, dynamiczne podstrony projektów, statyczny export i deployment na Cloudflare Pages pod własną domeną.",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "i18n",
      "Static Export",
      "Cloudflare Pages",
    ],
    highlights: {
      en: [
        "Production deployment under zandeckidev.pl",
        "Polish and English language versions",
        "Dynamic project case study pages",
        "SEO routes and static export workflow",
      ],
      pl: [
        "Produkcyjne wdrożenie pod zandeckidev.pl",
        "Polska i angielska wersja językowa",
        "Dynamiczne podstrony case study projektów",
        "Trasy SEO i workflow statycznego exportu",
      ],
    },
    features: {
      en: [
        "Bilingual routing with dedicated Polish and English pages.",
        "Project hub with filtering, search and dynamic case studies.",
        "Reusable components for cards, summaries, sections and project details.",
        "Static export deployment on Cloudflare Pages with a custom domain.",
      ],
      pl: [
        "Dwujęzyczny routing z osobnymi stronami po polsku i angielsku.",
        "Hub projektów z filtrowaniem, wyszukiwarką i dynamicznymi case studies.",
        "Komponenty wielokrotnego użytku dla kart, podsumowań, sekcji i szczegółów projektów.",
        "Statyczny deployment na Cloudflare Pages z własną domeną.",
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
        "Replace designed previews with real production screenshots where available.",
        "Add live demos for Private Space and Aurora Beauty under dedicated subdomains.",
        "Continue adding new frontend projects as separate case studies.",
      ],
      pl: [
        "Zastąpić zaprojektowane preview prawdziwymi screenshotami produkcyjnymi tam, gdzie będą dostępne.",
        "Dodać live demo dla Private Space i Aurora Beauty pod dedykowanymi subdomenami.",
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
          en: "Production deployment",
          pl: "Deployment produkcyjny",
        },
        description: {
          en: "The final phase connected the portfolio to Cloudflare Pages, a custom domain, metadata, sitemap, robots, manifest, Open Graph image and production checks.",
          pl: "Końcowy etap połączył portfolio z Cloudflare Pages, własną domeną, metadanymi, sitemapą, robots, manifestem, obrazem Open Graph i kontrolami produkcyjnymi.",
        },
      },
    ],
    mockups: [
      {
        title: {
          en: "Portfolio homepage",
          pl: "Strona główna portfolio",
        },
        description: {
          en: "A production portfolio homepage focused on positioning, featured work, services and contact.",
          pl: "Produkcyjna strona główna portfolio skupiona na pozycjonowaniu, wyróżnionych projektach, usługach i kontakcie.",
        },
        imageSrc: "/project-previews/web-dev-portfolio-home.svg",
      },
    ],
    liveUrl: "https://zandeckidev.pl",
    sourceUrl: "https://github.com/PiotrZandecki/web-dev-portfolio",
    embedUrl: "https://zandeckidev.pl",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
