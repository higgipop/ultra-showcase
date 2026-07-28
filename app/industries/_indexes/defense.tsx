import Link from "next/link";

const pages = [
  {
    page: "home",
    division: "Corporate",
    label: "Homepage",
    naics: "541330",
    desc: "Full-bleed dark hero, 3 division cards on white, 01/02/03 mission blocks, accordion capabilities, careers block.",
  },
  {
    page: "capabilities",
    division: "Capabilities",
    label: "Capabilities Statement",
    naics: "541519",
    desc: "4 division sections with 8 items each, NAICS codes, clearances, contract vehicles (GSA/SEWP/SeaPort).",
  },
  {
    page: "cybersecurity",
    division: "Cybersecurity",
    label: "Cybersecurity Division",
    naics: "541512",
    desc: "CMMC L2/L3, Zero Trust, NIST 800-171 blocks, sidebar certs + contact form, 5-question FAQ.",
  },
  {
    page: "systems-integration",
    division: "Systems Integration",
    label: "Systems Integration",
    naics: "541511",
    desc: "C4ISR, EW, sensor fusion, mission systems blocks, platform experience sidebar, FAQ.",
  },
  {
    page: "about",
    division: "Corporate",
    label: "About the Company",
    naics: "N/A",
    desc: "Culture section, mission/vision/values, 6 leadership profiles with clearances, veteran hiring.",
  },
  {
    page: "contact",
    division: "Program Office",
    label: "Program Office Contact",
    naics: "N/A",
    desc: "PMO inquiry form, 3-step next steps, capability statement download, CUI security notice.",
  },
];

const capabilities = [
  "Systems Engineering & Integration",
  "Cybersecurity / CMMC Compliance",
  "C4ISR Solutions",
  "Electronic Warfare (EW)",
  "Software Development (DoD IL2/IL4)",
  "Program Management Support",
  "IV&V / Test & Evaluation",
  "Cleared Personnel Staffing",
];

const vehicles = ["GSA MAS", "SEWP V", "SeaPort-NxG", "OASIS+"];

export default function DefenseIndex() {
  return (
    <div className="bg-[#0F1929] min-h-screen" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* ULTRA demo banner */}
      <div className="bg-[#007BFF] text-white text-sm py-2.5 font-medium sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
          <span className="whitespace-nowrap">✦ <strong>ULTRA Demo</strong> · Defense & Government</span>
          <div className="flex items-center gap-3 text-xs flex-wrap">
            <Link href="/industries" className="underline underline-offset-2 opacity-80 hover:opacity-100 whitespace-nowrap">← All industries</Link>
            <Link href="/contact" className="underline underline-offset-2 opacity-80 hover:opacity-100 whitespace-nowrap">Build mine →</Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-[#0F1929] border-b border-white/5 pt-20 pb-16 overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "linear-gradient(#9CA3AF 1px, transparent 1px), linear-gradient(90deg, #9CA3AF 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-[#0057FF]" />
            <span className="text-[#9CA3AF] text-xs font-semibold tracking-[0.3em] uppercase">Defense · Government · Intelligence</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight max-w-3xl">
            Engineered for<br />
            <span className="text-[#0057FF]">Excellence.</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl mb-10">
            Precision-built websites for defense contractors, systems integrators, and government technology firms. Cleared. Compliant. Mission-ready.
          </p>

          {/* Capability pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {capabilities.map((c) => (
              <span key={c} className="text-xs text-[#9CA3AF] bg-white/5 border border-white/10 px-3 py-1.5 rounded font-medium">
                {c}
              </span>
            ))}
          </div>

          {/* Contract vehicles */}
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-[#9CA3AF] text-xs font-semibold uppercase tracking-widest">Contract Vehicles</span>
            {vehicles.map((v) => (
              <span key={v} className="text-xs font-bold text-white/70 bg-white/5 border border-white/10 px-3 py-1 rounded">
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Clearance / cert strip */}
      <div className="bg-[#0A1220] border-y border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-6 text-xs text-[#9CA3AF] font-medium">
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500" />CAGE Code: 7XD21</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500" />SAM.gov Active</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500" />ISO 9001:2015</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500" />CMMC Level 2</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500" />Personnel Clearances: SECRET / TS/SCI</span>
          </div>
        </div>
      </div>

      {/* Page cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-[#9CA3AF] text-xs font-semibold uppercase tracking-[0.3em]">6 Demo Pages</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pages.map((p, i) => (
              <Link
                key={p.page}
                href={`/industries/defense/${p.page}`}
                className="group block bg-white/3 border border-white/10 rounded-lg p-6 hover:border-[#0057FF]/50 hover:bg-white/5 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[10px] font-bold text-[#0057FF] uppercase tracking-widest bg-[#0057FF]/10 px-2 py-1 rounded">
                    {p.division}
                  </span>
                  <span className="text-[10px] text-white/20 font-mono">0{i + 1}</span>
                </div>
                <h3 className="font-bold text-white text-sm mb-1 group-hover:text-[#0057FF] transition-colors">
                  {p.label}
                </h3>
                {p.naics !== "N/A" && (
                  <p className="text-[10px] text-[#9CA3AF] font-mono mb-3">NAICS {p.naics}</p>
                )}
                <p className="text-white/40 text-xs leading-relaxed mb-5">{p.desc}</p>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0057FF] group-hover:gap-2.5 transition-all">
                  View Demo
                  <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mix-and-match nudge */}
      <div className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            Page designs aren&rsquo;t locked to Defense. Mix freely across all industries.
          </p>
          <Link href="/industries" className="text-xs font-semibold text-[#0057FF] hover:text-[#3D85FF] transition-colors whitespace-nowrap">
            Browse all 42 designs →
          </Link>
        </div>
      </div>

      {/* ULTRA CTA */}
      <section className="border-t border-white/5 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#0057FF] text-xs font-semibold tracking-widest uppercase mb-4">
            Build Your Defense & Government Site
          </p>
          <h2 className="text-3xl font-bold text-white mb-6">
            This is what we&rsquo;d build for your firm.
          </h2>
          <p className="text-white/40 mb-10 text-lg leading-relaxed">
            Your logo, your colors, your copy — same structure, same performance. Fixed price. Fixed timeline. Live in 6 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#0057FF] hover:bg-[#0046CC] text-white font-semibold px-8 py-4 rounded transition-colors">
              Connect With Us
            </Link>
            <Link href="/industries" className="bg-white/5 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded transition-colors">
              Browse Design Library
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
