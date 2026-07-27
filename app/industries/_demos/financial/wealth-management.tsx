import Link from "next/link";

const process = [
  { num: "01", title: "Discovery Meeting", desc: "A 60-minute meeting — in-person or virtual — to understand your full financial picture, goals, and concerns. No products, no pitch." },
  { num: "02", title: "Financial Analysis", desc: "We analyze your current investments, tax situation, cash flow, insurance coverage, and estate documents before making any recommendations." },
  { num: "03", title: "Financial Plan Delivery", desc: "We present a written financial plan with specific action items, investment recommendations, and priority order — explained in plain language." },
  { num: "04", title: "Implementation & Ongoing Advisory", desc: "We implement the plan together. Then we meet quarterly to review progress, adjust for life changes, and keep your plan current." },
];

const faqs = [
  { q: "What is your investment philosophy?", a: "We believe in evidence-based investing — broadly diversified portfolios using low-cost index funds and factor-tilted ETFs. We do not time the market or chase performance. We rebalance systematically and harvest tax losses opportunistically." },
  { q: "Do you have a minimum account size?", a: "Our investment management minimum is $500,000 in investable assets. Comprehensive financial planning relationships without investment management are considered for clients with at least $250,000 in investable assets." },
  { q: "How are you different from a robo-advisor?", a: "Robo-advisors manage a portfolio. We manage your entire financial life — tax planning, retirement income, estate coordination, insurance, and more. A robo-advisor will not call you when the market drops and explain why your plan is still on track." },
  { q: "Do you work with clients outside of Florida?", a: "Yes. We are registered to provide investment advisory services in multiple states. Most of our out-of-state client relationships are conducted via video conference." },
];

export default function WealthManagement() {
  return (
    <div className="bg-white font-sans">
      <nav className="border-b border-gray-100 sticky top-0 z-50 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <Link href="home" className="font-bold text-[#1B2B4B] text-lg tracking-tight">Meridian<span className="font-light text-gray-400"> Wealth</span></Link>
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-500">
            <Link href="services" className="hover:text-[#1B2B4B]">Services</Link>
            <Link href="wealth-management" className="text-[#1B2B4B]">Wealth Management</Link>
            <Link href="retirement-planning" className="hover:text-[#1B2B4B]">Retirement</Link>
            <Link href="about" className="hover:text-[#1B2B4B]">About</Link>
            <Link href="contact" className="bg-[#1B2B4B] text-white px-5 py-2.5 hover:bg-[#243a63] transition-colors">Schedule a Call</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-5">Wealth Management</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1B2B4B] leading-tight mb-6">Your Portfolio Is One Part of Your Financial Plan</h1>
            <p className="text-gray-500 text-lg leading-relaxed">Most advisors start and end with your investment account. We start with your goals — then build an investment strategy designed to support them.</p>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-video">
            <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80&auto=format&fit=crop" alt="Investment charts" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* What's included — numbered list */}
      <section className="py-20 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-10">What Wealth Management Includes</p>
          <div className="space-y-8">
            {[
              ["Portfolio Construction","Globally diversified portfolio using low-cost index funds and factor-tilted ETFs. Customized to your risk tolerance, time horizon, tax situation, and goals."],
              ["Tax-Aware Investing","Asset location (which accounts hold which assets), tax-loss harvesting, Roth conversion analysis, and capital gains management."],
              ["Rebalancing","Systematic rebalancing to your target allocation. We rebalance on drift thresholds — not arbitrary time intervals."],
              ["Performance Reporting","Quarterly reports comparing your performance to a relevant benchmark, with context about what drove returns."],
              ["Financial Planning Integration","Your investment strategy is never managed in isolation. It is integrated with your tax plan, retirement income plan, and estate plan."],
              ["Direct Access","You have our direct phone number and email. When the market drops 20% and you want to talk, we pick up."],
            ].map(([title, desc], i) => (
              <div key={title as string} className="grid grid-cols-[auto_1fr] gap-6 border-b border-gray-100 pb-8 last:border-0 last:pb-0">
                <span className="text-4xl font-bold text-gray-100 leading-none">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-bold text-[#1B2B4B] text-lg mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-step process */}
      <section className="py-20 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-10">How We Work</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p) => (
              <div key={p.num} className="border-t-2 border-[#1B2B4B] pt-6">
                <p className="font-bold text-gray-200 text-4xl mb-4">{p.num}</p>
                <h3 className="font-bold text-[#1B2B4B] mb-3">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-10">Frequently Asked Questions</p>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-gray-100 pb-8 last:border-0 last:pb-0">
                <h3 className="font-bold text-[#1B2B4B] mb-3">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-100 py-16 px-6 text-center">
        <h2 className="text-2xl font-bold text-[#1B2B4B] mb-4">See If We&apos;re the Right Fit</h2>
        <p className="text-gray-500 text-sm mb-8">30-minute complimentary call. No obligation, no pitch.</p>
        <Link href="contact" className="inline-block bg-[#1B2B4B] text-white px-10 py-4 font-semibold hover:bg-[#243a63] transition-colors">Schedule a Call</Link>
      </section>
    </div>
  );
}
