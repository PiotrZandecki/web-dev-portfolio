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
      en: "Prepared for future deployment and repository connection.",
      pl: "Przygotowane pod przyszłe wdrożenie i podpięcie repozytorium.",
    },
    releaseDescription: {
      en: "Private Space is currently presented as a technical case study with designed preview assets. The portfolio structure is ready for live and source links once the project is deployed or made public.",
      pl: "Private Space jest aktualnie prezentowane jako techniczne case study z zaprojektowanymi assetami preview. Struktura portfolio jest gotowa na linki live i source po wdrożeniu projektu albo upublicznieniu repozytorium.",
    },
    liveDemo: {
      status: "pending",
      title: {
        en: "Live demo",
        pl: "Wersja live",
      },
      description: {
        en: "A public deployment link has not been connected yet.",
        pl: "Publiczny link do wdrożenia nie został jeszcze podpięty.",
      },
      label: {
        en: "Pending deployment",
        pl: "Oczekuje na wdrożenie",
      },
      notes: {
        en: [
          "The project is ready to receive a future live URL.",
          "The embedded preview area will become active after deployment.",
          "The case study already contains the technical presentation structure.",
        ],
        pl: [
          "Projekt jest gotowy na przyszły adres live.",
          "Osadzony podgląd stanie się aktywny po wdrożeniu.",
          "Case study ma już przygotowaną strukturę prezentacji technicznej.",
        ],
      },
    },
    sourceCode: {
      status: "pending",
      title: {
        en: "Source code",
        pl: "Kod źródłowy",
      },
      description: {
        en: "The public source repository has not been connected yet.",
        pl: "Publiczne repozytorium z kodem nie zostało jeszcze podpięte.",
      },
      label: {
        en: "Repository pending",
        pl: "Repozytorium oczekuje",
      },
      notes: {
        en: [
          "The portfolio has a prepared source code area.",
          "A repository URL can be added later without changing the page layout.",
          "The technical notes already explain the implementation direction.",
        ],
        pl: [
          "Portfolio ma przygotowany obszar na kod źródłowy.",
          "Adres repozytorium można dodać później bez zmiany layoutu strony.",
          "Notatki techniczne opisują już kierunek implementacji.",
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
        en: "Designed preview connected",
        pl: "Zaprojektowany preview podpięty",
      },
      notes: {
        en: [
          "The preview communicates the dashboard-based direction.",
          "It can be replaced with a real screenshot after deployment.",
          "The asset is stored in public project previews.",
        ],
        pl: [
          "Preview komunikuje dashboardowy kierunek projektu.",
          "Można je później zastąpić realnym screenshotem po wdrożeniu.",
          "Asset znajduje się w publicznych preview projektów.",
        ],
      },
    },
    build: {
      command: "npm run build",
      output: "Next.js production build",
      checks: {
        en: [
          "Project can be represented as a static case study.",
          "Preview assets are available from public directory.",
          "Future live/source links can be added through project data.",
        ],
        pl: [
          "Projekt może być prezentowany jako statyczne case study.",
          "Assety preview są dostępne z katalogu public.",
          "Przyszłe linki live/source można dodać przez dane projektu.",
        ],
      },
    },
  },

  "aurora-beauty": {
    releaseTitle: {
      en: "Presented as a completed website case study with pending external links.",
      pl: "Prezentowane jako ukończone case study strony z oczekującymi linkami zewnętrznymi.",
    },
    releaseDescription: {
      en: "Aurora Beauty is presented as a completed business website project. The case study is ready for a future live deployment link and repository link if the source becomes public.",
      pl: "Aurora Beauty jest prezentowane jako ukończony projekt strony firmowej. Case study jest gotowe na przyszły link do wdrożenia i repozytorium, jeśli kod zostanie upubliczniony.",
    },
    liveDemo: {
      status: "pending",
      title: {
        en: "Live demo",
        pl: "Wersja live",
      },
      description: {
        en: "A public live URL has not been connected yet.",
        pl: "Publiczny adres live nie został jeszcze podpięty.",
      },
      label: {
        en: "Live URL pending",
        pl: "Adres live oczekuje",
      },
      notes: {
        en: [
          "The project is marked as completed from a portfolio case study perspective.",
          "The live demo card is prepared for a future deployment.",
          "The current visual preview keeps the project presentable before live publication.",
        ],
        pl: [
          "Projekt jest oznaczony jako ukończony z perspektywy case study w portfolio.",
          "Karta live demo jest przygotowana pod przyszłe wdrożenie.",
          "Aktualny preview wizualny pozwala prezentować projekt przed publikacją live.",
        ],
      },
    },
    sourceCode: {
      status: "pending",
      title: {
        en: "Source code",
        pl: "Kod źródłowy",
      },
      description: {
        en: "The source code is not connected as a public repository.",
        pl: "Kod źródłowy nie jest podpięty jako publiczne repozytorium.",
      },
      label: {
        en: "Source pending",
        pl: "Kod oczekuje",
      },
      notes: {
        en: [
          "The case study explains the structure and implementation focus.",
          "The source area is ready if the repository is made public.",
          "The project can remain portfolio-only if the source is private.",
        ],
        pl: [
          "Case study opisuje strukturę i kierunek implementacji.",
          "Obszar source jest gotowy, jeśli repozytorium zostanie upublicznione.",
          "Projekt może pozostać tylko w portfolio, jeśli kod jest prywatny.",
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
        en: "Preview connected",
        pl: "Preview podpięty",
      },
      notes: {
        en: [
          "The preview communicates the visual direction of the website.",
          "It supports the project card, featured sections and case study.",
          "It can be replaced with a real screenshot later.",
        ],
        pl: [
          "Preview komunikuje kierunek wizualny strony.",
          "Wspiera kartę projektu, sekcje featured i case study.",
          "Może zostać później zastąpiony realnym screenshotem.",
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
          "Future deployment and source links can be attached.",
        ],
        pl: [
          "Responsywna prezentacja jest opisana.",
          "Preview wizualny jest dostępny.",
          "Przyszłe linki deployment/source można podpiąć.",
        ],
      },
    },
  },

  "web-dev-portfolio": {
    releaseTitle: {
      en: "Fully connected live portfolio with source repository.",
      pl: "W pełni podpięte portfolio live z repozytorium źródłowym.",
    },
    releaseDescription: {
      en: "Web Dev Portfolio is the main production project. It has a live Netlify deployment, source repository, designed previews, static export setup and production-oriented technical documentation.",
      pl: "Web Dev Portfolio to główny projekt produkcyjny. Ma wdrożenie live na Netlify, repozytorium źródłowe, zaprojektowane preview, konfigurację statycznego exportu i dokumentację techniczną pod produkcję.",
    },
    liveDemo: {
      status: "connected",
      title: {
        en: "Live demo",
        pl: "Wersja live",
      },
      description: {
        en: "The production deployment is connected and available publicly.",
        pl: "Produkcyjne wdrożenie jest podpięte i publicznie dostępne.",
      },
      label: {
        en: "Live on Netlify",
        pl: "Live na Netlify",
      },
      notes: {
        en: [
          "The project is deployed as a static site.",
          "The live URL is resolved from production environment configuration.",
          "The case study can embed the live site preview.",
        ],
        pl: [
          "Projekt jest wdrożony jako strona statyczna.",
          "Adres live jest rozwiązywany z konfiguracji środowiska produkcyjnego.",
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
        en: "The repository URL is connected through environment configuration.",
        pl: "Adres repozytorium jest podpięty przez konfigurację środowiska.",
      },
      label: {
        en: "Repository connected",
        pl: "Repozytorium podpięte",
      },
      notes: {
        en: [
          "The source link is resolved from environment variables.",
          "The repository documents the project structure and deployment workflow.",
          "The source card is visible in the technical project sections.",
        ],
        pl: [
          "Link do kodu jest rozwiązywany ze zmiennych środowiskowych.",
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
        en: "Preview connected",
        pl: "Preview podpięty",
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
          "Static export for Netlify.",
          "Sitemap, robots, manifest and Open Graph routes.",
        ],
        pl: [
          "Kontrola ESLint przed wdrożeniem.",
          "Build produkcyjny Next.js.",
          "Statyczny export pod Netlify.",
          "Sitemap, robots, manifest i trasy Open Graph.",
        ],
      },
    },
  },
};
