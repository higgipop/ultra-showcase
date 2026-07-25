// paligentech.com: dark nav, white body, full capabilities page with NAICS, clearances, contract vehicles
import Link from "next/link";

const divisions = [
  {
    name: "Systems Integration",
    href: "systems-integration",
    items: [
      "C4ISR architecture design and integration",
      "Electronic Warfare (EW) systems support",
      "Sensor fusion and data processing pipelines",
      "Mission system integration (airborne, ground, maritime)",
      "Test & Evaluation (T&E) support services",
      "MIL-STD-464 / IEEE 1588 compliance engineering",
      "Hardware-in-the-loop (HWIL) simulation",
      "Link 16 / tactical data link integration",
    ],
  },
  {
    name: "Cybersecurity",
    href: "cybersecurity",
    items: [
      "CMMC Level 2 & Level 3 gap assessment and remediation",
      "NIST SP 800-171 implementation and documentation",
      "Zero Trust Architecture (ZTA) design and implementation",
      "Penetration testing and adversarial red team exercises",
      "Security Operations Center (SOC) design and staffing support",
      "Vulnerability Management Program (VMP) standup",
      "SIEM deployment and tuning (Splunk, Microsoft Sentinel)",
      "Classified and CUI data handling compliance",
    ],
  },
  {
    name: "Software Engineering",
    href: "capabilities",
    items: [
      "Real-Time Operating System (RTOS) development (VxWorks, RTEMS, Green Hills)",
      "DO-178C Software Development Assurance (DAL A–D)",
      "MIL-STD-498 software documentation and lifecycle management",
      "DevSecOps pipeline design and CI/CD implementation",
      "Embedded systems and firmware engineering",
      "Model-Based Systems Engineering (MBSE) with SysML / DOORS",
      "Software-Defined Radio (SDR) development",
      "Containerized workloads for edge compute environments",
    ],
  },
  {
    name: "Program Support",
    href: "contact",
    items: [
      "Systems Engineering Management Plan (SEMP) development",
      "Test & Evaluation Master Plan (TEMP) development",
      "Integrated Logistics Support (ILS) planning",
      "Reliability, Availability, and Maintainability (RAM) analysis",
      "Technical documentation, TM development, and IETM production",
      "Program Management Office (PMO) support and reporting",
      "Risk management and mitigation planning",
      "Earned Value Management (EVM) reporting",
    ],
  },
];

const naicsCodes = [
  { code: "541330", desc: "Engineering Services" },
  { code: "541512", desc: "Computer Systems Design Services" },
  { code: "541519", desc: "Other Computer Related Services" },
  { code: "541611", desc: "Administrative Management Consulting Services" },
  { code: "541690", desc: "Other Scientific and Technical Consulting" },
  { code: "561210", desc: "Facilities Support Services" },
];

const clearances = [
  { level: "SECRET", desc: "Facility and personnel clearances held", qty: "20+ personnel" },
  { level: "TOP SECRET", desc: "TS/SCI-eligible personnel", qty: "8 personnel" },
  { level: "TS/SCI", desc: "Active SCI-access personnel", qty: "4 personnel" },
  { level: "SAP", desc: "SAP-eligible staff (by program nomination)", qty: "Program-specific" },
];

const vehicles = [
  { name: "GSA MAS", num: "GS-35F-0012X", desc: "IT Schedule 70 – Highly Adaptive Cybersecurity Services (HACS)" },
  { name: "SEWP V", num: "NNG15SC98B", desc: "NASA-managed GWAC for IT products and services" },
  { name: "STARS III", num: "47QTCA22D0052", desc: "SBA 8(a) STARS III — small business GWAC" },
  { name: "SeaPort-NxG", num: "N00178-19-D-7851", desc: "Navy domain engineering and enterprise IT support" },
];

export default function DefenseCapabilities() {
  return (
    <div className="bg-white font-sans">
      <nav className="bg-[#0F1929] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="font-black text-white text-lg tracking-tight">APEX<span className="text-[#0057FF]">DEFENSE</span></div>
          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-gray-300">
            <Link href="about" className="hover:text-white">About Us</Link>
            <Link href="capabilities" className="text-white border-b border-white pb-0.5">Divisions</Link>
            <Link href="about" className="hover:text-white">Careers</Link>
            <Link href="contact" className="hover:text-white">Contact</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="contact" className="bg-[#0057FF] hover:bg-[#0048d9] text-white font-semibold px-4 py-2 rounded text-sm transition-colors">Contact Us</Link>
          </div>
        </div>
      </nav>

      {/* Banner */}
      <div className="bg-[#0F1929] py-12 px-4 text-center">
        <h1 className="text-4xl font-black text-white mb-3">Technical Capabilities</h1>
        <p className="text-white/60 max-w-2xl mx-auto">Cleared personnel, proven contract vehicles, and deep domain expertise across four capability areas.</p>
      </div>

      {/* Division sections */}
      {divisions.map((div, i) => (
        <section key={div.name} className={`py-14 px-4 ${i % 2 === 1 ? "bg-[#F8FAFC]" : "bg-white"} border-b border-gray-100`}>
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-[#0F1929]">{div.name}</h2>
              <Link href={div.href} className="text-[#0057FF] font-bold text-sm hover:underline">View Division →</Link>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3">
              {div.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                  <span className="w-5 h-5 rounded-full bg-[#0057FF] text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* NAICS */}
      <section className="py-14 px-4 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-[#0F1929] mb-6">NAICS Codes</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[#0F1929] text-white">
                  <th className="text-left py-3 px-5 font-semibold w-32">NAICS Code</th>
                  <th className="text-left py-3 px-5 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {naicsCodes.map((n, i) => (
                  <tr key={n.code} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-5 font-mono font-bold text-[#0057FF]">{n.code}</td>
                    <td className="py-3 px-5 text-gray-700">{n.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Clearances */}
      <section className="py-14 px-4 bg-[#F8FAFC] border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-[#0F1929] mb-6">Security Clearances</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {clearances.map((c) => (
              <div key={c.level} className="bg-white border border-gray-100 rounded-xl p-5">
                <div className="font-black text-[#0F1929] mb-1">{c.level}</div>
                <div className="text-gray-500 text-xs mb-3 leading-relaxed">{c.desc}</div>
                <div className="text-[#0057FF] font-bold text-sm">{c.qty}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-xs mt-4">Facility clearance information available under NDA upon award. Personnel clearances subject to program requirements.</p>
        </div>
      </section>

      {/* Contract vehicles */}
      <section className="py-14 px-4 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-[#0F1929] mb-6">Contract Vehicles</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[#0F1929] text-white">
                  <th className="text-left py-3 px-5 font-semibold w-36">Vehicle</th>
                  <th className="text-left py-3 px-5 font-semibold w-44">Contract Number</th>
                  <th className="text-left py-3 px-5 font-semibold">Scope</th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map((v, i) => (
                  <tr key={v.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-5 font-bold text-[#0F1929]">{v.name}</td>
                    <td className="py-3 px-5 font-mono text-gray-500 text-xs">{v.num}</td>
                    <td className="py-3 px-5 text-gray-700">{v.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Capability Statement CTA */}
      <section className="py-14 bg-[#0F1929] text-center px-4">
        <h2 className="text-3xl font-black text-white mb-3">Download Our Capability Statement</h2>
        <p className="text-white/60 text-lg mb-8">Full capability statement, cage code, DUNS, and GSA schedule information available upon request.</p>
        <Link href="contact" className="inline-block bg-[#0057FF] hover:bg-[#0048d9] text-white font-black px-12 py-5 rounded text-lg transition-colors">Request Capability Statement</Link>
      </section>
    </div>
  );
}
