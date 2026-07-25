// trenam.com style: white/professional, attorney spotlight, recognitions, news grid, firm history
import Link from "next/link";

const recognitions = [
  { label: "Super Lawyers", sub: "2019–2024", icon: "⭐" },
  { label: "Chambers USA", sub: "Band 1 — Personal Injury", icon: "🏛️" },
  { label: "AV Preeminent", sub: "Martindale-Hubbell", icon: "⚖️" },
  { label: "BBB A+", sub: "Better Business Bureau", icon: "✅" },
];

const news = [
  { date: "March 12, 2025", cat: "Firm News", title: "Merritt Law Secures $9M Verdict in Hillsborough County Trucking Case" },
  { date: "February 5, 2025", cat: "Community", title: "Our Team Volunteers with Tampa Bay Legal Aid Society" },
  { date: "January 20, 2025", cat: "Recognition", title: "Jonathan A. Merritt Named to Florida Super Lawyers List for Sixth Year" },
  { date: "December 8, 2024", cat: "Case Results", title: "$5M Settlement Reached in Wrongful Death Case" },
];

const milestones = [
  { year: "1996", event: "Jonathan A. Merritt founds the firm in Tampa with a single focus: personal injury." },
  { year: "2003", event: "First $1M verdict — a rear-end accident case that set a new standard in Hillsborough County." },
  { year: "2009", event: "Firm expands to include business litigation practice under partner Maria L. Santos." },
  { year: "2015", event: "$10M+ in annual recoveries. Recognized by Chambers USA for the first time." },
  { year: "2020", event: "Moved to new downtown Tampa office. $50M recovered milestone." },
  { year: "2024", event: "$9M Hillsborough County verdict. Named Super Lawyers for the sixth consecutive year." },
];

export default function LegalAbout() {
  return (
    <div className="bg-white font-sans">
      {/* Nav */}
      <nav className="border-b border-gray-100 bg-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="font-black text-[#1B2A4A] text-lg">MERRITT <span className="font-light text-gray-400">|</span> LAW</div>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-600">
            <Link href="practice-areas" className="hover:text-[#1B2A4A]">Practice Areas</Link>
            <Link href="personal-injury" className="hover:text-[#1B2A4A]">Personal Injury</Link>
            <Link href="about" className="text-[#1B2A4A] border-b-2 border-[#DC2626]">About</Link>
            <Link href="contact" className="hover:text-[#1B2A4A]">Contact</Link>
          </div>
          <Link href="contact" className="bg-[#DC2626] hover:bg-[#b91c1c] text-white font-bold px-5 py-2 rounded text-sm transition-colors">Free Consultation</Link>
        </div>
      </nav>

      {/* Attorney spotlight */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-gray-100 rounded-2xl aspect-[3/4] flex items-center justify-center text-gray-400 text-sm">
            Attorney Photo Placeholder
          </div>
          <div>
            <p className="text-[#DC2626] text-xs font-bold uppercase tracking-[0.2em] mb-4">Lead Attorney</p>
            <h1 className="text-4xl font-black text-[#1B2A4A] mb-2">Jonathan A. Merritt, Esq.</h1>
            <p className="text-gray-500 font-semibold mb-6">Personal Injury & Business Litigation · Harvard Law School, J.D. 1996</p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Jonathan A. Merritt has spent 29 years fighting for injured Floridians and businesses harmed by the misconduct of others. He founded this firm on a single principle: clients deserve direct access to their attorney, aggressive advocacy, and honest guidance.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              A graduate of Harvard Law School and a former law clerk for the U.S. District Court for the Middle District of Florida, Jonathan brings elite legal training and decades of courtroom experience to every case he handles. He has tried over 80 jury trials to verdict.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Outside the courtroom, Jonathan serves on the Florida Bar Board of Governors and volunteers with Tampa Bay Legal Aid Society, providing pro bono representation to underserved clients.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Education", value: "Harvard Law, J.D. 1996" },
                { label: "Bar Admissions", value: "Florida · D.C. · U.S. Supreme Court" },
                { label: "Cases Tried", value: "80+ jury trials" },
                { label: "Experience", value: "29 years" },
              ].map((d) => (
                <div key={d.label} className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">{d.label}</p>
                  <p className="font-bold text-[#1B2A4A] text-sm">{d.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recognitions */}
      <section className="py-14 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-[#1B2A4A] text-center mb-10">Recent Recognitions</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {recognitions.map((r) => (
              <div key={r.label} className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{r.icon}</div>
                <p className="font-black text-[#1B2A4A] mb-1">{r.label}</p>
                <p className="text-gray-400 text-xs">{r.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-2xl font-black text-[#1B2A4A]">Firm News</h2>
            <Link href="contact" className="text-sm text-[#DC2626] font-bold hover:underline">All News →</Link>
          </div>
          <div className="space-y-0 border border-gray-100 rounded-2xl overflow-hidden">
            {news.map((n, i) => (
              <div key={n.title} className={`p-6 flex gap-6 items-start ${i < news.length - 1 ? "border-b border-gray-100" : ""} hover:bg-gray-50 transition-colors group`}>
                <div className="text-right min-w-[100px]">
                  <p className="text-xs text-gray-400">{n.date}</p>
                  <span className="inline-block mt-1 text-xs font-bold text-[#DC2626] bg-[#FEF2F2] px-2 py-0.5 rounded">{n.cat}</span>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-[#1B2A4A] transition-colors leading-snug">{n.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Firm history */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-[#1B2A4A] mb-10">Firm History</h2>
          <div className="space-y-6">
            {milestones.map((m) => (
              <div key={m.year} className="flex gap-6 items-start">
                <div className="min-w-[60px] text-right">
                  <span className="font-black text-[#DC2626] text-lg">{m.year}</span>
                </div>
                <div className="flex-1 border-l-2 border-gray-200 pl-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-14 bg-white px-4 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-black text-[#1B2A4A] mb-4">Community Involvement</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We believe in giving back to the Tampa Bay community that has trusted us for nearly three decades. Our attorneys and staff volunteer hundreds of hours annually with local organizations focused on legal access, veterans&apos; support, and youth programs.
            </p>
            <ul className="space-y-3">
              {["Tampa Bay Legal Aid Society — Pro bono representation", "Florida Bar Foundation — Annual fundraiser partner", "Hillsborough County Bar Association — Education committee", "Big Brothers Big Sisters of Tampa Bay — Mentorship"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="text-[#DC2626] font-black mt-0.5">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-100 rounded-2xl aspect-video flex items-center justify-center text-gray-300">
            Community Photo Placeholder
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B2A4A] py-14 text-center px-4">
        <h2 className="text-3xl font-black text-white mb-3">Ready to Discuss Your Case?</h2>
        <p className="text-gray-400 text-lg mb-8">Free consultation. No obligation. A senior attorney reviews every inquiry personally.</p>
        <Link href="contact" className="inline-block bg-[#DC2626] hover:bg-[#b91c1c] text-white font-black px-12 py-5 rounded text-xl transition-colors">
          Schedule Free Consultation
        </Link>
      </section>
    </div>
  );
}
