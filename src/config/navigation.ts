import { Dictionary } from "@/lib/i18n";
import { Locale } from "@/types/locale";

export type NavigationItem = {
  label: string;
  href: string;
};

const navigationLabels: Record<
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
  const labels = navigationLabels[locale];

  return [
    {
      label: dictionary.navigation.home,
      href: `/${locale}/`,
    },
    {
      label: dictionary.navigation.projects,
      href: `/${locale}/projects/`,
    },
    {
      label: labels.services,
      href: `/${locale}/services/`,
    },
    {
      label: dictionary.navigation.about,
      href: `/${locale}/about/`,
    },
    {
      label: labels.stack,
      href: `/${locale}/stack/`,
    },
    {
      label: labels.faq,
      href: `/${locale}/#faq`,
    },
    {
      label: dictionary.navigation.contact,
      href: `/${locale}/contact/`,
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
