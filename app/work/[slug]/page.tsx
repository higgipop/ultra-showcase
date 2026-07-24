import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

// Template — replace with real CMS or data source per-client
const caseStudies = [
  {
    slug: "example-law-firm",
    client: "Gulf Coast Injury Attorneys",
    industry: "Legal",
    location: "Tampa, FL",
    services: ["Web Design", "Local SEO", "Care Plan"],
    timeline: "6 weeks",
    heroGradient: "from-[#0D1B2A] to-[#1A2B4A]",
    summary:
      "A 12-year-old firm still running on a 2014 WordPress site. Google ranked them on page 4 for their primary keyword. Inquiries came mostly through referrals — the website wasn't doing any work.",
    challenge:
      "The previous site took 8.4 seconds to load on mobile, scored a 31 on PageSpeed, and had no structured data, no local landing pages, and a contact form that broke on iOS. Potential clients were landing on the site and leaving.",
    solution:
      "We rebuilt from scratch on Next.js with Cloudflare deployment. Created 8 practice area pages and 3 location-specific pages. Added LocalBusiness + LegalService schema. Optimized Google Business Profile with updated categories, services, and a photo cadence.",
    results: [
      { label: "Organic leads (6-month change)", value: "+340%" },
      { label: "PageSpeed score (was 31)", value: "94" },
      { label: "Mobile load time (was 8.4s)", value: "1.4s" },
      { label: "Primary keyword rank (was page 4)", value: "#1" },
      { label: "Google Business Profile views", value: "+220%" },
      { label: "Paid ad spend required", value: "$0" },
    ],
    quote: {
      text: "We went from page 4 to position 1 in about five months. The phone hasn't stopped since. I wish we'd done this two years ago.",
      author: "James R.",
      title: "Managing Partner",
    },
    whatWeDid: [
      "Rebuilt site on Next.js — deployed to Cloudflare CDN",
      "8 practice area pages with target keyword in H1, URL, and meta",
      "3 location landing pages (Tampa, St. Pete, Clearwater)",
      "LocalBusiness + LegalService JSON-LD schema on all pages",
      "Google Business Profile audit and optimization",
      "Monthly SEO reporting and rank tracking",
      "24/7 uptime monitoring + weekly update care plan",
    ],
  },
];

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: `${cs.client} Case Study | ULTRA Design Agency`,
    description: cs.summary,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  return (
    <>
      {/* Hero */}
      <section className={`relative bg-gradient-to-br ${cs.heroGradient} hex-pattern pt-32 pb-24`}>
        <div className="absolute top-0 left-0 right-0 h-1 cp-gradient-bar" />
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-8 hover:text-white transition-colors"
          >
            ← All Work
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-4">
                {cs.industry} · {cs.location}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                {cs.client}
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                {cs.summary}
              </p>
              <div className="flex flex-wrap gap-3">
                {cs.services.map((s) => (
                  <span key={s} className="text-xs bg-white/10 border border-white/20 text-white/80 rounded-full px-4 py-1.5">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            {/* Results summary card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
              <p className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-5">
                Results
              </p>
              <div className="space-y-4">
                {cs.results.map((r) => (
                  <div key={r.label} className="flex items-center justify-between gap-4">
                    <span className="text-white/60 text-sm">{r.label}</span>
                    <span className="font-bold cp-gradient-text text-lg flex-shrink-0">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The challenge */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">
                The Problem
              </p>
              <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-6 leading-tight">
                What we found when we started.
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {cs.challenge}
              </p>
            </div>
            <div>
              <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">
                The Approach
              </p>
              <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-6 leading-tight">
                What we built and why.
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {cs.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we did */}
      <section className="py-20 bg-[var(--color-mid)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">
                Scope of Work
              </p>
              <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-4 leading-tight">
                Everything delivered.
              </h2>
              <p className="text-gray-500 text-sm">
                Timeline: <span className="font-semibold text-[var(--color-heading)]">{cs.timeline}</span> from kickoff to live site.
              </p>
            </div>
            <ul className="space-y-4">
              {cs.whatWeDid.map((item) => (
                <li key={item} className="flex items-start gap-4 bg-white rounded-xl px-5 py-4 border border-gray-100 shadow-sm">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full cp-gradient-bar flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M10.28 2.28a.75.75 0 0 0-1.06 0L4.5 7l-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0 0-1.06Z" />
                    </svg>
                  </span>
                  <span className="text-[var(--color-heading)] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Results deep-dive */}
      <section className="py-20 bg-[var(--color-dark)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-3">
              The Numbers
            </p>
            <h2 className="text-3xl font-bold text-white">
              Six months after launch.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {cs.results.map((r) => (
              <div key={r.label} className="bg-white/5 border border-white/10 rounded-2xl p-7 text-center">
                <p className="text-4xl font-bold cp-gradient-text mb-2">{r.value}</p>
                <p className="text-white/60 text-sm leading-snug">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl font-bold text-[var(--color-heading)] leading-snug mb-8">
            &ldquo;{cs.quote.text}&rdquo;
          </blockquote>
          <p className="font-semibold text-[var(--color-heading)]">{cs.quote.author}</p>
          <p className="text-gray-400 text-sm">{cs.quote.title}, {cs.client}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--color-mid)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-4">
            Get Similar Results
          </p>
          <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-6">
            Ready to do this for your business?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Start a Conversation
            </Link>
            <Link
              href="/work"
              className="bg-white border border-gray-200 hover:border-[var(--color-primary)] text-[var(--color-heading)] font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              See More Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
