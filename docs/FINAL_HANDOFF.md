# Final handoff

## Project status

The Z-TECH portfolio is production-ready as of version 1.1.0.

It can now be maintained mainly by adding new project entries, preview assets, technical details, release details and documentation updates.

## Core workflow

For normal development:

```bash
npm run dev
```

For production checks:

```bash
npm run lint
npm run build
```

For Git workflow:

```bash
git status
git add .
git commit -m "Commit message"
git push
```

## Adding a new project

Use:

```txt
docs/ADD_PROJECT.md
docs/PROJECT_ENTRY_TEMPLATE.md
```

Main files to update:

```txt
src/content/projects.ts
src/content/projectTechnicalDetails.ts
src/content/projectReleaseDetails.ts
public/project-previews
```

## Deployment

The project is static-export compatible.

The output folder after build is:

```txt
out
```

Recommended hosting options:

```txt
Netlify
Cloudflare Pages
GitHub Pages
```

Current preferred fallback while Netlify credits are unavailable:

```txt
Cloudflare Pages
```

## Production routes to verify

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

## SEO routes to verify

```txt
/robots.txt
/sitemap.xml
/manifest.webmanifest
/opengraph-image
```

## Project routes to verify

```txt
/en/projects/private-space/
/pl/projects/private-space/
/en/projects/aurora-beauty/
/pl/projects/aurora-beauty/
/en/projects/web-dev-portfolio/
/pl/projects/web-dev-portfolio/
```

## Release marker

Current release:

```txt
v1.1.0
```

The footer displays the current release version from:

```txt
src/config/release.ts
```

## Future work

The application structure is ready. Future improvements should focus mostly on content quality and real project evidence:

```txt
real screenshots
live demos for more projects
public source links where possible
custom domain
new portfolio entries
```
