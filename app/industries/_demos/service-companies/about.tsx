import Link from "next/link";

const timeline = [
  { year: "1999", event: "Founded by Rick & Linda Morales in a one-truck operation serving South Tampa" },
  { year: "2004", event: "Expanded to HVAC after joining the Carrier dealer network" },
  { year: "2009", event: "Opened second location to serve Pinellas County" },
  { year: "2013", event: "Hit 10,000 satisfied customers milestone; added plumbing division" },
  { year: "2018", event: "Opened state-of-the-art training center for apprentice technicians" },
  { year: "2024", event: "Over 25 trucks, 60+ team members, serving 3 counties" },
];

const team = [
  { name: "Rick Morales", title: "Founder & CEO", years: "25 yrs" },
  { name: "Linda Morales", title: "Co-Founder, Operations", years: "25 yrs" },
  { name: "Josh Taylor", title: "Lead HVAC Technician", years: "14 yrs" },
  { name: "Maria Chen", title: "Customer Experience Manager", years: "9 yrs" },
  { name: "Derek Williams", title: "Lead Plumber", years: "11 yrs" },
  { name: "Ashley Park", title: "Office Manager", years: "7 yrs" },
];

const certs = [
  "NATE Certified Technicians","EPA Section 608 Licensed","Florida State Certified Plumbing","Carrier Factory Authorized Dealer","Trane Comfort Specialist","BBB A+ Rated","HomeAdvisor Top Rated","Angies List Super Service Award","Neighborly Done Right Promise","ACCA Member",
];

export default function ServiceCompaniesAbout() {
  return (
    <div className="bg-white font-sans">
      <div className="bg-[#F58220] text-white text-center text-sm py-2 font-semibold">
        ⚡ Same-Day Service · <a href="tel:8135550100" className="underline">(813) 555-0100</a>
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

      {/* Page header */}
      <section className="bg-[#1B4B8A] py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-black text-white mb-3">25 Years of Serving Tampa Bay</h1>
          <p className="text-blue-200 text-lg max-w-2xl">Family-owned. Locally operated. Committed to doing the job right every single time.</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-10">Our Story</h2>
          <div className="relative">
            <div className="absolute left-[60px] top-0 bottom-0 w-0.5 bg-gray-100 hidden sm:block" />
            <div className="space-y-8">
              {timeline.map((t) => (
                <div key={t.year} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-[60px] text-right">
                    <span className="font-black text-[#1B4B8A] text-lg">{t.year}</span>
                  </div>
                  <div className="hidden sm:flex items-center flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-[#F58220] border-4 border-white shadow-sm" />
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-0.5">{t.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="bg-gray-50 border-y border-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-8">Meet the Team</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {team.map((m) => (
              <div key={m.name} className="text-center">
                <div className="rounded-2xl aspect-square mb-3 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&q=80&auto=format&fit=crop&face" alt="Team member" className="w-full h-full object-cover object-top" />
                </div>
                <p className="font-black text-gray-900 text-sm">{m.name}</p>
                <p className="text-gray-500 text-xs">{m.title}</p>
                <p className="text-[#1B4B8A] font-bold text-xs mt-1">{m.years} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications wall */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-8">Certifications & Accreditations</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {certs.map((c) => (
              <div key={c} className="border border-gray-100 rounded-xl p-4 text-center hover:border-[#1B4B8A]/30 hover:shadow-sm transition-all">
                <div className="w-12 h-12 bg-[#1B4B8A]/5 rounded-lg mx-auto mb-2 flex items-center justify-center text-[#1B4B8A] text-xl">🏆</div>
                <p className="text-xs font-semibold text-gray-700 leading-tight">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B4B8A] py-14 px-4 text-center">
        <h2 className="text-2xl font-black text-white mb-3">Ready to Experience the ComfortPRO Difference?</h2>
        <p className="text-blue-200 mb-8">Same-day service. Honest pricing. 100% satisfaction guaranteed.</p>
        <Link href="contact" className="inline-block bg-[#F58220] hover:bg-[#e07210] text-white font-black px-10 py-4 rounded text-lg transition-colors">Schedule Service Today</Link>
      </section>
    </div>
  );
}
