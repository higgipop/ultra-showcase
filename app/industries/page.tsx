"use client";
import { useState } from "react";
import Link from "next/link";

type Filter = "all" | "homepage" | "services" | "interior" | "about" | "contact";

const industryMeta: Record<string, { label: string; dot: string; badge: string }> = {
  "service-companies": { label: "Home Services", dot: "bg-orange-500", badge: "bg-orange-50 text-orange-700" },
  medical:             { label: "Medical",        dot: "bg-cyan-500",   badge: "bg-cyan-50 text-cyan-700" },
  legal:               { label: "Legal",          dot: "bg-red-500",    badge: "bg-red-50 text-red-700" },
  manufacturing:       { label: "Manufacturing",  dot: "bg-sky-600",    badge: "bg-sky-50 text-sky-700" },
  hospitality:         { label: "Hospitality",    dot: "bg-amber-500",  badge: "bg-amber-50 text-amber-700" },
  financial:           { label: "Financial",      dot: "bg-slate-600",  badge: "bg-slate-50 text-slate-700" },
  defense:             { label: "Defense",        dot: "bg-blue-700",   badge: "bg-blue-50 text-blue-800" },
  education:           { label: "Education",      dot: "bg-amber-600",  badge: "bg-amber-50 text-amber-800" },
};

const designs: {
  industry: string;
  page: string;
  filter: Filter;
  label: string;
  desc: string;
}[] = [
  // ── HOMEPAGES ──────────────────────────────────────────────────────────────
  { industry: "service-companies", page: "home",   filter: "homepage", label: "Home Services Homepage",        desc: "Urgency bar, phone-dominant sticky nav, coupon hero, service tile grid, trust badges, same-day booking CTA." },
  { industry: "medical",           page: "home",   filter: "homepage", label: "Medical Practice Homepage",     desc: "Booking form in the hero, provider cards, insurance badge strip, stats row, teal/white clinical palette." },
  { industry: "legal",             page: "home",   filter: "homepage", label: "Law Firm Homepage",             desc: "Dark photo hero with inline case-eval form, live settlement ticker, social proof bar, red urgency CTAs." },
  { industry: "manufacturing",     page: "home",   filter: "homepage", label: "Manufacturing Homepage",        desc: "Split hero + cert registry grid, capability tile matrix, industry tabs panel, 48-hour RFQ CTA." },
  { industry: "hospitality",       page: "home",   filter: "homepage", label: "Restaurant / Catering Homepage",desc: "Warm editorial layout, food photography hero, menu teaser section, event booking CTA." },
  { industry: "financial",         page: "home",   filter: "homepage", label: "RIA / Wealth Management Homepage", desc: "Text-forward editorial hero, credential badges, grid service panel, insights feed. No photo — pure authority." },
  { industry: "defense",           page: "home",   filter: "homepage", label: "Defense Contractor Homepage",   desc: "Full-bleed photo hero, interactive division tabs, mission/vision panel, careers split section." },

  // ── SERVICES ───────────────────────────────────────────────────────────────
  { industry: "service-companies", page: "services",        filter: "services", label: "Home Services — Services Page",       desc: "6 service tiles with common issues, flat-rate pricing strip, emergency callout banner." },
  { industry: "medical",           page: "services",        filter: "services", label: "Medical — Services Overview",          desc: "6 specialty cards with what's included, same-day availability banner, insurance grid." },
  { industry: "legal",             page: "practice-areas",  filter: "services", label: "Legal — Practice Areas",               desc: "Practice cards with settlement ranges, no-fee promise bar, firm-wide settlement showcase." },
  { industry: "manufacturing",     page: "capabilities",    filter: "services", label: "Manufacturing — Capabilities",         desc: "Equipment list by process type, tolerance specs, material certs, capacity table." },
  { industry: "financial",         page: "services",        filter: "services", label: "Financial — Services Overview",        desc: "Grid-of-four with prose descriptions, process steps, fee-structure disclosure section." },
  { industry: "defense",           page: "capabilities",    filter: "services", label: "Defense — Capabilities Matrix",        desc: "Contract vehicles, NAICS codes, past performance callouts, clearance level details." },

  // ── INTERIOR (specialty / deep-dive) ───────────────────────────────────────
  { industry: "service-companies", page: "air-conditioning", filter: "interior", label: "Air Conditioning Service Page",       desc: "Seasonal urgency, equipment brand callouts, financing offer, emergency call banner at top." },
  { industry: "service-companies", page: "plumbing",         filter: "interior", label: "Plumbing Service Page",               desc: "Emergency-first layout with 24/7 CTA, service list, social proof, quote form." },
  { industry: "medical",           page: "primary-care",     filter: "interior", label: "Primary Care Page",                   desc: "Conditions treated, first visit steps, FAQ, sidebar booking form." },
  { industry: "medical",           page: "pediatrics",       filter: "interior", label: "Pediatrics Page",                     desc: "Well-child visit schedule, vaccine grid, emergency symptom callout, parent FAQ." },
  { industry: "legal",             page: "personal-injury",  filter: "interior", label: "Personal Injury Page",                desc: "Case wins sidebar, FREE CASE EVALUATION form, 11-question FAQ, statute urgency callout." },
  { industry: "legal",             page: "business-litigation", filter: "interior", label: "Business Litigation Page",         desc: "Multi-million recovery callouts, business dispute FAQ, retainer model explanation." },
  { industry: "manufacturing",     page: "cnc-machining",    filter: "interior", label: "CNC Machining Page",                  desc: "Axis capability grid, tolerance specs, material list, equipment inventory table." },
  { industry: "manufacturing",     page: "fabrication",      filter: "interior", label: "Fabrication Page",                    desc: "Process breakdown by method, thickness ranges, weld certs, QC inspection steps." },
  { industry: "hospitality",       page: "weddings",         filter: "interior", label: "Weddings Page",                       desc: "Photo-forward with package tiers, real event gallery, inquiry form, availability callout." },
  { industry: "hospitality",       page: "catering",         filter: "interior", label: "Catering Page",                       desc: "Occasion-based service breakdown, menu teaser, minimum headcount note, quote request form." },
  { industry: "hospitality",       page: "corporate-events", filter: "interior", label: "Corporate Events Page",               desc: "B2B tone: AV specs, venue capacity table, catering options, corporate billing details." },
  { industry: "financial",         page: "wealth-management",  filter: "interior", label: "Wealth Management Page",           desc: "Investment philosophy, process steps, AUM minimum disclosure, CFA/CFP credential callout." },
  { industry: "financial",         page: "retirement-planning", filter: "interior", label: "Retirement Planning Page",        desc: "Lifecycle stages, Social Security optimization, Medicare coordination notes, RMD overview." },
  { industry: "defense",           page: "cybersecurity",    filter: "interior", label: "Cybersecurity Page",                  desc: "CMMC/NIST framework breakdown, compliance roadmap, pen testing scope, Zero Trust overview." },
  { industry: "defense",           page: "systems-integration", filter: "interior", label: "Systems Integration Page",        desc: "C4ISR capability deep-dive, program experience callouts, sensor fusion details, T&E credentials." },

  // ── ABOUT ──────────────────────────────────────────────────────────────────
  { industry: "service-companies", page: "about", filter: "about", label: "Home Services — About",      desc: "Family-owned story, years in business, team section, licenses & bonds, community ties." },
  { industry: "medical",           page: "about", filter: "about", label: "Medical — Meet Providers",   desc: "Provider profiles with photos, practice philosophy, insurance accepted, values statement." },
  { industry: "legal",             page: "about", filter: "about", label: "Legal — Our Attorneys",      desc: "Attorney spotlights with bar admissions, case type specialties, firm history timeline." },
  { industry: "manufacturing",     page: "about", filter: "about", label: "Manufacturing — About",      desc: "Founded-in story, facility specs, ISO cert timeline, ownership structure, certifying bodies." },
  { industry: "hospitality",       page: "about", filter: "about", label: "Hospitality — Our Story",    desc: "Founder narrative, chef/team bios, award callouts, behind-the-scenes photography." },
  { industry: "financial",         page: "about", filter: "about", label: "Financial — About the Firm", desc: "Founder story, fiduciary statement, team credentials, office location and history." },
  { industry: "defense",           page: "about", filter: "about", label: "Defense — About",            desc: "Company history, cleared team summary, values block, facility specs, leadership profiles." },

  // ── CONTACT ────────────────────────────────────────────────────────────────
  { industry: "service-companies", page: "contact", filter: "contact", label: "Home Services — Contact",    desc: "Emergency call-out at top, service selector, zip code field, preferred callback time slots." },
  { industry: "medical",           page: "contact", filter: "contact", label: "Medical — Appointment Request", desc: "New patient intake form, insurance fields, appointment type selector, HIPAA notice." },
  { industry: "legal",             page: "contact", filter: "contact", label: "Legal — Case Evaluation",    desc: "Prominent case-eval form, 24/7 availability callout, office address, emergency phone CTA." },
  { industry: "manufacturing",     page: "contact", filter: "contact", label: "Manufacturing — RFQ Form",   desc: "File upload fields, material spec inputs, quantity and lead time, 48-hour response promise." },
  { industry: "hospitality",       page: "contact", filter: "contact", label: "Hospitality — Inquiry",      desc: "Event inquiry form with occasion type, guest count, date picker, venue map, parking notes." },
  { industry: "financial",         page: "contact", filter: "contact", label: "Financial — Schedule a Call",desc: "Scheduling-forward with calendar embed space, compliance disclosure, secure form note." },
  { industry: "defense",           page: "contact", filter: "contact", label: "Defense — Contact / RFI",    desc: "Multi-location layout, ITAR notice, clearance-appropriate form, capability briefing CTA." },
  { industry: "education",         page: "contact", filter: "contact", label: "Tour Request / Contact",      desc: "Inquiry form with grade selector, campus hours, map callout, schedule a tour CTA." },

  // ── EDUCATION ──────────────────────────────────────────────────────────────
  { industry: "education", page: "home",       filter: "homepage", label: "Classical School Homepage",  desc: "Cream/navy palette, italic serif headings, three-pillar faith/academics/character layout, programs split, parent quote, admissions CTA." },
  { industry: "education", page: "admissions", filter: "services", label: "Admissions Page",            desc: "4-step admissions process, open house signup, requirements, tuition overview, inquiry form." },
  { industry: "education", page: "about",      filter: "about",    label: "About the School",           desc: "Founding story, mission statement, administration profiles, accreditations, faith commitment." },
];

const filters: { key: Filter; label: string }[] = [
  { key: "all",      label: "All" },
  { key: "homepage", label: "Homepages" },
  { key: "services", label: "Services" },
  { key: "interior", label: "Interior Pages" },
  { key: "about",    label: "About" },
  { key: "contact",  label: "Contact" },
];

export default function IndustriesPage() {
  const [active, setActive] = useState<Filter>("all");

  const visible = active === "all" ? designs : designs.filter((d) => d.filter === active);
  const counts = filters.reduce<Record<Filter, number>>((acc, f) => {
    acc[f.key] = f.key === "all" ? designs.length : designs.filter((d) => d.filter === f.key).length;
    return acc;
  }, {} as Record<Filter, number>);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--color-dark)] hex-pattern pt-32 pb-16">
        <div className="absolute top-0 left-0 right-0 h-1 cp-gradient-bar" />
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-4">
            Design Library
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
            {designs.length} page designs.<br />
            <span className="cp-gradient-text">Mix and match freely.</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed mb-10">
            Every design below is built for a specific industry — but nothing is locked to it. Take the law firm&rsquo;s homepage, the financial firm&rsquo;s services page, and the defense contractor&rsquo;s contact form. We build what fits your business, not your category.
          </p>

          {/* Mix-and-match example row */}
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="text-white/30 uppercase text-xs tracking-widest font-semibold">Example mix</span>
            {[
              { label: "Legal Homepage", industry: "legal" },
              { label: "Financial Services", industry: "financial" },
              { label: "Defense Contact", industry: "defense" },
            ].map((ex, i) => {
              const m = industryMeta[ex.industry];
              return (
                <span key={ex.label} className="flex items-center gap-2">
                  {i > 0 && <span className="text-white/20">+</span>}
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${m.badge}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${m.dot}`} />
                    {ex.label}
                  </span>
                </span>
              );
            })}
            <span className="text-white/30 mx-1">=</span>
            <span className="text-white/60 text-xs">your site</span>
          </div>
        </div>
      </section>

      {/* Filter strip */}
      <div className="sticky top-20 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  active === f.key
                    ? "bg-[var(--color-primary)] text-white"
                    : "text-gray-500 hover:text-[var(--color-heading)] hover:bg-gray-50"
                }`}
              >
                {f.label}
                <span className={`text-xs px-1.5 py-0.5 rounded font-bold ${active === f.key ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"}`}>
                  {counts[f.key]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Card grid */}
      <section className="py-12 bg-[var(--color-mid)] min-h-[60vh]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visible.map((d) => {
              const meta = industryMeta[d.industry];
              const filterMeta = filters.find((f) => f.key === d.filter);
              return (
                <div
                  key={`${d.industry}-${d.page}`}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col"
                >
                  <div className="p-6 flex-1">
                    {/* Badges */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${meta.badge}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${meta.dot}`} />
                        {meta.label}
                      </span>
                      <span className="text-xs text-gray-400 font-medium">{filterMeta?.label.replace(/s$/, "")}</span>
                    </div>

                    {/* Name + desc */}
                    <h2 className="font-bold text-[var(--color-heading)] text-base mb-2 leading-snug">{d.label}</h2>
                    <p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>
                  </div>

                  <div className="px-6 pb-5">
                    <Link
                      href={`/industries/${d.industry}/${d.page}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:gap-2.5 transition-all"
                    >
                      View demo
                      <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8h10M9 4l4 4-4 4"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry quick links */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">Browse all pages for one industry</p>
          <div className="flex flex-wrap gap-3">
            {Object.entries(industryMeta).map(([slug, meta]) => (
              <Link
                key={slug}
                href={`/industries/${slug}`}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors text-gray-600`}
              >
                <span className={`w-2 h-2 rounded-full ${meta.dot}`} />
                {meta.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--color-dark)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-4">Ready to Build</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Found a combination that works?
          </h2>
          <p className="text-white/60 text-lg mb-10 leading-relaxed">
            Tell us which designs caught your eye and we&rsquo;ll put together a build plan with your branding applied.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-10 py-4 rounded-lg transition-colors text-lg"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
