import Link from "next/link";

const leadership = [
  { name: "Richard Hollis", title: "President & CEO", bg: "40 years in precision manufacturing. Former VP Operations at a Tier 1 aerospace supplier. Engineering degree, University of Michigan." },
  { name: "Susan Park", title: "VP Quality", bg: "AS9100 lead auditor. 22 years in quality management. Formerly with Collins Aerospace. Certified Six Sigma Black Belt." },
  { name: "James Ortega", title: "Director of Engineering", bg: "15 years in DFM and process engineering. Specializes in titanium machining and complex 5-axis programs. University of Florida, ME." },
];

const industries = [
  { name: "Aerospace & Defense", icon: "✈️" },
  { name: "Medical Devices", icon: "🔬" },
  { name: "Industrial OEM", icon: "⚙️" },
  { name: "Semiconductor", icon: "💡" },
  { name: "Energy", icon: "⚡" },
  { name: "Commercial Space", icon: "🚀" },
];

const certs = [
  { code: "ISO 9001:2015", detail: "Quality Management System · Certified since 2003 · Annual surveillance audits" },
  { code: "AS9100 Rev D", detail: "Aerospace Quality Management · Certified 2011 · 0 major findings in last 3 audits" },
  { code: "ISO 13485:2016", detail: "Medical Device QMS · Class II & III implant-grade components" },
  { code: "ITAR Registered", detail: "U.S. Department of State registration · Manufacturing of controlled defense articles" },
  { code: "NADCAP Heat Treat", detail: "Special process approval · AMS 2750 Pyrometry · Aerospace prime approved" },
];

export default function ManufacturingAboutPage() {
  return (
    <div className="bg-white font-sans">
      <div className="bg-[#0F1923] text-white/40 text-center text-xs py-2.5 tracking-widest font-semibold uppercase">
        40+ Years · ISO 9001 · AS9100 · ISO 13485 · ITAR
      </div>

      {/* Hero */}
      <section className="bg-[#0F1923] pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "repeating-linear-gradient(0deg, #1E90FF 0, #1E90FF 1px, transparent 0, transparent 80px), repeating-linear-gradient(90deg, #1E90FF 0, #1E90FF 1px, transparent 0, transparent 80px)"}} />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{color: "#1E90FF"}}>About the Company</p>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6">40+ Years of<br />Precision Manufacturing.</h1>
              <p className="text-white/50 text-lg leading-relaxed">
                Founded in 1984, we started as a two-machine CNC shop in a 2,400 sq ft facility. Today, we operate 12,000 sq ft of climate-controlled manufacturing space with 50+ CNC machines and a team of 85 specialists serving the most demanding industries in the world.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "1984", label: "Year Founded" },
                { value: "12,000", label: "Sq Ft Facility" },
                { value: "85", label: "Team Members" },
                { value: "3-shift", label: "Production Capability" },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                  <p className="text-2xl font-black mb-1" style={{color: "#1E90FF"}}>{s.value}</p>
                  <p className="text-white/50 text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{color: "#1E90FF"}}>Our History</p>
          <h2 className="text-3xl font-black text-[#0F1923] mb-8">Built on craft. Grown on trust.</h2>
          <div className="prose max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Richard Hollis started the company in 1984 with a used Bridgeport mill and a determination to make parts that met print — every single time. The first decade was aerospace sub-contract work, mostly aluminum structural components for regional aircraft programs.</p>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The ISO 9001 certification in 2003 opened doors to medical device work. By 2011, the AS9100 Rev C certification — and later Rev D — made us a preferred supplier for two Tier 1 aerospace primes. Today, about 45% of our revenue is aerospace, 35% medical devices, and 20% industrial OEM.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation. The investment philosophy hasn&rsquo;t changed: we buy the equipment, hire the people, and build the systems needed to make whatever the drawing calls for — to tolerance, on time, every time.</p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{color: "#1E90FF"}}>Leadership</p>
            <h2 className="text-3xl font-black text-[#0F1923]">The team behind the parts.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {leadership.map((l) => (
              <div key={l.name} className="bg-white border border-gray-100 rounded-xl p-7">
                <div className="w-14 h-14 rounded-full bg-[#0F1923] flex items-center justify-center text-white font-black text-xl mb-5">
                  {l.name[0]}
                </div>
                <h3 className="font-black text-[#0F1923] text-lg">{l.name}</h3>
                <p className="text-xs font-semibold mb-3" style={{color: "#1E90FF"}}>{l.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{l.bg}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-[#0F1923]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{color: "#1E90FF"}}>Certifications & Compliance</p>
          <h2 className="text-3xl font-black text-white mb-8">Every certification. Actively maintained.</h2>
          <div className="space-y-4">
            {certs.map((c) => (
              <div key={c.code} className="flex items-start gap-5 p-5 rounded-xl border" style={{borderColor: "rgba(30,144,255,0.15)", backgroundColor: "rgba(30,144,255,0.05)"}}>
                <div className="w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0" style={{backgroundColor: "#1E90FF"}} />
                <div>
                  <p className="font-black text-white">{c.code}</p>
                  <p className="text-white/50 text-sm mt-0.5">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase mb-8 text-gray-400">Industries We Serve</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {industries.map((i) => (
              <div key={i.name} className="text-center p-4 border border-gray-100 rounded-xl hover:border-[#1E90FF]/30 transition-colors">
                <div className="text-3xl mb-2">{i.icon}</div>
                <p className="text-xs font-semibold text-gray-600">{i.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 text-center px-6" style={{backgroundColor: "#1E90FF"}}>
        <h2 className="text-3xl font-black text-white mb-4">Let&rsquo;s talk about your program.</h2>
        <p className="text-white/80 mb-8">RFQ, capability briefing, or NDA — we&rsquo;re ready.</p>
        <Link href="/contact" className="inline-block bg-[#0F1923] hover:opacity-90 text-white font-bold px-10 py-4 rounded transition-opacity">
          Contact Us
        </Link>
      </section>
    </div>
  );
}
