import Link from "next/link";

const services = [
  {
    icon: "❄️",
    name: "Air Conditioning",
    desc: "From emergency repairs to full system replacements, our NATE-certified technicians handle every AC need. We service all major brands and offer same-day diagnostics.",
    issues: ["AC not cooling", "Frozen evaporator coil", "Refrigerant leaks", "Unusual noises", "High energy bills", "System short cycling"],
    price: "From $89 diagnostic",
  },
  {
    icon: "🔥",
    name: "Heating",
    desc: "Furnaces, heat pumps, boilers, and radiant systems — we keep you warm when it matters most. Annual tune-ups available to prevent costly breakdowns.",
    issues: ["No heat", "Pilot light issues", "Uneven heating", "Gas smell", "Carbon monoxide alarm", "Noisy furnace"],
    price: "From $89 diagnostic",
  },
  {
    icon: "💧",
    name: "Plumbing",
    desc: "Licensed master plumbers for leak detection, drain cleaning, water heater service, and full re-pipes. No job too big or too small.",
    issues: ["Burst pipes", "Slow drains", "Water heater failure", "Low water pressure", "Running toilets", "Sewer backup"],
    price: "From $79 service call",
  },
  {
    icon: "⚡",
    name: "Electrical",
    desc: "Licensed electricians for panel upgrades, wiring, generator installation, and EV charger hookups. All work permitted and inspected.",
    issues: ["Tripping breakers", "No power to outlets", "Flickering lights", "Panel upgrade needed", "Generator install", "EV charger"],
    price: "From $99 diagnostic",
  },
  {
    icon: "🌬️",
    name: "Indoor Air Quality",
    desc: "Whole-home filtration, UV purifiers, humidity control, and duct cleaning for a healthier indoor environment for your family.",
    issues: ["Allergies & dust", "Musty odors", "High humidity", "Dry air in winter", "Poor ventilation", "Mold concerns"],
    price: "Free IAQ assessment",
  },
  {
    icon: "🛠️",
    name: "Maintenance Plans",
    desc: "Annual and bi-annual plans that keep your systems running at peak efficiency. Priority scheduling and discounts on all repairs — no surprise bills.",
    issues: ["Spring AC tune-up", "Fall heating check", "Filter replacements", "Priority service", "10% repair discount", "No overtime charges"],
    price: "From $149/year",
  },
];

export default function HomeServicesServicesPage() {
  return (
    <div className="bg-white font-sans">
      {/* Pricing banner */}
      <div className="bg-[#E84C27] text-white text-center text-sm py-2.5 font-semibold tracking-wide">
        💰 Flat-Rate Pricing. No Hidden Fees. No Surprise Bills. &nbsp;·&nbsp; All work 100% guaranteed.
      </div>

      {/* Hero */}
      <section className="bg-[#0A4DA1] pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 30px)"}} />
        <div className="max-w-7xl mx-auto px-6 relative text-center">
          <p className="text-[#7DD3FC] text-xs font-semibold tracking-widest uppercase mb-4">Full-Service Home Repair</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">What Can We Fix For You?</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
            Licensed, insured, and available 24/7. One call handles AC, heating, plumbing, and electrical — no runaround, no subcontractors.
          </p>
          <a href="tel:8135550100" className="inline-flex items-center gap-3 bg-[#E84C27] hover:bg-[#C73D1F] text-white font-black text-xl px-8 py-4 rounded-xl transition-colors">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd"/></svg>
            (813) 555-0100
          </a>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-7">
            {services.map((s) => (
              <div key={s.name} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-[#0A4DA1] px-7 py-5 flex items-center gap-4">
                  <span className="text-3xl">{s.icon}</span>
                  <div>
                    <h2 className="font-black text-white text-xl">{s.name}</h2>
                    <span className="text-[#7DD3FC] text-xs font-semibold">{s.price}</span>
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-gray-600 leading-relaxed mb-5">{s.desc}</p>
                  <div className="mb-6">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Common issues we fix:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {s.issues.map((issue) => (
                        <div key={issue} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E84C27] flex-shrink-0" />
                          {issue}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link href="/contact" className="block text-center bg-[#0A4DA1] hover:bg-[#083A82] text-white font-bold py-3 rounded-xl transition-colors">
                    Schedule Service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency callout */}
      <section className="bg-[#0A4DA1] py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#E84C27] font-black text-lg uppercase tracking-widest mb-3">⚡ 24/7 Emergency Service</p>
          <h2 className="text-3xl font-black text-white mb-4">Burst pipe at 2am? AC out before a party? We show up.</h2>
          <p className="text-blue-200 mb-8">No overtime charges. Same flat rate, day or night. Technicians on call 365 days a year.</p>
          <a href="tel:8135550100" className="inline-block bg-[#E84C27] hover:bg-[#C73D1F] text-white font-black px-10 py-4 rounded-xl text-xl transition-colors">
            Emergency: (813) 555-0100
          </a>
        </div>
      </section>
    </div>
  );
}
