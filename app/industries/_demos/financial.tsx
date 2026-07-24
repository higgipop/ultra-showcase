// Design reference: elevationwp.com — navy/white, text-forward, no gradients, AUM stats, conservative credibility
import Link from "next/link";

const services = [
  { title: "Wealth Management", body: "Comprehensive investment management aligned to your goals, risk tolerance, and time horizon. No proprietary products — only strategies that serve your interests." },
  { title: "Retirement Planning", body: "Social Security optimization, withdrawal sequencing, and income floor strategies so your money outlasts your retirement." },
  { title: "Tax Planning", body: "Coordinated tax strategy across your investment accounts, business interests, and estate — not just April paperwork." },
  { title: "Estate & Legacy", body: "Trust structures, beneficiary coordination, and wealth transfer strategies that protect what you've built for the people you care about." },
];

const stats = [
  { value: "$600M+", label: "Assets Under Management" },
  { value: "25+", label: "Years of Service" },
  { value: "99%", label: "Client Retention Rate" },
  { value: "Fee-Only", label: "Fiduciary Standard" },
];

const team = [
  { name: "Robert Hargrove", cred: "CFP®, CFA", years: "22 yrs" },
  { name: "Patricia Kim", cred: "CFP®, CPA", years: "18 yrs" },
  { name: "James Whitfield", cred: "CFP®", years: "14 yrs" },
];

const partners = ["Charles Schwab", "TD Ameritrade", "Fidelity", "Envestnet", "Morningstar"];

export default function FinancialDemo() {
  return (
    <div className="bg-white font-sans">

      {/* Nav bar accent */}
      <div className="h-1 bg-[#1B3A5C]" />

      {/* Hero — text forward, no imagery */}
      <section className="bg-white pt-28 pb-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[#1B3A5C] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              Independent · Fee-Only · Fiduciary
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] leading-tight mb-8" style={{fontFamily: "Georgia, serif"}}>
              Expertise and guidance<br />for every stage of<br />your financial life.
            </h1>
            <p className="text-gray-500 text-xl leading-relaxed mb-10 max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. We are an independent, fee-only fiduciary advisory firm — meaning we are legally obligated to put your interests first, always.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact"
                className="bg-[#1B3A5C] hover:bg-[#142D47] text-white font-semibold px-8 py-4 rounded transition-colors text-center">
                Let&rsquo;s Get Started
              </Link>
              <Link href="/contact"
                className="border border-[#1B3A5C] text-[#1B3A5C] hover:bg-[#1B3A5C] hover:text-white font-semibold px-8 py-4 rounded transition-colors text-center">
                Download Our Brochure
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#1B3A5C] py-14">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-white mb-1">{s.value}</p>
              <p className="text-blue-200 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-[#1B3A5C] text-xs font-semibold tracking-[0.15em] uppercase mb-3">Our Services</p>
            <h2 className="text-3xl font-bold text-[#111827]" style={{fontFamily: "Georgia, serif"}}>
              A complete picture of your financial life.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
            {services.map((s) => (
              <div key={s.title} className="bg-white p-8 hover:bg-gray-50 transition-colors group">
                <div className="w-8 h-px bg-[#1B3A5C] mb-5" />
                <h3 className="font-bold text-[#111827] mb-3 group-hover:text-[#1B3A5C] transition-colors">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.body}</p>
                <Link href="/contact" className="text-xs font-semibold text-[#1B3A5C] uppercase tracking-wider hover:underline">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#1B3A5C] text-xs font-semibold tracking-[0.15em] uppercase mb-3">Our Advisors</p>
              <h2 className="text-3xl font-bold text-[#111827] mb-6" style={{fontFamily: "Georgia, serif"}}>
                Your advisors. Not a call center.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Every client works directly with a credentialed advisor — not a rotating associate or a robo-algorithm. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href="/contact" className="inline-block bg-[#1B3A5C] hover:bg-[#142D47] text-white font-semibold px-7 py-3 rounded transition-colors text-sm">
                Schedule a Consultation
              </Link>
            </div>
            <div className="space-y-4">
              {team.map((p) => (
                <div key={p.name} className="flex items-center gap-5 bg-white border border-gray-100 rounded-lg px-6 py-5">
                  <div className="w-12 h-12 rounded-full bg-[#1B3A5C] flex items-center justify-center text-white font-bold flex-shrink-0">
                    {p.name[0]}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-[#111827]">{p.name}</p>
                    <p className="text-[#1B3A5C] text-sm font-semibold">{p.cred}</p>
                  </div>
                  <span className="text-gray-400 text-xs">{p.years} exp.</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner logos */}
      <section className="py-12 bg-white border-t border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-gray-400 text-xs font-semibold tracking-[0.2em] uppercase mb-8">
            Custodians &amp; Partners
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {partners.map((p) => (
              <span key={p} className="text-gray-300 font-bold text-lg tracking-wide">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#1B3A5C] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Get Started</p>
          <h2 className="text-3xl font-bold text-[#111827] mb-6" style={{fontFamily: "Georgia, serif"}}>
            Ready to take control of your financial future?
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Schedule a no-obligation introductory call. We&rsquo;ll listen to where you are, where you want to go, and whether we&rsquo;re the right fit.
          </p>
          <Link href="/contact" className="inline-block bg-[#1B3A5C] hover:bg-[#142D47] text-white font-semibold px-10 py-4 rounded transition-colors text-lg">
            Schedule Your Consultation
          </Link>
          <p className="text-gray-400 text-xs mt-4">No commitment · No sales pitch · 30 minutes</p>
        </div>
      </section>
    </div>
  );
}
