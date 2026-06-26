# Project entry template

Use this file as a checklist when adding a new portfolio project.

## Project object

```ts
{
  slug: "project-slug",
  title: "Project Name",
  status: "inProgress",
  year: "2026",
  category: {
    en: "Project category",
    pl: "Kategoria projektu",
  },
  shortDescription: {
    en: "Short English description.",
    pl: "Krótki polski opis.",
  },
  description: {
    en: "Longer English project description.",
    pl: "Dłuższy polski opis projektu.",
  },
  technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  highlights: {
    en: [
      "Highlight one",
      "Highlight two",
      "Highlight three",
    ],
    pl: [
      "Wyróżnik jeden",
      "Wyróżnik dwa",
      "Wyróżnik trzy",
    ],
  },
  features: {
    en: [
      "Feature one.",
      "Feature two.",
    ],
    pl: [
      "Funkcja pierwsza.",
      "Funkcja druga.",
    ],
  },
  whatILearned: {
    en: [
      "Learning point one.",
      "Learning point two.",
    ],
    pl: [
      "Wniosek pierwszy.",
      "Wniosek drugi.",
    ],
  },
  challenges: {
    en: [
      "Challenge one.",
      "Challenge two.",
    ],
    pl: [
      "Wyzwanie pierwsze.",
      "Wyzwanie drugie.",
    ],
  },
  nextSteps: {
    en: [
      "Next step one.",
      "Next step two.",
    ],
    pl: [
      "Kolejny krok pierwszy.",
      "Kolejny krok drugi.",
    ],
  },
  process: [
    {
      title: {
        en: "Step title",
        pl: "Tytuł kroku",
      },
      description: {
        en: "Step description.",
        pl: "Opis kroku.",
      },
    },
  ],
  mockups: [
    {
      title: {
        en: "Preview title",
        pl: "Tytuł preview",
      },
      description: {
        en: "Preview description.",
        pl: "Opis preview.",
      },
      imageSrc: "/project-previews/project-slug-preview.svg",
    },
  ],
  liveUrl: "https://example.com",
  sourceUrl: "https://github.com/example/project",
  embedUrl: "https://example.com",
}
```

## Technical details key

```ts
"project-slug": {
  implementationTitle: {
    en: "...",
    pl: "...",
  },
  implementationDescription: {
    en: "...",
    pl: "...",
  },
  implementationAreas: [
    {
      title: {
        en: "...",
        pl: "...",
      },
      description: {
        en: "...",
        pl: "...",
      },
      points: {
        en: ["...", "..."],
        pl: ["...", "..."],
      },
    },
  ],
  testingTitle: {
    en: "...",
    pl: "...",
  },
  testingDescription: {
    en: "...",
    pl: "...",
  },
  testingAreas: [
    {
      title: {
        en: "...",
        pl: "...",
      },
      description: {
        en: "...",
        pl: "...",
      },
      checks: {
        en: ["...", "..."],
        pl: ["...", "..."],
      },
    },
  ],
}
```

## Release details key

```ts
"project-slug": {
  releaseTitle: {
    en: "...",
    pl: "...",
  },
  releaseDescription: {
    en: "...",
    pl: "...",
  },
  liveDemo: {
    status: "pending",
    title: {
      en: "Live demo",
      pl: "Wersja live",
    },
    description: {
      en: "...",
      pl: "...",
    },
    label: {
      en: "...",
      pl: "...",
    },
    notes: {
      en: ["...", "..."],
      pl: ["...", "..."],
    },
  },
  sourceCode: {
    status: "pending",
    title: {
      en: "Source code",
      pl: "Kod źródłowy",
    },
    description: {
      en: "...",
      pl: "...",
    },
    label: {
      en: "...",
      pl: "...",
    },
    notes: {
      en: ["...", "..."],
      pl: ["...", "..."],
    },
  },
  visualPreview: {
    status: "connected",
    title: {
      en: "Visual preview",
      pl: "Podgląd wizualny",
    },
    description: {
      en: "...",
      pl: "...",
    },
    label: {
      en: "...",
      pl: "...",
    },
    notes: {
      en: ["...", "..."],
      pl: ["...", "..."],
    },
  },
  build: {
    command: "npm run build",
    output: "out",
    checks: {
      en: ["...", "..."],
      pl: ["...", "..."],
    },
  },
}
```

## Final checklist

Before committing a new project, check:

```txt
Project object added
Preview asset added
Technical details added
Release details added
/en/projects/project-slug/ works
/pl/projects/project-slug/ works
npm run lint passes
npm run build passes
```
