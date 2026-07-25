// terrabellas.com: light cream, collaborative positioning, proposal CTAs, not dark
"use client";
import { useState } from "react";
import Link from "next/link";

const serviceCards = [
  { name: "Weddings", icon: "💍", desc: "Full-service wedding catering and reception services for 50–500 guests.", href: "weddings" },
  { name: "Corporate Events", icon: "🏢", desc: "Business lunches, working dinners, all-hands, and client entertainment.", href: "corporate-events" },
  { name: "Buffet Catering", icon: "🍽️", desc: "Chef-curated buffet menus with service staff for any occasion.", href: "catering" },
  { name: "BBQ Catering", icon: "🔥", desc: "Outdoor events — drop-off or full-service BBQ. Charcoal, gas, and smoker options.", href: "catering" },
  { name: "Bar Services", icon: "🥂", desc: "Licensed bartenders, full bar or beer/wine only, mocktail menus available.", href: "catering" },
];

const whoWeServe = ["Corporate", "Nonprofits", "Sports Organizations", "Healthcare Facilities", "Military / Government", "Educational Institutions"];

const areas = ["Jacksonville (HQ)", "Brunswick, GA", "Daytona Beach", "Lake City", "Gainesville"];

export default function HospitalityHome() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#FAFAF8] font-sans">
      {/* Nav */}
      <nav className="bg-[#FAFAF8] border-b border-[#E8E4DC] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="font-bold text-[#1C1917] text-xl tracking-tight">TERRA<span className="font-light text-[#6B7C5C]">BELLA</span></div>
          <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#4A4540]">
            <Link href="catering" className="hover:text-[#1C1917]">Catering</Link>
            <Link href="corporate-events" className="hover:text-[#1C1917]">Who We Serve</Link>
            <Link href="catering" className="hover:text-[#1C1917]">Menus</Link>
            <Link href="about" className="hover:text-[#1C1917]">Our Story</Link>
            <Link href="contact" className="hover:text-[#1C1917]">Locations</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="contact" className="hidden sm:block border border-[#1C1917] text-[#1C1917] font-semibold px-4 py-2 rounded text-sm hover:bg-[#1C1917] hover:text-white transition-colors">Talk With Our Team</Link>
            <Link href="contact" className="bg-[#1C1917] text-white font-semibold px-4 py-2 rounded text-sm hover:bg-[#2C2921] transition-colors">Request a Proposal</Link>
            <button className="lg:hidden text-[#4A4540]" onClick={() => setOpen(!open)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden bg-[#FAFAF8] border-t border-[#E8E4DC] px-4 py-3 flex flex-col gap-3 text-sm font-semibold text-[#4A4540]">
            <Link href="catering">Catering</Link>
            <Link href="corporate-events">Who We Serve</Link>
            <Link href="about">Our Story</Link>
            <Link href="contact">Locations</Link>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="py-16 lg:py-24 px-4 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1C1917] leading-tight mb-5" style={{fontFamily: "Georgia, serif"}}>
              Full-Service Catering for Thoughtfully Planned Events
            </h1>
            <p className="text-[#6B6560] text-lg leading-relaxed mb-8">
              Rather than offering fixed menus or predefined packages, we work with you to shape the menu, service style, staffing, and execution. Every event has its own story — we help you tell it through food.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="contact" className="bg-[#1C1917] hover:bg-[#2C2921] text-white font-semibold px-8 py-4 rounded text-center transition-colors">Request a Proposal</Link>
              <Link href="contact" className="border border-[#1C1917] text-[#1C1917] font-semibold px-8 py-4 rounded text-center hover:bg-[#1C1917] hover:text-white transition-colors">Talk With Our Team</Link>
            </div>
          </div>
          <div className="bg-[#E8E4DC] rounded-2xl aspect-[4/3] flex items-center justify-center text-[#B0A898] text-sm">
            Event / Catering Photo Placeholder
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-16 bg-[#F5F3EF] px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#6B7C5C] text-xs font-bold uppercase tracking-[0.2em] mb-3">What We Do</p>
            <h2 className="text-3xl font-bold text-[#1C1917]" style={{fontFamily: "Georgia, serif"}}>Catering Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceCards.slice(0, 3).map((s) => (
              <Link key={s.name} href={s.href} className="bg-white border border-[#E8E4DC] hover:border-[#6B7C5C] rounded-2xl p-7 group transition-all hover:shadow-md">
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="font-bold text-[#1C1917] text-lg mb-2 group-hover:text-[#6B7C5C] transition-colors">{s.name}</h3>
                <p className="text-[#6B6560] text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-sm font-semibold text-[#6B7C5C]">Learn More →</span>
              </Link>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mt-5 max-w-2xl mx-auto">
            {serviceCards.slice(3).map((s) => (
              <Link key={s.name} href={s.href} className="bg-white border border-[#E8E4DC] hover:border-[#6B7C5C] rounded-2xl p-7 group transition-all hover:shadow-md">
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="font-bold text-[#1C1917] text-lg mb-2 group-hover:text-[#6B7C5C] transition-colors">{s.name}</h3>
                <p className="text-[#6B6560] text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-sm font-semibold text-[#6B7C5C]">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-14 bg-[#FAFAF8] px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-[#6B7C5C] text-xs font-bold uppercase tracking-[0.2em] mb-3">Who We Serve</p>
            <h2 className="text-2xl font-bold text-[#1C1917]" style={{fontFamily: "Georgia, serif"}}>Our Clients</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {whoWeServe.map((w) => (
              <span key={w} className="bg-white border border-[#E8E4DC] text-[#4A4540] font-semibold px-5 py-2.5 rounded-full text-sm">{w}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-14 bg-[#F5F3EF] px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1C1917] mb-5" style={{fontFamily: "Georgia, serif"}}>Every event comes with its own considerations.</h2>
          <p className="text-[#6B6560] text-lg leading-relaxed mb-5">
            We don&apos;t believe in one-size-fits-all menus. Whether you&apos;re hosting a 500-person corporate gala or an intimate 50-guest rehearsal dinner, we shape our approach to match your vision, your guests, and your budget — not the other way around.
          </p>
          <p className="text-[#6B6560] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our team coordinates everything from menu design and staffing to rentals and day-of execution so you can be present at your event, not running it.
          </p>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-12 bg-[#FAFAF8] border-y border-[#E8E4DC] px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#6B7C5C] text-xs font-bold uppercase tracking-[0.2em] mb-5">Service Areas</p>
          <div className="flex flex-wrap justify-center gap-4">
            {areas.map((a) => (
              <span key={a} className="text-[#4A4540] font-semibold text-sm">{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C1917] text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-3" style={{fontFamily: "Georgia, serif"}}>Let&apos;s talk about your event.</h2>
        <p className="text-white/60 text-lg mb-8">We typically respond within 24 hours. Consultations are always free.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="contact" className="bg-white hover:bg-gray-100 text-[#1C1917] font-semibold px-10 py-4 rounded transition-colors">Request a Proposal</Link>
          <Link href="contact" className="border border-white text-white font-semibold px-10 py-4 rounded hover:bg-white hover:text-[#1C1917] transition-colors">Talk With Our Team</Link>
        </div>
      </section>
    </div>
  );
}
