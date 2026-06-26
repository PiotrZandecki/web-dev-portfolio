import Link from "next/link";
import { Dictionary } from "@/lib/i18n";
import { Locale } from "@/types/locale";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

type HeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Header({ locale, dictionary }: HeaderProps) {
  const navigationItems = [
    { label: dictionary.navigation.home, href: `/${locale}` },
    { label: dictionary.navigation.projects, href: `/${locale}/projects` },
    { label: dictionary.navigation.about, href: `/${locale}#about` },
    { label: dictionary.navigation.contact, href: `/${locale}#contact` },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
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
    </header>
  );
}
