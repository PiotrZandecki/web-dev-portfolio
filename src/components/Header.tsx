import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { siteConfig } from "@/config/site";
import { getMainNavigationItems } from "@/config/navigation";
import { Dictionary } from "@/lib/i18n";
import { Locale } from "@/types/locale";

type HeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Header({ locale, dictionary }: HeaderProps) {
  const navigationItems = getMainNavigationItems(locale, dictionary);
  const homeHref = `/${locale}/`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur supports-backdrop-filter:bg-slate-950/70">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-cyan-400/25 to-transparent"
      />

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href={homeHref}
          aria-label={
            locale === "pl"
              ? `${siteConfig.name} — strona główna`
              : `${siteConfig.name} — homepage`
          }
          className="inline-flex shrink-0 transition hover:opacity-90"
        >
          <span className="hidden sm:inline-flex">
            <BrandLogo size="sm" />
          </span>

          <span className="inline-flex sm:hidden">
            <BrandLogo variant="mark" size="sm" />
          </span>
        </Link>

        <nav
          aria-label={locale === "pl" ? "Główna nawigacja" : "Main navigation"}
          className="hidden items-center gap-1 text-sm text-slate-300 xl:flex"
        >
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative rounded-full px-3 py-2 transition hover:text-white"
            >
              <span>{item.label}</span>

              <span
                aria-hidden="true"
                className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-cyan-300 transition duration-300 group-hover:scale-x-100"
              />
            </Link>
          ))}
        </nav>

        <LanguageSwitcher currentLocale={locale} />
      </div>

      <nav
        aria-label={locale === "pl" ? "Nawigacja mobilna" : "Mobile navigation"}
        className="no-scrollbar mx-auto flex max-w-6xl gap-3 overflow-x-auto px-6 pb-4 text-sm text-slate-300 xl:hidden"
      >
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
