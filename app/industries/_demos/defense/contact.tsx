// paligentech.com: dark nav, white body, PMO contact form, 3-step what happens next, capability statement PDF, CUI notice
import Link from "next/link";

export default function DefenseContact() {
  return (
    <div className="bg-white font-sans">
      <nav className="bg-[#0F1929] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="font-black text-white text-lg tracking-tight">APEX<span className="text-[#0057FF]">DEFENSE</span></div>
          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-gray-300">
            <Link href="about" className="hover:text-white">About Us</Link>
            <Link href="capabilities" className="hover:text-white">Divisions</Link>
            <Link href="about" className="hover:text-white">Careers</Link>
            <Link href="contact" className="text-white border-b border-white pb-0.5">Contact</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="contact" className="bg-[#0057FF] hover:bg-[#0048d9] text-white font-semibold px-4 py-2 rounded text-sm transition-colors">Contact Us</Link>
          </div>
        </div>
      </nav>

      {/* Dark header */}
      <div className="bg-[#0F1929] py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-black text-white mb-3">Contact Our Program Management Office</h1>
          <p className="text-white/60 text-lg">Program office inquiries, teaming opportunities, and capability briefing requests. Cleared staff respond within one business day.</p>
        </div>
      </div>

      {/* Main content */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.4fr_1fr] gap-10">
          {/* Form */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
            <h2 className="text-xl font-black text-[#0F1929] mb-6">Program Inquiry</h2>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Full Name *</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#0057FF] focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Title / Role</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#0057FF] focus:outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Organization / Agency *</label>
                <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#0057FF] focus:outline-none" placeholder="e.g. AFRL, SOCOM, prime contractor name" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Work Email *</label>
                  <input type="email" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#0057FF] focus:outline-none" placeholder="Use .mil or .gov if applicable" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Work Phone</label>
                  <input type="tel" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#0057FF] focus:outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Program or Opportunity (Unclassified)</label>
                <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#0057FF] focus:outline-none" placeholder="e.g. SOF Aviation Avionics Modernization" />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Contract Vehicle</label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:ring-2 focus:ring-[#0057FF] focus:outline-none">
                  <option value="">Select if known</option>
                  <option>GSA MAS (IT Schedule 70)</option>
                  <option>SEWP V</option>
                  <option>STARS III</option>
                  <option>SeaPort-NxG</option>
                  <option>Open / Full Competition</option>
                  <option>Sole Source / IDIQ Task Order</option>
                  <option>Teaming Inquiry</option>
                  <option>Not Applicable</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Message *</label>
                <textarea rows={4} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#0057FF] focus:outline-none resize-none" placeholder="Describe the program, capability need, or teaming opportunity. Do not include classified information." />
              </div>

              <button type="submit" className="w-full bg-[#0F1929] hover:bg-[#0057FF] text-white font-bold py-4 rounded-xl transition-colors text-sm">
                Submit to Program Office
              </button>

              <div className="flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-xl p-4">
                <span className="text-amber-500 text-lg flex-shrink-0">⚠</span>
                <p className="text-amber-800 text-xs leading-relaxed">
                  <strong>Security Notice:</strong> Do not transmit Controlled Unclassified Information (CUI), FOUO, or classified information via this form. For classified program inquiries, contact our Program Security Officer (PSO) directly at the phone number below.
                </p>
              </div>
            </form>
          </div>

          {/* Right column */}
          <div className="space-y-5">
            {/* What happens next */}
            <div className="bg-white border border-gray-100 rounded-2xl p-7">
              <h3 className="font-black text-[#0F1929] text-lg mb-6">What Happens Next</h3>
              {[
                { num: "01", title: "PMO Review", body: "Your inquiry goes directly to our Program Management Office. A cleared program lead reviews it within one business day." },
                { num: "02", title: "Capability Briefing", body: "We schedule a call or in-person briefing appropriate to the program sensitivity. NDA available upon request." },
                { num: "03", title: "Teaming or Proposal", body: "For teaming requests, we move quickly — we understand RFP timelines. For direct opportunities, we assess fit and provide a response plan." },
              ].map((s) => (
                <div key={s.num} className="flex gap-5 mb-6 last:mb-0">
                  <span className="font-black text-[#0057FF] text-xl w-8 flex-shrink-0">{s.num}</span>
                  <div>
                    <p className="font-bold text-gray-900 mb-1 text-sm">{s.title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Capability Statement */}
            <div className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-6">
              <h3 className="font-black text-[#0F1929] mb-2 text-sm">Capability Statement</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">Download our one-page unclassified capability statement including NAICS codes, contract vehicles, cage code, and facility clearance.</p>
              <Link href="contact" className="block w-full text-center border-2 border-[#0057FF] text-[#0057FF] font-bold py-3 rounded-xl text-sm hover:bg-[#0057FF] hover:text-white transition-colors">
                Download Capability Statement (PDF)
              </Link>
            </div>

            {/* SAM.gov */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              <h3 className="font-black text-[#0F1929] mb-2 text-sm">SAM.gov Registration</h3>
              <div className="space-y-1 text-xs text-gray-600">
                <p><span className="font-bold text-gray-900">CAGE Code:</span> 7XE19</p>
                <p><span className="font-bold text-gray-900">DUNS / UEI:</span> LTMKQ6CXMJP3</p>
                <p><span className="font-bold text-gray-900">Status:</span> Active — Registration current</p>
                <p><span className="font-bold text-gray-900">Set-Aside:</span> SDVOSB / SB</p>
              </div>
            </div>

            {/* HQ */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              <h3 className="font-black text-[#0F1929] mb-3 text-sm">Program Office</h3>
              <address className="text-gray-600 text-xs not-italic leading-relaxed space-y-1">
                <p>ApexDefense, LLC</p>
                <p>1820 Dolley Madison Blvd, Suite 400</p>
                <p>McLean, VA 22102</p>
                <a href="tel:17035550198" className="block mt-2 font-bold text-[#0057FF] hover:underline">(703) 555-0198</a>
                <p className="text-gray-400">Mon–Fri 7:00 AM – 6:00 PM ET</p>
              </address>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
