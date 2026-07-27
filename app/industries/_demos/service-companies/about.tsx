import Link from "next/link";

const timeline = [
  { year: "1999", event: "Founded by Rick & Linda Morales in a one-truck operation serving South Tampa" },
  { year: "2004", event: "Expanded to HVAC after joining the Carrier dealer network" },
  { year: "2009", event: "Opened second location to serve Pinellas County" },
  { year: "2013", event: "Hit 10,000 satisfied customers; added plumbing division" },
  { year: "2018", event: "Opened state-of-the-art training center for apprentice technicians" },
  { year: "2024", event: "Over 25 trucks, 60+ team members, serving 3 counties" },
];

const team = [
  { name: "Rick Morales", title: "Founder & CEO", years: "25 yrs", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format&fit=crop&crop=faces" },
  { name: "Linda Morales", title: "Co-Founder, Operations", years: "25 yrs", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop&crop=faces" },
  { name: "Josh Taylor", title: "Lead HVAC Technician", years: "14 yrs", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop&crop=faces" },
  { name: "Maria Chen", title: "Customer Experience", years: "9 yrs", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80&auto=format&fit=crop&crop=faces" },
  { name: "Derek Williams", title: "Lead Plumber", years: "11 yrs", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80&auto=format&fit=crop&crop=faces" },
  { name: "Ashley Park", title: "Office Manager", years: "7 yrs", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop&crop=faces" },
];

const certs = ["NATE Certified Technicians","EPA Section 608 Licensed","FL State Certified Plumbing","Carrier Factory Authorized","Trane Comfort Specialist","BBB A+ Rated","HomeAdvisor Top Rated","Angi Super Service Award"];

export default function ServiceCompaniesAbout() {
  return (
    <div className="bg-white font-sans">
      <div className="bg-[#F58220] text-white text-center text-sm py-2 font-semibold">
        Same-Day Service · <a href="tel:8135550100" className="underline">(813) 555-0100</a>
      </div>
      <nav className="bg-white border-b border-gray-200 sticky top-[36px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-[#1B4B8A] text-xl tracking-tight">COMFORT<span className="text-[#F58220]">PRO</span></Link>
          <div className="hidden lg:flex gap-6 text-sm font-semibold text-gray-700">
            <Link href="air-conditioning" className="hover:text-[#1B4B8A]">AC</Link>
            <Link href="plumbing" className="hover:text-[#1B4B8A]">Plumbing</Link>
            <Link href="services" className="hover:text-[#1B4B8A]">All Services</Link>
            <Link href="about" className="text-[#1B4B8A]">About</Link>
          </div>
          <Link href="contact" className="bg-[#F58220] hover:bg-[#e07210] text-white font-bold px-4 py-2 rounded text-sm transition-colors">Schedule</Link>
        </div>
      </nav>

      {/* Photo hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <img src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1800&q=80&auto=format&fit=crop" alt="ComfortPro team" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B4B8A] via-[#1B4B8A]/65 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 pb-14 w-full">
          <h1 className="text-3xl lg:text-5xl font-black text-white leading-tight mb-3">25 Years of Serving Tampa Bay</h1>
          <p className="text-blue-200 text-lg max-w-2xl">Family-owned. Locally operated. Committed to doing the job right every single time.</p>
        </div>
      </section>

      {/* Team photo + story */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80&auto=format&fit=crop" alt="ComfortPro service fleet" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Rick and Linda Morales started ComfortPro in 1999 with one truck and a simple promise: show up on time, do honest work, and treat every customer like a neighbor. Twenty-five years later, that promise still drives every service call.</p>
            <p className="text-gray-600 leading-relaxed mb-6">Today we operate 25+ service vehicles across Hillsborough, Pinellas, and Pasco counties — but we&apos;re still the same family-run company with the same values.</p>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[["25+","Years in Business"],["60+","Team Members"],["50K+","Customers Served"]].map(([num, label]) => (
                <div key={label} className="bg-[#F8FAFC] border border-gray-100 rounded-xl p-4">
                  <p className="text-2xl font-black text-[#1B4B8A]">{num}</p>
                  <p className="text-gray-500 text-xs mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#F8FAFC] border-y border-gray-100 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-10">How We Got Here</h2>
          <div className="relative">
            <div className="absolute left-[60px] top-0 bottom-0 w-0.5 bg-gray-200 hidden sm:block" />
            <div className="space-y-8">
              {timeline.map((t) => (
                <div key={t.year} className="flex gap-6 items-start">
                  <div className="w-[60px] flex-shrink-0 text-right">
                    <span className="text-sm font-black text-[#F58220]">{t.year}</span>
                  </div>
                  <div className="hidden sm:block w-3 h-3 rounded-full bg-[#1B4B8A] flex-shrink-0 mt-0.5 relative z-10" />
                  <p className="text-gray-700 text-sm leading-relaxed">{t.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-10">Our Team</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {team.map((m) => (
              <div key={m.name} className="text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 border-2 border-gray-100">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top" />
                </div>
                <p className="font-bold text-gray-900 text-sm">{m.name}</p>
                <p className="text-gray-400 text-xs">{m.title}</p>
                <p className="text-[#F58220] text-xs font-bold mt-0.5">{m.years}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-[#1B4B8A] py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-black text-white mb-8 text-center">Certifications &amp; Accreditations</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {certs.map((c) => (
              <div key={c} className="border border-white/20 rounded-lg px-4 py-3 text-center">
                <p className="text-white text-xs font-semibold">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
