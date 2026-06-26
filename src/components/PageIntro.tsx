type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="mb-12 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
        {eyebrow}
      </p>

      <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl">
        {title}
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
        {description}
      </p>
    </section>
  );
}
