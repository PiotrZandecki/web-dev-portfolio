import { Locale } from "@/types/locale";

export type SkillGroup = {
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: {
      en: "Frontend fundamentals",
      pl: "Podstawy frontendu",
    },
    description: {
      en: "Core technologies used to build accessible, responsive and maintainable web interfaces.",
      pl: "Podstawowe technologie używane do budowania dostępnych, responsywnych i utrzymywalnych interfejsów webowych.",
    },
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: {
      en: "Styling and UI",
      pl: "Styling i UI",
    },
    description: {
      en: "Tools and practices used to create clean layouts, reusable components and consistent visual systems.",
      pl: "Narzędzia i praktyki używane do tworzenia czystych layoutów, komponentów wielokrotnego użytku i spójnych systemów wizualnych.",
    },
    skills: [
      "Tailwind CSS",
      "Responsive Design",
      "Component-based UI",
      "Dark UI",
      "Accessibility",
    ],
  },
  {
    title: {
      en: "Development workflow",
      pl: "Workflow developerski",
    },
    description: {
      en: "Tools that help keep projects structured, versioned, reviewed and ready for deployment.",
      pl: "Narzędzia pomagające utrzymać strukturę projektu, kontrolę wersji, przegląd zmian i gotowość do deploymentu.",
    },
    skills: ["Git", "GitHub", "VS Code", "ESLint", "npm", "Cloudflare Pages"],
  },
  {
    title: {
      en: "Project delivery areas",
      pl: "Obszary realizacji projektów",
    },
    description: {
      en: "Areas used to deliver complete frontend projects: from architecture and reusable UI to SEO, deployment and maintainable project structure.",
      pl: "Obszary wykorzystywane przy realizacji kompletnych projektów frontendowych: od architektury i komponentów wielokrotnego użytku po SEO, deployment i utrzymywalną strukturę projektu.",
    },
    skills: [
      "Project Architecture",
      "Reusable Components",
      "SEO",
      "Deployment",
      "State Management",
    ],
  },
];
