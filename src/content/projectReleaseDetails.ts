import { Locale } from "@/types/locale";

type LocalizedText = Record<Locale, string>;
type LocalizedList = Record<Locale, string[]>;

export type ReleaseStatus = "connected" | "prepared" | "pending";

export type ProjectReleaseBlock = {
  status: ReleaseStatus;
  title: LocalizedText;
  description: LocalizedText;
  label: LocalizedText;
  notes: LocalizedList;
};

export type ProjectBuildBlock = {
  command: string;
  output: string;
  checks: LocalizedList;
};

export type ProjectReleaseDetails = {
  releaseTitle: LocalizedText;
  releaseDescription: LocalizedText;
  liveDemo: ProjectReleaseBlock;
  sourceCode: ProjectReleaseBlock;
  visualPreview: ProjectReleaseBlock;
  build: ProjectBuildBlock;
};

export const projectReleaseDetails: Record<string, ProjectReleaseDetails> = {
  "private-space": {
    releaseTitle: {
      en: "Prepared as a portfolio case study with a planned live demo.",
      pl: "Przygotowane jako case study portfolio z planowanym live demo.",
    },
    releaseDescription: {
      en: "Private Space is currently presented as a technical case study with designed preview assets. The project is ready for a future public demo under a dedicated subdomain and can receive source links when the repository is prepared for publication.",
      pl: "Private Space jest aktualnie prezentowane jako techniczne case study z zaprojektowanymi assetami preview. Projekt jest gotowy na przyszłe publiczne demo pod dedykowaną subdomeną i może otrzymać link do kodu, gdy repozytorium będzie przygotowane do publikacji.",
    },
    liveDemo: {
      status: "prepared",
      title: {
        en: "Live demo",
        pl: "Wersja live",
      },
      description: {
        en: "A public live demo is planned as the next release step.",
        pl: "Publiczne live demo jest zaplanowane jako kolejny etap release.",
      },
      label: {
        en: "Planned demo",
        pl: "Demo planowane",
      },
      notes: {
        en: [
          "The project is ready to receive a future live URL.",
          "A dedicated subdomain can be connected when the demo is published.",
          "The case study already presents the technical structure and product direction.",
        ],
        pl: [
          "Projekt jest gotowy na przyszły adres live.",
          "Dedykowana subdomena może zostać podłączona po publikacji demo.",
          "Case study już prezentuje strukturę techniczną i kierunek produktu.",
        ],
      },
    },
    sourceCode: {
      status: "prepared",
      title: {
        en: "Source code",
        pl: "Kod źródłowy",
      },
      description: {
        en: "The source area is prepared for a future public repository link.",
        pl: "Obszar kodu źródłowego jest przygotowany pod przyszły link do publicznego repozytorium.",
      },
      label: {
        en: "Repository planned",
        pl: "Repozytorium planowane",
      },
      notes: {
        en: [
          "The portfolio has a prepared source code area.",
          "A repository URL can be added later without changing the page layout.",
          "The implementation notes already explain the technical direction.",
        ],
        pl: [
          "Portfolio ma przygotowany obszar na kod źródłowy.",
          "Adres repozytorium można dodać później bez zmiany layoutu strony.",
          "Notatki implementacyjne opisują już kierunek techniczny.",
        ],
      },
    },
    visualPreview: {
      status: "connected",
      title: {
        en: "Visual preview",
        pl: "Podgląd wizualny",
      },
      description: {
        en: "A designed SVG preview is connected for portfolio presentation.",
        pl: "Zaprojektowany podgląd SVG jest podpięty do prezentacji w portfolio.",
      },
      label: {
        en: "Preview available",
        pl: "Preview dostępne",
      },
      notes: {
        en: [
          "The preview communicates the dashboard-based direction.",
          "It can be replaced with a real screenshot after public demo deployment.",
          "The asset is stored in the public project previews directory.",
        ],
        pl: [
          "Preview komunikuje dashboardowy kierunek projektu.",
          "Można je później zastąpić realnym screenshotem po wdrożeniu publicznego demo.",
          "Asset znajduje się w publicznym katalogu preview projektów.",
        ],
      },
    },
    build: {
      command: "npm run build",
      output: "Next.js production build",
      checks: {
        en: [
          "Project can be represented as a static case study.",
          "Preview assets are available from the public directory.",
          "Future live and source links can be added through project data.",
        ],
        pl: [
          "Projekt może być prezentowany jako statyczne case study.",
          "Assety preview są dostępne z katalogu public.",
          "Przyszłe linki live i source można dodać przez dane projektu.",
        ],
      },
    },
  },

  "aurora-beauty": {
    releaseTitle: {
      en: "Production business website connected to live and source links.",
      pl: "Produkcyjna strona firmowa z podpiętym live i kodem źródłowym.",
    },
    releaseDescription: {
      en: "Aurora Beauty is now deployed under a dedicated subdomain, connected to a public GitHub repository and available as an embedded live preview inside the portfolio case study.",
      pl: "Aurora Beauty jest teraz wdrożona pod dedykowaną subdomeną, połączona z publicznym repozytorium GitHub i dostępna jako osadzony podgląd live w case study portfolio.",
    },
    liveDemo: {
      status: "connected",
      title: {
        en: "Live demo",
        pl: "Wersja live",
      },
      description: {
        en: "The production deployment is connected and publicly available under the aurora.zandeckidev.pl subdomain.",
        pl: "Produkcyjne wdrożenie jest podpięte i publicznie dostępne pod subdomeną aurora.zandeckidev.pl.",
      },
      label: {
        en: "Live on Cloudflare Pages",
        pl: "Live na Cloudflare Pages",
      },
      notes: {
        en: [
          "The project is deployed as a production business website.",
          "The live URL points to aurora.zandeckidev.pl.",
          "The case study can embed the live site directly from the subdomain.",
        ],
        pl: [
          "Projekt jest wdrożony jako produkcyjna strona firmowa.",
          "Adres live prowadzi do aurora.zandeckidev.pl.",
          "Case study może osadzić stronę live bezpośrednio z subdomeny.",
        ],
      },
    },
    sourceCode: {
      status: "connected",
      title: {
        en: "Source code",
        pl: "Kod źródłowy",
      },
      description: {
        en: "The public source repository is connected and available from the project links.",
        pl: "Publiczne repozytorium źródłowe jest podpięte i dostępne z linków projektu.",
      },
      label: {
        en: "Repository connected",
        pl: "Repozytorium podpięte",
      },
      notes: {
        en: [
          "The source link points to the Aurora Beauty GitHub repository.",
          "The repository documents the business website structure and implementation.",
          "The source card is now active in the technical project sections.",
        ],
        pl: [
          "Link do kodu prowadzi do repozytorium GitHub projektu Aurora Beauty.",
          "Repozytorium dokumentuje strukturę strony firmowej i implementację.",
          "Karta source jest teraz aktywna w technicznych sekcjach projektu.",
        ],
      },
    },
    visualPreview: {
      status: "connected",
      title: {
        en: "Visual preview",
        pl: "Podgląd wizualny",
      },
      description: {
        en: "A designed visual preview remains connected, while the live deployment is now available as the primary project reference.",
        pl: "Zaprojektowany podgląd wizualny pozostaje podpięty, a wdrożenie live jest teraz głównym odniesieniem dla projektu.",
      },
      label: {
        en: "Preview and live connected",
        pl: "Preview i live podpięte",
      },
      notes: {
        en: [
          "The designed preview supports project cards and visual context.",
          "The embedded live preview can reference the deployed production site.",
          "Production screenshots can still be added later if needed.",
        ],
        pl: [
          "Zaprojektowany preview wspiera karty projektów i kontekst wizualny.",
          "Osadzony podgląd live może odwoływać się do wdrożonej strony produkcyjnej.",
          "Screenshoty produkcyjne nadal można dodać później, jeśli będą potrzebne.",
        ],
      },
    },
    build: {
      command: "npm run build",
      output: "Production static website build",
      checks: {
        en: [
          "Production URL is connected.",
          "Public GitHub repository is connected.",
          "Embedded live preview can load from the dedicated subdomain.",
        ],
        pl: [
          "Adres produkcyjny jest podpięty.",
          "Publiczne repozytorium GitHub jest podpięte.",
          "Osadzony podgląd live może ładować się z dedykowanej subdomeny.",
        ],
      },
    },
  },

  "web-dev-portfolio": {
    releaseTitle: {
      en: "Live production portfolio connected to a custom domain.",
      pl: "Produkcyjne portfolio live podpięte pod własną domenę.",
    },
    releaseDescription: {
      en: "Web Dev Portfolio is the main production project. It is deployed on Cloudflare Pages, connected to zandeckidev.pl, linked to its source repository and prepared as a maintainable hub for future frontend case studies.",
      pl: "Web Dev Portfolio to główny projekt produkcyjny. Jest wdrożone na Cloudflare Pages, podpięte do zandeckidev.pl, połączone z repozytorium źródłowym i przygotowane jako utrzymywalny hub dla przyszłych frontendowych case studies.",
    },
    liveDemo: {
      status: "connected",
      title: {
        en: "Live demo",
        pl: "Wersja live",
      },
      description: {
        en: "The production deployment is connected and publicly available under a custom domain.",
        pl: "Produkcyjne wdrożenie jest podpięte i publicznie dostępne pod własną domeną.",
      },
      label: {
        en: "Live on Cloudflare Pages",
        pl: "Live na Cloudflare Pages",
      },
      notes: {
        en: [
          "The project is deployed as a static site.",
          "The live URL is connected to zandeckidev.pl.",
          "The case study can embed the live site preview.",
        ],
        pl: [
          "Projekt jest wdrożony jako strona statyczna.",
          "Adres live jest podpięty do zandeckidev.pl.",
          "Case study może osadzić podgląd strony live.",
        ],
      },
    },
    sourceCode: {
      status: "connected",
      title: {
        en: "Source code",
        pl: "Kod źródłowy",
      },
      description: {
        en: "The public source repository is connected and available from the project links.",
        pl: "Publiczne repozytorium źródłowe jest podpięte i dostępne z linków projektu.",
      },
      label: {
        en: "Repository connected",
        pl: "Repozytorium podpięte",
      },
      notes: {
        en: [
          "The source link points to the GitHub repository.",
          "The repository documents the project structure and deployment workflow.",
          "The source card is visible in the technical project sections.",
        ],
        pl: [
          "Link do kodu prowadzi do repozytorium GitHub.",
          "Repozytorium dokumentuje strukturę projektu i workflow deploymentu.",
          "Karta source jest widoczna w technicznych sekcjach projektu.",
        ],
      },
    },
    visualPreview: {
      status: "connected",
      title: {
        en: "Visual preview",
        pl: "Podgląd wizualny",
      },
      description: {
        en: "A portfolio-specific designed visual preview is connected.",
        pl: "Zaprojektowany preview dla portfolio jest podpięty.",
      },
      label: {
        en: "Preview available",
        pl: "Preview dostępne",
      },
      notes: {
        en: [
          "The preview appears in project cards and case study sections.",
          "It can be replaced with a real production screenshot later.",
          "The asset is part of the public project preview system.",
        ],
        pl: [
          "Preview pojawia się w kartach projektów i sekcjach case study.",
          "Może zostać później zastąpione realnym screenshotem produkcyjnym.",
          "Asset jest częścią publicznego systemu preview projektów.",
        ],
      },
    },
    build: {
      command: "npm run build",
      output: "out",
      checks: {
        en: [
          "ESLint check before deployment.",
          "Next.js production build.",
          "Static export for Cloudflare Pages.",
          "Sitemap, robots, manifest and Open Graph routes.",
        ],
        pl: [
          "Kontrola ESLint przed wdrożeniem.",
          "Build produkcyjny Next.js.",
          "Statyczny export pod Cloudflare Pages.",
          "Sitemap, robots, manifest i trasy Open Graph.",
        ],
      },
    },
  },
};
