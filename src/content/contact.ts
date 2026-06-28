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
      en: "A place to review repositories, source code, project structure and implementation quality.",
      pl: "Miejsce do sprawdzenia repozytoriów, kodu źródłowego, struktury projektów i jakości implementacji.",
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
      en: "Describe what the website or interface should support and what result would make the project successful.",
      pl: "Opisz, co strona albo interfejs ma wspierać i jaki efekt oznaczałby, że projekt spełnia swoje zadanie.",
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
      en: "Mention whether the project should be prepared in one language or delivered with Polish and English versions.",
      pl: "Napisz, czy projekt ma być przygotowany w jednym języku, czy dostarczony w wersji polskiej i angielskiej.",
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
      en: "Share references, brand mood, color direction or existing assets that should guide the interface.",
      pl: "Podeślij inspiracje, charakter marki, kierunek kolorystyczny albo istniejące materiały, które powinny poprowadzić interfejs.",
    },
    items: {
      en: [
        "Brand mood",
        "Reference websites",
        "Preferred colors",
        "Existing logo or assets",
      ],
      pl: [
        "Charakter marki",
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
      en: "Add information about where the project should be published, whether it needs a custom domain and what should be prepared for release.",
      pl: "Dodaj informację, gdzie projekt ma zostać opublikowany, czy potrzebuje własnej domeny i co powinno zostać przygotowane do release.",
    },
    items: {
      en: [
        "Cloudflare Pages deployment",
        "Static export",
        "Custom domain",
        "Production / public use",
      ],
      pl: [
        "Deployment na Cloudflare Pages",
        "Statyczny export",
        "Własna domena",
        "Użycie produkcyjne / publiczne",
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
    responseTitle: "Clear project context makes the first reply more useful.",
    responseDescription:
      "A good first message does not need to be long. A short description of the goal, content, visual direction and deployment expectations is enough to define the next step.",
    messageTitle: "Suggested first message",
    messageDescription:
      "Use this as a simple structure when reaching out about a website, landing page, portfolio or frontend interface.",
    emailSubject: "Project inquiry for Z-TECH",
    emailBody:
      "Hi Piotr,%0D%0A%0D%0AI would like to discuss a frontend/web project.%0D%0A%0D%0AProject type:%0D%0AGoal:%0D%0ALanguage version:%0D%0AVisual direction:%0D%0ADeployment expectations:%0D%0A%0D%0ARegards,",
    emailCta: "Start email",
    githubCta: "Open GitHub",
  },
  pl: {
    responseTitle: "Czytelny kontekst projektu ułatwia konkretną odpowiedź.",
    responseDescription:
      "Pierwsza wiadomość nie musi być długa. Wystarczy krótki opis celu, treści, kierunku wizualnego i oczekiwań wdrożeniowych, żeby okre nie musi być długa. Wystarczy krótki opis celu, treści, kierunku wizualślić kolejny krok.",
    messageTitle: "Proponowana pierwsza wiadomość",
    messageDescription:
      "Możesz potraktować to jako prostą strukturę wiadomości przy kontakcie w sprawie strony, landing page’a, portfolio albo interfejsu frontendowego.",
    emailSubject: "Zapytanie projektowe dla Z-TECH",
    emailBody:
      "Cześć Piotr,%0D%0A%0D%0AChciałbym/chciałabym porozmawiać o projekcie frontendowym/webowym.%0D%0A%0D%0ATyp projektu:%0D%0ACel:%0D%0AWersja językowa:%0D%0AKierunek wizualny:%0D%0AOczekiwania wdrożeniowe:%0D%0A%0D%0APozdrawiam,",
    emailCta: "Napisz email",
    githubCta: "Otwórz GitHub",
  },
};
