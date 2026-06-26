# Production checklist

Use this checklist before treating the portfolio as production-ready after a larger change.

## Local checks

Run:

```bash
npm run lint
npm run build
```

Both commands should pass before committing and pushing.

## Main routes

Check locally and after deployment:

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

Check:

```txt
/en/projects/private-space/
/pl/projects/private-space/
/en/projects/aurora-beauty/
/pl/projects/aurora-beauty/
/en/projects/web-dev-portfolio/
/pl/projects/web-dev-portfolio/
```

For every project, verify:

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
Previous / next project navigation
```

## SEO routes

Check:

```txt
/robots.txt
/sitemap.xml
/manifest.webmanifest
/opengraph-image
```

## Error and fallback pages

Check invalid routes:

```txt
/does-not-exist
/en/does-not-exist
/pl/does-not-exist
```

Expected result:

```txt
custom 404 page
clear return links
no broken layout
```

## Language behavior

Check:

```txt
Language switcher works
Header links stay localized
Footer links stay localized
Project pages have EN and PL versions
Metadata alternates point to EN and PL routes
```

## Project maintenance

Before adding a new project, use:

```txt
docs/ADD_PROJECT.md
docs/PROJECT_ENTRY_TEMPLATE.md
```

A portfolio-ready project should include:

```txt
project content
visual preview
technical details
release details
implementation notes
testing notes
roadmap
```

A deployment-ready project should include:

```txt
live demo
source code
embed preview
```

## Deployment check

After push and Netlify deployment, verify:

```txt
Netlify build passed
site is live
sitemap includes new routes
new project pages work
live/source links open correctly
```

## Release note

After a meaningful production change, update:

```txt
CHANGELOG.md
```
