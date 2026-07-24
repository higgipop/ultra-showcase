import type { Metadata } from "next";
import Link from "next/link";
import siteConfig from "@/lib/site.config";

export const metadata: Metadata = {
  title: "Local Impact | Amory Technology Park",
  description: "Jobs, tax revenue, and economic value for Monroe County, MS.",
};

export default function ImpactPage() {
  const { impact } = siteConfig;

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 h-1 cp-gradient-bar" />

      <section className="bg-[var(--color-dark)] pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-3">
            Economic Impact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            What This Means for {siteConfig.county}
          </h1>
        </div>
      </section>

      {/* Key numbers */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">
                By the Numbers
              </p>
              <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-6">
                Real Economic Value
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our investment in {siteConfig.city} goes beyond infrastructure. Every dollar spent in construction, every permanent employee hired, and every dollar in tax revenue represents a long-term commitment to {siteConfig.county}.
              </p>
              <p className="text-gray-500 text-sm">
                Tax revenue is allocated to:{" "}
                <span className="font-medium text-[var(--color-heading)]">{impact.taxAllocation}.</span>
              </p>
            </div>
            <div className="space-y-6">
              {[
                { label: "Construction Jobs", value: impact.constructionJobs, note: "At peak construction — local hire preferred, partnering with county workforce agencies" },
                { label: "Permanent Local Careers", value: impact.permanentJobs, note: "Operations, maintenance, security, technology, and skilled trades roles" },
                { label: "Annual Tax Revenue", value: impact.annualTaxRevenue, note: "Exact figure to be confirmed — flowing to county schools, roads, and public safety" },
                { label: "Local Contractor Commitment", value: impact.localContractorCommitment, note: "Of construction spend directed to " + siteConfig.county + " businesses" },
              ].map((item) => (
                <div key={item.label} className="border-b border-gray-100 pb-6">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-[var(--color-heading)]">{item.label}</span>
                    <span className="text-2xl font-bold cp-gradient-text">{item.value}</span>
                  </div>
                  <p className="text-sm text-gray-500">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tax breakdown */}
      <section className="py-20 bg-[var(--color-mid)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">
              Where the Money Goes
            </p>
            <h2 className="text-3xl font-bold text-[var(--color-heading)]">
              Tax Revenue Breakdown
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "Public Schools", pct: "45%", desc: "Supplementing school district budgets for teachers, facilities, and programs" },
              { label: "Roads & Infrastructure", pct: "30%", desc: "County road maintenance, repairs, and improvements near the project area" },
              { label: "Public Safety", pct: "25%", desc: "Fire, emergency services, and sheriff support for " + siteConfig.county },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm text-center">
                <p className="text-4xl font-bold cp-gradient-text mb-2">{item.pct}</p>
                <h3 className="font-bold text-[var(--color-heading)] mb-3">{item.label}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-8">
            Percentages are estimates based on typical county tax allocation formulas and subject to final assessment.
          </p>
        </div>
      </section>

      {/* Going Beyond Tax Revenue */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">
            Community Benefit Agreement
          </p>
          <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-6">
            Going Beyond Tax Revenue
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            Property tax revenue is only part of our commitment. We also believe a successful project should make direct investments in the community itself. That&rsquo;s why the Amory Technology Park will work with residents to create a Community Benefit Agreement that reflects the community&rsquo;s priorities.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            Through public meetings and guidance from the Community Advisory Task Force, local residents will help identify projects that improve everyday life in Amory. Property taxes support local government. The Community Benefit Agreement supports the community itself.
          </p>
          <Link href="/community" className="text-[var(--color-primary)] font-semibold hover:underline">
            Learn about the Community Benefit Agreement &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
