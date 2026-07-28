import Link from "next/link";

const pages = [
  {
    slug: "home",
    label: "Homepage",
    tag: "Landing",
    desc: "ISO cert bar, 2-col hero, capability tile grid, industry tabs, dark cert strip, RFQ CTA.",
    spec: "Tolerances to ±0.0005\" · 50k sq ft · AS9100D",
  },
  {
    slug: "capabilities",
    label: "Full Capabilities",
    tag: "Capabilities",
    desc: "Filter tabs, NAICS codes, clearances table, contract vehicles (GSA/SEWP/SeaPort).",
    spec: "NAICS 332111 · 332721 · 336412",
  },
  {
    slug: "cnc-machining",
    label: "CNC Machining",
    tag: "Process",
    desc: "5-axis milling/turning/grinding blocks with spec tables, sidebar RFQ form, file formats.",
    spec: "5-axis · ±0.0002\" · STEP / IGES / SolidWorks",
  },
  {
    slug: "fabrication",
    label: "Fabrication",
    tag: "Process",
    desc: "TIG/MIG/laser/sheet metal blocks with weld certifications sidebar (AWS/ASME/MIL-STD).",
    spec: "AWS D1.1 · ASME IX · MIL-STD-1689",
  },
  {
    slug: "about",
    label: "About the Company",
    tag: "Company",
    desc: "Founded 1983, 12,000 sq ft facility, 4 leadership profiles, 5 values, ISO cert table.",
    spec: "Est. 1983 · ISO 9001:2015 · ITAR Registered",
  },
  {
    slug: "contact",
    label: "Request a Quote",
    tag: "RFQ",
    desc: "Full RFQ form with part specs, 48-hour guarantee, NDA note, engineering contact.",
    spec: "48-hr turnaround · NDA available · DFM review",
  },
];

const certs = ["ISO 9001:2015", "AS9100D", "ITAR Registered", "NADCAP Accredited", "MIL-SPEC Compliant"];

export default function ManufacturingIndex() {
  return (
    <div className="bg-[#0F1923] min-h-screen text-white" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* ULTRA demo banner */}
      <div className="bg-[#007BFF] text-white text-sm py-2.5 font-medium sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
          <span className="whitespace-nowrap">✦ <strong>ULTRA Demo</strong> · Manufacturing</span>
          <div className="flex items-center gap-3 text-xs flex-wrap">
            <Link href="/industries" className="underline underline-offset-2 opacity-80 hover:opacity-100 whitespace-nowrap">← All industries</Link>
            <Link href="/contact" className="underline underline-offset-2 opacity-80 hover:opacity-100 whitespace-nowrap">Build mine →</Link>
          </div>
        </div>
      </div>

      {/* Cert ribbon */}
      <div className="bg-[#1E6FE8] py-2 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-8 text-xs font-semibold tracking-widest uppercase text-white/90 flex-wrap">
            {certs.map((c) => (
              <span key={c} className="flex items-center gap-2 whitespace-nowrap">
                <span className="w-1 h-1 rounded-full bg-white/60" />
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=1600&q=80&auto=format&fit=crop')" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#1E6FE8] text-xs font-bold uppercase tracking-[0.3em] mb-5">
              Precision Contract Manufacturing
            </p>
            <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6 tracking-tight">
              We make things,<br />
              <span className="text-[#1E6FE8]">better.</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-lg">
              CNC machining, precision fabrication, and complex assemblies for aerospace, defense, and industrial clients. Tolerances to ±0.0002&quot;. 48-hour RFQ turnaround.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/industries/manufacturing/contact"
                className="inline-block bg-[#1E6FE8] hover:bg-[#1a5fd4] text-white font-bold px-8 py-4 text-sm uppercase tracking-wider transition-colors"
              >
                Request a Quote
              </Link>
              <Link
                href="/industries/manufacturing/capabilities"
                className="inline-block border border-white/20 hover:border-[#1E6FE8] text-white/70 hover:text-white font-semibold px-8 py-4 text-sm uppercase tracking-wider transition-colors"
              >
                View Capabilities
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/5">
            {[
              { val: "40+", label: "Years in Operation" },
              { val: "±0.0002\"", label: "Machining Tolerance" },
              { val: "50k", label: "Sq Ft Facility" },
              { val: "48 hr", label: "RFQ Turnaround" },
            ].map((s) => (
              <div key={s.label} className="bg-[#0F1923] p-8">
                <p className="text-3xl font-black text-[#1E6FE8] mb-1">{s.val}</p>
                <p className="text-white/40 text-xs uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Page cards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
            <div>
              <p className="text-[#1E6FE8] text-xs font-bold uppercase tracking-[0.25em] mb-2">Design Library</p>
              <h2 className="text-3xl font-black text-white">6 pages. Every section built.</h2>
            </div>
            <p className="text-white/30 text-sm max-w-xs text-right">
              Click any page to preview the full design. Mix with other industries.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {pages.map((p) => (
              <Link
                key={p.slug}
                href={`/industries/manufacturing/${p.slug}`}
                className="group bg-[#0F1923] hover:bg-[#131E2B] p-8 transition-colors border border-transparent hover:border-[#1E6FE8]/30 flex flex-col gap-5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1E6FE8] bg-[#1E6FE8]/10 px-2.5 py-1">
                    {p.tag}
                  </span>
                  <svg className="w-4 h-4 text-white/20 group-hover:text-[#1E6FE8] transition-colors" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8h10M9 4l4 4-4 4"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-2 group-hover:text-[#1E6FE8] transition-colors">{p.label}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-white/5">
                  <p className="text-[#1E6FE8]/70 text-xs font-mono tracking-wide">{p.spec}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mix-and-match nudge */}
      <section className="py-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            <span className="text-white/70 font-semibold">These designs aren&rsquo;t locked to manufacturing.</span>{" "}
            Use any page from any industry — mix freely.
          </p>
          <Link
            href="/industries"
            className="flex-shrink-0 text-sm font-semibold text-[#1E6FE8] border border-[#1E6FE8]/30 hover:border-[#1E6FE8] px-5 py-2.5 transition-colors whitespace-nowrap"
          >
            Browse all designs →
          </Link>
        </div>
      </section>

      {/* ULTRA CTA */}
      <section className="py-24 bg-[#07111A] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#1E6FE8] text-xs font-bold tracking-[0.3em] uppercase mb-5">Build Your Manufacturing Site</p>
          <h2 className="text-4xl font-black text-white mb-6 leading-tight">
            This is what ULTRA would build<br />for your shop.
          </h2>
          <p className="text-white/40 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Your logo, your certs, your process specs. Same structure, same performance. Fixed price. Fixed timeline. Live in 6 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#1E6FE8] hover:bg-[#1a5fd4] text-white font-bold px-10 py-4 text-sm uppercase tracking-wider transition-colors">
              Start a Conversation
            </Link>
            <Link href="/industries" className="border border-white/20 hover:border-white text-white/70 hover:text-white font-semibold px-10 py-4 text-sm uppercase tracking-wider transition-colors">
              Browse Design Library
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
