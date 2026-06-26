import Link from "next/link";
import { contactPageDetails, projectInquiryBlocks } from "@/content/contact";
import { Locale } from "@/types/locale";

type ProjectInquirySectionProps = {
  locale: Locale;
};

export function ProjectInquirySection({ locale }: ProjectInquirySectionProps) {
  const copy = contactPageDetails[locale];

  return (
    <section
      aria-labelledby="project-inquiry-heading"
      className="mx-auto max-w-6xl px-0 py-10"
    >
      <div className="mb-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            {locale === "pl" ? "Zapytanie projektowe" : "Project inquiry"}
          </p>

          <h2
            id="project-inquiry-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            {copy.responseTitle}
          </h2>
        </div>

        <p className="max-w-2xl text-slate-300 lg:justify-self-end">
          {copy.responseDescription}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projectInquiryBlocks.map((block) => (
          <article
            key={block.title.en}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
          >
            <h3 className="text-xl font-semibold tracking-tight text-white">
              {block.title[locale]}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {block.description[locale]}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {block.items[locale].map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/6 p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              {copy.messageTitle}
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
              {copy.messageDescription}
            </p>
          </div>

          <Link
            href={`/${locale}/projects/`}
            className="w-fit rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
          >
            {locale === "pl" ? "Zobacz projekty" : "View projects"}
          </Link>
        </div>
      </div>
    </section>
  );
}
