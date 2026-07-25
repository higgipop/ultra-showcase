// paligentech.com: dark nav + WHITE body, full-width dark hero, 3 division cards, 01/02/03 blocks, accordion
"use client";
import { useState } from "react";
import Link from "next/link";

const divisions = [
  { name: "Systems Integration", desc: "C4ISR architecture, sensor fusion, mission system integration for airborne and ground platforms.", href: "systems-integration" },
  { name: "Cybersecurity", desc: "CMMC L2/L3 implementation, Zero Trust architecture, NIST 800-171 compliance, penetration testing.", href: "cybersecurity" },
  { name: "Software Engineering", desc: "RTOS development, DO-178C compliance, DevSecOps pipeline design, embedded systems.", href: "capabilities" },
];

const capabilities = [
  {
    title: "Systems Integration",
    items: ["C4ISR architecture and integration", "Electronic Warfare (EW) support", "Sensor fusion and data processing", "Mission system integration", "Test & Evaluation (T&E)", "MIL-STD-464 / IEEE compliance"],
  },
  {
    title: "Cybersecurity",
    items: ["CMMC Level 2 & Level 3 implementation", "NIST 800-171 gap assessment and remediation", "Zero Trust architecture design", "Penetration testing and red team exercises", "Security Operations Center (SOC) support"],
  },
  {
    title: "Software Engineering",
    items: ["Real-Time Operating System (RTOS) development", "DO-178C Software Development Assurance", "MIL-STD-498 documentation", "DevSecOps pipeline implementation", "Embedded systems and firmware engineering"],
  },
  {
    title: "Program Support",
    items: ["Systems Engineering Management Plan (SEMP)", "Test & Evaluation Master Plan (TEMP)", "Integrated Logistics Support (ILS)", "Technical documentation and TM development", "Program Management Office (PMO) support"],
  },
];

export default function DefenseHome() {
  const [openCap, setOpenCap] = useState<number | null>(null);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="bg-white font-sans">
      {/* Dark sticky nav */}
      <nav className="bg-[#0F1929] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="font-black text-white text-lg tracking-tight">APEX<span className="text-[#0057FF]">DEFENSE</span></div>
          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-gray-300">
            <Link href="about" className="hover:text-white">About Us</Link>
            <Link href="capabilities" className="hover:text-white">Divisions</Link>
            <Link href="about" className="hover:text-white">News</Link>
            <Link href="about" className="hover:text-white">Careers</Link>
            <Link href="contact" className="hover:text-white">Contact</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="contact" className="hidden sm:block border border-white/30 hover:border-white text-white text-sm font-semibold px-4 py-2 rounded transition-colors">Our Capabilities</Link>
            <Link href="contact" className="bg-[#0057FF] hover:bg-[#0048d9] text-white font-semibold px-4 py-2 rounded text-sm transition-colors">Contact Us</Link>
            <button className="lg:hidden text-gray-400" onClick={() => setNavOpen(!navOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
        {navOpen && (
          <div className="lg:hidden bg-[#0F1929] border-t border-white/10 px-4 py-3 flex flex-col gap-3 text-sm font-semibold text-gray-300">
            <Link href="about">About Us</Link>
            <Link href="capabilities">Divisions</Link>
            <Link href="about">Careers</Link>
            <Link href="contact">Contact</Link>
          </div>
        )}
      </nav>

      {/* Hero — dark overlay section */}
      <section className="bg-[#0F1929] py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0F1929] opacity-90" />
        <div className="max-w-7xl mx-auto relative text-center">
          <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
            Forging the Way Ahead
          </h1>
          <p className="text-white/70 text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Delivering aerospace, defense, and systems integration solutions for mission-critical programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="capabilities" className="border-2 border-white hover:bg-white hover:text-[#0F1929] text-white font-bold px-8 py-4 rounded transition-colors">Our Capabilities</Link>
            <Link href="contact" className="bg-[#0057FF] hover:bg-[#0048d9] text-white font-bold px-8 py-4 rounded transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* THREE division cards — WHITE background */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            {divisions.map((d) => (
              <div key={d.name} className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="bg-gray-100 aspect-video flex items-center justify-center text-gray-300 text-sm">Division Image</div>
                <div className="p-6">
                  <h2 className="font-black text-[#0F1929] text-lg mb-2 group-hover:text-[#0057FF] transition-colors">{d.name}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{d.desc}</p>
                  <Link href={d.href} className="text-[#0057FF] font-bold text-sm hover:underline">Learn More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 01/02/03 Mission blocks — white */}
      <section className="bg-[#F8FAFC] border-y border-gray-100 py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-10">
          {[
            { num: "01", title: "Our Mission", body: "Delivering mission-critical solutions with unwavering precision and integrity. We exist to serve the programs that protect our nation and its allies." },
            { num: "02", title: "Our Vision", body: "To be the trusted technology partner for the programs that matter most to national security — known for technical excellence, integrity, and the quality of our people." },
            { num: "03", title: "Our Values", body: null, values: ["Others Before Self", "Authenticity & Integrity", "Excellence in Everything", "Urgency When It Matters", "Accountability Without Exception"] },
          ].map((block) => (
            <div key={block.num} className="flex gap-8 items-start">
              <span className="text-5xl font-black text-[#0057FF] leading-none flex-shrink-0">{block.num}</span>
              <div>
                <h2 className="text-2xl font-black text-[#0F1929] mb-3">{block.title}</h2>
                {block.body ? (
                  <p className="text-gray-600 text-lg leading-relaxed">{block.body}</p>
                ) : (
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {block.values!.map((v) => (
                      <li key={v} className="flex items-center gap-2 text-gray-700 font-semibold">
                        <span className="w-2 h-2 bg-[#0057FF] rounded-full flex-shrink-0" /> {v}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities accordion — white */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-[#0F1929] mb-8">Technical Capabilities</h2>
          <div className="space-y-3">
            {capabilities.map((cap, i) => (
              <div key={cap.title} className="border border-gray-100 rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-bold text-[#0F1929] hover:text-[#0057FF] transition-colors"
                  onClick={() => setOpenCap(openCap === i ? null : i)}
                >
                  <span>{cap.title}</span>
                  <span className="text-[#0057FF] text-xl">{openCap === i ? "−" : "+"}</span>
                </button>
                {openCap === i && (
                  <div className="px-6 pb-5 border-t border-gray-100">
                    <ul className="grid sm:grid-cols-2 gap-2 pt-4">
                      {cap.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                          <span className="text-[#0057FF] font-bold mt-0.5 flex-shrink-0">·</span> {item}
                        </li>
                      ))}
                    </ul>
                    <Link href="capabilities" className="inline-block mt-4 text-[#0057FF] font-bold text-sm hover:underline">View Full Capability Statement →</Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers block */}
      <section className="bg-[#F8FAFC] border-y border-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-200 rounded-2xl aspect-video flex items-center justify-center text-gray-400">Culture Video Placeholder</div>
          <div>
            <h2 className="text-2xl font-black text-[#0F1929] mb-4">Join Our Team</h2>
            <blockquote className="text-lg text-gray-600 italic leading-relaxed mb-6 border-l-4 border-[#0057FF] pl-5">
              &ldquo;We have a staff of the industry&apos;s finest that does things the right way — not because someone is watching, but because it&apos;s who we are.&rdquo;
            </blockquote>
            <p className="text-gray-500 leading-relaxed mb-6">
              We are always looking for cleared and clearable professionals with defense, aerospace, or cybersecurity backgrounds who want to do meaningful work for the programs that matter most.
            </p>
            <Link href="about" className="inline-block border border-[#0F1929] text-[#0F1929] font-bold px-6 py-3 rounded hover:bg-[#0F1929] hover:text-white transition-colors text-sm">View Open Positions</Link>
          </div>
        </div>
      </section>

      {/* Closing CTA — dark */}
      <section className="bg-[#0F1929] py-14 text-center px-4">
        <h2 className="text-3xl font-black text-white mb-3">Ready to partner with us? Let&apos;s talk.</h2>
        <p className="text-white/60 text-lg mb-8">Program office inquiries, teaming opportunities, and capability briefing requests.</p>
        <Link href="contact" className="inline-block bg-[#0057FF] hover:bg-[#0048d9] text-white font-black px-12 py-5 rounded text-xl transition-colors">Contact Our PMO</Link>
      </section>
    </div>
  );
}
