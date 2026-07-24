import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | ULTRA Design Agency",
  description: "Web design and SEO built for your industry — service companies, medical, legal, manufacturing, hospitality, financial, and defense.",
};

const industries = [
  {
    slug: "service-companies",
    label: "Home Services",
    icon: "🔧",
    tagline: "Win more local jobs from Google.",
    body: "Plumbers, roofers, HVAC, electricians, landscapers — local service businesses live and die by local search. We build sites that rank in your area and convert visitors into booked jobs.",
    accent: "from-[#007BFF] to-[#00C2CB]",
  },
  {
    slug: "medical",
    label: "Medical & Dental",
    icon: "⚕️",
    tagline: "More new patients. Less time managing your site.",
    body: "Patient-focused design with HIPAA-compliant forms, online booking integration, and the trust signals that convert health-conscious searchers into scheduled appointments.",
    accent: "from-[#00B386] to-[#007BFF]",
  },
  {
    slug: "legal",
    label: "Legal",
    icon: "⚖️",
    tagline: "Your website should work as hard as your team does.",
    body: "Law firm websites need authority, speed, and clear calls to action. We build sites that establish credibility fast and convert potential clients at the moment they need you most.",
    accent: "from-[#1A2B4A] to-[#007BFF]",
  },
  {
    slug: "manufacturing",
    label: "Manufacturing",
    icon: "🏭",
    tagline: "Industrial capability, clearly communicated.",
    body: "Complex capabilities explained simply. Product specs, certifications, capacity, and lead times — presented in a way that moves a procurement manager from 'found you' to 'RFQ sent'.",
    accent: "from-[#B45309] to-[#007BFF]",
  },
  {
    slug: "hospitality",
    label: "Hospitality",
    icon: "🍽️",
    tagline: "An experience before they ever arrive.",
    body: "Restaurants, catering, hotels, and event venues. Warm, elegant design with online reservations, menu display, and the visual storytelling that turns a browser into a booking.",
    accent: "from-[#92400E] to-[#C2855A]",
  },
  {
    slug: "financial",
    label: "Financial Services",
    icon: "📈",
    tagline: "Trust built before the first call.",
    body: "RIAs, CPAs, mortgage brokers, insurance agents — your clients are trusting you with their financial future. Your site needs to reflect that level of professionalism before they pick up the phone.",
    accent: "from-[#064E3B] to-[#007BFF]",
  },
  {
    slug: "defense",
    label: "Defense & Government",
    icon: "🛡️",
    tagline: "Capability statements that win contracts.",
    body: "Defense contractors, government subcontractors, and federal services. SAM.gov ready, NAICS-organized, and built to perform in CMMC-conscious environments.",
    accent: "from-[#1E3A5F] to-[#334155]",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="relative bg-[var(--color-dark)] hex-pattern pt-32 pb-20">
        <div className="absolute top-0 left-0 right-0 h-1 cp-gradient-bar" />
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-4">
            Industries We Serve
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Your industry is different.<br />
            <span className="cp-gradient-text">Your site should be too.</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Every industry below gets a demo showing what an ULTRA-built site looks like for that market — real page structure, real section logic, real Lorem Ipsum copy.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${ind.accent}`} />
                <div className="p-8">
                  <div className="flex items-start gap-5 mb-5">
                    <span className="text-4xl">{ind.icon}</span>
                    <div>
                      <h2 className="text-xl font-bold text-[var(--color-heading)] group-hover:text-[var(--color-primary)] transition-colors mb-1">
                        {ind.label}
                      </h2>
                      <p className="text-sm font-semibold text-[var(--color-primary)]">{ind.tagline}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{ind.body}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] group-hover:gap-3 transition-all">
                    See the demo →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-dark)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-4">Your Industry</p>
          <h2 className="text-3xl font-bold text-white mb-6">Don&rsquo;t see your industry?</h2>
          <p className="text-white/60 mb-8 text-lg">
            We&rsquo;ve built sites for nonprofits, real estate, education, e-commerce, SaaS, and more. If your business needs a site that performs, we&rsquo;ve probably done it.
          </p>
          <Link href="/contact" className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
            Talk to Us
          </Link>
        </div>
      </section>
    </>
  );
}
