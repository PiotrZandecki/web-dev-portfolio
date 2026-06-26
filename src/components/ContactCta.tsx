import Link from "next/link";
import { getContactLinks, siteConfig } from "@/config/site";
import { Dictionary } from "@/lib/i18n";
import { Locale } from "@/types/locale";

type ContactCtaProps = {
  locale: Locale;
  dictionary: Dictionary;
};

function getExternalLinkProps(href: string) {
  const isEmailLink = href.startsWith("mailto:");

  return {
    target: isEmailLink ? undefined : "_blank",
    rel: isEmailLink ? undefined : "noreferrer",
  };
}

export function ContactCta({ locale, dictionary }: ContactCtaProps) {
  const contactLinks = getContactLinks();

  const contactItems = [
    {
      title: dictionary.contactSection.emailTitle,
      description: dictionary.contactSection.emailDescription,
      value: siteConfig.email || dictionary.contactSection.pendingValue,
      href: contactLinks.email || undefined,
    },
    {
      title: dictionary.contactSection.githubTitle,
      description: dictionary.contactSection.githubDescription,
      value: siteConfig.githubUrl || dictionary.contactSection.pendingValue,
      href: contactLinks.github || undefined,
    },
    {
      title: dictionary.contactSection.linkedinTitle,
      description: dictionary.contactSection.linkedinDescription,
      value: siteConfig.linkedinUrl || dictionary.contactSection.pendingValue,
      href: contactLinks.linkedin || undefined,
    },
  ];

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              {dictionary.contactSection.eyebrow}
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              {dictionary.contactSection.title}
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              {dictionary.contactSection.description}
            </p>

            <p className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm leading-6 text-cyan-200">
              {dictionary.contactSection.currentlyAvailable}
            </p>

            <Link
              href={`/${locale}/projects`}
              className="mt-8 inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              {dictionary.common.viewProjects}
            </Link>
          </div>

          <div className="grid gap-4">
            {contactItems.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-slate-900 p-5"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.description}
                    </p>

                    <p className="mt-3 break-all text-sm text-slate-500">
                      {item.value}
                    </p>
                  </div>

                  {item.href ? (
                    <a
                      href={item.href}
                      {...getExternalLinkProps(item.href)}
                      aria-label={`${dictionary.contactSection.openLink}: ${item.title}`}
                      className="shrink-0 rounded-full bg-cyan-400 px-4 py-2 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                    >
                      {dictionary.contactSection.openLink}
                    </a>
                  ) : (
                    <span className="shrink-0 rounded-full bg-white/10 px-4 py-2 text-center text-sm font-semibold text-slate-400">
                      {dictionary.contactSection.pendingValue}
                    </span>
                  )}
                </div>
              </article>
            ))}

            <p className="text-xs leading-5 text-slate-500">
              {dictionary.contactSection.emailPlaceholderNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
