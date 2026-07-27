"use client";
import { useState } from "react";
import Link from "next/link";

const filters = ["All","Machining","Fabrication","Inspection","Assembly","Finishing"];

const items = [
  { cat: "Machining", name: "3-Axis CNC Milling", detail: "Up to 40\" x 20\" x 20\" travel. ±0.0005\" typical tolerance." },
  { cat: "Machining", name: "4/5-Axis Milling", detail: "Complex contoured surfaces. Reduces setups for complex parts." },
  { cat: "Machining", name: "CNC Turning / Lathe", detail: "Up to 24\" dia. Swiss-style turning for small-diameter precision parts." },
  { cat: "Machining", name: "Grinding", detail: "Surface, cylindrical, and ID/OD grinding. Mirror finish available." },
  { cat: "Machining", name: "EDM (Sinker & Wire)", detail: "Wire EDM to 0.0001\" accuracy. Sinker for internal geometry." },
  { cat: "Machining", name: "Drilling & Boring", detail: "Deep-hole drilling, jig boring, precision boring bars." },
  { cat: "Fabrication", name: "TIG Welding", detail: "AWS D1.1, D1.2. Certified in carbon steel, stainless, aluminum, titanium." },
  { cat: "Fabrication", name: "MIG Welding", detail: "High-production structural welding. ASME Sec IX qualified." },
  { cat: "Fabrication", name: "Laser Cutting", detail: "Up to 1\" steel, 0.75\" stainless, 0.5\" aluminum. ±0.005\" accuracy." },
  { cat: "Fabrication", name: "Sheet Metal Forming", detail: "Bending, punching, stamping. Up to 10 gauge. Custom tooling available." },
  { cat: "Inspection", name: "CMM Inspection", detail: "Zeiss Contura CMM. Full GD&T per ASME Y14.5. FAI/PPAP reporting." },
  { cat: "Inspection", name: "First Article Inspection", detail: "AS9102 FAIR compliance. Full ballooned prints and data packages." },
  { cat: "Inspection", name: "In-Process QC", detail: "Statistical Process Control (SPC). Cp/Cpk reporting available." },
  { cat: "Assembly", name: "Sub-Assembly", detail: "Mechanical sub-assembly to customer spec. Torque-certified fastening." },
  { cat: "Assembly", name: "Kitting & Packaging", detail: "MIL-spec packaging, labeling, and serialization." },
  { cat: "Finishing", name: "Anodizing (Type II/III)", detail: "In-house anodizing capability. Type III hard coat up to 0.002\" per side." },
  { cat: "Finishing", name: "Chromate Conversion", detail: "MIL-DTL-5541 Type I and II. RoHS compliant options." },
  { cat: "Finishing", name: "Powder Coating", detail: "Full color range. 60+ standard colors. Masking capability." },
];

export default function ManufacturingCapabilities() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <div className="bg-white font-sans">
      <div className="bg-[#0F1923] text-white text-center text-xs py-2 font-semibold tracking-wider">
        ISO 9001:2015 · AS9100D · ITAR · 48-Hour RFQ Response
      </div>
      <nav className="bg-[#0F1923] border-t border-white/5 sticky top-[32px] z-40">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-white text-xl">APEX<span className="text-[#1E90FF]">MFG</span></Link>
          <div className="hidden lg:flex gap-6 text-sm font-semibold text-gray-300">
            <Link href="capabilities" className="text-white">Capabilities</Link>
            <Link href="cnc-machining" className="hover:text-white">CNC</Link>
            <Link href="fabrication" className="hover:text-white">Fabrication</Link>
            <Link href="about" className="hover:text-white">About</Link>
          </div>
          <Link href="contact" className="bg-[#1E90FF] hover:bg-blue-600 text-white font-bold px-4 py-2 rounded text-sm transition-colors">Submit RFQ</Link>
        </div>
      </nav>

      {/* Photo hero */}
      <section className="relative min-h-[42vh] flex items-end overflow-hidden">
        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1800&q=80&auto=format&fit=crop" alt="Manufacturing facility" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1923] via-[#0F1923]/75 to-[#0F1923]/20" />
        <div className="relative max-w-7xl mx-auto px-4 pb-12 w-full">
          <h1 className="text-4xl font-black text-white mb-4">Full Capabilities</h1>
          <p className="text-gray-300 text-lg max-w-2xl mb-6">Complete list of our manufacturing, inspection, and finishing capabilities. All work is performed in our ISO-certified facility in Orlando, FL.</p>
          <div className="flex flex-wrap gap-2">
            {["CAGE: 5XY31","NAICS: 332710","NAICS: 332721","NAICS: 336412","ITAR Registered","SAM.gov Active"].map((b) => (
              <span key={b} className="border border-white/20 text-white/80 text-xs font-semibold px-3 py-1.5 rounded-full">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Filter tabs + grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 mb-8 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${active === f ? "bg-[#0F1923] text-white" : "border border-gray-200 text-gray-600 hover:border-[#1E90FF] hover:text-[#1E90FF]"}`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((item) => (
              <div key={item.name} className="border border-gray-100 rounded-xl p-5 hover:border-[#1E90FF]/40 hover:shadow-sm transition-all">
                <p className="text-[#1E90FF] text-xs font-bold uppercase tracking-widest mb-1">{item.cat}</p>
                <h3 className="font-black text-[#0F1923] mb-2">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clearances + contract vehicles */}
      <section className="bg-[#0F1923] py-14 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-black text-white mb-5">Government & Defense</h2>
            <div className="space-y-3">
              {[["DFARS Compliant","Buy American Act compliant material sourcing"],["ITAR Registered","State Dept. registration for defense articles"],["DCSA Facility Clearance","Cleared for unclassified defense work"],["DLA Supplier","Active supplier for Defense Logistics Agency"],["MIL-SPEC Programs","MIL-STD, MIL-DTL, MIL-PRF specifications"]].map(([label, desc]) => (
                <div key={label} className="border border-white/10 rounded-xl p-4">
                  <p className="font-bold text-white text-sm">{label}</p>
                  <p className="text-white/50 text-xs">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-black text-white mb-5">Contract Vehicles</h2>
            <div className="space-y-3">
              {["GSA Schedule 51 V — Hardware Superstore","DLA TechConnect — Direct Award","SEWP V — IT Hardware & Services","State of Florida Preferred Vendor","Open Market — All agency direct purchase"].map((v) => (
                <div key={v} className="flex items-start gap-3 border border-white/10 rounded-xl p-4">
                  <span className="text-[#1E90FF] font-black mt-0.5 flex-shrink-0">›</span>
                  <span className="text-white/70 text-sm">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RFQ CTA */}
      <section className="py-14 px-4 text-center">
        <h2 className="text-2xl font-black text-[#0F1923] mb-3">Don&apos;t See What You Need?</h2>
        <p className="text-gray-500 mb-8">Contact us — our engineering team handles custom requirements.</p>
        <Link href="contact" className="inline-block bg-[#1E90FF] hover:bg-blue-600 text-white font-black px-10 py-4 rounded text-lg transition-colors">Request a Quote →</Link>
      </section>
    </div>
  );
}
