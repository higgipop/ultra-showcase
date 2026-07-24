import Link from "next/link";

export default function FinancialContactPage() {
  return (
    <div className="bg-white font-sans">
      <div className="h-1 bg-[#1B3A5C]" />

      {/* Hero */}
      <section className="bg-white pt-28 pb-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#1B3A5C] text-xs font-semibold tracking-[0.2em] uppercase mb-5">Get Started</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6" style={{fontFamily: "Georgia, serif"}}>
            Schedule a Consultation
          </h1>
          <p className="text-gray-500 text-xl leading-relaxed max-w-2xl">
            No obligation. No sales pitch. A 30-minute conversation to understand where you are, where you want to go, and whether we&rsquo;re the right fit.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2 bg-white border border-gray-100 rounded-lg shadow-sm p-8">
            <h2 className="font-bold text-[#111827] text-2xl mb-6" style={{fontFamily: "Georgia, serif"}}>
              Consultation Request
            </h2>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">First Name</label>
                  <input type="text" className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Last Name</label>
                  <input type="text" className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Email</label>
                  <input type="email" className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Phone</label>
                  <input type="tel" className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Do you currently work with a financial advisor?</label>
                <select className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]">
                  <option>No, I am looking for my first advisor</option>
                  <option>Yes, but I am considering a change</option>
                  <option>Yes, and I may want to add a second opinion</option>
                  <option>I work with a broker, not an RIA</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Approximate Investable Assets</label>
                <select className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]">
                  <option>Under $500,000</option>
                  <option>$500,000 – $1,000,000</option>
                  <option>$1,000,000 – $2,500,000</option>
                  <option>$2,500,000 – $5,000,000</option>
                  <option>$5,000,000+</option>
                  <option>Prefer not to say</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Primary Concern or Goal</label>
                <select className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]">
                  <option>Retirement income planning</option>
                  <option>Investment management</option>
                  <option>Tax planning & optimization</option>
                  <option>Estate planning coordination</option>
                  <option>Business exit / liquidity event</option>
                  <option>Comprehensive financial plan</option>
                  <option>Other / Not sure yet</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Preferred Contact Time</label>
                <select className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]">
                  <option>Mornings (9am – 12pm)</option>
                  <option>Afternoons (12pm – 4pm)</option>
                  <option>End of day (4pm – 5:30pm)</option>
                  <option>Flexible — any time works</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Anything else you&rsquo;d like us to know?</label>
                <textarea rows={3} placeholder="Optional — share any context that would help us prepare for our conversation." className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A5C] resize-none" />
              </div>
              <button className="w-full bg-[#1B3A5C] hover:bg-[#142D47] text-white font-semibold py-4 rounded transition-colors">
                Submit Consultation Request
              </button>
              <p className="text-gray-400 text-xs text-center">We respond within one business day. No obligation — this is just a conversation.</p>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-5">
            {/* What happens next */}
            <div className="border border-gray-100 rounded-lg p-6">
              <h3 className="font-bold text-[#111827] mb-5" style={{fontFamily: "Georgia, serif"}}>What Happens Next</h3>
              <div className="space-y-5">
                {[
                  { n: "1", title: "We review your request", body: "An advisor personally reviews your submission and prepares for your specific situation." },
                  { n: "2", title: "We reach out to schedule", body: "Within one business day, we contact you to schedule a 30-minute call at a time that works for you." },
                  { n: "3", title: "The introductory call", body: "No agenda but yours. We listen, answer questions, and share how we work — honestly, including whether we&rsquo;re the right fit." },
                ].map((item) => (
                  <div key={item.n} className="flex gap-4">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1B3A5C] text-white flex items-center justify-center font-bold text-xs">
                      {item.n}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-[#111827] mb-0.5">{item.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* No pressure */}
            <div className="bg-[#F8FAFC] border border-gray-100 rounded-lg p-6">
              <h3 className="font-bold text-[#111827] mb-2">No obligation. Ever.</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our introductory calls are informational conversations. We will not pressure you. If we&rsquo;re not the right fit, we&rsquo;ll tell you — and we may even be able to refer you to an advisor who is better suited to your situation.
              </p>
            </div>

            {/* Disclosure */}
            <div className="border border-gray-100 rounded-lg p-5">
              <p className="text-xs text-gray-400 leading-relaxed">
                Hargrove Wealth Advisors, LLC is an SEC-registered investment advisor. Our ADV Part 2 is available upon request or at{" "}
                <span className="text-[#1B3A5C] underline cursor-pointer">adviserinfo.sec.gov</span>. Registration does not imply a certain level of skill or training.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
