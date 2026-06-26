import Link from "next/link";

export default function LocaleNotFound() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <section className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          404
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight text-white md:text-7xl">
          Page not found
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          This localized page does not exist. You can return to one of the main
          language versions below.
        </p>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          Ta lokalizowana strona nie istnieje. Możesz wrócić do jednej z
          głównych wersji językowych poniżej.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/en/"
            className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
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
