// elevationwp.com: white, text-forward, 4 service sections, fee-only callout
import Link from "next/link";

const services = [
  {
    title: "Comprehensive Wealth Management",
    href: "wealth-management",
    whoFor: "Pre-retirees, business owners, executives, and high-net-worth families who want a coordinated financial plan.",
    included: [
      "Written Investment Policy Statement",
      "Asset allocation and portfolio construction",
      "Tax-aware investing and rebalancing",
      "Annual financial plan review",
      "Estate planning coordination",
      "Insurance needs analysis",
      "Cash flow and retirement income planning",
      "Coordination with CPA and estate attorney",
    ],
  },
  {
    title: "Personalized Investment Management",
    href: "wealth-management",
    whoFor: "Investors who want evidence-based portfolio management, direct indexing, or ESG alignment — without a bundled financial plan.",
    included: [
      "Evidence-based, low-cost portfolio construction",
      "Direct indexing (for portfolios $500K+)",
      "Tax-loss harvesting",
      "ESG / values-aligned portfolio options",
      "Quarterly performance reporting",
      "Disciplined rebalancing",
    ],
  },
  {
    title: "Retirement Income Planning",
    href: "retirement-planning",
    whoFor: "Clients within 5 years of retirement or newly retired who need a structured income plan.",
    included: [
      "Social Security claiming optimization",
      "Medicare enrollment and plan selection",
      "Withdrawal sequencing (tax-efficient order)",
      "Income floor strategy development",
      "Required Minimum Distribution planning",
      "Roth conversion analysis",
      "Longevity planning and sequence-of-returns stress testing",
    ],
  },
  {
    title: "Tax & Estate Planning Coordination",
    href: "services",
    whoFor: "Clients with complex tax situations, business interests, or estate planning needs requiring coordinated professional guidance.",
    included: [
      "Coordinated tax strategy with your CPA",
      "Trust and entity structure review",
      "Charitable giving strategies (DAF, QCD, CRT)",
      "Business exit planning coordination",
      "Beneficiary designation review",
      "Estate document review with your attorney",
    ],
  },
];

export default function FinancialServices() {
  return (
    <div className="bg-white font-sans">
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="font-bold text-[#1B3060] text-lg">ELEVATION<span className="font-light text-gray-400"> WEALTH</span></div>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-600">
            <Link href="home" className="hover:text-[#1B3060]">Home</Link>
            <Link href="services" className="text-[#1B3060] border-b border-[#1B3060]">What We Do</Link>
            <Link href="about" className="hover:text-[#1B3060]">Our Advisors</Link>
            <Link href="contact" className="hover:text-[#1B3060]">Contact</Link>
          </div>
          <Link href="contact" className="bg-[#1B3060] text-white font-semibold px-5 py-2.5 rounded text-sm hover:bg-[#152548] transition-colors">Let&apos;s Get Started</Link>
        </div>
      </nav>

      <div className="py-14 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1B3060] mb-4">Our Services & Approach</h1>
          <p className="text-gray-600 text-lg leading-relaxed">We provide fee-only financial planning and investment management for individuals, families, and business owners. No commissions. No product sales. Fiduciary guidance on everything we recommend.</p>
        </div>
      </div>

      {services.map((s, i) => (
        <section key={s.title} className={`py-14 px-6 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1B3060] mb-4">{s.title}</h2>
            <div className="grid sm:grid-cols-2 gap-8 mb-6">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Who It&apos;s For</p>
                <p className="text-gray-600 leading-relaxed">{s.whoFor}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">What&apos;s Included</p>
                <ul className="space-y-2">
                  {s.included.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="text-[#1B3060] font-bold mt-0.5 flex-shrink-0">—</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Link href={s.href} className="text-sm font-semibold text-[#1B3060] hover:underline">Learn More →</Link>
          </div>
        </section>
      ))}

      {/* Fee-only callout */}
      <section className="py-14 bg-[#1B3060] px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-5">Fee-Only, Fiduciary Advice — What That Means</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <p className="text-white/80 leading-relaxed mb-4">
                &ldquo;Fee-only&rdquo; means we are compensated exclusively by the fees our clients pay us. We do not receive commissions, referral fees, or compensation from product manufacturers. Ever.
              </p>
              <p className="text-white/80 leading-relaxed">
                &ldquo;Fiduciary&rdquo; means we are legally obligated to act in your best interest — not just recommend &ldquo;suitable&rdquo; products. We hold ourselves to the highest standard in the profession.
              </p>
            </div>
            <div className="space-y-3">
              {["No commissions on products we recommend", "No conflicts of interest from third-party compensation", "Transparent fee schedule disclosed upfront", "NAPFA member — National Association of Personal Financial Advisors", "ADV Part 2A available upon request"].map((item) => (
                <div key={item} className="flex items-start gap-2 text-white/80 text-sm">
                  <span className="text-white font-bold mt-0.5 flex-shrink-0">✓</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="py-4 bg-gray-50 border-t border-gray-100 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400 text-xs">Investment advisory services offered through Elevation Wealth Advisors, LLC, a Registered Investment Adviser. Past performance does not guarantee future results. <Link href="contact" className="text-[#1B3060] hover:underline">View our ADV Part 2A disclosure.</Link></p>
        </div>
      </div>
    </div>
  );
}
