"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (/^\/industries\/[^/]+\/[^/]+/.test(pathname)) return null;
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--color-dark)] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md cp-gradient-bar flex items-center justify-center">
                <span className="text-white font-black text-xs">U</span>
              </div>
              <span className="text-white font-bold text-sm tracking-tight">ULTRA Design Agency</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Custom web design, SEO, and care plans for businesses that take their online presence seriously.
            </p>
          </div>
          <div>
            <p className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-4">Services</p>
            <div className="flex flex-col gap-2.5">
              {["web-design", "website-care", "seo", "branding", "ecommerce", "audit"].map((s) => (
                <Link key={s} href={`/services/${s}`} className="text-sm text-white/50 hover:text-white transition-colors capitalize">
                  {s.replace("-", " ")}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-4">Industries</p>
            <div className="flex flex-col gap-2.5">
              {["service-companies","medical","legal","manufacturing","hospitality","financial","defense"].map((s) => (
                <Link key={s} href={`/industries/${s}`} className="text-sm text-white/50 hover:text-white transition-colors capitalize">
                  {s.replace("-", " ")}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-4">Company</p>
            <div className="flex flex-col gap-2.5">
              {[
                { href: "/about", label: "About" },
                { href: "/work", label: "Our Work" },
                { href: "/process", label: "How We Work" },
                { href: "/pricing", label: "Pricing" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-white/50 hover:text-white transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">&copy; {year} ULTRA Design Agency · Tampa, FL · (813) 205-6160</p>
          <p className="text-white/15 text-xs">Built with Next.js + Vercel</p>
        </div>
      </div>
    </footer>
  );
}
