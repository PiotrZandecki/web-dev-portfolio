import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Dictionary } from "@/lib/i18n";
import { Locale } from "@/types/locale";

type HeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Header({ locale, dictionary }: HeaderProps) {
  const navigationItems = [
    { label: dictionary.navigation.home, href: `/${locale}` },
    { label: dictionary.navigation.projects, href: `/${locale}/projects` },
    { label: dictionary.navigation.about, href: `/${locale}#about` },
    { label: dictionary.navigation.skills, href: `/${locale}#skills` },
    { label: dictionary.navigation.contact, href: `/${locale}#contact` },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href={`/${locale}`}
          className="text-lg font-semibold tracking-tight text-white"
        >
          Piotr.dev
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
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

      <nav className="mx-auto flex max-w-6xl gap-3 overflow-x-auto px-6 pb-4 text-sm text-slate-300 md:hidden">
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
