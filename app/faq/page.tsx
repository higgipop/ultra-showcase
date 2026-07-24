import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | ULTRA Design Agency",
  description: "Common questions about working with ULTRA — process, pricing, timelines, and ownership.",
};

const faqs = [
  { q: "How long does a project take?", a: "Most projects run 5–7 weeks from kickoff to live site. Larger sites with custom integrations may take 8–10 weeks. We give you a fixed timeline before the project starts." },
  { q: "Do you work with businesses outside of Tampa?", a: "Yes. Most of our client work is done remotely. We've worked with businesses across Florida and nationally. Location has never been a blocker." },
  { q: "What platform do you build on?", a: "Next.js deployed to Vercel or Cloudflare Pages. No WordPress, no Squarespace, no page builders. This is why our sites load fast and stay fast." },
  { q: "Do I own the site when it's done?", a: "Completely. Your code, your domain, your hosting account. You own everything. If you ever leave, you take it all with you. No lock-in." },
  { q: "What's included in a care plan?", a: "Updates, backups, uptime monitoring, performance monitoring, monthly content edits, and priority support. Details vary by plan — see the pricing page for the full breakdown." },
  { q: "Can you work with my existing brand?", a: "Yes. We can build within an existing brand identity or create a new one. If you have a logo and brand guide, we work from that. If you need one, we can build it." },
  { q: "How do payments work?", a: "Projects are 50% at kickoff, 50% at launch. Care plans are billed monthly via autopay. No annual lock-in on care plans." },
  { q: "What if I need changes after launch?", a: "Every project includes a 30-day post-launch support window at no charge. After that, changes are covered by a care plan or billed as a small project." },
];

export default function FAQPage() {
  return (
    <>
      <section className="relative bg-[var(--color-dark)] hex-pattern pt-32 pb-20">
        <div className="absolute top-0 left-0 right-0 h-1 cp-gradient-bar" />
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-4">FAQ</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Questions we always get.
          </h1>
          <p className="text-white/60 text-lg">
            Direct answers. No marketing language.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-gray-100 rounded-2xl px-7 py-6 bg-[var(--color-mid)]">
                <h3 className="font-bold text-[var(--color-heading)] mb-3">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <p className="text-gray-500 mb-6">Still have a question?</p>
            <Link href="/contact" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              Ask Us Directly
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
