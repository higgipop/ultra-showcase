// CNC machining detail: dark nav, white body, 3 content blocks, sidebar with certs
import Link from "next/link";

const blocks = [
  {
    title: "5-Axis Simultaneous Milling",
    specs: [
      { label: "Tolerance", value: "±0.0001\" (±0.0025mm)" },
      { label: "Max Part Size", value: "24\" × 24\" × 18\"" },
      { label: "Materials", value: "Titanium, Inconel, Stainless (15-5, 17-4, 316L), Aluminum (6061, 7075), PEEK, Delrin" },
      { label: "Surface Finish", value: "Ra 16–32 μin standard, Ra 8 achievable" },
      { label: "Equipment", value: "DMG Mori DMU 65 monoBLOCK · Haas UMC-750SS · Matsuura MX-330" },
    ],
    desc: "Simultaneous 5-axis machining allows complex geometries to be machined in a single setup, reducing part handling, improving accuracy, and cutting lead times. Ideal for aerospace structural components, medical implants, and defense hardware with complex contours.",
  },
  {
    title: "CNC Turning & Milling Centers",
    specs: [
      { label: "Max Turning Diameter", value: "16\" diameter × 40\" length" },
      { label: "Tolerance", value: "±0.0002\" diameter" },
      { label: "Materials", value: "All machinable metals and engineering plastics" },
      { label: "Lead Time", value: "5–15 business days depending on complexity" },
      { label: "Equipment", value: "Mazak Integrex i-400 · Haas ST-30 · Miyano ABX-64SYY" },
    ],
    desc: "Our CNC turning centers handle everything from high-volume production runs to low-volume precision shafts, bushings, and connectors. Live tooling capability allows milling, drilling, and threading in a single setup.",
  },
  {
    title: "Multi-Axis Grinding",
    specs: [
      { label: "Surface Finish", value: "Ra 4–8 μin achieved" },
      { label: "Roundness", value: "0.000050\" TIR" },
      { label: "Application Areas", value: "Aerospace bearings, turbine shafts, hydraulic components, precision gauges" },
      { label: "Grinding Methods", value: "OD, ID, Surface, Centerless, Jig, Profile" },
      { label: "Equipment", value: "Studer S33 · Brown & Sharpe Micromaster · Kent KGS-250AH" },
    ],
    desc: "When tolerances require finishes beyond standard machining, our grinding department delivers. We support precision bearing seats, turbine shaft OD grinding, and surface grinding for precision tooling.",
  },
];

const certs = ["ISO 9001:2015 Certified", "AS9100 Rev D Certified", "ITAR Registered", "NADCAP (Heat Treat) Approved", "First Article (AS9102) Capable"];

export default function ManufacturingCNC() {
  return (
    <div className="bg-white font-sans">
      <nav className="bg-[#0F1923]">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
          <div className="font-black text-white text-lg tracking-tight">APEX<span className="text-[#1E90FF]">PRECISION</span></div>
          <div className="hidden md:flex items-center gap-5 text-sm font-semibold text-gray-300">
            <Link href="home" className="hover:text-white">Home</Link>
            <Link href="capabilities" className="hover:text-white">Capabilities</Link>
            <Link href="cnc-machining" className="text-[#1E90FF]">CNC Machining</Link>
            <Link href="fabrication" className="hover:text-white">Fabrication</Link>
          </div>
          <Link href="contact" className="bg-[#1E90FF] hover:bg-[#1a7fef] text-white font-bold px-4 py-2 rounded text-sm transition-colors">Request RFQ</Link>
        </div>
      </nav>

      <div className="bg-white border-b border-gray-100 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-xs text-gray-400 mb-3">
            <Link href="home" className="hover:text-[#1E90FF]">Home</Link> / <Link href="capabilities" className="hover:text-[#1E90FF]">Capabilities</Link> / <span className="text-gray-700">CNC Machining</span>
          </nav>
          <h1 className="text-4xl font-black text-[#0F1923]">CNC Machining Services</h1>
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

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-[#0F1923] rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">48-Hour Quote Turnaround</h3>
              <p className="text-gray-400 text-sm mb-5">Upload your files and receive a detailed quote within 2 business days.</p>
              <Link href="contact" className="block bg-[#1E90FF] hover:bg-[#1a7fef] text-white font-bold py-3 rounded-xl text-center transition-colors text-sm">Request RFQ</Link>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="font-black text-[#0F1923] mb-4">Certifications</h3>
              <ul className="space-y-2">
                {certs.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="text-[#1E90FF] font-bold mt-0.5">✓</span> {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-5">
              <p className="font-bold text-[#0F1923] text-sm mb-2">File Formats Accepted</p>
              <p className="text-gray-500 text-sm">.STEP · .STP · .IGES · .DWG · .DXF · .PDF</p>
              <p className="text-gray-400 text-xs mt-2">NDA available upon request before file submission</p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              <p className="font-bold text-[#0F1923] text-sm mb-3">Related Capabilities</p>
              <div className="space-y-2">
                {["Fabrication & Welding", "Clean Room Assembly", "Quality Inspection (CMM)"].map((cap) => (
                  <Link key={cap} href="capabilities" className="block text-[#1E90FF] text-sm hover:underline">{cap} →</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#1E90FF] py-10 text-center px-4">
        <h2 className="text-2xl font-black text-white mb-5">Ready to discuss your machining program?</h2>
        <Link href="contact" className="inline-block bg-white hover:bg-gray-100 text-[#1E90FF] font-black px-10 py-4 rounded text-lg transition-colors">Request RFQ</Link>
      </section>
    </div>
  );
}
