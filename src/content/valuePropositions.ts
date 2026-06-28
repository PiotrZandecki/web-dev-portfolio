import { Locale } from "@/types/locale";

type LocalizedText = Record<Locale, string>;

export type ValueProposition = {
  title: LocalizedText;
  description: LocalizedText;
};

export const valuePropositions: ValueProposition[] = [
  {
    title: {
      en: "Frontend-first execution",
      pl: "Realizacja skupiona na frontendzie",
    },
    description: {
      en: "Z-TECH focuses on clean interfaces, responsive layouts, reusable components and practical user experience.",
      pl: "Z-TECH skupia się na czystych interfejsach, responsywnych layoutach, komponentach wielokrotnego użytku i praktycznym UX.",
    },
  },
  {
    title: {
      en: "Bilingual structure",
      pl: "Dwujęzyczna struktura",
    },
    description: {
      en: "Projects can be prepared with Polish and English routes, content and navigation from the beginning.",
      pl: "Projekty mogą być od początku przygotowane z polskimi i angielskimi trasami, treścią oraz nawigacją.",
    },
  },
  {
    title: {
      en: "Deployment-ready delivery",
      pl: "Gotowość do wdrożenia",
    },
    description: {
      en: "The goal is to build projects that pass production checks, generate static output and are ready to publish.",
      pl: "Celem jest budowanie projektów, które przechodzą kontrole produkcyjne, generują statyczny output i są gotowe do publikacji.",
    },
  },
  {
    title: {
      en: "Structured project delivery",
      pl: "Uporządkowana realizacja projektów",
    },
    description: {
      en: "Every project is handled as a complete case study: scoped, implemented, documented, reviewed and prepared for long-term maintenance.",
      pl: "Każdy projekt jest prowadzony jako kompletne case study: z określonym zakresem, implementacją, dokumentacją, przeglądem i przygotowaniem pod długoterminowe utrzymanie.",
    },
  },
];
