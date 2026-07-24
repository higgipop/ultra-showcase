// Design reference: paligentech.com — dark geometric, CAGE/NAICS, capability matrix, contract vehicles, SAM.gov
import Link from "next/link";

const capabilities = [
  {
    domain: "Systems Integration",
    items: ["C4ISR Architecture", "Electronic Warfare Support", "Mission System Integration", "Sensor Fusion"],
  },
  {
    domain: "Cybersecurity",
    items: ["CMMC Level 2/3 Compliance", "Zero Trust Architecture", "NIST 800-171 Implementation", "Penetration Testing"],
  },
  {
    domain: "Software Engineering",
    items: ["Embedded Systems Development", "Real-Time OS (RTOS)", "DO-178C / MIL-STD-498", "DevSecOps Pipeline"],
  },
  {
    domain: "Program Support",
    items: ["Systems Engineering (SEMP)", "Test & Evaluation (T&E)", "Logistics & Sustainment", "Technical Documentation"],
  },
];

const contractVehicles = [
  { name: "GSA Multiple Award Schedule (MAS)", num: "GS-35F-XXXX" },
  { name: "SEWP V", num: "Group C · NHS43161D0033" },
  { name: "STARS III", num: "SBSA · 47QTCB21D0061" },
  { name: "SeaPort-NxG", num: "N00178-20-D-7000" },
];

const naics = [
  "541330 — Engineering Services",
  "541511 — Custom Computer Programming",
  "541512 — Computer Systems Design Services",
  "541519 — Other Computer Related Services",
  "561621 — Security Systems Services",
];

const customers = [
  "U.S. Army", "U.S. Navy", "DARPA", "DHS", "DoD OSD", "SOCOM",
];

export default function DefenseDemo() {
  return (
    <div className="font-sans" style={{backgroundColor: "#080E14", minHeight: "100vh"}}>

      {/* SAM.gov status bar */}
      <div style={{backgroundColor: "#0A1929", borderBottom: "1px solid rgba(0,168,255,0.15)"}}
        className="text-center text-xs py-2.5 tracking-widest">
        <span style={{color: "#00A8FF"}}>✓ SAM.gov Registered</span>
        <span style={{color: "#334155"}} className="mx-4">|</span>
        <span style={{color: "#475569"}}>CAGE: 7XXXX</span>
        <span style={{color: "#334155"}} className="mx-4">|</span>
        <span style={{color: "#475569"}}>UEI: LXXXXXXXXXXXXXXX</span>
        <span style={{color: "#334155"}} className="mx-4">|</span>
        <span style={{color: "#475569"}}>SB · WOSB · HUBZone</span>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-20" style={{background: "linear-gradient(180deg, #0A1929 0%, #080E14 100%)"}}>
        {/* Geometric background grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{backgroundImage: "repeating-linear-gradient(0deg, #00A8FF 0, #00A8FF 1px, transparent 0, transparent 80px), repeating-linear-gradient(90deg, #00A8FF 0, #00A8FF 1px, transparent 0, transparent 80px)"}} />
        {/* Diagonal accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5"
          style={{background: "linear-gradient(135deg, transparent 40%, #00A8FF 100%)"}} />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-8">
              {["CMMC L2", "ITAR", "SECRET Cleared Staff", "SB Certified"].map((tag) => (
                <span key={tag} className="text-xs font-bold px-3 py-1 rounded"
                  style={{border: "1px solid rgba(0,168,255,0.3)", color: "#00A8FF"}}>
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-black leading-tight mb-6"
              style={{fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#F1F5F9"}}>
              Mission-Ready<br />
              <span style={{color: "#00A8FF"}}>Technology Solutions</span><br />
              for National Security.
            </h1>
            <p style={{color: "#64748B", lineHeight: 1.8}} className="text-lg mb-10 max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. We deliver engineering, cybersecurity, and software solutions to U.S. federal and defense agencies — on schedule, within budget, and built to last.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact"
                className="font-bold px-8 py-4 rounded text-center transition-colors"
                style={{backgroundColor: "#00A8FF", color: "#080E14"}}>
                Request Capability Brief
              </Link>
              <Link href="/contact"
                className="font-bold px-8 py-4 rounded text-center transition-colors"
                style={{border: "1px solid rgba(0,168,255,0.3)", color: "#00A8FF"}}>
                Past Performance Summary
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Matrix */}
      <section className="py-20 px-6" style={{backgroundColor: "#080E14"}}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{color: "#00A8FF"}}>
              Core Capabilities
            </p>
            <h2 className="text-3xl font-bold" style={{color: "#F1F5F9"}}>
              Technical breadth. Mission focus.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{backgroundColor: "rgba(0,168,255,0.1)"}}>
            {capabilities.map((cap) => (
              <div key={cap.domain} className="p-8" style={{backgroundColor: "#080E14"}}>
                <h3 className="font-bold mb-5" style={{color: "#00A8FF"}}>{cap.domain}</h3>
                <ul className="space-y-3">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm" style={{color: "#94A3B8"}}>
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{backgroundColor: "#00A8FF"}} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customers */}
      <section className="py-14 px-6" style={{borderTop: "1px solid rgba(0,168,255,0.1)", borderBottom: "1px solid rgba(0,168,255,0.1)"}}>
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase mb-10" style={{color: "#475569"}}>
            Agency Customers
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {customers.map((c) => (
              <span key={c} className="font-bold text-sm" style={{color: "#334155"}}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Vehicles */}
      <section className="py-20 px-6" style={{backgroundColor: "#0A1929"}}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{color: "#00A8FF"}}>
              Contract Vehicles
            </p>
            <h2 className="text-2xl font-bold mb-8" style={{color: "#F1F5F9"}}>
              Streamlined acquisition pathways
            </h2>
            <div className="space-y-3">
              {contractVehicles.map((v) => (
                <div key={v.name} className="flex items-center gap-5 p-4 rounded-lg"
                  style={{border: "1px solid rgba(0,168,255,0.15)"}}>
                  <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{backgroundColor: "#00A8FF"}} />
                  <div className="flex-1">
                    <p className="font-semibold text-sm" style={{color: "#CBD5E1"}}>{v.name}</p>
                    <p className="text-xs mt-0.5" style={{color: "#475569"}}>{v.num}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{color: "#00A8FF"}}>
              NAICS Codes
            </p>
            <h2 className="text-2xl font-bold mb-8" style={{color: "#F1F5F9"}}>
              Primary work areas
            </h2>
            <div className="space-y-2">
              {naics.map((n) => (
                <div key={n} className="flex items-center gap-4 py-3"
                  style={{borderBottom: "1px solid rgba(0,168,255,0.08)"}}>
                  <span className="text-xs font-mono" style={{color: "#00A8FF"}}>{n.split("—")[0]}</span>
                  <span className="text-sm" style={{color: "#64748B"}}>{n.split("— ")[1]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{background: "linear-gradient(135deg, #0A1929, #080E14)"}}>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{color: "#00A8FF"}}>
          Work With Us
        </p>
        <h2 className="text-3xl font-bold mb-6" style={{color: "#F1F5F9"}}>
          Ready to support your program?
        </h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto" style={{color: "#64748B", lineHeight: 1.8}}>
          Contact our program management office for a capability briefing, past performance references, or teaming discussion.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact"
            className="font-bold px-10 py-4 rounded transition-opacity hover:opacity-90"
            style={{backgroundColor: "#00A8FF", color: "#080E14"}}>
            Contact Program Office
          </Link>
          <Link href="/contact"
            className="font-bold px-10 py-4 rounded transition-colors"
            style={{border: "1px solid rgba(0,168,255,0.3)", color: "#00A8FF"}}>
            Download Capabilities Statement
          </Link>
        </div>
      </section>
    </div>
  );
}
