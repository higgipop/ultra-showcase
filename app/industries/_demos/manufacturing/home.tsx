// asturamedical.com pattern: dark nav + WHITE body, cert banner, tile grid, featured spotlight
"use client";
import { useState } from "react";
import Link from "next/link";

const capabilityTiles = [
  { section: "CNC Machining", tiles: ["5-Axis Milling", "CNC Turning", "Multi-Axis Grinding", "EDM / Wire EDM"] },
  { section: "Fabrication", tiles: ["TIG/MIG Welding", "Laser Cutting", "Sheet Metal Forming"] },
  { section: "Assembly", tiles: ["Clean Room Assembly", "Sub-Assembly", "Functional Testing"] },
  { section: "Quality", tiles: ["CMM Inspection", "First Article (FAI)", "In-Process QC"] },
];

const industries = ["Aerospace", "Medical Devices", "Defense", "Industrial"];

const stats = [
  { value: "±0.0001\"", label: "Achievable tolerance" },
  { value: "99.4%", label: "On-time delivery" },
  { value: "40+", label: "Years in operation" },
  { value: "12,000 sq ft", label: "Precision facility" },
];

const certs = ["ISO 9001:2015", "AS9100 Rev D", "ISO 13485", "ITAR Registered", "NADCAP Approved"];

export default function ManufacturingHome() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white font-sans">
      {/* Dark nav */}
      <nav className="bg-[#0F1923] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="font-black text-white text-lg tracking-tight">APEX<span className="text-[#1E90FF]">PRECISION</span></div>
          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-gray-300">
            <Link href="capabilities" className="hover:text-white">Capabilities</Link>
            <Link href="cnc-machining" className="hover:text-white">CNC Machining</Link>
            <Link href="fabrication" className="hover:text-white">Fabrication</Link>
            <Link href="about" className="hover:text-white">About</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="contact" className="bg-[#1E90FF] hover:bg-[#1a7fef] text-white font-bold px-4 py-2 rounded text-sm transition-colors">Request RFQ</Link>
            <button className="lg:hidden text-gray-400" onClick={() => setOpen(!open)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden bg-[#0F1923] border-t border-white/10 px-4 py-3 flex flex-col gap-3 text-sm font-semibold text-gray-300">
            <Link href="capabilities">Capabilities</Link>
            <Link href="cnc-machining">CNC Machining</Link>
            <Link href="fabrication">Fabrication</Link>
            <Link href="about">About</Link>
          </div>
        )}
      </nav>

      {/* Cert banner */}
      <div className="bg-[#F8FAFC] border-b border-gray-100 py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-6 gap-y-1">
          {certs.map((c) => (
            <span key={c} className="text-xs font-bold text-gray-500 uppercase tracking-wider">{c}</span>
          ))}
        </div>
      </div>

      {/* Hero — WHITE background */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#1E90FF] text-xs font-bold uppercase tracking-[0.2em] mb-4">Tampa, FL · Contract Precision Manufacturing</p>
            <h1 className="text-5xl font-black text-[#0F1923] leading-tight mb-5">Quality Driven.<br />Built to Spec.</h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Contract precision machining for aerospace, medical, and defense programs. ISO 9001:2015 · AS9100 Rev D · ITAR Registered. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="contact" className="bg-[#1E90FF] hover:bg-[#1a7fef] text-white font-bold px-8 py-4 rounded text-center transition-colors">Request RFQ</Link>
              <Link href="capabilities" className="border-2 border-[#0F1923] hover:bg-[#0F1923] hover:text-white text-[#0F1923] font-bold px-8 py-4 rounded text-center transition-colors">View Capabilities</Link>
            </div>
          </div>

          {/* Spotlight card */}
          <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-7">
            <p className="text-[#1E90FF] text-xs font-bold uppercase tracking-widest mb-3">Featured Capability</p>
            <h2 className="text-2xl font-black text-[#0F1923] mb-3">5-Axis Simultaneous Machining</h2>
            <div className="bg-gray-200 rounded-xl aspect-[16/9] flex items-center justify-center text-gray-400 text-sm mb-5">Process Image Placeholder</div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Tolerance", value: "±0.0001\"" },
                { label: "Materials", value: "Ti · Inconel · Stainless" },
                { label: "Max Part Size", value: "24\" × 24\" × 18\"" },
                { label: "Lead Time", value: "48h quote turnaround" },
              ].map((spec) => (
                <div key={spec.label} className="bg-white border border-gray-100 rounded-lg px-3 py-2">
                  <p className="text-xs text-gray-400">{spec.label}</p>
                  <p className="font-bold text-[#0F1923] text-sm">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capability tile grid */}
      <section className="py-16 bg-[#F8FAFC] px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#1E90FF] text-xs font-bold uppercase tracking-widest mb-2">Capabilities</p>
            <h2 className="text-3xl font-black text-[#0F1923]">Full-Spectrum Precision Manufacturing</h2>
          </div>

          {/* Industry tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {industries.map((ind) => (
              <span key={ind} className="text-sm font-bold text-gray-600 border border-gray-200 hover:border-[#1E90FF] hover:text-[#1E90FF] px-4 py-2 rounded-full cursor-pointer transition-colors">{ind}</span>
            ))}
          </div>

          <div className="space-y-8">
            {capabilityTiles.map((group) => (
              <div key={group.section}>
                <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">{group.section}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {group.tiles.map((tile) => (
                    <Link key={tile} href="capabilities"
                      className="bg-white border border-gray-200 hover:border-[#1E90FF] rounded-xl p-6 text-center font-bold text-[#0F1923] text-sm transition-all hover:shadow-sm group">
                      <span className="group-hover:text-[#1E90FF] transition-colors">{tile}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-y border-gray-100 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-black text-[#1E90FF] mb-1">{s.value}</p>
              <p className="text-gray-500 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dark cert strip */}
      <section className="bg-[#0F1923] py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest text-center mb-5">Certifications & Compliance</p>
          <div className="flex flex-wrap justify-center gap-6">
            {certs.map((c) => (
              <span key={c} className="text-white font-bold text-sm border border-white/20 px-4 py-2 rounded">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1E90FF] py-14 text-center px-4">
        <h2 className="text-3xl font-black text-white mb-3">48-Hour Quote Turnaround. No Minimum Order.</h2>
        <p className="text-blue-100 text-lg mb-8">Upload your files or call our engineering team to discuss your program requirements.</p>
        <Link href="contact" className="inline-block bg-white hover:bg-gray-100 text-[#1E90FF] font-black px-12 py-4 rounded text-xl transition-colors">Request RFQ</Link>
      </section>
    </div>
  );
}
