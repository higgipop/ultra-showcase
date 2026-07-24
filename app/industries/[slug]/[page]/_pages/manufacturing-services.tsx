import Link from "next/link";

const capabilities = [
  {
    name: "CNC Machining",
    icon: "⚙️",
    desc: "5-axis milling and multi-axis turning for the most complex geometries in aerospace, medical, and defense applications. Tolerances to ±0.0001\".",
    equipment: ["Mazak Integrex i-200S (5-axis)", "Haas VF-5SS (3-axis)", "DMG Mori NTX 2000 (mill-turn)", "Studer S33 (OD/ID grinding)"],
    tolerances: "±0.0001\" standard · ±0.00005\" achievable",
    materials: "Titanium · Inconel · Hastelloy · 17-4 PH · PEEK · Kovar",
    leadTime: "Proto: 5–10 days · Production: per program",
  },
  {
    name: "Fabrication & Welding",
    icon: "🔥",
    desc: "AWS-certified welders for TIG, MIG, and orbital tube welding on stainless, aluminum, titanium, and exotic alloys. Laser cutting to 0.005\" kerf on sheet up to 1\".",
    equipment: ["Lincoln Electric WAVE TIG 200", "Miller Dynasty 280 (AC/DC TIG)", "Trumpf TruLaser 3030 (CO₂ laser)", "LVD PPEB-H press brake (CNC)"],
    tolerances: "Sheet fabrication ±0.010\" · Weld per AWS D1.1/D17.1",
    materials: "304/316L SS · 6061-T6 Al · CP Titanium Grade 2/5 · Inconel 625",
    leadTime: "Fab: 3–7 days · Assembly: per scope",
  },
  {
    name: "Assembly & Integration",
    icon: "🔧",
    desc: "Clean room sub-assembly and full system integration with functional verification testing. Class 10,000 clean room available for medical and semiconductor components.",
    equipment: ["Class 10,000 (ISO 7) clean room", "Torque-controlled assembly stations", "CMM verification stations", "Functional test benches (custom)"],
    tolerances: "Per assembly drawing · IPC-A-610 solder · ISO 13485 traceability",
    materials: "All materials per BOM · Lot-controlled for medical builds",
    leadTime: "Per program schedule · Kanban available",
  },
  {
    name: "Quality & Inspection",
    icon: "🔬",
    desc: "100% first article inspection with full CMM reporting per AS9102. In-process SPC and final acceptance testing with full documentation packages including certs, MTRs, and PPAP.",
    equipment: ["Zeiss Contura G2 CMM (7-axis probe)", "Keyence IM-7030 vision system", "Mitutoyo surface roughness tester", "Hardness tester (Rockwell/Brinell)"],
    tolerances: "Per drawing GD&T · ASME Y14.5-2018",
    materials: "Full MTR review · COC with every shipment",
    leadTime: "FAI: 2 days · Production inspection: inline",
  },
];

const certs = ["ISO 9001:2015", "AS9100 Rev D", "ISO 13485:2016", "ITAR Registered", "NADCAP (Heat Treat)", "NADCAP (NDT)"];

export default function ManufacturingServicesPage() {
  return (
    <div className="bg-white font-sans">
      {/* Cert bar */}
      <div className="bg-[#0F1923] text-white/40 text-center text-xs py-2.5 tracking-widest font-semibold uppercase">
        ISO 9001:2015 · AS9100 Rev D · ISO 13485 · ITAR · NADCAP
      </div>

      {/* Hero */}
      <section className="bg-[#0F1923] pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "repeating-linear-gradient(0deg, #1E90FF 0, #1E90FF 1px, transparent 0, transparent 80px), repeating-linear-gradient(90deg, #1E90FF 0, #1E90FF 1px, transparent 0, transparent 80px)"}} />
        <div className="max-w-7xl mx-auto px-6 relative text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{color: "#1E90FF"}}>Capabilities</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Precision. At Every Step.</h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto mb-8">
            Full-spectrum precision manufacturing from raw material to final inspection. Every process documented. Every tolerance verified.
          </p>
          <Link href="/contact" className="inline-block font-bold px-8 py-4 rounded text-black transition-opacity hover:opacity-90" style={{backgroundColor: "#1E90FF"}}>
            Request an RFQ
          </Link>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {capabilities.map((cap) => (
            <div key={cap.name} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <div className="bg-[#0F1923] px-7 py-5 flex items-center gap-4">
                <span className="text-3xl">{cap.icon}</span>
                <h2 className="font-black text-white text-xl">{cap.name}</h2>
              </div>
              <div className="grid lg:grid-cols-3 p-7 gap-7">
                <div className="lg:col-span-1">
                  <p className="text-gray-600 leading-relaxed mb-5">{cap.desc}</p>
                  <Link href="/contact" className="block text-center font-bold py-2.5 rounded-lg text-sm transition-opacity hover:opacity-90" style={{backgroundColor: "#1E90FF", color: "white"}}>
                    Request RFQ for {cap.name}
                  </Link>
                </div>
                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Equipment</p>
                    <ul className="space-y-1.5">
                      {cap.equipment.map((e) => (
                        <li key={e} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{backgroundColor: "#1E90FF"}} />
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Tolerances</p>
                      <p className="text-sm text-gray-700 font-mono">{cap.tolerances}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Materials</p>
                      <p className="text-sm text-gray-600">{cap.materials}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Lead Time</p>
                      <p className="text-sm text-gray-600">{cap.leadTime}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cert strip */}
      <section className="py-12 bg-[#0F1923]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-white/30 text-xs font-semibold tracking-[0.2em] uppercase mb-8">Certifications</p>
          <div className="flex flex-wrap justify-center gap-4">
            {certs.map((c) => (
              <div key={c} className="flex items-center gap-2 px-5 py-3 rounded-lg border" style={{borderColor: "rgba(30,144,255,0.2)", backgroundColor: "rgba(30,144,255,0.05)"}}>
                <span className="w-2 h-2 rounded-full" style={{backgroundColor: "#1E90FF"}} />
                <span className="font-bold text-sm text-white">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center px-6" style={{backgroundColor: "#1E90FF"}}>
        <h2 className="text-3xl font-black text-white mb-4">Ready to discuss your program?</h2>
        <p className="text-white/80 mb-8">Upload your drawings — we quote within 48 hours.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-[#0F1923] hover:opacity-90 text-white font-bold px-10 py-4 rounded transition-opacity">
            Request RFQ
          </Link>
          <Link href="/contact" className="border-2 border-white text-white font-bold px-10 py-4 rounded hover:bg-white hover:text-[#1E90FF] transition-colors">
            Engineering Inquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
