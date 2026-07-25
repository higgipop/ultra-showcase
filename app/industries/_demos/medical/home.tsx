// clean white/teal, booking-first hero, provider grid, insurance accepted
"use client";
import { useState } from "react";
import Link from "next/link";

const services = [
  { name: "Primary Care", icon: "🩺", desc: "Annual wellness, chronic disease management, preventive screenings, same-day sick visits.", sameDay: true, href: "primary-care" },
  { name: "Pediatrics", icon: "👶", desc: "Well-child exams, immunizations, developmental screenings for patients 0–18.", sameDay: false, href: "pediatrics" },
  { name: "Women's Health", icon: "🌸", desc: "GYN exams, contraception, prenatal care, and hormone management.", sameDay: true, href: "services" },
  { name: "Mental Health", icon: "🧠", desc: "Individual therapy, medication management, anxiety, depression, ADHD evaluations.", sameDay: false, href: "services" },
  { name: "Physical Therapy", icon: "💪", desc: "Post-surgical rehab, sports injuries, musculoskeletal pain, fall prevention.", sameDay: false, href: "services" },
  { name: "Telehealth", icon: "📱", desc: "Video visits for established patients. Same-day appointments often available.", sameDay: true, href: "services" },
];

const providers = [
  { name: "Dr. Amanda Chen, MD", spec: "Internal Medicine · Primary Care", edu: "Johns Hopkins · Tampa General", accepting: true },
  { name: "Dr. Marcus Webb, DO", spec: "Family Medicine · Sports Medicine", edu: "Nova Southeastern · USF Health", accepting: true },
  { name: "Dr. Priya Nair, MD", spec: "Pediatrics · Adolescent Medicine", edu: "University of Michigan · All Children's", accepting: false },
  { name: "Sarah Hoffman, LCSW", spec: "Mental Health · Anxiety · ADHD", edu: "FSU · Tampa Bay Counseling Center", accepting: true },
];

const insurance = ["Aetna", "Humana", "BlueCross BlueShield", "United Healthcare", "Cigna", "Medicare", "Medicaid", "HealthFirst", "Molina"];

const stats = [
  { value: "98%", label: "Patient satisfaction score" },
  { value: "<24h", label: "Average appointment wait" },
  { value: "18+", label: "Years serving the community" },
  { value: "4.9★", label: "Google rating (1,200+ reviews)" },
];

export default function MedicalHome() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white font-sans">
      {/* Urgency bar */}
      <div className="bg-[#0891B2] text-white text-center text-sm py-2 font-semibold">
        New Patients Welcome · Same-Day Appointments Available · <a href="tel:8135550100" className="underline font-bold">(813) 555-0100</a>
      </div>

      {/* Nav */}
      <nav className="bg-white border-b border-gray-100 sticky top-[36px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="font-black text-[#0C4A6E] text-xl">HARBOR<span className="text-[#0891B2]">HEALTH</span></div>
          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-gray-600">
            <Link href="services" className="hover:text-[#0891B2]">Services</Link>
            <Link href="primary-care" className="hover:text-[#0891B2]">Primary Care</Link>
            <Link href="pediatrics" className="hover:text-[#0891B2]">Pediatrics</Link>
            <Link href="about" className="hover:text-[#0891B2]">Our Providers</Link>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:8135550100" className="hidden md:block font-bold text-[#0891B2] text-sm">(813) 555-0100</a>
            <Link href="contact" className="bg-[#0891B2] hover:bg-[#0770A0] text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors">Book Appointment</Link>
            <button className="lg:hidden" onClick={() => setOpen(!open)}>
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden border-t bg-white px-4 py-3 flex flex-col gap-3 text-sm font-semibold text-gray-700">
            <Link href="services">Services</Link>
            <Link href="primary-care">Primary Care</Link>
            <Link href="pediatrics">Pediatrics</Link>
            <Link href="about">Our Providers</Link>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0C4A6E] to-[#0891B2] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-200 text-xs font-bold uppercase tracking-[0.2em] mb-4">Comprehensive Healthcare · Tampa, FL</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">Your health,<br />in good hands.</h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Patient-centered primary and specialty care for families across Tampa Bay — same-day appointments, telehealth, and a team that actually listens. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="contact" className="bg-white hover:bg-white/90 text-[#0C4A6E] font-bold px-8 py-4 rounded-xl text-center transition-colors">Book an Appointment</Link>
              <a href="tel:8135550100" className="border-2 border-white/40 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-center transition-colors">Call Us</a>
            </div>
          </div>

          {/* Booking card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="font-bold text-[#0C4A6E] text-xl mb-6">Schedule a Visit</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Visit Type</label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 text-sm focus:ring-2 focus:ring-[#0891B2] focus:outline-none">
                  <option>New Patient Visit</option>
                  <option>Follow-Up Appointment</option>
                  <option>Urgent / Sick Visit</option>
                  <option>Telehealth Visit</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Department</label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 text-sm focus:ring-2 focus:ring-[#0891B2] focus:outline-none">
                  <option>Primary Care</option>
                  <option>Pediatrics</option>
                  <option>Women&apos;s Health</option>
                  <option>Mental Health</option>
                  <option>Physical Therapy</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Preferred Date</label>
                <input type="date" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 text-sm focus:ring-2 focus:ring-[#0891B2] focus:outline-none" />
              </div>
              <button className="w-full bg-[#0891B2] hover:bg-[#0770A0] text-white font-bold py-4 rounded-xl transition-colors">
                Request Appointment
              </button>
            </form>
            <p className="text-gray-400 text-xs text-center mt-4">We confirm via text or email within 2 hours</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-[#0891B2] mb-1">{s.value}</p>
              <p className="text-gray-500 text-sm leading-tight">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#F0F9FF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#0891B2] text-xs font-semibold tracking-[0.15em] uppercase mb-3">Our Services</p>
            <h2 className="text-3xl font-bold text-[#0C4A6E]">Comprehensive care under one roof.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link key={s.name} href={s.href} className="group bg-white border border-gray-100 rounded-2xl p-7 hover:border-[#0891B2]/40 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{s.icon}</span>
                  {s.sameDay && <span className="text-xs font-bold bg-green-50 text-green-700 px-2.5 py-1 rounded-full">Same-Day</span>}
                </div>
                <h3 className="font-bold text-[#0C4A6E] text-lg mb-2 group-hover:text-[#0891B2] transition-colors">{s.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-xs font-semibold text-[#0891B2] uppercase tracking-wider">Book Now →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Providers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#0891B2] text-xs font-semibold tracking-[0.15em] uppercase mb-3">Our Providers</p>
            <h2 className="text-3xl font-bold text-[#0C4A6E]">Meet your care team.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {providers.map((p) => (
              <div key={p.name} className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-b from-[#E0F2FE] to-white h-32 flex items-end justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#0891B2]/20 border-4 border-white shadow flex items-center justify-center text-[#0891B2] font-black text-2xl">
                    {p.name.split(" ")[1][0]}
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-[#0C4A6E] text-sm leading-tight mb-1">{p.name}</h3>
                  <p className="text-[#0891B2] text-xs font-semibold mb-2">{p.spec}</p>
                  <p className="text-gray-400 text-xs mb-3">{p.edu}</p>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${p.accepting ? "bg-green-50 text-green-700" : "bg-orange-50 text-orange-600"}`}>
                    {p.accepting ? "Accepting Patients" : "Waitlist Only"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-16 bg-[#F0F9FF]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[#0891B2] text-xs font-semibold tracking-[0.15em] uppercase mb-8">Insurance Accepted</p>
          <div className="flex flex-wrap justify-center gap-3">
            {insurance.map((ins) => (
              <span key={ins} className="bg-white border border-[#BAE6FD] text-[#0C4A6E] text-sm font-semibold px-5 py-2 rounded-full">{ins}</span>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-6">Don&apos;t see your plan? Call us — we work with most major carriers.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0C4A6E] text-center px-6">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to make your appointment?</h2>
        <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">New patients welcome. Same-day sick visits often available. Call or book online in under 2 minutes.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="contact" className="bg-[#0891B2] hover:bg-[#0770A0] text-white font-bold px-10 py-4 rounded-xl transition-colors">Book Online</Link>
          <a href="tel:8135550100" className="border-2 border-white/30 hover:border-white text-white font-bold px-10 py-4 rounded-xl transition-colors">Call (813) 555-0100</a>
        </div>
      </section>
    </div>
  );
}
