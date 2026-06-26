import { Locale } from "@/types/locale";

type LocalizedText = Record<Locale, string>;

export type FaqItem = {
  question: LocalizedText;
  answer: LocalizedText;
};

export const faqItems: FaqItem[] = [
  {
    question: {
      en: "What kind of projects does Z-TECH focus on?",
      pl: "Na jakich projektach skupia się Z-TECH?",
    },
    answer: {
      en: "Z-TECH focuses on frontend projects, business websites, portfolio pages and clean web interfaces built with modern tools like Next.js, TypeScript and Tailwind CSS.",
      pl: "Z-TECH skupia się na projektach frontendowych, stronach firmowych, portfolio oraz czystych interfejsach webowych budowanych w nowoczesnym stacku, takim jak Next.js, TypeScript i Tailwind CSS.",
    },
  },
  {
    question: {
      en: "Can the website be bilingual?",
      pl: "Czy strona może być dwujęzyczna?",
    },
    answer: {
      en: "Yes. This portfolio itself is built with Polish and English versions, localized routes and language-aware content structure.",
      pl: "Tak. To portfolio samo w sobie jest zbudowane w wersji polskiej i angielskiej, z lokalizowanymi trasami i strukturą treści zależną od języka.",
    },
  },
  {
    question: {
      en: "Can smaller projects be added as separate pages?",
      pl: "Czy mniejsze projekty mogą być dodawane jako osobne podstrony?",
    },
    answer: {
      en: "Yes. The project hub is designed so each smaller project can have its own page, case study, technologies, links and visual preview.",
      pl: "Tak. Hub projektów jest zaprojektowany tak, aby każdy mniejszy projekt mógł mieć własną podstronę, case study, technologie, linki i podgląd wizualny.",
    },
  },
  {
    question: {
      en: "Is the project prepared for deployment?",
      pl: "Czy projekt jest przygotowany do wdrożenia?",
    },
    answer: {
      en: "Yes. The portfolio is configured for static export, Netlify deployment, sitemap, robots, manifest and Open Graph image generation.",
      pl: "Tak. Portfolio jest skonfigurowane pod statyczny export, deployment na Netlify, sitemapę, robots, manifest oraz generowanie obrazu Open Graph.",
    },
  },
  {
    question: {
      en: "What is the best way to get in touch?",
      pl: "Jaki jest najlepszy sposób kontaktu?",
    },
    answer: {
      en: "The best way is through the contact section. It contains a direct email link and GitHub profile link.",
      pl: "Najlepszym sposobem jest sekcja kontaktu. Znajduje się tam bezpośredni link e-mail oraz link do profilu GitHub.",
    },
  },
];
