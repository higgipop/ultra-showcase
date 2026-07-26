import Link from "next/link";

const processes = [
  {
    icon: "🔥",
    title: "TIG Welding (GTAW)",
    certs: ["AWS D1.1 (Structural Steel)","AWS D1.2 (Structural Aluminum)","ASME Section IX","MIL-STD-2219 (Aluminum)"],
    desc: "Gas Tungsten Arc Welding for high-quality, precision welds on thin materials. Used for stainless steel, aluminum, titanium, and exotic alloys where weld quality is critical.",
    specs: [["Materials","Steel, SS, Aluminum, Titanium, Inconel"],["Thickness","0.030\" – 1.5\""],["Tolerances","±0.010\" typical on formed parts"],["Wire Sizes","0.035\" – 3/32\""]],
  },
  {
    icon: "⚡",
    title: "MIG Welding (GMAW)",
    certs: ["AWS D1.1","AWS D1.3 (Sheet Steel)","ASME Section IX"],
    desc: "Gas Metal Arc Welding for high-deposition, structural welding applications. Ideal for production runs, thicker material, and structural assemblies requiring speed without sacrificing quality.",
    specs: [["Materials","Carbon steel, stainless, aluminum"],["Thickness","0.060\" – 4\""],["Process","Spray, short-circuit, pulsed-MIG"],["Shielding","Argon, CO2, 75/25 blends"]],
  },
  {
    icon: "💡",
    title: "Laser Cutting (Fiber)",
    certs: ["ISO 9013 (Laser Cut Quality)","ASME Y14.5 GD&T"],
    desc: "Fiber laser cutting for flat sheet and plate. Narrow kerf width, minimal heat-affected zone, and excellent edge quality. Nesting software maximizes material yield.",
    specs: [["Steel","Up to 1.0\" mild steel, 0.75\" stainless"],["Aluminum","Up to 0.5\" 6061"],["Accuracy","±0.005\""],["Sheet Size","Up to 60\" x 120\""]],
  },
  {
    icon: "📐",
    title: "Sheet Metal Forming",
    certs: ["ASME Y14.5","DIN 6935 (Bending)"],
    desc: "Precision bending, punching, forming, and shearing for enclosures, brackets, panels, and structural components. CNC press brakes ensure repeatable bend angles.",
    specs: [["Bending","CNC press brake, up to 175 tons, 10' capacity"],["Punching","Turret punch, 58-station, up to 10 gauge"],["Shearing","Up to 0.25\" steel, 12' length"],["Forming","Hemming, flanging, embossing"]],
  },
];

export default function Fabrication() {
  return (
    <div className="bg-white font-sans">
      <div className="bg-[#0F1923] text-center text-white text-xs py-2 font-semibold tracking-wider">ISO 9001:2015 · AS9100D · ITAR · AWS / ASME Certified Welders</div>
      <nav className="bg-[#0F1923] border-t border-white/5 sticky top-[32px] z-40">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-white text-xl">APEX<span className="text-[#1E90FF]">MFG</span></Link>
          <div className="hidden lg:flex gap-6 text-sm font-semibold text-gray-300">
            <Link href="capabilities" className="hover:text-white">Capabilities</Link>
            <Link href="cnc-machining" className="hover:text-white">CNC</Link>
            <Link href="fabrication" className="text-white">Fabrication</Link>
            <Link href="about" className="hover:text-white">About</Link>
          </div>
          <Link href="contact" className="bg-[#1E90FF] hover:bg-blue-600 text-white font-bold px-4 py-2 rounded text-sm transition-colors">Submit RFQ</Link>
        </div>
      </nav>

      {/* Header */}
      <section className="border-b border-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-black text-[#0F1923] mb-2">Metal Fabrication</h1>
          <p className="text-gray-500 text-lg">TIG Welding · MIG Welding · Laser Cutting · Sheet Metal Forming</p>
        </div>
      </section>

      {/* Process cards with cert icons */}
      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto space-y-10">
          {processes.map((p) => (
            <div key={p.title} className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="bg-[#0F1923] p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-4xl mb-4 block">{p.icon}</span>
                    <h2 className="font-black text-white text-xl mb-3">{p.title}</h2>
                    <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="mt-6">
                    <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-2">Certifications</p>
                    {p.certs.map((c) => (
                      <p key={c} className="text-white/60 text-xs mb-1">• {c}</p>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-2 p-8">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Specifications</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {p.specs.map(([label, value]) => (
                      <div key={label} className="bg-gray-50 border border-gray-100 rounded-lg p-3">
                        <p className="text-xs font-bold text-gray-400 mb-0.5">{label}</p>
                        <p className="text-sm font-semibold text-[#0F1923]">{value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-100 rounded-xl aspect-video flex items-center justify-center text-gray-400 text-sm">{p.title} Photo</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RFQ CTA */}
      <section className="bg-[#0F1923] py-14 px-4 text-center">
        <h2 className="text-2xl font-black text-white mb-3">Have a Fabrication Requirement?</h2>
        <p className="text-white/60 mb-8">Upload your drawings or describe your project. We respond to all RFQs within 48 hours.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="contact" className="bg-[#1E90FF] hover:bg-blue-600 text-white font-black px-10 py-4 rounded text-lg transition-colors">Submit RFQ</Link>
          <Link href="capabilities" className="border border-white/30 hover:border-white text-white font-bold px-10 py-4 rounded transition-colors">Full Capabilities</Link>
        </div>
      </section>
    </div>
  );
}
