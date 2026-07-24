// Design reference: asturamedical.com — dark nav/white body, bold capability tagline, product grid by category, certifications, RFQ CTA
import Link from "next/link";

const capabilities = [
  { cat: "Precision CNC", items: ["5-Axis Milling", "CNC Turning", "Multi-Axis Grinding", "EDM Wire & Sinker"] },
  { cat: "Fabrication", items: ["TIG / MIG Welding", "Sheet Metal Forming", "Laser Cutting", "Tube Bending"] },
  { cat: "Assembly", items: ["Clean Room Assembly", "Sub-Assembly", "Integration Testing", "Functional Verification"] },
  { cat: "Materials", items: ["Titanium Alloys", "Inconel / Hastelloy", "Medical-Grade Stainless", "Advanced Composites"] },
];

const certs = [
  { code: "ISO 9001:2015", label: "Quality Management" },
  { code: "AS9100 Rev D", label: "Aerospace Quality" },
  { code: "ISO 13485", label: "Medical Devices" },
  { code: "ITAR Registered", label: "Defense Components" },
  { code: "NADCAP", label: "Special Processes" },
];

const markets = [
  { name: "Aerospace & Defense", icon: "✈️", body: "Flight-critical components to AMS, MIL-SPEC, and AS9100 standards. First article inspection with full CMM reporting." },
  { name: "Medical Devices", icon: "🔬", body: "Class II and III implant-ready machining under ISO 13485. Lot traceability and full material certification packages." },
  { name: "Industrial Equipment", icon: "⚙️", body: "High-volume production runs for OEM programs. Kanban inventory, JIT delivery, and consignment stocking available." },
];

const stats = [
  { value: "0.0001\"", label: "Tolerance achieved" },
  { value: "99.4%", label: "On-time delivery" },
  { value: "40+", label: "Years in operation" },
  { value: "12,000 ft²", label: "Climate-controlled facility" },
];

export default function ManufacturingDemo() {
  return (
    <div className="bg-white font-sans">

      {/* Dark nav accent */}
      <div className="bg-[#0F1923] py-2.5 text-center text-xs text-white/40 tracking-widest uppercase font-semibold">
        ISO 9001:2015 · AS9100 Rev D · ISO 13485 · ITAR Registered
      </div>

      {/* Hero */}
      <section className="bg-[#0F1923] pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{backgroundImage: "repeating-linear-gradient(0deg, white 0, white 1px, transparent 0, transparent 60px), repeating-linear-gradient(90deg, white 0, white 1px, transparent 0, transparent 60px)"}} />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex gap-2 mb-8">
                {["Aerospace", "Medical", "Defense"].map((tag) => (
                  <span key={tag} className="text-xs font-bold border border-[#1E90FF]/30 text-[#1E90FF] px-3 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Quality Driven.<br />
                <span className="text-[#1E90FF]">Built to Spec.</span>
              </h1>
              <p className="text-white/50 text-lg leading-relaxed mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contract manufacturer of precision-machined components for aerospace, medical, and defense programs — from prototype to production.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact"
                  className="bg-[#1E90FF] hover:bg-[#1877D2] text-white font-bold px-8 py-4 rounded transition-colors text-center">
                  Request a Quote
                </Link>
                <Link href="/capabilities"
                  className="border border-white/20 hover:border-white text-white font-bold px-8 py-4 rounded transition-colors text-center">
                  View Capabilities
                </Link>
              </div>
            </div>
            {/* Stats block */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <p className="text-3xl font-black text-[#1E90FF] mb-2">{s.value}</p>
                  <p className="text-white/50 text-sm leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Markets served */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-[#1E90FF] text-xs font-semibold tracking-[0.15em] uppercase mb-3">Markets Served</p>
            <h2 className="text-3xl font-bold text-[#0F1923]">
              Critical components for critical applications.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {markets.map((m) => (
              <div key={m.name} className="border border-gray-100 rounded-xl p-8 hover:border-[#1E90FF]/30 hover:shadow-md transition-all group">
                <div className="text-4xl mb-5">{m.icon}</div>
                <h3 className="font-bold text-[#0F1923] text-lg mb-3 group-hover:text-[#1E90FF] transition-colors">
                  {m.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#1E90FF] text-xs font-semibold tracking-[0.15em] uppercase mb-3">Capabilities</p>
            <h2 className="text-3xl font-bold text-[#0F1923]">Full-spectrum precision manufacturing</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.cat} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <div className="bg-[#0F1923] px-6 py-4">
                  <h3 className="font-bold text-white">{cap.cat}</h3>
                </div>
                <ul className="px-6 py-5 space-y-3">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1E90FF] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-[#0F1923]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-white/30 text-xs font-semibold tracking-[0.2em] uppercase mb-10">
            Certifications &amp; Registrations
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            {certs.map((c) => (
              <div key={c.code} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-6 py-4">
                <div className="w-2 h-2 rounded-full bg-[#1E90FF]" />
                <div>
                  <p className="font-bold text-white text-sm">{c.code}</p>
                  <p className="text-white/40 text-xs">{c.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#1E90FF] text-xs font-semibold tracking-[0.15em] uppercase mb-3">From Print to Part</p>
            <h2 className="text-3xl font-bold text-[#0F1923]">Our proven production flow</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {["RFQ & DFM Review", "First Article", "Production Release", "In-Process QC", "Ship & Certify"].map((step, i) => (
              <div key={step} className="text-center relative">
                <div className="w-10 h-10 rounded-full bg-[#0F1923] text-white font-bold text-sm flex items-center justify-center mx-auto mb-4">
                  {i + 1}
                </div>
                <p className="text-[#0F1923] font-semibold text-sm">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RFQ CTA */}
      <section className="py-16 bg-[#1E90FF]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to discuss your next program?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Upload your drawings and we&rsquo;ll respond with a quote within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-[#1E90FF] hover:bg-white/90 font-bold px-10 py-4 rounded transition-colors">
              Request a Quote (RFQ)
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-[#1E90FF] font-bold px-10 py-4 rounded transition-colors">
              Engineering Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
