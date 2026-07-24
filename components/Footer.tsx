import Link from "next/link";
import siteConfig from "@/lib/site.config";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="https://cpdatacenters.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
          <div className="flex flex-col leading-none">
            <span className="text-sm font-semibold text-white tracking-wide">Amory Tech Park</span>
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/60">Monroe County, MS</span>
          </div>
        </a>

        <nav className="flex items-center gap-6 text-sm text-white/50 flex-wrap justify-center">
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/impact" className="hover:text-white transition-colors">Impact</Link>
          <Link href="/environment" className="hover:text-white transition-colors">Environment</Link>
          <Link href="/community" className="hover:text-white transition-colors">Community</Link>
          <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>

        <div className="flex flex-col items-center md:items-end gap-1">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Crystal Peaks Data Centers
          </p>
          <p className="text-white/20 text-xs">{siteConfig.city}, {siteConfig.state}</p>
          <a
            href="https://ultradesignagency.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/15 hover:text-white/40 text-xs transition-colors"
          >
            Built by ULTRA
          </a>
        </div>
      </div>
    </footer>
  );
}
