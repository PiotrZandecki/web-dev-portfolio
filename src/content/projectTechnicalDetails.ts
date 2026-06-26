import { Locale } from "@/types/locale";

type LocalizedText = Record<Locale, string>;
type LocalizedList = Record<Locale, string[]>;

export type ProjectTechnicalArea = {
  title: LocalizedText;
  description: LocalizedText;
  points: LocalizedList;
};

export type ProjectTestingArea = {
  title: LocalizedText;
  description: LocalizedText;
  checks: LocalizedList;
};

export type ProjectTechnicalDetails = {
  implementationTitle: LocalizedText;
  implementationDescription: LocalizedText;
  implementationAreas: ProjectTechnicalArea[];
  testingTitle: LocalizedText;
  testingDescription: LocalizedText;
  testingAreas: ProjectTestingArea[];
};

export const projectTechnicalDetails: Record<string, ProjectTechnicalDetails> =
  {
    "private-space": {
      implementationTitle: {
        en: "A modular productivity app built around local data.",
        pl: "Modułowa aplikacja produktywności oparta o dane lokalne.",
      },
      implementationDescription: {
        en: "Private Space is structured around separate feature areas for notes, lists and plans. The technical focus is local persistence, predictable UI updates and reusable dashboard components.",
        pl: "Private Space jest zbudowane wokół oddzielnych obszarów funkcjonalnych dla notatek, list i planów. Techniczny nacisk położony jest na lokalny zapis danych, przewidywalne aktualizacje UI i reusable komponenty dashboardu.",
      },
      implementationAreas: [
        {
          title: {
            en: "Feature-based structure",
            pl: "Struktura oparta o funkcje",
          },
          description: {
            en: "The application is split into practical modules instead of one large page, making it easier to extend and debug.",
            pl: "Aplikacja jest podzielona na praktyczne moduły zamiast jednej dużej strony, co ułatwia rozwój i debugowanie.",
          },
          points: {
            en: [
              "Separate notes, lists and plans areas",
              "Reusable page headers and cards",
              "Dashboard-first navigation pattern",
            ],
            pl: [
              "Oddzielne obszary notatek, list i planów",
              "Reusable nagłówki stron i karty",
              "Nawigacja oparta o dashboard",
            ],
          },
        },
        {
          title: {
            en: "Local persistence",
            pl: "Lokalny zapis danych",
          },
          description: {
            en: "The project uses browser storage to keep user data available between sessions without requiring a backend.",
            pl: "Projekt używa pamięci przeglądarki, żeby zachować dane użytkownika między sesjami bez konieczności backendu.",
          },
          points: {
            en: [
              "Local Storage based persistence",
              "Client-side data synchronization",
              "Safer parsing and fallback states",
            ],
            pl: [
              "Zapis oparty o Local Storage",
              "Synchronizacja danych po stronie klienta",
              "Bezpieczniejsze parsowanie i stany fallback",
            ],
          },
        },
        {
          title: {
            en: "UX refinement",
            pl: "Dopracowanie UX",
          },
          description: {
            en: "The interface was improved with priority indicators, sorting behavior and cleaner loading states.",
            pl: "Interfejs został dopracowany przez wskaźniki priorytetów, sortowanie i czystsze stany ładowania.",
          },
          points: {
            en: [
              "Priority-based list behavior",
              "Reduced UI flashing",
              "Confirmation patterns for sensitive actions",
            ],
            pl: [
              "Zachowanie list oparte o priorytety",
              "Ograniczone miganie UI",
              "Potwierdzenia dla wrażliwych akcji",
            ],
          },
        },
      ],
      testingTitle: {
        en: "Checked as an interactive local-first app.",
        pl: "Sprawdzane jako interaktywna aplikacja local-first.",
      },
      testingDescription: {
        en: "The main review focus is whether data stays consistent, UI states are predictable and core flows still work after refresh.",
        pl: "Główny nacisk testów to spójność danych, przewidywalność stanów UI i działanie głównych flow po odświeżeniu strony.",
      },
      testingAreas: [
        {
          title: {
            en: "Data behavior",
            pl: "Zachowanie danych",
          },
          description: {
            en: "Core user actions should persist and remain stable after reload.",
            pl: "Główne akcje użytkownika powinny zapisywać się i pozostawać stabilne po odświeżeniu.",
          },
          checks: {
            en: [
              "Create, edit and delete items",
              "Refresh page after changes",
              "Verify empty and loading states",
            ],
            pl: [
              "Tworzenie, edycja i usuwanie elementów",
              "Odświeżenie strony po zmianach",
              "Sprawdzenie pustych i ładowanych stanów",
            ],
          },
        },
        {
          title: {
            en: "Interface flow",
            pl: "Flow interfejsu",
          },
          description: {
            en: "Navigation and dashboard sections should remain clear across desktop and mobile views.",
            pl: "Nawigacja i sekcje dashboardu powinny pozostać czytelne na desktopie i mobile.",
          },
          checks: {
            en: [
              "Desktop layout review",
              "Mobile layout review",
              "Module navigation check",
            ],
            pl: [
              "Sprawdzenie layoutu desktopowego",
              "Sprawdzenie layoutu mobilnego",
              "Kontrola nawigacji między modułami",
            ],
          },
        },
      ],
    },

    "aurora-beauty": {
      implementationTitle: {
        en: "A service-oriented business website with visual consistency.",
        pl: "Strona firmowa nastawiona na usługi i spójność wizualną.",
      },
      implementationDescription: {
        en: "Aurora Beauty is structured as a polished business website for a beauty brand. The focus is presentation, trust-building sections, responsive layout and consistent visual direction.",
        pl: "Aurora Beauty jest zbudowana jako dopracowana strona firmowa dla marki beauty. Nacisk położony jest na prezentację, sekcje budujące zaufanie, responsywny layout i spójny kierunek wizualny.",
      },
      implementationAreas: [
        {
          title: {
            en: "Business page structure",
            pl: "Struktura strony firmowej",
          },
          description: {
            en: "The page is organized around sections that support business presentation and user trust.",
            pl: "Strona jest uporządkowana wokół sekcji wspierających prezentację firmy i zaufanie użytkownika.",
          },
          points: {
            en: [
              "Hero section for first impression",
              "Service-focused content blocks",
              "Testimonials and trust areas",
            ],
            pl: [
              "Hero section pod pierwsze wrażenie",
              "Bloki treści skupione na usługach",
              "Opinie i obszary budujące zaufanie",
            ],
          },
        },
        {
          title: {
            en: "Responsive presentation",
            pl: "Responsywna prezentacja",
          },
          description: {
            en: "The layout is prepared to communicate clearly on both mobile and desktop devices.",
            pl: "Layout jest przygotowany tak, żeby komunikować treści czytelnie na mobile i desktopie.",
          },
          points: {
            en: [
              "Mobile-first spacing adjustments",
              "Readable service cards",
              "Clear visual hierarchy",
            ],
            pl: [
              "Dostosowanie spacingu pod mobile",
              "Czytelne karty usług",
              "Wyraźna hierarchia wizualna",
            ],
          },
        },
        {
          title: {
            en: "Visual direction",
            pl: "Kierunek wizualny",
          },
          description: {
            en: "The design uses a consistent soft visual language suitable for a beauty-related brand.",
            pl: "Design używa spójnego, miękkiego języka wizualnego pasującego do marki beauty.",
          },
          points: {
            en: [
              "Soft color direction",
              "Consistent image style",
              "Business-friendly layout rhythm",
            ],
            pl: [
              "Miękki kierunek kolorystyczny",
              "Spójny styl grafik",
              "Rytm layoutu pasujący do strony firmowej",
            ],
          },
        },
      ],
      testingTitle: {
        en: "Checked as a static business website.",
        pl: "Sprawdzane jako statyczna strona firmowa.",
      },
      testingDescription: {
        en: "The main review focus is responsive layout, visual consistency, content readability and production build stability.",
        pl: "Główny nacisk testów to responsywność, spójność wizualna, czytelność treści i stabilność produkcyjnego builda.",
      },
      testingAreas: [
        {
          title: {
            en: "Responsive layout",
            pl: "Responsywny layout",
          },
          description: {
            en: "The website should remain polished and readable across screen sizes.",
            pl: "Strona powinna pozostać dopracowana i czytelna na różnych rozmiarach ekranu.",
          },
          checks: {
            en: [
              "Hero section on mobile",
              "Service cards on desktop",
              "Spacing between content sections",
            ],
            pl: [
              "Hero section na mobile",
              "Karty usług na desktopie",
              "Odstępy między sekcjami treści",
            ],
          },
        },
        {
          title: {
            en: "Production readiness",
            pl: "Gotowość produkcyjna",
          },
          description: {
            en: "The page should build successfully and be ready for deployment once final links are connected.",
            pl: "Strona powinna budować się poprawnie i być gotowa do wdrożenia po podpięciu finalnych linków.",
          },
          checks: {
            en: ["Lint check", "Production build", "Final asset review"],
            pl: [
              "Kontrola lint",
              "Build produkcyjny",
              "Finalny przegląd assetów",
            ],
          },
        },
      ],
    },

    "web-dev-portfolio": {
      implementationTitle: {
        en: "A scalable bilingual portfolio and project hub.",
        pl: "Skalowalne dwujęzyczne portfolio i hub projektów.",
      },
      implementationDescription: {
        en: "Web Dev Portfolio is built as a central project hub with localized routes, project case studies, reusable sections, structured data and static deployment.",
        pl: "Web Dev Portfolio jest zbudowane jako centralny hub projektów z lokalizowanymi trasami, case studies, reusable sekcjami, structured data i statycznym deploymentem.",
      },
      implementationAreas: [
        {
          title: {
            en: "Localized routing",
            pl: "Lokalizowany routing",
          },
          description: {
            en: "The portfolio uses separate Polish and English routes to support bilingual presentation.",
            pl: "Portfolio używa oddzielnych tras polskich i angielskich, żeby wspierać dwujęzyczną prezentację.",
          },
          points: {
            en: [
              "/en and /pl route structure",
              "Language-aware navigation",
              "Localized metadata and content",
            ],
            pl: [
              "Struktura tras /en i /pl",
              "Nawigacja zależna od języka",
              "Lokalizowane metadata i treści",
            ],
          },
        },
        {
          title: {
            en: "Project content model",
            pl: "Model treści projektów",
          },
          description: {
            en: "Project data is stored in content files and reused across cards, case studies, previews and SEO routes.",
            pl: "Dane projektów są przechowywane w plikach contentowych i używane w kartach, case studies, podglądach i trasach SEO.",
          },
          points: {
            en: [
              "Reusable project data",
              "Dynamic project pages",
              "Shared visual previews",
            ],
            pl: [
              "Reusable dane projektów",
              "Dynamiczne podstrony projektów",
              "Wspólne preview wizualne",
            ],
          },
        },
        {
          title: {
            en: "Static deployment",
            pl: "Statyczny deployment",
          },
          description: {
            en: "The project is configured for static export and deployed through Netlify.",
            pl: "Projekt jest skonfigurowany pod statyczny export i wdrożony przez Netlify.",
          },
          points: {
            en: [
              "Static output",
              "Sitemap and robots",
              "Open Graph image and manifest",
            ],
            pl: [
              "Statyczny output",
              "Sitemap i robots",
              "Open Graph image i manifest",
            ],
          },
        },
      ],
      testingTitle: {
        en: "Checked as a production portfolio site.",
        pl: "Sprawdzane jako produkcyjna strona portfolio.",
      },
      testingDescription: {
        en: "The main review focus is route coverage, language switching, project pages, SEO routes and production deployment.",
        pl: "Główny nacisk testów to pokrycie tras, przełączanie języka, podstrony projektów, trasy SEO i produkcyjny deployment.",
      },
      testingAreas: [
        {
          title: {
            en: "Route coverage",
            pl: "Pokrycie tras",
          },
          description: {
            en: "All main pages should work in Polish and English after static export.",
            pl: "Wszystkie główne strony powinny działać po polsku i angielsku po statycznym eksporcie.",
          },
          checks: {
            en: [
              "/en and /pl homepage",
              "Projects, services, about, stack and contact pages",
              "Dynamic project case study routes",
            ],
            pl: [
              "Strona główna /en i /pl",
              "Strony projects, services, about, stack i contact",
              "Dynamiczne trasy case studies",
            ],
          },
        },
        {
          title: {
            en: "Production checks",
            pl: "Kontrole produkcyjne",
          },
          description: {
            en: "The project should pass local checks before being pushed and deployed.",
            pl: "Projekt powinien przechodzić lokalne kontrole przed pushem i deploymentem.",
          },
          checks: {
            en: [
              "ESLint",
              "Next production build",
              "Netlify deploy verification",
            ],
            pl: [
              "ESLint",
              "Build produkcyjny Next",
              "Weryfikacja deploymentu Netlify",
            ],
          },
        },
        {
          title: {
            en: "SEO and metadata",
            pl: "SEO i metadata",
          },
          description: {
            en: "SEO routes and metadata should stay aligned with the deployed production URL.",
            pl: "Trasy SEO i metadata powinny być zgodne z produkcyjnym adresem strony.",
          },
          checks: {
            en: ["Sitemap", "Robots", "Open Graph image"],
            pl: ["Sitemap", "Robots", "Open Graph image"],
          },
        },
      ],
    },
  };
