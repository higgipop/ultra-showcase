// Design reference: iernaair.com — bold blue/white, phone-dominant, same-day urgency, service grid + coupons
import Link from "next/link";

const services = [
  { icon: "❄️", name: "Air Conditioning", sub: "Repair · Install · Maintenance" },
  { icon: "🔥", name: "Heating", sub: "Furnace · Heat Pump · Boiler" },
  { icon: "💧", name: "Plumbing", sub: "Leak · Drain · Water Heater" },
  { icon: "⚡", name: "Electrical", sub: "Panel · Wiring · Generator" },
  { icon: "🌬️", name: "Indoor Air Quality", sub: "Filtration · UV · Humidity" },
  { icon: "🛠️", name: "Maintenance Plans", sub: "Annual · Bi-Annual · Priority" },
];

const trust = [
  { value: "25+", label: "Years in Business" },
  { value: "22,000+", label: "Happy Customers" },
  { value: "4.9★", label: "Google Rating" },
  { value: "24/7", label: "Emergency Service" },
];

const reviews = [
  { name: "Sandra M.", text: "Called at 10pm on a Sunday. Tech was here within the hour. AC fixed by midnight. Absolute lifesavers.", rating: 5 },
  { name: "Carlos R.", text: "Best HVAC company in Tampa. Same-day appointment, fair pricing, no upsells. Will never call anyone else.", rating: 5 },
  { name: "The Williams Family", text: "They've handled our AC, plumbing, and electrical over the years. Every tech is professional and on time.", rating: 5 },
];

export default function HomeServicesDemo() {
  return (
    <div className="bg-white font-sans">

      {/* Urgency top bar */}
      <div className="bg-[#E84C27] text-white text-center text-sm py-2.5 font-semibold tracking-wide">
        ⚡ Same-Day Service Available · Call Now: (813) 555-0100 · $50 OFF Any Repair →
      </div>

      {/* Hero */}
      <section className="bg-[#0A4DA1] pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px"}} />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#E84C27] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                ⚡ Same-Day &amp; Next-Day Available
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
                Full-Service Comfort.<br />
                <span className="text-[#7DD3FC]">Any Time. Any Season.</span>
              </h1>
              <p className="text-blue-200 text-lg leading-relaxed mb-8">
                AC repair, heating, plumbing, and electrical — all under one roof. Licensed, insured, and available 24/7 for emergencies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:8135550100"
                  className="bg-[#E84C27] hover:bg-[#C73D1F] text-white font-black text-xl px-8 py-4 rounded-xl transition-colors flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" /></svg>
                  (813) 555-0100
                </a>
                <Link href="/contact"
                  className="bg-white/10 hover:bg-white/20 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl transition-colors text-center">
                  Schedule Online
                </Link>
              </div>
            </div>
            {/* Coupon cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { off: "$50 OFF", detail: "Any Repair Service", fine: "New customers only" },
                { off: "0% APR", detail: "Financing Available", fine: "On approved credit" },
                { off: "FREE", detail: "Second Opinion", fine: "On any diagnosis" },
                { off: "$25 OFF", detail: "Tune-Up Service", fine: "Per system, exp. 12/31" },
              ].map((c) => (
                <div key={c.detail} className="bg-white rounded-2xl p-5 text-center border-4 border-dashed border-[#0A4DA1]/20 relative overflow-hidden">
                  <div className="text-3xl font-black text-[#E84C27] mb-1">{c.off}</div>
                  <div className="font-bold text-gray-800 text-sm mb-1">{c.detail}</div>
                  <div className="text-gray-400 text-xs">{c.fine}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-gray-900 py-5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {trust.map((t) => (
            <div key={t.label} className="text-center">
              <p className="text-3xl font-black text-[#7DD3FC] mb-0.5">{t.value}</p>
              <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">{t.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              What Can We Help With Today?
            </h2>
            <p className="text-gray-500 text-lg">One call. Every system.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link key={s.name} href="/contact"
                className="group bg-white rounded-2xl p-7 border-2 border-gray-100 hover:border-[#0A4DA1] hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-black text-gray-900 text-lg mb-1 group-hover:text-[#0A4DA1] transition-colors">{s.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{s.sub}</p>
                <span className="text-sm font-bold text-[#0A4DA1] group-hover:text-[#E84C27] transition-colors">
                  Schedule Now →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-black text-gray-900">What Your Neighbors Say</h2>
              <p className="text-gray-500 mt-1">4.9 stars · 2,847 Google reviews</p>
            </div>
            <div className="hidden md:flex text-yellow-400 text-3xl gap-1">★★★★★</div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
                <div className="flex gap-0.5 mb-4 text-yellow-400">{"★".repeat(r.rating)}</div>
                <p className="text-gray-700 leading-relaxed mb-5 italic">&ldquo;{r.text}&rdquo;</p>
                <p className="font-bold text-gray-900 text-sm">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#0A4DA1] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Problem? We&rsquo;re ready right now.
          </h2>
          <p className="text-blue-200 text-lg mb-8">Same-day appointments available. No trip fee for estimates.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8135550100" className="bg-[#E84C27] hover:bg-[#C73D1F] text-white font-black px-10 py-4 rounded-xl text-xl transition-colors">
              (813) 555-0100
            </a>
            <Link href="/contact" className="bg-white/10 border-2 border-white text-white font-bold px-10 py-4 rounded-xl transition-colors hover:bg-white hover:text-[#0A4DA1]">
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
