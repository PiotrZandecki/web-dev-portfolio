import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-10">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
        {items.map((item, index) => {
          const isLastItem = index === items.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-2"
            >
              {index > 0 ? (
                <span aria-hidden="true" className="text-slate-600">
                  /
                </span>
              ) : null}

              {item.href && !isLastItem ? (
                <Link
                  href={item.href}
                  className="rounded-full px-2 py-1 transition hover:bg-white/5 hover:text-cyan-300"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLastItem ? "page" : undefined}
                  className="rounded-full px-2 py-1 text-slate-200"
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
