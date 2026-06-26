# Piotr.dev — Web Developer Portfolio

Bilingual web developer portfolio built with Next.js, TypeScript and Tailwind CSS.

The portfolio is designed as a central hub for smaller web development projects. Each project has its own page, case study sections, technology stack, links area and prepared space for embedded live previews.

## Tech stack

- Next.js
- TypeScript
- Tailwind CSS
- App Router
- i18n routing with `/en` and `/pl`
- SEO routes: sitemap, robots, manifest, Open Graph image

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
NEXT_PUBLIC_LINKEDIN_URL=
```

For production deployment, set these values in the hosting provider panel.

Example:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/your-login
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/your-profile
```

## Available routes

```txt
/en
/pl
/en/projects
/pl/projects
/en/projects/private-space
/pl/projects/private-space
/en/projects/aurora-beauty
/pl/projects/aurora-beauty
/en/projects/web-dev-portfolio
/pl/projects/web-dev-portfolio
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

Then verify locally:

```bash
npm run dev
```

Check:

```txt
http://localhost:3000/en
http://localhost:3000/pl
http://localhost:3000/robots.txt
http://localhost:3000/sitemap.xml
http://localhost:3000/manifest.webmanifest
http://localhost:3000/opengraph-image
```

## Deployment notes

Recommended deployment target: Vercel.

Before deployment:

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Add environment variables:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_CONTACT_EMAIL`
   - `NEXT_PUBLIC_GITHUB_URL`
   - `NEXT_PUBLIC_LINKEDIN_URL`
4. Run production build.
5. Check both language versions after deployment.
