// dennishernandez.com: 2-col layout, sidebar with case wins + form, 11 FAQ as linked headings
import Link from "next/link";

const caseWins = [
  { amount: "$17,000,000", type: "Motorcycle Accident" },
  { amount: "$15,000,000", type: "Auto Accident" },
  { amount: "$7,000,000", type: "Trucking Accident" },
  { amount: "$4,250,000", type: "Slip & Fall" },
  { amount: "$3,000,000", type: "Wrongful Death" },
];

const faqs = [
  { q: "How much does a personal injury lawyer cost?", a: "Nothing upfront. We work on a contingency fee basis — you pay nothing unless we win your case. Our fee comes as a percentage of your settlement or verdict." },
  { q: "How long will my case take to settle?", a: "Most cases settle within 6–18 months. Complex cases involving serious injuries, multiple parties, or litigation may take longer. We'll give you a realistic timeline after reviewing your case." },
  { q: "What if I was partially at fault for the accident?", a: "Florida follows a comparative negligence rule, meaning you can still recover damages even if you were partially at fault — your recovery is simply reduced by your percentage of fault." },
  { q: "What damages can I recover in a personal injury case?", a: "Medical expenses (past and future), lost wages, loss of earning capacity, pain and suffering, emotional distress, loss of enjoyment of life, and property damage." },
  { q: "How do I know if I have a case?", a: "If someone else's negligence caused your injury, you likely have a case. The best way to find out is a free consultation with our attorneys — we'll tell you honestly whether you have a viable claim." },
  { q: "What should I do immediately after an accident?", a: "Seek medical care first. Then document the scene with photos, get witness contact info, don't give statements to insurance companies, and contact us as soon as possible." },
  { q: "Will my case go to trial?", a: "Most personal injury cases settle before trial. However, we prepare every case as if it will go to trial — this is why insurance companies often offer larger settlements to our clients." },
  { q: "How do I pay my medical bills while my case is pending?", a: "Many of our clients use their health insurance, MedPay coverage, or letters of protection that allow doctors to treat you and wait for payment from the settlement." },
  { q: "What is the statute of limitations in Florida?", a: "Florida law generally gives you two years from the date of your injury to file a personal injury lawsuit. Waiting too long can bar you from recovering any compensation." },
  { q: "Can I still file if the accident was months ago?", a: "Yes, if you're still within the statute of limitations. However, evidence disappears and memories fade — the sooner you contact us, the stronger your case." },
  { q: "What makes your firm different from other injury attorneys?", a: "Direct attorney access — you'll speak with the attorney handling your case, not a case manager. $50M+ recovered. 1,429 five-star reviews. Harvard Law education. 29 years of experience." },
];

const relatedAreas = ["Car Accidents", "Motorcycle Accidents", "Slip & Fall", "Wrongful Death", "Medical Malpractice", "Business Litigation"];

export default function LegalPersonalInjury() {
  return (
    <div className="bg-white font-sans">
      {/* Top bar */}
      <div className="bg-[#DC2626] text-white text-center py-2 text-sm font-bold">
        YOU PAY NOTHING UNLESS WE WIN · (813) 555-0100 · 24/7
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100 py-3 px-4">
        <div className="max-w-7xl mx-auto text-sm text-gray-500">
          <Link href="home" className="hover:text-[#DC2626]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="practice-areas" className="hover:text-[#DC2626]">Practice Areas</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900 font-semibold">Personal Injury</span>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-[1fr_340px] gap-10">
          {/* Main */}
          <div>
            <h1 className="text-4xl font-black text-gray-900 mb-6">Personal Injury Attorney in Tampa, FL</h1>

            <div className="bg-[#FEF2F2] border border-[#FCA5A5] rounded-xl px-6 py-4 mb-8">
              <p className="text-[#DC2626] font-black text-lg">$50M+ recovered · 1,429 five-star reviews · No fees unless we win</p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              If you&apos;ve been seriously injured through someone else&apos;s negligence, you may be entitled to significant compensation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Our personal injury attorneys have recovered over $50 million for injured clients across Tampa Bay.
            </p>

            <h2 className="text-2xl font-black text-gray-900 mb-4">Types of Personal Injury Cases We Handle</h2>
            <ul className="grid sm:grid-cols-2 gap-2 mb-8">
              {["Motor vehicle accidents", "Motorcycle accidents", "Truck and semi-trailer accidents", "Slip and fall accidents", "Premises liability", "Dog bites and animal attacks", "Medical malpractice", "Wrongful death", "Workplace injuries", "Defective product injuries", "Rideshare accidents (Uber/Lyft)", "Pedestrian and bicycle accidents"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-[#DC2626] font-black mt-0.5">✓</span> {item}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-black text-gray-900 mb-4">What Damages Can I Recover?</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { label: "Economic Damages", items: ["Medical expenses (current & future)", "Lost wages and income", "Loss of earning capacity", "Property damage", "Out-of-pocket costs"] },
                { label: "Non-Economic Damages", items: ["Pain and suffering", "Emotional distress", "Loss of enjoyment of life", "Loss of consortium", "Disability and disfigurement"] },
              ].map((col) => (
                <div key={col.label} className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-black text-gray-900 mb-3 text-sm uppercase tracking-wider">{col.label}</h3>
                  <ul className="space-y-1.5">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-[#DC2626] font-black">·</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-black text-gray-900 mb-4">Our 3-Step Process</h2>
            <div className="grid sm:grid-cols-3 gap-5 mb-10">
              {[
                { step: "01", title: "Free Consultation", body: "We review your case at no cost. If we can help, we take your case immediately — no retainer, no upfront fees." },
                { step: "02", title: "We Investigate & Build", body: "Our team gathers evidence, secures expert witnesses, negotiates with insurance companies, and prepares for trial." },
                { step: "03", title: "You Get Paid", body: "We settle or try your case for maximum compensation. Our fee comes from the recovery — you owe nothing if we don't win." },
              ].map((s) => (
                <div key={s.step} className="border border-gray-100 rounded-xl p-6">
                  <p className="text-4xl font-black text-[#DC2626] mb-3">{s.step}</p>
                  <h3 className="font-black text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-black text-gray-900 mb-4">Why Choose Us?</h2>
            <ul className="space-y-3 mb-12">
              {["Direct access to your attorney — not paralegals or case managers", "Harvard Law education, 29 years of courtroom experience", "We prepare every case as if it will go to trial", "No settlement without your approval", "Available 24/7 by phone for urgent questions"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="text-[#DC2626] font-black text-xl leading-tight">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* FAQ */}
            <h2 className="text-3xl font-black text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {faqs.map((faq) => (
                <div key={faq.q}>
                  <h3 className="text-lg font-black text-gray-900 mb-2 hover:text-[#DC2626] cursor-pointer transition-colors">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Case wins */}
            <div className="bg-[#111827] rounded-2xl p-6">
              <p className="text-[#DC2626] text-xs font-black uppercase tracking-widest mb-4">Our Case Wins</p>
              {caseWins.map((w) => (
                <div key={w.amount} className="border-b border-white/10 py-3 last:border-0 last:pb-0">
                  <p className="text-[#DC2626] font-black text-2xl">{w.amount}</p>
                  <p className="text-gray-400 text-xs">{w.type}</p>
                </div>
              ))}
            </div>

            {/* Mini form */}
            <div className="bg-white border-2 border-[#DC2626] rounded-2xl p-6">
              <h3 className="text-xl font-black text-gray-900 mb-1">FREE CASE EVALUATION</h3>
              <p className="text-gray-500 text-xs mb-5">No obligation · Respond in 1 hour · Confidential</p>
              <form className="space-y-3">
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#DC2626] focus:outline-none" placeholder="Your Full Name" />
                <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#DC2626] focus:outline-none" placeholder="Phone Number" />
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 focus:ring-2 focus:ring-[#DC2626] focus:outline-none">
                  <option>Type of Case</option>
                  <option>Personal Injury</option>
                  <option>Car Accident</option>
                  <option>Motorcycle Accident</option>
                  <option>Slip & Fall</option>
                  <option>Wrongful Death</option>
                </select>
                <button type="submit" className="w-full bg-[#DC2626] hover:bg-[#b91c1c] text-white font-black py-4 rounded-xl transition-colors">
                  SUBMIT FREE REVIEW
                </button>
              </form>
            </div>

            {/* Phone callout */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center">
              <p className="text-gray-500 text-sm mb-2">Available 24 hours a day</p>
              <a href="tel:8135550100" className="text-3xl font-black text-[#DC2626] hover:underline">(813) 555-0100</a>
            </div>
          </div>
        </div>
      </div>

      {/* Related areas */}
      <div className="bg-gray-50 border-t border-gray-100 py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-5 text-center">Related Practice Areas</p>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedAreas.map((a) => (
              <Link key={a} href="practice-areas" className="border border-gray-200 hover:border-[#DC2626] hover:text-[#DC2626] text-gray-700 font-semibold px-5 py-2.5 rounded-full text-sm transition-colors">
                {a}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
