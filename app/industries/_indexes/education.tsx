import Link from "next/link";

const pages = [
  {
    page: "home",
    label: "Homepage",
    pillar: "I",
    desc: "Cream hero, three-pillar Faith · Academics · Character layout, Classical and Montessori program split, parent quote, admissions CTA.",
  },
  {
    page: "admissions",
    label: "Admissions",
    pillar: "II",
    desc: "4-step process, open house signup, application checklist, tuition & aid overview, rolling admissions inquiry form.",
  },
  {
    page: "about",
    label: "About the School",
    pillar: "III",
    desc: "Founding story (Est. 1985), mission statement, school leadership profiles, accreditations, and faith commitment.",
  },
  {
    page: "contact",
    label: "Contact & Tour Request",
    pillar: "IV",
    desc: "Inquiry form with grade selector, campus hours, open house reservation, and schedule-a-tour CTA.",
  },
];

export default function EducationIndex() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      {/* ULTRA demo banner */}
      <div className="bg-[#007BFF] text-white text-sm py-2.5 font-medium sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
          <span className="whitespace-nowrap">
            ✦ <strong>ULTRA Demo</strong> · Education
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

      {/* School hero */}
      <section className="bg-[#1B2B5B] pt-20 pb-16 px-6 text-center relative overflow-hidden">
        {/* Photo overlay */}
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.12]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80&auto=format&fit=crop')" }} />
        {/* Decorative cross */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <span style={{ fontFamily: "Georgia, serif" }} className="text-white text-[32rem] leading-none">✝</span>
        </div>

        <p
          style={{ fontFamily: "system-ui, sans-serif" }}
          className="text-[#B8860B] text-xs font-bold uppercase tracking-[0.3em] mb-5"
        >
          ULTRA Demo · Classical &amp; Catholic K–12
        </p>

        <h1
          style={{ fontFamily: "Georgia, serif" }}
          className="text-4xl md:text-6xl text-white font-normal italic leading-tight mb-4 max-w-3xl mx-auto"
        >
          Catholic Education.<br />Classical Tradition.
        </h1>

        <div className="flex items-center justify-center gap-4 my-6">
          <span className="h-px w-16 bg-[#B8860B] opacity-50" />
          <span className="text-[#B8860B] text-lg">✝</span>
          <span className="h-px w-16 bg-[#B8860B] opacity-50" />
        </div>

        <p
          style={{ fontFamily: "system-ui, sans-serif" }}
          className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed mb-3"
        >
          Faith · Academics · Character
        </p>
        <p className="text-white/40 text-sm max-w-xl mx-auto mb-10">
          Four pages built for a Classical Catholic school — a design that reflects tradition, academic rigor, and the formation of the whole person.
        </p>

        <Link
          href="/industries/education/home"
          className="inline-block bg-[#B8860B] hover:bg-[#9a7209] text-white font-semibold px-8 py-4 rounded transition-colors text-sm tracking-wide"
        >
          View Homepage Demo →
        </Link>
      </section>

      {/* Tagline bar */}
      <div className="bg-[#FAFAF7] border-y border-[#e8dfc8] py-5 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-6 text-center">
          {["Rooted in Faith", "Classical Curriculum", "K–12 Formation"].map((t) => (
            <span key={t} className="flex items-center gap-2 text-[#1B2B5B] text-sm font-semibold">
              <span className="text-[#B8860B] text-xs">✦</span>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Page cards */}
      <section className="bg-[#FAFAF7] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p
            style={{ fontFamily: "system-ui, sans-serif" }}
            className="text-[#B8860B] text-xs font-bold uppercase tracking-[0.25em] mb-2 text-center"
          >
            Four Demo Pages
          </p>
          <h2
            style={{ fontFamily: "Georgia, serif" }}
            className="text-2xl md:text-3xl text-[#1B2B5B] font-normal italic text-center mb-12"
          >
            Browse the full school website design
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {pages.map((p) => (
              <Link
                key={p.page}
                href={`/industries/education/${p.page}`}
                className="group block bg-white border border-[#e8dfc8] rounded-xl p-8 hover:border-[#1B2B5B] hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#B8860B] flex items-center justify-center">
                    <span
                      style={{ fontFamily: "Georgia, serif" }}
                      className="text-[#B8860B] text-xs italic font-bold"
                    >
                      {p.pillar}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      style={{ fontFamily: "Georgia, serif" }}
                      className="text-[#1B2B5B] text-lg font-normal italic mb-2 group-hover:text-[#B8860B] transition-colors"
                    >
                      {p.label}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                    <span className="text-xs font-semibold text-[#1B2B5B] group-hover:text-[#B8860B] transition-colors">
                      View demo →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mt-16">
            <span className="h-px flex-1 bg-[#e8dfc8]" />
            <span className="text-[#B8860B] text-sm">✝</span>
            <span className="h-px flex-1 bg-[#e8dfc8]" />
          </div>

          <p
            style={{ fontFamily: "Georgia, serif" }}
            className="text-center text-[#1B2B5B]/40 italic text-sm mt-4"
          >
            Design patterns mix freely across industries — use any page from any vertical.
          </p>
        </div>
      </section>

      {/* ULTRA CTA */}
      <section className="bg-[#0D1B2A] py-20 px-6 text-center">
        <p className="text-[#B8860B] text-xs font-bold uppercase tracking-widest mb-4">
          Build Your School Website
        </p>
        <h2
          style={{ fontFamily: "Georgia, serif" }}
          className="text-3xl font-normal italic text-white mb-6"
        >
          This is what we&rsquo;d build for your school.
        </h2>
        <p className="text-white/50 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
          Your crest, your colors, your mission. Same craftsmanship. Fixed price. Live in 6 weeks.
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
      </section>
    </div>
  );
}
