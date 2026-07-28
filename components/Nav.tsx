"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Hide on demo pages: /industries/{slug}/{page}
  if (/^\/industries\/[^/]+\/[^/]+/.test(pathname)) return null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100"
          : "bg-[var(--color-dark)]/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between gap-6">
        <Link href="/" className="flex-shrink-0 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg cp-gradient-bar flex items-center justify-center">
            <span className="text-white font-black text-sm">U</span>
          </div>
          <span className={`text-base font-bold tracking-tight transition-colors ${scrolled ? "text-[var(--color-heading)]" : "text-white"}`}>
            ULTRA
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-7 flex-1 justify-center">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-wide transition-colors whitespace-nowrap ${
                scrolled
                  ? "text-[var(--color-heading)] hover:text-[var(--color-primary)]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-3 flex-shrink-0">
          <a
            href="tel:8132056160"
            className={`text-sm font-medium transition-colors ${scrolled ? "text-[var(--color-heading)]" : "text-white/70 hover:text-white"}`}
          >
            (813) 205-6160
          </a>
          <Link
            href="/contact"
            className="text-sm font-semibold px-5 py-2.5 rounded-lg bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white transition-colors whitespace-nowrap"
          >
            Get a Quote
          </Link>
        </div>

        <button
          className={`xl:hidden p-2 space-y-1.5 ${scrolled ? "text-[var(--color-heading)]" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      <div
        className={`xl:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-8 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-[var(--color-heading)] hover:text-[var(--color-primary)] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-2 border-t border-gray-100">
            <a href="tel:8132056160" className="text-sm text-gray-500 text-center">(813) 205-6160</a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-sm font-semibold bg-[var(--color-primary)] text-white px-4 py-2.5 rounded-lg text-center"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
