import { Locale } from "@/types/locale";

type LocalizedText = Record<Locale, string>;
type LocalizedList = Record<Locale, string[]>;

export type ContactMethodId = "email" | "github";

export type ContactMethod = {
  id: ContactMethodId;
  title: LocalizedText;
  description: LocalizedText;
  helper: LocalizedText;
};

export type ProjectInquiryBlock = {
  title: LocalizedText;
  description: LocalizedText;
  items: LocalizedList;
};

export const contactMethods: ContactMethod[] = [
  {
    id: "email",
    title: {
      en: "Email",
      pl: "Email",
    },
    description: {
      en: "Best for direct contact, project questions, collaboration ideas or recruitment conversations.",
      pl: "Najlepszy kanał do bezpośredniego kontaktu, pytań o projekt, pomysłów na współpracę albo rozmów rekrutacyjnych.",
    },
    helper: {
      en: "Opens your default email client.",
      pl: "Otwiera domyślnego klienta poczty.",
    },
  },
  {
    id: "github",
    title: {
      en: "GitHub",
      pl: "GitHub",
    },
    description: {
      en: "A place to review repositories, source code, project structure and development progress.",
      pl: "Miejsce do sprawdzenia repozytoriów, kodu źródłowego, struktury projektów i postępów developerskich.",
    },
    helper: {
      en: "Opens in a new browser tab.",
      pl: "Otwiera się w nowej karcie przeglądarki.",
    },
  },
];

export const projectInquiryBlocks: ProjectInquiryBlock[] = [
  {
    title: {
      en: "Project goal",
      pl: "Cel projektu",
    },
    description: {
      en: "Describe what the website or interface should help with and what result would make the project successful.",
      pl: "Opisz, w czym strona albo interfejs ma pomóc i jaki efekt oznaczałby, że projekt się udał.",
    },
    items: {
      en: [
        "Business website",
        "Portfolio page",
        "Project hub",
        "Frontend interface",
      ],
      pl: [
        "Strona firmowa",
        "Strona portfolio",
        "Hub projektów",
        "Interfejs frontendowy",
      ],
    },
  },
  {
    title: {
      en: "Content and language",
      pl: "Treść i język",
    },
    description: {
      en: "Mention whether the project should be in one language or prepared with Polish and English versions.",
      pl: "Napisz, czy projekt ma być w jednym języku, czy przygotowany w wersji polskiej i angielskiej.",
    },
    items: {
      en: [
        "Existing copy",
        "Missing content",
        "PL / EN version",
        "Navigation structure",
      ],
      pl: [
        "Gotowe treści",
        "Brakujące treści",
        "Wersja PL / EN",
        "Struktura nawigacji",
      ],
    },
  },
  {
    title: {
      en: "Visual direction",
      pl: "Kierunek wizualny",
    },
    description: {
      en: "Share any references, mood, color direction or existing brand elements that should guide the design.",
      pl: "Podeślij inspiracje, nastrój, kierunek kolorystyczny albo istniejące elementy marki, które powinny prowadzić design.",
    },
    items: {
      en: [
        "Brand mood",
        "Reference websites",
        "Preferred colors",
        "Existing logo or assets",
      ],
      pl: [
        "Nastrój marki",
        "Inspiracje stron",
        "Preferowane kolory",
        "Logo albo istniejące materiały",
      ],
    },
  },
  {
    title: {
      en: "Deployment expectations",
      pl: "Oczekiwania wdrożeniowe",
    },
    description: {
      en: "Add information about where the project should be published and whether it needs a custom domain later.",
      pl: "Dodaj informację, gdzie projekt ma zostać opublikowany i czy w przyszłości będzie potrzebna własna domena.",
    },
    items: {
      en: [
        "Netlify deployment",
        "Static export",
        "Custom domain later",
        "Public portfolio use",
      ],
      pl: [
        "Deployment na Netlify",
        "Statyczny export",
        "Własna domena później",
        "Publiczne użycie w portfolio",
      ],
    },
  },
];

export const contactPageDetails: Record<
  Locale,
  {
    responseTitle: string;
    responseDescription: string;
    messageTitle: string;
    messageDescription: string;
    emailSubject: string;
    emailBody: string;
    emailCta: string;
    githubCta: string;
  }
> = {
  en: {
    responseTitle: "Clear context makes the first reply better.",
    responseDescription:
      "A good first message does not need to be long. A short description of the goal, content, visual direction and expected deployment is enough to start.",
    messageTitle: "Suggested first message",
    messageDescription:
      "Use this as a simple structure when reaching out about a website or frontend project.",
    emailSubject: "Project inquiry for Z-TECH",
    emailBody:
      "Hi Piotr,%0D%0A%0D%0AI would like to discuss a frontend/web project.%0D%0A%0D%0AProject type:%0D%0AGoal:%0D%0ALanguage version:%0D%0AVisual direction:%0D%0ADeployment expectations:%0D%0A%0D%0ARegards,",
    emailCta: "Start email",
    githubCta: "Open GitHub",
  },
  pl: {
    responseTitle: "Dobry kontekst ułatwia pierwszą odpowiedź.",
    responseDescription:
      "Pierwsza wiadomość nie musi być długa. Wystarczy krótki opis celu, treści, kierunku wizualnego i oczekiwań dotyczących wdrożenia.",
    messageTitle: "Proponowana pierwsza wiadomość",
    messageDescription:
      "Możesz potraktować to jako prostą strukturę wiadomości przy kontakcie w sprawie strony albo projektu frontendowego.",
    emailSubject: "Zapytanie projektowe dla Z-TECH",
    emailBody:
      "Cześć Piotr,%0D%0A%0D%0AChciałbym/chciałabym porozmawiać o projekcie frontendowym/webowym.%0D%0A%0D%0ATyp projektu:%0D%0ACel:%0D%0AWersja językowa:%0D%0AKierunek wizualny:%0D%0AOczekiwania wdrożeniowe:%0D%0A%0D%0APozdrawiam,",
    emailCta: "Napisz email",
    githubCta: "Otwórz GitHub",
  },
};
