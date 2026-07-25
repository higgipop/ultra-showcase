// dennishernandez.com: dark hero, case intake form left, what happens next right
import Link from "next/link";

export default function LegalContact() {
  return (
    <div className="bg-white font-sans">
      {/* Top bar */}
      <div className="bg-[#DC2626] text-white text-center py-2 text-sm font-bold">
        YOU PAY NOTHING UNLESS WE WIN · (813) 555-0100 · 24/7 EMERGENCY LINE
      </div>

      {/* Hero */}
      <section className="bg-[#111827] py-14 px-4 text-center">
        <h1 className="text-4xl font-black text-white mb-3">Tell Us What Happened</h1>
        <p className="text-gray-400 text-lg mb-2">FREE CASE EVALUATION — No Obligation · Confidential</p>
        <p className="text-gray-500 text-sm">A licensed attorney reviews every submission. We respond within 1 hour.</p>
      </section>

      {/* Form section */}
      <section className="py-14 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.4fr_1fr] gap-10">
          {/* Form */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
            <h2 className="text-2xl font-black text-gray-900 mb-6">Your Case Information</h2>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">First Name *</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#DC2626] focus:outline-none" placeholder="First name" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Last Name *</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#DC2626] focus:outline-none" placeholder="Last name" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Phone Number *</label>
                  <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#DC2626] focus:outline-none" placeholder="(813) 555-0100" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Email Address</label>
                  <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#DC2626] focus:outline-none" placeholder="you@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Type of Case *</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 focus:ring-2 focus:ring-[#DC2626] focus:outline-none">
                  <option value="">Select case type</option>
                  <option>Personal Injury</option>
                  <option>Car Accident</option>
                  <option>Motorcycle Accident</option>
                  <option>Truck Accident</option>
                  <option>Slip &amp; Fall</option>
                  <option>Medical Malpractice</option>
                  <option>Wrongful Death</option>
                  <option>Business Litigation</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Date of Incident</label>
                <input type="date" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#DC2626] focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Briefly describe what happened *</label>
                <textarea rows={5} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#DC2626] focus:outline-none resize-none" placeholder="Tell us what happened, where it occurred, and the type of injuries or losses you sustained..." />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">How did you hear about us?</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 focus:ring-2 focus:ring-[#DC2626] focus:outline-none">
                  <option value="">Select one</option>
                  <option>Google Search</option>
                  <option>Referral from friend/family</option>
                  <option>TV / Radio</option>
                  <option>Billboard</option>
                  <option>Social Media</option>
                  <option>Prior Client</option>
                  <option>Other Attorney Referral</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-[#DC2626] hover:bg-[#b91c1c] text-white font-black py-5 rounded-xl text-xl transition-colors">
                GET MY FREE CASE EVALUATION
              </button>
              <p className="text-gray-400 text-xs text-center">
                Confidential · No fees unless we win · Available 24/7
              </p>
            </form>
          </div>

          {/* Right side */}
          <div className="space-y-6">
            {/* What happens next */}
            <div className="bg-[#111827] rounded-2xl p-7">
              <h3 className="text-lg font-black text-white mb-6">What Happens Next</h3>
              {[
                { step: "1", title: "We Review Your Submission", body: "A licensed attorney reviews your case details — usually within 1 hour of submission, 24 hours a day." },
                { step: "2", title: "Attorney Contacts You Directly", body: "Jonathan or a senior associate calls you directly. No paralegals, no intake coordinators — the attorney handling your case." },
                { step: "3", title: "Free Consultation", body: "We discuss your case, answer your questions, and give you our honest assessment — all at no cost and no obligation." },
              ].map((s) => (
                <div key={s.step} className="flex gap-5 mb-6 last:mb-0">
                  <div className="w-10 h-10 bg-[#DC2626] rounded-full flex items-center justify-center text-white font-black flex-shrink-0">{s.step}</div>
                  <div>
                    <p className="text-white font-bold mb-1">{s.title}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Confidentiality */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <h3 className="font-black text-gray-900 mb-3">Your Information is Confidential</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Everything you share with us is protected by attorney-client privilege from the moment you submit your case. We will never share your information with anyone outside our firm without your explicit written consent.
              </p>
              <p className="text-gray-500 text-xs">No obligation. Consultation is always free. You owe nothing unless we win.</p>
            </div>

            {/* Phone */}
            <div className="bg-[#DC2626] rounded-2xl p-6 text-center">
              <p className="text-red-100 font-semibold mb-2">Prefer to call? We answer 24/7.</p>
              <a href="tel:8135550100" className="text-4xl font-black text-white hover:underline">(813) 555-0100</a>
              <p className="text-red-200 text-xs mt-2">Emergency line — always answered by a live person</p>
            </div>

            {/* Office info */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="font-black text-gray-900 mb-3">Office Location</h3>
              <p className="text-gray-600 text-sm">100 S. Ashley Drive, Suite 1200<br />Tampa, FL 33602</p>
              <p className="text-gray-500 text-xs mt-3">Mon–Fri 8am–6pm · Emergencies answered 24/7</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
