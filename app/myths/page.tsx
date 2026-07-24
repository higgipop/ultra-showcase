import type { Metadata } from "next";
import Link from "next/link";
import siteConfig from "@/lib/site.config";

export const metadata: Metadata = {
  title: "Common Myths | Amory Technology Park",
  description: "Common misconceptions about data centers — addressed directly.",
};

const myths = [
  {
    myth: "Data centers drain local water supplies.",
    fact: "Our closed-loop cooling system recirculates water rather than consuming it. Total consumption is minimal and fully within permitted limits coordinated with Monroe County water authorities.",
  },
  {
    myth: "Data centers create very few local jobs.",
    fact: "This project creates 1,000+ construction jobs during peak construction and 120+ permanent careers — all local-hire preferred. The multiplier effect on local businesses adds hundreds more indirect jobs.",
  },
  {
    myth: "Data centers are loud and disruptive to neighbors.",
    fact: "Modern data centers are designed with acoustic barriers and setbacks. Operational noise levels at the property boundary are within residential ordinance limits. The facility is not a manufacturing plant.",
  },
  {
    myth: "Data centers don't benefit local schools or infrastructure.",
    fact: "The facility generates millions in annual property tax revenue that flows directly to Monroe County schools, roads, and public safety services — every year the facility operates.",
  },
  {
    myth: "Data centers damage property values.",
    fact: "Research consistently shows that well-designed industrial facilities with clean operations and significant tax contributions do not negatively affect nearby residential property values — and often improve them through infrastructure investment.",
  },
  {
    myth: "The environmental review was rushed or incomplete.",
    fact: "The project will undergo a full environmental impact assessment under Mississippi law, including review of air quality, noise, traffic, water, and land use. All findings will be made available to the public.",
  },
  {
    myth: "Data centers are bad for the power grid.",
    fact: "The Amory Technology Park is working directly with the regional utility to ensure adequate power supply. Our facility planning includes grid coordination to support stability rather than stress it.",
  },
];

export default function MythsPage() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 h-1 cp-gradient-bar" />

      <section className="bg-[var(--color-dark)] pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-3">Setting the Record Straight</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            Common Myths &mdash; Addressed Directly
          </h1>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-mid)]">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-600 leading-relaxed text-lg mb-12">
            Data center projects generate a lot of misinformation. We would rather address concerns directly than let them go unanswered. If you have heard something not listed here,{" "}
            <Link href="/contact" className="text-[var(--color-primary)] hover:underline">ask us</Link>.
          </p>
          <div className="space-y-6">
            {myths.map((item) => (
              <div key={item.myth} className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center text-sm font-bold">&#x2715;</span>
                  <p className="font-semibold text-gray-500 italic">&ldquo;{item.myth}&rdquo;</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-50 text-[var(--color-accent2)] flex items-center justify-center text-sm font-bold">&#x2713;</span>
                  <p className="text-gray-700 leading-relaxed">{item.fact}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">Have a concern not listed here?</p>
            <Link href="/contact" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-block">
              Ask Us Directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
