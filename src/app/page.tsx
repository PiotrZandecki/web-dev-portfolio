"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";

type PreviewLocale = "en" | "pl";

const languagePreviewCopy: Record<
  PreviewLocale,
  {
    eyebrow: string;
    title: string;
    description: string;
    hint: string;
    englishTitle: string;
    polishTitle: string;
  }
> = {
  en: {
    eyebrow: siteConfig.name,
    title: "Web Developer Portfolio",
    description:
      "Choose a language version to continue to the Z-TECH portfolio.",
    hint: "Hover or focus a language to preview the interface language. Click to enter.",
    englishTitle: "Continue in English",
    polishTitle: "Preview Polish",
  },
  pl: {
    eyebrow: siteConfig.name,
    title: "Portfolio Web Developera",
    description: "Wybierz wersję językową, aby przejść do portfolio Z-TECH.",
    hint: "Najedź kursorem albo przejdź tabulatorem na język, aby podejrzeć wersję interfejsu. Kliknij, aby wejść.",
    englishTitle: "Podgląd angielskiego",
    polishTitle: "Przejdź po polsku",
  },
};

const copyVariants = {
  initial: {
    opacity: 0,
    y: 10,
    filter: "blur(6px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  exit: {
    opacity: 0,
    y: -8,
    filter: "blur(6px)",
  },
};

export default function RootPage() {
  const [previewLocale, setPreviewLocale] = useState<PreviewLocale>("en");
  const shouldReduceMotion = useReducedMotion();
  const copy = languagePreviewCopy[previewLocale];

  const languageOptions = [
    {
      locale: "en" as const,
      href: "/en/",
      label: "EN",
      title: copy.englishTitle,
    },
    {
      locale: "pl" as const,
      href: "/pl/",
      label: "PL",
      title: copy.polishTitle,
    },
  ];

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 py-20 text-slate-100">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl zt-float-slow"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl zt-float-slower"
      />

      <motion.section
        className="relative mx-auto max-w-2xl text-center"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          {copy.eyebrow}
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={previewLocale}
            variants={shouldReduceMotion ? undefined : copyVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <h1 className="mt-5 text-5xl font-bold tracking-tight text-white md:text-7xl">
              {copy.title}
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
              {copy.description}
            </p>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-slate-500">
              {copy.hint}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex justify-center gap-3">
          {languageOptions.map((option, index) => {
            const isActive = previewLocale === option.locale;

            return (
              <motion.div
                key={option.locale}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: shouldReduceMotion ? 0 : 0.25 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={option.href}
                  onMouseEnter={() => setPreviewLocale(option.locale)}
                  onFocus={() => setPreviewLocale(option.locale)}
                  title={option.title}
                  aria-label={option.title}
                  className={`zt-button-press inline-flex h-12 min-w-16 items-center justify-center rounded-full border px-5 text-sm font-bold uppercase tracking-[0.2em] ${
                    isActive
                      ? "border-cyan-400 bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-950/40"
                      : "border-white/15 bg-white/5 text-slate-300 hover:border-white/40 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {option.label}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </main>
  );
}
