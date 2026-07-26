"use client";
import { useState } from "react";
import Link from "next/link";

const services = [
  {
    icon: "🩺",
    name: "Primary Care",
    href: "primary-care",
    includes: ["Annual wellness exams","Sick visits & physicals","Chronic disease management (diabetes, hypertension, etc.)","Preventive care & screenings","Medication management","Referrals to specialists"],
    note: "Same-day sick visits available",
  },
  {
    icon: "👶",
    name: "Pediatrics",
    href: "pediatrics",
    includes: ["Well-child visits (birth through 18)","Childhood immunization schedule","Developmental & behavioral screenings","Sports physicals","Sick child visits","Asthma & allergy management"],
    note: "Evening & Saturday appointments",
  },
  {
    icon: "💻",
    name: "Telehealth",
    href: "contact",
    includes: ["Video visits from home or work","Prescription refills","Follow-up consultations","Mental health check-ins","Lab result review","Sick visit for minor illness"],
    note: "Available Mon–Fri, 7am–7pm",
  },
  {
    icon: "🏃",
    name: "Urgent Care",
    href: "contact",
    includes: ["Walk-in, no appointment needed","Minor injuries and lacerations","Infections (ear, sinus, UTI)","Flu & COVID testing","Sprains & strains","X-ray referrals"],
    note: "Walk-in hours: Mon–Sat 8am–6pm",
  },
  {
    icon: "💉",
    name: "Immunizations",
    href: "contact",
    includes: ["Flu shots (seasonal)","COVID-19 boosters","Travel vaccines","Shingles & pneumonia vaccines","Childhood vaccine catch-up","Employee health immunizations"],
    note: "No appointment required for flu shots",
  },
  {
    icon: "🔬",
    name: "Lab & Diagnostics",
    href: "contact",
    includes: ["In-house blood draw & urinalysis","EKG / electrocardiogram on-site","Rapid strep & flu testing","Point-of-care A1C & cholesterol","Specimen collection for send-out labs","Results via patient portal within 24 hrs"],
    note: "In-house lab — no separate visit needed",
  },
];

export default function MedicalServices() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="bg-white font-sans">
      {/* Nav */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-[#0C4A6E] text-xl">Bay<span className="text-[#0891B2]">Medical</span></Link>
          <div className="hidden lg:flex gap-6 text-sm font-semibold text-gray-600">
            <Link href="services" className="text-[#0891B2]">Services</Link>
            <Link href="primary-care" className="hover:text-[#0891B2]">Primary Care</Link>
            <Link href="pediatrics" className="hover:text-[#0891B2]">Pediatrics</Link>
            <Link href="about" className="hover:text-[#0891B2]">Providers</Link>
          </div>
          <Link href="contact" className="bg-[#0891B2] hover:bg-[#0779a0] text-white font-bold px-4 py-2 rounded text-sm transition-colors">Book Appointment</Link>
        </div>
      </nav>

      {/* Page header */}
      <section className="bg-[#0C4A6E] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-black text-white mb-2">Our Services</h1>
          <p className="text-white/60">Click any service to see what&apos;s included.</p>
        </div>
      </section>

      {/* Accordion service list */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-3">
          {services.map((s, i) => (
            <div key={s.name} className="border border-gray-200 rounded-2xl overflow-hidden hover:border-[#0891B2]/40 transition-colors">
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{s.icon}</span>
                  <div className="text-left">
                    <p className="font-black text-[#0C4A6E] text-base">{s.name}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{s.note}</p>
                  </div>
                </div>
                <span className={`text-[#0891B2] text-2xl transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">What&apos;s included:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                    {s.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-[#0891B2] font-bold mt-0.5 flex-shrink-0">✓</span>{item}
                      </li>
                    ))}
                  </ul>
                  <Link href={s.href} className="inline-block bg-[#0891B2] hover:bg-[#0779a0] text-white font-bold px-6 py-2.5 rounded text-sm transition-colors">Book This Service →</Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Same-day availability banner */}
      <section className="bg-[#0891B2] py-12 px-4 text-center">
        <h2 className="text-2xl font-black text-white mb-2">Same-Day Appointments Available</h2>
        <p className="text-white/80 mb-6">Call before noon for same-day sick visits. Evening and Saturday slots also open.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:8135550200" className="bg-white text-[#0891B2] font-black px-8 py-3 rounded hover:bg-gray-50 transition-colors">(813) 555-0200</a>
          <Link href="contact" className="border-2 border-white text-white font-bold px-8 py-3 rounded hover:bg-white hover:text-[#0891B2] transition-colors">Book Online</Link>
        </div>
      </section>

      {/* Insurance grid */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-black text-[#0C4A6E] mb-6">Accepted Insurance Plans</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {["Blue Cross Blue Shield","Aetna","Cigna","United Healthcare","Humana","Medicare","Medicaid","Tricare","Oscar Health","Molina Healthcare","Florida Blue","Bright Health"].map((ins) => (
              <div key={ins} className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-600 hover:border-[#0891B2] hover:text-[#0891B2] transition-colors text-center">{ins}</div>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-4">Don&apos;t see yours? Call — we likely accept it. <Link href="contact" className="text-[#0891B2] font-bold hover:underline">Verify your coverage.</Link></p>
        </div>
      </section>
    </div>
  );
}
