import type { Metadata } from "next";
import Link from "next/link";
import siteConfig from "@/lib/site.config";

export const metadata: Metadata = {
  title: `Water | ${siteConfig.city} Data Center`,
};

const facts = [
  {
    q: "How much water does the facility use?",
    a: "Our facility uses closed-loop evaporative cooling systems that recirculate water rather than consuming it once and discharging. Compared to older once-through cooling designs, this reduces water consumption by over 90%.",
  },
  {
    q: "Where does the water come from?",
    a: "All water supply is sourced through existing approved water authority infrastructure. We have coordinated with Baxter County water authorities to ensure our usage falls within permitted allocations.",
  },
  {
    q: "Will it affect local water supply or wells?",
    a: "No. Our water use does not draw from the same aquifer systems as residential wells in the area. We use municipal supply lines and our impact on regional groundwater is negligible.",
  },
  {
    q: "What happens to wastewater?",
    a: "All wastewater is managed through an approved discharge or treatment plan meeting or exceeding Arkansas state requirements. There is no uncontrolled discharge.",
  },
];

export default function WaterPage() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 h-1 cp-gradient-bar" />
      <section className="bg-[var(--color-dark)] pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-3">Water Use</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            How We Use Water Responsibly
          </h1>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-600 leading-relaxed text-lg mb-12">
            Water is one of the most common concerns about data center projects. We take it seriously.
            Here is exactly how our facility manages water — transparently and responsibly.
          </p>
          <div className="space-y-8">
            {facts.map((item) => (
              <div key={item.q} className="border-b border-gray-100 pb-8">
                <h2 className="text-xl font-bold text-[var(--color-heading)] mb-3">{item.q}</h2>
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-[var(--color-mid)] rounded-xl p-8 border border-gray-100">
            <h2 className="text-xl font-bold text-[var(--color-heading)] mb-3">Still have questions about water?</h2>
            <p className="text-gray-600 mb-6">Contact our community team directly — we will connect you with our environmental engineers.</p>
            <Link href="/contact" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-block">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
