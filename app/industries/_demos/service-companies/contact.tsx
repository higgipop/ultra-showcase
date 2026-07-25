import Link from "next/link";

const areas = ["Tampa", "St. Petersburg", "Clearwater", "Brandon", "Riverview", "Wesley Chapel", "Land O' Lakes", "Lutz", "New Tampa", "Odessa", "Palm Harbor", "Safety Harbor"];

export default function HomeServicesContact() {
  return (
    <div className="bg-white font-sans">
      <section className="bg-[#1B4B8A] py-12 px-4 text-center">
        <p className="text-[#F58220] text-xs font-bold uppercase tracking-widest mb-3">We&apos;re Ready Now</p>
        <h1 className="text-4xl font-black text-white mb-3">Schedule Service</h1>
        <p className="text-blue-200 text-lg">Same-day appointments available · Emergency service 24/7</p>
      </section>

      {/* Emergency bar */}
      <div className="bg-[#F58220] py-4 px-4 text-center">
        <p className="text-white font-black text-lg">🚨 AC or Plumbing Emergency? Call Now: <a href="tel:8135550100" className="underline">(813) 555-0100</a></p>
        <p className="text-white/80 text-sm">Average response time under 2 hours · Technicians on call 24/7</p>
      </div>

      <section className="py-14 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-6">Book Your Appointment</h2>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">First Name</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1B4B8A]" placeholder="Robert" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Last Name</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1B4B8A]" placeholder="Martinez" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Phone Number *</label>
                <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1B4B8A]" placeholder="(813) 555-0000" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Service Needed</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1B4B8A]">
                  <option>Air Conditioning Repair</option>
                  <option>AC Installation / Replacement</option>
                  <option>Heating Repair</option>
                  <option>Heating Installation</option>
                  <option>Plumbing Repair</option>
                  <option>Drain Cleaning</option>
                  <option>Water Heater Service</option>
                  <option>Indoor Air Quality</option>
                  <option>Maintenance Plan</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Preferred Date</label>
                <input type="date" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1B4B8A]" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Describe the Problem</label>
                <textarea rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1B4B8A]" placeholder="AC not cooling, making a noise, water under unit..." />
              </div>
              <button type="submit" className="w-full bg-[#F58220] hover:bg-[#e07210] text-white font-black py-4 rounded-lg text-xl transition-colors">
                Schedule My Appointment
              </button>
              <p className="text-gray-400 text-xs text-center">We&apos;ll confirm within 30 minutes during business hours.</p>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-7">
              <h3 className="font-black text-gray-900 text-lg mb-5">Contact & Hours</h3>
              <div className="space-y-3 text-sm">
                <div className="flex gap-3"><span className="text-[#F58220] font-bold w-5">📞</span><div><p className="font-bold text-gray-900">(813) 555-0100</p><p className="text-gray-500">Main line</p></div></div>
                <div className="flex gap-3"><span className="text-[#F58220] font-bold w-5">🚨</span><div><p className="font-bold text-gray-900">(727) 732-2803</p><p className="text-gray-500">Emergency / after-hours</p></div></div>
                <div className="flex gap-3"><span className="text-[#F58220] font-bold w-5">✉️</span><div><p className="font-bold text-gray-900">service@comfortpro.com</p></div></div>
                <hr className="border-gray-200 my-3" />
                <div className="space-y-1">
                  <p className="font-bold text-gray-700">Business Hours</p>
                  <p className="text-gray-500">Mon–Fri: 7:00 AM – 9:00 PM</p>
                  <p className="text-gray-500">Saturday: 8:00 AM – 6:00 PM</p>
                  <p className="text-gray-500">Sunday: 9:00 AM – 4:00 PM</p>
                  <p className="text-[#F58220] font-bold">Emergency Service: 24/7/365</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-7">
              <h3 className="font-black text-gray-900 text-lg mb-4">Service Area</h3>
              <div className="bg-gray-200 rounded-xl aspect-video mb-4 flex items-center justify-center text-gray-400 font-medium">Service Area Map</div>
              <div className="flex flex-wrap gap-2">
                {areas.map((a) => (
                  <span key={a} className="bg-white border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">{a}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
