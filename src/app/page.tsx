import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function RootPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-20 text-slate-100">
      <section className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          {siteConfig.name}
        </p>

        <h1 className="mt-5 text-5xl font-bold tracking-tight text-white md:text-7xl">
          Web Developer Portfolio
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          Choose a language version to continue.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/en/"
            className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            English
          </Link>

          <Link
            href="/pl/"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
          >
            Polski
          </Link>
        </div>
      </section>
    </main>
  );
}
