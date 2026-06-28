import { Dictionary } from "@/lib/i18n";
import { Locale } from "@/types/locale";

type NavigationItem = {
  label: string;
  href: string;
};

const navigationCopy: Record<
  Locale,
  {
    services: string;
    stack: string;
    faq: string;
  }
> = {
  en: {
    services: "Services",
    stack: "Stack",
    faq: "FAQ",
  },
  pl: {
    services: "Usługi",
    stack: "Technologie",
    faq: "FAQ",
  },
};

export function getMainNavigationItems(
  locale: Locale,
  dictionary: Dictionary,
): NavigationItem[] {
  const copy = navigationCopy[locale];

  return [
    {
      label: dictionary.navigation.home,
      href: `/${locale}/`,
    },
    {
      label: dictionary.navigation.about,
      href: `/${locale}/about/`,
    },
    {
      label: copy.services,
      href: `/${locale}/services/`,
    },
    {
      label: dictionary.navigation.projects,
      href: `/${locale}/projects/`,
    },
    {
      label: copy.stack,
      href: `/${locale}/stack/`,
    },
    {
      label: copy.faq,
      href: `/${locale}/services/#faq`,
    },
    {
      label: dictionary.navigation.contact,
      href: `/${locale}/contact/#contact-top`,
    },
  ];
}

export function getLanguageNavigationItems(): NavigationItem[] {
  return [
    {
      label: "English",
      href: "/en/",
    },
    {
      label: "Polski",
      href: "/pl/",
    },
  ];
}
