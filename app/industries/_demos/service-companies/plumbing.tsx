import Link from "next/link";

const plumbingServices = [
  { title: "Emergency Plumbing", desc: "Burst pipes, major leaks, sewage backups — 24/7 dispatch with 60-minute response.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop" },
  { title: "Drain Cleaning", desc: "Camera inspection, hydro-jetting, rooter service for kitchen, bath, and main line clogs.", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80&auto=format&fit=crop" },
  { title: "Water Heater", desc: "Same-day water heater repair and replacement. All brands, tank and tankless.", img: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80&auto=format&fit=crop" },
  { title: "Leak Detection", desc: "Electronic leak detection for hidden pipe leaks. Slab leak specialists.", img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80&auto=format&fit=crop" },
  { title: "Fixture Repair", desc: "Faucets, toilets, showers, garbage disposals — all brands, same day.", img: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=600&q=80&auto=format&fit=crop" },
  { title: "Repiping", desc: "Whole-home repiping in PEX or copper. Licensed, permitted, with warranty.", img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80&auto=format&fit=crop" },
];

export default function Plumbing() {
  return (
    <div className="bg-white font-sans">
      <div className="bg-[#DC2626] text-white text-center text-sm py-2 font-semibold">
        Plumbing Emergency? Available 24/7 · <a href="tel:8132056160" className="underline">(813) 205-6160</a>
      </div>
      <nav className="bg-white border-b border-gray-200 sticky top-[36px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-[#1B4B8A] text-xl tracking-tight">COMFORT<span className="text-[#F58220]">PRO</span></Link>
          <div className="hidden lg:flex gap-6 text-sm font-semibold text-gray-700">
            <Link href="air-conditioning" className="hover:text-[#1B4B8A]">Air Conditioning</Link>
            <Link href="plumbing" className="text-[#1B4B8A]">Plumbing</Link>
            <Link href="services" className="hover:text-[#1B4B8A]">All Services</Link>
          </div>
          <a href="tel:8132056160" className="bg-[#DC2626] hover:bg-red-700 text-white font-black px-4 py-2 rounded text-sm transition-colors">EMERGENCY LINE</a>
        </div>
      </nav>

      {/* Photo hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=80&auto=format&fit=crop" alt="Plumber at work" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B4B8A] via-[#1B4B8A]/65 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 pb-14 w-full">
          <div className="inline-block bg-[#DC2626] text-white text-xs font-black px-3 py-1.5 rounded uppercase tracking-wider mb-4">24/7 Emergency Service</div>
          <h1 className="text-3xl lg:text-5xl font-black text-white leading-tight mb-4">Emergency &amp; Residential Plumbing</h1>
          <p className="text-blue-200 leading-relaxed mb-6 max-w-2xl">Burst pipe? Clogged drain? No hot water? We dispatch a licensed plumber within 60 minutes — day or night, weekends and holidays.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:8132056160" className="bg-[#DC2626] hover:bg-red-700 text-white font-black px-6 py-4 rounded text-lg text-center transition-colors">Emergency Line</a>
            <Link href="contact" className="border-2 border-white text-white font-bold px-6 py-4 rounded text-center hover:bg-white hover:text-[#1B4B8A] transition-colors">Schedule Non-Emergency</Link>
          </div>
        </div>
      </section>

      {/* Response time callout */}
      <section className="bg-white border-b border-gray-100 py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3">
            <h2 className="text-xl font-black text-gray-900 mb-3">How Fast We Get There</h2>
            <p className="text-gray-500 text-sm">Licensed plumbers on-call 24 hours a day, 365 days a year.</p>
          </div>
          <div className="lg:col-span-2 bg-[#F8FAFC] border border-gray-100 rounded-2xl p-6">
            <p className="text-gray-500 text-sm mb-2 font-semibold text-center">Average Response Time</p>
            <div className="text-5xl font-black text-[#1B4B8A] text-center mb-1">47 min</div>
            <p className="text-gray-400 text-xs text-center mb-4">across Tampa Bay area</p>
            <div className="space-y-2 text-sm border-t border-gray-200 pt-4">
              <div className="flex justify-between"><span className="text-gray-500">Tampa</span><span className="font-bold text-gray-800">~35 min</span></div>
              <div className="flex justify-between"><span className="text-gray-500">St. Pete / Clearwater</span><span className="font-bold text-gray-800">~50 min</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Brandon / Riverview</span><span className="font-bold text-gray-800">~45 min</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Service cards with unique photos */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-8">Plumbing Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {plumbingServices.map((s) => (
              <div key={s.title} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-video overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-black text-gray-900 mb-2 group-hover:text-[#1B4B8A] transition-colors">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/after split */}
      <section className="bg-[#F8FAFC] border-y border-gray-100 py-14 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="rounded-xl overflow-hidden aspect-square">
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80&auto=format&fit=crop" alt="Plumbing before" className="w-full h-full object-cover" />
              </div>
              <p className="text-center text-xs font-bold text-gray-400 mt-2 uppercase tracking-wider">Before</p>
            </div>
            <div>
              <div className="rounded-xl overflow-hidden aspect-square">
                <img src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&q=80&auto=format&fit=crop" alt="Plumbing after" className="w-full h-full object-cover" />
              </div>
              <p className="text-center text-xs font-bold text-gray-400 mt-2 uppercase tracking-wider">After</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Done Right, the First Time</h2>
            <p className="text-gray-600 leading-relaxed mb-5">Our licensed plumbers carry commercial-grade parts and tools. We don&apos;t patch — we fix. Every job comes with a written warranty and a satisfaction guarantee.</p>
            <ul className="space-y-2 text-sm text-gray-700">
              {["90-day parts & labor warranty on all repairs","Licensed, background-checked technicians","Written estimate before any work begins","We clean up when the job is done"].map((item) => (
                <li key={item} className="flex items-start gap-2"><span className="text-[#F58220] font-black">✓</span>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B4B8A] py-14 text-center px-4">
        <h2 className="text-2xl font-black text-white mb-3">Plumbing Problem? Don&apos;t Wait.</h2>
        <p className="text-blue-200 mb-6">Small leaks become big damage fast. We dispatch same-day.</p>
        <a href="tel:8132056160" className="inline-block bg-[#F58220] hover:bg-[#e07210] text-white font-black px-10 py-4 rounded text-xl transition-colors">(813) 205-6160</a>
      </section>
    </div>
  );
}
