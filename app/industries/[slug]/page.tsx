import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

// ─── INDUSTRY DATA ────────────────────────────────────────────────────────────
type Industry = {
  slug: string;
  label: string;
  icon: string;
  theme: "dark" | "light" | "warm";
  colors: {
    hero: string;
    accent: string;
    accentText: string;
    primary: string;
    primaryHover: string;
    gradientBar: string;
    tag: string;
    tagText: string;
  };
  hero: { eyebrow: string; h1: string; sub: string; cta1: string; cta2: string };
  stats: { value: string; label: string }[];
  services: { title: string; body: string }[];
  about: { heading: string; body: string };
  features: string[];
  testimonial: { quote: string; name: string; title: string };
  seoNote: string;
};

const industries: Industry[] = [
  {
    slug: "service-companies",
    label: "Home Services",
    icon: "🔧",
    theme: "dark",
    colors: {
      hero: "bg-[#0D1B2A]",
      accent: "text-[#00C2CB]",
      accentText: "#00C2CB",
      primary: "bg-[#007BFF] hover:bg-[#0069d9]",
      primaryHover: "#0069d9",
      gradientBar: "from-[#00B386] to-[#007BFF]",
      tag: "bg-[#007BFF]/10 border-[#007BFF]/20",
      tagText: "text-[#007BFF]",
    },
    hero: {
      eyebrow: "Tampa, FL · Home Services",
      h1: "More calls.\nFewer slow days.",
      sub: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Your phone should ring because of your website, not despite it.",
      cta1: "Get a Free Estimate",
      cta2: "See Our Work",
    },
    stats: [
      { value: "340%", label: "More organic leads" },
      { value: "#1", label: "Local Google rank" },
      { value: "1.4s", label: "Page load time" },
      { value: "4.9★", label: "Google rating" },
    ],
    services: [
      { title: "Local SEO", body: "Rank on the first page for your service + city. Location pages, GBP optimization, and citation cleanup that moves the needle." },
      { title: "Service Pages", body: "A dedicated page for every service you offer — plumbing, HVAC, roofing, electrical. Each one optimized for a target keyword." },
      { title: "Online Estimates", body: "Web forms that capture job details upfront so your team can respond faster and close more estimates." },
      { title: "Review Generation", body: "Automated follow-up to happy customers that increases your Google review count over time." },
    ],
    about: {
      heading: "Built for the businesses Google sends people to.",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    features: [
      "Mobile-first design — 70% of service searches happen on phones",
      "Click-to-call buttons on every page",
      "Service area pages for each city or neighborhood you serve",
      "Before/after galleries for completed jobs",
      "Emergency service badge and after-hours contact option",
      "LocalBusiness schema markup for Google rich results",
    ],
    testimonial: {
      quote: "We went from page 4 to position 1 in five months. The phone hasn't stopped. I wish we'd done this two years ago.",
      name: "James R.",
      title: "Owner, Beacon Roofing & Exteriors",
    },
    seoNote: "Targets: 'roofing contractor Tampa', 'HVAC repair near me', '[city] plumber' — high-intent, high-volume local keywords.",
  },

  {
    slug: "medical",
    label: "Medical & Dental",
    icon: "⚕️",
    theme: "light",
    colors: {
      hero: "bg-white",
      accent: "text-[#0077E6]",
      accentText: "#0077E6",
      primary: "bg-[#0055CC] hover:bg-[#003D99]",
      primaryHover: "#003D99",
      gradientBar: "from-[#0055CC] to-[#0077E6]",
      tag: "bg-[#0055CC]/8 border-[#0055CC]/15",
      tagText: "text-[#0055CC]",
    },
    hero: {
      eyebrow: "Tampa, FL · Medical & Dental",
      h1: "More new patients.\nWithout more ad spend.",
      sub: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A modern, fast, and trustworthy website that shows up when patients search — and converts them when they arrive.",
      cta1: "Request an Appointment",
      cta2: "Meet Our Team",
    },
    stats: [
      { value: "28%", label: "More new patient inquiries" },
      { value: "94", label: "PageSpeed score" },
      { value: "< 2s", label: "Load time" },
      { value: "4.8★", label: "Patient satisfaction" },
    ],
    services: [
      { title: "Online Booking Integration", body: "Connect with Zocdoc, Jane App, or your existing EHR system. Patients book 24/7 without calling the front desk." },
      { title: "Patient Education Pages", body: "Procedure-level pages with plain-language explanations, FAQs, and before/after expectations that reduce no-shows and anxiety." },
      { title: "Local Medical SEO", body: "Rank for 'dentist near me', 'family doctor Tampa', and your specialty — with schema markup that gets your practice in the local map pack." },
      { title: "HIPAA-Conscious Forms", body: "Contact and appointment request forms designed with privacy in mind — no sensitive data stored in plain-text logs." },
    ],
    about: {
      heading: "Patients research before they call. Make sure they find you first.",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Healthcare patients compare 3–5 providers online before choosing. Your website needs to communicate trust, competence, and accessibility — before a single appointment is booked. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    features: [
      "Insurance accepted section with filterable list",
      "Provider bios with credentials, specialties, and photos",
      "Before/after galleries for cosmetic and surgical practices",
      "Patient portal link with clear login instructions",
      "Accessibility-compliant (WCAG 2.1 AA) design",
      "MedicalOrganization + Physician schema for rich results",
    ],
    testimonial: {
      quote: "Our new patient inquiries went up 28% in the first quarter. The site finally looks like the practice we've built.",
      name: "Dr. Maria S.",
      title: "Practice Owner, Bay Area Dental Group",
    },
    seoNote: "Targets: 'dentist [city]', 'family practice near me', '[specialty] doctor Tampa' — local intent with high conversion value.",
  },

  {
    slug: "legal",
    label: "Legal",
    icon: "⚖️",
    theme: "dark",
    colors: {
      hero: "bg-[#0D1421]",
      accent: "text-[#C9A84C]",
      accentText: "#C9A84C",
      primary: "bg-[#C9A84C] hover:bg-[#B8962E]",
      primaryHover: "#B8962E",
      gradientBar: "from-[#C9A84C] to-[#E8C97E]",
      tag: "bg-[#C9A84C]/10 border-[#C9A84C]/20",
      tagText: "text-[#C9A84C]",
    },
    hero: {
      eyebrow: "Tampa, FL · Personal Injury & Legal Services",
      h1: "We fight to get\nyou results.",
      sub: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. When someone needs a lawyer, they search. When they find you, they need to trust you within seconds. We build sites that establish authority and convert.",
      cta1: "Free Case Review",
      cta2: "Call (813) 555-0100",
    },
    stats: [
      { value: "+340%", label: "Organic case leads" },
      { value: "1,429", label: "Google reviews" },
      { value: "$0", label: "Paid ads required" },
      { value: "#1", label: "Primary keyword rank" },
    ],
    services: [
      { title: "Practice Area Pages", body: "A dedicated, keyword-optimized page for every area of practice — personal injury, family law, criminal defense, estate planning." },
      { title: "Settlement / Results Pages", body: "Display verdicts and settlements to establish credibility and give potential clients confidence before they call." },
      { title: "Multi-Channel CTAs", body: "Phone, form, live chat, and SMS — every entry point covered so a potential client never has friction when reaching out." },
      { title: "Attorney Profile Pages", body: "Individual pages for each attorney with credentials, bar admissions, case history, and personal statement." },
    ],
    about: {
      heading: "Authority, speed, and clarity. Every second counts.",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Someone searching for a lawyer has already decided they need one. Your site has 8 seconds to establish credibility and give them a reason to call you instead of the next result. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We build sites that make those 8 seconds count.",
    },
    features: [
      "Prominent phone number on every page — tap-to-call on mobile",
      "Free consultation form above the fold",
      "Results / case settlements section",
      "Client testimonials with star ratings",
      "FAQ section targeting 'can I sue for...' keyword patterns",
      "LegalService + Attorney schema for Google rich results",
    ],
    testimonial: {
      quote: "We went from page 4 to position 1 in five months. The phone hasn't stopped since.",
      name: "James R., Esq.",
      title: "Managing Partner, Gulf Coast Injury Attorneys",
    },
    seoNote: "Targets: 'personal injury lawyer Tampa', 'car accident attorney near me', '[practice area] law firm' — high-value, high-competition keywords.",
  },

  {
    slug: "manufacturing",
    label: "Manufacturing",
    icon: "🏭",
    theme: "dark",
    colors: {
      hero: "bg-[#111827]",
      accent: "text-[#F59E0B]",
      accentText: "#F59E0B",
      primary: "bg-[#D97706] hover:bg-[#B45309]",
      primaryHover: "#B45309",
      gradientBar: "from-[#F59E0B] to-[#D97706]",
      tag: "bg-[#F59E0B]/10 border-[#F59E0B]/20",
      tagText: "text-[#F59E0B]",
    },
    hero: {
      eyebrow: "Tampa, FL · Precision Manufacturing",
      h1: "Built to spec.\nDelivered on time.",
      sub: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ISO-certified. AS9100 compliant. 40 years of precision machining experience. Your capabilities deserve a website that communicates them clearly to procurement managers.",
      cta1: "Request an RFQ",
      cta2: "Download Capabilities Sheet",
    },
    stats: [
      { value: "40+", label: "Years in operation" },
      { value: "ISO 9001", label: "Certified" },
      { value: "98.6%", label: "On-time delivery" },
      { value: "500+", label: "Active part numbers" },
    ],
    services: [
      { title: "Capabilities Pages", body: "CNC machining, fabrication, assembly, finishing — a dedicated page per process with equipment list, tolerances, and materials served." },
      { title: "RFQ / Quote Forms", body: "Structured forms that capture part specs, quantities, materials, and lead time requirements upfront — reducing back-and-forth." },
      { title: "Certifications & Compliance", body: "ISO, AS9100, ITAR, CMMC — prominently displayed with certificate downloads and audit history." },
      { title: "Industry Verticals", body: "Aerospace, defense, medical devices, automotive — show procurement teams you know their spec requirements." },
    ],
    about: {
      heading: "Procurement managers need confidence before they send an RFQ.",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. The average manufacturing company loses 3–5 RFQs per year to competitors with better websites — not better parts. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We build sites that communicate precision, reliability, and compliance in plain language that speeds up the buy cycle.",
    },
    features: [
      "Equipment list with specifications and run sizes",
      "Material compatibility tables",
      "Certification badge display with PDF downloads",
      "Case study gallery organized by industry vertical",
      "Secure RFQ upload form for drawings and specs",
      "Manufacturing schema for search visibility",
    ],
    testimonial: {
      quote: "We started getting RFQs from companies we'd never heard of. The site is doing the sales work we couldn't do ourselves.",
      name: "Robert M.",
      title: "VP Sales, Meridian Precision Parts",
    },
    seoNote: "Targets: 'CNC machining Tampa', 'ISO 9001 manufacturer Florida', '[process] manufacturer near me' — B2B, low-volume, high-value.",
  },

  {
    slug: "hospitality",
    label: "Hospitality",
    icon: "🍽️",
    theme: "warm",
    colors: {
      hero: "bg-[#FBF7F2]",
      accent: "text-[#92400E]",
      accentText: "#92400E",
      primary: "bg-[#92400E] hover:bg-[#78350F]",
      primaryHover: "#78350F",
      gradientBar: "from-[#92400E] to-[#C2855A]",
      tag: "bg-[#92400E]/8 border-[#92400E]/15",
      tagText: "text-[#92400E]",
    },
    hero: {
      eyebrow: "Tampa, FL · Fine Catering & Events",
      h1: "Thoughtfully planned.\nUnforgettably served.",
      sub: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. From intimate rehearsal dinners to 500-person corporate galas, every event begins with a conversation — and a site that makes the right first impression.",
      cta1: "Request a Proposal",
      cta2: "View Our Menus",
    },
    stats: [
      { value: "500+", label: "Events annually" },
      { value: "4.9★", label: "Client rating" },
      { value: "15+", label: "Years serving Tampa" },
      { value: "Custom", label: "Every menu" },
    ],
    services: [
      { title: "Event Gallery", body: "Full-bleed lifestyle photography organized by event type — weddings, corporate, social, holiday parties — so clients can envision what we'd create for them." },
      { title: "Online Inquiry & Proposal", body: "A streamlined inquiry form that captures event date, guest count, venue, and service style — so every proposal starts with the right information." },
      { title: "Menu Showcase", body: "Seasonal menus presented beautifully — with dietary filters, tasting menu options, and the ability to request customization." },
      { title: "Venue Portfolio", body: "A gallery of venues we've worked in across the region — building confidence that we know how to operate in diverse settings." },
    ],
    about: {
      heading: "The first impression happens online. Make it match the experience.",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hospitality clients form opinions about a caterer or venue before a single tasting. The elegance, warmth, and attention to detail that defines your service — your site needs to communicate all of it before the first call. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We design sites that feel like the experience, not just a description of it.",
    },
    features: [
      "Elegant, image-forward layout with generous whitespace",
      "Event type navigation: weddings, corporate, social, holiday",
      "Dietary and cuisine filter on menu pages",
      "Testimonial section with event-specific reviews",
      "Online proposal request with date availability check",
      "LocalBusiness + FoodEstablishment schema",
    ],
    testimonial: {
      quote: "Every vendor we considered had a website. Only one felt like it matched the caliber of service we were looking for. That's who we hired.",
      name: "Elena V.",
      title: "Events Director, Bellamy Grand Hotel",
    },
    seoNote: "Targets: 'catering company Tampa', 'wedding catering near me', 'corporate event catering Florida' — warm-intent, high-value.",
  },

  {
    slug: "financial",
    label: "Financial Services",
    icon: "📈",
    theme: "dark",
    colors: {
      hero: "bg-[#0A1628]",
      accent: "text-[#10B981]",
      accentText: "#10B981",
      primary: "bg-[#0D7A5F] hover:bg-[#065F46]",
      primaryHover: "#065F46",
      gradientBar: "from-[#10B981] to-[#0D7A5F]",
      tag: "bg-[#10B981]/10 border-[#10B981]/20",
      tagText: "text-[#10B981]",
    },
    hero: {
      eyebrow: "Tampa, FL · Financial Advisory Services",
      h1: "Your financial future,\nclearly planned.",
      sub: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Independent RIA. Fee-only fiduciary. Over $340M AUM. The trust your clients place in you begins with a website that reflects your expertise and integrity.",
      cta1: "Schedule a Consultation",
      cta2: "View Our Approach",
    },
    stats: [
      { value: "$340M+", label: "Assets under management" },
      { value: "22+", label: "Years of service" },
      { value: "Fee-only", label: "Fiduciary standard" },
      { value: "4.9★", label: "Client satisfaction" },
    ],
    services: [
      { title: "Advisor Profiles", body: "CRD numbers, credentials (CFP, CFA, CPA), years of experience, and a personal investment philosophy — displayed in a way that builds immediate credibility." },
      { title: "Service Explanation Pages", body: "Retirement planning, tax planning, estate coordination, investment management — each explained clearly for clients who are still learning what they need." },
      { title: "Compliance-Ready Design", body: "SEC and FINRA disclosures integrated cleanly into page design. Required language that doesn't compromise the reading experience." },
      { title: "Secure Contact Forms", body: "Consultation scheduling without collecting sensitive financial information through unsecured channels." },
    ],
    about: {
      heading: "In financial services, your website is your handshake.",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. An RIA's website is often the first place a prospective client decides whether you're the kind of advisor they'd trust with their retirement savings. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Conservative, professional, and confidence-inspiring — without feeling cold or corporate. That's the balance we build for.",
    },
    features: [
      "CRD / ADV disclosure link in the footer",
      "Client portal link with clear login flow",
      "Educational resource center (blog, guides, calculators)",
      "Case study / client outcome summaries (anonymized)",
      "Fee structure explanation page",
      "FinancialService schema for search visibility",
    ],
    testimonial: {
      quote: "We had three compliance reviews compliment the site design. Our client acquisition rate increased 40% in six months.",
      name: "Thomas H., CFP",
      title: "Managing Partner, Meridian Wealth Advisors",
    },
    seoNote: "Targets: 'financial advisor Tampa', 'fee-only fiduciary Florida', 'RIA near me' — high-value, trust-sensitive searches.",
  },

  {
    slug: "defense",
    label: "Defense & Government",
    icon: "🛡️",
    theme: "dark",
    colors: {
      hero: "bg-[#0F172A]",
      accent: "text-[#94A3B8]",
      accentText: "#94A3B8",
      primary: "bg-[#1E3A5F] hover:bg-[#162C4A]",
      primaryHover: "#162C4A",
      gradientBar: "from-[#1E3A5F] to-[#334155]",
      tag: "bg-[#94A3B8]/10 border-[#94A3B8]/20",
      tagText: "text-[#94A3B8]",
    },
    hero: {
      eyebrow: "Tampa, FL · Defense Contractor",
      h1: "Mission-ready.\nContract-ready.",
      sub: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. CAGE code: 7A3B2. SAM.gov registered. NAICS 336414, 541330. SB, SDVOSB, 8(a) certified. The capabilities that win contracts — clearly presented.",
      cta1: "Request a Capabilities Briefing",
      cta2: "Download Capabilities Statement",
    },
    stats: [
      { value: "CMMC", label: "Level 2 compliant" },
      { value: "15+", label: "Prime contracts" },
      { value: "TS/SCI", label: "Cleared personnel" },
      { value: "ITAR", label: "Registered" },
    ],
    services: [
      { title: "Capabilities Statement", body: "A digital version of your one-pager — NAICS codes, CAGE code, certifications, past performance, and differentiators — formatted for contracting officers." },
      { title: "Contract Vehicles", body: "GSA schedules, SEWP, CIO-SP3, OASIS — listed clearly with contract numbers so CO's can issue task orders without additional procurement steps." },
      { title: "Past Performance", body: "Agency-by-agency past performance organized by scope, period, contract value, and CPARS rating. Credibility built before the first meeting." },
      { title: "Certification Display", body: "CMMC, ISO 27001, FedRAMP, ITAR, SBA certifications with expiration dates and badge display that signals compliance at a glance." },
    ],
    about: {
      heading: "Contracting officers evaluate capability statements in under 60 seconds.",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A government contractor's website is increasingly the first touchpoint in a source selection process. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. It needs to communicate cleared personnel, relevant past performance, certifications, and contract vehicles — without exposing sensitive program information. Excepteur sint occaecat cupidatat non proident.",
    },
    features: [
      "CAGE code, UEI, and DUNS prominently displayed",
      "SAM.gov registration status badge",
      "Socioeconomic certifications (8(a), SDVOSB, WOSB, HUBZone)",
      "NAICS code list with descriptions",
      "Secure RFI / contact form (no sensitive data storage)",
      "Government contractor schema for search",
    ],
    testimonial: {
      quote: "A contracting officer told us our website was the reason we made the short list. It communicated everything they needed before the first call.",
      name: "Col. (Ret.) David P.",
      title: "CEO, Apex Defense Solutions",
    },
    seoNote: "Targets: 'defense contractor Tampa', 'SDVOSB IT services', 'government IT contractor Florida' — niche, high-value B2G.",
  },
];

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) return {};
  return {
    title: `${ind.label} Web Design | ULTRA Design Agency`,
    description: `See what an ULTRA-built website looks like for ${ind.label.toLowerCase()} businesses — layout, sections, and content strategy tailored to your industry.`,
  };
}

// ─── SHARED SECTION COMPONENTS ────────────────────────────────────────────────

function Stars() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
        </svg>
      ))}
    </div>
  );
}

function Check({ dark }: { dark?: boolean }) {
  return (
    <span className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center ${dark ? "bg-white/20" : "bg-[#007BFF]/15"}`}>
      <svg className={`w-3 h-3 ${dark ? "text-white" : "text-[#007BFF]"}`} viewBox="0 0 12 12" fill="currentColor">
        <path d="M10.28 2.28a.75.75 0 0 0-1.06 0L4.5 7l-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0 0-1.06Z" />
      </svg>
    </span>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) notFound();

  const isLight = ind.theme === "light";
  const isWarm = ind.theme === "warm";
  const heroTextColor = isLight || isWarm ? "text-[#1B2340]" : "text-white";
  const heroSubColor = isLight || isWarm ? "text-[#1B2340]/60" : "text-white/60";
  const heroBorderBtn = isLight || isWarm ? "border-[#1B2340]/20 text-[#1B2340] hover:border-[#1B2340]" : "border-white/20 text-white hover:border-white";

  return (
    <>
      {/* DEMO BANNER */}
      <div className="bg-[#007BFF] text-white text-center text-sm py-2.5 font-medium">
        ✦ This is an <strong>ULTRA demo page</strong> — showing what a {ind.label} site looks like. &nbsp;
        <Link href="/industries" className="underline underline-offset-2 opacity-80 hover:opacity-100">← All industries</Link>
        &nbsp;·&nbsp;
        <Link href="/contact" className="underline underline-offset-2 opacity-80 hover:opacity-100">Build mine →</Link>
      </div>

      {/* HERO */}
      <section className={`relative ${ind.colors.hero} pt-28 pb-24 overflow-hidden`}>
        {!(isLight || isWarm) && (
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V16L28 0l28 16v34z' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E\")" }} />
        )}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${ind.colors.gradientBar}`} />
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className={`${ind.colors.accent} text-xs font-semibold tracking-widest uppercase mb-5`}>
                {ind.hero.eyebrow}
              </p>
              <h1 className={`text-4xl md:text-6xl font-bold ${heroTextColor} leading-[1.05] mb-6 whitespace-pre-line`}>
                {ind.hero.h1}
              </h1>
              <p className={`${heroSubColor} text-lg leading-relaxed mb-10 max-w-xl`}>
                {ind.hero.sub}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact"
                  className={`${ind.colors.primary} text-white font-semibold px-7 py-3.5 rounded-lg transition-colors`}>
                  {ind.hero.cta1}
                </Link>
                <Link href="/work"
                  className={`border ${heroBorderBtn} font-semibold px-7 py-3.5 rounded-lg transition-colors`}>
                  {ind.hero.cta2}
                </Link>
              </div>
            </div>
            {/* Stats card */}
            <div className={`rounded-2xl border p-8 ${isLight || isWarm ? "bg-white border-gray-200 shadow-lg" : "bg-white/5 border-white/10"}`}>
              <p className={`${ind.colors.accent} text-xs font-semibold tracking-widest uppercase mb-6`}>
                By the Numbers
              </p>
              <div className="grid grid-cols-2 gap-6">
                {ind.stats.map((s) => (
                  <div key={s.label}>
                    <p className={`text-3xl font-bold mb-1 bg-gradient-to-r ${ind.colors.gradientBar} bg-clip-text text-transparent`}>
                      {s.value}
                    </p>
                    <p className={`text-sm ${isLight || isWarm ? "text-gray-500" : "text-white/50"}`}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className={`py-20 ${isLight || isWarm ? "bg-[#F8F6F2]" : "bg-white"}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className={`${ind.colors.tagText} text-xs font-semibold tracking-widest uppercase mb-3`}>
                Why It Matters
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B2340] mb-6 leading-tight">
                {ind.about.heading}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">{ind.about.body}</p>
            </div>
            <div className="space-y-3">
              {ind.features.map((f) => (
                <div key={f} className={`flex items-start gap-4 rounded-xl px-5 py-4 border ${isLight || isWarm ? "bg-white border-gray-100" : "bg-[#F5F8FF] border-gray-100"}`}>
                  <Check />
                  <span className="text-[#1B2340] text-sm leading-relaxed">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={`py-20 ${isLight || isWarm ? "bg-white" : "bg-[#0D1B2A]"}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className={`${ind.colors.accent} text-xs font-semibold tracking-widest uppercase mb-3`}>
              What We Build
            </p>
            <h2 className={`text-3xl md:text-4xl font-bold ${isLight || isWarm ? "text-[#1B2340]" : "text-white"}`}>
              Every piece of the site, purpose-built.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {ind.services.map((s) => (
              <div key={s.title} className={`rounded-2xl border p-7 ${isLight || isWarm ? "bg-[#F8F6F2] border-gray-100" : "bg-white/5 border-white/10"}`}>
                <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${ind.colors.gradientBar} mb-4`} />
                <h3 className={`font-bold mb-3 ${isLight || isWarm ? "text-[#1B2340]" : "text-white"}`}>{s.title}</h3>
                <p className={`text-sm leading-relaxed ${isLight || isWarm ? "text-gray-600" : "text-white/60"}`}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className={`py-20 ${isLight || isWarm ? "bg-[#F8F6F2]" : "bg-white"}`}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Stars />
          <blockquote className="text-2xl md:text-3xl font-bold text-[#1B2340] leading-snug my-8">
            &ldquo;{ind.testimonial.quote}&rdquo;
          </blockquote>
          <p className="font-semibold text-[#1B2340]">{ind.testimonial.name}</p>
          <p className="text-gray-400 text-sm">{ind.testimonial.title}</p>
          <p className={`mt-6 text-xs ${ind.colors.tagText} font-medium border ${ind.colors.tag} inline-block px-4 py-2 rounded-full`}>
            {ind.seoNote}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D1B2A]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className={`${ind.colors.accent} text-xs font-semibold tracking-widest uppercase mb-4`}>
            Build Your {ind.label} Site
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            This is what we&rsquo;d build for you.
          </h2>
          <p className="text-white/60 mb-10 text-lg">
            Every {ind.label.toLowerCase()} site we build is custom — same structure, tailored to your brand, your market, and your clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className={`${ind.colors.primary} text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg`}>
              Start a Conversation
            </Link>
            <Link href="/pricing"
              className="bg-white/5 border border-white/20 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
