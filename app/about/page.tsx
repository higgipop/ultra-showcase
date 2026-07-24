import type { Metadata } from "next";
import Link from "next/link";
import siteConfig from "@/lib/site.config";

export const metadata: Metadata = {
  title: "About | Amory Technology Park",
  description: "A different approach to community partnership — building trust from the very first step.",
};

const bullets = [
  "Listen respectfully.",
  "Share information openly.",
  "Answer questions honestly.",
  "Continue engaging long after construction is complete.",
];

export default function AboutPage() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 h-1 cp-gradient-bar" />

      <section className="bg-[var(--color-dark)] pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-3">The Project</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            A Different Approach to Community Partnership
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            {siteConfig.project.description}
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mb-10">
            Technology plays an important role in everyday life. It supports hospitals, schools, businesses, emergency services, banking, communications, and countless digital services we rely on every day. The Amory Technology Park is designed to help support that future while creating new opportunities for the people of Amory.
          </p>
          <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-4">Our Commitment</p>
          <ul className="space-y-4 mb-10">
            {bullets.map((b) => (
              <li key={b} className="border-l-4 border-[var(--color-primary)] pl-5 text-gray-700 text-lg">
                {b}
              </li>
            ))}
          </ul>
          <p className="text-[var(--color-heading)] font-semibold text-xl italic">
            Trust isn&rsquo;t built through presentations. It&rsquo;s built through relationships.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-dark)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-4">The Community</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
            A Community Built on Resilience
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Amory is known for its resilience. When devastating tornadoes impacted the community, neighbors came together to help neighbors. Families, businesses, churches, schools, first responders, and volunteers worked side by side to rebuild and move forward. That spirit of determination, hard work, and community is what makes Amory special. We believe any company choosing to invest here should reflect those same values.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-4">Looking Ahead</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)] mb-8 leading-tight">
            Investing in Amory&rsquo;s Next Chapter
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            Like many communities across America, Amory has faced economic challenges in recent years. The permanent closure of the Enviva manufacturing facility in 2025 resulted in the loss of local jobs and reminded everyone how important it is to attract long-term investment that creates opportunity for local families.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            We believe the Amory Technology Park can become part of the solution. Not by replacing the industries that came before it, but by helping write the next chapter of Amory&rsquo;s economy.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mb-10">
            The campus represents a long-term investment that can create jobs during construction, provide permanent careers, support local businesses, and generate millions of dollars in new property tax revenue for decades to come. Those new revenues can help strengthen the services every family depends on &mdash; from schools and public safety to parks, roads, and community programs.
          </p>
          <Link href="/impact" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-block">
            See Local Impact Numbers &rarr;
          </Link>
        </div>
      </section>

      <section className="bg-[var(--color-dark)] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-12 h-1 cp-gradient-bar mx-auto mb-8 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Promise</h2>
          <blockquote className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed mb-6">
            &ldquo;{siteConfig.quote.text}&rdquo;
          </blockquote>
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-wide">
            &mdash; {siteConfig.quote.attribution}
          </p>
        </div>
      </section>
    </div>
  );
}
