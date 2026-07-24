import Link from "next/link";

const leadership = [
  {
    name: "Col. (Ret.) Marcus Webb",
    title: "Chief Executive Officer",
    branch: "U.S. Army, 28 years",
    clearance: "TS/SCI (active)",
    background: "Former PEO C3T Program Manager. Led $2.1B JTRS Handheld/Manpack acquisition from Milestone B through initial fielding. P.E., Systems Engineering. Multiple combat deployments as Signal Corps officer.",
    highlights: ["Program Executive Office C3T", "Army Acquisition Corps", "Army War College graduate", "Bronze Star, Meritorious Service Medal (×4)"],
  },
  {
    name: "Dr. Sandra Liu",
    title: "Chief Technology Officer",
    branch: "Formerly DARPA / MIT Lincoln Laboratory",
    clearance: "TS/SCI w/ poly",
    background: "15 years at DARPA's Tactical Technology Office (TTO) and MIT LL Group 64 (Mission Systems). PhD, Electrical Engineering, MIT. Expert in RF systems, multi-domain C2, and contested electromagnetic environments.",
    highlights: ["DARPA TTO Program Manager (2014–2020)", "MIT Lincoln Laboratory (2008–2014)", "IEEE Fellow", "17 patents in RF/EW systems"],
  },
  {
    name: "James R. Okonkwo",
    title: "VP, Cybersecurity",
    branch: "U.S. Air Force, 22 years",
    clearance: "TS/SCI (active)",
    background: "Retired as Lt. Col. from 24th Air Force (now 16th AF). Led the Air Force's first CMMC implementation pilot. Hands-on RMF package author on 8 classified programs at classification levels up to SAP.",
    highlights: ["16th Air Force, Cyber Warfare Operations", "Air Force Cyberspace Operations School instructor", "CISSP, CISM, DoD 8570 IAM III", "NSA IAD certified evaluator"],
  },
];

const certs = [
  { name: "CMMC Level 2", status: "Certified", issuer: "C3PAO (2024)", color: "#00A8FF" },
  { name: "ISO 9001:2015", status: "Certified", issuer: "BSI Group", color: "#00A8FF" },
  { name: "AS9100D", status: "Certified", issuer: "Aerospace QMS", color: "#00A8FF" },
  { name: "ITAR Compliant", status: "Active", issuer: "DDTC Registered", color: "#00A8FF" },
  { name: "CAGE Code Active", status: "SAM.gov Verified", issuer: "7XXXX", color: "#00A8FF" },
  { name: "8(a) Program", status: "Active Participant", issuer: "SBA", color: "#10B981" },
  { name: "SDVOSB", status: "Verified", issuer: "VA CVE", color: "#10B981" },
  { name: "HUBZone", status: "Certified", issuer: "SBA", color: "#10B981" },
];

const locations = [
  { city: "Arlington, VA", label: "HQ — National Capital Region" },
  { city: "Huntsville, AL", label: "Redstone Arsenal Support Office" },
  { city: "San Diego, CA", label: "NAVWAR Support Presence" },
  { city: "Colorado Springs, CO", label: "Space Command Support Office" },
];

const stats = [
  { value: "18+", label: "Years in defense contracting" },
  { value: "340+", label: "Personnel cleared SECRET or above" },
  { value: "47", label: "Active prime & sub contracts" },
  { value: "$280M+", label: "Contracts awarded to date" },
];

export default function DefenseAboutPage() {
  return (
    <div className="font-sans" style={{backgroundColor: "#080E14"}}>
      <div style={{backgroundColor: "#0A1929", borderBottom: "1px solid rgba(0,168,255,0.15)"}} className="text-center text-xs py-2.5 tracking-widest">
        <span style={{color: "#00A8FF"}}>✓ SAM.gov Registered</span>
        <span style={{color: "#334155"}} className="mx-4">|</span>
        <span style={{color: "#475569"}}>SDVOSB · HUBZone · 8(a) · ITAR</span>
        <span style={{color: "#334155"}} className="mx-4">|</span>
        <span style={{color: "#475569"}}>CMMC L2 Certified</span>
      </div>

      {/* Hero */}
      <section className="pt-24 pb-16 relative" style={{background: "linear-gradient(180deg, #0A1929 0%, #080E14 100%)"}}>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "repeating-linear-gradient(0deg, #00A8FF 0, #00A8FF 1px, transparent 0, transparent 80px), repeating-linear-gradient(90deg, #00A8FF 0, #00A8FF 1px, transparent 0, transparent 80px)"}} />
        <div className="max-w-7xl mx-auto px-6 relative">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{color: "#00A8FF"}}>About Apex Defense Systems</p>
          <h1 className="text-4xl md:text-5xl font-black mb-6 max-w-3xl" style={{color: "#F1F5F9"}}>
            Built by veterans.<br />Led by technologists.<br />Trusted by warfighters.
          </h1>
          <p className="text-lg max-w-2xl" style={{color: "#64748B"}}>
            Founded in 2006 by retired military officers, Apex Defense Systems has grown from a 6-person consulting shop into a mid-tier defense integrator supporting 12+ DoD agencies and commands.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6" style={{backgroundColor: "#0A1929", borderBottom: "1px solid rgba(0,168,255,0.1)"}}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-black mb-1" style={{color: "#00A8FF"}}>{s.value}</p>
              <p className="text-xs uppercase tracking-wider" style={{color: "#475569"}}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-6" style={{backgroundColor: "#080E14"}}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{color: "#00A8FF"}}>Leadership</p>
          <h2 className="text-3xl font-black mb-12" style={{color: "#F1F5F9"}}>Senior Leadership Team</h2>
          <div className="space-y-6">
            {leadership.map((l) => (
              <div key={l.name} className="rounded-xl overflow-hidden" style={{border: "1px solid rgba(0,168,255,0.15)"}}>
                <div className="grid lg:grid-cols-3">
                  <div className="p-8 flex flex-col justify-between" style={{backgroundColor: "#0A1929"}}>
                    <div>
                      <div className="w-16 h-16 rounded flex items-center justify-center font-black text-2xl mb-4" style={{backgroundColor: "rgba(0,168,255,0.1)", color: "#00A8FF", border: "1px solid rgba(0,168,255,0.2)"}}>
                        {l.name.split(" ").find(w => !["Col.", "(Ret.)", "Dr.", "Lt.", "Col"].includes(w))?.[0] || l.name[0]}
                      </div>
                      <h3 className="font-black text-xl mb-1" style={{color: "#F1F5F9"}}>{l.name}</h3>
                      <p className="text-sm font-semibold mb-1" style={{color: "#00A8FF"}}>{l.title}</p>
                      <p className="text-xs mb-3" style={{color: "#475569"}}>{l.branch}</p>
                      <div className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded" style={{backgroundColor: "rgba(0,168,255,0.08)", color: "#00A8FF", border: "1px solid rgba(0,168,255,0.2)"}}>
                        🔐 {l.clearance}
                      </div>
                    </div>
                    <ul className="mt-6 space-y-1.5">
                      {l.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-xs" style={{color: "#475569"}}>
                          <span style={{color: "#00A8FF"}}>✓</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <p className="text-sm leading-relaxed" style={{color: "#94A3B8"}}>{l.background}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-6" style={{backgroundColor: "#0A1929", borderTop: "1px solid rgba(0,168,255,0.1)"}}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{color: "#00A8FF"}}>Certifications & Socioeconomic Status</p>
          <h2 className="text-2xl font-black mb-8" style={{color: "#F1F5F9"}}>Credentials & Set-Aside Qualifications</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certs.map((c) => (
              <div key={c.name} className="p-5 rounded-lg" style={{border: `1px solid rgba(0,168,255,0.15)`, backgroundColor: "#080E14"}}>
                <p className="font-bold text-sm mb-1" style={{color: "#F1F5F9"}}>{c.name}</p>
                <p className="text-xs font-semibold mb-1" style={{color: c.color}}>{c.status}</p>
                <p className="text-xs" style={{color: "#475569"}}>{c.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 px-6" style={{backgroundColor: "#080E14", borderTop: "1px solid rgba(0,168,255,0.1)"}}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{color: "#00A8FF"}}>Locations</p>
          <h2 className="text-2xl font-black mb-8" style={{color: "#F1F5F9"}}>Office Presence</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <div key={loc.city} className="p-5 rounded-lg" style={{border: "1px solid rgba(0,168,255,0.15)", backgroundColor: "#0A1929"}}>
                <p className="font-bold mb-1" style={{color: "#F1F5F9"}}>{loc.city}</p>
                <p className="text-xs" style={{color: "#475569"}}>{loc.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Veteran commitment */}
      <section className="py-14 px-6 text-center" style={{backgroundColor: "#0A1929", borderTop: "1px solid rgba(0,168,255,0.1)"}}>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{color: "#475569"}}>Veteran Employment</p>
        <h2 className="text-2xl font-black mb-4" style={{color: "#F1F5F9"}}>62% of Our Workforce Are Veterans</h2>
        <p className="text-base max-w-2xl mx-auto mb-8" style={{color: "#64748B"}}>
          We actively recruit transitioning service members and spouses. Career opportunities in systems engineering, cybersecurity, program management, and technical analysis.
        </p>
        <Link href="/contact" className="inline-block font-bold px-10 py-4 rounded transition-opacity hover:opacity-90" style={{backgroundColor: "#00A8FF", color: "#080E14"}}>
          View Open Positions
        </Link>
      </section>
    </div>
  );
}
