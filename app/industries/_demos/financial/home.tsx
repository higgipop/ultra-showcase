// elevationwp.com: pure white, PURELY TEXT hero (no image, no card), flat navy buttons, partner logos, news grid
import Link from "next/link";

const newsArticles = [
  { date: "January 15, 2025", cat: "Planning", title: "Social Security Optimization: When Should You Claim?", excerpt: "The decision of when to claim Social Security benefits can significantly impact your lifetime income. Here&apos;s how to think through the tradeoffs." },
  { date: "December 4, 2024", cat: "Investing", title: "Year-End Tax Moves Every Investor Should Consider", excerpt: "Tax-loss harvesting, Roth conversions, and charitable giving strategies to make before December 31." },
  { date: "November 18, 2024", cat: "Retirement", title: "The Sequence of Returns Risk — Why It Matters More Than Average Returns", excerpt: "How market volatility in early retirement years can permanently damage your portfolio, and what to do about it." },
  { date: "October 2, 2024", cat: "Estate Planning", title: "Why Your Beneficiary Designations Matter More Than Your Will", excerpt: "Retirement accounts, life insurance, and other assets pass outside of probate — and outside the control of your will." },
];

const partners = ["Charles Schwab", "TD Ameritrade", "Fidelity Institutional", "CFA Institute", "CFP Board", "Envestnet"];

export default function FinancialHome() {
  return (
    <div className="bg-white font-sans">
      {/* Nav */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="font-bold text-[#1B3060] text-lg tracking-tight">ELEVATION<span className="font-light text-gray-400"> WEALTH</span></div>
          <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-gray-600">
            <Link href="about" className="hover:text-[#1B3060]">About Us</Link>
            <Link href="services" className="hover:text-[#1B3060]">Who We Serve</Link>
            <Link href="services" className="hover:text-[#1B3060]">What We Do</Link>
            <Link href="about" className="hover:text-[#1B3060]">News &amp; Insights</Link>
            <Link href="contact" className="hover:text-[#1B3060]">Contact</Link>
          </div>
          <Link href="contact" className="bg-[#1B3060] hover:bg-[#152548] text-white font-semibold px-5 py-2.5 rounded text-sm transition-colors">
            Let&apos;s Get Started
          </Link>
        </div>
      </nav>

      {/* Hero — PURELY TEXT, white bg, no images, no cards */}
      <section className="py-20 lg:py-28 px-6 bg-white max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#1B3060] leading-tight mb-5">
          Expertise and guidance for every stage of your life.
        </h1>
        <p className="text-xl text-gray-500 mb-5">Shouldn&apos;t the financial advice you receive be as well?</p>
        <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-3xl">
          Whether you&apos;re planning for retirement at 50, funding a child&apos;s education, or managing a charitable foundation — we provide personalized, fee-only financial guidance built around your life, not a product quota. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link href="contact" className="inline-block bg-[#1B3060] hover:bg-[#152548] text-white font-semibold px-8 py-4 rounded transition-colors text-lg">
          Let&apos;s Get Started
        </Link>
      </section>

      {/* Stats row — light gray bg below hero */}
      <section className="bg-gray-50 border-y border-gray-100 py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { value: "25+", label: "Years in Business" },
            { value: "$600M+", label: "Assets Under Management" },
            { value: "99%", label: "Client Retention Rate" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-[#1B3060] mb-1">{s.value}</p>
              <p className="text-gray-500 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service cards — minimal, text only */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: "Comprehensive Wealth Management", desc: "Integrated financial planning encompassing investment management, tax strategy, estate planning, and risk management — coordinated into a single, coherent plan.", href: "wealth-management" },
              { title: "Personalized Investment Management", desc: "Direct indexing, evidence-based portfolio construction, and tax-loss harvesting for clients who want their portfolio to reflect their values and tax situation.", href: "wealth-management" },
              { title: "Retirement Income Planning", desc: "Social Security optimization, withdrawal sequencing, Medicare planning, and income floor strategies for clients approaching or in retirement.", href: "retirement-planning" },
              { title: "Tax & Estate Coordination", desc: "We coordinate with your CPA and estate attorney to ensure your financial plan, tax strategy, and legacy goals are aligned — not siloed.", href: "services" },
            ].map((card) => (
              <div key={card.title} className="border border-gray-100 rounded-2xl p-7 hover:border-[#1B3060]/20 hover:shadow-sm transition-all">
                <h3 className="font-bold text-[#1B3060] text-lg mb-3">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{card.desc}</p>
                <Link href={card.href} className="text-sm font-semibold text-[#1B3060] hover:underline">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News grid */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-2xl font-bold text-[#1B3060]">News &amp; Insights</h2>
            <Link href="about" className="text-sm font-semibold text-[#1B3060] hover:underline">All Articles →</Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {newsArticles.map((a) => (
              <div key={a.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-sm transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-[#1B3060] bg-blue-50 px-2.5 py-1 rounded">{a.cat}</span>
                  <span className="text-xs text-gray-400">{a.date}</span>
                </div>
                <h3 className="font-bold text-[#1B3060] mb-2 leading-snug">{a.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner logos — text only, gray */}
      <section className="py-12 bg-white border-y border-gray-100 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs text-gray-400 font-semibold uppercase tracking-widest mb-8">Custodians &amp; Professional Affiliations</p>
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((p) => (
              <span key={p} className="text-gray-400 font-semibold text-sm">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-bold text-[#1B3060] mb-3">Financial Planning Insights, Monthly</h2>
          <p className="text-gray-500 text-sm mb-6">No sales pitch. Just practical guidance on planning, investing, and tax strategy.</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Your email address" className="flex-1 border border-gray-200 rounded px-4 py-3 text-sm focus:ring-2 focus:ring-[#1B3060] focus:outline-none" />
            <button className="bg-[#1B3060] hover:bg-[#152548] text-white font-semibold px-5 py-3 rounded text-sm transition-colors">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}
