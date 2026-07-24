import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | ULTRA Design Agency",
  description:
    "Transparent pricing for web design, care plans, and SEO. No hourly billing, no surprise invoices.",
};

const projectTiers = [
  {
    name: "Starter",
    price: "$3,500",
    tagline: "For businesses that need a clean, professional presence fast.",
    pages: "Up to 5 pages",
    includes: [
      "Custom homepage design",
      "Up to 4 interior pages",
      "Mobile-responsive build",
      "Contact form with email delivery",
      "On-page SEO foundation",
      "Google Analytics setup",
      "30-day post-launch support",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$6,500",
    tagline: "For companies ready to use their site as a real sales tool.",
    pages: "Up to 12 pages",
    includes: [
      "Everything in Starter",
      "Up to 12 pages (service, location, or team pages)",
      "Copywriting guidance for every page",
      "Blog or news section",
      "LocalBusiness schema markup",
      "Google Search Console setup + sitemap submission",
      "90-day post-launch support",
    ],
    cta: "Start a Project",
    highlight: true,
  },
  {
    name: "Authority",
    price: "$12,000+",
    tagline: "For established businesses that compete at a higher level.",
    pages: "Unlimited pages",
    includes: [
      "Everything in Growth",
      "Full copywriting (every page)",
      "Custom illustrations or photography direction",
      "E-commerce or booking integration",
      "Performance audit + Core Web Vitals optimization",
      "Priority queue — project starts within 5 business days",
      "6-month post-launch support",
    ],
    cta: "Request a Quote",
    highlight: false,
  },
];

const carePlans = [
  {
    name: "Essentials",
    price: "$99",
    period: "/month",
    tagline: "Updates, backups, and uptime monitoring. Nothing falls through the cracks.",
    includes: [
      "Weekly plugin and core updates",
      "Daily automated backups (30-day retention)",
      "Uptime monitoring with alerts",
      "Monthly performance report",
      "1 content update per month",
    ],
    cta: "Start Plan",
    highlight: false,
  },
  {
    name: "Professional",
    price: "$199",
    period: "/month",
    tagline: "Active maintenance plus content support — your site always reflects your business.",
    includes: [
      "Everything in Essentials",
      "4 content updates per month",
      "Security scanning and malware removal",
      "Core Web Vitals monitoring",
      "Priority support — response within 4 business hours",
      "Quarterly SEO health check",
    ],
    cta: "Start Plan",
    highlight: true,
  },
  {
    name: "Agency",
    price: "$350",
    period: "/month",
    tagline: "For businesses that need a real web team on call.",
    includes: [
      "Everything in Professional",
      "Unlimited content updates",
      "Monthly strategy call",
      "A/B test support",
      "Dev hours pool — minor feature work included",
      "Dedicated account manager",
    ],
    cta: "Talk to Us",
    highlight: false,
  },
];

const addOns = [
  { name: "Website Audit", price: "$450", desc: "Full performance, SEO, and accessibility report with prioritized fix list." },
  { name: "SEO Kickstart", price: "$350/mo", desc: "Local keyword research, on-page optimization, and GBP setup for the first 90 days." },
  { name: "Logo + Brand Identity", price: "$1,200", desc: "Logo, color palette, typography system, and brand guidelines PDF." },
  { name: "E-Commerce Add-On", price: "$2,000+", desc: "Add a product catalog, cart, and Stripe checkout to an existing build." },
  { name: "Copywriting", price: "$150/page", desc: "SEO-informed copy written for your audience. Headline, subheads, body — ready to build." },
  { name: "Domain + Hosting Setup", price: "$250", desc: "Cloudflare or Vercel deployment, DNS configuration, SSL, and a 1-year domain registration." },
];

const faqs = [
  {
    q: "Do you charge hourly?",
    a: "No. All projects are fixed-scope with a flat price agreed before work begins. You'll never get an invoice for 'extra hours.'",
  },
  {
    q: "What if I need more pages than my tier includes?",
    a: "Additional pages are $350 each on Starter and Growth projects. We'll scope everything before the contract so there are no surprises.",
  },
  {
    q: "Can I upgrade my care plan later?",
    a: "Yes. You can upgrade at any time — the difference is prorated for the remainder of your billing cycle.",
  },
  {
    q: "Do I own my site when the project is done?",
    a: "Completely. Your code, your domain, your hosting account. If you ever leave, you take everything. No lock-in.",
  },
  {
    q: "How does billing work?",
    a: "Projects are 50% at kickoff, 50% at launch. Care plans are billed monthly via autopay. No annual lock-in on care plans.",
  },
  {
    q: "Is the quote I get binding?",
    a: "Yes. Once the scope is agreed and the contract is signed, the price doesn't change unless you add to the scope.",
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
            No hourly billing.{" "}
            <span className="cp-gradient-text">No surprises.</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
            Every project is fixed price. Every care plan is month-to-month. You know what you&rsquo;re paying before anything starts.
          </p>
        </div>
      </section>

      {/* Project pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">
              One-Time Projects
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)]">
              Web Design & Development
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projectTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  tier.highlight
                    ? "bg-[var(--color-dark)] border-transparent shadow-2xl"
                    : "bg-white border-gray-200 shadow-sm"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-px left-0 right-0 h-1 cp-gradient-bar rounded-t-2xl" />
                )}
                {tier.highlight && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[var(--color-primary)] text-white text-xs font-bold px-4 py-1 rounded-full tracking-wide uppercase">
                    Most Popular
                  </span>
                )}
                <div className="mb-6">
                  <p className={`text-xs font-semibold tracking-widest uppercase mb-2 ${tier.highlight ? "text-[var(--color-accent)]" : "text-[var(--color-primary)]"}`}>
                    {tier.name}
                  </p>
                  <p className={`text-4xl font-bold mb-1 ${tier.highlight ? "text-white" : "text-[var(--color-heading)]"}`}>
                    {tier.price}
                  </p>
                  <p className={`text-xs mb-4 ${tier.highlight ? "text-white/40" : "text-gray-400"}`}>
                    {tier.pages}
                  </p>
                  <p className={`text-sm leading-relaxed ${tier.highlight ? "text-white/70" : "text-gray-500"}`}>
                    {tier.tagline}
                  </p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className={`flex-shrink-0 mt-0.5 w-4 h-4 rounded-full cp-gradient-bar flex items-center justify-center`}>
                        <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 12" fill="currentColor">
                          <path d="M10.28 2.28a.75.75 0 0 0-1.06 0L4.5 7l-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0 0-1.06Z" />
                        </svg>
                      </span>
                      <span className={`text-sm leading-relaxed ${tier.highlight ? "text-white/80" : "text-gray-600"}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center font-semibold px-6 py-3 rounded-lg transition-colors ${
                    tier.highlight
                      ? "bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white"
                      : "bg-[var(--color-mid)] hover:bg-[var(--color-primary)] hover:text-white text-[var(--color-heading)] border border-gray-200 hover:border-transparent"
                  }`}
                >
                  {tier.cta}
                </Link>
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
              Website Care Plans
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Month-to-month. Cancel any time. No annual lock-in.
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
                  <p className={`text-xs font-semibold tracking-widest uppercase mb-2 ${plan.highlight ? "text-[var(--color-accent)]" : "text-[var(--color-primary)]"}`}>
                    {plan.name}
                  </p>
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
            Get a Quote
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)] mb-6 leading-tight">
            Not sure which fits?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Tell us what you&rsquo;re working on and we&rsquo;ll recommend the right starting point — no pressure, no commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/process"
              className="bg-white border border-gray-200 hover:border-[var(--color-primary)] text-[var(--color-heading)] font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              See How We Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
