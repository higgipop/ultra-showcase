"use client";
import { useState } from "react";
import Link from "next/link";

const insurances = ["Blue Cross","Aetna","Cigna","United Healthcare","Humana","Medicare","Medicaid","Tricare","Oscar","Molina","Ambetter","AvMed","Florida Blue","Anthem","WellCare","Bright Health"];

const providers = [
  { name: "Dr. Sarah Chen, MD", specialty: "Primary Care", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80&auto=format&fit=crop&crop=faces" },
  { name: "Dr. James Park, MD", specialty: "Internal Medicine", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80&auto=format&fit=crop&crop=faces" },
  { name: "Dr. Maria Lopez, MD", specialty: "Pediatrics", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop&crop=faces" },
];

export default function MedicalHome() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="bg-white font-sans">
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

      {/* Hero — text left, photo right */}
      <section className="py-16 lg:py-24 px-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#0891B2] text-xs font-bold uppercase tracking-[0.25em] mb-4">Accepting New Patients</p>
            <h1 className="text-4xl lg:text-5xl font-black text-[#0C4A6E] leading-tight mb-4">Compassionate Care for the Whole Family</h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">Board-certified physicians. Same-day and next-day appointments. Most major insurance accepted. Telehealth available.</p>
            <div className="flex flex-wrap gap-4 text-gray-700 text-sm font-semibold mb-8">
              <span className="flex items-center gap-1.5"><span className="text-[#0891B2] font-black">✓</span> Same-Day Appointments</span>
              <span className="flex items-center gap-1.5"><span className="text-[#0891B2] font-black">✓</span> Telehealth Available</span>
              <span className="flex items-center gap-1.5"><span className="text-[#0891B2] font-black">✓</span> 16+ Insurances Accepted</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="contact" className="bg-[#0891B2] hover:bg-[#0779a0] text-white font-black px-8 py-4 rounded text-center transition-colors">Book Appointment</Link>
              <a href="tel:8135550200" className="border-2 border-[#0891B2] text-[#0891B2] font-bold px-8 py-4 rounded text-center hover:bg-[#0891B2] hover:text-white transition-colors">(813) 555-0200</a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img src="https://images.unsplash.com/photo-1519494026892-476d51a0a4ec?w=1200&q=80&auto=format&fit=crop" alt="BayMedical clinic" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Inline booking form — full width below hero */}
      <section className="bg-[#0C4A6E] py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white font-black text-lg mb-5 text-center">Book an Appointment Online</h2>
          <form className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <input className="border-0 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:ring-2 focus:ring-[#0891B2] bg-white" placeholder="Your Name" />
            <input type="tel" className="border-0 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:ring-2 focus:ring-[#0891B2] bg-white" placeholder="Phone Number" />
            <select className="border-0 rounded-lg px-4 py-3 text-base bg-white w-full focus:outline-none focus:ring-2 focus:ring-[#0891B2] text-gray-700">
              <option>Appointment Type</option>
              <option>Primary Care</option>
              <option>Pediatrics</option>
              <option>Telehealth</option>
              <option>Annual Physical</option>
            </select>
            <button type="submit" className="bg-[#0891B2] hover:bg-[#0779a0] text-white font-black py-3 rounded-lg transition-colors">Request Appt.</button>
          </form>
        </div>
      </section>

      {/* Provider cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[#0891B2] text-xs font-bold uppercase tracking-[0.2em] mb-2">Meet Your Care Team</p>
              <h2 className="text-2xl font-black text-[#0C4A6E]">Our Providers</h2>
            </div>
            <Link href="about" className="text-[#0891B2] font-bold text-sm hover:underline">View All →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {providers.map((p) => (
              <Link key={p.name} href="about" className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group block">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <p className="font-black text-[#0C4A6E] group-hover:text-[#0891B2] transition-colors">{p.name}</p>
                  <p className="text-gray-500 text-sm">{p.specialty}</p>
                  <span className="text-[#0891B2] font-bold text-sm mt-2 block">Book with Dr. →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-[#F8FAFC] border-y border-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[["15+","Years in Practice"],["3","Locations"],["98%","Patient Satisfaction"],["Same Day","Most Appointments"]].map(([num, label]) => (
            <div key={label}>
              <p className="text-3xl font-black text-[#0891B2]">{num}</p>
              <p className="text-gray-500 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Insurance wall */}
      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#0891B2] text-xs font-bold uppercase tracking-[0.2em] mb-2">Accepted Insurance</p>
          <h2 className="text-2xl font-black text-[#0C4A6E] mb-8">We Accept 16+ Insurance Plans</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {insurances.map((ins) => (
              <span key={ins} className="bg-white border border-gray-200 rounded-full text-xs px-4 py-2 text-gray-600 font-semibold">{ins}</span>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-5">Don&apos;t see your insurance? Call us — we may still be in-network.</p>
        </div>
      </section>
    </div>
  );
}
