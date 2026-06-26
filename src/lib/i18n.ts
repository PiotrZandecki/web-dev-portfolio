import { Locale, locales } from "@/types/locale";

export type Dictionary = {
  navigation: {
    home: string;
    projects: string;
    about: string;
    contact: string;
  };
  common: {
    viewProjects: string;
    viewProject: string;
    contactMe: string;
    backToProjects: string;
    liveDemo: string;
    sourceCode: string;
    status: string;
    technologies: string;
    highlights: string;
    projectDetails: string;
    year: string;
  };
  status: {
    completed: string;
    inProgress: string;
  };
  home: {
    eyebrow: string;
    title: string;
    description: string;
    focusLabel: string;
    focusTitle: string;
    focusDescription: string;
    focusItems: string[];
    aboutEyebrow: string;
    aboutTitle: string;
    aboutDescription: string;
    projectsEyebrow: string;
    projectsTitle: string;
    projectsDescription: string;
  };
  projectsPage: {
    eyebrow: string;
    title: string;
    description: string;
  };
  projectSections: {
    caseStudy: string;
    title: string;
    description: string;
    features: string;
    whatILearned: string;
    challenges: string;
    nextSteps: string;
  };
  footer: {
    rights: string;
    builtWith: string;
  };
};

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    navigation: {
      home: "Home",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    common: {
      viewProjects: "View Projects",
      viewProject: "View Project",
      contactMe: "Contact Me",
      backToProjects: "Back to Projects",
      liveDemo: "Live Demo",
      sourceCode: "Source Code",
      status: "Status",
      technologies: "Technologies",
      highlights: "Highlights",
      projectDetails: "Project details",
      year: "Year",
    },
    status: {
      completed: "Completed",
      inProgress: "In progress",
    },
    home: {
      eyebrow: "Web Developer Portfolio",
      title: "Building clean, useful and modern web experiences.",
      description:
        "I create frontend projects focused on clear structure, responsive design and practical user experience. This portfolio is a central place for my web development work.",
      focusLabel: "Current focus",
      focusTitle: "Frontend development",
      focusDescription:
        "Next.js, TypeScript, Tailwind CSS, reusable components and project-based learning.",
      focusItems: [
        "Responsive layouts",
        "Clean component structure",
        "Portfolio-ready projects",
      ],
      aboutEyebrow: "About",
      aboutTitle: "I am learning by building real projects.",
      aboutDescription:
        "My goal is to become a frontend developer by creating practical, polished and well-structured applications. Every project in this portfolio is a step toward stronger skills, better code and more confident problem solving.",
      projectsEyebrow: "Selected Work",
      projectsTitle: "Projects",
      projectsDescription:
        "A growing collection of projects created to practice real frontend development workflows and solve practical problems.",
    },
    projectsPage: {
      eyebrow: "Project Hub",
      title: "My web development projects",
      description:
        "Each project has its own page with description, features, technologies and links. This section will grow together with my skills and portfolio.",
    },
    projectSections: {
      caseStudy: "Case Study",
      title: "How this project was built",
      description:
        "A short breakdown of the project scope, features, technical decisions and next development steps.",
      features: "Features",
      whatILearned: "What I learned",
      challenges: "Challenges",
      nextSteps: "Next steps",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with Next.js, TypeScript and Tailwind CSS.",
    },
  },
  pl: {
    navigation: {
      home: "Start",
      projects: "Projekty",
      about: "O mnie",
      contact: "Kontakt",
    },
    common: {
      viewProjects: "Zobacz projekty",
      viewProject: "Zobacz projekt",
      contactMe: "Kontakt",
      backToProjects: "Wróć do projektów",
      liveDemo: "Wersja live",
      sourceCode: "Kod źródłowy",
      status: "Status",
      technologies: "Technologie",
      highlights: "Najważniejsze elementy",
      projectDetails: "Szczegóły projektu",
      year: "Rok",
    },
    status: {
      completed: "Ukończony",
      inProgress: "W trakcie",
    },
    home: {
      eyebrow: "Portfolio Web Developera",
      title: "Tworzę czyste, użyteczne i nowoczesne strony internetowe.",
      description:
        "Buduję projekty frontendowe skupione na przejrzystej strukturze, responsywności i praktycznym doświadczeniu użytkownika. To portfolio jest centralnym miejscem dla moich projektów webowych.",
      focusLabel: "Aktualny kierunek",
      focusTitle: "Frontend development",
      focusDescription:
        "Next.js, TypeScript, Tailwind CSS, komponenty wielokrotnego użytku i nauka przez projekty.",
      focusItems: [
        "Responsywne layouty",
        "Czysta struktura komponentów",
        "Projekty gotowe do portfolio",
      ],
      aboutEyebrow: "O mnie",
      aboutTitle: "Uczę się przez budowanie realnych projektów.",
      aboutDescription:
        "Moim celem jest rozwój w kierunku frontend developera poprzez tworzenie praktycznych, dopracowanych i dobrze uporządkowanych aplikacji. Każdy projekt w tym portfolio to kolejny krok w stronę lepszego kodu, pewniejszego rozwiązywania problemów i mocniejszego warsztatu.",
      projectsEyebrow: "Wybrane realizacje",
      projectsTitle: "Projekty",
      projectsDescription:
        "Rosnąca kolekcja projektów tworzonych po to, żeby ćwiczyć realny workflow frontendowy i rozwiązywać praktyczne problemy.",
    },
    projectsPage: {
      eyebrow: "Centrum projektów",
      title: "Moje projekty web development",
      description:
        "Każdy projekt ma własną podstronę z opisem, funkcjami, technologiami i linkami. Ta sekcja będzie rozwijać się razem z moimi umiejętnościami i portfolio.",
    },
    projectSections: {
      caseStudy: "Case Study",
      title: "Jak został zbudowany ten projekt",
      description:
        "Krótki opis zakresu projektu, funkcji, decyzji technicznych oraz kolejnych kroków rozwoju.",
      features: "Funkcje",
      whatILearned: "Czego się nauczyłem",
      challenges: "Wyzwania",
      nextSteps: "Kolejne kroki",
    },
    footer: {
      rights: "Wszelkie prawa zastrzeżone.",
      builtWith: "Zbudowane z użyciem Next.js, TypeScript i Tailwind CSS.",
    },
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
