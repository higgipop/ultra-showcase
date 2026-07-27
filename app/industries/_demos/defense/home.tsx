"use client";
import { useState } from "react";
import Link from "next/link";

const divisionTabs = [
  {
    label: "Systems Integration",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80&auto=format&fit=crop",
    items: ["C4ISR architecture and integration", "Electronic Warfare (EW) support", "Sensor fusion and data processing", "Mission system integration", "Test & Evaluation (T&E)", "MIL-STD-464 / IEEE compliance"],
  },
  {
    label: "Cybersecurity",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&q=80&auto=format&fit=crop",
    items: ["CMMC Level 2 & Level 3 implementation", "NIST 800-171 gap assessment", "Zero Trust architecture design", "Penetration testing and red team exercises", "Security Operations Center (SOC) support", "Incident response planning"],
  },
  {
    label: "Engineering Support",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80&auto=format&fit=crop",
    items: ["RTOS development and DO-178C compliance", "MIL-STD-498 documentation", "DevSecOps pipeline implementation", "Embedded systems and firmware engineering", "Systems Engineering Management Plan (SEMP)", "Program Management Office (PMO) support"],
  },
];

const missionTabs = [
  { label: "Our Vision", content: "To be the trusted technology partner for the programs that matter most to national security — known for technical excellence, integrity, and the quality of our people." },
  { label: "Our Mission", content: "Delivering mission-critical solutions with unwavering precision and integrity. We exist to serve the programs that protect our nation and its allies." },
  { label: "Our Values", content: "Others Before Self · Authenticity & Integrity · Excellence in Everything · Urgency When It Matters · Accountability Without Exception" },
];

const divisions = [
  {
    title: "Systems Integration",
    desc: "C4ISR architecture, sensor fusion, and mission system integration for airborne and ground platforms.",
    href: "systems-integration",
    img: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Cybersecurity",
    desc: "CMMC L2/L3, Zero Trust architecture, NIST 800-171 compliance, and penetration testing.",
    href: "cybersecurity",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Engineering & Program Support",
    desc: "RTOS development, DO-178C, DevSecOps pipelines, and PMO support for complex defense programs.",
    href: "capabilities",
    img: "https://images.unsplash.com/photo-1521737604579-b5cd6882c0a6?w=900&q=80&auto=format&fit=crop",
  },
];

export default function DefenseHome() {
  const [navOpen, setNavOpen] = useState(false);
  const [missionTab, setMissionTab] = useState(0);
  const [divTab, setDivTab] = useState(0);

  return (
    <div className="bg-white font-sans">
      {/* Dark nav */}
      <nav className="bg-[#0F1929] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="font-black text-white text-lg tracking-tight">APEX<span className="text-[#0057FF]">DEFENSE</span></div>
          <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-gray-300">
            <Link href="about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="capabilities" className="hover:text-white transition-colors">Capabilities</Link>
            <Link href="about" className="hover:text-white transition-colors">News</Link>
            <Link href="about" className="hover:text-white transition-colors">Careers</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="capabilities" className="hidden md:block border border-white/30 hover:border-white text-white text-sm font-semibold px-4 py-2 rounded transition-colors">Our Capabilities</Link>
            <Link href="contact" className="bg-[#0057FF] hover:bg-[#0048d9] text-white font-semibold px-4 py-2 rounded text-sm transition-colors">Contact Us</Link>
            <button className="lg:hidden text-gray-300 p-1" onClick={() => setNavOpen(!navOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
        {navOpen && (
          <div className="lg:hidden bg-[#0F1929] border-t border-white/10 px-4 py-4 flex flex-col gap-4 text-sm font-semibold text-gray-300">
            <Link href="about">About Us</Link>
            <Link href="capabilities">Capabilities</Link>
            <Link href="about">Careers</Link>
            <Link href="contact">Contact</Link>
          </div>
        )}
      </nav>

      {/* Hero — full-bleed photo with dark overlay */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1540575467537-409ae19e97c6?w=1800&q=80&auto=format&fit=crop"
          alt="Defense and aerospace"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1929] via-[#0F1929]/70 to-[#0F1929]/30" />
        <div className="relative max-w-7xl mx-auto px-4 pb-20 lg:pb-28 w-full">
          <p className="text-[#0057FF] text-xs font-bold uppercase tracking-[0.3em] mb-5">Engineered for Excellence</p>
          <h1 className="text-4xl lg:text-7xl font-black text-white leading-tight mb-5 max-w-4xl">
            Forging the<br />Way Ahead
          </h1>
          <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-6">
            Systems Integration · Cybersecurity · Software Engineering · Program Support
          </p>
          <p className="text-white/75 text-lg max-w-2xl leading-relaxed mb-10">
            APEX Defense delivers mission-critical technology solutions for the U.S. Department of Defense and allied nations. 100% American-owned. Cleared personnel. Results that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="capabilities" className="border-2 border-white hover:bg-white hover:text-[#0F1929] text-white font-bold px-8 py-4 rounded text-center transition-colors">Our Capabilities</Link>
            <Link href="contact" className="bg-[#0057FF] hover:bg-[#0048d9] text-white font-bold px-8 py-4 rounded text-center transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* 3 Division cards — white bg, each different photo */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {divisions.map((d) => (
              <Link key={d.title} href={d.href} className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group block">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={d.img} alt={d.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h2 className="font-black text-[#0F1929] text-lg mb-2 group-hover:text-[#0057FF] transition-colors">{d.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{d.desc}</p>
                  <span className="text-[#0057FF] font-bold text-sm">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky split — who we are + mission tabs */}
      <section className="bg-[#F8FAFC] py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-2xl overflow-hidden lg:sticky lg:top-24">
            <img
              src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1200&q=80&auto=format&fit=crop"
              alt="APEX Defense facility"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
          <div>
            <p className="text-[#0057FF] text-xs font-bold uppercase tracking-[0.25em] mb-3">Who We Are</p>
            <h2 className="text-3xl lg:text-4xl font-black text-[#0F1929] mb-4">Design a Better Way™</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              APEX Defense strives to exceed customer expectations while delivering 100% American-made solutions for aerospace and defense programs. Our team of cleared professionals brings decades of combined mission-critical experience.
            </p>
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="flex border-b border-gray-200">
                {missionTabs.map((t, i) => (
                  <button
                    key={t.label}
                    onClick={() => setMissionTab(i)}
                    className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${missionTab === i ? "bg-[#0F1929] text-white" : "text-gray-500 hover:text-[#0F1929]"}`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <div className="p-6 min-h-[100px]">
                <p className="text-gray-700 leading-relaxed">{missionTabs[missionTab].content}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax-style dark banner — real photo background */}
      <section className="relative py-28 px-4 text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1800&q=80&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0F1929]/85" />
        <div className="relative">
          <p className="text-[#0057FF] text-xs font-bold uppercase tracking-[0.3em] mb-4">Ensuring Maximum Efficiency</p>
          <h2 className="text-3xl lg:text-5xl font-black text-white italic leading-tight max-w-3xl mx-auto mb-6">
            &ldquo;We&rsquo;re committed to reshaping the future by reinventing technology.&rdquo;
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A snapshot of the capabilities APEX Defense has to offer — from CMMC compliance to C4ISR integration to full-lifecycle program support.
          </p>
        </div>
      </section>

      {/* Capabilities tabs */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-[#0F1929] mb-2">Technical Capabilities</h2>
          <p className="text-gray-500 mb-8">Select a division to explore our expertise.</p>
          <div className="flex gap-2 mb-8 flex-wrap">
            {divisionTabs.map((d, i) => (
              <button
                key={d.label}
                onClick={() => setDivTab(i)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${divTab === i ? "bg-[#0057FF] text-white" : "border border-gray-200 text-gray-600 hover:border-[#0057FF] hover:text-[#0057FF]"}`}
              >
                {d.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <ul className="space-y-3">
              {divisionTabs[divTab].items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0057FF] flex-shrink-0 mt-2" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
              <li className="pt-2">
                <Link href="contact" className="text-[#0057FF] font-bold text-sm hover:underline">Request a Capability Briefing →</Link>
              </li>
            </ul>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={divisionTabs[divTab].img}
                alt={divisionTabs[divTab].label}
                className="w-full aspect-video object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="bg-[#F8FAFC] border-y border-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#0057FF] text-xs font-bold uppercase tracking-[0.25em] mb-3">Careers</p>
            <h2 className="text-2xl font-black text-[#0F1929] mb-4">A Team Committed to Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We believe people make the difference. Our mission-driven culture, modern HQ, and commitment to cleared talent development shape our impact on national security.
            </p>
            <Link href="about" className="inline-block border border-[#0F1929] text-[#0F1929] font-bold px-6 py-3 rounded hover:bg-[#0F1929] hover:text-white transition-colors text-sm">View Open Positions</Link>
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820083-09fd938f5e3b?w=1200&q=80&auto=format&fit=crop"
              alt="Team culture"
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/25">
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-[#0F1929] py-20 px-4 text-center">
        <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-6">
          <span className="text-white block">Design a</span>
          <span className="text-[#0057FF] block">Better Way™</span>
        </h2>
        <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
          Have a program need? Send us a message, and we will walk you through how APEX Defense can take your mission to the next level.
        </p>
        <Link href="contact" className="inline-block bg-[#0057FF] hover:bg-[#0048d9] text-white font-black px-12 py-5 rounded text-xl transition-colors">Contact Us</Link>
      </section>
    </div>
  );
}
