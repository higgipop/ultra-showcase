import Link from "next/link";

const services = [
  { name: "Air Conditioning", href: "air-conditioning", img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=700&q=80&auto=format&fit=crop", issues: ["AC not cooling","Strange noises","High energy bills","Refrigerant leaks","Thermostat problems"], price: "From $89" },
  { name: "Heating", href: "services", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=700&q=80&auto=format&fit=crop", issues: ["Furnace won't start","Uneven heating","Pilot light issues","Heat pump failure","Blower motor"], price: "From $89" },
  { name: "Indoor Air Quality", href: "services", img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=700&q=80&auto=format&fit=crop", issues: ["Dust & allergens","Dry air","Musty odors","High humidity","Poor ventilation"], price: "From $129" },
  { name: "Plumbing", href: "plumbing", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&auto=format&fit=crop", issues: ["Leaky faucets","Clogged drains","Water heater issues","Running toilets","Low pressure"], price: "From $79" },
  { name: "Electrical", href: "services", img: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=700&q=80&auto=format&fit=crop", issues: ["Tripping breakers","Flickering lights","Outlet not working","Panel upgrade","Surge protection"], price: "From $99" },
  { name: "Home Maintenance", href: "services", img: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=700&q=80&auto=format&fit=crop", issues: ["Annual tune-ups","Filter replacement","Safety inspections","Duct cleaning","System check"], price: "From $59" },
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
      <div className="bg-[#F58220] text-white text-center text-sm py-2 font-semibold">
        Same-Day Service · Call <a href="tel:8132056160" className="underline">(813) 205-6160</a> · $50 OFF Any Repair
      </div>
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

      {/* Photo hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <img src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1800&q=80&auto=format&fit=crop" alt="HVAC technician at work" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B4B8A] via-[#1B4B8A]/65 to-[#1B4B8A]/20" />
        <div className="relative max-w-7xl mx-auto px-4 pb-14 w-full">
          <p className="text-[#F58220] text-xs font-bold uppercase tracking-[0.2em] mb-3">Tampa Bay's Home Service Experts</p>
          <h1 className="text-3xl lg:text-5xl font-black text-white leading-tight mb-3">All Services</h1>
          <p className="text-blue-200 text-lg max-w-2xl">One company. AC, heat, plumbing, electrical — same-day service across Tampa Bay.</p>
        </div>
      </section>

      {/* Service grid with unique images */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link key={s.name} href={s.href} className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group block">
              <div className="aspect-video overflow-hidden">
                <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-black text-gray-900 text-lg group-hover:text-[#1B4B8A] transition-colors">{s.name}</h2>
                  <span className="text-xs font-bold text-[#F58220]">{s.price}</span>
                </div>
                <ul className="space-y-1 mb-4">
                  {s.issues.map((issue) => (
                    <li key={issue} className="text-gray-500 text-xs flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#F58220] flex-shrink-0" /> {issue}
                    </li>
                  ))}
                </ul>
                <span className="text-[#1B4B8A] font-bold text-sm">Schedule Service →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Flat-rate pricing table */}
      <section className="bg-[#F8FAFC] border-y border-gray-100 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-2">Flat-Rate Pricing</h2>
          <p className="text-gray-500 mb-8">No surprises. You know the price before we start.</p>
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1B4B8A] text-white">
                  <th className="text-left px-5 py-3 font-bold">Service</th>
                  <th className="text-right px-5 py-3 font-bold">Starting Price</th>
                  <th className="text-right px-5 py-3 font-bold hidden sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((row, i) => (
                  <tr key={row.service} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3 font-semibold text-gray-800">{row.service}</td>
                    <td className="px-5 py-3 text-right font-black text-[#1B4B8A]">{row.price}</td>
                    <td className="px-5 py-3 text-right text-gray-400 hidden sm:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1800&q=80&auto=format&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1B4B8A]/90" />
        <div className="relative">
          <h2 className="text-2xl font-black text-white mb-3">Need Service Right Now?</h2>
          <p className="text-blue-200 mb-6 max-w-xl mx-auto">Same-day dispatch across Tampa Bay. Emergency line answered 24/7.</p>
          <a href="tel:8132056160" className="inline-block bg-[#F58220] hover:bg-[#e07210] text-white font-black px-10 py-4 rounded text-xl transition-colors">(813) 205-6160</a>
        </div>
      </section>
    </div>
  );
}
