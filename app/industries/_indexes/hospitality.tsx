import Link from "next/link";

const pages = [
  {
    page: "home",
    label: "Homepage",
    occasion: "Full Experience",
    desc: "Warm editorial layout, food photography hero, menu teaser section, and event booking CTA.",
  },
  {
    page: "catering",
    label: "Catering Services",
    occasion: "Catering",
    desc: "Five alternating catering sections with included list, guest range, and proposal CTA per service.",
  },
  {
    page: "weddings",
    label: "Weddings",
    occasion: "Weddings",
    desc: "Photo-forward layout with package tiers, real event gallery, inquiry form, and availability callout.",
  },
  {
    page: "corporate-events",
    label: "Corporate Events",
    occasion: "Corporate",
    desc: "B2B tone: AV specs, venue capacity table, catering options, and corporate billing details.",
  },
  {
    page: "about",
    label: "Our Story",
    occasion: "About",
    desc: "Founder bio, philosophy quote, four team cards, and service areas directory.",
  },
  {
    page: "contact",
    label: "Reservations & Inquiries",
    occasion: "Contact",
    desc: "Side-by-side dining reservation form and private event inquiry, with three-location directory.",
  },
];

export default function HospitalityIndex() {
  return (
    <>
      {/* ULTRA demo banner */}
      <div className="bg-[#007BFF] text-white text-sm py-2.5 font-medium sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
          <span className="whitespace-nowrap">
            ✦ <strong>ULTRA Demo</strong> · Hospitality
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

      {/* Hero */}
      <section className="bg-[#FAF7F0]">
        <div className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1600&q=80&auto=format&fit=crop"
            alt="Elegantly catered event"
            className="w-full h-[480px] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-8 pb-14 w-full">
              <p
                style={{ fontFamily: "Georgia, serif", letterSpacing: "0.18em" }}
                className="text-[#D4B896] text-xs uppercase mb-3"
              >
                Full-Service Catering & Events
              </p>
              <h1
                style={{ fontFamily: "Georgia, serif" }}
                className="text-white text-4xl lg:text-5xl font-normal leading-snug mb-6 max-w-xl"
              >
                Full-Service Catering for Thoughtfully Planned Events.
              </h1>
              <Link
                href="/industries/hospitality/contact"
                className="inline-block bg-[#D4B896] hover:bg-[#c4a882] text-[#1C1917] font-semibold px-7 py-3 text-sm transition-colors"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                Request a Proposal
              </Link>
            </div>
          </div>
        </div>

        {/* Occasion pills */}
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-wrap gap-3 border-b border-[#E8DFC8]">
          {["Weddings", "Corporate", "BBQ & Buffet", "Bar Service", "Private Dining"].map(
            (cat) => (
              <span
                key={cat}
                className="px-4 py-1.5 border border-[#D4B896] text-[#78614A] text-xs font-semibold tracking-wide"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                {cat}
              </span>
            )
          )}
        </div>
      </section>

      {/* Intro copy */}
      <section className="bg-[#FAF7F0] py-16 px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p
              style={{ fontFamily: "Georgia, serif" }}
              className="text-[#78614A] text-sm italic mb-4"
            >
              Explore this demo site
            </p>
            <h2
              style={{ fontFamily: "Georgia, serif" }}
              className="text-[#1C1917] text-3xl font-normal leading-snug mb-5"
            >
              Six fully designed pages,<br />built for hospitality.
            </h2>
            <p
              style={{ fontFamily: "system-ui, sans-serif" }}
              className="text-[#6B5744] text-base leading-relaxed mb-6"
            >
              Every page below is a live demo you can browse. Take the wedding page from this design, the corporate events layout from another — mix freely across all eight industries.
            </p>
            <Link
              href="/contact"
              style={{ fontFamily: "system-ui, sans-serif" }}
              className="text-sm font-semibold text-[#1C1917] border-b border-[#D4B896] pb-0.5 hover:text-[#78614A] transition-colors"
            >
              Tell us what caught your eye →
            </Link>
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80&auto=format&fit=crop"
              alt="Catered dinner setting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Page cards */}
      <section className="bg-white py-16 px-8 border-t border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto">
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              letterSpacing: "0.18em",
            }}
            className="text-[#A08060] text-xs uppercase font-semibold mb-10"
          >
            Browse all six demo pages
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((p) => (
              <Link
                key={p.page}
                href={`/industries/hospitality/${p.page}`}
                className="group bg-[#FAF7F0] border border-[#E8DFC8] hover:border-[#D4B896] hover:shadow-md transition-all p-7 flex flex-col"
              >
                <span
                  style={{ fontFamily: "system-ui, sans-serif", letterSpacing: "0.14em" }}
                  className="text-[#A08060] text-[10px] uppercase font-bold mb-3"
                >
                  {p.occasion}
                </span>
                <h3
                  style={{ fontFamily: "Georgia, serif" }}
                  className="text-[#1C1917] text-lg font-normal mb-3 group-hover:text-[#78614A] transition-colors"
                >
                  {p.label}
                </h3>
                <p
                  style={{ fontFamily: "system-ui, sans-serif" }}
                  className="text-[#6B5744] text-sm leading-relaxed flex-1 mb-5"
                >
                  {p.desc}
                </p>
                <span
                  style={{ fontFamily: "system-ui, sans-serif" }}
                  className="text-[#78614A] text-xs font-semibold group-hover:translate-x-1 inline-block transition-transform"
                >
                  View demo →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mix-and-match nudge */}
      <section className="bg-[#FAF7F0] py-10 px-8 border-t border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p
              style={{ fontFamily: "Georgia, serif" }}
              className="text-[#1C1917] text-sm font-normal italic"
            >
              These pages aren&rsquo;t locked to hospitality.
            </p>
            <p
              style={{ fontFamily: "system-ui, sans-serif" }}
              className="text-[#6B5744] text-sm"
            >
              Take any page from any industry — mix freely across all eight verticals.
            </p>
          </div>
          <Link
            href="/industries"
            style={{ fontFamily: "system-ui, sans-serif" }}
            className="flex-shrink-0 text-sm font-semibold text-[#78614A] border border-[#D4B896] hover:border-[#78614A] px-5 py-2.5 transition-colors whitespace-nowrap"
          >
            Browse all designs
          </Link>
        </div>
      </section>

      {/* ULTRA CTA */}
      <section className="bg-[#0D1B2A] py-20 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              letterSpacing: "0.2em",
            }}
            className="text-[#D4B896] text-xs font-semibold uppercase mb-4"
          >
            Build Your Hospitality Site
          </p>
          <h2
            style={{ fontFamily: "Georgia, serif" }}
            className="text-3xl font-normal text-white mb-6"
          >
            This is what we&rsquo;d build for your catering or events business.
          </h2>
          <p
            style={{ fontFamily: "system-ui, sans-serif" }}
            className="text-white/60 mb-10 text-lg leading-relaxed"
          >
            Your brand, your menu, your story — same refined structure, same performance. Fixed price. Fixed timeline. Live in 6 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              style={{ fontFamily: "system-ui, sans-serif" }}
              className="bg-[#007BFF] hover:bg-[#0069d9] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Start a Conversation
            </Link>
            <Link
              href="/industries"
              style={{ fontFamily: "system-ui, sans-serif" }}
              className="bg-white/5 border border-white/20 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Browse Design Library
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
