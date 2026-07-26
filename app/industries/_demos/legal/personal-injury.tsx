import Link from "next/link";

const caseWins = [
  { amount: "$17.5M", desc: "Semi-truck accident — traumatic brain injury" },
  { amount: "$9.8M", desc: "Wrongful death — construction accident" },
  { amount: "$7.3M", desc: "Drunk driver — spinal cord injury" },
  { amount: "$5.1M", desc: "Defective airbag — facial injuries" },
  { amount: "$3.8M", desc: "Rideshare accident — multiple fractures" },
  { amount: "$2.4M", desc: "Hit & run — permanent disability" },
  { amount: "$1.9M", desc: "Rear-end collision — herniated disc" },
  { amount: "$1.2M", desc: "Slip and fall — broken hip" },
];

const faqs = [
  ["How long do I have to file a personal injury claim in Florida?", "Florida's statute of limitations for personal injury claims is generally 2 years from the date of the accident. However, there are exceptions — contact us immediately to protect your rights."],
  ["What is my case worth?", "Every case is different. Compensation depends on the severity of your injuries, medical expenses, lost income, pain and suffering, and the defendant's insurance limits. We'll give you an honest assessment during your free consultation."],
  ["What if I was partially at fault?", "Florida follows comparative negligence, which means you can still recover damages even if you were partially at fault. Your recovery is reduced by your percentage of fault."],
  ["How long will my case take?", "Most personal injury cases settle within 6–18 months. Cases that go to trial may take 2–3 years. We work aggressively to resolve your case as quickly as possible while maximizing your recovery."],
  ["Do I have to go to court?", "Most cases settle out of court. But we prepare every case as if it will go to trial — and insurance companies know it. That's why our clients get better settlements."],
  ["Can I afford an attorney?", "Yes. We work on contingency — you pay nothing unless we win your case. We advance all case costs and expenses. If we don't win, you owe us nothing."],
  ["What should I do right after an accident?", "Call 911, get medical attention immediately, document everything you can, don't talk to the other party's insurance company, and call us as soon as possible. Early evidence is critical."],
];

export default function PersonalInjury() {
  return (
    <div className="bg-white font-sans">
      <div className="bg-[#DC2626] text-white text-center text-sm py-2 font-bold">
        FREE CASE EVALUATION · No Fee Unless We Win · <a href="tel:8135550300" className="underline">(813) 555-0300</a>
      </div>
      <nav className="bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-white text-xl">GARCIA<span className="text-[#DC2626]">LAW</span></Link>
          <div className="hidden lg:flex gap-6 text-sm font-semibold text-gray-300">
            <Link href="practice-areas" className="hover:text-white">Practice Areas</Link>
            <Link href="personal-injury" className="text-white">Personal Injury</Link>
            <Link href="business-litigation" className="hover:text-white">Business</Link>
            <Link href="about" className="hover:text-white">Attorneys</Link>
          </div>
          <Link href="contact" className="bg-[#DC2626] hover:bg-red-700 text-white font-black px-4 py-2 rounded text-sm transition-colors">FREE CASE REVIEW</Link>
        </div>
      </nav>

      {/* Dark page header */}
      <section className="bg-[#111827] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-gray-500 text-xs mb-3">
            <Link href="home" className="hover:text-gray-300">Home</Link> › <Link href="practice-areas" className="hover:text-gray-300">Practice Areas</Link> › Personal Injury
          </div>
          <h1 className="text-4xl font-black text-white">Personal Injury</h1>
        </div>
      </section>

      {/* Two-column content */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left sidebar — case wins */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-[#111827] rounded-2xl p-6 sticky top-24">
              <p className="text-[#DC2626] text-xs font-black uppercase tracking-widest mb-4">Recent Case Results</p>
              <div className="space-y-3">
                {caseWins.map((c) => (
                  <div key={c.amount + c.desc} className="border-b border-white/10 pb-3 last:border-0 last:pb-0">
                    <p className="font-black text-[#DC2626] text-xl leading-none">{c.amount}</p>
                    <p className="text-white/50 text-xs mt-0.5">{c.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/20 text-xs mt-4">Past results do not guarantee future outcomes.</p>
            </div>
          </div>

          {/* Right main — form + info */}
          <div className="lg:col-span-2 order-1 lg:order-2 space-y-10">
            {/* Case evaluation form */}
            <div className="bg-[#DC2626]/5 border-2 border-[#DC2626]/20 rounded-2xl p-8">
              <h2 className="text-xl font-black text-[#111827] mb-1">FREE CASE EVALUATION</h2>
              <p className="text-gray-400 text-sm mb-5">An attorney will call you within 1 hour. No obligation.</p>
              <form className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#DC2626]" placeholder="First Name" />
                  <input className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#DC2626]" placeholder="Last Name" />
                </div>
                <input type="tel" className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#DC2626]" placeholder="Phone Number" />
                <select className="border border-gray-200 rounded-lg px-4 py-3 text-base bg-white w-full focus:outline-none focus:border-[#DC2626] text-gray-700">
                  <option>Type of Accident</option>
                  <option>Car Accident</option>
                  <option>Truck Accident</option>
                  <option>Slip & Fall</option>
                  <option>Motorcycle Accident</option>
                  <option>Wrongful Death</option>
                  <option>Medical Malpractice</option>
                  <option>Other</option>
                </select>
                <textarea className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full h-24 resize-none focus:outline-none focus:border-[#DC2626]" placeholder="What happened? (brief description)" />
                <button type="submit" className="bg-[#DC2626] hover:bg-red-700 text-white font-black px-6 py-4 rounded w-full text-base transition-colors">GET MY FREE EVALUATION →</button>
                <p className="text-center text-gray-400 text-xs">100% Confidential · No fee unless we win · Available 24/7</p>
              </form>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-xl font-black text-[#111827] mb-6">Personal Injury FAQ</h2>
              <div className="space-y-5">
                {faqs.map(([q, a]) => (
                  <div key={q} className="border-b border-gray-100 pb-5">
                    <p className="font-black text-[#111827] mb-2">{q}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
