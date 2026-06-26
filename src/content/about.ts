import { Locale } from "@/types/locale";

type LocalizedText = Record<Locale, string>;

export type AboutHighlight = {
  label: LocalizedText;
  value: string;
};

export type AboutPrinciple = {
  title: LocalizedText;
  description: LocalizedText;
};

export const aboutHighlights: AboutHighlight[] = [
  {
    label: {
      en: "Main stack",
      pl: "Główny stack",
    },
    value: "Next.js",
  },
  {
    label: {
      en: "Languages",
      pl: "Języki",
    },
    value: "PL / EN",
  },
  {
    label: {
      en: "Focus",
      pl: "Kierunek",
    },
    value: "Frontend",
  },
  {
    label: {
      en: "Delivery",
      pl: "Realizacja",
    },
    value: "Static / Netlify",
  },
];

export const aboutPrinciples: AboutPrinciple[] = [
  {
    title: {
      en: "Clear structure first",
      pl: "Najpierw czytelna struktura",
    },
    description: {
      en: "Every project starts with a simple content and layout structure so the interface is easier to understand, build and maintain.",
      pl: "Każdy projekt zaczyna się od prostej struktury treści i layoutu, dzięki czemu interfejs jest łatwiejszy do zrozumienia, zbudowania i utrzymania.",
    },
  },
  {
    title: {
      en: "Reusable components",
      pl: "Komponenty wielokrotnego użytku",
    },
    description: {
      en: "The interface is built from reusable sections and components, which makes it easier to expand the project over time.",
      pl: "Interfejs jest budowany z sekcji i komponentów wielokrotnego użytku, co ułatwia późniejsze rozwijanie projektu.",
    },
  },
  {
    title: {
      en: "Deployment-ready mindset",
      pl: "Myślenie pod wdrożenie",
    },
    description: {
      en: "The goal is not only to make a project look good locally, but also to prepare it for build, deployment, SEO and real public use.",
      pl: "Celem nie jest tylko to, żeby projekt wyglądał dobrze lokalnie, ale też żeby był przygotowany pod build, deployment, SEO i realne publiczne użycie.",
    },
  },
];

export const aboutCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    secondaryDescription: string;
    cardTitle: string;
    cardDescription: string;
  }
> = {
  en: {
    eyebrow: "About Z-TECH",
    title: "A practical frontend-focused approach to web development.",
    description:
      "Z-TECH is a web development portfolio and service-oriented project focused on building clean, responsive and deployment-ready frontend experiences.",
    secondaryDescription:
      "The current focus is on business websites, portfolio pages, bilingual content structures and project hubs built with Next.js, TypeScript and Tailwind CSS.",
    cardTitle: "Built by learning through real projects",
    cardDescription:
      "Each project in this portfolio is treated as a practical case study: planned, implemented, tested, deployed and documented as part of a growing frontend workflow.",
  },
  pl: {
    eyebrow: "O Z-TECH",
    title: "Praktyczne podejście do web developmentu skupione na frontendzie.",
    description:
      "Z-TECH to portfolio web development i projekt usługowy skupiony na tworzeniu czystych, responsywnych i gotowych do wdrożenia doświadczeń frontendowych.",
    secondaryDescription:
      "Aktualny kierunek to strony firmowe, portfolio, dwujęzyczne struktury treści oraz huby projektów budowane z użyciem Next.js, TypeScript i Tailwind CSS.",
    cardTitle: "Budowane przez naukę na realnych projektach",
    cardDescription:
      "Każdy projekt w tym portfolio jest traktowany jako praktyczne case study: zaplanowany, zaimplementowany, przetestowany, wdrożony i opisany jako część rozwijanego workflow frontendowego.",
  },
};
