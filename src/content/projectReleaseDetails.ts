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
      en: "Presented as a completed website case study with a planned live preview.",
      pl: "Prezentowane jako ukończone case study strony z planowanym live preview.",
    },
    releaseDescription: {
      en: "Aurora Beauty is presented as a completed business website project. The case study is ready for a future live preview under a dedicated subdomain and can receive a source repository link if the code becomes public.",
      pl: "Aurora Beauty jest prezentowane jako ukończony projekt strony firmowej. Case study jest gotowe na przyszły live preview pod dedykowaną subdomeną i może otrzymać link do repozytorium, jeśli kod zostanie upubliczniony.",
    },
    liveDemo: {
      status: "prepared",
      title: {
        en: "Live demo",
        pl: "Wersja live",
      },
      description: {
        en: "A public live preview is planned for a dedicated project subdomain.",
        pl: "Publiczny live preview jest zaplanowany pod dedykowaną subdomeną projektu.",
      },
      label: {
        en: "Live preview planned",
        pl: "Live preview planowane",
      },
      notes: {
        en: [
          "The project is completed from a portfolio case study perspective.",
          "The live demo area is prepared for a future deployment.",
          "The current visual preview keeps the project presentable before live publication.",
        ],
        pl: [
          "Projekt jest ukończony z perspektywy case study w portfolio.",
          "Obszar live demo jest przygotowany pod przyszłe wdrożenie.",
          "Aktualny preview wizualny pozwala prezentować projekt przed publikacją live.",
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
        en: "The source area is prepared if the repository becomes public later.",
        pl: "Obszar kodu źródłowego jest przygotowany na wypadek późniejszej publikacji repozytorium.",
      },
      label: {
        en: "Source prepared",
        pl: "Kod przygotowany",
      },
      notes: {
        en: [
          "The case study explains the structure and implementation focus.",
          "The source area is ready if the repository is made public.",
          "The project can remain portfolio-only if the source stays private.",
        ],
        pl: [
          "Case study opisuje strukturę i kierunek implementacji.",
          "Obszar source jest gotowy, jeśli repozytorium zostanie upublicznione.",
          "Projekt może pozostać tylko w portfolio, jeśli kod zostanie prywatny.",
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
        en: "A designed visual preview is connected and matches the beauty-business direction.",
        pl: "Zaprojektowany podgląd wizualny jest podpięty i pasuje do kierunku strony beauty.",
      },
      label: {
        en: "Preview available",
        pl: "Preview dostępne",
      },
      notes: {
        en: [
          "The preview communicates the visual direction of the website.",
          "It supports the project card, featured sections and case study.",
          "It can be replaced with a real production screenshot later.",
        ],
        pl: [
          "Preview komunikuje kierunek wizualny strony.",
          "Wspiera kartę projektu, sekcje featured i case study.",
          "Może zostać później zastąpiony realnym screenshotem produkcyjnym.",
        ],
      },
    },
    build: {
      command: "npm run build",
      output: "Static business website build",
      checks: {
        en: [
          "Responsive presentation is documented.",
          "Visual preview is available.",
          "Future deployment and source links can be attached through project data.",
        ],
        pl: [
          "Responsywna prezentacja jest opisana.",
          "Preview wizualny jest dostępny.",
          "Przyszłe linki deployment i source można podpiąć przez dane projektu.",
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
