import Link from "next/link";

const services = [
  {
    title: "Comprehensive Financial Planning",
    desc: "An ongoing advisory relationship covering every dimension of your financial life — not a one-time plan.",
    items: [
      "Net worth analysis and balance sheet review",
      "Cash flow planning and savings rate optimization",
      "Insurance gap analysis (life, disability, long-term care)",
      "Education funding strategies (529s, UTMA, Coverdell)",
      "Business owner planning (QBI, S-Corp optimization, exit strategy)",
      "Charitable giving strategies (DAF, QCD, appreciated securities)",
    ],
    fee: "Annual retainer based on complexity",
  },
  {
    title: "Investment Management",
    desc: "Tax-aware portfolio construction using low-cost index funds and ETFs — no commissions, no proprietary products.",
    items: [
      "Globally diversified, factor-tilted portfolios",
      "Tax-loss harvesting and portfolio rebalancing",
      "Asset location optimization (taxable vs. tax-deferred)",
      "Transition planning for in-kind transfers",
      "Custodied at Schwab, Fidelity, or TD Ameritrade",
      "Quarterly performance reporting with context",
    ],
    fee: "% of AUM, tiered",
  },
  {
    title: "Retirement Income Planning",
    desc: "The most complex phase of your financial life deserves dedicated planning. We specialize in the distribution phase.",
    items: [
      "Social Security claiming optimization",
      "Medicare enrollment strategy and IRMAA planning",
      "Required Minimum Distribution (RMD) strategy",
      "Pension maximization and lump-sum analysis",
      "Sequence-of-returns risk management",
      "Inflation-adjusted withdrawal rate modeling",
    ],
    fee: "Included in comprehensive planning",
  },
  {
    title: "Tax Planning & Coordination",
    desc: "We do not prepare tax returns, but we work proactively with your CPA to implement tax-reduction strategies.",
    items: [
      "Roth conversion planning and tax bracket management",
      "Qualified Opportunity Zone analysis",
      "Concentrated stock position strategies",
      "Tax-efficient asset location",
      "Capital gains harvesting and timing",
      "Year-end tax projection review",
    ],
    fee: "Included in comprehensive planning",
  },
];

export default function FinancialServices() {
  return (
    <div className="bg-white font-sans">
      <nav className="border-b border-gray-100 sticky top-0 z-50 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <Link href="home" className="font-bold text-[#1B2B4B] text-lg tracking-tight">Meridian<span className="font-light text-gray-400"> Wealth</span></Link>
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-500">
            <Link href="services" className="text-[#1B2B4B]">Services</Link>
            <Link href="wealth-management" className="hover:text-[#1B2B4B]">Wealth Management</Link>
            <Link href="retirement-planning" className="hover:text-[#1B2B4B]">Retirement</Link>
            <Link href="about" className="hover:text-[#1B2B4B]">About</Link>
            <Link href="contact" className="bg-[#1B2B4B] text-white px-5 py-2.5 hover:bg-[#243a63] transition-colors">Schedule a Call</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-20 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-5">Our Services</p>
          <h1 className="text-5xl font-bold text-[#1B2B4B] leading-tight mb-6">What We Do — and How We Charge</h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">As fee-only fiduciaries, we are compensated only by our clients — never by product commissions. Our fees are transparent and tied to the value we deliver.</p>
        </div>
      </section>

      {/* Service sections */}
      <div className="divide-y divide-gray-100">
        {services.map((s, i) => (
          <section key={s.title} className={`py-16 px-6 ${i % 2 === 1 ? "bg-gray-50" : "bg-white"}`}>
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-[#1B2B4B] mb-3">{s.title}</h2>
                <p className="text-gray-500 leading-relaxed mb-6">{s.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="text-gray-300 mt-0.5 flex-shrink-0">—</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-gray-200 p-6 h-fit">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Fee Structure</p>
                <p className="font-semibold text-[#1B2B4B]">{s.fee}</p>
                <Link href="contact" className="block mt-6 text-center border border-[#1B2B4B] text-[#1B2B4B] font-semibold py-3 text-sm hover:bg-[#1B2B4B] hover:text-white transition-colors">Ask About Fees</Link>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Fee-only explanation */}
      <section className="border-t border-gray-100 py-16 px-6 bg-[#1B2B4B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">Why Fee-Only Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              ["No Commissions","We earn nothing when you buy or sell an investment. Your portfolio decisions are never influenced by our compensation."],
              ["Fiduciary Standard","We are legally required to act in your best interest. Most brokers are held to a lower &ldquo;suitability&rdquo; standard."],
              ["Full Transparency","You see exactly what you pay, when you pay it. No embedded fees, no revenue sharing with fund companies."],
            ].map(([title, desc]) => (
              <div key={title as string}>
                <h3 className="font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold text-[#1B2B4B] mb-4">Ready to Talk?</h2>
        <p className="text-gray-500 text-sm mb-8">30-minute complimentary consultations. No pitch, no obligation.</p>
        <Link href="contact" className="inline-block bg-[#1B2B4B] text-white px-10 py-4 font-semibold hover:bg-[#243a63] transition-colors">Schedule a Call</Link>
      </section>
    </div>
  );
}
