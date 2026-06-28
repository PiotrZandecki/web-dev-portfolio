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
  technicalDecisions: LocalizedList;
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
      en: "Private Space is a productivity application designed to organize personal notes, task lists and plans inside one dashboard. The project focuses on modular structure, local data persistence, reusable UI components and clear user flows.",
      pl: "Private Space to aplikacja produktywności zaprojektowana do organizowania notatek, list zadań i planów w jednym dashboardzie. Projekt skupia się na modułowej strukturze, lokalnym zapisie danych, komponentach wielokrotnego użytku i czytelnych przepływach użytkownika.",
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
    technicalDecisions: {
      en: [
        "Feature modules are separated so notes, lists and plans can be extended independently.",
        "The localStorage layer is isolated to keep browser persistence predictable and easier to maintain.",
        "Client-side loading states are handled to reduce visual flashing and keep the interface stable.",
        "Shared React components are reused across pages to keep the dashboard consistent.",
      ],
      pl: [
        "Moduły funkcjonalne są oddzielone tak, aby notatki, listy i plany można było rozwijać niezależnie.",
        "Warstwa localStorage jest odseparowana, żeby lokalny zapis w przeglądarce był przewidywalny i łatwiejszy w utrzymaniu.",
        "Stany ładowania po stronie klienta są obsługiwane tak, aby ograniczyć miganie interfejsu i utrzymać stabilny widok.",
        "Wspólne komponenty React są używane między podstronami, aby zachować spójność dashboardu.",
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
          en: "The app was divided into clear modules for notes, lists and plans so each feature can be maintained and extended independently.",
          pl: "Aplikacja została podzielona na czytelne moduły notatek, list i planów, żeby każdą funkcję można było utrzymywać i rozwijać niezależnie.",
        },
      },
      {
        title: {
          en: "Data persistence",
          pl: "Zapis danych",
        },
        description: {
          en: "A localStorage layer keeps user data in the browser and preserves application state between sessions.",
          pl: "Warstwa localStorage przechowuje dane użytkownika w przeglądarce i zachowuje stan aplikacji między sesjami.",
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
      en: "A production business website for a beauty brand, focused on services, trust, responsive presentation and public deployment.",
      pl: "Produkcyjna strona firmowa dla marki beauty, skupiona na usługach, zaufaniu, responsywnej prezentacji i publicznym wdrożeniu.",
    },
    description: {
      en: "Aurora Beauty is a production business website project created for the beauty industry. It is deployed under a dedicated subdomain, connected to a public source repository and presented as a complete case study focused on service clarity, trust-building sections, responsive layout and consistent visual direction.",
      pl: "Aurora Beauty to produkcyjny projekt strony firmowej dla branży beauty. Jest wdrożony pod dedykowaną subdomeną, połączony z publicznym repozytorium i zaprezentowany jako kompletne case study skupione na czytelności usług, sekcjach budujących zaufanie, responsywnym layoucie i spójnym kierunku wizualnym.",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Static Export",
      "Cloudflare Pages",
    ],
    highlights: {
      en: [
        "Production deployment under aurora.zandeckidev.pl",
        "Public GitHub source repository",
        "Service-focused business website structure",
        "Responsive layout for mobile and desktop",
      ],
      pl: [
        "Produkcyjne wdrożenie pod aurora.zandeckidev.pl",
        "Publiczne repozytorium źródłowe na GitHubie",
        "Struktura strony firmowej skupiona na usługach",
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
    technicalDecisions: {
      en: [
        "The page structure prioritizes services, trust signals and clear conversion paths.",
        "Reusable sections keep the visual direction consistent across the full business website.",
        "Image assets are integrated to support the brand mood without overwhelming the layout.",
        "The project is deployed as a production-ready static website under a dedicated subdomain.",
      ],
      pl: [
        "Struktura strony priorytetyzuje usługi, elementy zaufania i czytelne ścieżki konwersji.",
        "Sekcje wielokrotnego użytku utrzymują spójny kierunek wizualny na całej stronie firmowej.",
        "Assety graficzne wspierają charakter marki bez przeciążania layoutu.",
        "Projekt jest wdrożony jako produkcyjna strona statyczna pod dedykowaną subdomeną.",
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
        "Use the live deployment as the main case study reference.",
        "Add real production screenshots later if the visual preview should be replaced.",
        "Extend the business website with additional sections if the service scope grows.",
      ],
      pl: [
        "Używać wdrożenia live jako głównego odniesienia w case study.",
        "Dodać realne screenshoty produkcyjne później, jeśli preview wizualne ma zostać zastąpione.",
        "Rozszerzyć stronę firmową o kolejne sekcje, jeśli zakres usług będzie się rozwijał.",
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
          en: "Production deployment",
          pl: "Deployment produkcyjny",
        },
        description: {
          en: "The final phase connected the site to a dedicated production subdomain and public source repository.",
          pl: "Końcowy etap połączył stronę z dedykowaną subdomeną produkcyjną i publicznym repozytorium źródłowym.",
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
    liveUrl: "https://aurora.zandeckidev.pl",
    sourceUrl: "https://github.com/PiotrZandecki/aurora-beauty-site",
    embedUrl: "https://aurora.zandeckidev.pl",
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
    technicalDecisions: {
      en: [
        "Localized routing separates Polish and English content while keeping the page structure consistent.",
        "Dynamic project routes make the case study system scalable for additional projects.",
        "Content, configuration, UI components and routing are separated to improve maintainability.",
        "Production setup includes static export, SEO metadata, sitemap, robots, manifest and deployment checks.",
      ],
      pl: [
        "Lokalizowany routing oddziela treści polskie i angielskie przy zachowaniu spójnej struktury stron.",
        "Dynamiczne trasy projektów pozwalają skalować system case studies o kolejne realizacje.",
        "Treść, konfiguracja, komponenty UI i routing są oddzielone, aby poprawić utrzymywalność projektu.",
        "Konfiguracja produkcyjna obejmuje statyczny export, metadata SEO, sitemapę, robots, manifest i kontrole deploymentu.",
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
        "Add live demo for Private Space under a dedicated subdomain.",
        "Continue adding new frontend projects as separate case studies.",
      ],
      pl: [
        "Zastąpić zaprojektowane preview prawdziwymi screenshotami produkcyjnymi tam, gdzie będą dostępne.",
        "Dodać live demo dla Private Space pod dedykowaną subdomeną.",
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
