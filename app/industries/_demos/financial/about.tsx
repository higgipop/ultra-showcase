// elevationwp.com: text-forward, advisor profiles, firm story, professional affiliations
import Link from "next/link";

const advisors = [
  {
    name: "Margaret O'Sullivan, CFP®, CFA",
    init: "O",
    years: "22 years at firm",
    creds: "CFP® · CFA Charterholder · CPA",
    spec: "Comprehensive wealth management, estate planning coordination, business owner exit strategies",
    philosophy: "My role is to give you clarity — about where you are, where you want to go, and what it will take to get there. Everything else follows from that.",
  },
  {
    name: "David Keane, CFP®",
    init: "K",
    years: "14 years at firm",
    creds: "CFP® · M.S. Financial Planning",
    spec: "Retirement income planning, Social Security optimization, Medicare planning",
    philosophy: "The clients I work with most are people who are close to retirement and realize the transition is more complex than they anticipated. That is exactly where I want to be.",
  },
  {
    name: "Rachel Torres, CFP®, CPA",
    init: "T",
    years: "9 years at firm",
    creds: "CFP® · CPA · Enrolled Agent",
    spec: "Tax-integrated financial planning, Roth conversion strategies, charitable giving",
    philosophy: "The tax side of financial planning is where the most value is hiding. Most people are leaving money on the table because their advisor and CPA don't talk to each other.",
  },
];

const affiliations = [
  { name: "NAPFA", full: "National Association of Personal Financial Advisors", note: "Fee-only membership" },
  { name: "FPA", full: "Financial Planning Association", note: "National chapter member" },
  { name: "CFP Board", full: "Certified Financial Planner Board of Standards", note: "3 certificants" },
  { name: "CFA Institute", full: "Chartered Financial Analyst Institute", note: "1 charterholder" },
];

export default function FinancialAbout() {
  return (
    <div className="bg-white font-sans">
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="font-bold text-[#1B3060] text-lg">ELEVATION<span className="font-light text-gray-400"> WEALTH</span></div>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-600">
            <Link href="home" className="hover:text-[#1B3060]">Home</Link>
            <Link href="services" className="hover:text-[#1B3060]">Services</Link>
            <Link href="about" className="text-[#1B3060] border-b border-[#1B3060]">Our Advisors</Link>
            <Link href="contact" className="hover:text-[#1B3060]">Contact</Link>
          </div>
          <Link href="contact" className="bg-[#1B3060] text-white font-semibold px-5 py-2.5 rounded text-sm hover:bg-[#152548] transition-colors">Let&apos;s Get Started</Link>
        </div>
      </nav>

      <div className="py-14 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1B3060] mb-4">Our Advisors</h1>
          <p className="text-gray-600 text-lg leading-relaxed">Independent fee-only advisors with decades of experience and credentials you can verify.</p>
        </div>
      </div>

      {/* Advisor profiles */}
      <section className="py-14 px-6">
        <div className="max-w-4xl mx-auto space-y-14">
          {advisors.map((a, i) => (
            <div key={a.name} className={`grid lg:grid-cols-[160px_1fr] gap-10 ${i > 0 ? "border-t border-gray-100 pt-14" : ""}`}>
              <div className="text-center lg:text-left">
                <div className="w-28 h-28 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-[#1B3060] font-black text-4xl mx-auto lg:mx-0 mb-4">
                  {a.init}
                </div>
                <Link href="contact" className="block bg-[#1B3060] hover:bg-[#152548] text-white font-semibold py-2.5 rounded text-sm text-center transition-colors">
                  Schedule Intro Call
                </Link>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#1B3060] mb-1">{a.name}</h2>
                <p className="text-gray-500 text-sm font-semibold mb-1">{a.creds}</p>
                <p className="text-gray-400 text-xs mb-5">{a.years}</p>
                <div className="grid sm:grid-cols-2 gap-4 mb-5">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-xs text-gray-400 mb-1">Specialties</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{a.spec}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-xs text-gray-400 mb-1">Investment Philosophy</p>
                    <blockquote className="text-gray-600 text-sm italic leading-relaxed">&ldquo;{a.philosophy}&rdquo;</blockquote>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Firm story */}
      <section className="py-14 bg-gray-50 px-6 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1B3060] mb-5">Our Firm</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Elevation Wealth Advisors was founded in 2001 as an independent Registered Investment Adviser. From day one, we operated as a fee-only, fiduciary firm — before NAPFA membership became common, and before &ldquo;fiduciary&rdquo; became a marketing term.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. We remain independent — no private equity ownership, no bank affiliation, no broker-dealer relationship. Our only obligation is to our clients. That independence is not incidental; it is the structural foundation of everything we do.
          </p>
        </div>
      </section>

      {/* Professional affiliations */}
      <section className="py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1B3060] mb-8">Professional Affiliations</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {affiliations.map((a) => (
              <div key={a.name} className="border border-gray-100 rounded-xl p-5">
                <div className="flex items-start justify-between mb-1">
                  <p className="font-bold text-[#1B3060]">{a.name}</p>
                  <span className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded">{a.note}</span>
                </div>
                <p className="text-gray-500 text-sm">{a.full}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office */}
      <section className="py-12 bg-gray-50 border-y border-gray-100 px-6">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-6">
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Office</p>
            <p className="text-gray-700 text-sm">4200 West Cypress Street<br />Suite 900<br />Tampa, FL 33607</p>
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Phone</p>
            <a href="tel:8135550100" className="text-[#1B3060] font-semibold hover:underline">(813) 555-0100</a>
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Office Hours</p>
            <p className="text-gray-700 text-sm">Monday – Friday<br />8:00 am – 5:00 pm</p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white text-center px-6">
        <h2 className="text-2xl font-bold text-[#1B3060] mb-5">Schedule a 30-minute introductory call.</h2>
        <Link href="contact" className="inline-block bg-[#1B3060] hover:bg-[#152548] text-white font-semibold px-10 py-4 rounded transition-colors">Let&apos;s Get Started</Link>
      </section>
    </div>
  );
}
