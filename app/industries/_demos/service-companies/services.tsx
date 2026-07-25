import Link from "next/link";

const cats = [
  { icon: "❄️", name: "Air Conditioning", href: "air-conditioning", desc: "From emergency repairs to full system replacements, we handle every aspect of your home's cooling.", subs: ["AC Repair", "AC Installation", "AC Maintenance", "Ductless Mini-Split", "Thermostat Install", "Zone Control"] },
  { icon: "🔥", name: "Heating", href: "services", desc: "Keep your family warm all winter with expert furnace, heat pump, and boiler services.", subs: ["Furnace Repair", "Heat Pump Service", "Boiler Repair", "Heating Installation", "Carbon Monoxide Check", "Duct Inspection"] },
  { icon: "💧", name: "Plumbing", href: "plumbing", desc: "From dripping faucets to full pipe replacements, our licensed plumbers do it all.", subs: ["Leak Detection", "Drain Cleaning", "Water Heater Repair", "Water Heater Install", "Pipe Repair", "Fixture Install"] },
  { icon: "🌬️", name: "Indoor Air Quality", href: "services", desc: "Breathe cleaner air with whole-home filtration, UV systems, and humidity control.", subs: ["Air Purifiers", "UV Light Systems", "Humidifiers", "Dehumidifiers", "Duct Cleaning", "Air Quality Testing"] },
];

export default function HomeServicesServices() {
  return (
    <div className="bg-white font-sans">
      {/* Page hero */}
      <section className="bg-[#1B4B8A] py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#F58220] text-xs font-bold uppercase tracking-widest mb-3">Everything Your Home Needs</p>
          <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">Our Services</h1>
          <p className="text-blue-200 text-lg">One company. Every system. Same-day service available across Tampa Bay.</p>
        </div>
      </section>

      {/* Service categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          {cats.map((c, i) => (
            <div key={c.name}>
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#1B4B8A] hover:shadow-md transition-all">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl">{c.icon}</span>
                      <h2 className="text-2xl font-black text-gray-900">{c.name}</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-5">{c.desc}</p>
                    <Link href={c.href} className="inline-block bg-[#1B4B8A] hover:bg-[#163d73] text-white font-bold px-6 py-3 rounded transition-colors text-sm">
                      See {c.name} Services →
                    </Link>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Services Include</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {c.subs.map((s) => (
                        <Link key={s} href={c.href} className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#1B4B8A] font-medium group">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F58220] flex-shrink-0" />
                          {s}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {i === 1 && (
                <div className="my-6 bg-[#F58220] text-white text-center py-4 rounded-xl font-bold text-lg">
                  ⚡ Same-Day Service Available — Call (813) 555-0100
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Financing */}
      <section className="bg-[#1B4B8A] py-14 px-4 text-center">
        <h2 className="text-3xl font-black text-white mb-3">0% Financing on Major Repairs</h2>
        <p className="text-blue-200 text-lg mb-8">No Payments for 18 Months — On Approved Credit</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:8135550100" className="bg-[#F58220] hover:bg-[#e07210] text-white font-black px-10 py-4 rounded text-xl transition-colors">(813) 555-0100</a>
          <Link href="contact" className="border-2 border-white text-white hover:bg-white hover:text-[#1B4B8A] font-bold px-10 py-4 rounded text-lg transition-colors">Apply Now</Link>
        </div>
      </section>
    </div>
  );
}
