import Link from "next/link";

const attorneys = [
  {
    name: "Margaret Whitfield",
    title: "Founding Partner",
    cred: "Board Certified Civil Trial Lawyer",
    bar: "Florida · New York · U.S. District Court, M.D. Fla.",
    edu: "Harvard Law School, J.D. · Princeton University, B.A.",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Margaret founded the firm in 1987 after a decade at a national litigation practice in New York. She returned to Florida to build a different kind of firm — one with the resources to take on large corporations and insurance companies, but with the personal accountability of a boutique practice. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Over 38 years, she has tried more than 200 cases to verdict and secured several of Florida's largest business fraud settlements.",
    cases: ["$14.2M — Multi-district insurance bad faith class action", "$7.8M — Corporate fraud against minority shareholders", "$4.1M — Business non-compete and trade secret theft"],
  },
  {
    name: "David Kim",
    title: "Senior Partner",
    cred: "Personal Injury · Catastrophic Injury",
    bar: "Florida · Georgia",
    edu: "University of Florida Levin College of Law · UF, B.S. Kinesiology",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. David joined the firm in 2003 after clerking for a federal judge. He has built one of the most respected personal injury practices in the Tampa Bay region, representing seriously injured clients and their families in catastrophic accident and wrongful death cases. Ut enim ad minim veniam, quis nostrud exercitation ullamco. He is known for his willingness to take difficult cases to trial rather than accept inadequate settlement offers.",
    cases: ["$4.2M — Wrongful death, commercial trucking accident", "$2.8M — Traumatic brain injury, construction site fall", "$1.9M — Spinal cord injury, defective product"],
  },
  {
    name: "Rachel Torres",
    title: "Partner",
    cred: "Board Certified Marital & Family Law",
    bar: "Florida · Georgia",
    edu: "Stetson University College of Law · University of Tampa, B.A.",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rachel joined the firm in 2012 and leads the family law practice. She is a Florida Bar Board Certified Marital and Family Law specialist — a distinction held by fewer than 3% of Florida family law attorneys. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Known for her combination of strategic acuity and genuine compassion, Rachel handles high-conflict custody cases, high-asset divorces, and complex support disputes across Florida and Georgia.",
    cases: ["High-asset divorce — $12M estate, multiple business interests", "International child custody relocation dispute", "Multi-state co-parenting plan with special needs child"],
  },
];

const timeline = [
  { year: "1987", event: "Margaret Whitfield founds the firm with a two-attorney team in downtown Tampa." },
  { year: "1995", event: "Expands into business litigation; secures first $1M+ verdict in commercial fraud case." },
  { year: "2003", event: "David Kim joins from federal clerkship; personal injury practice launched." },
  { year: "2010", event: "Recognized by U.S. News — Best Law Firms for the first time. Firm grows to 12 attorneys." },
  { year: "2018", event: "Rachel Torres named partner; family law practice achieves Board Certification." },
  { year: "2025", event: "38-year milestone. 3 offices. 200+ jury trials. Super Lawyers® recognition for all named partners." },
];

export default function LegalAboutPage() {
  return (
    <div className="bg-white font-sans">
      <div style={{backgroundColor: "#0C2340", color: "#C9A84C"}} className="text-center text-xs py-2.5 tracking-widest font-semibold uppercase">
        Available 24/7 · Free Consultations · (813) 555-0100
      </div>

      {/* Hero */}
      <section style={{backgroundColor: "#0C2340"}} className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p style={{color: "#C9A84C"}} className="text-xs font-semibold tracking-[0.2em] uppercase mb-4">Our Attorneys</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{fontFamily: "Georgia, serif"}}>
            Experience. Credibility. Results.
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Three decades of trying cases across Florida. Every partner has a track record you can verify before you hire us.
          </p>
        </div>
      </section>

      {/* Attorneys */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          {attorneys.map((a) => (
            <div key={a.name} className="border border-gray-100 rounded-xl overflow-hidden">
              <div className="grid lg:grid-cols-3">
                <div style={{backgroundColor: "#F8F6F0"}} className="p-8 flex flex-col items-center text-center border-b lg:border-b-0 lg:border-r border-gray-100">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center font-bold text-3xl mb-4" style={{backgroundColor: "#0C2340", color: "#C9A84C"}}>
                    {a.name[0]}
                  </div>
                  <h2 className="font-bold text-lg mb-1" style={{color: "#0C2340"}}>{a.name}</h2>
                  <p className="text-xs font-semibold mb-1" style={{color: "#C9A84C"}}>{a.title}</p>
                  <p className="text-gray-500 text-xs mb-3">{a.cred}</p>
                  <div className="text-xs text-gray-400 space-y-1 text-left w-full">
                    <p><strong className="text-gray-600">Bar:</strong> {a.bar}</p>
                    <p><strong className="text-gray-600">Education:</strong> {a.edu}</p>
                  </div>
                </div>
                <div className="lg:col-span-2 p-8">
                  <p className="text-gray-600 leading-relaxed mb-6">{a.bio}</p>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Notable Verdicts & Settlements</p>
                    <ul className="space-y-2">
                      {a.cases.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="font-bold flex-shrink-0" style={{color: "#C9A84C"}}>→</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/contact" className="inline-block mt-6 font-bold px-6 py-2.5 rounded transition-opacity hover:opacity-90 text-sm" style={{backgroundColor: "#0C2340", color: "white"}}>
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{color: "#C9A84C"}}>Our History</p>
            <h2 className="text-3xl font-bold" style={{color: "#0C2340", fontFamily: "Georgia, serif"}}>38 years of serving Florida.</h2>
          </div>
          <div className="space-y-6">
            {timeline.map((t) => (
              <div key={t.year} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 text-right">
                  <span className="font-bold text-sm" style={{color: "#C9A84C"}}>{t.year}</span>
                </div>
                <div className="flex-shrink-0 w-px bg-gray-200 self-stretch relative">
                  <div className="absolute top-1.5 -left-1.5 w-3 h-3 rounded-full border-2" style={{backgroundColor: "#0C2340", borderColor: "#C9A84C"}} />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pb-4">{t.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="py-12" style={{backgroundColor: "#0C2340"}}>
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-4">
          {["Super Lawyers® 2022–2025", "AV Preeminent® Rated", "Best Law Firms — U.S. News", "Florida Bar Board Certified", "Martindale-Hubbell Gold", "Community Law Award 2023"].map((b) => (
            <span key={b} className="border rounded px-4 py-2 text-sm font-semibold" style={{borderColor: "rgba(201,168,76,0.3)", color: "#C9A84C"}}>{b}</span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center px-6" style={{backgroundColor: "#C9A84C"}}>
        <h2 className="text-3xl font-bold text-white mb-4" style={{fontFamily: "Georgia, serif"}}>Ready to speak with an attorney?</h2>
        <p className="text-white/80 mb-8">Free consultations available today. Call or submit your case details online.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="font-bold px-10 py-4 rounded transition-opacity hover:opacity-90" style={{backgroundColor: "#0C2340", color: "white"}}>
            Free Consultation
          </Link>
          <a href="tel:8135550100" className="border-2 border-white text-white font-bold px-10 py-4 rounded hover:bg-white hover:text-[#0C2340] transition-colors">
            (813) 555-0100
          </a>
        </div>
      </section>
    </div>
  );
}
