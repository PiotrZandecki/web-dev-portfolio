"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale, locales } from "@/types/locale";

type LanguageSwitcherProps = {
  currentLocale: Locale;
};

const languageLabels: Record<Locale, string> = {
  en: "English",
  pl: "Polski",
};

const switcherCopy: Record<
  Locale,
  {
    ariaLabel: string;
    switchTo: Record<Locale, string>;
  }
> = {
  en: {
    ariaLabel: "Language switcher",
    switchTo: {
      en: "Switch to English",
      pl: "Switch to Polish",
    },
  },
  pl: {
    ariaLabel: "Przełącznik języka",
    switchTo: {
      en: "Przełącz na angielski",
      pl: "Przełącz na polski",
    },
  },
};

function withTrailingSlash(path: string) {
  return path.endsWith("/") ? path : `${path}/`;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const copy = switcherCopy[currentLocale];

  function getLocalizedPath(targetLocale: Locale) {
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
      segments[0] = targetLocale;
      return withTrailingSlash(`/${segments.join("/")}`);
    }

    return `/${targetLocale}/`;
  }

  return (
    <nav
      aria-label={copy.ariaLabel}
      className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1"
    >
      {locales.map((locale) => {
        const isActive = locale === currentLocale;

        return (
          <Link
            key={locale}
            href={getLocalizedPath(locale)}
            aria-current={isActive ? "page" : undefined}
            title={copy.switchTo[locale]}
            className={`rounded-full px-3 py-1 text-xs font-semibold uppercase transition ${
              isActive
                ? "bg-cyan-400 text-slate-950"
                : "text-slate-300 hover:text-white"
            }`}
          >
            {locale}
            <span className="sr-only"> — {languageLabels[locale]}</span>
          </Link>
        );
      })}
    </nav>
  );
}
