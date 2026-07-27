import Link from "next/link";

export default function BusinessLitigation() {
  return (
    <div className="bg-white font-sans">
      <div className="bg-[#111827] text-white text-center text-sm py-2 font-semibold">
        Commercial Litigation · Business Disputes · Contract Law · <a href="tel:8135550300" className="text-[#DC2626] font-bold underline">(813) 555-0300</a>
      </div>
      <nav className="bg-[#111827] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-white text-xl">GARCIA<span className="text-[#DC2626]">LAW</span></Link>
          <div className="hidden lg:flex gap-6 text-sm font-semibold text-gray-300">
            <Link href="practice-areas" className="hover:text-white">Practice Areas</Link>
            <Link href="personal-injury" className="hover:text-white">Personal Injury</Link>
            <Link href="business-litigation" className="text-white">Business</Link>
            <Link href="about" className="hover:text-white">Attorneys</Link>
          </div>
          <Link href="contact" className="border border-white/30 hover:border-white text-white font-bold px-4 py-2 rounded text-sm transition-colors">Request Consultation</Link>
        </div>
      </nav>

      {/* Professional white hero */}
      <section className="border-b border-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#DC2626] text-xs font-bold uppercase tracking-[0.25em] mb-4">Business Litigation</p>
            <h1 className="text-4xl lg:text-5xl font-black text-[#111827] leading-tight mb-5">
              Aggressive Business Dispute Resolution
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Contract disputes, partnership disagreements, and commercial fraud require attorneys who understand both the law and the business stakes. Garcia Law has recovered over $50M for business clients.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="contact" className="bg-[#111827] hover:bg-[#DC2626] text-white font-black px-8 py-4 rounded transition-colors">Request Consultation</Link>
              <a href="tel:8135550300" className="border-2 border-[#111827] text-[#111827] font-bold px-8 py-4 rounded hover:bg-[#111827] hover:text-white transition-colors">(813) 555-0300</a>
            </div>
          </div>
          {/* Photo + stats */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden aspect-video">
              <img src="https://images.unsplash.com/photo-1560472355-536de3962603?w=1200&q=80&auto=format&fit=crop" alt="Business meeting" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[["$50M+","Recovered"],["200+","Cases won"],["25 yrs","Experience"],["95%","Satisfaction"]].map(([num, label]) => (
                <div key={label} className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
                  <p className="text-2xl font-black text-[#DC2626] mb-0.5">{num}</p>
                  <p className="text-gray-500 text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practice areas */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-[#111827] mb-8">What We Handle</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Breach of Contract", desc: "Whether you're the breaching party or the victim, we handle contract disputes with urgency and precision. We've litigated contracts from $50K to $10M+.", wins: "Best result: $4.2M" },
              { title: "Partnership & Shareholder Disputes", desc: "Deadlocked partnerships, minority shareholder oppression, and business divorce are complex — and expensive if mishandled. We resolve them efficiently.", wins: "Best result: $2.8M" },
              { title: "Non-Compete & Trade Secret", desc: "Enforcing or defending non-compete agreements, trade secret misappropriation, and unfair competition requires both speed and legal precision.", wins: "Emergency injunctions obtained" },
              { title: "Business Fraud", desc: "Fraudulent misrepresentation in business transactions, securities fraud, and professional negligence. We pursue compensatory and punitive damages.", wins: "Best result: $3.1M" },
              { title: "Commercial Real Estate Disputes", desc: "Lease disputes, purchase agreement breaches, construction defects, and landlord-tenant commercial matters.", wins: "Best result: $1.9M" },
              { title: "Collections & Creditors Rights", desc: "Unpaid invoices, judgments, and debt collection for commercial creditors. We move fast to protect your right to recover.", wins: "Average recovery: 87%" },
            ].map((item) => (
              <div key={item.title} className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <h3 className="font-black text-[#111827] text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.desc}</p>
                <p className="text-[#DC2626] text-xs font-bold">{item.wins}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business case results */}
      <section className="bg-[#111827] py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-black text-white mb-6">Business Case Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { amount: "$4.2M", desc: "Breach of distribution contract" },
              { amount: "$3.1M", desc: "Business acquisition fraud" },
              { amount: "$2.8M", desc: "Partnership dissolution" },
              { amount: "$1.9M", desc: "Commercial lease dispute" },
            ].map((c) => (
              <div key={c.amount} className="border border-white/10 rounded-xl p-5">
                <p className="font-black text-[#DC2626] text-3xl mb-1">{c.amount}</p>
                <p className="text-white/50 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-white/20 text-xs mt-4">Past results do not guarantee future outcomes.</p>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-[#111827] mb-4">Request a Business Consultation</h2>
          <p className="text-gray-500 mb-8">Business disputes move fast. The sooner we get involved, the better position you are in.</p>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#111827]" placeholder="Your Name" />
            <input className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#111827]" placeholder="Company Name" />
            <input type="email" className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#111827]" placeholder="Work Email" />
            <input type="tel" className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#111827]" placeholder="Phone Number" />
            <select className="border border-gray-200 rounded-lg px-4 py-3 text-base bg-white w-full focus:outline-none focus:border-[#111827] text-gray-700 sm:col-span-2">
              <option>Type of Business Dispute</option>
              <option>Breach of Contract</option>
              <option>Partnership / Shareholder Dispute</option>
              <option>Non-Compete / Trade Secret</option>
              <option>Business Fraud</option>
              <option>Commercial Real Estate</option>
              <option>Other</option>
            </select>
            <textarea className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full h-28 resize-none focus:outline-none focus:border-[#111827] sm:col-span-2" placeholder="Briefly describe your dispute and what outcome you need" />
            <button type="submit" className="sm:col-span-2 bg-[#111827] hover:bg-[#DC2626] text-white font-black px-8 py-4 rounded text-base transition-colors">Submit Consultation Request →</button>
          </form>
        </div>
      </section>
    </div>
  );
}
