// fabrication: dark nav, white body, TIG/MIG welding + laser cutting + sheet metal content blocks
import Link from "next/link";

const blocks = [
  {
    title: "TIG & MIG Welding",
    specs: [
      { label: "Standards", value: "AWS D17.1 (Aero) · AWS D1.1 (Structural) · ASME Section IX" },
      { label: "Materials", value: "Stainless steel, titanium, aluminum, Inconel, carbon steel" },
      { label: "Weld Types", value: "Butt, fillet, groove, plug, slot, flare-bevel" },
      { label: "Thickness", value: "0.020\" sheet to 4\" structural" },
      { label: "Equipment", value: "Miller Dynasty 350 TIG · Lincoln Power MIG 350MP · KUKA welding robot" },
    ],
    desc: "Our certified welders hold AWS and ASME qualifications for aerospace and structural welding. We support precision TIG welding for thin-wall aerospace tubing, high-strength MIG welding for structural fabrications, and robotic welding for repeatable production runs.",
  },
  {
    title: "Laser Cutting",
    specs: [
      { label: "Cutting Methods", value: "CO₂ Laser · Fiber Laser" },
      { label: "Max Sheet Size", value: "60\" × 120\" flat (4ft × 10ft)" },
      { label: "Thickness Range", value: "0.005\" stainless to 1\" mild steel" },
      { label: "Tolerance", value: "±0.005\" positional" },
      { label: "Equipment", value: "Trumpf TruLaser 5030 Fiber · AMADA LC-2012C1 NT" },
    ],
    desc: "High-precision laser cutting for sheet metal, structural profiles, and prototype parts. Fiber laser technology delivers clean, burr-free edges on stainless steel, aluminum, and carbon steel. We handle both high-volume production blanks and low-volume precision prototypes.",
  },
  {
    title: "Sheet Metal Forming & Bending",
    specs: [
      { label: "Press Brake Capacity", value: "275 ton × 12&apos; bed" },
      { label: "Forming Tolerance", value: "±0.010\" angular" },
      { label: "Materials", value: "Steel, stainless, aluminum, copper, brass" },
      { label: "Min Flange", value: "0.120\" (3mm)" },
      { label: "Equipment", value: "Bystronic Xpert 150 · AMADA HG 8025 · RAS 52.10" },
    ],
    desc: "Our sheet metal department supports precision press brake forming, roll forming, and hydroforming for complex enclosures, brackets, panels, and structural members. We work from DXF flat patterns or 3D solid models.",
  },
];

export default function ManufacturingFabrication() {
  return (
    <div className="bg-white font-sans">
      <nav className="bg-[#0F1923]">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
          <div className="font-black text-white text-lg tracking-tight">APEX<span className="text-[#1E90FF]">PRECISION</span></div>
          <div className="hidden md:flex items-center gap-5 text-sm font-semibold text-gray-300">
            <Link href="home" className="hover:text-white">Home</Link>
            <Link href="capabilities" className="hover:text-white">Capabilities</Link>
            <Link href="cnc-machining" className="hover:text-white">CNC Machining</Link>
            <Link href="fabrication" className="text-[#1E90FF]">Fabrication</Link>
          </div>
          <Link href="contact" className="bg-[#1E90FF] hover:bg-[#1a7fef] text-white font-bold px-4 py-2 rounded text-sm transition-colors">Request RFQ</Link>
        </div>
      </nav>

      <div className="bg-white border-b border-gray-100 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-xs text-gray-400 mb-3">
            <Link href="home" className="hover:text-[#1E90FF]">Home</Link> / <Link href="capabilities" className="hover:text-[#1E90FF]">Capabilities</Link> / <span className="text-gray-700">Fabrication</span>
          </nav>
          <h1 className="text-4xl font-black text-[#0F1923]">Fabrication &amp; Welding Services</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-[1fr_280px] gap-10">
          <div className="space-y-12">
            {blocks.map((block) => (
              <div key={block.title} className="border border-gray-100 rounded-2xl overflow-hidden">
                <div className="bg-[#F8FAFC] px-6 py-4 border-b border-gray-100">
                  <h2 className="text-xl font-black text-[#0F1923]">{block.title}</h2>
                </div>
                <div className="p-6">
                  <div className="bg-gray-100 rounded-xl aspect-[16/7] flex items-center justify-center text-gray-400 text-sm mb-6">
                    Process / Equipment Photo Placeholder
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">{block.desc}</p>
                  <div className="border border-gray-100 rounded-xl overflow-hidden mb-4">
                    {block.specs.map((spec, i) => (
                      <div key={spec.label} className={`flex gap-4 px-5 py-3 text-sm ${i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}`}>
                        <span className="font-bold text-gray-500 w-32 flex-shrink-0">{spec.label}</span>
                        <span className="text-gray-800">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="contact" className="text-[#1E90FF] font-bold text-sm hover:underline">Request a Quote for {block.title} →</Link>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-5">
            <div className="bg-[#0F1923] rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">48-Hour Quote Turnaround</h3>
              <p className="text-gray-400 text-sm mb-5">Submit your DXF, DWG, or STEP file for a detailed fabrication quote.</p>
              <Link href="contact" className="block bg-[#1E90FF] hover:bg-[#1a7fef] text-white font-bold py-3 rounded-xl text-center transition-colors text-sm">Request RFQ</Link>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="font-black text-[#0F1923] mb-4">Weld Certifications</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                {["AWS D17.1 — Aerospace", "AWS D1.1 — Structural Steel", "AWS D1.3 — Sheet Metal", "ASME Section IX — Pressure Vessel", "MIL-STD-2219 — Fusion Welding"].map((c) => (
                  <li key={c} className="flex items-start gap-2"><span className="text-[#1E90FF] font-bold mt-0.5">✓</span> {c}</li>
                ))}
              </ul>
            </div>

            <div className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-5">
              <p className="font-bold text-[#0F1923] text-sm mb-2">File Formats Accepted</p>
              <p className="text-gray-500 text-sm">.DXF · .DWG · .STEP · .STP · .IGES · .PDF</p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              <p className="font-bold text-[#0F1923] text-sm mb-3">Related Capabilities</p>
              <div className="space-y-2">
                {["CNC Machining", "Clean Room Assembly", "Quality Inspection (CMM)"].map((cap) => (
                  <Link key={cap} href="capabilities" className="block text-[#1E90FF] text-sm hover:underline">{cap} →</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#1E90FF] py-10 text-center px-4">
        <h2 className="text-2xl font-black text-white mb-5">Let&apos;s discuss your fabrication requirements.</h2>
        <Link href="contact" className="inline-block bg-white hover:bg-gray-100 text-[#1E90FF] font-black px-10 py-4 rounded text-lg transition-colors">Request RFQ</Link>
      </section>
    </div>
  );
}
