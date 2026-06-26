import { siteConfig } from "@/config/site";
import { Dictionary } from "@/lib/i18n";

type FooterProps = {
  dictionary: Dictionary;
};

export function Footer({ dictionary }: FooterProps) {
  return (
    <footer id="contact" className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>
          © 2026 {siteConfig.name}. {dictionary.footer.rights}
        </p>

        <p>{dictionary.footer.builtWith}</p>
      </div>
    </footer>
  );
}
