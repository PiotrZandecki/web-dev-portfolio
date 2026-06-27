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
  }
> = {
  en: {
    navigationTitle: "Navigation",
    linksTitle: "Links",
    sourceCode: "Source code",
    releaseStatus: "Production-ready portfolio system",
  },
  pl: {
    navigationTitle: "Nawigacja",
    linksTitle: "Linki",
    sourceCode: "Kod źródłowy",
    releaseStatus: "Produkcyjny system portfolio",
  },
};

export function Footer({ locale, dictionary }: FooterProps) {
  const contactLinks = getContactLinks();
  const copy = footerCopy[locale];
  const navigationLinks = getMainNavigationItems(locale, dictionary);
  const languageLinks = getLanguageNavigationItems();

  const externalLinks = [
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
  ].filter((link) => Boolean(link.href));

  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link
            href={`/${locale}/`}
            className="text-2xl font-bold tracking-tight text-white transition hover:text-cyan-200"
          >
            {siteConfig.name}
          </Link>

          <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
            {siteConfig.description}
          </p>

          <p className="mt-6 text-sm text-slate-500">{siteConfig.author}</p>

          <p className="mt-2 text-sm text-slate-500">
            v{siteRelease.version} · {copy.releaseStatus}
          </p>

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
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
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
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}

            {externalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...getExternalLinkProps(link.href)}
                  className="transition hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
