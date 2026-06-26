import { Locale } from "@/types/locale";

type LocalizedText = Record<Locale, string>;

export type Service = {
  title: LocalizedText;
  description: LocalizedText;
  points: Record<Locale, string[]>;
};

export const services: Service[] = [
  {
    title: {
      en: "Business websites",
      pl: "Strony firmowe",
    },
    description: {
      en: "Modern, responsive websites designed to present a brand, service or small business in a clean and trustworthy way.",
      pl: "Nowoczesne, responsywne strony internetowe zaprojektowane do prezentacji marki, usługi albo małej firmy w przejrzysty i wiarygodny sposób.",
    },
    points: {
      en: ["Landing pages", "Service sections", "Contact areas"],
      pl: ["Landing page", "Sekcje usług", "Obszary kontaktu"],
    },
  },
  {
    title: {
      en: "Frontend interfaces",
      pl: "Interfejsy frontendowe",
    },
    description: {
      en: "Structured frontend views built with reusable components, clear layouts and practical user experience in mind.",
      pl: "Uporządkowane widoki frontendowe budowane z komponentów wielokrotnego użytku, czytelnym layoutem i praktycznym UX.",
    },
    points: {
      en: ["Reusable components", "Responsive UI", "Clean structure"],
      pl: ["Komponenty reusable", "Responsywny UI", "Czysta struktura"],
    },
  },
  {
    title: {
      en: "Portfolio and project pages",
      pl: "Portfolio i strony projektów",
    },
    description: {
      en: "Project presentation pages with case studies, technology stack, links, previews and bilingual content structure.",
      pl: "Strony prezentujące projekty z case study, stackiem technologicznym, linkami, podglądami i strukturą wielojęzyczną.",
    },
    points: {
      en: ["Case studies", "Project hubs", "PL / EN content"],
      pl: ["Case studies", "Hub projektów", "Treści PL / EN"],
    },
  },
];
