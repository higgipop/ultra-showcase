import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | ULTRA Design Agency",
  description:
    "Professional website from our design library — no upfront cost. Monthly plans from $200/month.",
};

const carePlans = [
  {
    name: "Good",
    price: "$200",
    period: "/month",
    upfront: "$0 upfront",
    pages: "6 pages",
    tagline: "A professionally designed site built, launched, and kept running.",
    includes: [
      "6-page site from our design library",
      "Your logo, colors, fonts, and copy applied",
      "Mobile-first — 90+ PageSpeed out of the box",
      "Contact forms with email delivery",
      "On-page SEO foundation on every page",
      "Google Analytics + Search Console setup",
      "Site monitoring + uptime alerts",
      "Monthly performance report",
    ],
    note: "No monthly edits included — changes billed at $150/hr",
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$300",
    period: "/month",
    upfront: "Setup fee based on pages",
    pages: "10–14 pages",
    tagline: "More pages, monthly edit time, and priority support.",
    includes: [
      "10–14 page site from our design library",
      "Everything in Good",
      "1 hour of edits per month",
      "Priority support — response within 4 business hours",
      "Quarterly SEO health check",
    ],
    note: "Unused edit hours don't roll over",
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "ULTRA",
    price: "$400",
    period: "/month",
    upfront: "Setup fee based on pages",
    pages: "10–14 pages",
    tagline: "Unlimited edits plus active Google presence management.",
    includes: [
      "10–14 page site from our design library",
      "Everything in Growth",
      "Unlimited edits within the same design",
      "Google My Business — profile updates + review responses",
      "Dedicated account manager",
    ],
    note: "Structural redesigns outside the template are scoped separately",
    cta: "Talk to Us",
    highlight: false,
  },
];

const addOns = [
  { name: "Copywriting", price: "$150/page", desc: "SEO-informed copy written for your audience. Headline, subheads, body — ready to drop into your design." },
  { name: "Additional Pages", price: "$300/page", desc: "Need a page beyond the standard template set? We build it to match your design." },
  { name: "SEO Kickstart", price: "$350/mo", desc: "Local keyword research, on-page optimization, and GBP setup for the first 90 days." },
  { name: "Logo + Brand Identity", price: "$1,200", desc: "Logo, color palette, typography system, and brand guidelines PDF — everything we need to brand your site." },
  { name: "Domain + Hosting Setup", price: "$250", desc: "DNS configuration, SSL, and a 1-year domain registration." },
  { name: "Website Audit", price: "$450", desc: "Full performance, SEO, and accessibility report with a prioritized fix list." },
];

const faqs = [
  {
    q: "How does the upfront cost work?",
    a: "Good plan (6 pages) has no setup fee — your monthly rate starts at go-live. Growth and ULTRA plans (10–14 pages) have a setup fee based on the number of pages. We quote that before you commit.",
  },
  {
    q: "What do I need to provide?",
    a: "Logo files, brand colors and fonts, the copy for each page, and any photos you want to use. We send you a content checklist the day you start so nothing is missed.",
  },
  {
    q: "What counts as an edit?",
    a: "Copy changes, image swaps, adding or updating hours, staff, offers, or any other text and media on your existing pages. Structural changes — new pages, new sections, layout changes — are outside the edit allowance and scoped separately.",
  },
  {
    q: "What does Google My Business management include?",
    a: "Profile updates (hours, services, photos, categories) and responding to Google reviews on your behalf. Available on the ULTRA plan only.",
  },
  {
    q: "How much can I change the design?",
    a: "Colors, fonts, and minor spacing adjustments are part of the build. The layout and structure stay as-is — that's what keeps cost low and the timeline fast.",
  },
  {
    q: "How long does it take to go live?",
    a: "Most sites go from content-received to live in 5–7 business days. The only variable is how quickly you send us your content.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Yes. Upgrade any time — the difference is prorated for the remainder of your billing cycle.",
  },
  {
    q: "Do I own the site?",
    a: "Completely. Your code, your domain, your hosting account. If you ever leave, you take everything with you.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--color-dark)] hex-pattern pt-32 pb-24">
        <div className="absolute top-0 left-0 right-0 h-1 cp-gradient-bar" />
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-6">
            Transparent Pricing
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-8">
            Professional site.{" "}
            <span className="cp-gradient-text">$0 upfront.</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
            Choose a design from our library, send us your brand, and we&rsquo;ll have you live in days — not weeks. One flat monthly fee. No surprises.
          </p>
        </div>
      </section>

      {/* How it works callout */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { step: "01", title: "Choose a design", body: "Browse our industry library and pick the layout that fits your business." },
              { step: "02", title: "Send your brand", body: "Logo, colors, fonts, copy, photos. We give you a checklist — you fill it in." },
              { step: "03", title: "Go live in days", body: "We apply your brand to the design and launch. Monthly plan starts at go-live." },
            ].map((s) => (
              <div key={s.step}>
                <p className="text-4xl font-bold cp-gradient-text leading-none mb-3">{s.step}</p>
                <h3 className="font-bold text-[var(--color-heading)] mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care plans */}
      <section className="py-24 bg-[var(--color-mid)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">
              Monthly Plans
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)] mb-4">
              Pick your plan
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Month-to-month. Cancel any time. Starts when your site goes live.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {carePlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  plan.highlight
                    ? "bg-[var(--color-dark)] border-transparent shadow-2xl"
                    : "bg-white border-gray-200 shadow-sm"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-px left-0 right-0 h-1 cp-gradient-bar rounded-t-2xl" />
                )}
                {plan.highlight && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[var(--color-primary)] text-white text-xs font-bold px-4 py-1 rounded-full tracking-wide uppercase">
                    Most Popular
                  </span>
                )}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className={`text-xs font-bold tracking-widest uppercase ${plan.highlight ? "text-[var(--color-accent)]" : "text-[var(--color-primary)]"}`}>
                      {plan.name}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${plan.highlight ? "bg-white/10 text-white/60" : "bg-gray-100 text-gray-500"}`}>
                      {plan.pages}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${plan.highlight ? "bg-white/10 text-white/60" : "bg-gray-100 text-gray-500"}`}>
                      {plan.upfront}
                    </span>
                  </div>
                  <div className="flex items-end gap-1 mb-1">
                    <p className={`text-4xl font-bold ${plan.highlight ? "text-white" : "text-[var(--color-heading)]"}`}>
                      {plan.price}
                    </p>
                    <p className={`text-sm mb-1.5 ${plan.highlight ? "text-white/40" : "text-gray-400"}`}>
                      {plan.period}
                    </p>
                  </div>
                  <p className={`text-sm leading-relaxed ${plan.highlight ? "text-white/70" : "text-gray-500"}`}>
                    {plan.tagline}
                  </p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full cp-gradient-bar flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 12" fill="currentColor">
                          <path d="M10.28 2.28a.75.75 0 0 0-1.06 0L4.5 7l-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0 0-1.06Z" />
                        </svg>
                      </span>
                      <span className={`text-sm leading-relaxed ${plan.highlight ? "text-white/80" : "text-gray-600"}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className={`text-xs mb-4 ${plan.highlight ? "text-white/30" : "text-gray-400"}`}>
                  {plan.note}
                </p>
                <Link
                  href="/contact"
                  className={`block text-center font-semibold px-6 py-3 rounded-lg transition-colors ${
                    plan.highlight
                      ? "bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white"
                      : "bg-[var(--color-mid)] hover:bg-[var(--color-primary)] hover:text-white text-[var(--color-heading)] border border-gray-200 hover:border-transparent"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">
              À La Carte
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)]">
              Add-Ons & Standalone Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {addOns.map((item) => (
              <div key={item.name} className="bg-[var(--color-mid)] rounded-xl border border-gray-100 p-7">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-bold text-[var(--color-heading)]">{item.name}</h3>
                  <span className="flex-shrink-0 text-sm font-bold cp-gradient-text whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[var(--color-dark)]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-3">
              Pricing FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Questions we always get asked.
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white/5 border border-white/10 rounded-2xl px-7 py-6">
                <h3 className="font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--color-mid)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-4">
            Get Started
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)] mb-6 leading-tight">
            Ready to see your brand in a design?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Browse the demos, pick what fits, and we&rsquo;ll show you how it looks with your logo and colors — before you commit to anything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/industries"
              className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Browse Designs
            </Link>
            <Link
              href="/contact"
              className="bg-white border border-gray-200 hover:border-[var(--color-primary)] text-[var(--color-heading)] font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
