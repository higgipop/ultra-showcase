import Link from "next/link";

export default function Plumbing() {
  return (
    <div className="bg-white font-sans">
      <div className="bg-[#DC2626] text-white text-center text-sm py-2 font-semibold">
        🚨 Plumbing Emergency? We&apos;re Available 24/7 · <a href="tel:8135550100" className="underline">(813) 555-0100</a>
      </div>
      <nav className="bg-white border-b border-gray-200 sticky top-[36px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-[#1B4B8A] text-xl tracking-tight">COMFORT<span className="text-[#F58220]">PRO</span></Link>
          <div className="hidden lg:flex gap-6 text-sm font-semibold text-gray-700">
            <Link href="air-conditioning" className="hover:text-[#1B4B8A]">Air Conditioning</Link>
            <Link href="plumbing" className="text-[#1B4B8A]">Plumbing</Link>
            <Link href="services" className="hover:text-[#1B4B8A]">All Services</Link>
          </div>
          <a href="tel:8135550100" className="bg-[#DC2626] hover:bg-red-700 text-white font-black px-4 py-2 rounded text-sm transition-colors">EMERGENCY: (813) 555-0100</a>
        </div>
      </nav>

      {/* Emergency hero */}
      <section className="bg-[#1B4B8A] py-14 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3">
            <div className="inline-block bg-[#DC2626] text-white text-xs font-black px-3 py-1.5 rounded uppercase tracking-wider mb-4">24/7 Emergency Service</div>
            <h1 className="text-4xl font-black text-white leading-tight mb-4">Emergency & Residential Plumbing</h1>
            <p className="text-blue-200 leading-relaxed mb-8">Burst pipe? Clogged drain? No hot water? We dispatch a licensed plumber within 60 minutes — day or night, weekends and holidays.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:8135550100" className="bg-[#DC2626] hover:bg-red-700 text-white font-black px-6 py-4 rounded text-lg text-center transition-colors">🚨 Emergency Line</a>
              <Link href="contact" className="border-2 border-white text-white font-bold px-6 py-4 rounded text-center hover:bg-white hover:text-[#1B4B8A] transition-colors">Schedule Non-Emergency</Link>
            </div>
          </div>
          {/* Response time callout */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 text-center">
            <p className="text-gray-500 text-sm mb-2 font-semibold">Average Response Time</p>
            <div className="text-6xl font-black text-[#1B4B8A] mb-1">47 min</div>
            <p className="text-gray-400 text-sm mb-4">across Tampa Bay area</p>
            <div className="border-t border-gray-100 pt-4 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-500">Tampa</span><span className="font-bold text-gray-800">~35 min</span></div>
              <div className="flex justify-between"><span className="text-gray-500">St. Pete / Clearwater</span><span className="font-bold text-gray-800">~50 min</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Brandon / Riverview</span><span className="font-bold text-gray-800">~45 min</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-8">Plumbing Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🚿", title: "Emergency Plumbing", desc: "Burst pipes, major leaks, sewage backups — 24/7 dispatch with 60-minute response." },
              { icon: "🪠", title: "Drain Cleaning", desc: "Camera inspection, hydro-jetting, rooter service for kitchen, bath, and main line clogs." },
              { icon: "🚰", title: "Water Heater", desc: "Same-day water heater repair and replacement. All brands, tank and tankless." },
              { icon: "🔧", title: "Leak Detection", desc: "Electronic leak detection for hidden pipe leaks. Slab leak specialists." },
              { icon: "🛁", title: "Fixture Repair", desc: "Faucets, toilets, showers, garbage disposals — all brands, same day." },
              { icon: "🏗️", title: "Repiping", desc: "Whole-home repiping in PEX or copper. Licensed, permitted, with warranty." },
            ].map((s) => (
              <div key={s.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-[#1B4B8A] hover:shadow-md transition-all">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-black text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <Link href="contact" className="text-[#1B4B8A] font-bold text-sm hover:underline">Schedule →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="bg-gray-50 border-y border-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-2">Real Results</h2>
          <p className="text-gray-500 mb-8">Before & after from recent Tampa Bay jobs.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {["Burst Pipe Repair","Water Heater Replacement","Slab Leak Detection"].map((job) => (
              <div key={job}>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div className="bg-gray-200 aspect-square rounded-xl flex items-center justify-center text-gray-400 text-xs">Before</div>
                  <div className="bg-green-100 aspect-square rounded-xl flex items-center justify-center text-green-400 text-xs">After</div>
                </div>
                <p className="text-sm font-bold text-gray-700 text-center">{job}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-[#DC2626] py-14 px-4 text-center">
        <h2 className="text-3xl font-black text-white mb-3">Plumbing Emergency Right Now?</h2>
        <p className="text-white/80 text-lg mb-8">Don&apos;t wait. Every minute counts with an active leak or backup.</p>
        <a href="tel:8135550100" className="inline-block bg-white text-[#DC2626] font-black px-12 py-5 rounded text-2xl hover:bg-gray-50 transition-colors">(813) 555-0100</a>
      </section>
    </div>
  );
}
