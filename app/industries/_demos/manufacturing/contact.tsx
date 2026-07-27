import Link from "next/link";

export default function ManufacturingContact() {
  return (
    <div className="bg-white font-sans">
      <div className="bg-[#0F1923] text-center text-white text-xs py-2 font-semibold tracking-wider">48-Hour RFQ Response Guaranteed · ISO 9001:2015 · AS9100D · ITAR</div>
      <nav className="bg-[#0F1923] border-t border-white/5 sticky top-[32px] z-40">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-white text-xl">APEX<span className="text-[#1E90FF]">MFG</span></Link>
          <div className="hidden lg:flex gap-6 text-sm font-semibold text-gray-300">
            <Link href="capabilities" className="hover:text-white">Capabilities</Link>
            <Link href="about" className="hover:text-white">About</Link>
          </div>
          <Link href="contact" className="bg-[#1E90FF] text-white font-bold px-4 py-2 rounded text-sm">Submit RFQ</Link>
        </div>
      </nav>

      {/* Header */}
      <section className="relative min-h-[38vh] flex items-end overflow-hidden">
        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80&auto=format&fit=crop" alt="Manufacturing facility" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1923] via-[#0F1923]/80 to-[#0F1923]/30" />
        <div className="relative max-w-7xl mx-auto px-4 pb-10 w-full">
          <h1 className="text-4xl font-black text-white mb-2">Request a Quote</h1>
          <p className="text-gray-300 text-lg">We respond to all RFQs within 48 business hours.</p>
        </div>
      </section>

      {/* Two-column: RFQ form + sidebar */}
      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* RFQ form — 2 cols */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-black text-[#0F1923] mb-6">Part & Project Information</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Name *</label>
                  <input className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#1E90FF]" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Company *</label>
                  <input className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#1E90FF]" placeholder="Company Name" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Email *</label>
                  <input type="email" className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#1E90FF]" placeholder="name@company.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Phone</label>
                  <input type="tel" className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#1E90FF]" placeholder="(000) 000-0000" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Process Required</label>
                  <select className="border border-gray-200 rounded-lg px-4 py-3 text-base bg-white w-full focus:outline-none focus:border-[#1E90FF] text-gray-700">
                    <option>Select process</option>
                    <option>CNC Milling</option>
                    <option>CNC Turning</option>
                    <option>5-Axis Machining</option>
                    <option>TIG Welding</option>
                    <option>MIG Welding</option>
                    <option>Laser Cutting</option>
                    <option>Sheet Metal Forming</option>
                    <option>Assembly</option>
                    <option>Multiple / Not Sure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Material</label>
                  <input className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#1E90FF]" placeholder="e.g. 6061-T6 Aluminum" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Quantity</label>
                  <input className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#1E90FF]" placeholder="e.g. 50 pieces" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Required Delivery</label>
                  <input type="date" className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#1E90FF] text-gray-700" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Part Description & Specifications</label>
                <textarea className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full h-32 resize-none focus:outline-none focus:border-[#1E90FF]" placeholder="Describe the part, key tolerances, finish requirements, and any special requirements (e.g. ITAR, DFARS)." />
              </div>
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center">
                <p className="text-gray-400 text-sm font-semibold mb-1">Attach Drawings or Files</p>
                <p className="text-gray-300 text-xs">STEP, IGES, DXF, PDF, SolidWorks accepted. Max 25MB per file.</p>
                <button type="button" className="mt-3 border border-gray-300 text-gray-600 text-sm font-bold px-4 py-2 rounded hover:border-[#1E90FF] hover:text-[#1E90FF] transition-colors">Browse Files</button>
              </div>
              <button type="submit" className="bg-[#1E90FF] hover:bg-blue-600 text-white font-black px-8 py-4 rounded w-full text-lg transition-colors">Submit RFQ →</button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-[#0F1923] rounded-2xl p-6">
              <p className="font-black text-white text-sm mb-4">48-Hour Response Guarantee</p>
              <p className="text-white/60 text-sm leading-relaxed">Every RFQ receives a quoted response within 48 business hours. If we can&apos;t quote it, we&apos;ll tell you why.</p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-5">
              <p className="font-black text-[#0F1923] text-sm mb-2">NDA Available</p>
              <p className="text-gray-500 text-xs leading-relaxed">We sign mutual NDAs before reviewing any proprietary drawings. Just request it when you submit.</p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-5">
              <p className="font-black text-[#0F1923] text-sm mb-3">Engineering Contact</p>
              <p className="text-gray-600 text-sm">James Park, Quality & Engineering</p>
              <p className="text-[#1E90FF] font-bold text-sm">jpark@apexmfg.com</p>
              <p className="text-gray-500 text-sm">(407) 555-0400</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
              <p className="font-black text-[#0F1923] text-sm mb-3">Our Location</p>
              <p className="text-gray-600 text-sm">8200 Presidents Dr., Suite 100</p>
              <p className="text-gray-600 text-sm">Orlando, FL 32809</p>
              <p className="text-gray-400 text-xs mt-2">Near Orlando International Airport · I-4 / Turnpike access</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
