"use client";

import { useEffect } from "react";
import Link from "next/link";

type ErrorPageProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <section className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Error
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight text-white md:text-7xl">
          Something went wrong
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          An unexpected error occurred while rendering this page. You can try
          again or return to the homepage.
        </p>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          Wystąpił nieoczekiwany błąd podczas renderowania tej strony. Możesz
          spróbować ponownie albo wrócić na stronę główną.
        </p>

        {error.digest ? (
          <p className="mt-6 rounded-2xl bg-slate-950 p-4 font-mono text-sm text-slate-400">
            Error digest: {error.digest}
          </p>
        ) : null}

        <div className="mt-8 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={reset}
            className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Try again
          </button>

          <Link
            href="/en/"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
          >
            English homepage
          </Link>

          <Link
            href="/pl/"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
          >
            Polska strona główna
          </Link>
        </div>
      </section>
    </main>
  );
}
