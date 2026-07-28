"use client";
import { useState } from "react";
import Link from "next/link";

const specialties = [
  { title: "Primary Care", href: "primary-care", img: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=700&q=80&auto=format&fit=crop", desc: "Comprehensive adult medicine. Annual physicals, chronic disease management, preventive care, and acute illness treatment.", details: ["Annual physicals & wellness exams","Chronic disease management (diabetes, HTN, thyroid)","Acute illness visits","Preventive screenings & immunizations","Referrals to specialists"] },
  { title: "Pediatrics", href: "pediatrics", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=700&q=80&auto=format&fit=crop", desc: "Well-child visits, vaccinations, and sick care for newborns through age 18. Same-day sick appointments available.", details: ["Well-child visits (newborn–18)","Vaccine-preventable disease prevention","ADHD & developmental screening","Sports physicals","Same-day sick appointments"] },
  { title: "Telehealth", href: "contact", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700&q=80&auto=format&fit=crop", desc: "Secure video visits with your provider from anywhere. Available for most non-emergency concerns.", details: ["Video visits via phone or computer","Prescription refills","Lab result reviews","Chronic care follow-ups","Available evenings & weekends"] },
  { title: "Preventive Care", href: "services", img: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=700&q=80&auto=format&fit=crop", desc: "Screenings, immunizations, and lifestyle medicine to keep you healthy before problems start.", details: ["Cancer screenings (colonoscopy, mammogram)","Cardiovascular risk assessment","Nutrition & weight counseling","Travel medicine & vaccinations","Medicare wellness visits"] },
  { title: "Women's Health", href: "services", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80&auto=format&fit=crop", desc: "Annual exams, hormone management, prenatal referrals, and comprehensive women's health care.", details: ["Annual well-woman exams","Hormone therapy management","Birth control consultations","Osteoporosis screening","Menopause management"] },
  { title: "Chronic Disease", href: "primary-care", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700&q=80&auto=format&fit=crop", desc: "Long-term management for diabetes, hypertension, heart disease, and other chronic conditions.", details: ["Type 1 & 2 diabetes management","Hypertension control","Thyroid disorders","Asthma & COPD","Quarterly check-ins & labs"] },
];

export default function MedicalServices() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="bg-white font-sans">
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-[#0C4A6E] text-xl tracking-tight">Bay<span className="text-[#0891B2]">Medical</span></Link>
          <div className="hidden lg:flex gap-6 text-sm font-semibold text-gray-600">
            <Link href="services" className="text-[#0891B2]">Services</Link>
            <Link href="primary-care" className="hover:text-[#0891B2]">Primary Care</Link>
            <Link href="pediatrics" className="hover:text-[#0891B2]">Pediatrics</Link>
            <Link href="about" className="hover:text-[#0891B2]">Providers</Link>
          </div>
          <Link href="contact" className="bg-[#0891B2] hover:bg-[#0779a0] text-white font-bold px-4 py-2 rounded text-sm transition-colors">Book Appointment</Link>
        </div>
      </nav>

      {/* Photo hero split */}
      <section className="py-14 px-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#0891B2] text-xs font-bold uppercase tracking-[0.25em] mb-3">Comprehensive Care</p>
            <h1 className="text-3xl lg:text-5xl font-black text-[#0C4A6E] leading-tight mb-4">Our Services</h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">From annual physicals to same-day sick visits — primary care, pediatrics, telehealth, and preventive medicine all under one roof.</p>
            <p className="text-sm text-gray-400">Same-day availability in most cases. Most major insurance accepted.</p>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-video">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80&auto=format&fit=crop" alt="BayMedical office" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Accordion-style service list */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#0891B2] text-xs font-bold uppercase tracking-[0.2em] mb-2">What We Treat</p>
          <h2 className="text-2xl font-black text-[#0C4A6E] mb-8">Services & Specialties</h2>
          <div className="space-y-3">
            {specialties.map((s, i) => (
              <div key={s.title} className="border border-gray-100 rounded-2xl overflow-hidden">
                <button
                  className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-black text-[#0C4A6E]">{s.title}</p>
                    <p className="text-gray-500 text-sm truncate">{s.desc.substring(0, 70)}…</p>
                  </div>
                  <span className="text-[#0891B2] text-xl font-black flex-shrink-0">{open === i ? "−" : "+"}</span>
                </button>
                {open === i && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-5">
                      <div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                        <Link href={s.href} className="inline-block bg-[#0891B2] text-white font-bold px-5 py-2.5 rounded text-sm hover:bg-[#0779a0] transition-colors">Book This Service →</Link>
                      </div>
                      <ul className="space-y-2">
                        {s.details.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-gray-600 text-sm">
                            <span className="text-[#0891B2] font-black mt-0.5">✓</span> {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Same-day availability banner */}
      <section className="bg-[#0C4A6E] py-14 px-4 text-center">
        <h2 className="text-2xl font-black text-white mb-3">Same-Day Appointments Available</h2>
        <p className="text-cyan-200 mb-6 max-w-xl mx-auto">Don&apos;t wait weeks to be seen. We keep same-day slots open for sick visits and urgent concerns.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="contact" className="bg-[#0891B2] hover:bg-[#0779a0] text-white font-black px-8 py-4 rounded transition-colors">Book Online</Link>
          <a href="tel:8138723200" className="border-2 border-white text-white font-bold px-8 py-4 rounded hover:bg-white hover:text-[#0C4A6E] transition-colors">(813) 872-3200</a>
        </div>
      </section>
    </div>
  );
}
