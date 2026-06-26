# Z-TECH — Web Developer Portfolio

Bilingual web developer portfolio built with Next.js, TypeScript and Tailwind CSS.

Live site:

```txt
https://zandeckidev.netlify.app
```

The portfolio is designed as a central hub for smaller web development projects. Each project has its own page, case study sections, technology stack, links area and prepared space for embedded live previews.

## Author

Z-TECH Piotr Zandecki

## Tech stack

- Next.js
- TypeScript
- Tailwind CSS
- App Router
- Static export
- i18n routing with `/en` and `/pl`
- SEO routes: sitemap, robots, manifest, Open Graph image
- Netlify deployment

## Local development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Environment variables

Create `.env.local` based on `.env.example`.

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000

NEXT_PUBLIC_CONTACT_EMAIL=
NEXT_PUBLIC_GITHUB_URL=
NEXT_PUBLIC_REPOSITORY_URL=
```

For production deployment, set these values in Netlify Environment Variables.

Production values used for this project:

```env
NEXT_PUBLIC_SITE_URL=https://zandeckidev.netlify.app
NEXT_PUBLIC_CONTACT_EMAIL=p.zandecki24@gmail.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/PiotrZandecki
NEXT_PUBLIC_REPOSITORY_URL=https://github.com/PiotrZandecki/web-dev-portfolio
```

## Available routes

```txt
/
/en/
/pl/
/en/projects/
/pl/projects/
/en/services/
/pl/services/
/en/contact/
/pl/contact/
/en/projects/private-space/
/pl/projects/private-space/
/en/projects/aurora-beauty/
/pl/projects/aurora-beauty/
/en/projects/web-dev-portfolio/
/pl/projects/web-dev-portfolio/
```

## SEO routes

```txt
/robots.txt
/sitemap.xml
/manifest.webmanifest
/opengraph-image
```

## Pre-deployment checks

Run:

```bash
npm run lint
npm run build
```

The production static output is generated into:

```txt
out
```

## Netlify deployment

Build settings:

```txt
Build command: npm run build
Publish directory: out
```

These values are stored in `netlify.toml`.

Before deployment:

1. Push the repository to GitHub.
2. Import the repository in Netlify.
3. Add environment variables:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_CONTACT_EMAIL`
   - `NEXT_PUBLIC_GITHUB_URL`
   - `NEXT_PUBLIC_REPOSITORY_URL`
4. Run production build.
5. Check both language versions after deployment.

## Final check URLs

```txt
https://zandeckidev.netlify.app
https://zandeckidev.netlify.app/en/
https://zandeckidev.netlify.app/pl/
https://zandeckidev.netlify.app/en/projects/
https://zandeckidev.netlify.app/pl/projects/
https://zandeckidev.netlify.app/en/services/
https://zandeckidev.netlify.app/pl/services/
https://zandeckidev.netlify.app/en/contact/
https://zandeckidev.netlify.app/pl/contact/
https://zandeckidev.netlify.app/robots.txt
https://zandeckidev.netlify.app/sitemap.xml
https://zandeckidev.netlify.app/manifest.webmanifest
https://zandeckidev.netlify.app/opengraph-image
```
