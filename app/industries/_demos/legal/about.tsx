import Link from "next/link";

const attorneys = [
  {
    name: "Ricardo Garcia, Esq.",
    title: "Founding Partner",
    creds: "J.D., University of Florida Levin College of Law · Florida Bar 1998 · Board Certified Civil Trial",
    bio: "25 years of trial experience. Rick founded Garcia Law after recovering his first $1M verdict at age 32. He has personally tried over 80 jury trials and has been recognized by Florida Super Lawyers every year since 2008.",
    awards: ["Florida Super Lawyers 2008–2024","Martindale-Hubbell AV Preeminent","Best Lawyers in America 2020–2024","Florida Bar Board Certified — Civil Trial"],
  },
  {
    name: "Elena Martinez, Esq.",
    title: "Partner — Personal Injury",
    creds: "J.D., Stetson University College of Law · Florida Bar 2005 · Bilingual (English/Spanish)",
    bio: "Elena leads our personal injury practice with a focus on catastrophic injury and wrongful death cases. She has recovered over $80M for injured clients throughout her career and is known for her relentless trial preparation.",
    awards: ["Florida Super Lawyers Rising Star 2010–2015","Super Lawyers 2016–2024","Florida Justice Association Member"],
  },
  {
    name: "David Kim, Esq.",
    title: "Partner — Business Litigation",
    creds: "J.D., University of Miami School of Law · Florida Bar 2007 · MBA, Rollins College",
    bio: "David's business background makes him uniquely effective in commercial disputes. Before law, he spent 5 years in finance — that perspective helps clients see litigation as a business decision, not just a legal fight.",
    awards: ["Best Lawyers in America — Business Litigation 2021–2024","Florida Bar Business Law Section"],
  },
];

const news = [
  { date: "May 2025", headline: "Garcia Law Secures $9.8M Wrongful Death Verdict for Hillsborough County Family", source: "Tampa Bay Business Journal" },
  { date: "March 2025", headline: "Ricardo Garcia Named to Florida Super Lawyers Hall of Fame", source: "Super Lawyers" },
  { date: "January 2025", headline: "Firm Expands Business Litigation Practice with New Partner", source: "Daily Business Review" },
  { date: "November 2024", headline: "$5.4M Settlement Reached in Defective Product Injury Case", source: "Florida Record" },
  { date: "August 2024", headline: "Garcia Law Receives Best of Tampa Bay Award for Legal Services", source: "Tampa Bay Times" },
  { date: "June 2024", headline: "Firm Donates $50K to Tampa Bay Legal Aid for Pro Bono Expansion", source: "Florida Bar News" },
];

export default function LegalAbout() {
  return (
    <div className="bg-white font-sans">
      <div className="bg-[#DC2626] text-white text-center text-sm py-2 font-bold">
        FREE CASE EVALUATION · No Fee Unless We Win · <a href="tel:8132617700" className="underline">(813) 261-7700</a>
      </div>
      <nav className="bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-white text-xl">GARCIA<span className="text-[#DC2626]">LAW</span></Link>
          <div className="hidden lg:flex gap-6 text-sm font-semibold text-gray-300">
            <Link href="practice-areas" className="hover:text-white">Practice Areas</Link>
            <Link href="personal-injury" className="hover:text-white">Personal Injury</Link>
            <Link href="about" className="text-white">Attorneys</Link>
          </div>
          <Link href="contact" className="bg-[#DC2626] hover:bg-red-700 text-white font-black px-4 py-2 rounded text-sm transition-colors">FREE CASE REVIEW</Link>
        </div>
      </nav>

      {/* White hero — trenam.com style */}
      <section className="py-16 px-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <h1 className="text-4xl lg:text-5xl font-black text-[#111827] leading-tight mb-5">Our Attorneys</h1>
            <p className="text-gray-600 text-xl leading-relaxed">
              Three partners. 55 combined years of courtroom experience. Over $200M recovered for Florida clients.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            {[["$200M+","Recovered"],["80+","Jury Trials"],["5,000+","Cases Won"]].map(([n, l]) => (
              <div key={l} className="border border-gray-100 rounded-xl p-4">
                <p className="font-black text-[#DC2626] text-xl">{n}</p>
                <p className="text-gray-400 text-xs">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attorney spotlights */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {attorneys.map((a, i) => (
            <div key={a.name} className={`grid grid-cols-1 lg:grid-cols-3 gap-8 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={`rounded-2xl aspect-square overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <img src={i % 2 === 0 ? "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80&auto=format&fit=crop&crop=faces" : "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=600&q=80&auto=format&fit=crop&crop=faces"} alt="Attorney" className="w-full h-full object-cover object-top" />
              </div>
              <div className={`lg:col-span-2 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <h2 className="text-2xl font-black text-[#111827] mb-1">{a.name}</h2>
                <p className="text-[#DC2626] font-bold text-sm mb-2">{a.title}</p>
                <p className="text-gray-400 text-xs mb-4">{a.creds}</p>
                <p className="text-gray-600 leading-relaxed mb-5">{a.bio}</p>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Awards & Recognition</p>
                  <ul className="space-y-1">
                    {a.awards.map((aw) => (
                      <li key={aw} className="flex items-start gap-2 text-gray-700 text-sm">
                        <span className="text-[#DC2626] font-bold mt-0.5 flex-shrink-0">›</span>{aw}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="contact" className="inline-block mt-5 bg-[#111827] hover:bg-[#DC2626] text-white font-bold px-5 py-2.5 rounded text-sm transition-colors">
                  Speak with {a.name.split(" ")[0]} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* News grid */}
      <section className="bg-gray-50 border-y border-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-[#111827] mb-8">News & Recognition</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {news.map((n) => (
              <div key={n.headline} className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                <p className="text-xs font-bold text-gray-400 mb-2">{n.date} · {n.source}</p>
                <p className="font-bold text-[#111827] text-sm leading-snug">{n.headline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards badges */}
      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Awards & Memberships</p>
          <div className="flex flex-wrap justify-center gap-6">
            {["Florida Super Lawyers","Best Lawyers in America","Martindale-Hubbell AV Preeminent","Florida Justice Association","American Association for Justice","Tampa Bay Trial Lawyers Association","AVVO 10/10 Rating","National Trial Lawyers Top 100"].map((a) => (
              <div key={a} className="border border-gray-200 rounded-xl px-5 py-3 text-sm font-semibold text-gray-600 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors">{a}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
