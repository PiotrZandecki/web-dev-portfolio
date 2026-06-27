# Release 1.1.0

Release date: 2026-06-27

## Summary

Version 1.1.0 marks the Z-TECH portfolio as a production-ready portfolio system.

The project is no longer just a single portfolio page. It now includes localized routing, dedicated content pages, a project hub, technical case studies, SEO routes, production checks and documentation for adding future projects.

## Main routes

```txt
/en/
/pl/
/en/about/
/pl/about/
/en/projects/
/pl/projects/
/en/services/
/pl/services/
/en/stack/
/pl/stack/
/en/contact/
/pl/contact/
```

## Project routes

```txt
/en/projects/private-space/
/pl/projects/private-space/
/en/projects/aurora-beauty/
/pl/projects/aurora-beauty/
/en/projects/web-dev-portfolio/
/pl/projects/web-dev-portfolio/
```

## Project system

The project system includes:

```txt
project cards
featured project section
project explorer
technical comparison matrix
production gate
maintenance guide
dynamic case study pages
release status
asset manifest
implementation notes
testing notes
roadmap
live demo placeholders
source code placeholders
embed preview placeholders
```

## Documentation

Important documentation files:

```txt
docs/ADD_PROJECT.md
docs/PROJECT_ENTRY_TEMPLATE.md
docs/PRODUCTION_CHECKLIST.md
docs/DEPLOYMENT_OPTIONS.md
docs/FINAL_HANDOFF.md
docs/RELEASE_1_1_0.md
```

## Current hosting status

The project was previously deployed on Netlify:

```txt
https://zandeckidev.pl
```

If Netlify deploy credits are unavailable, the project can be deployed through another static hosting provider because it uses static export.

Recommended next deployment target:

```txt
Cloudflare Pages
```

## Final local checks

Before deployment:

```bash
npm run lint
npm run build
```

Expected build output:

```txt
out
```

## Deployment settings

Recommended static deployment settings:

```txt
Build command: npm run build
Output directory: out
Production branch: main
```

## Environment variables

```env
NEXT_PUBLIC_SITE_URL=https://your-production-url
NEXT_PUBLIC_CONTACT_EMAIL=p.zandecki24@gmail.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/PiotrZandecki
NEXT_PUBLIC_REPOSITORY_URL=https://github.com/PiotrZandecki/web-dev-portfolio
```

## Post-deployment check

After deployment, verify:

```txt
homepage EN and PL
projects EN and PL
project details EN and PL
services EN and PL
about EN and PL
stack EN and PL
contact EN and PL
robots.txt
sitemap.xml
manifest.webmanifest
opengraph-image
404 page
footer release version
```
