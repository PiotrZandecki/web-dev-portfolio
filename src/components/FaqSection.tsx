"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
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
  const shouldReduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState(0);

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
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          const answerId = `faq-answer-${index}`;

          return (
            <article
              key={item.question.en}
              className={`overflow-hidden rounded-3xl border bg-white/5 transition duration-300 ${
                isOpen
                  ? "border-cyan-400/30 shadow-2xl shadow-cyan-950/10"
                  : "border-white/10 hover:border-cyan-400/20 hover:bg-white/[0.07]"
              }`}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-6 p-6 text-left"
              >
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {item.question[locale]}
                </h3>

                <span
                  aria-hidden="true"
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-lg transition ${
                    isOpen
                      ? "rotate-45 border-cyan-400/40 bg-cyan-400/10 text-cyan-300"
                      : "border-white/10 bg-slate-950 text-slate-400"
                  }`}
                >
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    id={answerId}
                    initial={
                      shouldReduceMotion ? false : { height: 0, opacity: 0 }
                    }
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : { height: "auto", opacity: 1 }
                    }
                    exit={
                      shouldReduceMotion ? undefined : { height: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/10 px-6 pb-6 pt-5">
                      <p className="max-w-4xl text-sm leading-6 text-slate-300">
                        {item.answer[locale]}
                      </p>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </section>
  );
}
