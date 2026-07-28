import Link from "next/link";

const pages = [
  {
    page: "home",
    label: "Homepage",
    specialty: "Overview",
    desc: "Booking form in hero, provider cards, insurance badge strip, stats row, blue/white clinical palette.",
    icon: "🏥",
  },
  {
    page: "services",
    label: "Services Overview",
    specialty: "Services",
    desc: "6 specialty cards with what's included, same-day availability banner, insurance grid.",
    icon: "📋",
  },
  {
    page: "primary-care",
    label: "Primary Care",
    specialty: "Primary Care",
    desc: "Conditions treated, first visit steps, FAQ, sidebar booking form.",
    icon: "🩺",
  },
  {
    page: "pediatrics",
    label: "Pediatrics",
    specialty: "Pediatrics",
    desc: "Well-child visit schedule, vaccine grid, emergency symptom callout, parent FAQ.",
    icon: "👶",
  },
  {
    page: "about",
    label: "Meet Your Providers",
    specialty: "About",
    desc: "4 full provider profiles, practice philosophy, support staff, awards.",
    icon: "👨‍⚕️",
  },
  {
    page: "contact",
    label: "Appointment Request",
    specialty: "Contact",
    desc: "Full intake form, hours, location, new patient checklist, insurance verification note.",
    icon: "📅",
  },
];

const stats = [
  { value: "3,200+", label: "Patients Served" },
  { value: "2", label: "Clinic Locations" },
  { value: "Same-Day", label: "Appointments Available" },
  { value: "15+", label: "Insurance Plans Accepted" },
];

export default function MedicalIndex() {
  return (
    <>
      {/* ULTRA demo banner */}
      <div className="bg-[#007BFF] text-white text-sm py-2.5 font-medium sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
          <span className="whitespace-nowrap">✦ <strong>ULTRA Demo</strong> · Medical & Dental</span>
          <div className="flex items-center gap-3 text-xs flex-wrap">
            <Link href="/industries" className="underline underline-offset-2 opacity-80 hover:opacity-100 whitespace-nowrap">← All industries</Link>
            <Link href="/contact" className="underline underline-offset-2 opacity-80 hover:opacity-100 whitespace-nowrap">Build mine →</Link>
          </div>
        </div>
      </div>

      {/* Clinic nav */}
      <nav className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#1D4ED8] flex items-center justify-center">
              <span className="text-white text-sm font-bold">WC</span>
            </div>
            <div>
              <p className="text-[#1E3A5F] font-bold text-sm leading-none">WorkCare Medical</p>
              <p className="text-gray-400 text-xs">Primary & Occupational Health</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-500">
            <span className="hover:text-[#1E3A5F] cursor-pointer transition-colors">Services</span>
            <span className="hover:text-[#1E3A5F] cursor-pointer transition-colors">Providers</span>
            <span className="hover:text-[#1E3A5F] cursor-pointer transition-colors">Locations</span>
            <span className="hover:text-[#1E3A5F] cursor-pointer transition-colors">Insurance</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:block text-[#1D4ED8] font-semibold text-sm">(813) 555-0192</span>
            <Link
              href="/industries/medical/contact"
              className="bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
            >
              Make an Appointment
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#EFF6FF] border-b border-blue-100 py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-[#DBEAFE] text-[#1D4ED8] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              Primary · Occupational · Pediatrics
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1E3A5F] leading-tight mb-5">
              Healthcare Built Around <span className="text-[#1D4ED8]">Your Schedule</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Same-day appointments, two convenient locations, and a team that actually listens. Primary care, occupational health, and pediatrics under one roof.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/industries/medical/contact"
                className="bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Make an Appointment
              </Link>
              <Link
                href="/industries/medical/services"
                className="border border-[#1D4ED8] text-[#1D4ED8] hover:bg-[#EFF6FF] font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                View Services
              </Link>
            </div>
            <p className="text-gray-400 text-xs mt-4">Same-day appointments available · Most insurance accepted</p>
          </div>

          <div className="flex flex-col gap-5">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=700&q=80&auto=format&fit=crop"
              alt="Healthcare professionals"
              className="w-full h-48 object-cover rounded-2xl hidden lg:block"
            />
            {/* Booking card */}
            <div className="bg-white rounded-2xl border border-blue-100 shadow-lg p-7">
              <p className="text-[#1D4ED8] text-xs font-bold uppercase tracking-widest mb-4">Quick Appointment Request</p>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Full Name</label>
                  <div className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-300 bg-gray-50">Jane Smith</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Service Type</label>
                    <div className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-300 bg-gray-50">Primary Care</div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Preferred Date</label>
                    <div className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-300 bg-gray-50">Today</div>
                  </div>
                </div>
                <div className="bg-[#1D4ED8] text-white text-center font-semibold py-3 rounded-lg text-sm">
                  Check Availability →
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                <span className="text-xs text-gray-500">Same-day slots available at both locations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-[#1E3A5F] py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-bold text-white mb-1">{s.value}</p>
              <p className="text-blue-200 text-xs uppercase tracking-wider font-semibold">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Page cards */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="text-[#1D4ED8] text-xs font-bold uppercase tracking-widest mb-2">Design Library</p>
              <h2 className="text-2xl font-bold text-[#1E3A5F]">6 fully designed demo pages</h2>
              <p className="text-gray-500 text-sm mt-1">Each page is built for a different clinical function — browse and mix freely.</p>
            </div>
            <Link
              href="/industries/medical/contact"
              className="text-sm font-semibold text-[#1D4ED8] border border-[#1D4ED8]/30 hover:border-[#1D4ED8] px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
            >
              Make an Appointment →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pages.map((p) => (
              <Link
                key={p.page}
                href={`/industries/medical/${p.page}`}
                className="group bg-white border border-gray-100 hover:border-[#1D4ED8]/30 rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-[#DBEAFE] transition-colors">
                    {p.icon}
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-[#1D4ED8] uppercase tracking-widest">{p.specialty}</span>
                    <h3 className="font-bold text-[#1E3A5F] text-sm leading-tight group-hover:text-[#1D4ED8] transition-colors">{p.label}</h3>
                  </div>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-4">{p.desc}</p>
                <span className="text-xs font-semibold text-[#1D4ED8] group-hover:translate-x-1 inline-block transition-transform">
                  View demo →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance strip */}
      <section className="bg-[#F8FAFF] border-y border-blue-100 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Accepted Insurance</p>
            <p className="text-[#1E3A5F] font-semibold text-sm">BlueCross · Aetna · Cigna · United · Humana · Medicare · Medicaid · and more</p>
          </div>
          <Link
            href="/industries/medical/contact"
            className="flex-shrink-0 bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-semibold px-5 py-3 rounded-lg text-sm transition-colors whitespace-nowrap"
          >
            Verify My Insurance
          </Link>
        </div>
      </section>

      {/* Mix and match nudge */}
      <section className="py-10 bg-white border-b border-gray-100 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-[#1E3A5F] text-sm">These designs aren&rsquo;t locked to medical.</p>
            <p className="text-gray-500 text-sm">Use any page design from any vertical — mix and match freely across industries.</p>
          </div>
          <Link
            href="/industries"
            className="flex-shrink-0 flex items-center gap-2 text-sm font-semibold text-[#007BFF] border border-[#007BFF]/30 hover:border-[#007BFF] px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap"
          >
            Browse all designs
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ULTRA CTA */}
      <section className="py-20 bg-[#0D1B2A] px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#007BFF] text-xs font-semibold tracking-widest uppercase mb-4">Build Your Medical Site</p>
          <h2 className="text-3xl font-bold text-white mb-6">
            This is what we&rsquo;d build for your practice.
          </h2>
          <p className="text-white/60 mb-10 text-lg leading-relaxed">
            Your logo, your providers, your colors — same structure, same performance. Fixed price. Fixed timeline. Live in 6 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#007BFF] hover:bg-[#0069d9] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
              Start a Conversation
            </Link>
            <Link href="/industries" className="bg-white/5 border border-white/20 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
              Browse Design Library
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
