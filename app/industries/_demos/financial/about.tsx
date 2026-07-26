import Link from "next/link";

const advisors = [
  {
    name: "David Hartwell, CFA®, CFP®",
    title: "Founding Partner",
    bio: "David founded Meridian in 2004 after 12 years at Merrill Lynch, where he managed high-net-worth client portfolios. He left to become fee-only because he believed the commission-based model was fundamentally misaligned with client interests. He holds both the CFA® and CFP® designations and serves on the board of the local NAPFA chapter.",
    creds: ["CFA® — CFA Institute","CFP® — CFP Board","NAPFA Member","20+ years in practice"],
  },
  {
    name: "Rachel Kim, CFP®, CDFA®",
    title: "Partner, Financial Planning",
    bio: "Rachel leads comprehensive financial planning at Meridian with a focus on women in transition — divorce, widowhood, career change, and retirement. She holds the CFP® and Certified Divorce Financial Analyst® designations and is a frequent speaker at Florida Bar continuing education events.",
    creds: ["CFP® — CFP Board","CDFA® — IDFA","Specializes in divorce financial planning","Speaker — Florida Bar CLE"],
  },
  {
    name: "Marcus Webb, CFA®",
    title: "Director of Investments",
    bio: "Marcus oversees portfolio construction, manager research, and investment policy for all Meridian client accounts. He has an academic background in behavioral finance and applies those insights to client communication during market volatility. He holds the CFA® designation and an MBA from Vanderbilt.",
    creds: ["CFA® — CFA Institute","MBA — Vanderbilt Owen","Former institutional equity research","Behavioral finance specialist"],
  },
];

const affiliations = ["NAPFA — National Association of Personal Financial Advisors","FPA — Financial Planning Association","CFA Society of Florida","CDFA® — Institute for Divorce Financial Analysts","Schwab Advisor Services","Fidelity Institutional"];

export default function FinancialAbout() {
  return (
    <div className="bg-white font-sans">
      <nav className="border-b border-gray-100 sticky top-0 z-50 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <Link href="home" className="font-bold text-[#1B2B4B] text-lg tracking-tight">Meridian<span className="font-light text-gray-400"> Wealth</span></Link>
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-500">
            <Link href="services" className="hover:text-[#1B2B4B]">Services</Link>
            <Link href="wealth-management" className="hover:text-[#1B2B4B]">Wealth Management</Link>
            <Link href="retirement-planning" className="hover:text-[#1B2B4B]">Retirement</Link>
            <Link href="about" className="text-[#1B2B4B]">About</Link>
            <Link href="contact" className="bg-[#1B2B4B] text-white px-5 py-2.5 hover:bg-[#243a63] transition-colors">Schedule a Call</Link>
          </div>
        </div>
      </nav>

      {/* Firm story */}
      <section className="py-20 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-5">About Meridian Wealth</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1B2B4B] leading-tight mb-8">Founded on the Belief That Financial Advice Should Not Come with a Hidden Agenda</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <p className="text-gray-500 leading-relaxed">Meridian was founded in 2004 by David Hartwell after a decade at one of the largest wirehouses in the country. He saw firsthand how commission-based compensation distorted advice — not through malice, but through structural misalignment. When a broker earns more by recommending one product over another, objectivity is compromised, regardless of intent.</p>
            <p className="text-gray-500 leading-relaxed">He started Meridian as a fee-only, fiduciary practice. No commissions. No revenue sharing. No proprietary products. Just advice, compensated only by the clients we serve. In twenty years, that has not changed. We believe it is the only model that can truly put a client&apos;s interest first.</p>
          </div>
        </div>
      </section>

      {/* Advisor profiles — text forward, alternating */}
      <section className="divide-y divide-gray-100">
        {advisors.map((a, i) => (
          <div key={a.name} className={`py-16 px-6 ${i % 2 === 1 ? "bg-gray-50" : "bg-white"}`}>
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {i % 2 === 0 ? (
                <>
                  <div className="bg-gray-200 aspect-[3/4] rounded flex items-center justify-center text-gray-400 text-sm">{a.name.split(",")[0]} Photo</div>
                  <div className="lg:col-span-2">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{a.title}</p>
                    <h2 className="text-2xl font-bold text-[#1B2B4B] mb-4">{a.name}</h2>
                    <p className="text-gray-500 leading-relaxed mb-6">{a.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {a.creds.map((c) => (
                        <span key={c} className="border border-gray-200 text-gray-600 text-xs font-semibold px-3 py-1.5">{c}</span>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="lg:col-span-2 order-last lg:order-first">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{a.title}</p>
                    <h2 className="text-2xl font-bold text-[#1B2B4B] mb-4">{a.name}</h2>
                    <p className="text-gray-500 leading-relaxed mb-6">{a.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {a.creds.map((c) => (
                        <span key={c} className="border border-gray-200 text-gray-600 text-xs font-semibold px-3 py-1.5">{c}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-200 aspect-[3/4] rounded flex items-center justify-center text-gray-400 text-sm">{a.name.split(",")[0]} Photo</div>
                </>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Professional affiliations */}
      <section className="py-16 px-6 border-t border-gray-100 bg-[#1B2B4B]">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">Professional Affiliations & Custodians</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {affiliations.map((a) => (
              <div key={a} className="border border-white/10 px-4 py-3 text-white/70 text-sm">{a}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory disclosure */}
      <section className="py-10 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-gray-400 leading-relaxed">Meridian Wealth Advisors LLC is a registered investment adviser with the SEC. Registration does not imply a certain level of skill or training. A copy of our current ADV Parts 1, 2A, and 2B is available upon request or at the SEC&apos;s IAPD database. Past performance is not indicative of future results.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold text-[#1B2B4B] mb-4">Ready to Meet the Team?</h2>
        <Link href="contact" className="inline-block bg-[#1B2B4B] text-white px-10 py-4 font-semibold hover:bg-[#243a63] transition-colors">Schedule a Complimentary Call</Link>
      </section>
    </div>
  );
}
