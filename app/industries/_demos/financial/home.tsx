import Link from "next/link";

const partners = ["Charles Schwab","Fidelity Investments","TD Ameritrade","Envestnet","Orion Advisor","Morningstar"];

export default function FinancialHome() {
  return (
    <div className="bg-white font-sans">
      {/* Nav */}
      <nav className="border-b border-gray-100 sticky top-0 z-50 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <Link href="home" className="font-bold text-[#1B2B4B] text-lg tracking-tight">Meridian<span className="font-light text-gray-400"> Wealth</span></Link>
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-500">
            <Link href="services" className="hover:text-[#1B2B4B]">Services</Link>
            <Link href="wealth-management" className="hover:text-[#1B2B4B]">Wealth Management</Link>
            <Link href="retirement-planning" className="hover:text-[#1B2B4B]">Retirement</Link>
            <Link href="about" className="hover:text-[#1B2B4B]">About</Link>
            <Link href="contact" className="bg-[#1B2B4B] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#243a63] transition-colors">Schedule a Call</Link>
          </div>
        </div>
      </nav>

      {/* Text-only hero — no image, no sidebar card */}
      <section className="py-24 lg:py-36 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Fee-Only Fiduciary · Tampa Bay, FL · Est. 2004</p>
          <h1 className="text-5xl lg:text-6xl font-bold text-[#1B2B4B] leading-tight mb-8">Comprehensive Financial Planning<br />for What Actually Matters</h1>
          <p className="text-gray-500 text-xl leading-relaxed max-w-2xl mb-10">We help families and business owners build, protect, and transition wealth — with advice that is always, legally, in your best interest.</p>
          <div className="flex flex-wrap gap-6 items-center">
            <Link href="contact" className="bg-[#1B2B4B] text-white px-8 py-4 font-semibold hover:bg-[#243a63] transition-colors">Schedule a Complimentary Call</Link>
            <Link href="services" className="text-[#1B2B4B] font-semibold border-b border-[#1B2B4B] pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors text-sm">View Our Services →</Link>
          </div>
          <div className="mt-14 flex flex-wrap gap-8">
            {[["CFA®","Chartered Financial Analyst"],["CFP®","Certified Financial Planner"],["Fee-Only","No commissions, ever"],["Fiduciary","Always in your interest"]].map(([badge, desc]) => (
              <div key={badge}>
                <p className="font-bold text-[#1B2B4B] text-sm">{badge}</p>
                <p className="text-gray-400 text-xs mt-0.5">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview — text-forward */}
      <section className="py-20 px-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">What We Do</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-100">
            {[
              { title: "Wealth Management", link: "wealth-management", desc: "Portfolio construction, tax-aware investing, and asset allocation designed around your goals — not a model portfolio." },
              { title: "Retirement Planning", link: "retirement-planning", desc: "Income distribution strategy, Social Security optimization, Medicare coordination, and RMD management." },
              { title: "Tax Planning", link: "services", desc: "Roth conversions, tax-loss harvesting, charitable giving strategy, and qualified opportunity zone analysis." },
              { title: "Estate Planning Coordination", link: "services", desc: "We work alongside your estate attorney to align your financial plan with your estate documents and beneficiary designations." },
            ].map((s, i) => (
              <div key={s.title} className={`p-8 border-gray-100 ${i < 2 ? "border-b" : ""} ${i % 2 === 0 ? "border-r" : ""}`}>
                <h3 className="font-bold text-[#1B2B4B] text-lg mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                <Link href={s.link} className="text-[#1B2B4B] text-xs font-bold uppercase tracking-widest border-b border-gray-200 pb-0.5 hover:border-[#1B2B4B] transition-colors">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee-only callout */}
      <section className="py-16 px-6 bg-[#1B2B4B] border-b border-gray-200">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-3">What Does &ldquo;Fee-Only Fiduciary&rdquo; Actually Mean?</h2>
            <p className="text-gray-300 text-sm leading-relaxed">We are compensated only by our clients — never by commissions, fund companies, or product sales. As fiduciaries, we are legally obligated to put your interests ahead of our own. Most &ldquo;financial advisors&rdquo; are not held to this standard. We are.</p>
          </div>
          <div>
            <Link href="contact" className="block text-center border border-white/30 text-white font-semibold py-4 px-6 hover:bg-white hover:text-[#1B2B4B] transition-colors text-sm">Learn How We Charge</Link>
          </div>
        </div>
      </section>

      {/* Partner custodians */}
      <section className="py-16 px-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8 text-center">Custodial & Technology Partners</p>
          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((p) => (
              <div key={p} className="border border-gray-100 px-6 py-3 text-gray-500 font-semibold text-sm">{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats — text only */}
      <section className="py-20 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10">
          {[["$340M+","Assets Under Advisement"],["20+","Years in Practice"],["150","Client Relationships"],["4.9/5","Average Client Rating"]].map(([n, l]) => (
            <div key={l as string}>
              <p className="text-4xl font-bold text-[#1B2B4B] mb-2">{n}</p>
              <p className="text-gray-400 text-xs uppercase tracking-widest">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* News / Insights grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">Latest Insights</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { date: "July 2026", cat: "Retirement", title: "Roth Conversion Windows Are Narrowing — Here's What to Do Now" },
              { date: "June 2026", cat: "Tax Planning", title: "Mid-Year Tax Review: 7 Moves Worth Making Before December" },
              { date: "May 2026", cat: "Wealth Management", title: "How We Think About Portfolio Concentration and When to Act" },
            ].map((a) => (
              <div key={a.title} className="border-t border-gray-200 pt-5">
                <p className="text-xs text-gray-400 mb-1">{a.date} · {a.cat}</p>
                <h3 className="font-bold text-[#1B2B4B] leading-snug mb-4">{a.title}</h3>
                <Link href="contact" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-[#1B2B4B] transition-colors border-b border-gray-200 pb-0.5">Read More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-100 py-16 px-6 text-center">
        <h2 className="text-2xl font-bold text-[#1B2B4B] mb-4">Ready to Have a Real Conversation About Your Finances?</h2>
        <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">No sales pitch. Just a 30-minute call to understand your situation and whether we can help.</p>
        <Link href="contact" className="inline-block bg-[#1B2B4B] text-white px-10 py-4 font-semibold hover:bg-[#243a63] transition-colors">Schedule a Complimentary Call</Link>
      </section>
    </div>
  );
}
