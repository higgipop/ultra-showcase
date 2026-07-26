import Link from "next/link";

const leaders = [
  { name: "Col. James Harrington (Ret.)", title: "Chief Executive Officer", clearance: "TS/SCI", bio: "30 years USAF. Former Program Director, Electronic Systems Center. Led $2.4B C4ISR modernization program. B.S. Aerospace Engineering, USAF Academy; M.S. Systems Engineering, MIT." },
  { name: "Dr. Sarah Vance", title: "Chief Technology Officer", clearance: "TS/SCI", bio: "Former DARPA program manager. Ph.D. Electrical Engineering, Georgia Tech. 20+ patents in sensor fusion and signal processing. Led 12 IRAD programs from concept to transition." },
  { name: "Michael Torres", title: "VP, Cybersecurity", clearance: "TS/SCI + Poly", bio: "Former NSA Technical Director. CISSP, CMMC RP, GIAC GREM. Designed Zero Trust architectures for three DoD combatant commands. Expert witness for Senate Armed Services Committee." },
  { name: "Lt. Col. Angela Park (Ret.)", title: "VP, Program Management", clearance: "Secret", bio: "20 years Army acquisition. Former PM for PEO STRI. PMP, DAWIA Level III. Managed portfolio of $800M in simulation and training programs across 4 contractors." },
  { name: "David Chen", title: "Director, Software Engineering", clearance: "Top Secret", bio: "Former Boeing Defense. Expert in DO-178C, RTOS development, and avionics software integration. Led OFP development for three Navy aircraft programs. BS CS, Carnegie Mellon." },
  { name: "Maria Santos", title: "Director, Business Development", clearance: "Secret", bio: "15 years DoD contracting. Former SAIC and Leidos. Expert in IDIQ vehicle strategies, teaming agreements, and federal procurement. Managed $1.2B in capture activities." },
];

export default function DefenseAbout() {
  return (
    <div className="bg-white font-sans">
      {/* Nav */}
      <nav className="bg-[#0F1929]">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-white text-lg tracking-tight">APEX<span className="text-[#0057FF]">DEFENSE</span></Link>
          <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-gray-300">
            <Link href="about" className="text-white">About Us</Link>
            <Link href="capabilities" className="hover:text-white">Capabilities</Link>
            <Link href="about" className="hover:text-white">Careers</Link>
          </div>
          <Link href="contact" className="bg-[#0057FF] hover:bg-[#0048d9] text-white font-semibold px-4 py-2 rounded text-sm transition-colors">Contact Us</Link>
        </div>
      </nav>

      {/* Left-aligned hero with HR */}
      <section className="py-16 px-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-black text-[#0F1929] mb-6">About APEX Defense</h1>
          <hr className="border-[#0057FF] border-2 w-24 mb-6" />
          <p className="text-gray-600 text-xl leading-relaxed max-w-3xl">
            A Service-Disabled Veteran-Owned Small Business (SDVOSB) founded by former military officers and DoD civilians committed to mission-first engineering. We've supported over 60 defense programs across all military branches since 2008.
          </p>
        </div>
      </section>

      {/* 6 leadership cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-[#0F1929] mb-10">Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leaders.map((l) => (
              <div key={l.name} className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="bg-gray-100 rounded-xl aspect-square w-20 mb-4 flex items-center justify-center text-gray-400 text-xs">Photo</div>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-black text-[#0F1929] text-base leading-snug">{l.name}</h3>
                  <span className="bg-[#0057FF]/10 text-[#0057FF] text-xs font-bold px-2 py-0.5 rounded flex-shrink-0 mt-0.5">{l.clearance}</span>
                </div>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">{l.title}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values — 3 columns */}
      <section className="bg-[#F8FAFC] border-y border-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { label: "Mission", text: "Delivering mission-critical technology solutions with unwavering precision and integrity. We exist to serve the programs that protect our nation and its allies." },
            { label: "Vision", text: "To be the trusted technology partner for the programs that matter most — known for technical excellence, cleared talent, and the quality of our people." },
            { label: "Values", items: ["Others Before Self","Authenticity & Integrity","Excellence in Everything","Urgency When It Matters","Accountability Without Exception"] },
          ].map((col) => (
            <div key={col.label}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-1 h-8 bg-[#0057FF] rounded-full" />
                <h3 className="text-xl font-black text-[#0F1929]">{col.label}</h3>
              </div>
              {col.text && <p className="text-gray-600 leading-relaxed">{col.text}</p>}
              {col.items && (
                <ul className="space-y-2">
                  {col.items.map((v) => (
                    <li key={v} className="flex items-center gap-2 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0057FF] flex-shrink-0" />{v}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Veteran hiring callout */}
      <section className="bg-[#0F1929] py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#0057FF] text-xs font-bold uppercase tracking-[0.3em] mb-3">Veteran Hiring</p>
          <h2 className="text-2xl lg:text-3xl font-black text-white mb-4">We Hire Veterans First</h2>
          <p className="text-white/60 leading-relaxed mb-8">
            Over 70% of our staff has prior military or DoD civilian service. We hold active SkillBridge partnerships with USAF, Navy, and Army. If you're transitioning, we want to talk before your ETS date.
          </p>
          <Link href="about" className="inline-block border border-white/40 hover:border-white text-white font-bold px-8 py-3 rounded transition-colors">View Open Positions</Link>
        </div>
      </section>

      {/* Awards / certs grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-black text-[#0F1929] mb-8">Awards & Certifications</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {["ISO 9001:2015","CMMC C3PAO Partner","SDVOSB Certified","SAM.gov Active","8(a) Participant","GSA MAS Holder","DoD JITC Certified","SkillBridge Partner","AWS GovCloud","IL4/IL5 Capable","NIST 800-171","ITAR Compliant"].map((c) => (
              <div key={c} className="border border-gray-100 rounded-xl p-4 text-center hover:border-[#0057FF]/30 transition-colors">
                <div className="w-10 h-10 bg-gray-100 rounded-lg mx-auto mb-2 flex items-center justify-center text-gray-300 text-xs">Logo</div>
                <p className="text-xs font-semibold text-gray-700 leading-tight">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
