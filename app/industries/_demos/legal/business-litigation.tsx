// dennishernandez.com: same 2-col layout adapted for business disputes, sidebar case wins, FAQ
import Link from "next/link";

const caseWins = [
  { amount: "$8,000,000", type: "Breach of Contract" },
  { amount: "$6,000,000", type: "Securities Fraud" },
  { amount: "$4,000,000", type: "Partnership Dispute" },
  { amount: "$2,200,000", type: "Business Tort" },
  { amount: "$1,500,000", type: "Non-Compete Violation" },
];

const faqs = [
  { q: "When does a business dispute need a litigator?", a: "When negotiation and demand letters have failed, when the other party is in clear breach, when your business is being harmed by ongoing misconduct, or when injunctive relief is needed immediately." },
  { q: "How long does business litigation typically take?", a: "Simple commercial cases may resolve in 6–12 months. Complex multi-party disputes can take 2–4 years through trial. Many cases settle before reaching trial with skilled counsel." },
  { q: "What does contingency fee mean for business cases?", a: "For qualifying commercial disputes, we handle cases on contingency — no fees unless we recover money for your business. We'll discuss fee structure during a free consultation." },
  { q: "Can I recover my attorney's fees?", a: "In some business cases — particularly those involving contracts with fee-shifting provisions or statutory claims — yes. We identify fee-recovery opportunities in every case." },
  { q: "What evidence is most important in a breach of contract case?", a: "The written contract, all communications (email, text, Slack), invoices and payments, and documentation of the harm caused. Preserve all records immediately." },
  { q: "Should I try arbitration before suing?", a: "Many business contracts include mandatory arbitration clauses. We review your contract and advise whether litigation or arbitration is the better path — and how to navigate either." },
];

export default function LegalBusinessLitigation() {
  return (
    <div className="bg-white font-sans">
      {/* Top bar */}
      <div className="bg-[#DC2626] text-white text-center py-2 text-sm font-bold">
        AGGRESSIVE BUSINESS LITIGATION · (813) 555-0100 · FREE CONSULTATION
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100 py-3 px-4">
        <div className="max-w-7xl mx-auto text-sm text-gray-500">
          <Link href="home" className="hover:text-[#DC2626]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="practice-areas" className="hover:text-[#DC2626]">Practice Areas</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900 font-semibold">Business Litigation</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-[1fr_340px] gap-10">
          {/* Main */}
          <div>
            <h1 className="text-4xl font-black text-gray-900 mb-6">Business Litigation Attorney in Tampa, FL</h1>

            <div className="bg-[#FEF2F2] border border-[#FCA5A5] rounded-xl px-6 py-4 mb-8">
              <p className="text-[#DC2626] font-black text-lg">$20M+ recovered in commercial disputes · No fees unless we win qualifying cases</p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              When a business partner, vendor, competitor, or customer causes financial harm to your company, you need experienced litigation counsel who knows how to protect your interests — and fight to recover your losses. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <h2 className="text-2xl font-black text-gray-900 mb-4">Business Disputes We Handle</h2>
            <ul className="grid sm:grid-cols-2 gap-2 mb-8">
              {["Breach of contract", "Partnership and shareholder disputes", "Business fraud and misrepresentation", "Breach of fiduciary duty", "Non-compete and trade secret violations", "Tortious interference", "Securities fraud", "Business defamation", "Vendor/supplier disputes", "Employment-related business claims", "Real estate business disputes", "Unfair business practices"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-[#DC2626] font-black mt-0.5">✓</span> {item}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-black text-gray-900 mb-4">What Damages Can Your Business Recover?</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { label: "Direct Economic Losses", items: ["Lost profits and revenue", "Cost to cure breach", "Contract price owed", "Consequential damages", "Lost business opportunities"] },
                { label: "Additional Recovery", items: ["Punitive damages (for fraud)", "Attorney fees (where applicable)", "Pre-judgment interest", "Injunctive relief", "Restitution of wrongful gains"] },
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

            <h2 className="text-2xl font-black text-gray-900 mb-4">Our Litigation Process</h2>
            <div className="grid sm:grid-cols-3 gap-5 mb-10">
              {[
                { step: "01", title: "Free Case Analysis", body: "We review your contracts, documentation, and losses. We give you an honest assessment of your claim's strength and recovery potential." },
                { step: "02", title: "Demand & Discovery", body: "We send formal demand letters, pursue pre-suit negotiation, and if needed, file suit and conduct aggressive discovery — depositions, document production, expert witnesses." },
                { step: "03", title: "Settlement or Trial", body: "Most cases settle in mediation. When they don't, we're ready to try your case. Our trial record speaks for itself." },
              ].map((s) => (
                <div key={s.step} className="border border-gray-100 rounded-xl p-6">
                  <p className="text-4xl font-black text-[#DC2626] mb-3">{s.step}</p>
                  <h3 className="font-black text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <h2 className="text-3xl font-black text-gray-900 mb-8">Business Litigation FAQ</h2>
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
            <div className="bg-[#111827] rounded-2xl p-6">
              <p className="text-[#DC2626] text-xs font-black uppercase tracking-widest mb-4">Business Case Wins</p>
              {caseWins.map((w) => (
                <div key={w.amount} className="border-b border-white/10 py-3 last:border-0 last:pb-0">
                  <p className="text-[#DC2626] font-black text-2xl">{w.amount}</p>
                  <p className="text-gray-400 text-xs">{w.type}</p>
                </div>
              ))}
            </div>

            <div className="bg-white border-2 border-[#DC2626] rounded-2xl p-6">
              <h3 className="text-xl font-black text-gray-900 mb-1">FREE CASE EVALUATION</h3>
              <p className="text-gray-500 text-xs mb-5">No obligation · Senior attorney reviews your case · Confidential</p>
              <form className="space-y-3">
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#DC2626] focus:outline-none" placeholder="Your Full Name" />
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#DC2626] focus:outline-none" placeholder="Company Name" />
                <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#DC2626] focus:outline-none" placeholder="Phone Number" />
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 focus:ring-2 focus:ring-[#DC2626] focus:outline-none">
                  <option>Type of Dispute</option>
                  <option>Breach of Contract</option>
                  <option>Business Fraud</option>
                  <option>Partnership Dispute</option>
                  <option>Non-Compete Violation</option>
                  <option>Other Business Claim</option>
                </select>
                <button type="submit" className="w-full bg-[#DC2626] hover:bg-[#b91c1c] text-white font-black py-4 rounded-xl transition-colors">
                  GET FREE CONSULTATION
                </button>
              </form>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center">
              <p className="text-gray-500 text-sm mb-2">Direct line — business matters</p>
              <a href="tel:8135550100" className="text-3xl font-black text-[#DC2626] hover:underline">(813) 555-0100</a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#DC2626] py-14 text-center px-4">
        <h2 className="text-3xl font-black text-white mb-3">Your Business Deserves Aggressive Representation</h2>
        <p className="text-red-100 text-lg mb-8">Every day you wait, evidence disappears. Call today for a free case analysis.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="contact" className="bg-white text-[#DC2626] font-black px-10 py-4 rounded text-xl hover:bg-gray-100 transition-colors">FREE CONSULTATION</Link>
          <a href="tel:8135550100" className="border-2 border-white text-white font-black px-10 py-4 rounded text-xl hover:bg-white hover:text-[#DC2626] transition-colors">(813) 555-0100</a>
        </div>
      </div>
    </div>
  );
}
