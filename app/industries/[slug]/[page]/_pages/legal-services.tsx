import Link from "next/link";

const areas = [
  {
    name: "Personal Injury",
    sub: "Auto Accidents · Truck Accidents · Slip & Fall · Wrongful Death",
    desc: "Injured through someone else's negligence? You deserve full compensation — medical bills, lost wages, pain and suffering. We fight insurers who lowball claims.",
    cases: ["Car & truck accidents", "Slip & fall premises liability", "Wrongful death", "Motorcycle accidents", "Pedestrian & bicycle accidents", "Product liability"],
    note: "No fee unless we win. Free case review.",
    fee: true,
  },
  {
    name: "Business Litigation",
    sub: "Contract Disputes · Fraud · Partnership Disputes · Trade Secrets",
    desc: "When a business dispute threatens your company, you need an aggressive litigation team with courtroom experience — not just negotiators who settle for less.",
    cases: ["Breach of contract", "Business fraud & misrepresentation", "Shareholder & partnership disputes", "Trade secret theft", "Non-compete enforcement", "Commercial real estate disputes"],
    note: null,
    fee: false,
  },
  {
    name: "Family Law",
    sub: "Divorce · Custody · Alimony · Adoption · Modification",
    desc: "Family matters require both strategic thinking and genuine compassion. We help you protect your children, your assets, and your future — with clarity and strength.",
    cases: ["High-asset divorce", "Child custody & time-sharing", "Child support modification", "Alimony & spousal support", "Domestic violence injunctions", "Step-parent adoption"],
    note: null,
    fee: false,
  },
  {
    name: "Estate Planning",
    sub: "Wills · Trusts · Powers of Attorney · Probate · Business Succession",
    desc: "Protect your family and your legacy with a comprehensive estate plan. Done properly, your wishes are carried out, your assets are protected, and your family avoids probate court.",
    cases: ["Last will & testament", "Revocable & irrevocable trusts", "Powers of attorney & healthcare directives", "Estate & trust administration", "Probate litigation", "Business succession planning"],
    note: null,
    fee: false,
  },
  {
    name: "Real Estate",
    sub: "Closings · Title Disputes · Landlord-Tenant · Developer Disputes",
    desc: "From residential closings to complex commercial transactions and title disputes, our real estate attorneys protect your investment at every stage.",
    cases: ["Residential & commercial closings", "Title defects & quiet title", "Landlord-tenant disputes", "HOA disputes", "Foreclosure defense", "Developer & contractor disputes"],
    note: null,
    fee: false,
  },
  {
    name: "Employment Law",
    sub: "Wrongful Termination · Discrimination · Harassment · Wage Theft",
    desc: "When your employer violates your rights, you need a legal advocate in your corner. We represent employees in discrimination, harassment, and wage-and-hour claims.",
    cases: ["Wrongful termination", "Race, sex & age discrimination", "Sexual harassment", "FMLA violations", "Unpaid wages & overtime", "Non-compete agreements"],
    note: null,
    fee: false,
  },
];

const awards = ["Super Lawyers® 2022–2025", "AV Preeminent® Rated", "Best Law Firms — U.S. News", "The Florida Bar Board Certified", "Martindale-Hubbell Gold"];

export default function LegalServicesPage() {
  return (
    <div className="bg-white font-sans">
      {/* Top bar */}
      <div style={{backgroundColor: "#0C2340", color: "#C9A84C"}} className="text-center text-xs py-2.5 tracking-widest font-semibold uppercase">
        Available 24/7 · Free Consultations · (813) 555-0100
      </div>

      {/* Hero */}
      <section style={{backgroundColor: "#0C2340"}} className="pt-24 pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <p style={{color: "#C9A84C"}} className="text-xs font-semibold tracking-[0.2em] uppercase mb-4">Practice Areas</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4" style={{fontFamily: "Georgia, serif"}}>
            We Handle the Complex.<br />You Focus on What Matters.
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
            Comprehensive legal representation for individuals, families, and businesses across Florida. Trusted counsel since 1987.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" style={{backgroundColor: "#C9A84C"}} className="hover:opacity-90 text-white font-bold px-8 py-4 rounded transition-opacity">
              Free Consultation
            </Link>
            <a href="tel:8135550100" style={{border: "2px solid rgba(201,168,76,0.4)", color: "#C9A84C"}} className="hover:border-[#C9A84C] font-bold px-8 py-4 rounded transition-colors">
              (813) 555-0100
            </a>
          </div>
        </div>
      </section>

      {/* Practice areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {areas.map((a) => (
              <div key={a.name} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div style={{backgroundColor: "#0C2340"}} className="px-7 py-5">
                  <h2 className="font-bold text-white text-xl">{a.name}</h2>
                  <p style={{color: "#C9A84C"}} className="text-xs font-semibold mt-1">{a.sub}</p>
                </div>
                <div className="p-7">
                  <p className="text-gray-600 leading-relaxed mb-5">{a.desc}</p>
                  <div className="mb-5">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Common cases:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {a.cases.map((c) => (
                        <div key={c} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{backgroundColor: "#C9A84C"}} />
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>
                  {a.fee && (
                    <div className="bg-green-50 border border-green-100 rounded-lg px-4 py-3 mb-4 text-sm text-green-800 font-semibold">
                      ✓ No fee unless we win · 100% free case review
                    </div>
                  )}
                  <Link href="/contact" style={{backgroundColor: "#0C2340"}} className="block text-center hover:opacity-90 text-white font-bold py-3 rounded-lg transition-opacity">
                    Free Consultation
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-12 bg-white border-t border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-gray-400 text-xs font-semibold tracking-[0.2em] uppercase mb-6">Recognition & Awards</p>
          <div className="flex flex-wrap justify-center gap-4">
            {awards.map((a) => (
              <span key={a} className="border border-gray-200 rounded px-4 py-2 text-gray-500 text-sm font-semibold">{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center px-6" style={{backgroundColor: "#C9A84C"}}>
        <h2 className="text-3xl font-bold text-white mb-4" style={{fontFamily: "Georgia, serif"}}>Don&rsquo;t wait. Time limits apply.</h2>
        <p className="text-white/80 mb-8 text-lg">Florida statutes of limitations restrict how long you have to file a claim. Call today for a free consultation.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" style={{backgroundColor: "#0C2340"}} className="hover:opacity-90 text-white font-bold px-10 py-4 rounded transition-opacity">
            Free Case Review
          </Link>
          <a href="tel:8135550100" className="border-2 border-white text-white font-bold px-10 py-4 rounded hover:bg-white transition-colors" style={{"--hover-color": "#0C2340"} as React.CSSProperties}>
            (813) 555-0100
          </a>
        </div>
      </section>
    </div>
  );
}
