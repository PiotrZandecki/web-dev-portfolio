"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Project } from "@/content/projects";
import { projectCodeSnippets } from "@/content/projectCodeSnippets";
import { getResolvedProjectLinks } from "@/lib/project-links";
import { Locale } from "@/types/locale";

type AnimatedCodePreviewProps = {
  project: Project;
  locale: Locale;
};

const codePreviewCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    repositoryConnected: string;
    repositoryPlanned: string;
    openRepository: string;
    codePreview: string;
  }
> = {
  en: {
    eyebrow: "Live code showcase",
    title: "A looping preview of the code behind the case study.",
    description:
      "A curated look at selected implementation fragments. The preview loops through project files while the source button stays available when a public repository is connected.",
    repositoryConnected: "Repository connected",
    repositoryPlanned: "Repository planned",
    openRepository: "Open repository",
    codePreview: "Code preview",
  },
  pl: {
    eyebrow: "Live code showcase",
    title: "Zapętlony podgląd kodu stojącego za case study.",
    description:
      "Wybrany podgląd fragmentów implementacji. Preview przechodzi przez pliki projektu, a przycisk do źródła zostaje dostępny, jeśli publiczne repozytorium jest podpięte.",
    repositoryConnected: "Repozytorium podpięte",
    repositoryPlanned: "Repozytorium planowane",
    openRepository: "Otwórz repozytorium",
    codePreview: "Podgląd kodu",
  },
};

const TYPE_INTERVAL_MS = 18;
const CHARS_PER_TICK = 7;
const HOLD_AFTER_COMPLETE_MS = 1800;

export function AnimatedCodePreview({
  project,
  locale,
}: AnimatedCodePreviewProps) {
  const copy = codePreviewCopy[locale];
  const snippets = projectCodeSnippets[project.slug] ?? [];
  const links = getResolvedProjectLinks(project);
  const shouldReduceMotion = useReducedMotion();

  const [activeSnippetIndex, setActiveSnippetIndex] = useState(0);
  const [visibleCharacters, setVisibleCharacters] = useState(0);

  const activeSnippet = snippets[activeSnippetIndex];
  const fullCode = activeSnippet?.code ?? "";

  const visibleCode = shouldReduceMotion
    ? fullCode
    : fullCode.slice(0, visibleCharacters);

  const visibleLines = visibleCode.split("\n");

  useEffect(() => {
    if (shouldReduceMotion || !activeSnippet || snippets.length === 0) {
      return;
    }

    if (visibleCharacters >= fullCode.length) {
      const timeoutId = window.setTimeout(() => {
        setVisibleCharacters(0);
        setActiveSnippetIndex((currentIndex) =>
          currentIndex + 1 >= snippets.length ? 0 : currentIndex + 1,
        );
      }, HOLD_AFTER_COMPLETE_MS);

      return () => window.clearTimeout(timeoutId);
    }

    const intervalId = window.setInterval(() => {
      setVisibleCharacters((currentValue) =>
        Math.min(currentValue + CHARS_PER_TICK, fullCode.length),
      );
    }, TYPE_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [
    activeSnippet,
    fullCode.length,
    shouldReduceMotion,
    snippets.length,
    visibleCharacters,
  ]);

  if (!activeSnippet || snippets.length === 0) {
    return null;
  }

  function handleSnippetChange(nextIndex: number) {
    setVisibleCharacters(0);
    setActiveSnippetIndex(nextIndex);
  }

  return (
    <section
      id="project-code"
      aria-labelledby="project-code-heading"
      className="mt-16 scroll-mt-32"
    >
      <div className="mb-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            {copy.eyebrow}
          </p>

          <h2
            id="project-code-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            {copy.title}
          </h2>
        </div>

        <p className="max-w-2xl text-slate-300 lg:justify-self-end">
          {copy.description}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
              {links.hasSourceUrl
                ? copy.repositoryConnected
                : copy.repositoryPlanned}
            </span>

            <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-slate-300">
              {project.title}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSnippet.filename}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">
                {activeSnippet.title[locale]}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                {activeSnippet.description[locale]}
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {copy.codePreview}
                </p>

                <p className="mt-3 break-all font-mono text-sm text-cyan-200">
                  {activeSnippet.filename}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex flex-wrap gap-2">
            {snippets.map((snippet, index) => {
              const isActive = index === activeSnippetIndex;

              return (
                <button
                  key={snippet.filename}
                  type="button"
                  onClick={() => handleSnippetChange(index)}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                    isActive
                      ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-300"
                      : "border-white/10 bg-white/5 text-slate-400 hover:border-white/25 hover:text-slate-200"
                  }`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>

          {links.sourceUrl ? (
            <a
              href={links.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="zt-button-press mt-8 inline-flex rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              {copy.openRepository}
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </a>
          ) : null}
        </div>

        <div className="overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-950 shadow-2xl shadow-cyan-950/20">
          <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <p className="max-w-[70%] truncate font-mono text-xs text-slate-400">
              {activeSnippet.filename}
            </p>
          </div>

          <div className="relative h-112 overflow-hidden md:h-128 lg:h-136">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-linear-to-t from-slate-950 to-transparent"
            />

            <pre className="h-full overflow-y-auto overflow-x-hidden p-5 text-sm leading-6">
              <code className="block font-mono text-slate-300">
                {visibleLines.map((line, index) => {
                  const isActiveLine =
                    !shouldReduceMotion &&
                    index === visibleLines.length - 1 &&
                    visibleCharacters < fullCode.length;

                  return (
                    <span
                      key={`${activeSnippet.filename}-${index}-${visibleCharacters}`}
                      className={`block min-h-6 rounded px-2 ${
                        isActiveLine ? "bg-cyan-400/10 text-cyan-100" : ""
                      }`}
                    >
                      <span className="mr-4 select-none text-slate-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span>{line}</span>

                      {isActiveLine ? (
                        <span
                          aria-hidden="true"
                          className="ml-1 inline-block h-4 w-2 translate-y-0.5 bg-cyan-300 zt-soft-pulse"
                        />
                      ) : null}
                    </span>
                  );
                })}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
