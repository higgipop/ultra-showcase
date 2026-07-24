import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import siteConfig from "@/lib/site.config";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return siteConfig.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | ${siteConfig.meta.title}`,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = siteConfig.services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--color-dark)] hex-pattern pt-32 pb-20">
        <div className="absolute top-0 left-0 right-0 h-1 cp-gradient-bar" />
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-8 hover:text-white transition-colors"
          >
            ← All Services
          </Link>
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-4">
              {service.startingAt}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-10">
              {service.tagline}
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              {service.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">
                What&rsquo;s Included
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)] mb-6 leading-tight">
                Everything You Need, Nothing You Don&rsquo;t
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {service.summary}
              </p>
            </div>
            <ul className="space-y-4">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-4 bg-[var(--color-mid)] rounded-xl px-5 py-4 border border-gray-100">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full cp-gradient-bar flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M10.28 2.28a.75.75 0 0 0-1.06 0L4.5 7l-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0 0-1.06Z" />
                    </svg>
                  </span>
                  <span className="text-[var(--color-heading)] font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[var(--color-dark)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-3">
              The Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              How It Works
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <div key={step.step} className="relative">
                {i < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[calc(100%-12px)] w-6 h-px bg-white/20 z-10" />
                )}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-7 h-full">
                  <div className="w-10 h-10 rounded-full cp-gradient-bar flex items-center justify-center text-white font-bold text-sm mb-5">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-[var(--color-mid)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">
                Ideal Fit
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)] mb-6 leading-tight">
                Who This Is For
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We work best with clients who are serious about their online presence and ready to invest in something that actually works.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                {service.cta}
              </Link>
            </div>
            <div className="space-y-4">
              {service.idealFor.map((profile) => (
                <div key={profile} className="bg-white rounded-xl border border-gray-100 px-6 py-5 shadow-sm flex items-start gap-4">
                  <div className="flex-shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full cp-gradient-bar mt-2" />
                  <p className="text-[var(--color-heading)] leading-relaxed">{profile}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-[var(--color-dark)] rounded-3xl px-10 py-14">
            <p className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-3">
              Investment
            </p>
            <p className="text-5xl font-bold cp-gradient-text mb-2">
              {service.startingAt}
            </p>
            <p className="text-white/50 text-sm mb-8">Starting price — exact quote provided after discovery call</p>
            <Link
              href="/contact"
              className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
            >
              {service.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Other Services */}
      {others.length > 0 && (
        <section className="py-20 bg-[var(--color-mid)]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">
                Keep Exploring
              </p>
              <h2 className="text-3xl font-bold text-[var(--color-heading)]">Other Services</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {others.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group bg-white rounded-2xl border border-gray-100 p-7 hover:border-[var(--color-primary)] transition-colors shadow-sm"
                >
                  <h3 className="font-bold text-[var(--color-heading)] group-hover:text-[var(--color-primary)] mb-2 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.tagline}</p>
                  <span className="text-sm font-semibold text-[var(--color-primary)]">
                    From {s.startingAt} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
