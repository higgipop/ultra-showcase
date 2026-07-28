import Link from "next/link";

export default function FinancialContact() {
  return (
    <div className="bg-white font-sans">
      <nav className="border-b border-gray-100 sticky top-0 z-50 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <Link href="home" className="font-bold text-[#1B2B4B] text-lg tracking-tight">Meridian<span className="font-light text-gray-400"> Wealth</span></Link>
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-500">
            <Link href="services" className="hover:text-[#1B2B4B]">Services</Link>
            <Link href="wealth-management" className="hover:text-[#1B2B4B]">Wealth Management</Link>
            <Link href="about" className="hover:text-[#1B2B4B]">About</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-5">Start a Conversation</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1B2B4B] leading-tight mb-6">Schedule a Complimentary 30-Minute Call</h1>
            <p className="text-gray-500 text-lg leading-relaxed">No pitch. No obligation. We want to understand your situation and give you an honest answer about whether we can help.</p>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-video">
            <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80&auto=format&fit=crop" alt="Financial advisor meeting" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Two-column: form + what happens next */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Form — wider */}
          <div className="lg:col-span-3">
            <h2 className="text-xl font-bold text-[#1B2B4B] mb-6">Tell Us About Your Situation</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">First Name</label>
                  <input className="border border-gray-200 rounded px-4 py-3 text-base w-full focus:outline-none focus:border-[#1B2B4B] text-gray-700" placeholder="First" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Last Name</label>
                  <input className="border border-gray-200 rounded px-4 py-3 text-base w-full focus:outline-none focus:border-[#1B2B4B] text-gray-700" placeholder="Last" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email</label>
                <input type="email" className="border border-gray-200 rounded px-4 py-3 text-base w-full focus:outline-none focus:border-[#1B2B4B] text-gray-700" placeholder="you@email.com" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Phone</label>
                <input type="tel" className="border border-gray-200 rounded px-4 py-3 text-base w-full focus:outline-none focus:border-[#1B2B4B] text-gray-700" placeholder="(813) XXX-XXXX" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Primary Concern</label>
                <select className="border border-gray-200 rounded px-4 py-3 text-base w-full bg-white focus:outline-none focus:border-[#1B2B4B] text-gray-700">
                  <option>Select one</option>
                  <option>Retirement planning</option>
                  <option>Investment management</option>
                  <option>Tax planning</option>
                  <option>Estate planning coordination</option>
                  <option>Approaching retirement (5 years)</option>
                  <option>Already retired</option>
                  <option>Business owner / exit planning</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Approximate Investable Assets</label>
                <select className="border border-gray-200 rounded px-4 py-3 text-base w-full bg-white focus:outline-none focus:border-[#1B2B4B] text-gray-700">
                  <option>Prefer not to say</option>
                  <option>Under $250K</option>
                  <option>$250K – $500K</option>
                  <option>$500K – $1M</option>
                  <option>$1M – $3M</option>
                  <option>$3M+</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Anything Else We Should Know?</label>
                <textarea className="border border-gray-200 rounded px-4 py-3 text-base w-full h-28 resize-none focus:outline-none focus:border-[#1B2B4B] text-gray-700" placeholder="Your situation, questions, or what prompted you to reach out..." />
              </div>
              <button type="submit" className="bg-[#1B2B4B] hover:bg-[#243a63] text-white font-semibold px-8 py-4 w-full text-sm transition-colors">Request a Call</button>
              <p className="text-xs text-gray-400 text-center">By submitting, you consent to being contacted by Meridian Wealth. We do not share your information with third parties.</p>
            </form>
          </div>

          {/* Sidebar — what happens next + info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-lg font-bold text-[#1B2B4B] mb-5">What Happens Next</h2>
              <div className="space-y-4">
                {[
                  ["We Review Your Inquiry","One of our advisors reviews your submission — usually within a few hours on business days."],
                  ["We Reach Out","We call or email to schedule your 30-minute introductory call at a time that works for you."],
                  ["The Call","No pitch. We listen, ask questions, and give you an honest assessment of whether we can help and how."],
                ].map(([title, desc], i) => (
                  <div key={title as string} className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-gray-100 text-[#1B2B4B] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</div>
                    <div>
                      <p className="font-bold text-[#1B2B4B] text-sm mb-1">{title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-gray-100 pt-6 space-y-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Phone</p>
                <p className="text-gray-700">(813) 331-4810</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Email</p>
                <p className="text-gray-700">advice@meridianwealth.com</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Office Hours</p>
                <p className="text-gray-700 text-sm">Monday–Friday, 9am–5pm EST</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Office Address</p>
                <p className="text-gray-700 text-sm">4830 W. Kennedy Blvd., Suite 700<br />Tampa, FL 33609</p>
              </div>
            </div>
            <div className="border border-gray-200 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Regulatory Disclosure</p>
              <p className="text-xs text-gray-400 leading-relaxed">Meridian Wealth Advisors LLC is an SEC-registered investment adviser. Registration does not imply a certain level of skill. Our Form ADV Parts 2A and 2B are available upon request.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
