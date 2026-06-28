import { Locale } from "@/types/locale";

type LocalizedText = Record<Locale, string>;
type LocalizedList = Record<Locale, string[]>;

export type TechStackGroup = {
  title: LocalizedText;
  description: LocalizedText;
  tools: string[];
  outcomes: LocalizedList;
};

export const techStackGroups: TechStackGroup[] = [
  {
    title: {
      en: "Frontend framework",
      pl: "Framework frontendowy",
    },
    description: {
      en: "The core application layer used to build routes, pages, metadata and production-ready frontend structure.",
      pl: "Główna warstwa aplikacji używana do budowania tras, stron, metadanych i produkcyjnej struktury frontendu.",
    },
    tools: ["Next.js", "React", "App Router"],
    outcomes: {
      en: [
        "Static and dynamic page structure",
        "Reusable route-based architecture",
        "SEO-ready metadata and routing",
      ],
      pl: [
        "Statyczna i dynamiczna struktura stron",
        "Architektura oparta o routing wielokrotnego użytku",
        "Routing i metadane przygotowane pod SEO",
      ],
    },
  },
  {
    title: {
      en: "Type safety",
      pl: "Bezpieczeństwo typów",
    },
    description: {
      en: "TypeScript keeps content models, props and project structures predictable as the codebase expands and new sections are added.",
      pl: "TypeScript pomaga utrzymać przewidywalne modele treści, propsy i strukturę projektu podczas rozbudowy kodu oraz dodawania kolejnych sekcji.",
    },
    tools: ["TypeScript", "Typed content models", "Component props"],
    outcomes: {
      en: [
        "Safer refactoring",
        "Clearer component contracts",
        "Better scalability for future pages",
      ],
      pl: [
        "Bezpieczniejszy refactoring",
        "Czytelniejsze kontrakty komponentów",
        "Lepsza skalowalność pod przyszłe strony",
      ],
    },
  },
  {
    title: {
      en: "Styling and layout",
      pl: "Styling i layout",
    },
    description: {
      en: "A utility-first styling workflow used to create responsive layouts, consistent spacing and reusable visual patterns.",
      pl: "Utility-first workflow używany do tworzenia responsywnych layoutów, spójnych odstępów i powtarzalnych wzorców wizualnych.",
    },
    tools: ["Tailwind CSS", "Responsive design", "Dark UI"],
    outcomes: {
      en: [
        "Consistent visual system",
        "Fast layout iteration",
        "Mobile and desktop support",
      ],
      pl: [
        "Spójny system wizualny",
        "Szybka iteracja layoutu",
        "Wsparcie mobile i desktop",
      ],
    },
  },
  {
    title: {
      en: "Content and localization",
      pl: "Treści i lokalizacja",
    },
    description: {
      en: "The site is structured around bilingual content, localized routes and reusable translation dictionaries.",
      pl: "Strona jest oparta o dwujęzyczne treści, lokalizowane trasy i słowniki tłumaczeń wielokrotnego użytku.",
    },
    tools: ["PL / EN", "Localized routes", "Content files"],
    outcomes: {
      en: [
        "Polish and English page versions",
        "Reusable localized content",
        "Scalable multilingual structure",
      ],
      pl: [
        "Polskie i angielskie wersje stron",
        "Lokalizowane treści wielokrotnego użytku",
        "Skalowalna struktura wielojęzyczna",
      ],
    },
  },
  {
    title: {
      en: "Deployment and production",
      pl: "Deployment i produkcja",
    },
    description: {
      en: "The project is prepared for static export, Cloudflare Pages deployment, SEO routes and production checks.",
      pl: "Projekt jest przygotowany pod statyczny export, deployment na Cloudflare Pages, trasy SEO i kontrole produkcyjne.",
    },
    tools: ["Cloudflare Pages", "Static export", "GitHub", "Sitemap", "Robots"],
    outcomes: {
      en: [
        "Deployment-ready output",
        "Public production URL",
        "Repeatable build workflow",
      ],
      pl: [
        "Output gotowy do wdrożenia",
        "Publiczny adres produkcyjny",
        "Powtarzalny workflow builda",
      ],
    },
  },
  {
    title: {
      en: "Quality workflow",
      pl: "Workflow jakościowy",
    },
    description: {
      en: "A practical workflow based on linting, build checks, commits, deployment verification and release documentation.",
      pl: "Praktyczny workflow oparty o lint, build, commity, weryfikację deploymentu i dokumentację release.",
    },
    tools: ["ESLint", "npm scripts", "Git", "CHANGELOG"],
    outcomes: {
      en: [
        "Cleaner code before deployment",
        "Stable local checkpoints",
        "Documented release history",
      ],
      pl: [
        "Czystszy kod przed deploymentem",
        "Stabilne lokalne checkpointy",
        "Udokumentowana historia release",
      ],
    },
  },
];
