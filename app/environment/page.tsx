import type { Metadata } from "next";
import Link from "next/link";
import siteConfig from "@/lib/site.config";

export const metadata: Metadata = {
  title: "Environment | Amory Technology Park",
  description: "Our environmental commitments for Monroe County, MS — water use, energy efficiency, noise, and more.",
};

const commitments = [
  {
    title: "Very Low Water Use",
    body: "We use modern closed-loop cooling systems that recirculate water rather than consuming it. Compared to older designs, this dramatically reduces water consumption — and all water use complies with Monroe County water authority requirements.",
  },
  {
    title: "Energy Efficiency",
    body: "Our facility is designed for a Power Usage Effectiveness (PUE) rating below 1.3 — among the most efficient in the industry. Less wasted energy means less environmental impact.",
  },
  {
    title: "Land & Habitat",
    body: "Our site design includes natural buffers and green space that protect wildlife habitat and ensure responsible land use beyond our facility footprint.",
  },
  {
    title: "Noise & Light",
    body: "Acoustic barriers, building setbacks, and carefully designed exterior lighting are built into the facility to meet or exceed local ordinances and minimize impact on surrounding properties.",
  },
  {
    title: "Cleaner Backup Power",
    body: "We avoid the large diesel generator yards commonly associated with traditional data centers whenever possible, pursuing cleaner backup power solutions.",
  },
  {
    title: "Stormwater",
    body: "A comprehensive stormwater management plan prevents runoff from construction and operations from impacting local waterways, in compliance with Mississippi environmental regulations.",
  },
];

export default function EnvironmentPage() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 h-1 cp-gradient-bar" />

      <section className="bg-[var(--color-dark)] pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-3">Environment</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            Our Environmental Commitments
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gray-600 leading-relaxed text-lg mb-6 max-w-3xl">
            Being a good neighbor means protecting the natural resources that make {siteConfig.city} special. We believe innovation and environmental stewardship should always go hand in hand.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mb-16 max-w-3xl">
            The project is designed to reduce water use, preserve natural buffers, protect wildlife habitat, reduce light and noise, and explore opportunities to reuse excess heat for future community applications.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commitments.map((c) => (
              <div key={c.title} className="bg-[var(--color-mid)] rounded-xl p-7 border border-gray-100">
                <div className="w-8 h-1 cp-gradient-bar rounded-full mb-4" />
                <h3 className="font-bold text-[var(--color-heading)] mb-3">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/contact" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-block">
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
