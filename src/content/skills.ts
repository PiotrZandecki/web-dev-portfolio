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
      en: "Tools that help keep projects structured, versioned, tested and ready for deployment.",
      pl: "Narzędzia pomagające utrzymać strukturę projektu, kontrolę wersji, testy i gotowość do deploymentu.",
    },
    skills: ["Git", "GitHub", "VS Code", "ESLint", "npm", "Vercel"],
  },
  {
    title: {
      en: "Currently improving",
      pl: "Aktualnie rozwijam",
    },
    description: {
      en: "Areas I am actively practicing through portfolio projects and production-focused iterations.",
      pl: "Obszary, które aktywnie ćwiczę przez projekty portfolio i iteracje skupione na jakości produkcyjnej.",
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
