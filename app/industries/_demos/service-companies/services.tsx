import Link from "next/link";

const services = [
  {
    icon: "❄️", name: "Air Conditioning", href: "air-conditioning",
    issues: ["AC not cooling","Strange noises","High energy bills","Refrigerant leaks","Thermostat problems"],
    price: "From $89",
  },
  {
    icon: "🔥", name: "Heating", href: "services",
    issues: ["Furnace won't start","Uneven heating","Pilot light issues","Heat pump not working","Blower motor failure"],
    price: "From $89",
  },
  {
    icon: "🌬️", name: "Indoor Air Quality", href: "services",
    issues: ["Dust & allergens","Dry air","Musty odors","High humidity","Poor ventilation"],
    price: "From $129",
  },
  {
    icon: "💧", name: "Plumbing", href: "plumbing",
    issues: ["Leaky faucets","Clogged drains","Water heater issues","Running toilets","Low water pressure"],
    price: "From $79",
  },
  {
    icon: "🔌", name: "Electrical", href: "services",
    issues: ["Tripping breakers","Flickering lights","Outlet not working","Panel upgrade needed","Surge protection"],
    price: "From $99",
  },
  {
    icon: "🏠", name: "Home Maintenance", href: "services",
    issues: ["Annual tune-ups","Filter replacement","Safety inspections","Duct cleaning","System check"],
    price: "From $59",
  },
];

const pricing = [
  { service: "HVAC Diagnostic & Inspection", price: "$89", note: "Waived if repair completed" },
  { service: "Drain Cleaning (standard)", price: "$149", note: "Per drain, includes video" },
  { service: "Water Heater Flush", price: "$79", note: "Includes inspection" },
  { service: "AC Tune-Up", price: "$99", note: "Per system" },
  { service: "Same-Day Priority Dispatch", price: "$29", note: "Added to service call" },
  { service: "After-Hours / Emergency Call", price: "$149", note: "Plus service fees" },
];

export default function ServiceCompaniesServices() {
  return (
    <div className="bg-white font-sans">
      {/* Urgency bar */}
      <div className="bg-[#F58220] text-white text-center text-sm py-2 font-semibold">
        ⚡ Same-Day Service · Call <a href="tel:8135550100" className="underline">(813) 555-0100</a> · $50 OFF Any Repair
      </div>

      {/* Nav */}
      <nav className="bg-white border-b border-gray-200 sticky top-[36px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-[#1B4B8A] text-xl tracking-tight">COMFORT<span className="text-[#F58220]">PRO</span></Link>
          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-gray-700">
            <Link href="air-conditioning" className="hover:text-[#1B4B8A]">Air Conditioning</Link>
            <Link href="plumbing" className="hover:text-[#1B4B8A]">Plumbing</Link>
            <Link href="services" className="text-[#1B4B8A]">All Services</Link>
            <Link href="about" className="hover:text-[#1B4B8A]">About</Link>
          </div>
          <Link href="contact" className="bg-[#F58220] hover:bg-[#e07210] text-white font-bold px-4 py-2 rounded text-sm transition-colors">Schedule Online</Link>
        </div>
      </nav>

      {/* Page hero */}
      <section className="bg-[#1B4B8A] py-14 px-4 text-center">
        <h1 className="text-3xl lg:text-4xl font-black text-white mb-3">All Services</h1>
        <p className="text-blue-200 text-lg">What can we fix for you today?</p>
      </section>

      {/* Service cards with issues + pricing */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.name} className="border-2 border-gray-100 rounded-2xl p-6 hover:border-[#1B4B8A] hover:shadow-lg transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{s.icon}</span>
                  <div>
                    <h2 className="font-black text-gray-900 text-lg group-hover:text-[#1B4B8A] transition-colors">{s.name}</h2>
                    <span className="text-[#F58220] font-bold text-sm">{s.price}</span>
                  </div>
                </div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Common issues we fix:</p>
                <ul className="space-y-1.5 mb-5">
                  {s.issues.map((i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="text-[#1B4B8A] font-bold">·</span> {i}
                    </li>
                  ))}
                </ul>
                <Link href={s.href} className="block text-center border-2 border-[#1B4B8A] text-[#1B4B8A] hover:bg-[#1B4B8A] hover:text-white font-bold py-2 rounded text-sm transition-colors">
                  Schedule Service →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flat-rate pricing table */}
      <section className="bg-[#F8F9FB] border-y border-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-gray-900 mb-2">Transparent Flat-Rate Pricing</h2>
            <p className="text-gray-500">You'll always know the price before we start. No hidden fees.</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200">
            <div className="grid grid-cols-3 bg-[#1B4B8A] text-white text-sm font-bold px-6 py-3">
              <span>Service</span>
              <span>Flat Rate</span>
              <span>Notes</span>
            </div>
            {pricing.map((row, i) => (
              <div key={row.service} className={`grid grid-cols-3 px-6 py-4 text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <span className="font-semibold text-gray-800">{row.service}</span>
                <span className="font-black text-[#1B4B8A]">{row.price}</span>
                <span className="text-gray-400">{row.note}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-4">All prices subject to parts and complexity. Final price confirmed before work begins.</p>
        </div>
      </section>

      {/* Emergency callout banner */}
      <section className="bg-[#F58220] py-10 px-4 text-center">
        <h2 className="text-2xl font-black text-white mb-2">Emergency Service Available 24/7</h2>
        <p className="text-white/80 mb-6">No heat? No AC? Water everywhere? We have technicians on call right now.</p>
        <a href="tel:8135550100" className="inline-block bg-white text-[#F58220] font-black px-10 py-4 rounded text-xl hover:bg-gray-50 transition-colors">
          Call Now: (813) 555-0100
        </a>
      </section>
    </div>
  );
}
