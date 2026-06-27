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
            className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/35 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-cyan-950/20"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
            >
              <div className="absolute -right-24 -top-24 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-cyan-400/60 via-cyan-300/20 to-transparent" />
            </div>

            <div className="relative flex h-full flex-col">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-lg font-bold text-cyan-300 ring-1 ring-cyan-400/10 transition group-hover:bg-cyan-400/15 group-hover:ring-cyan-400/25">
                {method.id === "email" ? "@" : "{ }"}
              </div>

              <h3 className="text-2xl font-semibold tracking-tight text-white">
                {method.title[locale]}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-6 text-slate-300">
                {method.description[locale]}
              </p>

              <p className="mt-5 break-all rounded-2xl border border-white/5 bg-slate-950 p-4 text-sm text-slate-400 transition group-hover:border-cyan-400/15">
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
                  className="zt-button-press group/link mt-6 inline-flex w-fit items-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  {method.cta}
                  <span
                    aria-hidden="true"
                    className="ml-2 transition group-hover/link:translate-x-0.5"
                  >
                    →
                  </span>
                </a>
              ) : (
                <span className="mt-6 inline-flex w-fit rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-slate-400">
                  {locale === "pl" ? "Do uzupełnienia" : "Pending"}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
