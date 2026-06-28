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
    value: "Cloudflare Pages",
  },
];

export const aboutPrinciples: AboutPrinciple[] = [
  {
    title: {
      en: "Clear structure first",
      pl: "Najpierw czytelna struktura",
    },
    description: {
      en: "Every project starts with a clear content and layout structure so the interface is easier to understand, implement, review and maintain.",
      pl: "Każdy projekt zaczyna się od czytelnej struktury treści i layoutu, dzięki czemu interfejs jest łatwiejszy do zrozumienia, implementacji, oceny i utrzymania.",
    },
  },
  {
    title: {
      en: "Reusable components",
      pl: "Komponenty wielokrotnego użytku",
    },
    description: {
      en: "Interfaces are built from reusable sections and components, which keeps the project consistent and easier to extend after release.",
      pl: "Interfejsy są budowane z sekcji i komponentów wielokrotnego użytku, co pomaga utrzymać spójność projektu i ułatwia jego dalszą rozbudowę po wdrożeniu.",
    },
  },
  {
    title: {
      en: "Deployment-ready delivery",
      pl: "Realizacja gotowa do wdrożenia",
    },
    description: {
      en: "The goal is to prepare a project not only for local review, but also for build, deployment, SEO, responsive use and public presentation.",
      pl: "Celem jest przygotowanie projektu nie tylko do lokalnego podglądu, ale też pod build, deployment, SEO, responsywne użycie i publiczną prezentację.",
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
    title: "Frontend development focused on clarity, quality and delivery.",
    description:
      "Z-TECH is a frontend-focused web development brand creating clean, responsive and deployment-ready websites, portfolio systems and web interfaces.",
    secondaryDescription:
      "The current focus is on business websites, portfolio pages, bilingual content structures and project hubs built with Next.js, TypeScript, Tailwind CSS and Cloudflare Pages.",
    cardTitle: "Professional frontend delivery for modern web projects",
    cardDescription:
      "Each project is prepared as a complete case study: planned around clear goals, implemented with maintainable structure, reviewed for usability and presented with technical context.",
  },
  pl: {
    eyebrow: "O Z-TECH",
    title:
      "Frontend development skupiony na czytelności, jakości i realizacji.",
    description:
      "Z-TECH to marka web developmentowa skupiona na frontendzie, tworząca czyste, responsywne i gotowe do wdrożenia strony, systemy portfolio oraz interfejsy webowe.",
    secondaryDescription:
      "Aktualny kierunek to strony firmowe, portfolio, dwujęzyczne struktury treści oraz huby projektów budowane z użyciem Next.js, TypeScript, Tailwind CSS i Cloudflare Pages.",
    cardTitle:
      "Profesjonalna realizacja frontendowa dla nowoczesnych projektów webowych",
    cardDescription:
      "Każdy projekt jest przygotowywany jako kompletne case study: zaplanowane wokół jasnych celów, zaimplementowane w utrzymywalnej strukturze, sprawdzone pod kątem użyteczności i zaprezentowane z kontekstem technicznym.",
  },
};
