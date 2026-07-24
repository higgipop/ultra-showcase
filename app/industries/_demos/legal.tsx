// Design reference: trenam.com (professional navy, attorney spotlight, news/awards) + dennishernandez.com (multi-CTA, bold conversions)
import Link from "next/link";

const practiceAreas = [
  { name: "Personal Injury", sub: "Auto Accidents · Slip & Fall · Wrongful Death" },
  { name: "Business Litigation", sub: "Contract Disputes · Shareholder · Trade Secrets" },
  { name: "Family Law", sub: "Divorce · Child Custody · Alimony · Adoption" },
  { name: "Estate Planning", sub: "Wills · Trusts · Powers of Attorney · Probate" },
  { name: "Real Estate", sub: "Closings · Title Disputes · Landlord-Tenant" },
  { name: "Employment Law", sub: "Wrongful Termination · Discrimination · FMLA" },
];

const attorneys = [
  { name: "Margaret Whitfield", title: "Founding Partner", focus: "Business Litigation · Complex Trials", bar: "FL · NY", edu: "Harvard Law" },
  { name: "David Kim", title: "Senior Partner", focus: "Personal Injury · Catastrophic Injury", bar: "FL", edu: "University of Florida" },
  { name: "Rachel Torres", title: "Partner", focus: "Family Law · Mediation", bar: "FL · GA", edu: "Stetson University Law" },
];

const awards = [
  "Super Lawyers® 2022–2025",
  "Best Law Firms — U.S. News",
  "AV Preeminent® Rating",
  "The Florida Bar Board Certified",
  "Martindale-Hubbell Gold",
];

const news = [
  { date: "Nov 2025", cat: "Firm News", title: "Lorem ipsum firm wins landmark verdict in multi-district insurance case" },
  { date: "Oct 2025", cat: "Recognition", title: "Three attorneys named to Florida Super Lawyers Rising Stars list" },
  { date: "Sep 2025", cat: "Community", title: "Lorem ipsum pro bono program expands to serve underrepresented families" },
];

const results = [
  { amount: "$4.2M", case: "Trucking accident — wrongful death" },
  { amount: "$2.8M", case: "Business fraud — breach of fiduciary duty" },
  { amount: "$1.1M", case: "Premises liability — slip and fall" },
];

export default function LegalDemo() {
  return (
    <div className="bg-white font-sans">

      {/* Top contact bar */}
      <div className="bg-[#0C2340] text-white/70 text-xs py-2.5">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span>Available 24/7 for Emergencies</span>
          <div className="flex gap-6">
            <span>(813) 555-0100</span>
            <span>hello@lawfirm.com</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#0C2340] pt-20 pb-0 relative overflow-hidden">
        {/* diagonal divider */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{clipPath: "polygon(0 100%, 100% 0, 100% 100%)"}} />
        <div className="max-w-7xl mx-auto px-6 pb-24 pt-8 relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Trusted Counsel. Proven Results.
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" style={{fontFamily: "Georgia, serif"}}>
              When it matters most,<br />experience matters.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. We represent individuals, families, and businesses across Florida with the depth of resources of a large firm and the personal attention of a boutique practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact"
                className="bg-[#C9A84C] hover:bg-[#B8943E] text-white font-bold px-8 py-4 rounded transition-colors text-center">
                Free Consultation
              </Link>
              <a href="tel:8135550100"
                className="border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded transition-colors text-center">
                (813) 555-0100
              </a>
            </div>
          </div>
          {/* Results card */}
          <div className="bg-white rounded-xl shadow-2xl p-8 ml-auto w-full max-w-sm">
            <p className="text-[#0C2340] text-xs font-semibold tracking-[0.15em] uppercase mb-5">
              Recent Verdicts &amp; Settlements
            </p>
            <div className="space-y-4">
              {results.map((r) => (
                <div key={r.amount} className="flex items-center gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                  <span className="text-2xl font-bold text-[#0C2340]">{r.amount}</span>
                  <span className="text-gray-500 text-sm">{r.case}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-5">Past results do not guarantee future outcomes.</p>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {awards.map((a) => (
              <span key={a} className="text-gray-400 text-sm font-semibold border border-gray-200 rounded px-4 py-2">
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.15em] uppercase mb-3">Practice Areas</p>
            <h2 className="text-3xl font-bold text-[#0C2340]" style={{fontFamily: "Georgia, serif"}}>
              Comprehensive legal representation
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {practiceAreas.map((p) => (
              <Link key={p.name} href="/contact"
                className="group bg-white border border-gray-100 rounded-lg p-7 hover:border-[#0C2340] hover:shadow-md transition-all">
                <div className="w-6 h-px bg-[#C9A84C] mb-5" />
                <h3 className="font-bold text-[#0C2340] text-lg mb-2 group-hover:text-[#C9A84C] transition-colors">
                  {p.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{p.sub}</p>
                <span className="text-xs font-semibold text-[#0C2340] uppercase tracking-wider group-hover:text-[#C9A84C] transition-colors">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Attorneys */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.15em] uppercase mb-3">Our Attorneys</p>
            <h2 className="text-3xl font-bold text-[#0C2340]" style={{fontFamily: "Georgia, serif"}}>
              Experience you can trust in the courtroom.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {attorneys.map((a) => (
              <div key={a.name} className="group">
                <div className="aspect-[3/4] bg-gray-100 rounded-xl mb-5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#0C2340]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <Link href="/contact" className="text-white text-sm font-bold border-b border-white/60 pb-0.5">
                      View Profile →
                    </Link>
                  </div>
                  {/* Photo placeholder */}
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-300 text-6xl font-bold">{a.name[0]}</span>
                  </div>
                </div>
                <h3 className="font-bold text-[#0C2340] text-lg">{a.name}</h3>
                <p className="text-[#C9A84C] text-sm font-semibold mb-2">{a.title}</p>
                <p className="text-gray-500 text-sm mb-1">{a.focus}</p>
                <p className="text-gray-400 text-xs">{a.edu} · Bar: {a.bar}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-20 bg-[#0C2340]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.15em] uppercase mb-3">News &amp; Recognition</p>
              <h2 className="text-3xl font-bold text-white" style={{fontFamily: "Georgia, serif"}}>
                What&rsquo;s happening at the firm
              </h2>
            </div>
            <Link href="/blog" className="hidden md:block text-sm font-semibold text-[#C9A84C] hover:underline">
              All News →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((n) => (
              <Link key={n.title} href="/blog"
                className="group block bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-7 transition-colors">
                <div className="flex gap-3 items-center mb-4">
                  <span className="text-[#C9A84C] text-xs font-semibold uppercase">{n.cat}</span>
                  <span className="text-white/30 text-xs">{n.date}</span>
                </div>
                <h3 className="text-white font-semibold leading-snug group-hover:text-[#C9A84C] transition-colors">
                  {n.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#C9A84C]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{fontFamily: "Georgia, serif"}}>
            Don&rsquo;t face it alone. We&rsquo;re ready to help.
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Free consultations. No obligation. Call now or submit your case details online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#0C2340] hover:bg-[#091B33] text-white font-bold px-10 py-4 rounded transition-colors">
              Free Consultation
            </Link>
            <a href="tel:8135550100" className="bg-white text-[#0C2340] hover:bg-white/90 font-bold px-10 py-4 rounded transition-colors">
              (813) 555-0100
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
