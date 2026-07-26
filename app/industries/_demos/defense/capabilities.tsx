import Link from "next/link";

const capabilityAreas = [
  {
    num: "01",
    title: "Systems Integration",
    naics: ["541512", "541519", "336414"],
    text: "APEX Defense delivers end-to-end C4ISR integration, sensor fusion, and mission system modernization across airborne, maritime, and ground platforms. Our cleared systems engineers hold current TS/SCI clearances and have experience across ACAT I–III programs.",
    items: ["C4ISR architecture and system integration", "Electronic Warfare (EW) capability development", "Sensor fusion and real-time data processing", "Mission system integration and test", "Platform integration for airborne and ground systems", "Test & Evaluation (T&E) planning and execution"],
    reverse: false,
  },
  {
    num: "02",
    title: "Cybersecurity",
    naics: ["541512", "541513", "541690"],
    text: "From CMMC assessments to Zero Trust architecture, our cybersecurity division protects the defense industrial base and DoD networks. We have conducted over 120 assessments and hold CMMC Third-Party Assessor Organization (C3PAO) partnerships.",
    items: ["CMMC Level 2 & Level 3 assessment and implementation", "NIST SP 800-171 gap analysis and remediation", "Zero Trust architecture design and deployment", "Penetration testing and red team exercises", "Security Operations Center (SOC) design and staffing", "Continuous ATO (cATO) support"],
    reverse: true,
  },
  {
    num: "03",
    title: "Software Engineering",
    naics: ["541511", "541512", "541519"],
    text: "Safety-critical software for defense platforms requires rigorous processes and cleared engineers. Our team holds experience with DO-178C, MIL-STD-498, and DevSecOps pipelines for rapid, compliant delivery.",
    items: ["Real-Time Operating System (RTOS) development", "DO-178C Software Development Assurance (DAL A–D)", "MIL-STD-498 documentation packages", "DevSecOps pipeline implementation (IL4/IL5)", "Embedded systems and firmware engineering", "Model-Based Systems Engineering (MBSE)"],
    reverse: false,
  },
  {
    num: "04",
    title: "Program Support",
    naics: ["541618", "541690", "541990"],
    text: "Successful defense programs require more than technical talent — they require disciplined program management, documentation, and logistics support. Our PMO professionals bring decades of experience on complex DoD programs.",
    items: ["Systems Engineering Management Plan (SEMP)", "Test & Evaluation Master Plan (TEMP)", "Integrated Logistics Support (ILS) planning", "Technical documentation and technical manuals", "Earned Value Management (EVM) reporting", "Risk and issue management"],
    reverse: true,
  },
];

export default function DefenseCapabilities() {
  return (
    <div className="bg-white font-sans">
      {/* Dark nav */}
      <nav className="bg-[#0F1929]">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-white text-lg tracking-tight">APEX<span className="text-[#0057FF]">DEFENSE</span></Link>
          <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-gray-300">
            <Link href="about" className="hover:text-white">About Us</Link>
            <Link href="capabilities" className="text-white">Capabilities</Link>
            <Link href="about" className="hover:text-white">Careers</Link>
          </div>
          <Link href="contact" className="bg-[#0057FF] hover:bg-[#0048d9] text-white font-semibold px-4 py-2 rounded text-sm transition-colors">Contact Us</Link>
        </div>
      </nav>

      {/* White hero — left-aligned */}
      <section className="border-b border-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#0057FF] text-xs font-bold uppercase tracking-[0.3em] mb-4">Capabilities Statement</p>
          <h1 className="text-4xl lg:text-5xl font-black text-[#0F1929] mb-4 max-w-3xl">Full Technical Capabilities</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-8">Defense programs require partners with proven performance records, current clearances, and deep technical depth.</p>
          <div className="flex flex-wrap gap-2">
            {["CAGE: 7ABC1", "SAM.gov: Active", "DUNS: 123456789", "SDVOSB Certified", "ISO 9001:2015"].map((b) => (
              <span key={b} className="bg-[#0F1929] text-white text-xs font-bold px-3 py-1.5 rounded">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* NAICS codes */}
      <section className="bg-gray-50 border-b border-gray-100 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Primary NAICS Codes</p>
          <div className="flex flex-wrap gap-2">
            {[["541512","Computer Systems Design"],["541511","Custom Programming"],["541513","Facilities Management"],["541519","Other Computer Services"],["541618","Management Consulting"],["336414","Guided Missile Manufacturing"]].map(([code, label]) => (
              <span key={code} className="border border-gray-200 text-xs font-semibold text-gray-700 px-3 py-1.5 rounded-full">{code} — {label}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating capability sections */}
      {capabilityAreas.map((cap) => (
        <section key={cap.num} className="py-16 px-4 border-b border-gray-100">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className={cap.reverse ? "lg:order-2" : ""}>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-6xl font-black text-gray-100 leading-none select-none">{cap.num}</span>
                <h2 className="text-2xl font-black text-[#0F1929]">{cap.title}</h2>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {cap.naics.map((n) => (
                  <span key={n} className="bg-[#0057FF]/10 text-[#0057FF] text-xs font-bold px-2 py-1 rounded">NAICS {n}</span>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">{cap.text}</p>
              <ul className="space-y-2">
                {cap.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                    <span className="text-[#0057FF] font-black mt-0.5 flex-shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`rounded-2xl aspect-video overflow-hidden ${cap.reverse ? "lg:order-1" : ""}`}>
              <img src={cap.title.includes("Cyber") ? "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&q=80&auto=format&fit=crop" : cap.title.includes("System") ? "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80&auto=format&fit=crop" : cap.title.includes("Software") ? "https://images.unsplash.com/photo-1521737604579-b5cd6882c0a6?w=900&q=80&auto=format&fit=crop" : "https://images.unsplash.com/photo-1540575467537-409ae19e97c6?w=900&q=80&auto=format&fit=crop"} alt={cap.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      ))}

      {/* Clearances table */}
      <section className="bg-[#F8FAFC] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-[#0F1929] mb-6">Clearances & Compliance</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0F1929] text-white">
                  {["Clearance Level","Personnel Count","Facility Clearance","Notes"].map((h) => (
                    <th key={h} className="text-left px-6 py-4 font-bold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Secret (S)","47","SECRET","All cleared staff current and adjudicated"],
                  ["Top Secret (TS)","23","TOP SECRET","Polygraph available on request"],
                  ["TS/SCI","11","SCI-eligible","Active indoctrinations available"],
                  ["Unclassified","28+","N/A","ITAR-restricted programs supported"],
                ].map(([level,count,fac,note], i) => (
                  <tr key={level} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 font-semibold text-[#0F1929]">{level}</td>
                    <td className="px-6 py-4 text-gray-700">{count}</td>
                    <td className="px-6 py-4 text-gray-700">{fac}</td>
                    <td className="px-6 py-4 text-gray-500">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contract vehicles strip */}
      <section className="bg-[#0F1929] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-white/40 text-xs font-bold uppercase tracking-widest mb-6">Contract Vehicles</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["GSA MAS IT70","SEWP V","SeaPort NxG","8(a) STARS III","OASIS SB","CIO-SP3 SB"].map((v) => (
              <span key={v} className="border border-white/20 text-white/70 font-bold text-sm px-5 py-2 rounded">{v}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Sidebar RFQ */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-black text-[#0F1929] mb-4">Request a Capability Briefing</h2>
            <p className="text-gray-500 mb-6">Tell us about your program requirement and we'll schedule a briefing within 48 hours.</p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#0057FF]" placeholder="Full Name" />
                <input className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#0057FF]" placeholder="Organization / Agency" />
              </div>
              <input className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#0057FF]" placeholder="Program / Contract Number (if applicable)" />
              <textarea className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full h-28 resize-none focus:outline-none focus:border-[#0057FF]" placeholder="Describe your requirement" />
              <button type="submit" className="bg-[#0057FF] hover:bg-[#0048d9] text-white font-bold px-8 py-3 rounded text-sm w-full sm:w-auto transition-colors">Submit Request</button>
            </form>
          </div>
          <div className="space-y-5">
            <div className="bg-[#F8FAFC] rounded-xl p-5 border border-gray-100">
              <p className="font-bold text-[#0F1929] text-sm mb-1">48-Hour Response</p>
              <p className="text-gray-500 text-sm">We respond to all capability inquiries within two business days.</p>
            </div>
            <div className="bg-[#F8FAFC] rounded-xl p-5 border border-gray-100">
              <p className="font-bold text-[#0F1929] text-sm mb-1">NDA Available</p>
              <p className="text-gray-500 text-sm">Mutual NDA provided upon request for sensitive program discussions.</p>
            </div>
            <div className="bg-[#0F1929] rounded-xl p-5">
              <p className="font-bold text-white text-sm mb-2">Download Capability Statement</p>
              <p className="text-white/60 text-xs mb-3">Full 2-page PDF capability statement.</p>
              <button className="border border-white/30 text-white text-xs font-bold px-4 py-2 rounded hover:border-white transition-colors">Download PDF</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
