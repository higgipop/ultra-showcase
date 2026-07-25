// elevationwp.com: white, text-forward wealth management detail, numbered list, 4-step process, FAQ
import Link from "next/link";

const faqs = [
  { q: "Is there a minimum investment to work with you?", a: "Our minimum for Comprehensive Wealth Management is $500,000 in investable assets. For Personalized Investment Management only, the minimum is $250,000. We make exceptions for younger clients with strong income trajectories." },
  { q: "How are you compensated?", a: "We are fee-only. We charge an annual advisory fee as a percentage of assets under management, ranging from 0.75% to 1.0% depending on portfolio size. We do not receive commissions, referral fees, or any other third-party compensation." },
  { q: "How often will we meet?", a: "Comprehensive Wealth Management clients meet with their advisor at least annually for a full financial plan review, plus quarterly check-ins via phone or video. Additional meetings are available as needed at no extra charge." },
  { q: "How are my investments managed?", a: "We build low-cost, evidence-based portfolios using institutional index funds and ETFs. For eligible clients, we offer direct indexing through our Schwab Advisor Services custodian. Portfolios are rebalanced tax-efficiently throughout the year." },
  { q: "What happens during my annual review?", a: "We revisit your financial plan, update projections, review tax situation and opportunities, assess insurance coverage, review estate documents, and recalibrate your investment policy if your goals or risk tolerance have changed." },
  { q: "How do I get started?", a: "Schedule a 30-minute introductory call through our contact page. We discuss your situation briefly, answer your questions, and decide together whether there's a fit — no obligation, no sales pressure." },
];

export default function FinancialWealthManagement() {
  return (
    <div className="bg-white font-sans">
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="font-bold text-[#1B3060] text-lg">ELEVATION<span className="font-light text-gray-400"> WEALTH</span></div>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-600">
            <Link href="home" className="hover:text-[#1B3060]">Home</Link>
            <Link href="services" className="hover:text-[#1B3060]">Services</Link>
            <Link href="wealth-management" className="text-[#1B3060] border-b border-[#1B3060]">Wealth Mgmt</Link>
            <Link href="retirement-planning" className="hover:text-[#1B3060]">Retirement</Link>
            <Link href="about" className="hover:text-[#1B3060]">About</Link>
          </div>
          <Link href="contact" className="bg-[#1B3060] text-white font-semibold px-5 py-2.5 rounded text-sm hover:bg-[#152548] transition-colors">Let&apos;s Get Started</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-14">
        <nav className="text-xs text-gray-400 mb-5">
          <Link href="home" className="hover:text-[#1B3060]">Home</Link> / <Link href="services" className="hover:text-[#1B3060]">Services</Link> / <span className="text-gray-700">Comprehensive Wealth Management</span>
        </nav>

        <h1 className="text-4xl font-bold text-[#1B3060] mb-6">Comprehensive Wealth Management</h1>

        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          Our flagship service for clients with complex financial lives — coordinating investment management, tax strategy, estate planning, and financial planning into a single, integrated relationship. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>

        <h2 className="text-2xl font-bold text-[#1B3060] mb-5">What We Do</h2>
        <ol className="space-y-4 mb-12">
          {[
            "Develop a written Investment Policy Statement aligned to your goals and risk tolerance",
            "Build and manage a low-cost, tax-efficient portfolio using institutional index funds and ETFs",
            "Coordinate tax strategy with your CPA — including loss harvesting, Roth conversions, and charitable giving",
            "Review and update your financial plan annually, incorporating life changes and market shifts",
            "Analyze and optimize your estate plan, beneficiary designations, and legacy goals",
            "Evaluate insurance coverage (life, disability, long-term care) against your risk exposure",
          ].map((item, i) => (
            <li key={i} className="flex gap-4">
              <span className="font-black text-[#1B3060] text-lg w-6 flex-shrink-0">{i + 1}.</span>
              <span className="text-gray-700 leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>

        <h2 className="text-2xl font-bold text-[#1B3060] mb-5">Who It&apos;s For</h2>
        <div className="grid sm:grid-cols-2 gap-3 mb-12">
          {["Pre-retirees within 10 years of retirement", "Business owners planning an exit or succession", "Inheritors managing a significant windfall", "Senior executives with equity compensation", "Widows/widowers taking control of household finances", "Families managing generational wealth transfer"].map((item) => (
            <div key={item} className="flex items-start gap-2 text-gray-700 border border-gray-100 rounded-xl px-4 py-3 text-sm">
              <span className="text-[#1B3060] font-bold mt-0.5 flex-shrink-0">—</span> {item}
            </div>
          ))}
        </div>

        {/* Process */}
        <h2 className="text-2xl font-bold text-[#1B3060] mb-6">Our Process</h2>
        <div className="grid sm:grid-cols-4 gap-5 mb-12">
          {[
            { step: "Discovery", body: "We learn everything about your financial life — assets, liabilities, income, goals, risk tolerance, and concerns." },
            { step: "Financial Plan", body: "We build a comprehensive written plan addressing investments, taxes, insurance, estate, and retirement income." },
            { step: "Implementation", body: "We build your portfolio, coordinate with your CPA and attorney, and put the plan into motion." },
            { step: "Annual Review", body: "We revisit your plan every year — adjusting for life changes, tax law shifts, and evolving goals." },
          ].map((s, i) => (
            <div key={s.step} className="border border-gray-100 rounded-xl p-5">
              <div className="text-2xl font-black text-[#1B3060] mb-3">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm">{s.step}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-[#1B3060] mb-7">Frequently Asked Questions</h2>
        <div className="space-y-7 mb-12">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-b border-gray-100 pb-7 last:border-0">
              <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1B3060] mb-3">Ready to get started?</h2>
          <p className="text-gray-500 mb-6">No obligation. No sales pitch. A 30-minute conversation to see if we&apos;re a fit.</p>
          <Link href="contact" className="inline-block bg-[#1B3060] hover:bg-[#152548] text-white font-semibold px-10 py-4 rounded transition-colors">Let&apos;s Get Started</Link>
        </div>
      </div>
    </div>
  );
}
