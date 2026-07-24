import Link from "next/link";

const domains = [
  {
    name: "Systems Integration",
    icon: "🛰️",
    desc: "End-to-end integration of complex defense systems across multiple platforms, domains, and classification levels. We specialize in C4ISR architecture, sensor fusion, and cross-domain solutions for multi-domain operations.",
    frameworks: ["DODAF 2.02", "TOGAF 9.2", "MIL-STD-498", "IEEE 12207", "JCIDS Requirements Process"],
    deliverables: ["Architecture views (OV, SV, SvcV, TV)", "Interface Control Documents (ICDs)", "Integration test plans & procedures", "System Acceptance Test (SAT) support", "Technical Data Packages (TDPs)"],
    clearance: "TS/SCI with poly cleared staff available",
  },
  {
    name: "Cybersecurity",
    desc: "CMMC Level 2 and Level 3 implementation, RMF package development, and zero trust architecture design for defense programs handling CUI and classified information.",
    icon: "🔐",
    frameworks: ["NIST SP 800-171r2", "NIST SP 800-53", "CMMC 2.0 Level 2/3", "DoD Zero Trust Reference Architecture", "DFARS 252.204-7012"],
    deliverables: ["System Security Plans (SSPs)", "Plans of Action & Milestones (POA&Ms)", "Risk Assessment Reports", "Vulnerability assessment & penetration testing", "CMMC readiness assessments", "ATO/IATT package support"],
    clearance: "SECRET cleared staff · CUI handling facilities",
  },
  {
    name: "Software Engineering",
    desc: "Mission-critical embedded systems, RTOS development, and DevSecOps pipeline implementation for aerospace and defense programs. Experience with airborne, ground, and maritime platforms.",
    icon: "💻",
    frameworks: ["DO-178C (DAL A–D)", "MIL-STD-498", "MISRA C/C++", "SAFe Agile for Government", "CMMI Dev Level 3"],
    deliverables: ["Software Requirements Spec (SRS)", "Software Design Documents (SDDs)", "Source code (C, C++, Ada, Python)", "Unit & integration test evidence", "Software Configuration Management (SCM)", "Continuous Integration / DevSecOps pipelines"],
    clearance: "SECRET cleared engineers on staff",
  },
  {
    name: "Program Support",
    desc: "Comprehensive systems engineering and program management support for DoD acquisition programs from Milestone A through full-rate production. Embedded with government PM offices or as prime/sub contractors.",
    icon: "📋",
    frameworks: ["DoD 5000.02 / 5000.85", "EVM (EVMS ANSI/EIA-748)", "MIL-STD-881 (WBS)", "Risk Management Framework (RMF)", "JCIDS / CDD / CPD development"],
    deliverables: ["Systems Engineering Management Plans (SEMPs)", "Integrated Master Schedules (IMS)", "EVM performance measurement baselines", "CDRLs per contract SOW", "Technical Reviews (SRR, PDR, CDR, TRR)", "Logistics & sustainment planning"],
    clearance: "SECRET cleared PMs and systems engineers",
  },
];

const naics = [
  { code: "541330", desc: "Engineering Services" },
  { code: "541511", desc: "Custom Computer Programming Services" },
  { code: "541512", desc: "Computer Systems Design Services" },
  { code: "541519", desc: "Other Computer Related Services" },
  { code: "541990", desc: "All Other Professional, Scientific, and Technical Services" },
  { code: "336414", desc: "Guided Missile & Space Vehicle Manufacturing" },
];

const clearanceLevels = ["Facility SECRET clearance (active)", "Personnel — SECRET (32)", "Personnel — TS/SCI (8)", "SAP access (select personnel)", "CMMC Level 2 certified facility"];

export default function DefenseServicesPage() {
  return (
    <div className="font-sans" style={{backgroundColor: "#080E14"}}>
      <div style={{backgroundColor: "#0A1929", borderBottom: "1px solid rgba(0,168,255,0.15)"}} className="text-center text-xs py-2.5 tracking-widest">
        <span style={{color: "#00A8FF"}}>✓ SAM.gov Registered</span>
        <span style={{color: "#334155"}} className="mx-4">|</span>
        <span style={{color: "#475569"}}>CAGE: 7XXXX · UEI: LXXXXXXXXXXXXXXX</span>
        <span style={{color: "#334155"}} className="mx-4">|</span>
        <span style={{color: "#475569"}}>CMMC L2 · ITAR · SECRET Facility</span>
      </div>

      {/* Hero */}
      <section className="pt-24 pb-16 relative" style={{background: "linear-gradient(180deg, #0A1929 0%, #080E14 100%)"}}>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "repeating-linear-gradient(0deg, #00A8FF 0, #00A8FF 1px, transparent 0, transparent 80px), repeating-linear-gradient(90deg, #00A8FF 0, #00A8FF 1px, transparent 0, transparent 80px)"}} />
        <div className="max-w-7xl mx-auto px-6 relative text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{color: "#00A8FF"}}>Capabilities Statement</p>
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{color: "#F1F5F9"}}>Full-Spectrum Solutions<br />for Complex Missions.</h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{color: "#64748B"}}>
            Systems integration, cybersecurity, software engineering, and program support for U.S. federal and defense agencies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="font-bold px-8 py-4 rounded transition-opacity hover:opacity-90" style={{backgroundColor: "#00A8FF", color: "#080E14"}}>
              Request Capability Brief
            </Link>
            <Link href="/contact" className="font-bold px-8 py-4 rounded transition-colors" style={{border: "1px solid rgba(0,168,255,0.3)", color: "#00A8FF"}}>
              Download Capabilities Statement
            </Link>
          </div>
        </div>
      </section>

      {/* Domain deep-dives */}
      <section className="py-20 px-6" style={{backgroundColor: "#080E14"}}>
        <div className="max-w-7xl mx-auto space-y-8">
          {domains.map((d) => (
            <div key={d.name} className="rounded-xl overflow-hidden" style={{border: "1px solid rgba(0,168,255,0.15)"}}>
              <div className="px-7 py-5 flex items-center gap-4" style={{backgroundColor: "#0A1929"}}>
                <span className="text-3xl">{d.icon}</span>
                <h2 className="font-black text-xl" style={{color: "#F1F5F9"}}>{d.name}</h2>
              </div>
              <div className="p-7 grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <p className="text-sm leading-relaxed mb-4" style={{color: "#94A3B8"}}>{d.desc}</p>
                  <div className="text-xs px-3 py-2 rounded" style={{backgroundColor: "rgba(0,168,255,0.08)", color: "#00A8FF", border: "1px solid rgba(0,168,255,0.2)"}}>
                    🔐 {d.clearance}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{color: "#475569"}}>Standards & Frameworks</p>
                  <ul className="space-y-2">
                    {d.frameworks.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm" style={{color: "#64748B"}}>
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{backgroundColor: "#00A8FF"}} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{color: "#475569"}}>Example Deliverables</p>
                  <ul className="space-y-2">
                    {d.deliverables.map((del) => (
                      <li key={del} className="flex items-center gap-2 text-sm" style={{color: "#64748B"}}>
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{backgroundColor: "#00A8FF"}} />
                        {del}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NAICS + Clearances */}
      <section className="py-16 px-6" style={{backgroundColor: "#0A1929"}}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider mb-5" style={{color: "#00A8FF"}}>NAICS Codes</p>
            <div className="space-y-2">
              {naics.map((n) => (
                <div key={n.code} className="flex items-center gap-4 py-2" style={{borderBottom: "1px solid rgba(0,168,255,0.08)"}}>
                  <span className="font-mono text-sm font-bold w-16 flex-shrink-0" style={{color: "#00A8FF"}}>{n.code}</span>
                  <span className="text-sm" style={{color: "#64748B"}}>{n.desc}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider mb-5" style={{color: "#00A8FF"}}>Security Clearances</p>
            <div className="space-y-3">
              {clearanceLevels.map((c) => (
                <div key={c} className="flex items-center gap-3 px-4 py-3 rounded" style={{backgroundColor: "rgba(0,168,255,0.05)", border: "1px solid rgba(0,168,255,0.15)"}}>
                  <span style={{color: "#00A8FF"}}>✓</span>
                  <span className="text-sm font-semibold" style={{color: "#CBD5E1"}}>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past performance callout */}
      <section className="py-14 px-6 text-center" style={{backgroundColor: "#080E14", borderTop: "1px solid rgba(0,168,255,0.1)"}}>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{color: "#475569"}}>Past Performance Available Upon Request</p>
        <p className="text-lg max-w-2xl mx-auto mb-8" style={{color: "#64748B"}}>
          Detailed past performance references with agency points of contact, contract values, period of performance, and CPARS ratings available under NDA.
        </p>
        <Link href="/contact" className="inline-block font-bold px-10 py-4 rounded transition-opacity hover:opacity-90" style={{backgroundColor: "#00A8FF", color: "#080E14"}}>
          Contact Program Office
        </Link>
      </section>
    </div>
  );
}
