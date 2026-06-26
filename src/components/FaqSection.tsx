import { faqItems } from "@/content/faq";
import { Locale } from "@/types/locale";

type FaqSectionProps = {
  locale: Locale;
};

const faqCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
  }
> = {
  en: {
    eyebrow: "FAQ",
    title: "Common questions",
    description:
      "A quick overview of what this portfolio is prepared for and how Z-TECH approaches web development projects.",
  },
  pl: {
    eyebrow: "FAQ",
    title: "Najczęstsze pytania",
    description:
      "Krótki przegląd tego, do czego przygotowane jest portfolio i jak Z-TECH podchodzi do projektów web development.",
  },
};

export function FaqSection({ locale }: FaqSectionProps) {
  const copy = faqCopy[locale];

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          {copy.eyebrow}
        </p>

        <h2
          id="faq-heading"
          className="mt-4 text-4xl font-bold tracking-tight text-white"
        >
          {copy.title}
        </h2>

        <p className="mt-4 max-w-2xl text-slate-300">{copy.description}</p>
      </div>

      <div className="grid gap-4">
        {faqItems.map((item) => (
          <article
            key={item.question.en}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
          >
            <h3 className="text-xl font-semibold tracking-tight text-white">
              {item.question[locale]}
            </h3>

            <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-300">
              {item.answer[locale]}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
