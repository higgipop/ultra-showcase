import Link from "next/link";

const timeline = [
  { year: "1983", event: "Founded by Robert Harmon in a 2,000 sq. ft. shop with 2 manual mills and 3 employees." },
  { year: "1991", event: "First CNC machine purchased. First aerospace contract — seat track fittings for Boeing 737." },
  { year: "1999", event: "Achieved ISO 9001 certification. Expanded to 6,000 sq. ft." },
  { year: "2005", event: "ITAR registration. First defense contract — components for M1A1 Abrams upgrade program." },
  { year: "2011", event: "Achieved AS9100C certification. Expanded to 12,000 sq. ft. current facility." },
  { year: "2018", event: "Laser cutting cell added. 5-axis machining center installed." },
  { year: "2023", event: "AS9100D Rev D certification. 40 years in business. 28 employees. 95% on-time delivery." },
];

const leadership = [
  { name: "Robert Harmon", title: "Founder & Chairman", note: "40+ years precision machining" },
  { name: "David Harmon", title: "President & CEO", note: "20+ years, took over 2012" },
  { name: "Maria Lopez", title: "VP Operations", note: "Six Sigma Black Belt, 15 yrs" },
  { name: "James Park", title: "Quality Manager", note: "AS9100 Lead Auditor, CMM specialist" },
];

const certs = [
  { name: "ISO 9001:2015", scope: "All machining and fabrication operations" },
  { name: "AS9100D Rev D", scope: "Aerospace quality management system" },
  { name: "ITAR Registration", scope: "State Dept., DDTC Reg #M-12345" },
  { name: "DFARS Compliance", scope: "Material sourcing and documentation" },
  { name: "NADCAP Welding", scope: "AWS D1.1, D1.2, ASME Sec IX welders" },
  { name: "SAM.gov Active", scope: "Cage Code: 5XY31, DUNS: 123456789" },
];

export default function ManufacturingAbout() {
  return (
    <div className="bg-white font-sans">
      <div className="bg-[#0F1923] text-center text-white text-xs py-2 font-semibold tracking-wider">ISO 9001:2015 · AS9100D · ITAR · 40 Years of Precision Manufacturing</div>
      <nav className="bg-[#0F1923] border-t border-white/5 sticky top-[32px] z-40">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-white text-xl">APEX<span className="text-[#1E90FF]">MFG</span></Link>
          <div className="hidden lg:flex gap-6 text-sm font-semibold text-gray-300">
            <Link href="capabilities" className="hover:text-white">Capabilities</Link>
            <Link href="cnc-machining" className="hover:text-white">CNC</Link>
            <Link href="fabrication" className="hover:text-white">Fabrication</Link>
            <Link href="about" className="text-white">About</Link>
          </div>
          <Link href="contact" className="bg-[#1E90FF] hover:bg-blue-600 text-white font-bold px-4 py-2 rounded text-sm transition-colors">Submit RFQ</Link>
        </div>
      </nav>

      {/* Header */}
      <section className="py-14 px-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-black text-[#0F1923] mb-4">Founded 1983. Still Family-Owned.</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              APEX Manufacturing has been producing precision components for aerospace, defense, and industrial customers for 40 years. Same family. Same commitment to quality.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[["40+","Years"],["28","Employees"],["12K","Sq. Ft."],["95%","On-Time"]].map(([n, l]) => (
              <div key={l} className="border border-gray-100 rounded-xl p-4">
                <p className="text-3xl font-black text-[#1E90FF]">{n}</p>
                <p className="text-gray-400 text-xs">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility stats + photo */}
      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-black text-[#0F1923] mb-5">Our Facility</h2>
            <div className="space-y-3 mb-6">
              {[["Location","Orlando, FL (Orange County)"],["Facility Size","12,000 sq. ft. climate-controlled"],["Machines","22 CNC machining centers + 3 fabrication cells"],["Shifts","2-shift operation, Mon–Fri"],["Inspection","Zeiss CMM + full metrology lab"],["Security","24/7 video, badge access, ITAR-compliant"],].map(([label, val]) => (
                <div key={label} className="flex border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                  <span className="w-36 text-gray-400 text-sm font-semibold flex-shrink-0">{label}</span>
                  <span className="text-gray-700 text-sm">{val}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl aspect-video overflow-hidden">
            <img src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1200&q=80&auto=format&fit=crop" alt="Shop floor" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 border-y border-gray-100 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-[#0F1923] mb-10">40 Years of Growth</h2>
          <div className="relative pl-16 sm:pl-24">
            <div className="absolute left-[52px] sm:left-[72px] top-0 bottom-0 w-0.5 bg-gray-200" />
            <div className="space-y-8">
              {timeline.map((t) => (
                <div key={t.year} className="relative">
                  <div className="absolute -left-[52px] sm:-left-[72px] w-10 h-10 rounded-full bg-[#0F1923] border-4 border-white flex items-center justify-center text-[#1E90FF] font-black text-xs leading-none">{t.year.slice(2)}</div>
                  <p className="font-black text-[#1E90FF] text-sm mb-0.5">{t.year}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{t.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-black text-[#0F1923] mb-6">Leadership</h2>
            <div className="space-y-4">
              {leadership.map((l) => (
                <div key={l.name} className="flex items-center gap-4 border border-gray-100 rounded-xl p-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=100&q=80&auto=format&fit=crop&crop=faces" alt="Team member" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-black text-[#0F1923]">{l.name}</p>
                    <p className="text-[#1E90FF] text-sm font-bold">{l.title}</p>
                    <p className="text-gray-400 text-xs">{l.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-black text-[#0F1923] mb-6">Certifications</h2>
            <div className="space-y-3">
              {certs.map((c) => (
                <div key={c.name} className="border border-gray-100 rounded-xl p-4 hover:border-[#1E90FF]/40 transition-colors">
                  <p className="font-black text-[#0F1923] text-sm">{c.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{c.scope}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
