import Link from "next/link";

export default function LegalContact() {
  return (
    <div className="bg-white font-sans">
      <div className="bg-[#DC2626] text-white text-center text-sm py-2 font-bold">
        FREE CASE EVALUATION · No Fee Unless We Win · <a href="tel:8132617700" className="underline">(813) 261-7700</a>
      </div>
      <nav className="bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-white text-xl">GARCIA<span className="text-[#DC2626]">LAW</span></Link>
          <div className="hidden lg:flex gap-6 text-sm font-semibold text-gray-300">
            <Link href="practice-areas" className="hover:text-white">Practice Areas</Link>
            <Link href="about" className="hover:text-white">Attorneys</Link>
          </div>
          <Link href="contact" className="bg-[#DC2626] text-white font-black px-4 py-2 rounded text-sm">FREE CASE REVIEW</Link>
        </div>
      </nav>

      {/* Dark header */}
      <section className="relative min-h-[35vh] flex items-end overflow-hidden">
        <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1800&q=80&auto=format&fit=crop" alt="Attorney" className="absolute inset-0 w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/80 to-[#111827]/30" />
        <div className="relative max-w-7xl mx-auto px-4 pb-12 w-full text-center">
          <h1 className="text-3xl font-black text-white mb-2">Free Case Evaluation</h1>
          <p className="text-gray-300 text-lg">Tell us what happened. An attorney will call you within 1 hour.</p>
        </div>
      </section>

      {/* Two-column: form left, what happens next right */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Case intake form — 2 cols */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-black text-[#111827] mb-6">Tell Us About Your Case</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">First Name *</label>
                  <input className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#DC2626]" placeholder="First" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Last Name *</label>
                  <input className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#DC2626]" placeholder="Last" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Phone *</label>
                  <input type="tel" className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#DC2626]" placeholder="(813) XXX-XXXX" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Email</label>
                  <input type="email" className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#DC2626]" placeholder="Optional" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Type of Case *</label>
                <select className="border border-gray-200 rounded-lg px-4 py-3 text-base bg-white w-full focus:outline-none focus:border-[#DC2626] text-gray-700">
                  <option>Select your case type</option>
                  <option>Car Accident</option>
                  <option>Truck / Commercial Vehicle Accident</option>
                  <option>Motorcycle Accident</option>
                  <option>Slip & Fall</option>
                  <option>Medical Malpractice</option>
                  <option>Wrongful Death</option>
                  <option>Product Liability</option>
                  <option>Business Dispute</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">When Did This Happen?</label>
                <input type="date" className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#DC2626] text-gray-700" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Describe What Happened *</label>
                <textarea className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full h-36 resize-none focus:outline-none focus:border-[#DC2626]" placeholder="Please describe the incident, your injuries, and any information about the other party involved." />
              </div>
              <button type="submit" className="bg-[#DC2626] hover:bg-red-700 text-white font-black px-8 py-4 rounded w-full text-lg transition-colors">SUBMIT MY FREE CASE EVALUATION →</button>
              <p className="text-center text-gray-400 text-xs">Confidential · No obligation · We do not share your information</p>
            </form>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            {/* What happens next */}
            <div>
              <h3 className="font-black text-[#111827] mb-5 text-sm uppercase tracking-widest">What Happens Next</h3>
              <div className="space-y-5">
                {[
                  { num: "1", title: "Attorney Calls You", body: "An attorney (not a paralegal or intake person) will call you within 1 hour of submitting." },
                  { num: "2", title: "Free Case Review", body: "We review the facts, assess your damages, and tell you honestly whether you have a viable case." },
                  { num: "3", title: "We Take Over", body: "If we take your case, we handle everything — investigation, doctors, negotiations, and trial if necessary." },
                ].map((step) => (
                  <div key={step.num} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white text-sm font-black flex items-center justify-center flex-shrink-0">{step.num}</span>
                    <div>
                      <p className="font-bold text-[#111827] text-sm">{step.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Confidentiality */}
            <div className="bg-[#F8F9FA] border border-gray-200 rounded-xl p-5">
              <p className="font-bold text-[#111827] text-sm mb-2">Attorney-Client Confidentiality</p>
              <p className="text-gray-500 text-xs leading-relaxed">All communications with Garcia Law are protected by attorney-client privilege, whether or not you retain us. Your information is never shared.</p>
            </div>

            {/* Office info */}
            <div>
              <p className="font-black text-[#111827] text-sm uppercase tracking-widest mb-4">Our Office</p>
              <p className="font-semibold text-gray-700 text-sm">4220 W. Boy Scout Blvd., Suite 800</p>
              <p className="text-gray-500 text-sm">Tampa, FL 33607</p>
              <p className="text-[#DC2626] font-black text-xl mt-2">(813) 261-7700</p>
              <p className="text-gray-400 text-xs mt-1">Available 24 hours · 7 days a week</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
