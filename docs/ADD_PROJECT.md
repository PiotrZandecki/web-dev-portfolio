# Adding a new project

This portfolio is designed so new projects can be added mostly through content files and preview assets.

## 1. Add project preview asset

Add a preview image to:

```txt
public/project-previews
```

Recommended format:

```txt
1200 × 760
```

Recommended filename pattern:

```txt
project-slug-preview.svg
```

or:

```txt
project-slug-preview.png
```

## 2. Add project data

Edit:

```txt
src/content/projects.ts
```

Add a new project object with:

```txt
slug
title
status
year
category
shortDescription
description
technologies
highlights
features
whatILearned
challenges
nextSteps
process
mockups
liveUrl
sourceUrl
embedUrl
```

Important:

- Every localized field must include `en` and `pl`.
- `slug` must be unique.
- `mockups[0].imageSrc` should point to the preview asset.
- `liveUrl`, `sourceUrl` and `embedUrl` can be added later.

## 3. Add technical details

Edit:

```txt
src/content/projectTechnicalDetails.ts
```

Add a new key matching the project slug.

Example:

```ts
"new-project-slug": {
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

This powers:

```txt
Implementation section
Testing & review section
```

## 4. Add release details

Edit:

```txt
src/content/projectReleaseDetails.ts
```

Add a new key matching the project slug.

This powers:

```txt
Release Status
Asset Manifest
Build checks
Live/source/preview documentation
```

Use statuses:

```txt
connected
prepared
pending
```

## 5. Check project readiness

After adding the project, open:

```txt
/en/projects/
/pl/projects/
```

Check:

```txt
Project Control Center
Production Gate
Technical Matrix
Projects Explorer
```

Then open the project details route:

```txt
/en/projects/project-slug/
/pl/projects/project-slug/
```

Check:

```txt
Hero
Snapshot
Technical overview
Release status
Asset manifest
Implementation
Quality checklist
Testing & review
Links
Live preview
Visual preview
Case study
Roadmap
```

## 6. Run local checks

```bash
npm run lint
npm run build
```

## 7. Commit

```bash
git status
git add .
git commit -m "Add new project case study"
```

## 8. Push

```bash
git push
```

## Notes

A project can be portfolio-ready before it is deployment-ready.

Portfolio-ready means:

```txt
content
visual preview
technical details
release details
implementation notes
testing notes
roadmap
```

Deployment-ready means:

```txt
live demo
source code
embed preview
```
