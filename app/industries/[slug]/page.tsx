import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

const industries = [
  {
    slug: "service-companies",
    label: "Home Services",
    tagline: "Plumbing · HVAC · Electrical · Roofing",
    description: "Bold, phone-dominant design built for same-day service calls. Urgency-first layout with coupons, service grid, and trust signals.",
    accent: "#E84C27",
    accentBg: "bg-[#0A4DA1]",
    accentText: "text-[#E84C27]",
    pages: [
      { page: "home", label: "Home Page", desc: "Urgency bar, blue hero with coupon cards, phone CTA, service grid, reviews." },
      { page: "services", label: "Services Page", desc: "6 service detail cards with common issues, flat-rate pricing strip, emergency callout." },
      { page: "about", label: "About Page", desc: "25+ years story, team grid, core values, guarantees, accreditations." },
      { page: "contact", label: "Contact / Schedule", desc: "Booking form, service area, hours, emergency line highlighted in orange." },
    ],
  },
  {
    slug: "medical",
    label: "Medical & Dental",
    tagline: "Primary Care · Pediatrics · Specialists",
    description: "Clean white/teal design that leads with patient booking. Provider grid, insurance list, and trust-forward layout.",
    accent: "#0891B2",
    accentBg: "bg-[#0C4A6E]",
    accentText: "text-[#0891B2]",
    pages: [
      { page: "home", label: "Home Page", desc: "Booking form in hero, provider cards, stats strip, insurance accepted, teal palette." },
      { page: "services", label: "Services Page", desc: "6 specialty cards with what's included, same-day availability banner, insurance grid." },
      { page: "about", label: "Our Providers", desc: "Expanded provider bios, accepting status, practice philosophy, join our team CTA." },
      { page: "contact", label: "Appointment Request", desc: "Full intake form, hours, new patient checklist, insurance verification note." },
    ],
  },
  {
    slug: "legal",
    label: "Legal",
    tagline: "Personal Injury · Business · Family · Estate",
    description: "Professional navy and gold. Attorney spotlight, verdicts & settlements, news grid, and awards badges that establish instant authority.",
    accent: "#C9A84C",
    accentBg: "bg-[#0C2340]",
    accentText: "text-[#C9A84C]",
    pages: [
      { page: "home", label: "Home Page", desc: "Navy hero, verdicts card, practice areas, attorney grid, news section, gold CTAs." },
      { page: "services", label: "Practice Areas", desc: "6 practice area deep-dives with common cases, no-fee callout, awards strip." },
      { page: "about", label: "Our Attorneys", desc: "Full attorney bios, bar admissions, firm timeline, community, credentials." },
      { page: "contact", label: "Case Evaluation", desc: "Case intake form, what to expect in 3 steps, confidentiality statement." },
    ],
  },
  {
    slug: "manufacturing",
    label: "Manufacturing",
    tagline: "CNC · Fabrication · Assembly · Aerospace",
    description: "Dark nav/white body with bold capability-first design. Certifications, capability matrix, and RFQ-optimized layout for B2B procurement.",
    accent: "#1E90FF",
    accentBg: "bg-[#0F1923]",
    accentText: "text-[#1E90FF]",
    pages: [
      { page: "home", label: "Home Page", desc: "Dark hero with stats, capability grid by category, cert strip, RFQ CTA." },
      { page: "services", label: "Capabilities", desc: "4 process deep-dives with equipment, tolerances, materials, lead times." },
      { page: "about", label: "About the Company", desc: "40+ year history, facility stats, leadership team, certifications detail." },
      { page: "contact", label: "Request a Quote", desc: "RFQ form with part specs, 48-hour turnaround promise, NDA note." },
    ],
  },
  {
    slug: "hospitality",
    label: "Hospitality",
    tagline: "Fine Dining · Catering · Private Events",
    description: "Warm cream palette, elegant serif typography, and full-bleed imagery. Category navigation, menu showcase, and event inquiry flow.",
    accent: "#D4B896",
    accentBg: "bg-[#1A120B]",
    accentText: "text-[#9C7A56]",
    pages: [
      { page: "home", label: "Home Page", desc: "Dark full-bleed hero, category nav bar, about split, menu preview, press quotes." },
      { page: "services", label: "Menus & Dining", desc: "Elegant menu by category with wine list, dietary notes, custom menu CTA." },
      { page: "about", label: "Our Story", desc: "Chef bio, kitchen philosophy, awards, sourcing partners, team grid." },
      { page: "contact", label: "Reservations", desc: "Elegant split: dining reservation form + private event inquiry, hours, location." },
    ],
  },
  {
    slug: "financial",
    label: "Financial Services",
    tagline: "Wealth Management · Retirement · Tax · Estate",
    description: "Navy and white, Georgia serif, no gradients. Text-forward credibility with AUM stats, advisor profiles, and fiduciary positioning.",
    accent: "#1B3A5C",
    accentBg: "bg-[#1B3A5C]",
    accentText: "text-[#1B3A5C]",
    pages: [
      { page: "home", label: "Home Page", desc: "Text-forward hero, AUM stats, service cards with rule accents, advisor list, partner logos." },
      { page: "services", label: "Services & Approach", desc: "4 service deep-dives with what's included, fee-only section, fiduciary pledge." },
      { page: "about", label: "Our Team", desc: "Advisor bios with philosophy, firm values, professional affiliations, office info." },
      { page: "contact", label: "Schedule Consultation", desc: "Consultation form, what happens next, no-pressure copy, ADV disclosure." },
    ],
  },
  {
    slug: "defense",
    label: "Defense & Government",
    tagline: "Systems Integration · Cyber · Software · Program Support",
    description: "Dark geometric with electric blue. CAGE/NAICS/SAM status, capability matrix, contract vehicles, and B2G authority signals.",
    accent: "#00A8FF",
    accentBg: "bg-[#080E14]",
    accentText: "text-[#00A8FF]",
    pages: [
      { page: "home", label: "Home Page", desc: "SAM.gov status bar, dark hero, capability matrix, contract vehicles, NAICS table." },
      { page: "services", label: "Capabilities Statement", desc: "4 domain deep-dives with standards/frameworks, deliverables, NAICS table, clearances." },
      { page: "about", label: "About the Company", desc: "Leadership with military backgrounds, certifications matrix, locations, veteran hiring." },
      { page: "contact", label: "Program Office Contact", desc: "Secure inquiry form, 3-step process, capability brief download, security notice." },
    ],
  },
];

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) return {};
  return {
    title: `${ind.label} Website Design Demo | ULTRA Design Agency`,
    description: `See every page of what ULTRA would build for a ${ind.label.toLowerCase()} business — home, services, about, and contact pages.`,
  };
}

export default async function IndustryIndexPage({ params }: Props) {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) notFound();

  const pageIcons: Record<string, string> = {
    home: "🏠",
    services: "📋",
    about: "👥",
    contact: "📞",
  };

  return (
    <>
      {/* Demo banner */}
      <div className="bg-[#007BFF] text-white text-center text-sm py-2.5 font-medium">
        ✦ <strong>ULTRA Demo Site</strong> — {ind.label} industry &nbsp;
        <Link href="/industries" className="underline underline-offset-2 opacity-80 hover:opacity-100">← All industries</Link>
        &nbsp;·&nbsp;
        <Link href="/contact" className="underline underline-offset-2 opacity-80 hover:opacity-100">Build mine →</Link>
      </div>

      {/* Industry hero */}
      <section className={`${ind.accentBg} pt-24 pb-16`}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-white/40 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            ULTRA Demo · {ind.label}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {ind.label}
          </h1>
          <p style={{ color: ind.accent }} className="font-semibold text-sm tracking-wider mb-4">
            {ind.tagline}
          </p>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
            {ind.description}
          </p>
        </div>
      </section>

      {/* Page cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-gray-400 text-xs font-semibold tracking-[0.2em] uppercase mb-10">
            Browse the demo pages
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {ind.pages.map((p, i) => (
              <Link
                key={p.page}
                href={`/industries/${slug}/${p.page}`}
                className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-[#007BFF]/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-[#007BFF]/5 transition-colors">
                    {pageIcons[p.page]}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">0{i + 1}</span>
                      <h2 className="font-bold text-gray-900 group-hover:text-[#007BFF] transition-colors">
                        {p.label}
                      </h2>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                    <span className="text-xs font-semibold text-[#007BFF] group-hover:translate-x-1 inline-block transition-transform">
                      View demo →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ULTRA CTA */}
      <section className="py-20 bg-[#0D1B2A]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#00C2CB] text-xs font-semibold tracking-widest uppercase mb-4">
            Build Your {ind.label} Site
          </p>
          <h2 className="text-3xl font-bold text-white mb-6">
            This is what we&rsquo;d build for your {ind.label.toLowerCase()} business.
          </h2>
          <p className="text-white/60 mb-10 text-lg leading-relaxed">
            Your logo, your colors, your copy — same structure, same performance. Fixed price. Fixed timeline. Live in 6 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#007BFF] hover:bg-[#0069d9] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
              Start a Conversation
            </Link>
            <Link href="/industries" className="bg-white/5 border border-white/20 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
              Other Industries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
