"use client";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  { q: "What CMMC level does my company need?", a: "It depends on the type of CUI you handle. Companies processing only FCI (Federal Contract Information) need CMMC Level 1. Those handling CUI must meet Level 2. A small subset handling critical national security programs may be required to achieve Level 3." },
  { q: "How long does CMMC assessment take?", a: "A C3PAO-led Level 2 assessment typically takes 3–6 months from kick-off to certification, depending on your current posture. We provide a gap assessment within the first 30 days so you know exactly what to fix." },
  { q: "What is Zero Trust and why does DoD require it?", a: "Zero Trust is a security model that assumes no user or system is trusted by default, even inside the network. DoD Instruction 8140 and the DoD Zero Trust Strategy require all DoD components to adopt Zero Trust principles by FY2027." },
  { q: "Can you help us respond to an active incident?", a: "Yes. We provide 24/7 incident response support for cleared facilities. Contact our security operations line directly. We can be on-site within 4 hours for critical incidents within CONUS." },
  { q: "Do you provide NIST 800-171 System Security Plans?", a: "Yes — a fully compliant SSP and POAM (Plan of Action & Milestones) is part of every CMMC engagement. We deliver these as editable documents so your team can maintain them going forward." },
];

export default function DefenseCybersecurity() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white font-sans">
      {/* Dark nav */}
      <nav className="bg-[#0F1929]">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-white text-lg tracking-tight">APEX<span className="text-[#0057FF]">DEFENSE</span></Link>
          <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-gray-300">
            <Link href="about" className="hover:text-white">About Us</Link>
            <Link href="capabilities" className="hover:text-white">Capabilities</Link>
            <Link href="about" className="hover:text-white">Careers</Link>
          </div>
          <Link href="contact" className="bg-[#0057FF] hover:bg-[#0048d9] text-white font-semibold px-4 py-2 rounded text-sm transition-colors">Contact Us</Link>
        </div>
      </nav>

      {/* Split hero */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">
        {/* Left dark */}
        <div className="bg-[#0F1929] px-8 py-16 flex flex-col justify-center">
          <p className="text-[#0057FF] text-xs font-bold uppercase tracking-[0.3em] mb-4">Cybersecurity Division</p>
          <h1 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-6">CMMC · Zero Trust · NIST 800-171</h1>
          <p className="text-white/70 leading-relaxed mb-8">
            Protecting the defense industrial base with proven frameworks, cleared assessors, and continuous monitoring for classified and unclassified environments.
          </p>
          <div className="flex flex-wrap gap-2">
            {["CMMC C3PAO Partner","NIST 800-171","Zero Trust","IL4/IL5 Capable","TS/SCI Cleared Team"].map((b) => (
              <span key={b} className="bg-[#0057FF]/20 border border-[#0057FF]/40 text-[#0057FF] text-xs font-bold px-3 py-1.5 rounded">{b}</span>
            ))}
          </div>
        </div>
        {/* Right form */}
        <div className="bg-gray-50 border-l border-gray-100 px-8 py-16 flex flex-col justify-center">
          <h2 className="text-xl font-black text-[#0F1929] mb-2">Get a Free CMMC Readiness Assessment</h2>
          <p className="text-gray-500 text-sm mb-6">Takes 15 minutes. Get a gap score and priority list same day.</p>
          <form className="space-y-3">
            <input className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#0057FF]" placeholder="Your Name" />
            <input className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#0057FF]" placeholder="Company / Organization" />
            <input className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#0057FF]" placeholder="Work Email" />
            <select className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#0057FF] bg-white text-gray-700">
              <option>CMMC Level Required</option>
              <option>Level 1 — FCI only</option>
              <option>Level 2 — CUI handling</option>
              <option>Level 3 — Critical programs</option>
              <option>Not sure</option>
            </select>
            <button type="submit" className="bg-[#0057FF] hover:bg-[#0048d9] text-white font-bold px-6 py-3 rounded text-sm w-full transition-colors">Request Free Assessment</button>
          </form>
        </div>
      </section>

      {/* 4 service cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-[#0F1929] mb-8">Our Cybersecurity Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "🛡️", title: "CMMC Compliance", desc: "Gap assessments, System Security Plans, POAM development, and C3PAO-led certification support for Level 1–3." },
              { icon: "🔒", title: "Zero Trust Architecture", desc: "Design and implementation aligned to DoD Zero Trust Strategy and NIST SP 800-207. Pillar-by-pillar roadmap." },
              { icon: "📋", title: "NIST 800-171", desc: "Full 110-control assessment, remediation engineering, SSP and POAM documentation, continuous monitoring." },
              { icon: "🔍", title: "SOC & Monitoring", desc: "24/7 Security Operations Center support, SIEM deployment, threat hunting, and incident response retainer." },
            ].map((s) => (
              <div key={s.title} className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-black text-[#0F1929] mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why CMMC matters now — dark callout */}
      <section className="bg-[#0F1929] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-3">Why CMMC Compliance Matters Now</h2>
          <p className="text-white/60 mb-10">CMMC 2.0 is already required on select contracts. By 2026, all DoD contracts involving CUI will require certified compliance. Here's what you need to know:</p>
          <div className="space-y-6">
            {[
              ["Step 1: Determine Your Level", "Review your current and pending contracts for CUI handling requirements. Your prime contractor or contracting officer can confirm the required CMMC level."],
              ["Step 2: Conduct a Gap Assessment", "Evaluate your current security posture against NIST SP 800-171's 110 controls. Document deficiencies in a Plan of Action & Milestones (POAM)."],
              ["Step 3: Remediate & Document", "Fix gaps, implement required controls, and produce a complete System Security Plan (SSP). This is your evidence package for assessment."],
              ["Step 4: Engage a C3PAO", "For Level 2 and above, engage a CMMC Third-Party Assessor Organization (C3PAO) to conduct your formal assessment and issue certification."],
            ].map(([title, body], i) => (
              <div key={title} className="flex gap-6 items-start">
                <span className="text-4xl font-black text-white/10 leading-none flex-shrink-0 w-8">{i + 1}</span>
                <div>
                  <p className="font-bold text-white mb-1">{title}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-[#0F1929] mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-bold text-[#0F1929] hover:text-[#0057FF] transition-colors text-sm"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <span className="text-[#0057FF] text-xl ml-4 flex-shrink-0">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 border-t border-gray-100 pt-4">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-[#0F1929] py-16 px-4 text-center">
        <h2 className="text-3xl font-black text-white mb-3">Ready to Get Compliant?</h2>
        <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">Our cleared assessors will have your gap report ready within 30 days. No contracts required to start.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="contact" className="bg-[#0057FF] hover:bg-[#0048d9] text-white font-bold px-8 py-4 rounded transition-colors">Schedule Assessment</Link>
          <Link href="capabilities" className="border border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded transition-colors">View Full Capabilities</Link>
        </div>
      </section>
    </div>
  );
}
