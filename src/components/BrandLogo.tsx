import { siteConfig } from "@/config/site";

type BrandLogoProps = {
  variant?: "full" | "mark";
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: {
    mark: "h-9 w-9",
    text: "text-lg",
    subtitle: "text-[0.48rem]",
  },
  md: {
    mark: "h-11 w-11",
    text: "text-2xl",
    subtitle: "text-[0.56rem]",
  },
  lg: {
    mark: "h-14 w-14",
    text: "text-3xl",
    subtitle: "text-[0.64rem]",
  },
};

function BrandMark({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`${className} relative flex shrink-0 items-center justify-center`}
    >
      <svg
        viewBox="0 0 120 120"
        role="img"
        className="h-full w-full drop-shadow-[0_0_18px_rgb(34_211_238/0.22)]"
      >
        <defs>
          <linearGradient id="brand-hex" x1="18" y1="14" x2="102" y2="106">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>

          <linearGradient id="brand-z" x1="28" y1="28" x2="92" y2="92">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
        </defs>

        <polygon
          points="60 8 104 34 104 86 60 112 16 86 16 34"
          fill="none"
          stroke="url(#brand-hex)"
          strokeWidth="8"
          strokeLinejoin="round"
        />

        <path d="M36 39H83L72 52H51L36 39Z" fill="url(#brand-z)" />

        <path d="M83 39L52 82H37L68 39H83Z" fill="url(#brand-z)" />

        <path d="M37 82H83L72 69H52L37 82Z" fill="url(#brand-z)" />

        <path d="M72 63L90 43L78 75H62L72 63Z" fill="#22d3ee" opacity="0.95" />
      </svg>
    </span>
  );
}

export function BrandLogo({ variant = "full", size = "md" }: BrandLogoProps) {
  const classes = sizeClasses[size];

  if (variant === "mark") {
    return <BrandMark className={classes.mark} />;
  }

  return (
    <span className="inline-flex items-center gap-3">
      <BrandMark className={classes.mark} />

      <span className="leading-none">
        <span
          className={`${classes.text} block font-bold tracking-[0.22em] text-white`}
        >
          <span className="text-cyan-400">Z</span>
          <span className="text-slate-200">-TECH</span>
        </span>

        <span
          className={`${classes.subtitle} mt-2 block font-semibold uppercase tracking-[0.36em] text-slate-500`}
        >
          Piotr Zandecki
        </span>
      </span>

      <span className="sr-only">{siteConfig.name}</span>
    </span>
  );
}
