import Link from "next/link";
import { getContactLinks, siteConfig } from "@/config/site";
import { Dictionary } from "@/lib/i18n";

type FooterProps = {
  dictionary: Dictionary;
};

function getExternalLinkProps(href: string) {
  const isEmailLink = href.startsWith("mailto:");

  return {
    target: isEmailLink ? undefined : "_blank",
    rel: isEmailLink ? undefined : "noreferrer",
  };
}

export function Footer({ dictionary }: FooterProps) {
  const contactLinks = getContactLinks();

  const footerLinks = [
    {
      label: dictionary.contactSection.emailTitle,
      href: contactLinks.email,
    },
    {
      label: dictionary.contactSection.githubTitle,
      href: contactLinks.github,
    },
  ].filter((link) => Boolean(link.href));

  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-sm text-slate-400">
            © 2026 {siteConfig.name}. {dictionary.footer.rights}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            {dictionary.footer.builtWith}
          </p>
        </div>

        <nav
          aria-label="Footer links"
          className="flex flex-wrap gap-3 text-sm text-slate-400"
        >
          <Link
            href="/en/"
            className="rounded-full border border-white/10 px-4 py-2 transition hover:border-white/40 hover:text-white"
          >
            EN
          </Link>

          <Link
            href="/pl/"
            className="rounded-full border border-white/10 px-4 py-2 transition hover:border-white/40 hover:text-white"
          >
            PL
          </Link>

          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...getExternalLinkProps(link.href)}
              className="rounded-full border border-white/10 px-4 py-2 transition hover:border-white/40 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
