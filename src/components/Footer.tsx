import Link from "next/link";
import {
  getLanguageNavigationItems,
  getMainNavigationItems,
} from "@/config/navigation";
import { siteRelease } from "@/config/release";
import { getContactLinks, siteConfig } from "@/config/site";
import { Dictionary } from "@/lib/i18n";
import { Locale } from "@/types/locale";

type FooterProps = {
  locale: Locale;
  dictionary: Dictionary;
};

type FooterLink = {
  label: string;
  href: string;
};

function getExternalLinkProps(href: string) {
  const isEmailLink = href.startsWith("mailto:");

  return {
    target: isEmailLink ? undefined : "_blank",
    rel: isEmailLink ? undefined : "noreferrer",
  };
}

const footerCopy: Record<
  Locale,
  {
    navigationTitle: string;
    linksTitle: string;
    sourceCode: string;
    releaseStatus: string;
    versionLabel: string;
  }
> = {
  en: {
    navigationTitle: "Navigation",
    linksTitle: "Links",
    sourceCode: "Source code",
    releaseStatus: "Production-ready portfolio system",
    versionLabel: "Release",
  },
  pl: {
    navigationTitle: "Nawigacja",
    linksTitle: "Linki",
    sourceCode: "Kod źródłowy",
    releaseStatus: "Produkcyjny system portfolio",
    versionLabel: "Wersja",
  },
};

export function Footer({ locale, dictionary }: FooterProps) {
  const contactLinks = getContactLinks();
  const copy = footerCopy[locale];
  const navigationLinks = getMainNavigationItems(locale, dictionary);
  const languageLinks = getLanguageNavigationItems();

  const externalLinks: FooterLink[] = [
    {
      label: dictionary.contactSection.emailTitle,
      href: contactLinks.email,
    },
    {
      label: dictionary.contactSection.githubTitle,
      href: contactLinks.github,
    },
    {
      label: copy.sourceCode,
      href: siteConfig.repositoryUrl,
    },
  ].filter((link): link is FooterLink => Boolean(link.href));

  return (
    <footer className="relative border-t border-white/10 px-6 py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-400/30 to-transparent"
      />

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.25fr_0.85fr_0.85fr]">
        <div>
          <Link
            href={`/${locale}/`}
            className="group inline-flex items-center gap-3 text-2xl font-bold tracking-tight text-white transition hover:text-cyan-200"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-sm font-bold text-cyan-300 transition group-hover:border-cyan-400/40 group-hover:bg-cyan-400/15">
              Z
            </span>

            <span>{siteConfig.name}</span>
          </Link>

          <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
            {siteConfig.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
              {copy.versionLabel} v{siteRelease.version}
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
              {copy.releaseStatus}
            </span>
          </div>

          <p className="mt-6 text-sm text-slate-500">{siteConfig.author}</p>

          <p className="mt-2 text-sm text-slate-500">
            © 2026 {siteConfig.name}. {dictionary.footer.rights}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            {dictionary.footer.builtWith}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            {copy.navigationTitle}
          </h2>

          <ul className="mt-5 grid gap-3 text-sm text-slate-400">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center transition hover:text-white"
                >
                  <span
                    aria-hidden="true"
                    className="mr-2 h-1.5 w-1.5 rounded-full bg-slate-600 transition group-hover:bg-cyan-300"
                  />
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer links">
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            {copy.linksTitle}
          </h2>

          <ul className="mt-5 grid gap-3 text-sm text-slate-400">
            {languageLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center transition hover:text-white"
                >
                  <span
                    aria-hidden="true"
                    className="mr-2 h-1.5 w-1.5 rounded-full bg-slate-600 transition group-hover:bg-cyan-300"
                  />
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}

            {externalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...getExternalLinkProps(link.href)}
                  className="group inline-flex items-center transition hover:text-white"
                >
                  <span
                    aria-hidden="true"
                    className="mr-2 h-1.5 w-1.5 rounded-full bg-slate-600 transition group-hover:bg-cyan-300"
                  />
                  <span>{link.label}</span>
                  <span
                    aria-hidden="true"
                    className="ml-2 transition group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
