import { Locale, locales } from "@/types/locale";

export type Dictionary = {
  navigation: {
    home: string;
    projects: string;
    about: string;
    skills: string;
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
    type: string;
  };
  status: {
    completed: string;
    inProgress: string;
  };
  seo: {
    homeTitle: string;
    homeDescription: string;
    projectsTitle: string;
    projectsDescription: string;
    projectTitleSuffix: string;
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
  projectsExplorer: {
    searchLabel: string;
    searchPlaceholder: string;
    statusLabel: string;
    categoryLabel: string;
    allStatuses: string;
    allCategories: string;
    clearFilters: string;
    resultsPrefix: string;
    resultsSuffix: string;
    helperText: string;
    emptyTitle: string;
    emptyDescription: string;
  };
  featuredProject: {
    eyebrow: string;
    previewTitle: string;
    previewDescription: string;
  };
  projectsSummary: {
    total: string;
    completed: string;
    inProgress: string;
    languages: string;
  };
  projectLinks: {
    eyebrow: string;
    title: string;
    description: string;
    liveDescription: string;
    sourceDescription: string;
    available: string;
    notAvailable: string;
    openLink: string;
    placeholder: string;
  };
  projectProcess: {
    eyebrow: string;
    title: string;
    description: string;
  };
  projectMockups: {
    eyebrow: string;
    title: string;
    description: string;
    browserLabel: string;
  };
  relatedProjects: {
    eyebrow: string;
    title: string;
    description: string;
  };
  skillsSection: {
    eyebrow: string;
    title: string;
    description: string;
  };
  contactSection: {
    eyebrow: string;
    title: string;
    description: string;
    currentlyAvailable: string;
    emailMe: string;
    emailPlaceholderNote: string;
    emailTitle: string;
    githubTitle: string;
    emailDescription: string;
    githubDescription: string;
    pendingValue: string;
    openLink: string;
  };
  projectSections: {
    caseStudy: string;
    title: string;
    description: string;
    features: string;
    technicalDecisions: string;
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
      skills: "Skills",
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
      type: "Type",
    },
    status: {
      completed: "Completed",
      inProgress: "In progress",
    },
    seo: {
      homeTitle: "Z-TECH | Frontend Web Development",
      homeDescription:
        "Professional frontend portfolio by Z-TECH Piotr Zandecki, focused on modern websites, bilingual interfaces, Next.js, TypeScript, Tailwind CSS and deployment-ready delivery.",
      projectsTitle: "Projects | Z-TECH",
      projectsDescription:
        "A professional project hub with frontend case studies, technologies, implementation details, live previews and production-oriented delivery notes.",
      projectTitleSuffix: "Project Case Study | Z-TECH",
    },
    home: {
      eyebrow: "Frontend Web Development",
      title: "Clean, modern and deployment-ready web experiences.",
      description:
        "Z-TECH delivers frontend projects focused on clear structure, responsive interfaces, reusable components and practical user experience across modern websites and web applications.",
      focusLabel: "Delivery focus",
      focusTitle: "Frontend development with production quality",
      focusDescription:
        "Next.js, TypeScript, Tailwind CSS, reusable components, bilingual content structures and static deployment workflows.",
      focusItems: [
        "Responsive web interfaces",
        "Clean component architecture",
        "Deployment-ready project structure",
      ],
      aboutEyebrow: "About",
      aboutTitle: "Frontend development built around structure and delivery.",
      aboutDescription:
        "Z-TECH combines practical implementation, clear technical structure and polished presentation to create websites and interfaces that are easy to review, deploy and maintain.",
      projectsEyebrow: "Selected Work",
      projectsTitle: "Projects",
      projectsDescription:
        "A curated collection of frontend projects prepared as clear case studies with structured content, technical decisions, visual previews and deployment context.",
    },
    projectsPage: {
      eyebrow: "Project Hub",
      title: "Frontend projects and case studies",
      description:
        "Each project has its own case study with scope, features, technologies, implementation notes and links. The section is structured for clear presentation and long-term maintenance.",
    },
    projectsExplorer: {
      searchLabel: "Search",
      searchPlaceholder: "Search by name, technology or description...",
      statusLabel: "Status",
      categoryLabel: "Category",
      allStatuses: "All statuses",
      allCategories: "All categories",
      clearFilters: "Clear filters",
      resultsPrefix: "Showing",
      resultsSuffix: "projects",
      helperText: "Use filters to quickly find a specific project.",
      emptyTitle: "No projects found",
      emptyDescription:
        "Try changing the search phrase, status or category filter to see more projects.",
    },
    featuredProject: {
      eyebrow: "Featured",
      previewTitle: "Prepared as a professional case study",
      previewDescription:
        "Each project page combines overview, features, technical decisions, challenges, next steps and space for live previews or source links.",
    },
    projectsSummary: {
      total: "Total projects",
      completed: "Completed",
      inProgress: "In progress",
      languages: "Languages",
    },
    projectLinks: {
      eyebrow: "Project links",
      title: "Live version and source code",
      description:
        "This section collects external links connected with the project. When a project is deployed or published, the links are available here.",
      liveDescription:
        "A deployed version of the project that can be opened and tested in the browser.",
      sourceDescription:
        "The source code repository with the project structure, components and implementation details.",
      available: "Available",
      notAvailable: "Pending",
      openLink: "Open link",
      placeholder:
        "This link has not been added yet. It will be updated after deployment or repository publication.",
    },
    projectProcess: {
      eyebrow: "Process",
      title: "Project delivery process",
      description:
        "A structured breakdown of how the project is planned, implemented, reviewed and prepared for presentation or deployment.",
    },
    projectMockups: {
      eyebrow: "Visual preview",
      title: "Screens and interface areas",
      description:
        "This section presents screenshots, mockups or visual highlights that show the project interface in context.",
      browserLabel: "Preview window",
    },
    relatedProjects: {
      eyebrow: "More projects",
      title: "Explore other case studies",
      description:
        "Each project has its own structure, technical context and presentation flow. Browse more case studies prepared for review.",
    },
    skillsSection: {
      eyebrow: "Stack",
      title: "Technologies and tools used in delivery",
      description:
        "A focused set of frontend technologies, tooling and implementation practices used to build structured, maintainable and responsive web projects.",
    },
    contactSection: {
      eyebrow: "Contact",
      title: "Let’s build something useful.",
      description:
        "Reach out to discuss a practical website, landing page, portfolio, frontend interface or deployment-ready web project.",
      currentlyAvailable:
        "Available for frontend-focused websites, portfolio systems and clean web interfaces.",
      emailMe: "Email Me",
      emailPlaceholderNote:
        "Contact details are controlled from one configuration file and can be updated before deployment.",
      emailTitle: "Email",
      githubTitle: "GitHub",
      emailDescription:
        "The best place for direct contact, project questions or cooperation conversations.",
      githubDescription:
        "A place to review source code, repositories, project structure and implementation quality.",
      pendingValue: "To be added",
      openLink: "Open",
    },
    projectSections: {
      caseStudy: "Case Study",
      title: "How this project was built",
      description:
        "A short breakdown of the project scope, features, technical decisions, implementation challenges and next delivery steps.",
      features: "Features",
      technicalDecisions: "Technical decisions",
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
      skills: "Umiejętności",
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
      type: "Typ",
    },
    status: {
      completed: "Ukończony",
      inProgress: "W trakcie",
    },
    seo: {
      homeTitle: "Z-TECH | Frontend Web Development",
      homeDescription:
        "Profesjonalne portfolio frontendowe Z-TECH Piotr Zandecki, skupione na nowoczesnych stronach, dwujęzycznych interfejsach, Next.js, TypeScript, Tailwind CSS i wdrożeniach gotowych produkcyjnie.",
      projectsTitle: "Projekty | Z-TECH",
      projectsDescription:
        "Profesjonalny hub projektów frontendowych z case studies, technologiami, szczegółami implementacji, podglądami live i notatkami wdrożeniowymi.",
      projectTitleSuffix: "Case Study Projektu | Z-TECH",
    },
    home: {
      eyebrow: "Frontend Web Development",
      title: "Czyste, nowoczesne i gotowe do wdrożenia projekty webowe.",
      description:
        "Z-TECH realizuje projekty frontendowe skupione na czytelnej strukturze, responsywnych interfejsach, komponentach wielokrotnego użytku i praktycznym doświadczeniu użytkownika.",
      focusLabel: "Kierunek realizacji",
      focusTitle: "Frontend development z jakością produkcyjną",
      focusDescription:
        "Next.js, TypeScript, Tailwind CSS, komponenty wielokrotnego użytku, dwujęzyczne struktury treści i statyczne workflow wdrożeniowe.",
      focusItems: [
        "Responsywne interfejsy webowe",
        "Czysta architektura komponentów",
        "Struktura gotowa pod wdrożenie",
      ],
      aboutEyebrow: "O mnie",
      aboutTitle:
        "Frontend development oparty o strukturę i jakość realizacji.",
      aboutDescription:
        "Z-TECH łączy praktyczną implementację, czytelną strukturę techniczną i dopracowaną prezentację, aby tworzyć strony oraz interfejsy łatwe do oceny, wdrożenia i utrzymania.",
      projectsEyebrow: "Wybrane realizacje",
      projectsTitle: "Projekty",
      projectsDescription:
        "Wyselekcjonowana kolekcja projektów frontendowych przygotowanych jako czytelne case studies ze strukturą treści, decyzjami technicznymi, podglądem wizualnym i kontekstem wdrożeniowym.",
    },
    projectsPage: {
      eyebrow: "Centrum projektów",
      title: "Projekty frontendowe i case studies",
      description:
        "Każdy projekt ma własne case study z zakresem, funkcjami, technologiami, notatkami implementacyjnymi i linkami. Sekcja jest przygotowana pod czytelną prezentację i długoterminowe utrzymanie.",
    },
    projectsExplorer: {
      searchLabel: "Wyszukaj",
      searchPlaceholder: "Szukaj po nazwie, technologii albo opisie...",
      statusLabel: "Status",
      categoryLabel: "Kategoria",
      allStatuses: "Wszystkie statusy",
      allCategories: "Wszystkie kategorie",
      clearFilters: "Wyczyść filtry",
      resultsPrefix: "Wyświetlono",
      resultsSuffix: "projektów",
      helperText: "Użyj filtrów, żeby szybko znaleźć konkretny projekt.",
      emptyTitle: "Nie znaleziono projektów",
      emptyDescription:
        "Spróbuj zmienić frazę wyszukiwania, status albo kategorię, żeby zobaczyć więcej projektów.",
    },
    featuredProject: {
      eyebrow: "Wyróżniony",
      previewTitle: "Przygotowany jako profesjonalne case study",
      previewDescription:
        "Każda podstrona projektu łączy opis, funkcje, decyzje techniczne, wyzwania, kolejne kroki i miejsce na podgląd live albo linki źródłowe.",
    },
    projectsSummary: {
      total: "Liczba projektów",
      completed: "Ukończone",
      inProgress: "W trakcie",
      languages: "Języki",
    },
    projectLinks: {
      eyebrow: "Linki projektu",
      title: "Wersja live i kod źródłowy",
      description:
        "Ta sekcja zbiera zewnętrzne linki związane z projektem. Po wdrożeniu lub opublikowaniu projektu linki są dostępne tutaj.",
      liveDescription:
        "Wdrożona wersja projektu, którą można otworzyć i przetestować w przeglądarce.",
      sourceDescription:
        "Repozytorium z kodem źródłowym, strukturą projektu, komponentami i szczegółami implementacji.",
      available: "Dostępne",
      notAvailable: "Oczekuje",
      openLink: "Otwórz link",
      placeholder:
        "Ten link nie został jeszcze dodany. Zostanie uzupełniony po deployu albo publikacji repozytorium.",
    },
    projectProcess: {
      eyebrow: "Proces",
      title: "Proces realizacji projektu",
      description:
        "Uporządkowany podział pokazujący, jak projekt jest planowany, implementowany, weryfikowany i przygotowywany do prezentacji albo wdrożenia.",
    },
    projectMockups: {
      eyebrow: "Podgląd wizualny",
      title: "Ekrany i obszary interfejsu",
      description:
        "Ta sekcja prezentuje screeny, mockupy lub wizualne wyróżniki pokazujące interfejs projektu w kontekście.",
      browserLabel: "Okno podglądu",
    },
    relatedProjects: {
      eyebrow: "Więcej projektów",
      title: "Zobacz inne case studies",
      description:
        "Każdy projekt ma własną strukturę, kontekst techniczny i sposób prezentacji. Zobacz kolejne case studies przygotowane do oceny.",
    },
    skillsSection: {
      eyebrow: "Stack",
      title: "Technologie i narzędzia używane w realizacji",
      description:
        "Skupiony zestaw technologii frontendowych, narzędzi i praktyk implementacyjnych wykorzystywanych do budowania uporządkowanych, utrzymywalnych i responsywnych projektów webowych.",
    },
    contactSection: {
      eyebrow: "Kontakt",
      title: "Zbudujmy coś użytecznego.",
      description:
        "Skontaktuj się, aby omówić praktyczną stronę internetową, landing page, portfolio, interfejs frontendowy albo projekt webowy gotowy do wdrożenia.",
      currentlyAvailable:
        "Dostępny pod projekty frontendowe, systemy portfolio i czyste interfejsy webowe.",
      emailMe: "Napisz do mnie",
      emailPlaceholderNote:
        "Dane kontaktowe są kontrolowane z jednego pliku konfiguracji i mogą zostać uzupełnione przed wdrożeniem.",
      emailTitle: "Email",
      githubTitle: "GitHub",
      emailDescription:
        "Najlepsze miejsce do bezpośredniego kontaktu, pytań o projekt albo rozmów o współpracy.",
      githubDescription:
        "Miejsce do sprawdzenia kodu źródłowego, repozytoriów, struktury projektów i jakości implementacji.",
      pendingValue: "Do uzupełnienia",
      openLink: "Otwórz",
    },
    projectSections: {
      caseStudy: "Case Study",
      title: "Jak został zbudowany ten projekt",
      description:
        "Krótki opis zakresu projektu, funkcji, decyzji technicznych, wyzwań implementacyjnych oraz kolejnych kroków realizacji.",
      features: "Funkcje",
      technicalDecisions: "Decyzje techniczne",
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
