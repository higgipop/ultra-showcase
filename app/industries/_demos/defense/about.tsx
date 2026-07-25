// paligentech.com: dark nav, WHITE body, modernization culture, mission/vision/values, 6 leadership profiles, veteran hiring
import Link from "next/link";

const leadership = [
  {
    name: "Col. James R. Whitfield (USA, Ret.)",
    init: "W",
    title: "President & Chief Executive Officer",
    service: "US Army · 26 years",
    background: "Former Program Manager, Army Aviation & Missile Command (AMCOM). Oversaw $1.2B in systems modernization programs. Led integration of next-generation avionics across 3 rotary-wing platforms.",
    clearance: "TS/SCI",
  },
  {
    name: "Dr. Maria Santos, PhD",
    init: "S",
    title: "Chief Technology Officer",
    service: "Civilian — MIT, Systems Engineering",
    background: "25 years in defense systems integration. Former principal engineer at MITRE. Published 14 technical papers on sensor fusion and distributed C2 architectures.",
    clearance: "TS/SCI (CI Poly)",
  },
  {
    name: "Cdr. Thomas E. Briggs (USN, Ret.)",
    init: "B",
    title: "VP, Cybersecurity Division",
    service: "US Navy · 22 years",
    background: "Former Information Systems Security Officer (ISSO) for Fleet Cyber Command. Led NIST 800-53 High implementation across 14 shipboard systems. CISSP, CISM, DoD 8570 IAM Level III.",
    clearance: "TS/SCI",
  },
  {
    name: "Angela Kim, PMP, CSEP",
    init: "K",
    title: "VP, Program Management",
    service: "Civilian — Georgia Tech, Systems Engineering",
    background: "18 years managing DoD contracts across Army, Air Force, and DLA. Holds PMP and CSEP certifications. Manages a $75M+ portfolio of active contracts.",
    clearance: "SECRET",
  },
  {
    name: "SSgt. Marcus Wells (USAF, Ret.)",
    init: "W",
    title: "Director, Software Engineering",
    service: "US Air Force · 12 years",
    background: "Avionics systems specialist turned software engineer. Expert in DO-178C development environments and RTOS architectures. Served as lead SE on two AFSOC platform modernization programs.",
    clearance: "TS/SCI",
  },
  {
    name: "Patricia Okafor, MS",
    init: "O",
    title: "Director, Business Development",
    service: "Civilian — Georgetown, National Security Studies",
    background: "12 years in federal BD across DoD and Intelligence Community. Deep relationships across SOCOM, AFSOC, and Army G-3/5. Leads all RFI/RFP engagement and teaming strategy.",
    clearance: "SECRET",
  },
];

const values = [
  { title: "Others Before Self", body: "We exist to serve the mission — and that starts with serving the people around us." },
  { title: "Authenticity & Integrity", body: "We say what we mean, we do what we say, and we don't hide the hard stuff." },
  { title: "Technical Excellence", body: "We take pride in the quality of our work. Good enough is not good enough for the programs we support." },
  { title: "Urgency When It Matters", body: "Mission timelines are real. We are built to move fast when it counts." },
  { title: "Accountability Without Exception", body: "We own our outcomes — wins and shortcomings alike. That is what earns long-term trust." },
];

export default function DefenseAbout() {
  return (
    <div className="bg-white font-sans">
      <nav className="bg-[#0F1929] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="font-black text-white text-lg tracking-tight">APEX<span className="text-[#0057FF]">DEFENSE</span></div>
          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-gray-300">
            <Link href="about" className="text-white border-b border-white pb-0.5">About Us</Link>
            <Link href="capabilities" className="hover:text-white">Divisions</Link>
            <Link href="about" className="hover:text-white">Careers</Link>
            <Link href="contact" className="hover:text-white">Contact</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="contact" className="bg-[#0057FF] hover:bg-[#0048d9] text-white font-semibold px-4 py-2 rounded text-sm transition-colors">Contact Us</Link>
          </div>
        </div>
      </nav>

      {/* Dark banner */}
      <div className="bg-[#0F1929] py-12 px-4 text-center">
        <h1 className="text-4xl font-black text-white mb-3">About ApexDefense</h1>
        <p className="text-white/60 max-w-2xl mx-auto">Modernization with an Innovative Edge. Founded by veterans. Built for mission-critical programs.</p>
      </div>

      {/* Facility / culture */}
      <section className="py-16 px-4 border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-100 rounded-2xl aspect-video flex items-center justify-center text-gray-400">Culture / Facility Photo</div>
          <div>
            <h2 className="text-2xl font-black text-[#0F1929] mb-5">Modernization with an Innovative Edge</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              ApexDefense was founded in 2009 by a group of retired military officers and defense engineers who spent their careers watching programs fail not because of lack of technology — but because of integration failures, cultural dysfunction, and organizations that put contract vehicles before outcomes.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We built this company to be different. Small enough to move fast. Experienced enough to know where the hard parts are. Committed to the kind of mission-first culture that the programs we support deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-16 px-4 bg-[#F8FAFC] border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-14">
            <div>
              <div className="text-4xl font-black text-[#0057FF] mb-3">01</div>
              <h2 className="text-xl font-black text-[#0F1929] mb-3">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">Delivering mission-critical solutions with unwavering precision and integrity. We exist to serve the programs that protect our nation and its allies.</p>
            </div>
            <div>
              <div className="text-4xl font-black text-[#0057FF] mb-3">02</div>
              <h2 className="text-xl font-black text-[#0F1929] mb-3">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">To be the trusted technology partner for the programs that matter most to national security — known for technical excellence, integrity, and the quality of our people.</p>
            </div>
            <div>
              <div className="text-4xl font-black text-[#0057FF] mb-3">03</div>
              <h2 className="text-xl font-black text-[#0F1929] mb-3">Our Values</h2>
              <ul className="space-y-1">
                {values.map((v) => (
                  <li key={v.title} className="flex items-center gap-2 text-gray-700 text-sm font-semibold">
                    <span className="w-2 h-2 bg-[#0057FF] rounded-full flex-shrink-0" /> {v.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 px-4 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-[#0F1929] mb-10">Leadership Team</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {leadership.map((l) => (
              <div key={l.name} className="border border-gray-100 rounded-2xl p-6 flex gap-4">
                <div className="w-14 h-14 rounded-full bg-[#0F1929] flex items-center justify-center text-white font-black text-xl flex-shrink-0">
                  {l.init}
                </div>
                <div className="min-w-0">
                  <h3 className="font-black text-[#0F1929] text-sm leading-tight mb-0.5">{l.name}</h3>
                  <p className="text-[#0057FF] text-xs font-bold mb-0.5">{l.title}</p>
                  <p className="text-gray-400 text-xs mb-3">{l.service}</p>
                  <p className="text-gray-500 text-xs leading-relaxed mb-2">{l.background}</p>
                  <span className="inline-block bg-[#F8FAFC] border border-gray-100 rounded px-2 py-0.5 text-gray-500 text-xs font-mono">Clearance: {l.clearance}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Veteran hiring */}
      <section className="py-16 px-4 bg-[#F8FAFC] border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-black text-[#0F1929] mb-5">Committed to Veteran Hiring</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Over 60% of our staff are veterans or active-duty spouses. We are a certified Service-Disabled Veteran-Owned Small Business (SDVOSB) and maintain an active partnership with Hire Heroes USA and Hiring Our Heroes.
            </p>
            <ul className="space-y-3 mb-6">
              {["SDVOSB Certified — VA CVE verified", "Active Hiring Our Heroes partner", "SkillBridge host for transitioning service members", "Tuition assistance for technical certifications (CMMC RP, CISSP, PMP)"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-[#0057FF] font-bold mt-0.5 flex-shrink-0">·</span> {item}
                </li>
              ))}
            </ul>
            <Link href="contact" className="inline-block border-2 border-[#0F1929] text-[#0F1929] font-bold px-6 py-3 rounded hover:bg-[#0F1929] hover:text-white transition-colors text-sm">View Open Positions</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "60%+", label: "Veteran/Military Family Staff" },
              { num: "SDVOSB", label: "VA CVE Certified" },
              { num: "2009", label: "Founded" },
              { num: "150+", label: "Personnel" },
            ].map((s) => (
              <div key={s.label} className="bg-white border border-gray-100 rounded-xl p-5 text-center">
                <div className="text-2xl font-black text-[#0057FF] mb-1">{s.num}</div>
                <div className="text-gray-500 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#0F1929] text-center px-4">
        <h2 className="text-3xl font-black text-white mb-3">Ready to partner?</h2>
        <p className="text-white/60 text-lg mb-8">Program inquiries, teaming requests, and capability briefings.</p>
        <Link href="contact" className="inline-block bg-[#0057FF] hover:bg-[#0048d9] text-white font-black px-12 py-5 rounded text-xl transition-colors">Contact Our PMO</Link>
      </section>
    </div>
  );
}
