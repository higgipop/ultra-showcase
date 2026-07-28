import Link from "next/link";

const coupons = [
  {
    value: "$50 OFF",
    title: "Any AC Service or Repair",
    sub: "New customers · Cannot combine with other offers",
  },
  {
    value: "0% APR",
    title: "Financing for 18 Months",
    sub: "On qualifying HVAC installations · Credit approval required",
  },
  {
    value: "FREE",
    title: "Second Opinion",
    sub: "On any competitor quote over $500",
  },
  {
    value: "$25 OFF",
    title: "First Plumbing Service",
    sub: "New customers · Any plumbing repair or service call",
  },
];

const services = [
  {
    name: "Air Conditioning",
    desc: "Repair, replacement, and maintenance for all AC brands and systems.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M8 3v3m0 12v3M16 3v3m0 12v3M3 8h3m12 0h3M3 16h3m12 0h3M12 3v18M3 12h18" />
      </svg>
    ),
  },
  {
    name: "Heating",
    desc: "Furnace repair, heat pump installation, and winter tune-ups.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    name: "Plumbing",
    desc: "Leak repair, drain cleaning, water heaters, and emergency plumbing.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    name: "Electrical",
    desc: "Panel upgrades, outlets, EV charger installation, surge protection.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    name: "Indoor Air Quality",
    desc: "Air purifiers, UV systems, humidity control, and duct cleaning.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
        <path d="M8 12s1.5-2 4-2 4 2 4 2" />
        <line x1="12" y1="8" x2="12" y2="8.01" />
      </svg>
    ),
  },
  {
    name: "Emergency Service",
    desc: "24/7 response for no-cool, no-heat, and major plumbing emergencies.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

const trustBadges = [
  {
    title: "Same-Day Service",
    sub: "Call by 2pm, we're there today",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "On-Time Guarantee",
    sub: "We call 30 min before arrival",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: "Licensed & Insured",
    sub: "HVAC, plumbing, and electrical licenses",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "100% Satisfaction",
    sub: "We make it right or it's free",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote: "AC went out on a Friday afternoon in July. ComfortPro had a tech at the house by 6pm and it was running again by 8. Pricing was upfront and fair.",
    name: "Renee M.",
    location: "Carrollwood",
    rating: 5,
  },
  {
    quote: "Used them for an HVAC tune-up and they found a refrigerant leak the last company missed. Straight shooters — they showed me exactly what was wrong on their camera.",
    name: "Marcus T.",
    location: "Wesley Chapel",
    rating: 5,
  },
  {
    quote: "Replaced our entire system — furnace, AC unit, and air handler. The crew was clean, professional, and done in one day. Unit's been running perfectly for two years.",
    name: "Donna K.",
    location: "New Tampa",
    rating: 5,
  },
];

export default function ServiceCompaniesHome() {
  return (
    <div className="bg-white font-sans text-gray-900">
      {/* Nav */}
      <nav className="bg-[#0A2A6B] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <Link href="home" className="flex items-center gap-0.5">
            <span className="font-black text-white text-xl tracking-tight">COMFORT</span>
            <span className="font-black text-[#F58220] text-xl tracking-tight">PRO</span>
          </Link>
          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-white/80">
            <Link href="services" className="hover:text-white transition-colors">AC &amp; Heating</Link>
            <Link href="services" className="hover:text-white transition-colors">Plumbing</Link>
            <Link href="services" className="hover:text-white transition-colors">Electrical</Link>
            <Link href="services" className="hover:text-white transition-colors">Air Quality</Link>
            <Link href="about" className="hover:text-white transition-colors">About</Link>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:8132056160" className="hidden sm:flex items-center gap-2 text-white font-bold text-sm">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#F58220]">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              (813) 205-6160
            </a>
            <Link href="contact" className="bg-[#F58220] hover:bg-orange-500 text-white font-bold px-4 py-2 rounded text-sm transition-colors">
              Schedule Online
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#0A2A6B] pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-[#F58220] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Tampa Bay&rsquo;s Home Services Experts
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6">
              Same-Day Service.<br />Next-Day Installations.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed mb-10 max-w-xl">
              25 years keeping Tampa Bay comfortable. AC, heating, plumbing, and electrical — all from one team you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:8132056160"
                className="flex items-center justify-center gap-3 bg-[#F58220] hover:bg-orange-500 text-white font-black px-8 py-4 rounded-lg transition-colors text-lg"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                </svg>
                (813) 205-6160
              </a>
              <Link
                href="contact"
                className="flex items-center justify-center gap-2 bg-white/10 border border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                Schedule Online
              </Link>
              <Link
                href="contact"
                className="flex items-center justify-center gap-2 border border-[#F58220]/50 hover:border-[#F58220] text-[#F58220] font-bold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                View Coupons
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Coupon cards */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">Current Offers</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coupons.map((c) => (
              <div
                key={c.title}
                className="bg-white border-2 border-dashed border-[#F58220]/40 hover:border-[#F58220] rounded-xl p-6 text-center transition-colors group"
              >
                <div className="inline-block bg-[#F58220] text-white font-black text-2xl px-4 py-1.5 rounded-lg mb-3 group-hover:bg-orange-500 transition-colors">
                  {c.value}
                </div>
                <p className="font-bold text-gray-900 text-sm mb-1">{c.title}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#F58220] text-xs font-bold tracking-[0.2em] uppercase mb-3">What We Do</p>
            <h2 className="text-3xl font-black text-gray-900">Full-Service Home Comfort &amp; Repair</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link
                key={s.name}
                href="services"
                className="group border border-gray-100 hover:border-[#0A2A6B]/20 rounded-xl p-6 transition-all hover:shadow-md"
              >
                <div className="w-11 h-11 rounded-lg bg-[#0A2A6B]/5 group-hover:bg-[#0A2A6B]/10 flex items-center justify-center text-[#0A2A6B] mb-4 transition-colors">
                  {s.icon}
                </div>
                <h3 className="font-black text-gray-900 mb-1.5">{s.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{s.desc}</p>
                <span className="text-[#F58220] text-sm font-bold group-hover:translate-x-1 inline-block transition-transform">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((b) => (
              <div key={b.title} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0A2A6B] flex items-center justify-center text-white flex-shrink-0">
                  {b.icon}
                </div>
                <div>
                  <p className="font-black text-gray-900 text-sm">{b.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed mt-0.5">{b.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company story */}
      <section className="py-20 bg-[#0A2A6B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#F58220] text-xs font-bold tracking-[0.2em] uppercase mb-4">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                25 Years. 50,000+ Homes Served.
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                ComfortPro started in 1998 with one truck and a simple promise: show up when you say you will, fix it right the first time, and be honest about what it costs. That approach built the business one customer at a time.
              </p>
              <p className="text-white/70 leading-relaxed">
                Today we run a fleet of 22 service vehicles across Hillsborough, Pasco, and Pinellas counties — still family-owned, still holding the same standard.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "25+", label: "Years in Business" },
                { value: "50,000+", label: "Homes Served" },
                { value: "22", label: "Service Vehicles" },
                { value: "4.9★", label: "Google Rating" },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                  <p className="text-3xl font-black text-[#F58220] mb-1">{s.value}</p>
                  <p className="text-white/60 text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#F58220] text-xs font-bold tracking-[0.2em] uppercase mb-3">What Customers Say</p>
            <h2 className="text-3xl font-black text-gray-900">4.9 Stars · 1,200+ Google Reviews</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="border border-gray-100 rounded-xl p-7">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" fill="#F58220" className="w-4 h-4">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-5 text-sm">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing CTA */}
      <section className="py-14 bg-[#F58220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-white/80 text-sm font-semibold mb-1">Flexible Financing Available</p>
            <h2 className="text-2xl md:text-3xl font-black text-white">
              0% APR for 18 Months on New Installations
            </h2>
            <p className="text-white/80 text-sm mt-1">Credit approval required. Ask your technician for details.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="contact"
              className="bg-white text-[#F58220] font-black px-7 py-3.5 rounded-lg hover:bg-orange-50 transition-colors text-sm text-center"
            >
              Schedule Online
            </Link>
            <a
              href="tel:8132056160"
              className="bg-[#0A2A6B] text-white font-black px-7 py-3.5 rounded-lg hover:bg-blue-900 transition-colors text-sm text-center"
            >
              (813) 205-6160
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
