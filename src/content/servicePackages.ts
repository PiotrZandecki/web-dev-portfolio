import { Locale } from "@/types/locale";

type LocalizedText = Record<Locale, string>;
type LocalizedList = Record<Locale, string[]>;

export type ServicePackage = {
  name: LocalizedText;
  tag: LocalizedText;
  description: LocalizedText;
  bestFor: LocalizedText;
  includes: LocalizedList;
};

export const servicePackages: ServicePackage[] = [
  {
    name: {
      en: "Starter Website",
      pl: "Starter Website",
    },
    tag: {
      en: "Business card site",
      pl: "Strona wizytówka",
    },
    description: {
      en: "A clean, responsive website for a small business, personal brand or service presentation.",
      pl: "Czysta, responsywna strona dla małej firmy, marki osobistej albo prezentacji usługi.",
    },
    bestFor: {
      en: "Best for simple business presence and fast online visibility.",
      pl: "Najlepsze pod prostą obecność online i szybkie pokazanie firmy w internecie.",
    },
    includes: {
      en: [
        "Homepage structure",
        "Services and contact sections",
        "Responsive layout",
        "Basic SEO setup",
      ],
      pl: [
        "Struktura strony głównej",
        "Sekcje usług i kontaktu",
        "Responsywny layout",
        "Podstawowa konfiguracja SEO",
      ],
    },
  },
  {
    name: {
      en: "Portfolio Hub",
      pl: "Portfolio Hub",
    },
    tag: {
      en: "Project-focused site",
      pl: "Strona projektowa",
    },
    description: {
      en: "A portfolio-style website with a project hub, case study pages and a scalable content structure.",
      pl: "Strona typu portfolio z hubem projektów, podstronami case study i skalowalną strukturą treści.",
    },
    bestFor: {
      en: "Best for freelancers, junior developers and creators who want to show practical work.",
      pl: "Najlepsze dla freelancerów, junior developerów i twórców, którzy chcą pokazać praktyczne projekty.",
    },
    includes: {
      en: [
        "Project listing page",
        "Case study pages",
        "Technology sections",
        "Live/source link areas",
      ],
      pl: [
        "Strona listy projektów",
        "Podstrony case study",
        "Sekcje technologii",
        "Obszary linków live/source",
      ],
    },
  },
  {
    name: {
      en: "Bilingual Web Presence",
      pl: "Bilingual Web Presence",
    },
    tag: {
      en: "PL / EN structure",
      pl: "Struktura PL / EN",
    },
    description: {
      en: "A bilingual website prepared with localized routes, content and navigation for Polish and English audiences.",
      pl: "Dwujęzyczna strona przygotowana z lokalizowanymi trasami, treścią i nawigacją dla odbiorców polskich oraz angielskich.",
    },
    bestFor: {
      en: "Best for businesses or personal brands that need to communicate in two languages.",
      pl: "Najlepsze dla firm albo marek osobistych, które chcą komunikować się w dwóch językach.",
    },
    includes: {
      en: [
        "English and Polish routes",
        "Language switcher",
        "Localized metadata",
        "Static deployment setup",
      ],
      pl: [
        "Trasy po angielsku i polsku",
        "Przełącznik języka",
        "Lokalizowane metadane",
        "Konfiguracja statycznego deployu",
      ],
    },
  },
];
