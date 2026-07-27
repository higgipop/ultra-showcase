import Link from "next/link";

const faqs = [
  { q: "When should I start taking Social Security?", a: "It depends on your health, other income sources, spouse's benefit, and break-even analysis. We model multiple claiming scenarios to find the optimal strategy for your situation — there is no universal right answer." },
  { q: "How much do I need to retire?", a: "The '4% rule' is a starting point, not a plan. Your number depends on your spending, tax situation, Social Security, pensions, healthcare costs, and legacy goals. We build a Monte Carlo simulation specific to you." },
  { q: "What happens to my investments when I retire?", a: "They shift from accumulation mode to distribution mode. We restructure your portfolio for income generation, sequence-of-returns risk, and tax-efficient withdrawals. This requires active planning, not just a change in contribution amount." },
  { q: "How do I handle Required Minimum Distributions?", a: "We plan RMDs years in advance using Roth conversions, charitable distributions (QCDs), and withdrawal sequencing to minimize the tax impact across your lifetime and your heirs'." },
  { q: "When do I need to sign up for Medicare?", a: "Generally at 65, but the rules around Part B timing, IRMAA surcharges, and employer coverage coordination are complex. Getting it wrong can result in permanent premium penalties. We coordinate this for all clients approaching 65." },
];

export default function RetirementPlanning() {
  return (
    <div className="bg-white font-sans">
      <nav className="border-b border-gray-100 sticky top-0 z-50 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <Link href="home" className="font-bold text-[#1B2B4B] text-lg tracking-tight">Meridian<span className="font-light text-gray-400"> Wealth</span></Link>
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-500">
            <Link href="services" className="hover:text-[#1B2B4B]">Services</Link>
            <Link href="wealth-management" className="hover:text-[#1B2B4B]">Wealth Management</Link>
            <Link href="retirement-planning" className="text-[#1B2B4B]">Retirement</Link>
            <Link href="about" className="hover:text-[#1B2B4B]">About</Link>
            <Link href="contact" className="bg-[#1B2B4B] text-white px-5 py-2.5 hover:bg-[#243a63] transition-colors">Schedule a Call</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-5">Retirement Income Planning</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1B2B4B] leading-tight mb-6">Accumulating Wealth and Distributing It Are Two Very Different Problems</h1>
            <p className="text-gray-500 text-lg leading-relaxed">The questions change when you retire. We specialize in the distribution phase — Social Security, Medicare, RMDs, withdrawal sequencing, and income sustainability.</p>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-video">
            <img src="https://images.unsplash.com/photo-1559526324-593bc073d938?w=1200&q=80&auto=format&fit=crop" alt="Retirement planning" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Two-column content areas */}
      <section className="py-20 px-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-[#1B2B4B] mb-6">What We Plan For</h2>
            <div className="space-y-5">
              {[
                ["Social Security Optimization","We model all claiming scenarios for you and your spouse — including file-and-suspend strategies, survivor benefits, and break-even analysis — to identify the strategy that maximizes lifetime income."],
                ["Medicare Enrollment Coordination","We walk you through Part A, B, C, and D enrollment timing, IRMAA planning, Medigap vs. Advantage plan analysis, and how employer coverage affects your choices."],
                ["Required Minimum Distributions","Starting at 73, the IRS requires withdrawals from traditional IRAs and 401(k)s. We plan years ahead using Roth conversions and charitable strategies to minimize the long-term tax cost."],
                ["Withdrawal Sequencing","Which accounts you draw from — and in what order — has a meaningful impact on your lifetime tax burden. We plan this systematically, not ad hoc."],
                ["Sequence-of-Returns Risk","A market downturn early in retirement can permanently impair your portfolio. We build buffer strategies to protect against this — cash reserves, income floors, and dynamic withdrawal rates."],
              ].map(([title, desc]) => (
                <div key={title as string} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                  <h3 className="font-bold text-[#1B2B4B] mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Social Security highlight callout */}
          <div className="space-y-6">
            <div className="border-2 border-[#1B2B4B] p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Maximizing Social Security</p>
              <h3 className="text-xl font-bold text-[#1B2B4B] mb-4">The Difference Between Age 62 and 70 Is Often $100,000+</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Claiming early reduces your benefit permanently. Waiting increases it 8% per year past full retirement age. For married couples, coordinating both spouses&apos; claims is even more valuable — especially when there is an earnings disparity.</p>
              <div className="space-y-3">
                {[["Breakeven analysis","When you recoup delayed benefits"],["Spousal coordination","Maximize survivor benefits"],["Tax impact modeling","SS is taxable up to 85%"],["Healthcare bridge","Covering costs before Medicare"]].map(([k, v]) => (
                  <div key={k} className="flex justify-between text-sm border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                    <span className="font-semibold text-gray-600">{k}</span>
                    <span className="text-gray-400">{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-100 p-6">
              <h3 className="font-bold text-[#1B2B4B] mb-3">Who This Is For</h3>
              <ul className="space-y-2">
                {["5–10 years from retirement","Recently retired (within 3 years)","Managing an inherited IRA","Transitioning from a pension","Navigating early retirement before Medicare"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-500">
                    <span className="text-gray-300 mt-0.5">—</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-10">Common Questions</p>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-gray-200 pb-8 last:border-0 last:pb-0">
                <h3 className="font-bold text-[#1B2B4B] mb-3">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-100 py-16 px-6 text-center">
        <h2 className="text-2xl font-bold text-[#1B2B4B] mb-4">Thinking About Retirement? Start Here.</h2>
        <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">30-minute complimentary call to discuss your timeline, your biggest concerns, and whether we&apos;re the right fit.</p>
        <Link href="contact" className="inline-block bg-[#1B2B4B] text-white px-10 py-4 font-semibold hover:bg-[#243a63] transition-colors">Schedule a Call</Link>
      </section>
    </div>
  );
}
