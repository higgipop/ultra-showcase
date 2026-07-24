import Link from "next/link";

const industries = [
  { slug: "service-companies", label: "Home Services", icon: "🔧", desc: "Plumbers, roofers, HVAC, landscapers" },
  { slug: "medical", label: "Medical & Dental", icon: "⚕️", desc: "Practices, clinics, specialists" },
  { slug: "legal", label: "Legal", icon: "⚖️", desc: "Law firms, injury, family, estate" },
  { slug: "manufacturing", label: "Manufacturing", icon: "🏭", desc: "CNC, fabrication, industrial" },
  { slug: "hospitality", label: "Hospitality", icon: "🍽️", desc: "Restaurants, catering, events, hotels" },
  { slug: "financial", label: "Financial Services", icon: "📈", desc: "RIAs, CPAs, mortgage, insurance" },
  { slug: "defense", label: "Defense & Government", icon: "🛡️", desc: "Contractors, federal, CMMC" },
];

const howItWorks = [
  { step: "01", title: "Pick your industry", body: "Browse the demos below. Each one shows real page structure, real section logic, and real copy strategy tailored to that market." },
  { step: "02", title: "We swap in your brand", body: "Logo, colors, font, copy, photos. The structure stays. The design becomes yours. Turnaround: days, not months." },
  { step: "03", title: "Live in 6 weeks", body: "Fixed price. Fixed timeline. Deployed to Vercel — global CDN, 99.99% uptime, loads in under 2 seconds anywhere in the country." },
];

const proof = [
  { value: "800+", label: "Sites launched" },
  { value: "< 2s", label: "Average load time" },
  { value: "90+", label: "Average PageSpeed score" },
  { value: "6 wks", label: "Start to live site" },
];

export default function Home() {
  return (
    <>
      {/* HERO — showcase framing, industry grid as the CTA */}
      <section className="relative bg-[var(--color-dark)] hex-pattern min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 cp-gradient-bar" />
        <video
          autoPlay muted loop playsInline preload="none"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.06] pointer-events-none"
          aria-hidden="true"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="max-w-3xl mb-16">
            <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-6">
              ULTRA Design Agency · Live Industry Demos
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
              See exactly what we&rsquo;d build<br />
              <span className="cp-gradient-text">for your business.</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed">
              Every demo below is a real page design for a real industry — built on the same stack we&rsquo;d use for your site. Pick your industry and see what you&rsquo;d get.
            </p>
          </div>

          {/* Industry grid — the primary CTA */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[var(--color-primary)]/60 rounded-2xl p-6 transition-all duration-200"
              >
                <div className="text-3xl mb-4">{ind.icon}</div>
                <h2 className="font-bold text-white text-base mb-1 group-hover:cp-gradient-text transition-all">
                  {ind.label}
                </h2>
                <p className="text-white/40 text-xs leading-relaxed mb-4">{ind.desc}</p>
                <span className="text-xs font-semibold text-[var(--color-accent)] group-hover:translate-x-1 inline-block transition-transform">
                  View demo →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Proof strip */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {proof.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold cp-gradient-text mb-1">{item.value}</p>
              <p className="text-sm text-gray-500 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">
              From demo to live site
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-heading)]">
              Three steps. Six weeks.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step) => (
              <div key={step.step} className="relative">
                <span className="text-7xl font-bold cp-gradient-text leading-none block mb-5 opacity-30">
                  {step.step}
                </span>
                <h3 className="text-xl font-bold text-[var(--color-heading)] mb-3">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24 bg-[var(--color-dark)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-3">
                What&rsquo;s Included
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Every site. Every time.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                These aren&rsquo;t add-ons. Every project includes the full stack — design, build, SEO foundation, analytics, and a live site on infrastructure that won&rsquo;t go down.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/pricing" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                  See Pricing
                </Link>
                <Link href="/process" className="border border-white/20 hover:border-white text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                  How We Work
                </Link>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                "Custom design — no templates, no page builders",
                "Mobile-first, scores 90+ on PageSpeed",
                "Next.js on Vercel — global CDN, < 2s load time",
                "On-page SEO baked into every page",
                "Google Analytics + Search Console setup",
                "Contact forms with email delivery",
                "30-day post-launch support included",
                "Month-to-month care plans available",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-3.5">
                  <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full cp-gradient-bar flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M10.28 2.28a.75.75 0 0 0-1.06 0L4.5 7l-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0 0-1.06Z" />
                    </svg>
                  </span>
                  <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--color-mid)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-4">
            Ready to Start
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)] mb-6">
            See your industry demo first.<br />Then let&rsquo;s talk.
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            Browse the demos, get a feel for what we build, then reach out. No pressure — just a conversation about what&rsquo;s possible for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/industries" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
              Browse All Demos
            </Link>
            <Link href="/contact" className="bg-white border border-gray-200 hover:border-[var(--color-primary)] text-[var(--color-heading)] font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
