import Link from "next/link";

const advisors = [
  {
    name: "Robert Hargrove",
    cred: "CFP®, CFA",
    title: "Founding Partner",
    years: "22 years in practice",
    edu: "University of Virginia · MBA, Darden School of Business",
    philosophy: "I believe that financial planning is not about beating the market — it is about aligning your resources with your values and goals. Most of what I do is help clients avoid the mistakes that destroy wealth: panic selling, over-concentration, tax inefficiency, and planning paralysis.",
    specialties: ["Retirement income planning", "Estate & trust coordination", "Executive compensation planning", "Tax-loss harvesting strategies"],
    clients: "Retirees and pre-retirees with $1M+ in investable assets. Business owners preparing for liquidity events.",
  },
  {
    name: "Patricia Kim",
    cred: "CFP®, CPA",
    title: "Partner",
    years: "18 years in practice",
    edu: "University of Florida · Master of Taxation, UF Levin College of Law",
    philosophy: "As both a CFP and a CPA, I see the whole picture — investment decisions and their tax consequences simultaneously. Most advisors hand you off to your CPA at year-end. I work alongside them all year to find opportunities that most clients never see.",
    specialties: ["Tax-efficient investing", "Roth conversion strategies", "Business owner financial planning", "Charitable giving vehicles"],
    clients: "High-income professionals and business owners who want investment and tax planning integrated — not siloed.",
  },
  {
    name: "James Whitfield",
    cred: "CFP®",
    title: "Senior Advisor",
    years: "14 years in practice",
    edu: "Florida State University · B.S. Finance",
    philosophy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. My planning philosophy centers on simplicity and clarity. Financial plans fail not because they are wrong, but because clients do not understand them well enough to follow through. I specialize in making complex situations feel manageable.",
    specialties: ["Young professional planning", "Student loan strategy", "First home purchase planning", "Life insurance & risk management"],
    clients: "Professionals in their 30s and 40s building wealth and establishing financial foundations for their families.",
  },
];

const affiliations = [
  { name: "NAPFA", full: "National Association of Personal Financial Advisors · Fee-only member network" },
  { name: "FPA", full: "Financial Planning Association · CFP professional members" },
  { name: "CFP Board", full: "Certified Financial Planner Board of Standards · Standards of conduct" },
  { name: "CFA Institute", full: "CFA Institute · Robert Hargrove, CFA charterholder" },
  { name: "AICPA", full: "American Institute of CPAs · Patricia Kim, CPA member" },
];

export default function FinancialAboutPage() {
  return (
    <div className="bg-white font-sans">
      <div className="h-1 bg-[#1B3A5C]" />

      {/* Hero */}
      <section className="bg-white pt-28 pb-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#1B3A5C] text-xs font-semibold tracking-[0.2em] uppercase mb-5">Our Team</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6" style={{fontFamily: "Georgia, serif"}}>
            The Advisors Behind Your Plan
          </h1>
          <p className="text-gray-500 text-xl leading-relaxed max-w-2xl">
            Every client at this firm works directly with a credentialed advisor — not an associate, not an algorithm. We are small by design.
          </p>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          {advisors.map((a) => (
            <div key={a.name} className="border border-gray-100 rounded-lg overflow-hidden">
              <div className="grid lg:grid-cols-3">
                <div className="bg-[#F8FAFC] p-8 flex flex-col items-center text-center border-b lg:border-b-0 lg:border-r border-gray-100">
                  <div className="w-20 h-20 rounded-full bg-[#1B3A5C] flex items-center justify-center text-white font-bold text-2xl mb-4">
                    {a.name[0]}
                  </div>
                  <h2 className="font-bold text-[#111827] text-lg mb-0.5">{a.name}</h2>
                  <p className="text-[#1B3A5C] text-sm font-semibold mb-1">{a.cred}</p>
                  <p className="text-gray-400 text-xs mb-1">{a.title}</p>
                  <p className="text-gray-400 text-xs mb-4">{a.years}</p>
                  <p className="text-gray-400 text-xs text-left w-full">{a.edu}</p>
                </div>
                <div className="lg:col-span-2 p-8">
                  <div className="mb-6">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Investment Philosophy</p>
                    <p className="text-gray-600 leading-relaxed italic text-sm">&ldquo;{a.philosophy}&rdquo;</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Specialties</p>
                      <ul className="space-y-1.5">
                        {a.specialties.map((s) => (
                          <li key={s} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-px h-3.5 bg-[#1B3A5C] flex-shrink-0" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Client Profile</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{a.clients}</p>
                    </div>
                  </div>
                  <Link href="/contact" className="inline-block mt-6 bg-[#1B3A5C] hover:bg-[#142D47] text-white font-semibold px-5 py-2.5 rounded text-sm transition-colors">
                    Schedule with {a.name.split(" ")[0]}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-[#F8FAFC] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#1B3A5C] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Our Firm Philosophy</p>
          <h2 className="text-3xl font-bold text-[#111827] mb-8" style={{fontFamily: "Georgia, serif"}}>
            Independent. Fee-only. Long-term.
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. We founded this firm as an independent RIA specifically to eliminate the conflicts that plague commission-based advisors. There is no home office pushing us to recommend products. There is no broker-dealer quota. There is no end-of-year commission spike that distorts our advice.</p>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We keep our client roster intentionally small — no advisor carries more than 60 households. This means every client relationship is active, every plan is current, and every advisor has the capacity to respond within hours, not days.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation. Long-term relationships are the product of consistent value. Our average client has been with us for 11 years. That is the metric we care about most.</p>
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#1B3A5C] text-xs font-semibold tracking-[0.2em] uppercase mb-8">Professional Affiliations</p>
          <div className="space-y-3">
            {affiliations.map((a) => (
              <div key={a.name} className="flex items-start gap-5 py-3 border-b border-gray-50">
                <span className="font-bold text-sm text-[#1B3A5C] w-20 flex-shrink-0">{a.name}</span>
                <span className="text-gray-500 text-sm">{a.full}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office */}
      <section className="py-14 bg-[#1B3A5C]">
        <div className="max-w-5xl mx-auto px-6 grid sm:grid-cols-2 gap-8">
          <div>
            <p className="text-blue-200 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Our Office</p>
            <p className="text-white font-semibold mb-1">Hargrove Wealth Advisors, LLC</p>
            <p className="text-white/60 text-sm">1234 Bayshore Blvd, Suite 500</p>
            <p className="text-white/60 text-sm">Tampa, FL 33606</p>
            <p className="text-white/60 text-sm mt-2">(813) 555-0100</p>
            <p className="text-white/60 text-sm">hello@hargrovewealth.com</p>
          </div>
          <div>
            <p className="text-blue-200 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Disclosures</p>
            <p className="text-white/50 text-xs leading-relaxed">
              Hargrove Wealth Advisors, LLC is a registered investment advisor. Registration does not imply a certain level of skill or training. Past performance is not indicative of future results. A copy of our ADV Part 2 is available upon request.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
