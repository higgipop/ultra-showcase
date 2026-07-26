"use client";
import { useState } from "react";
import Link from "next/link";

const insurances = ["Blue Cross","Aetna","Cigna","United Healthcare","Humana","Medicare","Medicaid","Tricare","Oscar","Molina","Ambetter","AvMed","Florida Blue","Anthem","WellCare","Bright Health"];

export default function MedicalHome() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="bg-white font-sans">
      {/* Nav */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-[#0C4A6E] text-xl tracking-tight">Bay<span className="text-[#0891B2]">Medical</span></Link>
          <div className="hidden lg:flex gap-6 text-sm font-semibold text-gray-600">
            <Link href="services" className="hover:text-[#0891B2]">Services</Link>
            <Link href="primary-care" className="hover:text-[#0891B2]">Primary Care</Link>
            <Link href="pediatrics" className="hover:text-[#0891B2]">Pediatrics</Link>
            <Link href="about" className="hover:text-[#0891B2]">Providers</Link>
          </div>
          <div className="flex gap-3 items-center">
            <a href="tel:8135550200" className="hidden sm:block text-[#0891B2] font-bold text-sm">(813) 555-0200</a>
            <Link href="contact" className="bg-[#0891B2] hover:bg-[#0779a0] text-white font-bold px-4 py-2 rounded text-sm transition-colors">Book Appointment</Link>
            <button className="lg:hidden text-gray-500 p-1" onClick={() => setNavOpen(!navOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
        {navOpen && (
          <div className="lg:hidden border-t border-gray-100 px-4 py-4 flex flex-col gap-4 text-sm font-semibold text-gray-700">
            <Link href="services">Services</Link>
            <Link href="primary-care">Primary Care</Link>
            <Link href="pediatrics">Pediatrics</Link>
            <Link href="about">Providers</Link>
            <Link href="contact">Book Appointment</Link>
          </div>
        )}
      </nav>

      {/* Hero with inline booking form */}
      <section className="bg-gradient-to-br from-[#0C4A6E] to-[#0891B2] py-14 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-cyan-200 text-xs font-bold uppercase tracking-[0.25em] mb-4">Accepting New Patients</p>
            <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
              Compassionate Care for the Whole Family
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Board-certified physicians. Same-day and next-day appointments. Most major insurance accepted. Telehealth available.
            </p>
            <div className="flex flex-wrap gap-4 text-white/80 text-sm font-semibold">
              <span>✓ Same-Day Appointments</span>
              <span>✓ Telehealth Available</span>
              <span>✓ 16+ Insurances Accepted</span>
            </div>
          </div>

          {/* Inline booking form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-lg font-black text-[#0C4A6E] mb-1">Book an Appointment</h2>
            <p className="text-gray-400 text-sm mb-5">Same-day availability in most cases.</p>
            <form className="space-y-3">
              <input className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#0891B2]" placeholder="Your Name" />
              <input type="tel" className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#0891B2]" placeholder="Phone Number" />
              <select className="border border-gray-200 rounded-lg px-4 py-3 text-base bg-white w-full focus:outline-none focus:border-[#0891B2] text-gray-700">
                <option>Appointment Type</option>
                <option>Primary Care</option>
                <option>Pediatrics</option>
                <option>Telehealth</option>
                <option>Urgent Visit</option>
                <option>Annual Physical</option>
              </select>
              <select className="border border-gray-200 rounded-lg px-4 py-3 text-base bg-white w-full focus:outline-none focus:border-[#0891B2] text-gray-700">
                <option>Insurance</option>
                <option>Blue Cross Blue Shield</option>
                <option>Aetna</option>
                <option>Cigna</option>
                <option>United Healthcare</option>
                <option>Medicare / Medicaid</option>
                <option>Self-Pay</option>
                <option>Other</option>
              </select>
              <button type="submit" className="bg-[#0891B2] hover:bg-[#0779a0] text-white font-black px-6 py-4 rounded w-full text-base transition-colors">Request Appointment</button>
              <p className="text-center text-gray-400 text-xs">We&apos;ll call to confirm within 2 hours.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-gray-100 py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[["4","Board-Certified Physicians"],["15+","Years in Practice"],["9,500+","Patients Served"],["4.9★","Average Review"]].map(([num, label]) => (
            <div key={label}>
              <div className="text-3xl font-black text-[#0891B2] mb-1">{num}</div>
              <p className="text-gray-500 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Provider headshots strip */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-[#0C4A6E] mb-8 text-center">Meet Your Providers</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Dr. Maria Santos, MD", specialty: "Family Medicine, Board-Certified" },
              { name: "Dr. James Park, MD", specialty: "Internal Medicine, Board-Certified" },
              { name: "Dr. Emily Chen, DO", specialty: "Pediatrics, Board-Certified" },
              { name: "Dr. Robert Williams, MD", specialty: "Urgent Care & Family Medicine" },
            ].map((p) => (
              <div key={p.name} className="text-center group">
                <div className="bg-gray-100 rounded-2xl aspect-square mb-3 flex items-center justify-center text-gray-300 text-sm group-hover:ring-2 group-hover:ring-[#0891B2] transition-all">Provider Photo</div>
                <p className="font-black text-[#0C4A6E] text-sm">{p.name}</p>
                <p className="text-gray-400 text-xs">{p.specialty}</p>
                <Link href="contact" className="inline-block mt-2 text-[#0891B2] text-xs font-bold hover:underline">Book with this provider →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="bg-[#F0F9FF] border-y border-blue-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-[#0C4A6E] mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              ["🩺","Primary Care","Annual physicals, chronic disease management, sick visits"],
              ["👶","Pediatrics","Well-child visits, vaccines, developmental screenings"],
              ["💻","Telehealth","Video visits from home, same-day availability"],
              ["🏃","Urgent Care","Walk-in available. No appointment needed."],
              ["💉","Immunizations","Flu shots, travel vaccines, COVID boosters"],
              ["🔬","Lab & Diagnostics","In-house labs, x-ray referrals, EKG on-site"],
            ].map(([icon, name, desc]) => (
              <div key={name} className="bg-white rounded-xl p-5 border border-blue-50 hover:border-[#0891B2]/30 hover:shadow-sm transition-all">
                <span className="text-2xl mb-2 block">{icon}</span>
                <h3 className="font-bold text-[#0C4A6E] mb-1">{name}</h3>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="services" className="inline-block border-2 border-[#0891B2] text-[#0891B2] hover:bg-[#0891B2] hover:text-white font-bold px-8 py-3 rounded transition-colors">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Insurance wall */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-black text-[#0C4A6E] mb-2 text-center">Accepted Insurance</h2>
          <p className="text-center text-gray-400 text-sm mb-8">We accept 16+ major insurance plans. Call to verify your benefits.</p>
          <div className="flex flex-wrap justify-center gap-2">
            {insurances.map((ins) => (
              <span key={ins} className="border border-gray-200 text-gray-600 text-sm font-semibold px-4 py-2 rounded-full hover:border-[#0891B2] hover:text-[#0891B2] transition-colors">{ins}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#0C4A6E] py-14 px-4 text-center">
        <h2 className="text-2xl font-black text-white mb-3">Ready to Schedule?</h2>
        <p className="text-white/60 mb-8">Same-day appointments available. Most insurance accepted.</p>
        <Link href="contact" className="inline-block bg-[#0891B2] hover:bg-[#0779a0] text-white font-black px-10 py-4 rounded text-lg transition-colors">Book an Appointment</Link>
      </section>
    </div>
  );
}
