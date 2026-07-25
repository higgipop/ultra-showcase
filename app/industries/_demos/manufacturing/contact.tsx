// manufacturing contact: dark nav, white body, RFQ form left, 48h guarantee right
import Link from "next/link";

export default function ManufacturingContact() {
  return (
    <div className="bg-white font-sans">
      <nav className="bg-[#0F1923]">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
          <div className="font-black text-white text-lg tracking-tight">APEX<span className="text-[#1E90FF]">PRECISION</span></div>
          <div className="hidden md:flex items-center gap-5 text-sm font-semibold text-gray-300">
            <Link href="home" className="hover:text-white">Home</Link>
            <Link href="capabilities" className="hover:text-white">Capabilities</Link>
            <Link href="about" className="hover:text-white">About</Link>
            <Link href="contact" className="text-[#1E90FF]">Contact</Link>
          </div>
          <Link href="contact" className="bg-[#1E90FF] hover:bg-[#1a7fef] text-white font-bold px-4 py-2 rounded text-sm transition-colors">Request RFQ</Link>
        </div>
      </nav>

      <div className="bg-white border-b border-gray-100 py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-black text-[#0F1923]">Request a Quote</h1>
          <p className="text-gray-500 mt-2">48-hour turnaround. No minimum order. NDA available on request.</p>
        </div>
      </div>

      <section className="py-12 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.4fr_1fr] gap-10">
          {/* RFQ Form */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
            <h2 className="text-xl font-black text-[#0F1923] mb-6">RFQ / Part Information</h2>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Part Name / Drawing Number</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#1E90FF] focus:outline-none" placeholder="e.g. Bracket Assy, DWG-0042A" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Quantity Required</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#1E90FF] focus:outline-none" placeholder="e.g. 50 pieces" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Material / Alloy</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#1E90FF] focus:outline-none" placeholder="e.g. Ti-6Al-4V, Al 6061-T6" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Critical Tolerance</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#1E90FF] focus:outline-none" placeholder="e.g. ±0.001&quot;" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Required Surface Finish</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#1E90FF] focus:outline-none" placeholder="e.g. Ra 32, as-machined" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Required Delivery Date</label>
                  <input type="date" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#1E90FF] focus:outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Capability Required</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 focus:ring-2 focus:ring-[#1E90FF] focus:outline-none">
                  <option value="">Select primary capability</option>
                  <option>5-Axis CNC Machining</option>
                  <option>CNC Turning</option>
                  <option>TIG / MIG Welding</option>
                  <option>Laser Cutting</option>
                  <option>Sheet Metal Forming</option>
                  <option>Clean Room Assembly</option>
                  <option>CMM Inspection / FAI</option>
                  <option>Multiple — see notes</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">File Upload Note</label>
                <div className="border-2 border-dashed border-gray-200 rounded-xl px-5 py-6 text-center">
                  <p className="text-gray-400 text-sm">Email files after submitting this form</p>
                  <p className="text-gray-500 text-xs mt-1 font-semibold">We accept: .STEP · .STP · .DWG · .DXF · .IGES · .PDF</p>
                  <p className="text-gray-400 text-xs mt-1">rfq@apexprecision.com · NDA available on request</p>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Additional Notes / Special Requirements</label>
                <textarea rows={3} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#1E90FF] focus:outline-none resize-none" placeholder="Heat treat, coatings, certifications required, ITAR sensitivity, etc." />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Your Name *</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#1E90FF] focus:outline-none" placeholder="First Last" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Company *</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#1E90FF] focus:outline-none" placeholder="Company name" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Email *</label>
                  <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#1E90FF] focus:outline-none" placeholder="engineer@company.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Phone</label>
                  <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#1E90FF] focus:outline-none" placeholder="(813) 555-0100" />
                </div>
              </div>

              <button type="submit" className="w-full bg-[#1E90FF] hover:bg-[#1a7fef] text-white font-black py-4 rounded-xl text-lg transition-colors">
                Submit RFQ Request
              </button>
              <p className="text-gray-400 text-xs text-center">Secure · Confidential · No Obligation · NDA Available</p>
            </form>
          </div>

          {/* Right side */}
          <div className="space-y-5">
            <div className="bg-[#0F1923] rounded-2xl p-6">
              <div className="text-center mb-4">
                <p className="text-5xl font-black text-[#1E90FF]">48h</p>
                <p className="text-white font-bold">Quote Turnaround Guarantee</p>
                <p className="text-gray-400 text-xs mt-1">Or we&apos;ll call you to explain the delay</p>
              </div>
              <div className="border-t border-white/10 pt-4 space-y-3">
                {["Competitive pricing on all lot sizes", "Material certs included with every order", "First Article Inspection available", "NDA available before file exchange"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-400 text-sm">
                    <span className="text-[#1E90FF] font-bold">✓</span> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="font-black text-[#0F1923] mb-4">Engineering Contact</h3>
              <p className="text-gray-700 text-sm mb-1">Sandra Lin, PE — VP Engineering</p>
              <p className="text-gray-500 text-sm mb-3">Direct line for program inquiries and DFM discussions</p>
              <a href="tel:8135550100" className="text-xl font-bold text-[#1E90FF] hover:underline">(813) 555-0100 ext. 102</a>
            </div>

            <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-5">
              <p className="font-bold text-[#0F1923] text-sm mb-3">Secure · Confidential · No Obligation</p>
              <p className="text-gray-500 text-sm leading-relaxed">All program information is treated as confidential. We sign NDAs before receiving sensitive files or discussing program-specific requirements.</p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              <p className="font-bold text-[#0F1923] text-sm mb-2">Facility Address</p>
              <p className="text-gray-600 text-sm">7801 Anderson Road, Suite 200<br />Tampa, FL 33634</p>
              <p className="text-gray-400 text-xs mt-3">Mon–Fri 6am–6pm (3-shift production)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
