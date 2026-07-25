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
      { page: "home", label: "Home Page", desc: "Urgency bar, blue hero with coupon cards, phone CTA, service grid, reviews, blog tips." },
      { page: "services", label: "Services Page", desc: "6 service cards with common issues, flat-rate pricing strip, emergency callout." },
      { page: "air-conditioning", label: "Air Conditioning", desc: "Service detail: AC repair/install/maintenance, seasonal specials, trust badges." },
      { page: "plumbing", label: "Plumbing", desc: "Service detail: emergency plumbing, drain cleaning, water heater, pipe repair." },
      { page: "about", label: "About Page", desc: "25+ years story, team grid, core values, guarantees, accreditations, certifications." },
      { page: "contact", label: "Book a Service", desc: "Booking form, service area map, hours, emergency line highlighted in orange." },
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
      { page: "home", label: "Home Page", desc: "Booking form in hero, provider cards, stats strip, 9 insurance badges, teal palette." },
      { page: "services", label: "Services Overview", desc: "6 specialty cards with what's included, same-day availability banner, insurance grid." },
      { page: "primary-care", label: "Primary Care", desc: "Service detail: conditions treated, first visit steps, FAQ, sidebar booking form." },
      { page: "pediatrics", label: "Pediatrics", desc: "Well-child visit schedule, vaccine grid, emergency symptom callout, parent FAQ." },
      { page: "about", label: "Meet Your Providers", desc: "4 full provider profiles, practice philosophy, support staff, awards." },
      { page: "contact", label: "Appointment Request", desc: "Full intake form, hours, location, new patient checklist, insurance verification note." },
    ],
  },
  {
    slug: "legal",
    label: "Legal",
    tagline: "Personal Injury · Business · Family · Estate",
    description: "Professional dark/red design. Attorney spotlight, verdicts & settlements, news grid, and awards badges that establish instant authority.",
    accent: "#DC2626",
    accentBg: "bg-[#111827]",
    accentText: "text-[#DC2626]",
    pages: [
      { page: "home", label: "Home Page", desc: "Dark hero, $17M+ settlements, case eval form, clickable FAQ, video testimonials." },
      { page: "practice-areas", label: "Practice Areas", desc: "6 practice area cards with settlement ranges, no-fee bar, settlement showcase." },
      { page: "personal-injury", label: "Personal Injury", desc: "2-col layout: case wins sidebar, FREE CASE EVALUATION form, 11-question FAQ." },
      { page: "business-litigation", label: "Business Litigation", desc: "Business dispute detail: case wins, multi-million recoveries, business FAQ." },
      { page: "about", label: "Our Attorneys", desc: "Attorney spotlights, recognitions, firm history timeline, community involvement." },
      { page: "contact", label: "Case Evaluation", desc: "Case intake form, what happens next steps, confidentiality statement, office." },
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
      { page: "home", label: "Home Page", desc: "ISO cert bar, 2-col hero, capability tile grid, industry tabs, dark cert strip, RFQ CTA." },
      { page: "capabilities", label: "Full Capabilities", desc: "Filter tabs, NAICS codes, clearances table, contract vehicles (GSA/SEWP/SeaPort)." },
      { page: "cnc-machining", label: "CNC Machining", desc: "5-axis milling/turning/grinding blocks with spec tables, sidebar RFQ form, file formats." },
      { page: "fabrication", label: "Fabrication", desc: "TIG/MIG/laser/sheet metal blocks with weld certifications sidebar (AWS/ASME/MIL-STD)." },
      { page: "about", label: "About the Company", desc: "Founded 1983, 12,000 sq ft facility, 4 leadership profiles, 5 values, ISO cert table." },
      { page: "contact", label: "Request a Quote", desc: "Full RFQ form with part specs, 48-hour guarantee, NDA note, engineering contact." },
    ],
  },
  {
    slug: "hospitality",
    label: "Hospitality",
    tagline: "Full-Service Catering · Weddings · Corporate Events",
    description: "Warm cream palette, elegant serif typography, and full-width imagery. Service categories, menu highlights, and event inquiry flow.",
    accent: "#D4B896",
    accentBg: "bg-[#1C1917]",
    accentText: "text-[#9C7A56]",
    pages: [
      { page: "home", label: "Home Page", desc: "Serif hero, 5 service cards, who-we-serve pills, philosophy paragraph, service areas." },
      { page: "catering", label: "Catering Services", desc: "5 alternating catering sections: included list, guest range, proposal CTA per service." },
      { page: "weddings", label: "Weddings", desc: "4-step process, menu highlights grid, 6 gallery placeholders, embedded proposal form." },
      { page: "corporate-events", label: "Corporate Events", desc: "4 event type cards, dietary grid (6 accommodations), volume stats, proposal form." },
      { page: "about", label: "Our Story", desc: "Founder bio (Elena Ricci), philosophy quote, 4 team cards, service areas directory." },
      { page: "contact", label: "Reservations & Inquiries", desc: "Side-by-side: dining reservation form + private event inquiry, 3 location directory." },
    ],
  },
  {
    slug: "financial",
    label: "Financial Services",
    tagline: "Wealth Management · Retirement · Tax · Estate",
    description: "Navy and white, no gradients. Text-forward credibility with AUM stats, advisor profiles, and fee-only fiduciary positioning.",
    accent: "#1B3060",
    accentBg: "bg-[#1B3060]",
    accentText: "text-[#1B3060]",
    pages: [
      { page: "home", label: "Home Page", desc: "Pure text hero on white, 25+ yrs / $600M+ stats, 4 service cards, news grid, partner logos." },
      { page: "services", label: "Services & Approach", desc: "4 alternating service sections, fee-only/fiduciary dark callout, ADV disclosure note." },
      { page: "wealth-management", label: "Wealth Management", desc: "6-item numbered list, 6 client types grid, 4-step process, 6-question FAQ." },
      { page: "retirement-planning", label: "Retirement Planning", desc: "SS optimization, Medicare, withdrawal sequencing, income floor, RMD, sequence-of-returns." },
      { page: "about", label: "Our Advisors", desc: "3 advisor profiles with credentials, firm story (RIA since 2001), 4 professional affiliations." },
      { page: "contact", label: "Schedule Consultation", desc: "Consultation form, what happens next, no-pressure copy, ADV Part 2A disclosure link." },
    ],
  },
  {
    slug: "defense",
    label: "Defense & Government",
    tagline: "Systems Integration · Cyber · Software · Program Support",
    description: "Dark nav/white body with electric blue. CAGE/NAICS/SAM status, division cards, capability matrix, and B2G authority signals.",
    accent: "#0057FF",
    accentBg: "bg-[#0F1929]",
    accentText: "text-[#0057FF]",
    pages: [
      { page: "home", label: "Home Page", desc: "Full-width dark hero, 3 division cards on white, 01/02/03 mission blocks, accordion capabilities, careers block." },
      { page: "capabilities", label: "Capabilities Statement", desc: "4 division sections with 8 items each, NAICS codes, clearances, contract vehicles." },
      { page: "cybersecurity", label: "Cybersecurity Division", desc: "CMMC L2/L3, Zero Trust, NIST 800-171 blocks, sidebar certs + contact form, 5-question FAQ." },
      { page: "systems-integration", label: "Systems Integration", desc: "C4ISR, EW, sensor fusion, mission systems blocks, platform experience sidebar, FAQ." },
      { page: "about", label: "About the Company", desc: "Culture section, mission/vision/values, 6 leadership profiles with clearances, veteran hiring." },
      { page: "contact", label: "Program Office Contact", desc: "PMO inquiry form, 3-step next steps, capability statement download, CUI security notice." },
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
    description: `See every page of what ULTRA would build for a ${ind.label.toLowerCase()} business — 6 fully designed demo pages.`,
  };
}

export default async function IndustryIndexPage({ params }: Props) {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) notFound();

  const pageIcons: Record<string, string> = {
    home: "🏠",
    services: "📋",
    "air-conditioning": "❄️",
    plumbing: "🔧",
    "practice-areas": "⚖️",
    "personal-injury": "🏥",
    "business-litigation": "💼",
    "primary-care": "🩺",
    pediatrics: "👶",
    capabilities: "⚙️",
    "cnc-machining": "🔩",
    fabrication: "🏭",
    catering: "🍽️",
    weddings: "💍",
    "corporate-events": "🏢",
    "wealth-management": "📈",
    "retirement-planning": "🏖️",
    cybersecurity: "🔐",
    "systems-integration": "📡",
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

      {/* Page cards — 6 per industry */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-gray-400 text-xs font-semibold tracking-[0.2em] uppercase mb-10">
            Browse all 6 demo pages
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ind.pages.map((p, i) => (
              <Link
                key={p.page}
                href={`/industries/${slug}/${p.page}`}
                className="group bg-white border border-gray-100 rounded-2xl p-7 hover:border-[#007BFF]/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-[#007BFF]/5 transition-colors">
                    {pageIcons[p.page] ?? "📄"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">0{i + 1}</span>
                      <h2 className="font-bold text-gray-900 group-hover:text-[#007BFF] transition-colors text-sm">
                        {p.label}
                      </h2>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed mb-4">{p.desc}</p>
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
