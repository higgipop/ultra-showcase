// manufacturing capabilities: dark nav, white body, tile grid by category, NAICS, clearances, contract vehicles
import Link from "next/link";

const categories = [
  {
    name: "CNC Machining",
    tiles: ["5-Axis Simultaneous Milling", "3-Axis CNC Milling", "CNC Turning / Lathe", "Swiss-Turn Screw Machining", "Multi-Axis Grinding", "EDM / Wire EDM", "Jig Boring", "Tapping & Threading"],
  },
  {
    name: "Fabrication & Welding",
    tiles: ["TIG Welding (AWS D17.1)", "MIG / GMAW Welding", "Laser Cutting (CO₂ & Fiber)", "Sheet Metal Forming", "Press Brake Bending", "Waterjet Cutting", "Spot / Seam Welding", "Roll Forming"],
  },
  {
    name: "Assembly & Integration",
    tiles: ["Clean Room Assembly (ISO 7)", "Mechanical Sub-Assembly", "Electro-Mechanical Integration", "Functional Testing & Checkout", "Harness & Cable Assembly", "Adhesive Bonding"],
  },
  {
    name: "Quality & Inspection",
    tiles: ["CMM Dimensional Inspection", "First Article Inspection (FAI)", "In-Process SPC/QC", "Non-Destructive Testing (NDT)", "3D Scanning / Reverse Engineering", "Certificate of Conformance"],
  },
];

const naicsCodes = [
  { code: "332710", desc: "Machine Shops" },
  { code: "332721", desc: "Precision Turned Product Manufacturing" },
  { code: "332811", desc: "Metal Heat Treating" },
  { code: "336413", desc: "Other Aircraft Parts & Auxiliary Equipment" },
  { code: "339112", desc: "Surgical & Medical Instrument Manufacturing" },
];

const clearances = [
  { level: "SECRET", count: "12 personnel" },
  { level: "TOP SECRET", count: "4 personnel" },
  { level: "SCI", count: "2 personnel (adjudicated)" },
];

const contractVehicles = ["GSA MAS — Schedule 51V", "SEWP V", "STARS III", "SeaPort-NxG", "DLA SPE / EMALL"];

export default function ManufacturingCapabilities() {
  return (
    <div className="bg-white font-sans">
      {/* Dark nav */}
      <nav className="bg-[#0F1923] top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
          <div className="font-black text-white text-lg tracking-tight">APEX<span className="text-[#1E90FF]">PRECISION</span></div>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-300">
            <Link href="home" className="hover:text-white">Home</Link>
            <Link href="capabilities" className="text-[#1E90FF]">Capabilities</Link>
            <Link href="cnc-machining" className="hover:text-white">CNC</Link>
            <Link href="fabrication" className="hover:text-white">Fabrication</Link>
            <Link href="about" className="hover:text-white">About</Link>
          </div>
          <Link href="contact" className="bg-[#1E90FF] hover:bg-[#1a7fef] text-white font-bold px-4 py-2 rounded text-sm transition-colors">Request RFQ</Link>
        </div>
      </nav>

      {/* Page banner — white */}
      <div className="bg-white border-b border-gray-100 py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#1E90FF] text-xs font-bold uppercase tracking-widest mb-2">Technical Capabilities</p>
          <h1 className="text-4xl font-black text-[#0F1923]">Full-Spectrum Precision Manufacturing</h1>
          <p className="text-gray-500 mt-2">47 active precision programs · ISO 9001:2015 · AS9100 Rev D · ITAR Registered</p>
        </div>
      </div>

      {/* Industry tabs */}
      <div className="border-b border-gray-100 bg-[#F8FAFC] px-4 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
          {["All", "Aerospace", "Medical Devices", "Defense", "Industrial"].map((t) => (
            <span key={t} className={`text-sm font-bold px-4 py-1.5 rounded-full cursor-pointer transition-colors border ${t === "All" ? "bg-[#1E90FF] text-white border-[#1E90FF]" : "border-gray-200 text-gray-600 hover:border-[#1E90FF] hover:text-[#1E90FF]"}`}>{t}</span>
          ))}
        </div>
      </div>

      {/* Tile grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto space-y-10">
          {categories.map((cat) => (
            <div key={cat.name}>
              <h2 className="text-xl font-black text-[#0F1923] mb-4 border-b border-gray-100 pb-3">{cat.name}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {cat.tiles.map((tile) => (
                  <Link key={tile} href="contact"
                    className="bg-white border border-gray-200 hover:border-[#1E90FF] rounded-xl p-5 text-center font-semibold text-gray-800 text-sm transition-all hover:shadow-sm hover:text-[#1E90FF] group">
                    {tile}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stat strip */}
      <section className="bg-[#F8FAFC] border-y border-gray-100 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-3xl font-black text-[#1E90FF]">47 Active Precision Programs</p>
          <p className="text-gray-500 text-sm mt-1">Across aerospace, medical device, defense, and industrial sectors</p>
        </div>
      </section>

      {/* NAICS codes */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-[#0F1923] mb-6">NAICS Codes</h2>
          <div className="border border-gray-100 rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-[#0F1923] text-white">
                <tr>
                  <th className="text-left px-5 py-3 font-bold">NAICS Code</th>
                  <th className="text-left px-5 py-3 font-bold">Description</th>
                </tr>
              </thead>
              <tbody>
                {naicsCodes.map((n, i) => (
                  <tr key={n.code} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3 font-mono font-bold text-[#1E90FF]">{n.code}</td>
                    <td className="px-5 py-3 text-gray-700">{n.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Clearances */}
      <section className="py-12 px-4 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-[#0F1923] mb-6">Personnel Security Clearances</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {clearances.map((c) => (
              <div key={c.level} className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
                <p className="font-black text-[#0F1923] text-xl mb-1">{c.level}</p>
                <p className="text-gray-500 text-sm">{c.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract vehicles */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-[#0F1923] mb-6">Contract Vehicles</h2>
          <div className="flex flex-wrap gap-3">
            {contractVehicles.map((v) => (
              <span key={v} className="bg-[#F8FAFC] border border-gray-200 text-gray-700 font-semibold px-5 py-2.5 rounded-xl text-sm">{v}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1E90FF] py-12 text-center px-4">
        <h2 className="text-2xl font-black text-white mb-6">Ready to discuss your program? 48-hour quote turnaround.</h2>
        <Link href="contact" className="inline-block bg-white hover:bg-gray-100 text-[#1E90FF] font-black px-10 py-4 rounded text-xl transition-colors">Request RFQ</Link>
      </section>
    </div>
  );
}
