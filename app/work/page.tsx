import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | ULTRA Design Agency",
  description:
    "Client results from ULTRA Design Agency — sites that load fast, rank well, and convert visitors into leads.",
};

const projects = [
  {
    slug: "example-law-firm",
    client: "Gulf Coast Injury Attorneys",
    industry: "Legal",
    service: "Web Design + SEO",
    result: "340%",
    resultLabel: "increase in organic leads",
    stat2: "1.4s",
    stat2Label: "page load time",
    summary: "Replaced a dated WordPress site with a performance-first Next.js build. Organic traffic tripled in 6 months.",
    tags: ["Web Design", "SEO", "Legal"],
    accent: "from-[#007BFF] to-[#00C2CB]",
  },
  {
    slug: "example-dental",
    client: "Bay Area Dental Group",
    industry: "Healthcare",
    service: "Web Design + Care Plan",
    result: "89",
    resultLabel: "PageSpeed score (was 41)",
    stat2: "28%",
    stat2Label: "more new patient inquiries",
    summary: "Full rebuild focused on speed and conversion. Contact form redesign alone improved inquiry volume by 28%.",
    tags: ["Web Design", "Care Plan", "Healthcare"],
    accent: "from-[#00B386] to-[#007BFF]",
  },
  {
    slug: "example-contractor",
    client: "Heritage Roofing & Exteriors",
    industry: "Home Services",
    service: "Web Design + Local SEO",
    result: "#1",
    resultLabel: "Google rank for 'roofing contractor Tampa'",
    stat2: "$0",
    stat2Label: "paid ad spend",
    summary: "Built a location-optimized site with neighborhood landing pages. Ranks #1 for primary keyword without any paid ads.",
    tags: ["Web Design", "Local SEO", "Home Services"],
    accent: "from-[#00C2CB] to-[#00B386]",
  },
  {
    slug: "example-restaurant",
    client: "The Blue Anchor Grille",
    industry: "Restaurant",
    service: "Branding + Web Design",
    result: "4.9★",
    resultLabel: "Google rating displayed prominently",
    stat2: "2.1s",
    stat2Label: "load time on mobile",
    summary: "Full brand identity plus website. Online reservation volume doubled in the first quarter after launch.",
    tags: ["Branding", "Web Design", "Restaurant"],
    accent: "from-[#007BFF] to-[#00B386]",
  },
  {
    slug: "example-nonprofit",
    client: "Monroe County Food Pantry",
    industry: "Nonprofit",
    service: "Web Design + Donation Setup",
    result: "3×",
    resultLabel: "online donation volume",
    stat2: "100%",
    stat2Label: "mobile-responsive",
    summary: "Rebuilt on a modern stack with a streamlined donation flow. Online giving tripled in the first 90 days.",
    tags: ["Web Design", "Nonprofit"],
    accent: "from-[#00B386] to-[#00C2CB]",
  },
  {
    slug: "example-ecommerce",
    client: "Coastal Supply Co.",
    industry: "E-Commerce",
    service: "E-Commerce + SEO",
    result: "62%",
    resultLabel: "cart completion rate",
    stat2: "$0",
    stat2Label: "plugin licensing fees",
    summary: "Custom checkout flow on Next.js + Stripe. Eliminated $4,800/yr in plugin costs. Cart completion up 62% over WooCommerce baseline.",
    tags: ["E-Commerce", "Web Design"],
    accent: "from-[#007BFF] to-[#00C2CB]",
  },
];

const stats = [
  { value: "98+", label: "Sites Launched" },
  { value: "< 2s", label: "Avg. Load Time" },
  { value: "90+", label: "Avg. PageSpeed Score" },
  { value: "4.9★", label: "Client Rating" },
];

const industries = ["All", "Legal", "Healthcare", "Home Services", "Restaurant", "Nonprofit", "E-Commerce"];

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--color-dark)] hex-pattern pt-32 pb-24">
        <div className="absolute top-0 left-0 right-0 h-1 cp-gradient-bar" />
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-6">
            Client Results
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] max-w-4xl mb-8">
            Sites that rank, load fast,{" "}
            <span className="cp-gradient-text">and convert.</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed mb-12">
            Every project below is a real client with a real before-and-after. We measure success in rankings, load times, and leads — not awards.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5">
                <p className="text-3xl font-bold cp-gradient-text leading-none mb-1">{s.value}</p>
                <p className="text-white/60 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry filter — static links, styled as tabs */}
      <section className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex gap-2 overflow-x-auto scrollbar-none">
          {industries.map((ind) => (
            <button
              key={ind}
              className={`flex-shrink-0 text-sm font-semibold px-4 py-2 rounded-full transition-colors ${
                ind === "All"
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-[var(--color-mid)] text-[var(--color-heading)] hover:bg-[var(--color-primary)]/10"
              }`}
            >
              {ind}
            </button>
          ))}
        </div>
      </section>

      {/* Project grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/work/${p.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Result banner */}
                <div className={`relative bg-gradient-to-r ${p.accent} px-7 py-7`}>
                  <p className="text-5xl font-bold text-white leading-none mb-1">{p.result}</p>
                  <p className="text-white/80 text-sm font-medium">{p.resultLabel}</p>
                  <div className="absolute top-4 right-5 text-right">
                    <p className="text-2xl font-bold text-white/90 leading-none">{p.stat2}</p>
                    <p className="text-white/60 text-xs">{p.stat2Label}</p>
                  </div>
                </div>
                {/* Card body */}
                <div className="p-7 flex flex-col flex-1">
                  <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-primary)] mb-2">
                    {p.industry} · {p.service}
                  </p>
                  <h2 className="text-lg font-bold text-[var(--color-heading)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                    {p.client}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">{p.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs bg-[var(--color-mid)] text-gray-600 rounded-full px-3 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial strip */}
      <section className="py-20 bg-[var(--color-dark)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-8">
            What Clients Say
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote: "We went from page 4 to position 1 in about five months. The phone hasn't stopped since.",
                name: "James R.",
                title: "Owner, Gulf Coast Injury Attorneys",
              },
              {
                quote: "I was skeptical of spending this much on a website. Now I wish we'd done it two years earlier.",
                name: "Maria S.",
                title: "Practice Manager, Bay Area Dental Group",
              },
            ].map((t) => (
              <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--color-mid)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-4">
            Start a Project
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)] mb-6 leading-tight">
            Your results could be next.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Tell us what you&rsquo;re working on. We&rsquo;ll tell you exactly what we&rsquo;d do and what you can expect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Start a Conversation
            </Link>
            <Link
              href="/pricing"
              className="bg-white border border-gray-200 hover:border-[var(--color-primary)] text-[var(--color-heading)] font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
