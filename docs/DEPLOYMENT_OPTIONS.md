# Deployment options

The portfolio is configured as a static export, so it can be deployed on multiple static hosting platforms.

## Current hosting

Current production URL:

```txt
https://zandeckidev.netlify.app
```

Current primary deployment platform:

```txt
Netlify
```

If Netlify deploy credits are unavailable, the project can still be developed, committed and pushed to GitHub. Deployment can be resumed later or moved to another static hosting provider.

## Required production environment variables

Use these variables on any hosting provider:

```env
NEXT_PUBLIC_SITE_URL=https://your-production-url
NEXT_PUBLIC_CONTACT_EMAIL=p.zandecki24@gmail.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/PiotrZandecki
NEXT_PUBLIC_REPOSITORY_URL=https://github.com/PiotrZandecki/web-dev-portfolio
```

## Build settings

Use:

```txt
Build command: npm run build
Output directory: out
```

## Option 1: Netlify

Recommended settings:

```txt
Build command: npm run build
Publish directory: out
Node version: 22
```

Use Netlify when:

```txt
credits are available
existing production URL should stay unchanged
simple GitHub integration is enough
```

## Option 2: Cloudflare Pages

Recommended settings:

```txt
Framework preset: None or Next.js static export
Build command: npm run build
Output directory: out
Node version: 22
```

Use Cloudflare Pages when:

```txt
Netlify credits are exhausted
a free static hosting alternative is needed
the project remains a static export
```

After moving to Cloudflare Pages, update:

```env
NEXT_PUBLIC_SITE_URL=https://your-project.pages.dev
```

Then run a fresh production build and verify:

```txt
/en/
/pl/
/en/projects/
/pl/projects/
/en/contact/
/pl/contact/
/robots.txt
/sitemap.xml
/manifest.webmanifest
/opengraph-image
```

## Option 3: GitHub Pages

GitHub Pages can also host static output, but it may require additional repository configuration.

Use GitHub Pages when:

```txt
the repository should host the site directly
a simple static hosting option is enough
custom GitHub Actions workflow is acceptable
```

Recommended approach:

```txt
build the project
publish the out directory
verify all localized routes
```

## Deployment checklist

Before deployment:

```bash
npm run lint
npm run build
```

After deployment:

```txt
check homepage EN and PL
check project pages EN and PL
check sitemap
check robots
check manifest
check Open Graph image
check invalid routes
check live/source links
```

## Notes

The project should remain hosting-provider independent.

Avoid provider-specific features unless they are truly needed. The current architecture works best as a portable static portfolio.
