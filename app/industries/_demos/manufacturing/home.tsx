"use client";
import { useState } from "react";
import Link from "next/link";

const capabilities = [
  { icon: "⚙️", name: "CNC Machining", sub: "3, 4 & 5-axis milling, turning, grinding", href: "cnc-machining" },
  { icon: "🔩", name: "Fabrication", sub: "TIG/MIG welding, laser cutting, sheet metal", href: "fabrication" },
  { icon: "🏗️", name: "Assembly", sub: "Sub-assembly, kitting, final assembly", href: "capabilities" },
  { icon: "🛩️", name: "Aerospace", sub: "AS9100D certified, ITAR compliant", href: "capabilities" },
  { icon: "🔬", name: "Inspection & QC", sub: "CMM, first article, FAIR, PPAP", href: "capabilities" },
  { icon: "📐", name: "Engineering", sub: "DFM/DFA consulting, reverse engineering", href: "capabilities" },
];

export default function ManufacturingHome() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="bg-white font-sans">
      {/* ISO certification bar */}
      <div className="bg-[#0F1923] text-white text-center text-xs py-2 font-semibold tracking-wider">
        ISO 9001:2015 Certified · AS9100D · ITAR Registered · CAGE: 5XY31 · Serving Aerospace, Defense & Industrial Since 1983
      </div>

      {/* Dark nav */}
      <nav className="bg-[#0F1923] border-t border-white/5 sticky top-[32px] z-40">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-white text-xl tracking-tight">APEX<span className="text-[#1E90FF]">MFG</span></Link>
          <div className="hidden lg:flex gap-6 text-sm font-semibold text-gray-300">
            <Link href="capabilities" className="hover:text-white">Capabilities</Link>
            <Link href="cnc-machining" className="hover:text-white">CNC Machining</Link>
            <Link href="fabrication" className="hover:text-white">Fabrication</Link>
            <Link href="about" className="hover:text-white">About</Link>
          </div>
          <div className="flex gap-3 items-center">
            <Link href="contact" className="hidden md:block border border-white/30 hover:border-white text-white text-sm font-semibold px-4 py-2 rounded transition-colors">Request Quote</Link>
            <Link href="contact" className="bg-[#1E90FF] hover:bg-blue-600 text-white font-bold px-4 py-2 rounded text-sm transition-colors">RFQ</Link>
            <button className="lg:hidden text-gray-400 p-1" onClick={() => setNavOpen(!navOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
        {navOpen && (
          <div className="lg:hidden bg-[#0F1923] border-t border-white/10 px-4 py-4 flex flex-col gap-4 text-sm font-semibold text-gray-300">
            <Link href="capabilities">Capabilities</Link>
            <Link href="cnc-machining">CNC Machining</Link>
            <Link href="fabrication">Fabrication</Link>
            <Link href="about">About</Link>
            <Link href="contact">Request Quote</Link>
          </div>
        )}
      </nav>

      {/* Two-column hero */}
      <section className="py-16 lg:py-24 px-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#1E90FF] text-xs font-bold uppercase tracking-[0.25em] mb-4">Precision Manufacturing · Orlando, FL</p>
            <h1 className="text-4xl lg:text-5xl font-black text-[#0F1923] leading-tight mb-5">
              Tight Tolerances. Proven Quality. On-Time Delivery.
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              APEX Manufacturing has served aerospace, defense, and industrial customers since 1983. ISO 9001:2015 and AS9100D certified. 12,000 sq. ft. facility. 48-hour RFQ response guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="contact" className="bg-[#0F1923] hover:bg-[#1E90FF] text-white font-black px-8 py-4 rounded text-center transition-colors">Request a Quote</Link>
              <Link href="capabilities" className="border-2 border-[#0F1923] text-[#0F1923] font-bold px-8 py-4 rounded text-center hover:bg-[#0F1923] hover:text-white transition-colors">View Capabilities</Link>
            </div>
          </div>
          {/* Cert badges */}
          <div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">Certifications & Registrations</p>
              <div className="grid grid-cols-2 gap-3">
                {["ISO 9001:2015","AS9100D Rev D","ITAR Registered","CAGE: 5XY31","NADCAP (Welding)","MIL-SPEC Compliant","DFARS Compliant","SAM.gov Active"].map((c) => (
                  <div key={c} className="border border-gray-200 rounded-lg px-3 py-2.5 flex items-center gap-2">
                    <span className="text-[#1E90FF] text-sm">✓</span>
                    <span className="text-gray-700 text-xs font-semibold">{c}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-gray-100 grid grid-cols-3 gap-4 text-center text-sm">
                {[["40+","Years"],["12K","Sq Ft"],["100%","On-Time"]].map(([n, l]) => (
                  <div key={l}>
                    <p className="font-black text-[#1E90FF] text-2xl">{n}</p>
                    <p className="text-gray-400 text-xs">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability tile grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-[#0F1923] mb-8">Core Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((c) => (
              <Link key={c.name} href={c.href} className="border-2 border-gray-100 hover:border-[#1E90FF] rounded-2xl p-6 group transition-all hover:shadow-md">
                <span className="text-3xl mb-3 block">{c.icon}</span>
                <h3 className="font-black text-[#0F1923] text-lg mb-1 group-hover:text-[#1E90FF] transition-colors">{c.name}</h3>
                <p className="text-gray-400 text-sm">{c.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industry tabs */}
      <section className="bg-gray-50 border-y border-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-black text-[#0F1923] mb-4">Industries We Serve</h2>
            <div className="space-y-3">
              {[
                ["🛩️","Aerospace & Defense","AS9100D certified. ITAR registered. Experience with MIL-SPEC and DFARS requirements."],
                ["🏭","Industrial & OEM","High-volume production, prototyping, and contract manufacturing for OEM customers."],
                ["🔬","Medical Devices","ISO 13485 quality management for Class I and II device components."],
                ["⚡","Energy","Precision components for turbines, compressors, and energy generation equipment."],
              ].map(([icon, name, desc]) => (
                <div key={name} className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl p-4 hover:border-[#1E90FF]/40 transition-colors">
                  <span className="text-2xl flex-shrink-0">{icon}</span>
                  <div>
                    <p className="font-bold text-[#0F1923] text-sm">{name}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl aspect-video overflow-hidden">
            <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80&auto=format&fit=crop" alt="Manufacturing facility" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Dark cert strip */}
      <section className="bg-[#0F1923] py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 text-white/40 text-xs font-bold uppercase tracking-widest">
          {["ISO 9001:2015","AS9100D","ITAR","NADCAP","MIL-STD-1472","MIL-DTL-38999","AWS D1.1","ASME Sec IX"].map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
      </section>

      {/* RFQ CTA */}
      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-2xl font-black text-[#0F1923] mb-3">Ready to Submit a Quote Request?</h2>
        <p className="text-gray-500 mb-8 max-w-xl mx-auto">We respond to all RFQs within 48 hours. Upload your drawings or spec sheets and we'll get back to you fast.</p>
        <Link href="contact" className="inline-block bg-[#1E90FF] hover:bg-blue-600 text-white font-black px-12 py-5 rounded text-xl transition-colors">Submit RFQ →</Link>
      </section>
    </div>
  );
}
