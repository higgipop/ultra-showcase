import Link from "next/link";

const callouts = [
  {
    title: "Cost Savings",
    desc: "Avg 60% less than ER visits for occupational injuries. We bill employers directly.",
    icon: (
      <svg className="w-6 h-6 text-[#10B981]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    title: "Same-Day Availability",
    desc: "Walk-ins welcome. Most appointments confirmed same-day. No referral required.",
    icon: (
      <svg className="w-6 h-6 text-[#10B981]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    title: "Direct Billing",
    desc: "We bill employers and carriers directly. No paperwork burden for your HR team.",
    icon: (
      <svg className="w-6 h-6 text-[#10B981]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4"/><path d="M21 12c.552 0 1-.448 1-1V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9"/>
      </svg>
    ),
  },
];

const services = [
  { name: "Workers’ Compensation", desc: "Injury treatment, documentation, and return-to-work coordination for your team." },
  { name: "Drug & Alcohol Testing", desc: "DOT-compliant collection, SAMHSA-certified lab, MRO review, rapid results." },
  { name: "DOT Physicals", desc: "Federal Motor Carrier Safety Administration certified medical examiners." },
  { name: "Pre-Employment Physicals", desc: "Baseline exams, lift testing, and clearance documentation for new hires." },
  { name: "Injury & Illness Care", desc: "Occupational injury treatment with direct OSHA 300 log support." },
  { name: "Wellness Programs", desc: "Annual screenings, biometrics, and flu clinics — on-site or at our facilities." },
];

const locations = [
  { city: "Tampa", address: "4220 W. Boy Scout Blvd.", hours: "Mon–Fri 7am–6pm · Sat 8am–2pm" },
  { city: "St. Petersburg", address: "2222 Dr. MLK Jr. St. N", hours: "Mon–Fri 7am–5pm" },
  { city: "Brandon", address: "707 W. Brandon Blvd., Suite 105", hours: "Mon–Fri 7am–5pm" },
  { city: "Clearwater", address: "1520 N. McMullen Booth Rd.", hours: "Mon–Fri 7am–5pm" },
];

const employerBenefits = [
  "Direct billing to employer or insurance carrier — no employee out-of-pocket",
  "Designated account manager for multi-employee relationships",
  "Electronic results delivery within 24–48 hours",
  "OSHA 300 recordkeeping support included",
  "On-site collection available for teams of 10 or more",
];

export default function MedicalHome() {
  return (
    <div className="bg-white font-sans">
      {/* Nav */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-[#0F1729] text-lg tracking-tight">
            GC<span className="text-[#10B981]">Ohealth</span>
          </Link>
          <div className="hidden lg:flex gap-7 text-sm font-semibold text-gray-600">
            <Link href="services" className="hover:text-[#0F1729] transition-colors">Services</Link>
            <Link href="services" className="hover:text-[#0F1729] transition-colors">Employers</Link>
            <Link href="contact" className="hover:text-[#0F1729] transition-colors">Locations</Link>
            <Link href="about" className="hover:text-[#0F1729] transition-colors">About</Link>
          </div>
          <div className="flex gap-3 items-center">
            <a href="tel:8138723200" className="hidden sm:block text-gray-600 font-semibold text-sm hover:text-[#0F1729] transition-colors">(813) 872-3200</a>
            <Link href="contact" className="bg-[#0F1729] hover:bg-[#1a2640] text-white font-bold px-4 py-2 rounded text-sm transition-colors">Schedule Now</Link>
          </div>
        </div>
      </nav>

      {/* Hero — dark navy */}
      <section className="bg-[#0F1729] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#10B981] text-xs font-bold uppercase tracking-widest mb-4">Tampa&rsquo;s Occupational Health Specialists</p>
            <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              Fast. Affordable. Occupational Care Your Team Can Count On.
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Workers&rsquo; comp, drug testing, DOT physicals, and injury care — all under one roof. No ER wait times. No specialist referrals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="contact" className="bg-[#10B981] hover:bg-[#0d9e6e] text-white font-bold px-7 py-4 rounded text-center transition-colors">
                Schedule Online
              </Link>
              <a href="tel:8138723200" className="border-2 border-white/20 hover:border-white text-white font-bold px-7 py-4 rounded text-center transition-colors">
                (813) 872-3200
              </a>
            </div>
          </div>

          {/* Stats panel */}
          <div className="bg-white rounded-2xl p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">By the Numbers</p>
            <div className="space-y-5">
              {[
                { val: "20 min", label: "Average wait time" },
                { val: "4", label: "Tampa Bay locations" },
                { val: "60%", label: "Avg savings vs. ER" },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                  <span className="text-gray-500 text-sm">{s.label}</span>
                  <span className="text-2xl font-black text-[#0F1729]">{s.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Three callout boxes */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-5">
          {callouts.map((c) => (
            <div key={c.title} className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                {c.icon}
              </div>
              <h3 className="font-black text-[#0F1729] text-base mb-2">{c.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#10B981] text-xs font-bold uppercase tracking-widest mb-2">What We Offer</p>
            <h2 className="text-3xl font-black text-[#0F1729]">Occupational Health Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.name} className="border border-gray-100 rounded-xl p-6 hover:border-[#10B981] hover:shadow-sm transition-all group">
                <h3 className="font-black text-[#0F1729] text-sm mb-2 group-hover:text-[#10B981] transition-colors">{s.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employer section */}
      <section className="py-20 bg-[#0F1729]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#10B981] text-xs font-bold uppercase tracking-widest mb-3">For Employers</p>
            <h2 className="text-3xl font-black text-white mb-5 leading-tight">
              Built for employers, not waiting rooms.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              We&rsquo;ve structured every process around making occupational health easy for HR teams, safety managers, and operations directors. Set up a company account and we handle the rest.
            </p>
            <ul className="space-y-3 mb-8">
              {employerBenefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="w-5 h-5 bg-[#10B981]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-2.5 h-2.5 text-[#10B981]" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M10.28 2.28a.75.75 0 0 0-1.06 0L4.5 7l-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0 0-1.06Z" />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <Link href="contact" className="inline-block bg-[#10B981] hover:bg-[#0d9e6e] text-white font-bold px-6 py-3 rounded transition-colors">
              Set Up an Employer Account
            </Link>
          </div>
          <div className="space-y-3">
            <p className="text-[#10B981] text-xs font-bold uppercase tracking-widest mb-5">Our Locations</p>
            {locations.map((l) => (
              <div key={l.city} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <p className="font-black text-white text-sm mb-1">{l.city}</p>
                <p className="text-gray-400 text-xs">{l.address}</p>
                <p className="text-gray-500 text-xs mt-1">{l.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-gray-50 border-y border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[["4", "Locations"], ["20 min", "Avg Wait"], ["60%", "Savings vs. ER"], ["15+", "Years Serving Tampa Bay"]].map(([val, label]) => (
            <div key={label}>
              <p className="text-3xl font-black text-[#0F1729]">{val}</p>
              <p className="text-gray-500 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F1729] py-16 text-center px-4">
        <h2 className="text-3xl font-black text-white mb-3">Set up your employer account today.</h2>
        <p className="text-gray-400 text-lg mb-8">One setup call. Direct billing. Same-day access for your team across all four locations.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="contact" className="bg-[#10B981] hover:bg-[#0d9e6e] text-white font-black px-10 py-4 rounded text-lg transition-colors">
            Set Up Employer Account
          </Link>
          <a href="tel:8138723200" className="border-2 border-white/20 hover:border-white text-white font-bold px-10 py-4 rounded text-lg transition-colors">
            (813) 872-3200
          </a>
        </div>
      </section>
    </div>
  );
}
