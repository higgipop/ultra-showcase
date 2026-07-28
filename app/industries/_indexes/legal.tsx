import Link from "next/link";

const pages = [
  {
    page: "home",
    label: "Homepage",
    num: "01",
    tag: "First Impression",
    desc: "Dark photo hero with inline case-eval form, live settlement ticker, social proof bar, red urgency CTAs.",
    callout: "Sets the tone. Clients call from this page.",
  },
  {
    page: "practice-areas",
    label: "Practice Areas",
    num: "02",
    tag: "Services",
    desc: "Practice cards with settlement ranges, no-fee promise bar, firm-wide settlement showcase.",
    callout: "No fee unless we win.",
  },
  {
    page: "personal-injury",
    label: "Personal Injury",
    num: "03",
    tag: "Interior Page",
    desc: "Case wins sidebar, FREE CASE EVALUATION form, 11-question FAQ, statute urgency callout.",
    callout: "$4.2M recovered last year.",
  },
  {
    page: "business-litigation",
    label: "Business Litigation",
    num: "04",
    tag: "Interior Page",
    desc: "Multi-million recovery callouts, business dispute FAQ, retainer model explanation.",
    callout: "We go after what you're owed.",
  },
  {
    page: "about",
    label: "Our Attorneys",
    num: "05",
    tag: "About",
    desc: "Attorney spotlights with bar admissions, case type specialties, firm history timeline.",
    callout: "35+ years combined experience.",
  },
  {
    page: "contact",
    label: "Case Evaluation",
    num: "06",
    tag: "Contact",
    desc: "Case intake form, what happens next steps, confidentiality statement, office.",
    callout: "Free. Confidential. No obligation.",
  },
];

const stats = [
  { value: "$17M+", label: "Recovered for Clients" },
  { value: "98%", label: "Case Success Rate" },
  { value: "0", label: "Upfront Fees, Ever" },
  { value: "24/7", label: "Attorney Availability" },
];

export default function LegalIndex() {
  return (
    <>
      {/* ULTRA demo banner */}
      <div className="bg-[#007BFF] text-white text-sm py-2.5 font-medium sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
          <span className="whitespace-nowrap">✦ <strong>ULTRA Demo</strong> · Legal</span>
          <div className="flex items-center gap-3 text-xs flex-wrap">
            <Link href="/industries" className="underline underline-offset-2 opacity-80 hover:opacity-100 whitespace-nowrap">← All industries</Link>
            <Link href="/contact" className="underline underline-offset-2 opacity-80 hover:opacity-100 whitespace-nowrap">Build mine →</Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-[#0D0D0D] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80&auto=format&fit=crop"
          alt="Law office"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <p className="text-[#DC2626] text-xs font-bold uppercase tracking-[0.3em] mb-5">
            Personal Injury · Business Litigation · Criminal Defense
          </p>
          <h1
            className="text-5xl lg:text-7xl font-black text-white leading-none mb-6 max-w-3xl uppercase"
            style={{ letterSpacing: "-0.02em" }}
          >
            We Fight.<br />
            <span className="text-[#DC2626]">You Get Paid.</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed mb-10">
            Six fully designed pages showing exactly what your law firm's website would look like — built by ULTRA. Dark, aggressive, conversion-focused.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/industries/legal/home"
              className="bg-[#DC2626] hover:bg-[#b91c1c] text-white font-bold px-8 py-4 text-sm uppercase tracking-widest transition-colors"
            >
              View Homepage Demo
            </Link>
            <Link
              href="/contact"
              className="border border-white/20 hover:border-white text-white font-bold px-8 py-4 text-sm uppercase tracking-widest transition-colors"
            >
              Build Mine →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-[#DC2626]">
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-white font-black text-2xl lg:text-3xl" style={{ letterSpacing: "-0.02em" }}>{s.value}</p>
              <p className="text-white/70 text-xs uppercase tracking-widest font-semibold mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pages section */}
      <section className="bg-[#111] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-[#DC2626] text-xs font-bold uppercase tracking-[0.25em] mb-3">6 Demo Pages</p>
              <h2 className="text-3xl lg:text-4xl font-black text-white uppercase" style={{ letterSpacing: "-0.02em" }}>
                Browse Every Page
              </h2>
            </div>
            <p className="text-white/30 text-sm max-w-xs leading-relaxed">
              Every page is fully designed. Mix and match across industries — nothing is locked to Legal.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pages.map((p) => (
              <Link
                key={p.page}
                href={`/industries/legal/${p.page}`}
                className="group relative bg-[#1A1A1A] border border-white/5 hover:border-[#DC2626]/60 p-7 transition-all hover:bg-[#1f1010]"
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="text-[#DC2626]/40 font-black text-4xl leading-none" style={{ letterSpacing: "-0.05em" }}>
                    {p.num}
                  </span>
                  <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest border border-white/10 px-2 py-1">
                    {p.tag}
                  </span>
                </div>
                <h3 className="text-white font-black text-lg uppercase mb-2" style={{ letterSpacing: "-0.01em" }}>
                  {p.label}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-5">{p.desc}</p>
                <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                  <p className="text-[#DC2626] text-xs font-bold uppercase tracking-wider">{p.callout}</p>
                  <span className="text-white/20 group-hover:text-white group-hover:translate-x-1 inline-block transition-all text-sm">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mix-and-match nudge */}
      <div className="bg-[#0D0D0D] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            <span className="text-white/70 font-semibold">Not a law firm?</span> These designs aren&rsquo;t locked to Legal — mix freely across all industries.
          </p>
          <Link
            href="/industries"
            className="flex-shrink-0 text-xs font-bold uppercase tracking-widest text-[#DC2626] hover:text-white transition-colors whitespace-nowrap"
          >
            Browse all designs →
          </Link>
        </div>
      </div>

      {/* ULTRA CTA */}
      <section className="bg-[#0D0D0D] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#DC2626] text-xs font-bold uppercase tracking-[0.3em] mb-5">Built by ULTRA</p>
          <h2 className="text-4xl lg:text-5xl font-black text-white uppercase mb-6" style={{ letterSpacing: "-0.02em" }}>
            This Is What We&rsquo;d Build<br />For Your Firm.
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Your name, your cases, your brand. Same structure and conversion focus. Fixed price. Live in 6 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#DC2626] hover:bg-[#b91c1c] text-white font-black px-10 py-4 text-sm uppercase tracking-widest transition-colors"
            >
              Get a Free Case Evaluation →
            </Link>
            <Link
              href="/industries"
              className="border border-white/10 hover:border-white/40 text-white/60 hover:text-white font-bold px-10 py-4 text-sm uppercase tracking-widest transition-colors"
            >
              Browse All Designs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
