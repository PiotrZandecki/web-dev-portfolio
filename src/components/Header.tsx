import Link from "next/link";
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

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur supports-backdrop-filter:bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href={`/${locale}/`}
          aria-label={`${siteConfig.name} homepage`}
          className="text-lg font-semibold tracking-tight text-white transition hover:text-cyan-200"
        >
          {siteConfig.name}
        </Link>

        <nav
          aria-label={locale === "pl" ? "Główna nawigacja" : "Main navigation"}
          className="hidden items-center gap-4 text-sm text-slate-300 xl:flex"
        >
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
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
            className="shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-400/40 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
