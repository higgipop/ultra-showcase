"use client";
import { useState } from "react";
import Link from "next/link";

const tabs = [
  {
    label: "C4ISR",
    content: "Command, Control, Communications, Computers, Intelligence, Surveillance, and Reconnaissance systems integration across all domains. We architect and integrate sensor networks, data links, and mission networks for joint-force interoperability.",
    capabilities: ["Joint tactical radio system (JTRS) integration","Link 16 / MADL data link integration","Intelligence fusion and processing","Network-centric warfare architecture","Command post automation","Interoperability testing (IOP/IOT&E)"],
  },
  {
    label: "Electronic Warfare",
    content: "Electronic Warfare system integration, including ESM, ECM, and EA capabilities. Our team supports EW system-of-systems design, integration, and test across airborne and ground platforms.",
    capabilities: ["Electronic Support Measures (ESM) integration","Electronic Attack (EA) system design","Radar warning receiver (RWR) integration","Jamming system development and test","EW spectrum planning and deconfliction","SIGINT collection system integration"],
  },
  {
    label: "Sensor Fusion",
    content: "Multi-INT sensor fusion enabling real-time battlefield awareness. We design algorithms and integration architectures that combine RADAR, EO/IR, SIGINT, and HUMINT into actionable common operating pictures.",
    capabilities: ["Multi-sensor data fusion algorithms","EO/IR and RADAR fusion processing","Common Operating Picture (COP) generation","Track management and correlation","Latency optimization for real-time systems","AI/ML-enhanced target detection"],
  },
  {
    label: "Mission Systems",
    content: "End-to-end mission system integration from requirements through operational testing. We manage complex system-of-systems programs with formal SEMP, IMP, and IMS deliverables.",
    capabilities: ["Mission computer integration","Stores management system (SMS) integration","Flight management system (FMS) integration","Avionics software integration (DO-178C)","System-of-systems architecture","Operational flight program (OFP) development"],
  },
];

export default function DefenseSystemsIntegration() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-white font-sans">
      {/* Dark nav */}
      <nav className="bg-[#0F1929]">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-white text-lg tracking-tight">APEX<span className="text-[#0057FF]">DEFENSE</span></Link>
          <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-gray-300">
            <Link href="about" className="hover:text-white">About Us</Link>
            <Link href="capabilities" className="hover:text-white">Capabilities</Link>
          </div>
          <Link href="contact" className="bg-[#0057FF] hover:bg-[#0048d9] text-white font-semibold px-4 py-2 rounded text-sm transition-colors">Contact Us</Link>
        </div>
      </nav>

      {/* Full-width image hero */}
      <section className="bg-[#0F1929] relative py-20 lg:py-28 px-4">
        <div className="absolute inset-0 bg-gray-800 opacity-30" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-white/40 text-xs font-semibold mb-4">
            <Link href="home" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <Link href="capabilities" className="hover:text-white">Capabilities</Link>
            <span className="mx-2">›</span>
            <span className="text-white/70">Systems Integration</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight max-w-3xl mb-4">
            Systems Integration Division
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            C4ISR · Electronic Warfare · Sensor Fusion · Mission Systems — full lifecycle integration for airborne, maritime, and ground platforms.
          </p>
        </div>
      </section>

      {/* Tabbed content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-0 border-b border-gray-200 mb-10 overflow-x-auto">
            {tabs.map((t, i) => (
              <button
                key={t.label}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-3 text-sm font-bold whitespace-nowrap border-b-2 transition-colors ${activeTab === i ? "border-[#0057FF] text-[#0057FF]" : "border-transparent text-gray-500 hover:text-[#0F1929]"}`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-black text-[#0F1929] mb-4">{tabs[activeTab].label} Integration</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{tabs[activeTab].content}</p>
              <ul className="space-y-3">
                {tabs[activeTab].capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-gray-700 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0057FF] flex-shrink-0 mt-2" />{cap}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden">
              <img src="https://images.unsplash.com/photo-1540575467537-409ae19e97c6?w=900&q=80&auto=format&fit=crop" alt={tabs[activeTab].label} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Platform experience sidebar + contact form */}
      <section className="bg-[#F8FAFC] py-16 px-4 border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-black text-[#0F1929] mb-6">Contact Our Systems Integration Team</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input className="border border-gray-200 rounded-lg px-4 py-3 text-base bg-white w-full focus:outline-none focus:border-[#0057FF]" placeholder="Name" />
                <input className="border border-gray-200 rounded-lg px-4 py-3 text-base bg-white w-full focus:outline-none focus:border-[#0057FF]" placeholder="Organization" />
              </div>
              <input className="border border-gray-200 rounded-lg px-4 py-3 text-base bg-white w-full focus:outline-none focus:border-[#0057FF]" placeholder="Program / Platform" />
              <select className="border border-gray-200 rounded-lg px-4 py-3 text-base bg-white w-full focus:outline-none focus:border-[#0057FF] text-gray-700">
                <option>Area of Interest</option>
                <option>C4ISR Integration</option>
                <option>Electronic Warfare</option>
                <option>Sensor Fusion</option>
                <option>Mission Systems</option>
              </select>
              <textarea className="border border-gray-200 rounded-lg px-4 py-3 text-base bg-white w-full h-28 resize-none focus:outline-none focus:border-[#0057FF]" placeholder="Program requirement details" />
              <button type="submit" className="bg-[#0057FF] hover:bg-[#0048d9] text-white font-bold px-8 py-3 rounded text-sm transition-colors">Submit Inquiry</button>
            </form>
          </div>
          <div>
            <h3 className="font-black text-[#0F1929] mb-4 text-sm uppercase tracking-widest">Platform Experience</h3>
            <div className="space-y-2">
              {["F/A-18 E/F Super Hornet","EA-18G Growler","P-8A Poseidon","V-22 Osprey","UH-60 Black Hawk","MQ-9 Reaper","M-ATV Ground Platform","Littoral Combat Ship (LCS)"].map((p) => (
                <div key={p} className="flex items-center gap-3 py-2 border-b border-gray-200 last:border-0">
                  <span className="text-[#0057FF] text-xs font-bold">✓</span>
                  <span className="text-gray-700 text-sm">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cert strip */}
      <section className="bg-[#0F1929] py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 text-white/50 text-xs font-bold uppercase tracking-widest">
          {["MIL-STD-464","DO-178C","IEEE 802.11","MIL-STD-461","NATO STANAG 4586","JITC Certified"].map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-2xl font-black text-[#0F1929] mb-4">Need systems integration support?</h2>
        <p className="text-gray-500 mb-8">Tell us about your platform and program timeline. We'll staff cleared engineers within 30 days.</p>
        <Link href="contact" className="inline-block bg-[#0057FF] hover:bg-[#0048d9] text-white font-bold px-10 py-4 rounded transition-colors">Start a Conversation</Link>
      </section>
    </div>
  );
}
