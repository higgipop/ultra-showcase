import Link from "next/link";
import siteConfig from "@/lib/site.config";

const icons: Record<string, React.ReactNode> = {
  design: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
    </svg>
  ),
  care: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  ),
  seo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  ),
  brand: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  ecommerce: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    </svg>
  ),
  audit: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
    </svg>
  ),
};

function Hero() {
  return (
    <section className="relative bg-[var(--color-dark)] hex-pattern pt-32 pb-20">
      <div className="absolute top-0 left-0 right-0 h-1 cp-gradient-bar" />
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-4">
          What We Offer
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Services Built for{" "}
          <span className="cp-gradient-text">Real Business Results</span>
        </h1>
        <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
          Every service we offer is built around one question: will this help your business grow? No fluff, no bloated retainers — just work that moves the needle.
        </p>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group block bg-[var(--color-mid)] hover:bg-[var(--color-dark)] rounded-2xl p-8 border border-gray-100 hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-white/10 border border-gray-100 group-hover:border-white/10 flex items-center justify-center text-[var(--color-primary)] group-hover:text-[var(--color-accent)] mb-6 transition-all">
                {icons[service.icon]}
              </div>
              <h2 className="text-xl font-bold text-[var(--color-heading)] group-hover:text-white mb-3 transition-colors">
                {service.title}
              </h2>
              <p className="text-sm text-gray-500 group-hover:text-white/60 leading-relaxed mb-5 transition-colors">
                {service.summary}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                  From {service.startingAt}
                </span>
                <span className="text-sm font-semibold text-[var(--color-primary)] group-hover:text-white/80 transition-colors">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const pillars = [
    {
      stat: "< 2s",
      label: "Load Time",
      body: "Every site we build scores 90+ on Google PageSpeed. Performance is part of the product, not an afterthought.",
    },
    {
      stat: "100%",
      label: "U.S.-Based",
      body: "Your project is handled by our team — no offshore handoffs, no communication gaps, no surprises.",
    },
    {
      stat: "24h",
      label: "Support Response",
      body: "Care plan clients get a response within one business day. Most get one in a few hours.",
    },
  ];
  return (
    <section className="bg-[var(--color-dark)] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-3">
            Why Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What Makes the Difference
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div key={p.label} className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-4xl font-bold cp-gradient-text mb-1">{p.stat}</p>
              <p className="text-white font-semibold mb-3">{p.label}</p>
              <p className="text-white/60 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20 bg-[var(--color-mid)]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">
          Get Started
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)] mb-6">
          Not Sure Where to Start?
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Tell us what you&rsquo;re working on and we&rsquo;ll point you in the right direction — no sales pressure, no commitment required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Start a Conversation
          </Link>
          <Link
            href="/services/audit"
            className="bg-white border border-gray-200 hover:border-[var(--color-primary)] text-[var(--color-heading)] font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Get a Free Site Audit
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyUs />
      <CTA />
    </>
  );
}
