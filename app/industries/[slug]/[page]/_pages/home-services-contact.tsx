import Link from "next/link";

const serviceAreas = ["Tampa", "Brandon", "Riverview", "Valrico", "Plant City", "Lutz", "Land O Lakes", "Wesley Chapel", "Carrollwood", "Westchase"];

export default function HomeServicesContactPage() {
  return (
    <div className="bg-white font-sans">
      {/* Emergency bar */}
      <div className="bg-[#E84C27] text-white text-center text-sm py-2.5 font-black tracking-wide">
        ⚡ EMERGENCY SERVICE: (813) 555-0100 — We Answer 24 Hours, 7 Days a Week
      </div>

      {/* Hero */}
      <section className="bg-[#0A4DA1] pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#7DD3FC] text-xs font-semibold tracking-widest uppercase mb-4">Schedule Service</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Book Your Appointment</h1>
          <p className="text-blue-200 text-lg">Most calls answered in under 60 seconds. Same-day service often available.</p>
        </div>
      </section>

      {/* Main split */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 className="font-black text-gray-900 text-2xl mb-6">Schedule a Service Call</h2>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">First Name</label>
                  <input type="text" placeholder="John" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A4DA1]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Last Name</label>
                  <input type="text" placeholder="Smith" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A4DA1]" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Phone Number</label>
                <input type="tel" placeholder="(813) 000-0000" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A4DA1]" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Service Needed</label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A4DA1]">
                  <option>Air Conditioning</option>
                  <option>Heating</option>
                  <option>Plumbing</option>
                  <option>Electrical</option>
                  <option>Indoor Air Quality</option>
                  <option>Maintenance Plan</option>
                  <option>Emergency — Not Sure</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Preferred Date</label>
                <input type="date" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A4DA1]" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Describe the Problem</label>
                <textarea rows={3} placeholder="AC won't turn on, water dripping under sink, etc." className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A4DA1] resize-none" />
              </div>
              <button className="w-full bg-[#E84C27] hover:bg-[#C73D1F] text-white font-black py-4 rounded-xl transition-colors text-lg">
                Schedule My Service Call
              </button>
              <p className="text-gray-400 text-xs text-center">We&rsquo;ll call or text to confirm within 15 minutes.</p>
            </div>
          </div>

          {/* Contact info + hours */}
          <div className="space-y-6">
            {/* Emergency */}
            <div className="bg-[#E84C27] rounded-2xl p-6 text-white">
              <p className="font-black text-lg uppercase tracking-wider mb-1">⚡ Emergency Line</p>
              <a href="tel:8135550100" className="text-3xl font-black hover:underline">(813) 555-0100</a>
              <p className="mt-2 text-white/80 text-sm">Available 24/7 · 365 days a year · No overtime charges</p>
            </div>

            {/* Hours */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
              <h3 className="font-black text-gray-900 mb-4">Hours of Operation</h3>
              <div className="space-y-2">
                {[
                  { day: "Monday – Friday", hours: "7:00 AM – 8:00 PM" },
                  { day: "Saturday", hours: "8:00 AM – 6:00 PM" },
                  { day: "Sunday", hours: "10:00 AM – 4:00 PM" },
                  { day: "Holidays & After Hours", hours: "Emergency calls only" },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between text-sm">
                    <span className="text-gray-600 font-semibold">{h.day}</span>
                    <span className="text-gray-900 font-bold">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service area */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
              <h3 className="font-black text-gray-900 mb-4">Service Area</h3>
              <div className="bg-gray-200 rounded-xl h-32 flex items-center justify-center mb-4">
                <p className="text-gray-400 text-sm font-semibold">Service Area Map</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((a) => (
                  <span key={a} className="bg-[#0A4DA1]/10 text-[#0A4DA1] text-xs font-bold px-3 py-1 rounded-full">{a}</span>
                ))}
              </div>
            </div>

            {/* Response promise */}
            <div className="bg-[#0A4DA1] rounded-2xl p-6 text-center text-white">
              <p className="text-5xl font-black text-[#7DD3FC] mb-1">60s</p>
              <p className="font-bold">Average phone answer time</p>
              <p className="text-blue-200 text-sm mt-1">Real people. Not a call center. Not a bot.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
