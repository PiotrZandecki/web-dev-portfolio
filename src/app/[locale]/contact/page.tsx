import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCta } from "@/components/ContactCta";
import { PageIntro } from "@/components/PageIntro";
import { getDictionary, isLocale } from "@/lib/i18n";
import { locales, Locale } from "@/types/locale";

type ContactPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const contactPageCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
    breadcrumbHome: string;
    breadcrumbContact: string;
  }
> = {
  en: {
    eyebrow: "Contact",
    title: "Let’s talk about a practical frontend project.",
    description:
      "Use the contact links below to reach Z-TECH directly. The current focus is on frontend projects, business websites, portfolio pages and clean web interfaces.",
    metaTitle: "Contact | Z-TECH",
    metaDescription:
      "Contact Z-TECH Piotr Zandecki for frontend projects, business websites and portfolio web development.",
    breadcrumbHome: "Home",
    breadcrumbContact: "Contact",
  },
  pl: {
    eyebrow: "Kontakt",
    title: "Porozmawiajmy o praktycznym projekcie frontendowym.",
    description:
      "Skorzystaj z linków kontaktowych poniżej, żeby skontaktować się bezpośrednio z Z-TECH. Aktualny kierunek to projekty frontendowe, strony firmowe, portfolio i czyste interfejsy webowe.",
    metaTitle: "Kontakt | Z-TECH",
    metaDescription:
      "Kontakt z Z-TECH Piotr Zandecki w sprawie projektów frontendowych, stron firmowych i web developmentu.",
    breadcrumbHome: "Start",
    breadcrumbContact: "Kontakt",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const copy = contactPageCopy[locale];

  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: {
      languages: {
        en: "/en/contact/",
        pl: "/pl/contact/",
      },
    },
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);
  const copy = contactPageCopy[locale];

  const breadcrumbItems = [
    {
      label: copy.breadcrumbHome,
      href: `/${locale}/`,
    },
    {
      label: copy.breadcrumbContact,
    },
  ];

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <Breadcrumbs items={breadcrumbItems} />

      <PageIntro
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />

      <ContactCta locale={locale} dictionary={dictionary} />
    </main>
  );
}
