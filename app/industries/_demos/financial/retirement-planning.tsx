// elevationwp.com: white, retirement income planning detail, SS optimization, FAQ
import Link from "next/link";

const faqs = [
  { q: "When should I claim Social Security?", a: "There is no universal answer — the optimal claiming age depends on your health, other income sources, spousal situation, and longevity assumptions. For most clients, delaying to age 70 maximizes lifetime benefits if health permits. We model multiple scenarios to find your optimal strategy." },
  { q: "What is withdrawal sequencing?", a: "The order in which you draw from taxable, tax-deferred (IRA/401k), and tax-free (Roth) accounts significantly impacts your lifetime tax burden. A proper sequencing strategy can save tens of thousands of dollars over a 25-year retirement." },
  { q: "How do I enroll in Medicare?", a: "Medicare enrollment begins at age 65. Missing your Initial Enrollment Period can result in permanent premium penalties. We guide clients through Part A, Part B, Part D, and Medigap or Medicare Advantage decisions — coordinated with your overall retirement income plan." },
  { q: "What is an income floor?", a: "An income floor is guaranteed income sufficient to cover your essential monthly expenses — Social Security, pension, annuity income. Building a reliable floor allows you to take more investment risk with your discretionary savings, improving long-term outcomes." },
  { q: "What is sequence-of-returns risk?", a: "A major market decline in the first few years of retirement can permanently impair your portfolio, even if markets recover. We build portfolios and withdrawal plans specifically designed to survive early retirement downturns without forcing you to sell assets at depressed prices." },
  { q: "What happens to my RMDs?", a: "Required Minimum Distributions from IRAs and 401(k)s begin at age 73 (under current law). We plan RMD amounts years in advance to minimize tax impact — often using Roth conversions in low-income years before age 73 to reduce future RMDs." },
];

export default function FinancialRetirementPlanning() {
  return (
    <div className="bg-white font-sans">
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="font-bold text-[#1B3060] text-lg">ELEVATION<span className="font-light text-gray-400"> WEALTH</span></div>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-600">
            <Link href="home" className="hover:text-[#1B3060]">Home</Link>
            <Link href="services" className="hover:text-[#1B3060]">Services</Link>
            <Link href="wealth-management" className="hover:text-[#1B3060]">Wealth Mgmt</Link>
            <Link href="retirement-planning" className="text-[#1B3060] border-b border-[#1B3060]">Retirement</Link>
            <Link href="about" className="hover:text-[#1B3060]">About</Link>
          </div>
          <Link href="contact" className="bg-[#1B3060] text-white font-semibold px-5 py-2.5 rounded text-sm hover:bg-[#152548] transition-colors">Let&apos;s Get Started</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-14">
        <nav className="text-xs text-gray-400 mb-5">
          <Link href="home" className="hover:text-[#1B3060]">Home</Link> / <Link href="services" className="hover:text-[#1B3060]">Services</Link> / <span className="text-gray-700">Retirement Income Planning</span>
        </nav>

        <h1 className="text-4xl font-bold text-[#1B3060] mb-6">Retirement Income Planning</h1>

        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          The transition from accumulation to distribution is one of the most consequential financial events of your life. We help clients within five years of retirement — and those already retired — build structured income plans that sustain their lifestyle and minimize taxes across a 25–35 year retirement. Lorem ipsum dolor sit amet.
        </p>

        <h2 className="text-2xl font-bold text-[#1B3060] mb-5">What We Address</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {[
            { title: "Social Security Optimization", body: "Claiming age analysis for single filers, married couples, and divorced spouses. Spousal benefit coordination. Break-even analysis under longevity scenarios." },
            { title: "Medicare Enrollment & Planning", body: "Part A/B enrollment timing, Medigap vs. Medicare Advantage comparison, Part D drug coverage, IRMAA surcharge planning." },
            { title: "Withdrawal Sequencing", body: "Tax-efficient drawdown order across taxable, traditional, and Roth accounts. Coordination with Social Security claiming strategy." },
            { title: "Income Floor Strategy", body: "Identifying guaranteed income sources, analyzing annuity options where appropriate, and ensuring essential expenses are covered regardless of market performance." },
            { title: "RMD Planning", body: "Projecting future Required Minimum Distributions, Roth conversion opportunities in pre-RMD years, and qualified charitable distribution strategies." },
            { title: "Sequence-of-Returns Management", body: "Cash buffer strategies, dynamic withdrawal rates, and portfolio construction to protect against early-retirement market downturns." },
          ].map((item) => (
            <div key={item.title} className="border border-gray-100 rounded-xl p-5">
              <h3 className="font-bold text-[#1B3060] mb-2 text-sm">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-[#1B3060] mb-6">Who This Service Is For</h2>
        <ul className="space-y-3 mb-12">
          {["Within 1–10 years of planned retirement date", "Recently retired and uncertain about withdrawal strategy", "Concerned about market volatility affecting retirement income", "Approaching age 65 and navigating Medicare for the first time", "Approaching age 73 and planning for Required Minimum Distributions", "Widowed or recently divorced, taking over household finances"].map((item) => (
            <li key={item} className="flex items-start gap-3 text-gray-700">
              <span className="text-[#1B3060] font-bold mt-0.5">—</span> {item}
            </li>
          ))}
        </ul>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-[#1B3060] mb-7">Retirement Planning FAQ</h2>
        <div className="space-y-7 mb-12">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-b border-gray-100 pb-7 last:border-0">
              <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-[#1B3060] mb-3">Approaching retirement? Let&apos;s build your income plan.</h2>
          <p className="text-gray-500 mb-6 text-sm">A 30-minute introductory conversation. No obligation.</p>
          <Link href="contact" className="inline-block bg-[#1B3060] hover:bg-[#152548] text-white font-semibold px-10 py-4 rounded transition-colors">Schedule a Consultation</Link>
        </div>
      </div>
    </div>
  );
}
