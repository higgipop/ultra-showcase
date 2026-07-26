import Link from "next/link";

const areas = [
  {
    num: "01",
    name: "Personal Injury",
    href: "personal-injury",
    best: "$17.5M",
    range: "$50K – $17.5M",
    desc: "Car accidents, truck crashes, motorcycle accidents, slip and fall, premises liability, and product defect injuries. Florida operates under comparative negligence — you may still recover even if partially at fault.",
    items: ["Car & motorcycle accidents","Commercial truck accidents","Slip, trip & fall injuries","Premises liability","Product liability","Dog bites & animal attacks"],
  },
  {
    num: "02",
    name: "Medical Malpractice",
    href: "practice-areas",
    best: "$15.2M",
    range: "$500K – $15.2M",
    desc: "Surgical errors, misdiagnosis, delayed diagnosis, birth injuries, anesthesia errors, and nursing home negligence. These cases require expert testimony and aggressive pursuit — we have the resources to take on hospitals and insurance companies.",
    items: ["Surgical errors","Misdiagnosis / delayed diagnosis","Birth injuries","Anesthesia complications","Nursing home abuse","Hospital negligence"],
  },
  {
    num: "03",
    name: "Wrongful Death",
    href: "practice-areas",
    best: "$9.8M",
    range: "$250K – $9.8M",
    desc: "When someone dies due to another party's negligence, their family deserves justice and compensation. We handle wrongful death claims with the sensitivity and urgency the situation demands.",
    items: ["Loss of consortium","Funeral & burial expenses","Medical expenses prior to death","Lost future income & support","Pain & suffering","Estate claims"],
  },
  {
    num: "04",
    name: "Business Disputes",
    href: "business-litigation",
    best: "$4.2M",
    range: "$100K – $4.2M",
    desc: "Contract disputes, partnership disagreements, non-compete violations, fraud, and business torts. We represent both plaintiffs and defendants in complex commercial litigation with speed and precision.",
    items: ["Breach of contract","Partnership & shareholder disputes","Non-compete enforcement","Business fraud & misrepresentation","Trade secret theft","Commercial lease disputes"],
  },
  {
    num: "05",
    name: "Employment Law",
    href: "contact",
    best: "$2.8M",
    range: "$25K – $2.8M",
    desc: "Workplace discrimination, wrongful termination, wage theft, sexual harassment, and FMLA retaliation. Florida employees have rights — we help enforce them.",
    items: ["Wrongful termination","Discrimination (race, sex, age, disability)","Sexual harassment","Wage & hour violations","FMLA retaliation","Whistleblower claims"],
  },
  {
    num: "06",
    name: "Estate & Probate",
    href: "contact",
    best: "$1.5M",
    range: "Varies",
    desc: "Will contests, trust disputes, probate administration, and elder law. We protect beneficiaries, executors, and trustees navigating complex estate matters.",
    items: ["Will contests","Trust litigation","Probate administration","Guardianship disputes","Power of attorney challenges","Elder financial abuse"],
  },
];

export default function PracticeAreas() {
  return (
    <div className="bg-white font-sans">
      {/* Top bar */}
      <div className="bg-[#DC2626] text-white text-center text-sm py-2 font-bold">
        FREE CASE EVALUATION · No Fee Unless We Win · <a href="tel:8135550300" className="underline">(813) 555-0300</a>
      </div>
      <nav className="bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-white text-xl">GARCIA<span className="text-[#DC2626]">LAW</span></Link>
          <div className="hidden lg:flex gap-6 text-sm font-semibold text-gray-300">
            <Link href="practice-areas" className="text-white">Practice Areas</Link>
            <Link href="personal-injury" className="hover:text-white">Personal Injury</Link>
            <Link href="business-litigation" className="hover:text-white">Business</Link>
            <Link href="about" className="hover:text-white">Attorneys</Link>
          </div>
          <Link href="contact" className="bg-[#DC2626] hover:bg-red-700 text-white font-black px-4 py-2 rounded text-sm transition-colors">FREE CASE REVIEW</Link>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-[#111827] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-black text-white mb-2">Practice Areas</h1>
          <p className="text-gray-400 text-lg">We fight in courts and at the negotiating table — and we win.</p>
        </div>
      </section>

      {/* No-fee bar */}
      <section className="bg-[#DC2626] py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 text-white font-black text-sm text-center">
          <span>NO FEE UNLESS WE WIN</span>
          <span>|</span>
          <span>FREE CONSULTATIONS</span>
          <span>|</span>
          <span>24/7 AVAILABILITY</span>
          <span>|</span>
          <span>SPANISH SPOKEN</span>
        </div>
      </section>

      {/* Numbered practice area list */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto space-y-0">
          {areas.map((area, i) => (
            <div key={area.num} className={`py-10 border-b border-gray-100 ${i % 2 === 1 ? "lg:pl-12" : ""}`}>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="flex items-start gap-4 lg:block">
                  <span className="text-5xl font-black text-gray-100 leading-none">{area.num}</span>
                  <div className="lg:mt-2">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1 lg:mt-4">Best Result</div>
                    <div className="text-2xl font-black text-[#DC2626]">{area.best}</div>
                    <div className="text-xs text-gray-400">{area.range} typical range</div>
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <h2 className="text-2xl font-black text-[#111827] mb-3">{area.name}</h2>
                  <p className="text-gray-600 leading-relaxed mb-5">{area.desc}</p>
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {area.items.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                        <span className="text-[#DC2626] font-black mt-0.5 flex-shrink-0">›</span>{item}
                      </div>
                    ))}
                  </div>
                  <Link href={area.href} className="inline-block bg-[#111827] hover:bg-[#DC2626] text-white font-bold px-6 py-2.5 rounded text-sm transition-colors">
                    Discuss My {area.name} Case →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111827] py-14 px-4 text-center">
        <h2 className="text-2xl font-black text-white mb-3">Not Sure Which Practice Area Fits Your Case?</h2>
        <p className="text-gray-400 mb-8">Call us. One of our attorneys will listen and tell you honestly whether you have a case — at no charge.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:8135550300" className="bg-[#DC2626] hover:bg-red-700 text-white font-black px-10 py-4 rounded text-xl transition-colors">(813) 555-0300</a>
          <Link href="contact" className="border border-white/30 hover:border-white text-white font-bold px-10 py-4 rounded transition-colors">Submit Case Online</Link>
        </div>
      </section>
    </div>
  );
}
