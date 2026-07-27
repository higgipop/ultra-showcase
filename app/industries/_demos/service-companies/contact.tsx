import Link from "next/link";

const areas = ["Tampa","St. Petersburg","Clearwater","Brandon","Riverview","Wesley Chapel","Land O' Lakes","Lutz","New Tampa","Odessa","Palm Harbor","Safety Harbor","Dunedin","Largo","Seminole"];

export default function ServiceCompaniesContact() {
  return (
    <div className="bg-white font-sans">
      <div className="bg-[#F58220] text-white text-center text-sm py-2 font-semibold">
        Emergency? Call <a href="tel:8135550100" className="underline font-black">(813) 555-0100</a> — We Answer 24/7
      </div>
      <nav className="bg-white border-b border-gray-200 sticky top-[36px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-[#1B4B8A] text-xl tracking-tight">COMFORT<span className="text-[#F58220]">PRO</span></Link>
          <div className="hidden lg:flex gap-6 text-sm font-semibold text-gray-700">
            <Link href="services" className="hover:text-[#1B4B8A]">Services</Link>
            <Link href="about" className="hover:text-[#1B4B8A]">About</Link>
          </div>
          <a href="tel:8135550100" className="bg-[#F58220] text-white font-black px-4 py-2 rounded text-sm">(813) 555-0100</a>
        </div>
      </nav>

      {/* Photo hero */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1800&q=80&auto=format&fit=crop" alt="ComfortPro service area" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B4B8A] via-[#1B4B8A]/65 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 pb-12 w-full">
          <h1 className="text-3xl lg:text-4xl font-black text-white mb-2">Book a Service Call</h1>
          <p className="text-blue-200">Available today. Same-day appointments in most cases.</p>
        </div>
      </section>

      {/* Main layout */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Booking form */}
          <div className="lg:col-span-3">
            <div className="bg-[#F58220]/5 border-2 border-[#F58220]/20 rounded-2xl p-8">
              <h2 className="text-xl font-black text-gray-900 mb-6">Schedule Your Service</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">First Name</label>
                    <input className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#1B4B8A] bg-white" placeholder="First" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Last Name</label>
                    <input className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#1B4B8A] bg-white" placeholder="Last" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Phone Number</label>
                  <input className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#1B4B8A] bg-white" placeholder="(813) 555-0000" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Service Needed</label>
                  <select className="border border-gray-200 rounded-lg px-4 py-3 text-base bg-white w-full focus:outline-none focus:border-[#1B4B8A] text-gray-700">
                    <option>Select a service</option>
                    <option>AC Repair</option>
                    <option>AC Installation</option>
                    <option>Heating Repair</option>
                    <option>Plumbing — Emergency</option>
                    <option>Plumbing — Non-Emergency</option>
                    <option>Maintenance / Tune-Up</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Preferred Date</label>
                  <input type="date" className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#1B4B8A] bg-white text-gray-700" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Describe the Problem</label>
                  <textarea rows={3} className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#1B4B8A] bg-white resize-none" placeholder="Tell us what's going on..." />
                </div>
                <button type="submit" className="w-full bg-[#F58220] hover:bg-[#e07210] text-white font-black py-4 rounded-lg text-lg transition-colors">Request Appointment</button>
                <p className="text-center text-gray-400 text-xs">We&apos;ll call to confirm within 30 minutes during business hours.</p>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="font-black text-gray-900 mb-4">Contact Info</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p><span className="font-bold text-gray-800">Phone:</span> <a href="tel:8135550100" className="text-[#1B4B8A] font-bold">(813) 555-0100</a></p>
                <p><span className="font-bold text-gray-800">Email:</span> service@comfortpro.com</p>
                <p><span className="font-bold text-gray-800">Address:</span> 1234 Commerce Blvd, Tampa, FL 33602</p>
              </div>
            </div>
            <div className="border border-gray-100 rounded-xl p-5">
              <h3 className="font-black text-gray-900 mb-3 text-sm">Hours of Operation</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-gray-500">Mon–Fri</span><span className="font-bold text-gray-800">7am – 8pm</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Saturday</span><span className="font-bold text-gray-800">8am – 6pm</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Sunday</span><span className="font-bold text-gray-800">9am – 5pm</span></div>
                <div className="flex justify-between border-t border-gray-100 pt-2 mt-2"><span className="text-[#DC2626] font-bold">Emergency</span><span className="font-bold text-gray-800">24 / 7 / 365</span></div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden aspect-video">
              <img src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80&auto=format&fit=crop" alt="Tampa Bay service area" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-black text-gray-900 mb-3 text-sm">Service Areas</h3>
              <div className="flex flex-wrap gap-2">
                {areas.map((a) => (
                  <span key={a} className="bg-[#F8FAFC] border border-gray-100 rounded-full text-xs px-3 py-1 text-gray-600">{a}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
