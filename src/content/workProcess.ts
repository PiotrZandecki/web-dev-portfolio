import { Locale } from "@/types/locale";

type LocalizedText = Record<Locale, string>;

export type WorkProcessStep = {
  title: LocalizedText;
  description: LocalizedText;
  details: Record<Locale, string[]>;
};

export const workProcessSteps: WorkProcessStep[] = [
  {
    title: {
      en: "Project direction",
      pl: "Kierunek projektu",
    },
    description: {
      en: "The first step is understanding what the website or interface should communicate, who it is for and what result it should support.",
      pl: "Pierwszy krok to zrozumienie, co strona albo interfejs ma komunikować, dla kogo jest tworzony i jaki efekt ma wspierać.",
    },
    details: {
      en: ["Goal definition", "Audience context", "Content priorities"],
      pl: ["Określenie celu", "Kontekst odbiorców", "Priorytety treści"],
    },
  },
  {
    title: {
      en: "Structure and layout",
      pl: "Struktura i layout",
    },
    description: {
      en: "The project is organized into sections, reusable components and clear user paths before visual details are polished.",
      pl: "Projekt jest układany w sekcje, komponenty wielokrotnego użytku i czytelne ścieżki użytkownika, zanim dopracowywane są detale wizualne.",
    },
    details: {
      en: ["Page sections", "Component structure", "Responsive layout"],
      pl: ["Sekcje strony", "Struktura komponentów", "Responsywny layout"],
    },
  },
  {
    title: {
      en: "Implementation",
      pl: "Implementacja",
    },
    description: {
      en: "The interface is built with a clean frontend stack, focusing on maintainable code, accessibility and consistent styling.",
      pl: "Interfejs jest budowany w czystym stacku frontendowym, z naciskiem na utrzymywalny kod, dostępność i spójny styling.",
    },
    details: {
      en: ["Next.js", "TypeScript", "Tailwind CSS"],
      pl: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
  },
  {
    title: {
      en: "Review and deployment",
      pl: "Testy i wdrożenie",
    },
    description: {
      en: "Before publishing, the project is checked locally, prepared for deployment and verified after going live.",
      pl: "Przed publikacją projekt jest sprawdzany lokalnie, przygotowywany do wdrożenia i weryfikowany po publikacji online.",
    },
    details: {
      en: ["Lint and build", "Static deployment", "Post-deploy check"],
      pl: ["Lint i build", "Statyczny deploy", "Kontrola po wdrożeniu"],
    },
  },
];
