import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Work | ULTRA Design Agency",
  description:
    "Our process from first call to live site — clear, collaborative, and built around your goals.",
};

const steps = [
  {
    num: "01",
    phase: "Discovery",
    title: "We start by listening.",
    body: "Before we talk design or code, we learn your business. Who are your clients? What do they need to see before they trust you? What is your site failing to do right now? A 45-minute call and a short questionnaire give us everything we need to plan something that actually works.",
    deliverable: "Project brief + goals document",
    duration: "Week 1",
  },
  {
    num: "02",
    phase: "Strategy",
    title: "Map the pages. Plan the words.",
    body: "We define the site architecture — every page, its purpose, and how it connects to the next step in your buyer journey. Copywriting direction is set here so the design has something real to wrap around. No Lorem Ipsum. No placeholders.",
    deliverable: "Sitemap + page-by-page content outline",
    duration: "Week 1–2",
  },
  {
    num: "03",
    phase: "Design",
    title: "One round of concepts. Full homepage first.",
    body: "We design the homepage before anything else — it sets the visual language for the entire site. You review it. We refine. Once the homepage is locked, the rest of the pages come quickly because the hard decisions are already made.",
    deliverable: "Homepage mockup + component library",
    duration: "Week 2–3",
  },
  {
    num: "04",
    phase: "Build",
    title: "Fast. Modern. No bloat.",
    body: "Every site is built on Next.js and deployed to Vercel or Cloudflare — the same infrastructure that serves millions of requests per day for companies like Airbnb and Cloudflare themselves. No WordPress. No page builders. No plugin hell.",
    deliverable: "Staging site — all pages, fully functional",
    duration: "Week 3–5",
  },
  {
    num: "05",
    phase: "Review",
    title: "You review it. We fix it.",
    body: "Two rounds of revisions are included. We review every page on desktop and mobile together. Your feedback goes in — and stays in. Nothing ships until you sign off.",
    deliverable: "Revision log + final approval",
    duration: "Week 5–6",
  },
  {
    num: "06",
    phase: "Launch",
    title: "We handle every technical detail.",
    body: "DNS, SSL, CDN configuration, sitemap submission to Google Search Console, Analytics setup, 301 redirects from your old URLs. You don't touch a setting. We flip the switch and send you a launch confirmation with everything documented.",
    deliverable: "Live site + launch checklist",
    duration: "Week 6",
  },
];

const afterLaunch = [
  {
    title: "30-Day Support Window",
    body: "Anything that needs adjusting in the first month after launch — copy tweaks, image swaps, form changes — is handled at no charge.",
  },
  {
    title: "Care Plan Onboarding",
    body: "If you're starting a care plan, we set up monitoring, backups, and update schedules in the same week as launch.",
  },
  {
    title: "Google Indexing",
    body: "We submit your sitemap and request indexing for priority pages through Google Search Console — not just point and hope.",
  },
  {
    title: "You Own Everything",
    body: "Code, domain, hosting account, Google Analytics — all in your name. If you ever leave, you take everything with you.",
  },
];

const principles = [
  { stat: "6", label: "weeks", note: "Typical timeline — start to live site" },
  { stat: "2", label: "revision rounds", note: "Included in every project" },
  { stat: "1", label: "point of contact", note: "No handoffs to account managers" },
  { stat: "0", label: "surprises", note: "Fixed-scope contracts only" },
];

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--color-dark)] hex-pattern pt-32 pb-24">
        <div className="absolute top-0 left-0 right-0 h-1 cp-gradient-bar" />
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-6">
            How We Work
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] max-w-4xl mb-8">
            Six weeks from first call{" "}
            <span className="cp-gradient-text">to live site.</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed mb-12">
            Every project follows the same six-phase process. You always know where we are, what comes next, and what you need to do.
          </p>
          {/* Stat strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {principles.map((p) => (
              <div key={p.label} className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5">
                <p className="text-3xl font-bold cp-gradient-text leading-none mb-1">
                  {p.stat}
                </p>
                <p className="text-white font-semibold text-sm mb-1">{p.label}</p>
                <p className="text-white/40 text-xs leading-snug">{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`grid lg:grid-cols-[160px_1fr] gap-0 border-b border-gray-100 ${
                  i === 0 ? "border-t" : ""
                }`}
              >
                {/* Number + phase label */}
                <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2 py-8 pr-0 lg:pr-8 lg:py-10 border-r-0 lg:border-r border-gray-100">
                  <span className="text-5xl font-bold cp-gradient-text leading-none flex-shrink-0">
                    {step.num}
                  </span>
                  <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-primary)] lg:mt-2">
                    {step.phase}
                  </span>
                </div>
                {/* Content */}
                <div className="py-8 lg:py-10 lg:pl-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-heading)] mb-4">
                    {step.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
                    {step.body}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="flex items-center gap-2 text-[var(--color-heading)] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full cp-gradient-bar flex-shrink-0" />
                      {step.deliverable}
                    </span>
                    <span className="flex items-center gap-2 text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                      {step.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After launch */}
      <section className="py-24 bg-[var(--color-dark)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-4">
                After Launch
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Going live is the beginning, not the end.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                We don&rsquo;t disappear after the invoice is paid. Every project comes with a 30-day support window, and most clients roll directly into a care plan so nothing is ever left unattended.
              </p>
            </div>
            <div className="space-y-4">
              {afterLaunch.map((item) => (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl px-7 py-6">
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--color-mid)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-4">
            Ready to Start
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)] mb-6 leading-tight">
            Tell us what you&rsquo;re building.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Most projects start with a 30-minute call. No sales pitch — just a conversation about what you need and whether we&rsquo;re the right fit.
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
