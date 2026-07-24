import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas | ULTRA Design Agency",
  description:
    "ULTRA Design Agency serves businesses across Florida and the Gulf Coast. Find your area.",
};

const locations = [
  {
    slug: "tampa-fl",
    city: "Tampa",
    state: "FL",
    county: "Hillsborough County",
    population: "400K+",
    tagline: "Web design and SEO for Tampa businesses.",
  },
  {
    slug: "st-pete-fl",
    city: "St. Petersburg",
    state: "FL",
    county: "Pinellas County",
    population: "265K+",
    tagline: "Custom websites and local SEO in St. Pete.",
  },
  {
    slug: "clearwater-fl",
    city: "Clearwater",
    state: "FL",
    county: "Pinellas County",
    population: "117K+",
    tagline: "Fast, modern sites for Clearwater businesses.",
  },
  {
    slug: "sarasota-fl",
    city: "Sarasota",
    state: "FL",
    county: "Sarasota County",
    population: "58K+",
    tagline: "Web design and SEO for Sarasota and Bradenton.",
  },
  {
    slug: "naples-fl",
    city: "Naples",
    state: "FL",
    county: "Collier County",
    population: "22K+",
    tagline: "Premium web design for Naples and Collier County.",
  },
  {
    slug: "fort-myers-fl",
    city: "Fort Myers",
    state: "FL",
    county: "Lee County",
    population: "90K+",
    tagline: "Web design and local SEO in Lee County.",
  },
];

export default function LocationsPage() {
  return (
    <>
      <section className="relative bg-[var(--color-dark)] hex-pattern pt-32 pb-20">
        <div className="absolute top-0 left-0 right-0 h-1 cp-gradient-bar" />
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-4">
            Where We Work
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Serving businesses across{" "}
            <span className="cp-gradient-text">Florida & the Gulf Coast.</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
            We work with clients in person and remotely. No matter where you are, you get the same team, the same process, and the same results.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group bg-[var(--color-mid)] hover:bg-[var(--color-dark)] border border-gray-100 hover:border-transparent rounded-2xl p-7 transition-all shadow-sm hover:shadow-xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-[var(--color-heading)] group-hover:text-white transition-colors">
                      {loc.city}
                    </h2>
                    <p className="text-sm text-gray-400 group-hover:text-white/50 transition-colors">
                      {loc.county}
                    </p>
                  </div>
                  <span className="text-xs bg-white group-hover:bg-white/10 border border-gray-200 group-hover:border-white/20 rounded-full px-3 py-1 text-gray-500 group-hover:text-white/60 transition-all">
                    {loc.state}
                  </span>
                </div>
                <p className="text-sm text-gray-500 group-hover:text-white/60 leading-relaxed mb-5 transition-colors">
                  {loc.tagline}
                </p>
                <span className="text-sm font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                  View location →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-dark)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-4">
            Not on the List?
          </p>
          <h2 className="text-3xl font-bold text-white mb-4">
            We work with businesses nationwide.
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            Most of our client work is done remotely. If you don&rsquo;t see your city, reach out — location is rarely a blocker.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
