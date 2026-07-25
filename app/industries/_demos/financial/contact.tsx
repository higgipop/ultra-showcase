// elevationwp.com: white, consultation form, what happens next, no-pressure copy, ADV link
import Link from "next/link";

export default function FinancialContact() {
  return (
    <div className="bg-white font-sans">
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="font-bold text-[#1B3060] text-lg">ELEVATION<span className="font-light text-gray-400"> WEALTH</span></div>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-600">
            <Link href="home" className="hover:text-[#1B3060]">Home</Link>
            <Link href="services" className="hover:text-[#1B3060]">Services</Link>
            <Link href="about" className="hover:text-[#1B3060]">Our Advisors</Link>
            <Link href="contact" className="text-[#1B3060] border-b border-[#1B3060]">Contact</Link>
          </div>
          <Link href="contact" className="bg-[#1B3060] text-white font-semibold px-5 py-2.5 rounded text-sm">Let&apos;s Get Started</Link>
        </div>
      </nav>

      <div className="py-14 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1B3060] mb-3">Schedule a Consultation</h1>
          <p className="text-gray-500 text-lg">No obligation. No sales pitch. 30 minutes of your time.</p>
        </div>
      </div>

      <section className="py-14 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.4fr_1fr] gap-10">
          {/* Form */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#1B3060] mb-6">Tell Us About Your Situation</h2>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">First Name *</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#1B3060] focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Last Name *</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#1B3060] focus:outline-none" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Email *</label>
                  <input type="email" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#1B3060] focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Phone</label>
                  <input type="tel" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#1B3060] focus:outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">How did you hear about us?</label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:ring-2 focus:ring-[#1B3060] focus:outline-none">
                  <option value="">Select one</option>
                  <option>Referred by a client</option>
                  <option>Referred by a CPA or attorney</option>
                  <option>Google Search</option>
                  <option>NAPFA Advisor Search</option>
                  <option>CFP Board Advisor Search</option>
                  <option>News article or media</option>
                  <option>Social Media / LinkedIn</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Approximate investable assets *</label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:ring-2 focus:ring-[#1B3060] focus:outline-none">
                  <option value="">Select range</option>
                  <option>Under $250,000</option>
                  <option>$250,000 – $500,000</option>
                  <option>$500,000 – $1 million</option>
                  <option>$1 million – $3 million</option>
                  <option>$3 million – $5 million</option>
                  <option>$5 million+</option>
                  <option>Prefer not to say</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Primary goal or concern</label>
                <textarea rows={3} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#1B3060] focus:outline-none resize-none" placeholder="e.g. Planning for retirement in 5 years, concerned about Social Security timing, recently inherited assets, need a second opinion on my 401(k)..." />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Preferred contact time</label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:ring-2 focus:ring-[#1B3060] focus:outline-none">
                  <option>Morning (8am–12pm)</option>
                  <option>Afternoon (12pm–5pm)</option>
                  <option>No preference</option>
                </select>
              </div>

              <button type="submit" className="w-full bg-[#1B3060] hover:bg-[#152548] text-white font-semibold py-4 rounded-xl transition-colors text-lg">
                Request a Consultation
              </button>

              <p className="text-gray-400 text-xs text-center">
                We typically respond within one business day. Your information is kept confidential.
              </p>
            </form>
          </div>

          {/* Right side */}
          <div className="space-y-5">
            <div className="bg-white border border-gray-100 rounded-2xl p-7">
              <h3 className="font-bold text-[#1B3060] text-lg mb-6">What Happens Next</h3>
              {[
                { num: "01", title: "We Review Your Submission", body: "An advisor reviews your inquiry and reaches out within one business day to confirm a time for your introductory call." },
                { num: "02", title: "30-Minute Introductory Call", body: "We learn about your situation, answer your questions, and give you our honest assessment of whether we can help." },
                { num: "03", title: "You Decide", body: "There is no pressure to engage us. If we are a fit, we explain next steps. If not, we will say so." },
              ].map((s) => (
                <div key={s.num} className="flex gap-5 mb-6 last:mb-0">
                  <span className="font-black text-[#1B3060] text-xl w-8 flex-shrink-0">{s.num}</span>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">{s.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
              <p className="font-bold text-gray-900 mb-3 text-sm">No obligation. No sales pitch. 30 minutes of your time.</p>
              <p className="text-gray-500 text-sm leading-relaxed">Every conversation begins with us listening. We do not recommend anything until we understand your complete financial picture.</p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              <p className="font-bold text-[#1B3060] mb-2 text-sm">Office</p>
              <p className="text-gray-600 text-sm">4200 West Cypress Street, Suite 900<br />Tampa, FL 33607</p>
              <a href="tel:8135550100" className="block mt-3 font-bold text-[#1B3060] hover:underline">(813) 555-0100</a>
              <p className="text-gray-400 text-xs mt-1">Mon–Fri 8am–5pm</p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              <p className="text-gray-500 text-xs leading-relaxed">
                Investment advisory services offered through Elevation Wealth Advisors, LLC, a Registered Investment Adviser. Past performance does not guarantee future results.
                {" "}<Link href="#" className="text-[#1B3060] hover:underline">View our ADV Part 2A disclosure document.</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
