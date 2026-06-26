type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
        {eyebrow}
      </p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h1>

      {description ? (
        <p className="mt-4 max-w-2xl text-slate-300">{description}</p>
      ) : null}
    </div>
  );
}
