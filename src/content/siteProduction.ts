import { Locale } from "@/types/locale";

type LocalizedText = Record<Locale, string>;
type LocalizedList = Record<Locale, string[]>;

export type ProductionChecklistGroup = {
  title: LocalizedText;
  description: LocalizedText;
  items: LocalizedList;
};

export const productionChecklistGroups: ProductionChecklistGroup[] = [
  {
    title: {
      en: "Routing and navigation",
      pl: "Routing i nawigacja",
    },
    description: {
      en: "The site should provide stable localized routes and clear navigation between all major pages.",
      pl: "Strona powinna zapewniać stabilne lokalizowane trasy i czytelną nawigację między wszystkimi głównymi podstronami.",
    },
    items: {
      en: [
        "English and Polish home routes",
        "Dedicated About, Services, Stack, Projects and Contact pages",
        "Project detail routes generated from content",
        "Custom not-found pages for safer invalid routes",
      ],
      pl: [
        "Trasy strony głównej po angielsku i polsku",
        "Dedykowane strony About, Services, Stack, Projects i Contact",
        "Podstrony projektów generowane z contentu",
        "Customowe strony not-found dla bezpieczniejszych błędnych tras",
      ],
    },
  },
  {
    title: {
      en: "SEO and metadata",
      pl: "SEO i metadata",
    },
    description: {
      en: "Production pages should expose metadata, language alternates, sitemap routes and structured data where it matters.",
      pl: "Strony produkcyjne powinny udostępniać metadata, alternatywy językowe, sitemapę i structured data tam, gdzie ma to znaczenie.",
    },
    items: {
      en: [
        "Localized page metadata",
        "Sitemap and robots routes",
        "Open Graph image",
        "JSON-LD for key page types",
      ],
      pl: [
        "Lokalizowane metadata stron",
        "Trasy sitemap i robots",
        "Obraz Open Graph",
        "JSON-LD dla kluczowych typów stron",
      ],
    },
  },
  {
    title: {
      en: "Project system",
      pl: "System projektów",
    },
    description: {
      en: "The project area should be maintainable enough to add new portfolio entries without redesigning the whole website.",
      pl: "Obszar projektów powinien być na tyle utrzymywalny, żeby dodawać nowe pozycje do portfolio bez przebudowy całej strony.",
    },
    items: {
      en: [
        "Reusable project content model",
        "Project cards and featured project section",
        "Technical case study pages",
        "Production gate and maintenance guide",
      ],
      pl: [
        "Reusable model danych projektów",
        "Karty projektów i sekcja featured project",
        "Techniczne podstrony case study",
        "Production gate i maintenance guide",
      ],
    },
  },
  {
    title: {
      en: "Deployment workflow",
      pl: "Workflow deploymentu",
    },
    description: {
      en: "The portfolio should have repeatable checks before every push and deployment.",
      pl: "Portfolio powinno mieć powtarzalne kontrole przed każdym pushem i deploymentem.",
    },
    items: {
      en: [
        "ESLint check",
        "Production build",
        "Static export output",
        "Post-deploy route verification",
      ],
      pl: [
        "Kontrola ESLint",
        "Build produkcyjny",
        "Statyczny output",
        "Weryfikacja tras po deploymencie",
      ],
    },
  },
  {
    title: {
      en: "Maintenance workflow",
      pl: "Workflow utrzymania",
    },
    description: {
      en: "The repository should include documentation that explains how to add new projects and verify production readiness.",
      pl: "Repozytorium powinno zawierać dokumentację wyjaśniającą, jak dodawać nowe projekty i weryfikować gotowość produkcyjną.",
    },
    items: {
      en: [
        "Add project guide",
        "Project entry template",
        "Production checklist",
        "Changelog updates",
      ],
      pl: [
        "Instrukcja dodawania projektu",
        "Template wpisu projektu",
        "Checklist produkcyjny",
        "Aktualizacje changeloga",
      ],
    },
  },
];
