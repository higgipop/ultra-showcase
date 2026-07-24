import Link from "next/link";
import siteConfig from "@/lib/site.config";

const industries = [
  { slug: "service-companies", label: "Home Services", icon: "🔧" },
  { slug: "medical", label: "Medical & Dental", icon: "⚕️" },
  { slug: "legal", label: "Legal", icon: "⚖️" },
  { slug: "manufacturing", label: "Manufacturing", icon: "🏭" },
  { slug: "hospitality", label: "Hospitality", icon: "🍽️" },
  { slug: "financial", label: "Financial", icon: "📈" },
  { slug: "defense", label: "Defense & Gov", icon: "🛡️" },
];

const testimonials = [
  {
    quote: "We went from page 4 to position 1 in about five months. The phone hasn't stopped ringing.",
    name: "James R.",
    title: "Managing Partner, Gulf Coast Injury Attorneys",
  },
  {
    quote: "I was skeptical about spending this much on a website. Now I wish we'd done it two years earlier.",
    name: "Maria S.",
    title: "Practice Manager, Bay Area Dental Group",
  },
  {
    quote: "Every other agency gave us a template. ULTRA built something that actually reflects who we are.",
    name: "David K.",
    title: "CEO, Coastal Supply Co.",
  },
];

const whyUs = [
  { stat: "6 weeks", label: "Start to live site", body: "Fixed timeline. Fixed price. No surprises." },
  { stat: "< 2s", label: "Average load time", body: "Every site scores 90+ on Google PageSpeed." },
  { stat: "1", label: "Point of contact", body: "No handoffs to account managers or junior staff." },
  { stat: "$0", label: "Page builder tax", body: "Custom code. Modern infrastructure. No plugin bloat." },
];

export default function Home() {
  return (
    <>
      <section className="relative bg-[var(--color-dark)] hex-pattern min-h-[85vh] flex flex-col justify-center pt-20 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 cp-gradient-bar" />
        <video autoPlay muted loop playsInline preload="none"
          className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" aria-hidden="true">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-6">
              Tampa, FL · Web Design Agency
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-[1.0] mb-8">
              Websites that<br /><span className="cp-gradient-text">actually work.</span>
            </h1>
            <p className="text-white/60 text-xl md:text-2xl max-w-2xl leading-relaxed mb-12">
              {siteConfig.subTagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
                Get a Free Quote
              </Link>
              <Link href="/work" className="bg-white/5 border border-white/20 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {siteConfig.statItems.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold cp-gradient-text mb-1">{item.value}</p>
              <p className="text-sm text-gray-500 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">Industries We Serve</p>
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-heading)] leading-tight">
                Built for your industry.<br />Not just your homepage.
              </h2>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed">
              Every industry has different conversion goals, compliance requirements, and SEO competition. We build sites that reflect those differences — not generic templates dressed up with your logo.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`}
                className="group flex items-center gap-4 bg-[var(--color-mid)] hover:bg-[var(--color-dark)] border border-gray-100 hover:border-transparent rounded-2xl px-6 py-5 transition-all">
                <span className="text-2xl">{ind.icon}</span>
                <span className="font-semibold text-[var(--color-heading)] group-hover:text-white transition-colors text-sm">{ind.label}</span>
                <span className="ml-auto text-[var(--color-primary)] group-hover:text-[var(--color-accent)] text-sm transition-colors">→</span>
              </Link>
            ))}
            <Link href="/industries"
              className="group flex items-center gap-4 border border-[var(--color-primary)]/20 hover:bg-[var(--color-primary)] rounded-2xl px-6 py-5 transition-all">
              <span className="font-semibold text-[var(--color-primary)] group-hover:text-white transition-colors text-sm">View all industries →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-dark)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-3">What We Do</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Everything your site needs.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {siteConfig.services.slice(0, 6).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}
                className="group bg-white/5 border border-white/10 hover:border-[var(--color-primary)]/50 rounded-2xl p-7 transition-all">
                <h3 className="font-bold text-white mb-2">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{s.tagline}</p>
                <span className="text-sm font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">From {s.startingAt} →</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-block border border-white/20 hover:border-white text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">Why ULTRA</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-heading)]">What makes the difference.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div key={item.label} className="bg-[var(--color-mid)] rounded-2xl p-8 border border-gray-100">
                <p className="text-4xl font-bold cp-gradient-text mb-1">{item.stat}</p>
                <p className="font-semibold text-[var(--color-heading)] mb-3">{item.label}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-mid)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">Client Results</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-heading)]">Don&rsquo;t take our word for it.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-[var(--color-heading)] text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-dark)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-4">Get Started</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to build something that works?
          </h2>
          <p className="text-white/60 text-xl leading-relaxed mb-10">
            Tell us what you&rsquo;re working on. Most conversations start with a 30-minute call and end with a clear plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-10 py-4 rounded-lg transition-colors text-lg">
              Get a Free Quote
            </Link>
            <Link href="/pricing" className="bg-white/5 border border-white/20 hover:border-white text-white font-semibold px-10 py-4 rounded-lg transition-colors text-lg">
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
