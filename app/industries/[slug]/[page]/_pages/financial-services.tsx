import Link from "next/link";

const services = [
  {
    name: "Wealth Management",
    includes: ["Investment policy statement development", "Asset allocation & portfolio construction", "Tax-efficient investment strategies", "Alternative investment evaluation", "Ongoing portfolio monitoring & rebalancing", "Quarterly performance reporting"],
    forWhom: ["High-net-worth individuals and families", "Business owners preparing for liquidity events", "Executives with concentrated stock positions", "Retirees managing drawdown from portfolios"],
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. We manage assets using a goals-based investment framework — each portfolio is designed around your specific objectives, time horizon, and risk tolerance. We hold no proprietary products and earn no commissions. Every investment decision is made in your interest, not ours.",
  },
  {
    name: "Retirement Planning",
    includes: ["Social Security optimization strategies", "Retirement income sequencing & floor planning", "Required Minimum Distribution (RMD) planning", "Pension analysis (lump sum vs. annuity)", "Healthcare cost planning for retirement", "Monte Carlo probability analysis"],
    forWhom: ["Individuals within 10 years of retirement", "Early retirees navigating pre-Medicare years", "Business owners planning exit & succession", "Clients inheriting IRAs or pension distributions"],
    detail: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Retirement planning is not about accumulation — it is about creating a reliable income stream that keeps pace with your life. We model dozens of scenarios to identify the strategy most likely to fund your retirement fully, with the flexibility to adapt as conditions change.",
  },
  {
    name: "Tax Planning",
    includes: ["Tax-loss harvesting & gain management", "Roth conversion strategy & analysis", "Business entity structure optimization", "Qualified Opportunity Zone evaluation", "Charitable giving strategies (DAF, CRT)", "Coordination with your CPA"],
    forWhom: ["High-income professionals and executives", "Business owners with complex entity structures", "Clients with significant taxable investment accounts", "Individuals with upcoming liquidity events"],
    detail: "Ut enim ad minim veniam, quis nostrud exercitation. Tax planning is not what happens in April — it happens all year. We coordinate with your CPA to identify opportunities across your investment accounts, business interests, and estate to legally minimize what you owe and maximize what you keep.",
  },
  {
    name: "Estate & Legacy Planning",
    includes: ["Estate plan review & gap analysis", "Trust structure design & funding", "Beneficiary designation coordination", "Family wealth transfer strategies", "Charitable legacy planning", "Coordination with estate planning attorney"],
    forWhom: ["Families with estates over $2M", "Parents with minor children or special needs dependents", "Business owners with succession considerations", "Clients with significant charitable intent"],
    detail: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. An estate plan is only as good as the coordination behind it. We review your documents, align your beneficiary designations, title assets correctly, and work alongside your estate attorney to ensure that what you intend to leave — actually transfers as intended.",
  },
];

export default function FinancialServicesPage() {
  return (
    <div className="bg-white font-sans">
      {/* Nav accent */}
      <div className="h-1 bg-[#1B3A5C]" />

      {/* Hero */}
      <section className="bg-white pt-28 pb-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#1B3A5C] text-xs font-semibold tracking-[0.2em] uppercase mb-5">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6 leading-tight" style={{fontFamily: "Georgia, serif"}}>
            Services & Approach
          </h1>
          <p className="text-gray-500 text-xl leading-relaxed max-w-2xl">
            Every service we offer is delivered under a fiduciary standard. We are legally obligated to act in your interest — not ours. No commissions. No product sales. No conflicts.
          </p>
        </div>
      </section>

      {/* Fee-only callout */}
      <section className="bg-[#F8FAFC] py-10 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[#1B3A5C] mb-2" style={{fontFamily: "Georgia, serif"}}>Fee-Only. Always.</h2>
              <p className="text-gray-500 leading-relaxed">
                We charge a transparent advisory fee based on assets under management. We accept no commissions, referral fees, or compensation from any product provider. What you pay us is what we earn — nothing else.
              </p>
            </div>
            <div className="flex gap-8 flex-shrink-0">
              {[
                { value: "AUM-based", label: "Fee structure" },
                { value: "0%", label: "Commission income" },
                { value: "100%", label: "Fiduciary, always" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-bold text-[#1B3A5C] mb-0.5">{s.value}</p>
                  <p className="text-gray-400 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          {services.map((s, i) => (
            <div key={s.name} className="border border-gray-100 rounded-lg overflow-hidden">
              <div className="bg-[#1B3A5C] px-8 py-5 flex items-center justify-between">
                <h2 className="font-bold text-white text-xl" style={{fontFamily: "Georgia, serif"}}>{s.name}</h2>
                <span className="text-blue-200 text-sm font-semibold">0{i + 1}</span>
              </div>
              <div className="p-8 grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <p className="text-gray-600 leading-relaxed mb-6">{s.detail}</p>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">What&rsquo;s Included</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {s.includes.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-px h-4 bg-[#1B3A5C] flex-shrink-0 mt-0.5" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Who It&rsquo;s For</p>
                  <ul className="space-y-2">
                    {s.forWhom.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-[#1B3A5C] font-bold flex-shrink-0">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-block mt-6 bg-[#1B3A5C] hover:bg-[#142D47] text-white font-semibold px-5 py-2.5 rounded text-sm transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fiduciary pledge */}
      <section className="py-16 bg-[#F8FAFC] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="border border-[#1B3A5C]/20 rounded-lg p-10">
            <p className="text-[#1B3A5C] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Our Fiduciary Pledge</p>
            <p className="text-[#111827] text-lg leading-relaxed" style={{fontFamily: "Georgia, serif"}}>
              &ldquo;We will always act in your best interest. We will disclose all conflicts of interest. We will provide advice based on your needs and goals — not on what pays us more. We will be transparent about our fees and how we are compensated.&rdquo;
            </p>
            <p className="text-gray-400 text-sm mt-4">— Hargrove Wealth Advisors, LLC · Registered Investment Advisor</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#111827] mb-6" style={{fontFamily: "Georgia, serif"}}>Ready to get started?</h2>
          <p className="text-gray-500 mb-8">Schedule a no-obligation introductory call to discuss your situation and whether we&rsquo;re the right fit.</p>
          <Link href="/contact" className="inline-block bg-[#1B3A5C] hover:bg-[#142D47] text-white font-semibold px-10 py-4 rounded transition-colors">
            Schedule a Consultation
          </Link>
          <p className="text-gray-400 text-xs mt-4">No commitment · No sales pitch · 30 minutes</p>
        </div>
      </section>
    </div>
  );
}
