"use client";

import { useState } from "react";
import Link from "next/link";
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

export default function RootPage() {
  const [previewLocale, setPreviewLocale] = useState<PreviewLocale>("en");
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
        className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
      />

      <section className="relative mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          {copy.eyebrow}
        </p>

        <h1 className="mt-5 text-5xl font-bold tracking-tight text-white transition md:text-7xl">
          {copy.title}
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
          {copy.description}
        </p>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-slate-500">
          {copy.hint}
        </p>

        <div className="mt-10 flex justify-center gap-3">
          {languageOptions.map((option) => {
            const isActive = previewLocale === option.locale;

            return (
              <Link
                key={option.locale}
                href={option.href}
                onMouseEnter={() => setPreviewLocale(option.locale)}
                onFocus={() => setPreviewLocale(option.locale)}
                title={option.title}
                aria-label={option.title}
                className={`inline-flex h-12 min-w-16 items-center justify-center rounded-full border px-5 text-sm font-bold uppercase tracking-[0.2em] transition ${
                  isActive
                    ? "border-cyan-400 bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-950/40"
                    : "border-white/15 bg-white/5 text-slate-300 hover:border-white/40 hover:bg-white/10 hover:text-white"
                }`}
              >
                {option.label}
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
