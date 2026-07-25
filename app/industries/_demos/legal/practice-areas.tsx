// dennishernandez.com: dark hero, red accent, practice area cards with settlement ranges, no-fee bar
import Link from "next/link";

const practiceAreas = [
  { name: "Personal Injury", icon: "⚖️", desc: "Injuries caused by another party's negligence — medical bills, lost wages, and pain & suffering.", range: "$50,000–$17,000,000", href: "personal-injury" },
  { name: "Car Accidents", icon: "🚗", desc: "T-bone, rear-end, DUI hits, uninsured motorist claims. We fight insurance companies daily.", range: "$35,000–$15,000,000", href: "personal-injury" },
  { name: "Motorcycle Accidents", icon: "🏍️", desc: "Severe injuries from rider impacts. We know how to counter bias against motorcyclists.", range: "$80,000–$9,000,000", href: "personal-injury" },
  { name: "Slip & Fall", icon: "🏥", desc: "Premises liability — wet floors, broken stairs, poor lighting, negligent property owners.", range: "$25,000–$5,000,000", href: "personal-injury" },
  { name: "Medical Malpractice", icon: "🩺", desc: "Surgical errors, misdiagnosis, birth injuries, medication mistakes. Complex cases we handle.", range: "$100,000–$8,000,000", href: "personal-injury" },
  { name: "Wrongful Death", icon: "🕊️", desc: "We pursue maximum compensation for families who've lost a loved one through negligence.", range: "$500,000–$17,000,000", href: "personal-injury" },
];

const settlements = [
  { amount: "$17M", type: "Motorcycle Accident" },
  { amount: "$15M", type: "Auto Accident" },
  { amount: "$9M", type: "Trucking Accident" },
  { amount: "$5M", type: "Wrongful Death" },
  { amount: "$3M", type: "Slip & Fall" },
];

export default function LegalPracticeAreas() {
  return (
    <div className="bg-white font-sans">
      {/* Top bar */}
      <div className="bg-[#DC2626] text-white text-center py-2 text-sm font-bold">
        NO FEES UNLESS WE WIN · CALL (813) 555-0100 · 24/7
      </div>

      {/* Hero */}
      <section className="bg-[#111827] py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#DC2626] text-xs font-bold uppercase tracking-[0.2em] mb-4">Practice Areas</p>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">What Type of Case Do You Have?</h1>
          <p className="text-gray-400 text-lg mb-8">Tell us what happened — free consultation, no fees unless we win.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="contact" className="bg-[#DC2626] hover:bg-[#b91c1c] text-white font-black px-10 py-4 rounded text-xl transition-colors">FREE CASE REVIEW</Link>
            <a href="tel:8135550100" className="border-2 border-white text-white hover:bg-white hover:text-[#111827] font-bold px-10 py-4 rounded text-xl transition-colors">(813) 555-0100</a>
          </div>
        </div>
      </section>

      {/* Practice area cards */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((pa) => (
              <div key={pa.name} className="bg-white rounded-2xl border border-gray-100 hover:border-[#DC2626]/30 hover:shadow-lg transition-all p-7 flex flex-col">
                <div className="text-4xl mb-4">{pa.icon}</div>
                <h2 className="text-xl font-black text-gray-900 mb-3">{pa.name}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{pa.desc}</p>
                <div className="bg-gray-50 rounded-xl px-4 py-3 mb-4">
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">Average settlements</p>
                  <p className="text-[#DC2626] font-black text-lg">{pa.range}</p>
                </div>
                <Link href={pa.href} className="block bg-[#DC2626] hover:bg-[#b91c1c] text-white font-black py-3 rounded-xl text-center transition-colors text-sm">
                  Free Consultation →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No-fee full-width bar */}
      <section className="bg-[#DC2626] py-6 px-4 text-center">
        <p className="text-white font-black text-xl tracking-wider">NO FEES UNLESS WE WIN · CALL (813) 555-0100 · 24/7</p>
      </section>

      {/* Settlement showcase */}
      <section className="bg-[#111827] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#DC2626] text-xs font-bold uppercase tracking-widest text-center mb-6">Recent Results</p>
          <div className="flex flex-wrap justify-center gap-6">
            {settlements.map((s) => (
              <div key={s.amount} className="text-center">
                <p className="text-4xl lg:text-5xl font-black text-white">{s.amount}</p>
                <p className="text-gray-400 text-sm mt-1">{s.type}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-xs text-center mt-8">Past results do not guarantee future outcomes.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white px-4 text-center border-t border-gray-100">
        <h2 className="text-3xl font-black text-gray-900 mb-3">Not sure if you have a case?</h2>
        <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">Call us or submit your information — a licensed attorney will review your situation at no cost and no obligation.</p>
        <Link href="contact" className="inline-block bg-[#DC2626] hover:bg-[#b91c1c] text-white font-black px-12 py-5 rounded text-xl transition-colors">
          GET MY FREE CASE EVALUATION
        </Link>
      </section>
    </div>
  );
}
