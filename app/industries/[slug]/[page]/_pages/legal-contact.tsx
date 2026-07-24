import Link from "next/link";

export default function LegalContactPage() {
  return (
    <div className="bg-white font-sans">
      <div style={{backgroundColor: "#0C2340", color: "#C9A84C"}} className="text-center text-xs py-2.5 tracking-widest font-semibold uppercase">
        Available 24/7 for Emergencies · Free Case Reviews · (813) 555-0100
      </div>

      {/* Hero */}
      <section style={{backgroundColor: "#0C2340"}} className="pt-24 pb-20 relative overflow-hidden">
        <div style={{clipPath: "polygon(0 100%, 100% 80%, 100% 100%)", backgroundColor: "white"}} className="absolute bottom-0 left-0 right-0 h-20" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p style={{color: "#C9A84C"}} className="text-xs font-semibold tracking-[0.2em] uppercase mb-4">Free Case Evaluation</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{fontFamily: "Georgia, serif"}}>
                Tell Us What Happened.
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                We&rsquo;ll review your case at no charge. An attorney — not a paralegal — will contact you within 24 hours to discuss your options.
              </p>
              <div className="space-y-3">
                {["100% confidential — attorney-client privilege applies", "No obligation — free consultation is truly free", "Attorney response within 24 business hours", "Available in English and Spanish"].map((p) => (
                  <div key={p} className="flex items-center gap-3">
                    <span style={{color: "#C9A84C"}} className="font-bold text-lg">✓</span>
                    <span className="text-white/70 text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Contact card */}
            <div className="bg-white rounded-xl shadow-2xl p-8">
              <p style={{color: "#C9A84C"}} className="text-xs font-bold uppercase tracking-widest mb-2">Need to talk now?</p>
              <a href="tel:8135550100" className="text-3xl font-black hover:underline" style={{color: "#0C2340"}}>(813) 555-0100</a>
              <p className="text-gray-400 text-sm mt-1 mb-6">Available 24/7 for emergencies</p>
              <div className="border-t border-gray-100 pt-6 space-y-2 text-sm text-gray-500">
                <p>📍 1234 N. Tampa Street, Suite 800, Tampa FL 33602</p>
                <p>📠 (813) 555-0101</p>
                <p>✉️ intake@firmname.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          {/* Form — takes 2 cols */}
          <div className="lg:col-span-2 bg-gray-50 rounded-2xl border border-gray-100 p-8">
            <h2 className="font-bold text-2xl mb-6" style={{color: "#0C2340", fontFamily: "Georgia, serif"}}>Case Intake Form</h2>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">First Name</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C2340]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Last Name</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C2340]" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Phone</label>
                  <input type="tel" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C2340]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Email</label>
                  <input type="email" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C2340]" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Case Type</label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C2340]">
                  <option>Personal Injury / Auto Accident</option>
                  <option>Wrongful Death</option>
                  <option>Business / Commercial Dispute</option>
                  <option>Family Law / Divorce</option>
                  <option>Estate Planning</option>
                  <option>Real Estate</option>
                  <option>Employment Law</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Date of Incident (if applicable)</label>
                <input type="date" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C2340]" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Describe Your Situation</label>
                <textarea rows={5} placeholder="Please provide as much detail as possible about your legal matter..." className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C2340] resize-none" />
              </div>
              <p className="text-gray-400 text-xs">By submitting this form, you acknowledge that attorney-client privilege does not attach until a representation agreement is signed. Information submitted is kept strictly confidential.</p>
              <button className="w-full font-bold py-4 rounded-lg transition-opacity hover:opacity-90 text-white" style={{backgroundColor: "#0C2340"}}>
                Submit for Free Case Review
              </button>
            </div>
          </div>

          {/* What to expect */}
          <div className="space-y-5">
            <div className="border border-gray-100 rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-5" style={{color: "#0C2340", fontFamily: "Georgia, serif"}}>What to Expect</h3>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Submit Your Case", body: "Fill out the form with as much detail as you can. Everything you share is 100% confidential." },
                  { step: "2", title: "Attorney Review", body: "An attorney reviews your case within 24 business hours — not a paralegal or intake coordinator." },
                  { step: "3", title: "Free Consultation Call", body: "We call to discuss your situation, answer your questions, and tell you honestly what your options are." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm text-white" style={{backgroundColor: "#C9A84C"}}>
                      {item.step}
                    </div>
                    <div>
                      <p className="font-bold text-sm mb-1" style={{color: "#0C2340"}}>{item.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Confidentiality */}
            <div className="rounded-2xl p-6" style={{backgroundColor: "#0C2340"}}>
              <h3 className="font-bold text-white mb-2">🔒 Strictly Confidential</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Everything you share with our team is protected by attorney-client confidentiality from the moment you submit. We never share your information.
              </p>
            </div>

            <div className="text-center p-4 border border-gray-100 rounded-2xl">
              <p className="text-gray-400 text-xs">Have an urgent matter?</p>
              <a href="tel:8135550100" className="text-2xl font-black" style={{color: "#0C2340"}}>(813) 555-0100</a>
              <p className="text-gray-400 text-xs mt-1">Available 24 hours, 7 days</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
