import Link from "next/link";
import { Dictionary } from "@/lib/i18n";
import { Locale } from "@/types/locale";

type ContactCtaProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function ContactCta({ locale, dictionary }: ContactCtaProps) {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
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
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <p className="text-sm text-slate-400">
              {dictionary.contactSection.currentlyAvailable}
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="mailto:your-email@example.com"
                className="rounded-full bg-cyan-400 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                {dictionary.contactSection.emailMe}
              </a>

              <Link
                href={`/${locale}/projects`}
                className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-white/40"
              >
                {dictionary.common.viewProjects}
              </Link>
            </div>

            <p className="mt-5 text-xs leading-5 text-slate-500">
              {dictionary.contactSection.emailPlaceholderNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
