import Link from "next/link";

const pages = [
  {
    page: "home",
    icon: "🏠",
    label: "Homepage",
    badge: "MOST POPULAR",
    desc: "Urgency bar, phone-dominant sticky nav, coupon hero, service tile grid, trust badges, same-day booking CTA.",
    cta: "View Homepage Demo",
  },
  {
    page: "services",
    icon: "🔧",
    label: "Services Page",
    badge: null,
    desc: "6 service tiles with common issues, flat-rate pricing strip, emergency callout banner.",
    cta: "View Services Demo",
  },
  {
    page: "air-conditioning",
    icon: "❄️",
    label: "Air Conditioning",
    badge: "SEASONAL",
    desc: "Seasonal urgency, equipment brand callouts, financing offer, emergency call banner at top.",
    cta: "View A/C Demo",
  },
  {
    page: "plumbing",
    icon: "🚿",
    label: "Plumbing",
    badge: "24/7",
    desc: "Emergency-first layout with 24/7 CTA, service list, social proof, quote form.",
    cta: "View Plumbing Demo",
  },
  {
    page: "about",
    icon: "👨‍👩‍👧",
    label: "About Page",
    badge: null,
    desc: "Family-owned story, years in business, team section, licenses & bonds, community ties.",
    cta: "View About Demo",
  },
  {
    page: "contact",
    icon: "📞",
    label: "Book a Service",
    badge: "CONVERT",
    desc: "Emergency call-out at top, service selector, zip code field, preferred callback time slots.",
    cta: "View Contact Demo",
  },
];

const trustBadges = [
  { icon: "✓", label: "Same-Day Service" },
  { icon: "★", label: "22+ Years" },
  { icon: "🔒", label: "Licensed & Insured" },
  { icon: "💯", label: "100% Satisfaction" },
  { icon: "⚡", label: "24/7 Emergency" },
];

export default function ServiceCompaniesIndex() {
  return (
    <div className="bg-white font-sans">
      {/* ULTRA Demo Banner */}
      <div className="bg-[#007BFF] text-white text-sm py-2.5 font-medium sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
          <span className="whitespace-nowrap">
            ✦ <strong>ULTRA Demo</strong> · Home Services
          </span>
          <div className="flex items-center gap-3 text-xs flex-wrap">
            <Link
              href="/industries"
              className="underline underline-offset-2 opacity-80 hover:opacity-100 whitespace-nowrap"
            >
              ← All industries
            </Link>
            <Link
              href="/contact"
              className="underline underline-offset-2 opacity-80 hover:opacity-100 whitespace-nowrap"
            >
              Build mine →
            </Link>
          </div>
        </div>
      </div>

      {/* Urgency bar */}
      <div className="bg-[#F97316] text-white text-center text-xs font-bold py-2 tracking-wide">
        🔥 LIMITED TIME — $50 OFF Any Service Call &nbsp;|&nbsp; Use Code: <span className="underline">ULTRA50</span> &nbsp;|&nbsp; Call Now: (813) 555-0100
      </div>

      {/* Hero */}
      <section className="bg-[#003087] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 text-center lg:text-left">
              <p className="text-[#F97316] text-xs font-bold uppercase tracking-widest mb-3">
                Tampa Bay's #1 Home Services Company
              </p>
              <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
                HVAC · Plumbing<br />
                <span className="text-[#F97316]">Done Right. Today.</span>
              </h1>
              <p className="text-white/70 text-lg mb-8 max-w-xl">
                Same-day service. Next-day installations. 24/7 emergency response. This is what an ULTRA-built home services site looks like.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="tel:8135550100"
                  className="bg-[#F97316] hover:bg-[#ea6900] text-white font-black text-xl px-8 py-4 rounded-lg transition-colors text-center"
                >
                  📞 (813) 555-0100
                </a>
                <Link
                  href="/industries/service-companies/contact"
                  className="border-2 border-white/40 hover:border-white text-white font-bold px-8 py-4 rounded-lg transition-colors text-center"
                >
                  Book Online →
                </Link>
              </div>
            </div>

            {/* Offer card */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-2xl w-full max-w-xs flex-shrink-0">
              <p className="text-[#003087] text-xs font-bold uppercase tracking-widest mb-1">Limited Offer</p>
              <p className="text-[#F97316] text-6xl font-black leading-none mb-1">$50</p>
              <p className="text-[#003087] font-bold text-lg mb-3">OFF Any Service Call</p>
              <div className="border-t border-gray-100 pt-4 space-y-2 text-sm text-gray-600 mb-5">
                <p>✓ No hidden fees</p>
                <p>✓ Upfront pricing</p>
                <p>✓ Fully licensed</p>
              </div>
              <Link
                href="/industries/service-companies/contact"
                className="block w-full bg-[#F97316] hover:bg-[#ea6900] text-white font-bold py-3 rounded-lg transition-colors"
              >
                Claim This Offer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <div className="bg-[#001f5b] py-5 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
          {trustBadges.map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-white text-sm font-semibold">
              <span className="w-8 h-8 rounded-full bg-[#F97316] flex items-center justify-center text-xs font-black">
                {b.icon}
              </span>
              {b.label}
            </div>
          ))}
        </div>
      </div>

      {/* Page demos section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#F97316] text-xs font-bold uppercase tracking-widest mb-2">6 Fully Designed Pages</p>
            <h2 className="text-3xl font-black text-[#003087]">
              Every Page Your Service Business Needs
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">
              Click any page below to see it live. Your logo, colors, and service area applied — same structure.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pages.map((p) => (
              <Link
                key={p.page}
                href={`/industries/service-companies/${p.page}`}
                className="group bg-white border-2 border-gray-100 hover:border-[#F97316] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <div className="bg-[#003087] px-6 py-5 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{p.icon}</span>
                    <h3 className="font-black text-white text-base">{p.label}</h3>
                  </div>
                  {p.badge && (
                    <span className="text-[10px] font-black bg-[#F97316] text-white px-2 py-0.5 rounded tracking-wider flex-shrink-0">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="px-6 py-5">
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <span className="text-[#F97316] text-sm font-bold group-hover:underline">
                    {p.cta} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mix-and-match nudge */}
      <div className="bg-[#003087] py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-white/80 text-sm">
            <strong className="text-white">These designs aren't locked to Home Services.</strong> Mix any page from any industry — law firm homepage, medical contact form, whatever fits your business.
          </p>
          <Link
            href="/industries"
            className="flex-shrink-0 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap"
          >
            Browse All Designs →
          </Link>
        </div>
      </div>

      {/* ULTRA CTA */}
      <section className="py-20 px-6 bg-[#0D1B2A]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#F97316] text-xs font-bold uppercase tracking-widest mb-4">
            Build Your Home Services Site
          </p>
          <h2 className="text-3xl font-black text-white mb-4">
            This is what we'd build for your service business.
          </h2>
          <p className="text-white/60 text-lg mb-10 leading-relaxed">
            Your brand, your service area, your specials — same proven layout. Fixed price. Fixed timeline. Live in 6 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#007BFF] hover:bg-[#0069d9] text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Start a Conversation
            </Link>
            <Link
              href="/industries"
              className="bg-white/5 border border-white/20 hover:border-white text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Browse Design Library
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
