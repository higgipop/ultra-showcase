import Link from "next/link";

export default function ManufacturingContactPage() {
  return (
    <div className="bg-white font-sans">
      <div className="bg-[#0F1923] text-white/40 text-center text-xs py-2.5 tracking-widest font-semibold uppercase">
        48-Hour Quote Turnaround · ISO 9001 · AS9100 · ITAR · NDA Available
      </div>

      {/* Hero */}
      <section className="bg-[#0F1923] pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{color: "#1E90FF"}}>Request a Quote</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">RFQ & Engineering Inquiry</h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Submit your requirements below. Our engineering team reviews every RFQ personally and responds within 48 business hours.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          {/* RFQ Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 className="font-black text-[#0F1923] text-2xl mb-2">Request for Quote (RFQ)</h2>
            <p className="text-gray-500 text-sm mb-6">All submissions are treated as confidential. NDA available upon request before drawing submission.</p>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Your Name</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E90FF]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Company</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E90FF]" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Email</label>
                  <input type="email" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E90FF]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Phone</label>
                  <input type="tel" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E90FF]" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Part Name / Description</label>
                  <input type="text" placeholder="e.g. Titanium bracket, AS9100 req'd" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E90FF]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Quantity Required</label>
                  <input type="text" placeholder="e.g. 50 prototype / 500 production" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E90FF]" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Material</label>
                  <input type="text" placeholder="e.g. Ti-6Al-4V Grade 5, AMS 4928" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E90FF]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Critical Tolerance</label>
                  <input type="text" placeholder="e.g. ±0.001 on ID bore" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E90FF]" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Surface Finish / Special Process</label>
                  <input type="text" placeholder="e.g. Ra 32 µin, passivation per AMS 2700" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E90FF]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Required Delivery Date</label>
                  <input type="date" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E90FF]" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Drawing / Spec Notes</label>
                <textarea rows={3} placeholder="Describe drawing availability, applicable specifications (MIL, AMS, ASTM), and any program-specific requirements..." className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E90FF] resize-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Additional Notes</label>
                <textarea rows={2} placeholder="First article required, PPAP level, quality clauses, teaming/NDA needed, etc." className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E90FF] resize-none" />
              </div>
              <button className="w-full font-black py-4 rounded-lg transition-opacity hover:opacity-90 text-white" style={{backgroundColor: "#1E90FF"}}>
                Submit RFQ
              </button>
              <p className="text-gray-400 text-xs text-center">We respond within 48 business hours. NDA available before drawing submission — just ask.</p>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-5">
            {/* Response promise */}
            <div className="rounded-2xl p-6 text-center" style={{backgroundColor: "#1E90FF"}}>
              <p className="text-4xl font-black text-white mb-1">48h</p>
              <p className="font-bold text-white">Quote turnaround</p>
              <p className="text-white/70 text-sm mt-1">Business hours · Engineering review included</p>
            </div>

            {/* Contact */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="font-black text-[#0F1923] mb-4">Engineering Team</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>📞 (813) 555-0100 ext. 2</p>
                <p>✉️ rfq@manufacturer.com</p>
                <p>📍 1234 Industrial Pkwy, Tampa FL 33619</p>
                <div className="pt-3 border-t border-gray-100">
                  <p className="font-semibold text-gray-700 mb-1">Hours</p>
                  <p>Mon–Fri: 7:00 AM – 5:00 PM</p>
                  <p className="text-gray-400">3-shift production · Sat deliveries available</p>
                </div>
              </div>
            </div>

            {/* NDA note */}
            <div className="bg-[#0F1923] rounded-2xl p-6">
              <h3 className="font-black text-white mb-2">🔒 NDA Available</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                We routinely execute mutual NDAs before receiving proprietary drawings or program details. Request one in your submission or by email — we typically execute within 24 hours.
              </p>
            </div>

            {/* What we need */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="font-black text-[#0F1923] mb-3">For a faster quote, include:</h3>
              <ul className="space-y-2">
                {["2D drawing (PDF) or 3D model (STEP/IGES)", "Material spec and condition", "Quantity — prototype and/or production", "Critical tolerances and GD&T callouts", "Applicable quality clauses or flow-down", "Required delivery date"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{backgroundColor: "#1E90FF"}} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
