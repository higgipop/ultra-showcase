import Link from "next/link";

export default function AirConditioning() {
  return (
    <div className="bg-white font-sans">
      <div className="bg-[#F58220] text-white text-center text-sm py-2 font-semibold">
        ⚡ Same-Day AC Service · <a href="tel:8135550100" className="underline">(813) 555-0100</a> · $50 OFF Repairs
      </div>
      <nav className="bg-white border-b border-gray-200 sticky top-[36px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-[#1B4B8A] text-xl tracking-tight">COMFORT<span className="text-[#F58220]">PRO</span></Link>
          <div className="hidden lg:flex gap-6 text-sm font-semibold text-gray-700">
            <Link href="air-conditioning" className="text-[#1B4B8A]">Air Conditioning</Link>
            <Link href="plumbing" className="hover:text-[#1B4B8A]">Plumbing</Link>
            <Link href="services" className="hover:text-[#1B4B8A]">All Services</Link>
            <Link href="about" className="hover:text-[#1B4B8A]">About</Link>
          </div>
          <Link href="contact" className="bg-[#F58220] hover:bg-[#e07210] text-white font-bold px-4 py-2 rounded text-sm transition-colors">Schedule Online</Link>
        </div>
      </nav>

      {/* Service hero with seasonal coupon */}
      <section className="bg-[#1B4B8A] py-14 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#F58220] text-xs font-bold uppercase tracking-[0.2em] mb-3">Tampa Bay's AC Experts</p>
            <h1 className="text-4xl font-black text-white leading-tight mb-4">Air Conditioning Repair, Installation & Maintenance</h1>
            <p className="text-blue-200 leading-relaxed mb-6">Same-day AC repair by licensed, certified technicians. We service all brands and models. Emergency service available 24/7.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:8135550100" className="bg-[#F58220] text-white font-black px-6 py-3 rounded text-center hover:bg-[#e07210] transition-colors">📞 (813) 555-0100</a>
              <Link href="contact" className="border-2 border-white text-white font-bold px-6 py-3 rounded text-center hover:bg-white hover:text-[#1B4B8A] transition-colors">Book Online</Link>
            </div>
          </div>
          {/* Seasonal coupon */}
          <div className="border-4 border-dashed border-white/40 rounded-2xl p-8 text-center">
            <p className="text-white/60 text-xs uppercase tracking-widest mb-2">Summer Special</p>
            <div className="text-6xl font-black text-[#F58220] mb-2">$50 OFF</div>
            <p className="text-white font-bold text-xl mb-1">Any AC Repair Service</p>
            <p className="text-white/50 text-sm mb-6">New customers only. Expires 12/31. One per household.</p>
            <Link href="contact" className="inline-block bg-[#F58220] hover:bg-[#e07210] text-white font-bold px-8 py-3 rounded transition-colors">Claim Offer</Link>
          </div>
        </div>
      </section>

      {/* Trust badges strip */}
      <section className="border-b border-gray-100 py-6 px-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-6 justify-center text-sm">
          {["✅ Licensed & Insured","🏆 5-Star Rated","🕐 Same-Day Service","🔧 All Brands Serviced","💳 Financing Available","🛡️ Parts Warranty"].map((b) => (
            <span key={b} className="font-semibold text-gray-700">{b}</span>
          ))}
        </div>
      </section>

      {/* Three service blocks */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {[
            {
              title: "AC Repair", icon: "🔧",
              desc: "Fast, accurate diagnosis and repair for all AC brands. We carry common parts on every truck so most repairs are completed same day. Flat-rate pricing — no surprises.",
              items: ["Refrigerant leak detection & recharge","Compressor, capacitor & contactor replacement","Thermostat replacement & calibration","Drain line cleaning & clog removal","Blower motor & fan blade replacement","Electrical diagnosis & repair"],
              cta: "Schedule Repair",
            },
            {
              title: "AC Installation", icon: "🏠",
              desc: "New system installation from Carrier, Trane, Lennox, and other top brands. We handle everything from proper sizing to permits to hauling away the old unit.",
              items: ["Free in-home load calculation","All major brands carried","Next-day installations available","Full permit and inspection handling","Smart thermostat included","10-year parts & labor warranty available"],
              cta: "Get Free Estimate",
            },
            {
              title: "Maintenance Plans", icon: "📋",
              desc: "Our ComfortPRO maintenance plan keeps your AC running at peak efficiency and extends equipment life. Two visits per year, priority scheduling, and member discounts.",
              items: ["Spring & fall tune-up visits","Priority scheduling — no wait","15% off all repairs","Filter replacement included","Coil cleaning & inspection","Refrigerant level check"],
              cta: "Join Plan — $149/yr",
            },
          ].map((block) => (
            <div key={block.title} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border-b border-gray-100 pb-12 last:border-0 last:pb-0">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{block.icon}</span>
                  <h2 className="text-2xl font-black text-gray-900">{block.title}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-5">{block.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {block.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="text-[#F58220] font-bold mt-0.5 flex-shrink-0">✓</span>{i}
                    </li>
                  ))}
                </ul>
                <Link href="contact" className="inline-block bg-[#1B4B8A] hover:bg-[#153b6e] text-white font-bold px-6 py-3 rounded text-sm transition-colors">{block.cta} →</Link>
              </div>
              <div className="bg-gray-100 rounded-2xl aspect-video flex items-center justify-center text-gray-400 text-sm">{block.title} Photo</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B4B8A] py-14 px-4 text-center">
        <h2 className="text-2xl font-black text-white mb-3">AC Problem? We&apos;re On Our Way.</h2>
        <p className="text-blue-200 mb-8">Same-day service. Honest pricing. 100% satisfaction guaranteed.</p>
        <a href="tel:8135550100" className="inline-block bg-[#F58220] hover:bg-[#e07210] text-white font-black px-10 py-4 rounded text-xl transition-colors">(813) 555-0100</a>
      </section>
    </div>
  );
}
