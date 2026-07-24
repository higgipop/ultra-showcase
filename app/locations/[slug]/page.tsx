import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

const locations = [
  {
    slug: "tampa-fl",
    city: "Tampa",
    state: "FL",
    stateFullName: "Florida",
    county: "Hillsborough County",
    population: "400,000+",
    tagline: "Web Design & SEO for Tampa Businesses",
    hero: "Tampa's business community is competitive. Your website needs to be faster, cleaner, and better-optimized than the one outranking you today.",
    about:
      "Tampa is one of the fastest-growing business markets in the Southeast. With population growth consistently outpacing the national average and a diverse economy spanning healthcare, finance, tech, and hospitality, local search competition is intensifying every year. A website that worked in 2020 may already be losing ground.",
    services: [
      "Custom web design built for the Tampa market",
      "Local SEO targeting Hillsborough County keywords",
      "Google Business Profile optimization",
      "Location landing pages for neighborhoods and suburbs",
      "Website care plans — maintenance, updates, and support",
      "E-commerce for Tampa-based retailers",
    ],
    neighborhoods: [
      "Downtown Tampa",
      "Ybor City",
      "Hyde Park",
      "South Tampa",
      "Westchase",
      "New Tampa",
      "Brandon",
      "Riverview",
      "Wesley Chapel",
      "Carrollwood",
    ],
    industries: [
      "Law firms and legal services",
      "Medical and dental practices",
      "Restaurants and hospitality",
      "Home services and contractors",
      "Real estate and mortgage",
      "Retail and e-commerce",
    ],
    results: [
      { value: "#1", label: "Google rank for 'roofing contractor Tampa'" },
      { value: "+340%", label: "Organic leads for a Tampa law firm" },
      { value: "94", label: "PageSpeed score (was 31)" },
      { value: "1.4s", label: "Average load time on mobile" },
    ],
    nap: {
      phone: "(813) 555-0100",
      email: "hello@ultradesignagency.com",
      address: "Tampa, FL",
      hours: "Mon–Fri 9am–5pm ET",
    },
  },
];

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) return {};
  return {
    title: `Web Design ${loc.city}, ${loc.state} | ULTRA Design Agency`,
    description: `ULTRA Design Agency provides custom web design, SEO, and website care plans for businesses in ${loc.city}, ${loc.stateFullName}. Fast sites. Real results.`,
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) notFound();

  return (
    <>
      {/* Hero — multi-CTA, Dennis Hernandez pattern */}
      <section className="relative bg-[var(--color-dark)] hex-pattern pt-32 pb-24">
        <div className="absolute top-0 left-0 right-0 h-1 cp-gradient-bar" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-4">
                {loc.city}, {loc.state} · {loc.county}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-6">
                {loc.tagline}
              </h1>
              <p className="text-white/60 text-xl leading-relaxed mb-10">
                {loc.hero}
              </p>
              {/* Multi-CTA — Dennis Hernandez pattern */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-7 py-4 rounded-lg transition-colors text-center"
                >
                  Get a Free Quote
                </Link>
                <a
                  href={`tel:${loc.nap.phone}`}
                  className="flex items-center justify-center gap-3 bg-white/5 border border-white/20 hover:border-white text-white font-semibold px-7 py-4 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                  </svg>
                  {loc.nap.phone}
                </a>
              </div>
              <p className="text-white/30 text-sm">{loc.nap.hours}</p>
            </div>

            {/* NAP + quick results card */}
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
                <p className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-5">
                  Recent Results in {loc.city}
                </p>
                <div className="space-y-4">
                  {loc.results.map((r) => (
                    <div key={r.label} className="flex items-center justify-between gap-4">
                      <span className="text-white/60 text-sm">{r.label}</span>
                      <span className="font-bold cp-gradient-text text-xl flex-shrink-0">{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
                <p className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-4">
                  Contact
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3 text-white/70">
                    <span className="text-white/30 w-16 flex-shrink-0">Phone</span>
                    <a href={`tel:${loc.nap.phone}`} className="hover:text-white transition-colors">{loc.nap.phone}</a>
                  </div>
                  <div className="flex gap-3 text-white/70">
                    <span className="text-white/30 w-16 flex-shrink-0">Email</span>
                    <a href={`mailto:${loc.nap.email}`} className="hover:text-white transition-colors">{loc.nap.email}</a>
                  </div>
                  <div className="flex gap-3 text-white/70">
                    <span className="text-white/30 w-16 flex-shrink-0">Area</span>
                    <span>{loc.city}, {loc.stateFullName}</span>
                  </div>
                  <div className="flex gap-3 text-white/70">
                    <span className="text-white/30 w-16 flex-shrink-0">Hours</span>
                    <span>{loc.nap.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About this market */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">
                The {loc.city} Market
              </p>
              <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-6 leading-tight">
                What we know about doing business in {loc.city}.
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">{loc.about}</p>
              <h3 className="font-bold text-[var(--color-heading)] mb-4">Industries we serve in {loc.city}:</h3>
              <ul className="space-y-2">
                {loc.industries.map((ind) => (
                  <li key={ind} className="flex items-center gap-3 text-gray-600 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full cp-gradient-bar flex-shrink-0" />
                    {ind}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">
                Services
              </p>
              <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-6 leading-tight">
                What we do for {loc.city} businesses.
              </h2>
              <ul className="space-y-4">
                {loc.services.map((s) => (
                  <li key={s} className="flex items-start gap-4 bg-[var(--color-mid)] rounded-xl px-5 py-4 border border-gray-100">
                    <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full cp-gradient-bar flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="currentColor">
                        <path d="M10.28 2.28a.75.75 0 0 0-1.06 0L4.5 7l-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0 0-1.06Z" />
                      </svg>
                    </span>
                    <span className="text-[var(--color-heading)] text-sm leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-20 bg-[var(--color-mid)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">
              Service Area
            </p>
            <h2 className="text-3xl font-bold text-[var(--color-heading)]">
              Neighborhoods & communities we serve.
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {loc.neighborhoods.map((n) => (
              <span
                key={n}
                className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm text-gray-700 font-medium shadow-sm"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — sticky bottom feel */}
      <section className="py-24 bg-[var(--color-dark)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-4">
            {loc.city} Businesses
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Ready to outrank your competitors in {loc.city}?
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Tell us what you&rsquo;re working on. We&rsquo;ll tell you exactly what we&rsquo;d do and what results you can realistically expect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${loc.nap.phone}`}
              className="flex items-center justify-center gap-3 bg-white/5 border border-white/20 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              {loc.nap.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
