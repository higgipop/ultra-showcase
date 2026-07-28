import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | ULTRA Design Agency",
  description:
    "Choose a design, send your brand assets, go live in days. No design fees, no long timelines.",
};

const steps = [
  {
    num: "01",
    phase: "Choose",
    title: "Pick your design.",
    body: "Browse our design library and find the industry layout that fits your business. You're choosing layout, structure, and visual language — not color or logo. Those come next.",
    deliverable: "Design confirmed",
    duration: "Day 1",
  },
  {
    num: "02",
    phase: "Prep",
    title: "Send us your brand.",
    body: "We give you a content checklist. You fill it in: logo files, brand colors and fonts, the copy for each page, and any photos you want to use. This is the only thing that can slow down the timeline — the faster you send it, the faster you're live.",
    deliverable: "Content checklist complete",
    duration: "Day 1–3",
  },
  {
    num: "03",
    phase: "Build",
    title: "We apply your brand to the design.",
    body: "Your logo, colors, fonts, and content go into the design you chose. The layout stays as-is — that's what keeps cost low and the timeline fast. We build on Vercel: fast, modern, no WordPress, no plugin dependencies.",
    deliverable: "Staging site ready",
    duration: "Day 3–5",
  },
  {
    num: "04",
    phase: "Review",
    title: "One round of review.",
    body: "You get a staging link. Go through every page — desktop and mobile. Send us your feedback in one pass. We make the changes and send it back. Nothing ships until you approve it.",
    deliverable: "Final approval",
    duration: "Day 5–6",
  },
  {
    num: "05",
    phase: "Launch",
    title: "We handle every technical detail.",
    body: "DNS, SSL, CDN, sitemap submission to Google Search Console, Analytics setup. You don't touch a setting. We flip the switch, confirm everything is live, and send you a launch summary.",
    deliverable: "Live site + launch confirmation",
    duration: "Day 7",
  },
];

const whatYouProvide = [
  { item: "Logo files", detail: "SVG or high-res PNG, light and dark versions if you have them" },
  { item: "Brand colors", detail: "Hex codes or a style guide — or tell us your primary color and we work from there" },
  { item: "Fonts", detail: "What you use, or we match the feel of your industry design" },
  { item: "Page copy", detail: "The words for each page — we give you the outline, you fill it in" },
  { item: "Photos", detail: "Business photography, product shots, or team photos. Stock is fine if you don't have them." },
];

const afterLaunch = [
  {
    title: "30-Day Support Window",
    body: "Anything that needs adjusting in the first month after launch — copy tweaks, image swaps, form changes — is handled at no charge.",
  },
  {
    title: "Care Plan Onboarding",
    body: "We set up monitoring, performance tracking, and update workflows in the same week as launch.",
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
  { stat: "~7", label: "days", note: "Typical time from content received to live site" },
  { stat: "$0", label: "upfront", note: "No design fee — the design is already built" },
  { stat: "1", label: "revision round", note: "Focused feedback, fast turnaround" },
  { stat: "0", label: "surprises", note: "Fixed monthly rate, no hourly billing" },
];

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--color-dark)] hex-pattern pt-32 pb-24">
        <div className="absolute top-0 left-0 right-0 h-1 cp-gradient-bar" />
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-6">
            How It Works
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] max-w-4xl mb-8">
            Choose a design.{" "}
            <span className="cp-gradient-text">Live in days.</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed mb-12">
            You pick the design. You provide your brand. We put it together and launch it. No back-and-forth design rounds. No six-week timelines.
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
                <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2 py-8 pr-0 lg:pr-8 lg:py-10 border-r-0 lg:border-r border-gray-100">
                  <span className="text-5xl font-bold cp-gradient-text leading-none flex-shrink-0">
                    {step.num}
                  </span>
                  <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-primary)] lg:mt-2">
                    {step.phase}
                  </span>
                </div>
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

      {/* What you provide */}
      <section className="py-24 bg-[var(--color-mid)]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">
              Your Checklist
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)] mb-4">
              What you send us
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              We send you a content checklist the day you start. This is everything on it.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatYouProvide.map((w) => (
              <div key={w.item} className="bg-white rounded-xl border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-5 h-5 rounded-full cp-gradient-bar flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M10.28 2.28a.75.75 0 0 0-1.06 0L4.5 7l-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0 0-1.06Z" />
                    </svg>
                  </span>
                  <h3 className="font-bold text-[var(--color-heading)]">{w.item}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed pl-8">{w.detail}</p>
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
                Every build comes with a 30-day support window and rolls directly into a care plan. Your site stays fast, secure, and up to date — without you having to think about it.
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
            Pick a design and we&rsquo;ll take it from there.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Browse the demos, find what fits your industry, and reach out. We&rsquo;ll send you the content checklist the same day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/industries"
              className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Browse Designs
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
