import { getContactLinks, siteConfig } from "@/config/site";
import { contactMethods, contactPageDetails } from "@/content/contact";
import { Locale } from "@/types/locale";

type ContactMethodsSectionProps = {
  locale: Locale;
};

function getExternalLinkProps(href: string) {
  const isEmailLink = href.startsWith("mailto:");

  return {
    target: isEmailLink ? undefined : "_blank",
    rel: isEmailLink ? undefined : "noreferrer",
  };
}

export function ContactMethodsSection({ locale }: ContactMethodsSectionProps) {
  const contactLinks = getContactLinks();
  const pageDetails = contactPageDetails[locale];

  const methods = contactMethods.map((method) => {
    if (method.id === "email") {
      const emailHref = siteConfig.email
        ? `mailto:${siteConfig.email}?subject=${encodeURIComponent(
            pageDetails.emailSubject,
          )}&body=${pageDetails.emailBody}`
        : "";

      return {
        ...method,
        value: siteConfig.email,
        href: emailHref,
        cta: pageDetails.emailCta,
      };
    }

    return {
      ...method,
      value: siteConfig.githubUrl,
      href: contactLinks.github,
      cta: pageDetails.githubCta,
    };
  });

  return (
    <section
      aria-labelledby="contact-methods-heading"
      className="mx-auto max-w-6xl px-0 py-10"
    >
      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Contact channels
        </p>

        <h2
          id="contact-methods-heading"
          className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl"
        >
          {locale === "pl"
            ? "Wybierz najwygodniejszy kanał kontaktu."
            : "Choose the most convenient contact channel."}
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {methods.map((method) => (
          <article
            key={method.id}
            className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-lg font-bold text-cyan-300">
              {method.id === "email" ? "@" : "{ }"}
            </div>

            <h3 className="text-2xl font-semibold tracking-tight text-white">
              {method.title[locale]}
            </h3>

            <p className="mt-4 flex-1 text-sm leading-6 text-slate-300">
              {method.description[locale]}
            </p>

            <p className="mt-5 break-all rounded-2xl bg-slate-900 p-4 text-sm text-slate-400">
              {method.value ||
                (locale === "pl" ? "Do uzupełnienia" : "To be added")}
            </p>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              {method.helper[locale]}
            </p>

            {method.href ? (
              <a
                href={method.href}
                {...getExternalLinkProps(method.href)}
                className="mt-6 inline-flex w-fit rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                {method.cta}
              </a>
            ) : (
              <span className="mt-6 inline-flex w-fit rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-slate-400">
                {locale === "pl" ? "Do uzupełnienia" : "Pending"}
              </span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
