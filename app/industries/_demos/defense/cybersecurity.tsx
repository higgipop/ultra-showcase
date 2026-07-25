// paligentech.com: dark nav, white body, 2-col layout, CMMC/Zero Trust/NIST, sidebar certs + contact form, FAQ
import Link from "next/link";

const services = [
  {
    title: "CMMC Level 2 & Level 3 Implementation",
    body: "We guide DoD contractors and subcontractors through full CMMC compliance — from gap assessment to remediation to C3PAO assessment readiness. Our team has supported organizations through 100+ NIST 800-171 practice implementations across manufacturing, IT services, and engineering firms.",
    includes: ["Gap analysis against all 110 NIST SP 800-171 practices", "System Security Plan (SSP) development", "Plan of Action and Milestones (POA&M) management", "CMMC Level 3 DIBCAC pre-assessment preparation", "Managed Security Services post-certification"],
  },
  {
    title: "Zero Trust Architecture Design",
    body: "We design and implement Zero Trust frameworks aligned to NIST SP 800-207, NSA/CISA guidance, and DoD Zero Trust Strategy. Our approach is pragmatic — we meet organizations where they are and build toward full ZTA maturity over 12–24 months.",
    includes: ["Identity and Access Management (IAM) modernization", "Micro-segmentation and Software-Defined Perimeter", "Continuous monitoring and policy enforcement", "Privileged Access Workstation (PAW) deployment", "Zero Trust maturity assessment against DoD pillars"],
  },
  {
    title: "NIST 800-171 Compliance & Remediation",
    body: "For organizations in the Defense Industrial Base (DIB), protecting Controlled Unclassified Information (CUI) is a contract requirement. We assess, document, and remediate NIST 800-171 compliance programs and maintain them through configuration changes and personnel turnover.",
    includes: ["CUI discovery and scoping", "SSP development and SPRS score improvement", "Multi-Factor Authentication (MFA) deployment", "Audit log implementation and SIEM tuning", "Annual review and re-assessment support"],
  },
];

const certs = [
  "CISSP (Certified Information Systems Security Professional)",
  "CISM (Certified Information Security Manager)",
  "CompTIA Security+ (DoD 8570 baseline)",
  "CompTIA CySA+ / CASP+",
  "Certified Ethical Hacker (CEH)",
  "GIAC Penetration Tester (GPEN)",
  "CMMC Registered Practitioner (RP)",
  "AWS/Azure Security Specialty",
];

const faqs = [
  { q: "What is CMMC and why does it matter for our contract?", a: "CMMC (Cybersecurity Maturity Model Certification) is a DoD framework requiring defense contractors to meet specific cybersecurity standards. Starting with CMMC 2.0 rulemaking, most contracts handling CUI require Level 2 certification via a C3PAO assessment. Non-compliance can result in contract loss or suspension." },
  { q: "How long does CMMC Level 2 preparation typically take?", a: "For organizations with existing security controls, preparation typically takes 6–12 months. For organizations starting from scratch, 12–18 months is realistic. We begin with a gap assessment and build a prioritized roadmap based on your current SPRS score and contract timelines." },
  { q: "Do we need a third-party assessor or can we self-attest?", a: "Under CMMC 2.0, Level 1 and some Level 2 contracts allow annual self-attestation. However, contracts involving CUI in a higher-sensitivity context will require a C3PAO (Certified Third-Party Assessment Organization) assessment. We help you determine which path your contracts require." },
  { q: "What is a SPRS score?", a: "The Supplier Performance Risk System (SPRS) score is a DoD-facing self-assessment score based on your NIST 800-171 implementation. Contractors must submit their score to SPRS at least annually. We help organizations calculate an honest, defensible score and improve it systematically." },
  { q: "Can you manage our cybersecurity program on an ongoing basis?", a: "Yes. We offer Managed Security Services for organizations that want continuous monitoring, patching, vulnerability management, and incident response — integrated with their CMMC maintenance obligations. This is especially valuable for smaller prime contractors and mid-tier subcontractors." },
];

export default function DefenseCybersecurity() {
  return (
    <div className="bg-white font-sans">
      <nav className="bg-[#0F1929] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="font-black text-white text-lg tracking-tight">APEX<span className="text-[#0057FF]">DEFENSE</span></div>
          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-gray-300">
            <Link href="about" className="hover:text-white">About Us</Link>
            <Link href="capabilities" className="hover:text-white">Divisions</Link>
            <Link href="cybersecurity" className="text-white border-b border-white pb-0.5">Cybersecurity</Link>
            <Link href="contact" className="hover:text-white">Contact</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="contact" className="bg-[#0057FF] hover:bg-[#0048d9] text-white font-semibold px-4 py-2 rounded text-sm transition-colors">Contact Our PMO</Link>
          </div>
        </div>
      </nav>

      <div className="bg-[#0F1929] py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <nav className="text-xs text-gray-500 mb-4">
            <Link href="home" className="hover:text-white">Home</Link> <span className="mx-1">/</span>
            <Link href="capabilities" className="hover:text-white">Capabilities</Link> <span className="mx-1">/</span>
            <span className="text-gray-300">Cybersecurity</span>
          </nav>
          <h1 className="text-4xl font-black text-white mb-3">Defense Cybersecurity Services</h1>
          <p className="text-white/60 text-lg">CMMC · NIST 800-171 · Zero Trust · RMF · Penetration Testing</p>
        </div>
      </div>

      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_300px] gap-10 items-start">
          {/* Main content */}
          <div>
            <div className="space-y-10">
              {services.map((s, i) => (
                <div key={s.title} className={`${i > 0 ? "border-t border-gray-100 pt-10" : ""}`}>
                  <h2 className="text-xl font-black text-[#0F1929] mb-3">{s.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-5">{s.body}</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {s.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-[#0057FF] font-bold mt-0.5 flex-shrink-0">·</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <div className="mt-14 pt-10 border-t border-gray-100">
              <h2 className="text-xl font-black text-[#0F1929] mb-8">Frequently Asked Questions</h2>
              <div className="space-y-8">
                {faqs.map((faq) => (
                  <div key={faq.q} className="border-b border-gray-50 pb-8 last:border-0">
                    <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5 lg:sticky lg:top-20">
            {/* Contact PMO mini-form */}
            <div className="bg-[#0F1929] rounded-2xl p-6">
              <h3 className="text-white font-black mb-4">Contact Our Program Office</h3>
              <form className="space-y-3">
                <input type="text" placeholder="Full Name" className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#0057FF]" />
                <input type="text" placeholder="Organization" className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#0057FF]" />
                <input type="email" placeholder="Work Email" className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#0057FF]" />
                <textarea rows={3} placeholder="Describe your program need..." className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#0057FF] resize-none" />
                <button type="submit" className="w-full bg-[#0057FF] hover:bg-[#0048d9] text-white font-bold py-3 rounded-lg text-sm transition-colors">
                  Send Inquiry
                </button>
              </form>
              <p className="text-white/40 text-xs mt-3">All inquiries handled by cleared program staff.</p>
            </div>

            {/* Certifications */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              <h3 className="font-black text-[#0F1929] mb-4 text-sm">Personnel Certifications</h3>
              <ul className="space-y-2">
                {certs.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-gray-600 text-xs">
                    <span className="text-[#0057FF] font-bold flex-shrink-0">·</span> {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Related */}
            <div className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-5">
              <h3 className="font-black text-[#0F1929] mb-3 text-sm">Related Capabilities</h3>
              <ul className="space-y-2">
                {["Systems Integration", "Software Engineering", "Program Support"].map((c) => (
                  <li key={c}><Link href="capabilities" className="text-[#0057FF] text-sm font-semibold hover:underline">{c} →</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
