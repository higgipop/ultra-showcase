import Link from "next/link";

const stats = [
  { value: "25+", label: "Years of Practice" },
  { value: "$600M+", label: "Assets Under Management" },
  { value: "99%", label: "Client Retention Rate" },
  { value: "Fee-Only", label: "Fiduciary Standard" },
];

const credentials = ["CFA®", "CFP®", "CPA", "CIMA®", "ADV Part 2A"];

const pages = [
  {
    page: "home",
    label: "Homepage",
    tag: "First Impression",
    desc: "Pure text hero on white, 25+ yrs / $600M+ stats, 4 service cards, news grid, partner logos.",
  },
  {
    page: "services",
    label: "Services & Approach",
    tag: "Core Offering",
    desc: "4 alternating service sections, fee-only/fiduciary dark callout, ADV disclosure note.",
  },
  {
    page: "wealth-management",
    label: "Wealth Management",
    tag: "Interior Page",
    desc: "6-item numbered list, 6 client types grid, 4-step process, 6-question FAQ.",
  },
  {
    page: "retirement-planning",
    label: "Retirement Planning",
    tag: "Interior Page",
    desc: "SS optimization, Medicare, withdrawal sequencing, income floor, RMD, sequence-of-returns.",
  },
  {
    page: "about",
    label: "Our Advisors",
    tag: "About",
    desc: "3 advisor profiles with credentials, firm story (RIA since 2001), 4 professional affiliations.",
  },
  {
    page: "contact",
    label: "Schedule Consultation",
    tag: "Contact",
    desc: "Consultation form, what happens next, no-pressure copy, ADV Part 2A disclosure link.",
  },
];

export default function FinancialIndex() {
  return (
    <>
      {/* ULTRA demo banner */}
      <div className="bg-[#007BFF] text-white text-sm py-2.5 font-medium sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
          <span className="whitespace-nowrap">
            ✦ <strong>ULTRA Demo</strong> · Financial Services
          </span>
          <div className="flex items-center gap-3 text-xs flex-wrap">
            <Link href="/industries" className="underline underline-offset-2 opacity-80 hover:opacity-100 whitespace-nowrap">
              ← All industries
            </Link>
            <Link href="/contact" className="underline underline-offset-2 opacity-80 hover:opacity-100 whitespace-nowrap">
              Build mine →
            </Link>
          </div>
        </div>
      </div>

      {/* Hero — text-forward, no photo */}
      <section className="bg-white border-b border-gray-100 pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-6">
            Registered Investment Advisor · Est. 2001
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A2B4A] leading-tight mb-6 max-w-3xl">
            Independent. Fee-Only.<br />Built Around You.
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mb-10">
            We provide comprehensive financial planning and investment management for individuals, families, and business owners — with no commissions, no conflicts, and full fiduciary accountability.
          </p>
          <div className="flex flex-wrap gap-3 mb-12">
            <Link
              href="/industries/financial/contact"
              className="bg-[#1A2B4A] hover:bg-[#243d68] text-white font-semibold px-7 py-3.5 rounded transition-colors text-sm"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/industries/financial/services"
              className="border border-[#1A2B4A] text-[#1A2B4A] hover:bg-[#1A2B4A] hover:text-white font-semibold px-7 py-3.5 rounded transition-colors text-sm"
            >
              View Services
            </Link>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-gray-100">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl md:text-3xl font-bold text-[#1A2B4A]">{s.value}</p>
                <p className="text-gray-400 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credential badges */}
      <section className="bg-[#F7F8FA] border-b border-gray-100 py-5">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mr-2">Credentials</span>
          {credentials.map((c) => (
            <span
              key={c}
              className="text-xs font-bold text-[#1A2B4A] border border-[#1A2B4A]/20 rounded px-3 py-1.5 bg-white"
            >
              {c}
            </span>
          ))}
          <span className="text-xs text-gray-400 ml-auto hidden md:block">SIPC · FINRA Member · SEC Registered</span>
        </div>
      </section>

      {/* Page cards */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] mb-2">Design Library</p>
          <h2 className="text-xl font-bold text-[#1A2B4A] mb-8">
            6 fully built pages — ready to see
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pages.map((p) => (
              <Link
                key={p.page}
                href={`/industries/financial/${p.page}`}
                className="group block border border-gray-200 hover:border-[#1A2B4A] rounded-lg p-6 transition-all hover:shadow-md bg-white"
              >
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-gray-400 border border-gray-200 rounded px-2 py-0.5 mb-3">
                  {p.tag}
                </span>
                <h3 className="font-bold text-[#1A2B4A] text-sm mb-2 group-hover:text-[#007BFF] transition-colors">
                  {p.label}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{p.desc}</p>
                <span className="text-xs font-semibold text-[#1A2B4A] group-hover:text-[#007BFF] transition-colors">
                  View demo →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fiduciary callout */}
      <section className="bg-[#1A2B4A] py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-base mb-1">Fee-Only. Fiduciary. Always.</p>
            <p className="text-white/60 text-sm max-w-xl">
              We never earn commissions. Our only compensation comes from you — which means our advice is never influenced by what pays us more.
            </p>
          </div>
          <Link
            href="/industries/financial/contact"
            className="flex-shrink-0 bg-white text-[#1A2B4A] font-bold px-6 py-3 rounded text-sm hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Let&rsquo;s Get Started
          </Link>
        </div>
      </section>

      {/* Mix-and-match nudge */}
      <section className="bg-[#F7F8FA] border-t border-gray-100 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-[#1A2B4A]">These pages aren&rsquo;t locked to financial services.</span>{" "}
            Mix and match any design across all industries.
          </p>
          <Link
            href="/industries"
            className="flex-shrink-0 text-sm font-semibold text-[#1A2B4A] border border-[#1A2B4A]/30 hover:border-[#1A2B4A] px-5 py-2.5 rounded transition-colors whitespace-nowrap"
          >
            Browse all designs →
          </Link>
        </div>
      </section>

      {/* ULTRA CTA */}
      <section className="bg-[#0D1B2A] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#007BFF] text-xs font-semibold tracking-widest uppercase mb-4">
            Build Your Financial Services Site
          </p>
          <h2 className="text-3xl font-bold text-white mb-6">
            This is what we&rsquo;d build for your firm.
          </h2>
          <p className="text-white/60 mb-10 text-lg leading-relaxed">
            Your logo, your colors, your copy — same structure, same authority signals. Fixed price. Fixed timeline. Live in 6 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#007BFF] hover:bg-[#0069d9] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Start a Conversation
            </Link>
            <Link
              href="/industries"
              className="bg-white/5 border border-white/20 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Browse Design Library
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
