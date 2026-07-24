import Link from "next/link";

const steps = [
  { n: "01", title: "Submit Secure Inquiry", body: "Your submission is encrypted in transit and stored in a FIPS 140-2 compliant environment. No CUI in this form — use SIPRNet or JWICS channels for classified inquiries." },
  { n: "02", title: "Program Office Review", body: "A cleared program manager reviews your request within 2 business days. For urgent operational needs, call the 24/7 line." },
  { n: "03", title: "NDAs & Teaming Agreements", body: "For BD conversations, we execute NDA first — typically within 48 hours. Teaming agreement templates available upon request in DFARS-compliant format." },
];

const contractVehicles = [
  { name: "GSA MAS Schedule 70", detail: "IT Professional Services" },
  { name: "SEWP V", detail: "Gov-Wide IT Contract · Pool A" },
  { name: "AFWERX", detail: "SBIR/STTR Phase II Performer" },
  { name: "OASIS SB Pool 1", detail: "Professional Services Pending" },
  { name: "SeaPort NxG", detail: "Navy / Marine Corps Support" },
  { name: "CIOSP3-SB", detail: "CIO-SP3 Small Business" },
];

export default function DefenseContactPage() {
  return (
    <div className="font-sans" style={{backgroundColor: "#080E14"}}>
      <div style={{backgroundColor: "#0A1929", borderBottom: "1px solid rgba(0,168,255,0.15)"}} className="text-center text-xs py-2.5 tracking-widest">
        <span style={{color: "#00A8FF"}}>✓ UNCLASSIFIED INQUIRIES ONLY</span>
        <span style={{color: "#334155"}} className="mx-4">|</span>
        <span style={{color: "#475569"}}>For classified matters, contact via SIPRNet: apexdefense.smil.mil</span>
      </div>

      {/* Hero */}
      <section className="pt-24 pb-16 relative" style={{background: "linear-gradient(180deg, #0A1929 0%, #080E14 100%)"}}>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "repeating-linear-gradient(0deg, #00A8FF 0, #00A8FF 1px, transparent 0, transparent 80px), repeating-linear-gradient(90deg, #00A8FF 0, #00A8FF 1px, transparent 0, transparent 80px)"}} />
        <div className="max-w-7xl mx-auto px-6 relative">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{color: "#00A8FF"}}>Contact / Program Office</p>
          <h1 className="text-4xl md:text-5xl font-black mb-6 max-w-3xl" style={{color: "#F1F5F9"}}>
            Program Office.<br />Teaming. BD.<br />General Inquiries.
          </h1>
          <p className="text-lg max-w-xl" style={{color: "#64748B"}}>
            Reach the right person at Apex Defense Systems. All submissions are reviewed by cleared personnel.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="py-20 px-6" style={{backgroundColor: "#080E14"}}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="rounded-xl p-8" style={{border: "1px solid rgba(0,168,255,0.15)", backgroundColor: "#0A1929"}}>
              <h2 className="font-black text-2xl mb-2" style={{color: "#F1F5F9"}}>Program Office Inquiry</h2>
              <p className="text-sm mb-8" style={{color: "#475569"}}>UNCLASSIFIED — Do not include classified or sensitive program information.</p>

              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1.5" style={{color: "#475569"}}>First Name</label>
                    <input type="text" className="w-full px-4 py-3 text-sm rounded focus:outline-none" style={{backgroundColor: "#080E14", border: "1px solid rgba(0,168,255,0.2)", color: "#F1F5F9"}} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1.5" style={{color: "#475569"}}>Last Name</label>
                    <input type="text" className="w-full px-4 py-3 text-sm rounded focus:outline-none" style={{backgroundColor: "#080E14", border: "1px solid rgba(0,168,255,0.2)", color: "#F1F5F9"}} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1.5" style={{color: "#475569"}}>Organization / Agency</label>
                    <input type="text" placeholder="e.g. PEO IEW&S, NAVWAR, AUSA" className="w-full px-4 py-3 text-sm rounded focus:outline-none" style={{backgroundColor: "#080E14", border: "1px solid rgba(0,168,255,0.2)", color: "#F1F5F9"}} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1.5" style={{color: "#475569"}}>Title / Grade</label>
                    <input type="text" placeholder="e.g. PM, GS-14, O-5" className="w-full px-4 py-3 text-sm rounded focus:outline-none" style={{backgroundColor: "#080E14", border: "1px solid rgba(0,168,255,0.2)", color: "#F1F5F9"}} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1.5" style={{color: "#475569"}}>Government Email (.mil / .gov)</label>
                    <input type="email" placeholder=".mil or .gov required" className="w-full px-4 py-3 text-sm rounded focus:outline-none" style={{backgroundColor: "#080E14", border: "1px solid rgba(0,168,255,0.2)", color: "#F1F5F9"}} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1.5" style={{color: "#475569"}}>DSN or Comm Phone</label>
                    <input type="tel" className="w-full px-4 py-3 text-sm rounded focus:outline-none" style={{backgroundColor: "#080E14", border: "1px solid rgba(0,168,255,0.2)", color: "#F1F5F9"}} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5" style={{color: "#475569"}}>Inquiry Type</label>
                  <select className="w-full px-4 py-3 text-sm rounded focus:outline-none" style={{backgroundColor: "#080E14", border: "1px solid rgba(0,168,255,0.2)", color: "#F1F5F9"}}>
                    <option>Teaming / Partnership Opportunity</option>
                    <option>Capabilities Brief Request</option>
                    <option>Contract Vehicle Inquiry</option>
                    <option>Proposal / RFI / RFQ Response</option>
                    <option>Existing Contract / Program Support</option>
                    <option>Employment / Staffing Inquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5" style={{color: "#475569"}}>Program / Requirement Summary <span style={{color: "#334155"}}>(UNCLASSIFIED only)</span></label>
                  <textarea rows={5} placeholder="Describe the requirement, timeline, or question at the UNCLASSIFIED level only. Do not include classified details, SAP information, or CUI." className="w-full px-4 py-3 text-sm rounded focus:outline-none resize-none" style={{backgroundColor: "#080E14", border: "1px solid rgba(0,168,255,0.2)", color: "#F1F5F9"}} />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5" style={{color: "#475569"}}>Relevant Contract Vehicle (if applicable)</label>
                  <input type="text" placeholder="e.g. OASIS SB, SEWP V, AFWERX SBIR, CIOSP3" className="w-full px-4 py-3 text-sm rounded focus:outline-none" style={{backgroundColor: "#080E14", border: "1px solid rgba(0,168,255,0.2)", color: "#F1F5F9"}} />
                </div>
                <button className="w-full font-black py-4 rounded text-sm uppercase tracking-widest transition-opacity hover:opacity-90" style={{backgroundColor: "#00A8FF", color: "#080E14"}}>
                  Submit Secure Inquiry
                </button>
                <p className="text-xs text-center" style={{color: "#334155"}}>
                  Submissions encrypted via TLS 1.3. Reviewed by cleared personnel only. No response within 5 business days? Call: (703) 555-0100.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Process */}
            <div className="rounded-xl p-6" style={{border: "1px solid rgba(0,168,255,0.15)", backgroundColor: "#0A1929"}}>
              <h3 className="font-black text-lg mb-6" style={{color: "#F1F5F9"}}>What Happens Next</h3>
              <div className="space-y-6">
                {steps.map((s) => (
                  <div key={s.n} className="flex gap-4">
                    <div className="flex-shrink-0 font-mono text-xs font-bold mt-0.5" style={{color: "#00A8FF"}}>{s.n}</div>
                    <div>
                      <p className="font-bold text-sm mb-1" style={{color: "#CBD5E1"}}>{s.title}</p>
                      <p className="text-xs leading-relaxed" style={{color: "#475569"}}>{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Security notice */}
            <div className="rounded-xl p-5" style={{border: "1px solid rgba(239,68,68,0.2)", backgroundColor: "rgba(239,68,68,0.04)"}}>
              <p className="font-bold text-sm mb-2" style={{color: "#FCA5A5"}}>⚠ Security Notice</p>
              <p className="text-xs leading-relaxed" style={{color: "#64748B"}}>
                This form operates at UNCLASSIFIED//FOUO level only. Do not transmit classified information, CUI, SAP details, or any information requiring OPSEC review over this channel. Classified requirements: SIPRNet — apexdefense.smil.mil
              </p>
            </div>

            {/* Contract vehicles */}
            <div className="rounded-xl p-6" style={{border: "1px solid rgba(0,168,255,0.15)", backgroundColor: "#0A1929"}}>
              <h3 className="font-bold text-sm mb-4" style={{color: "#F1F5F9"}}>Contract Vehicles</h3>
              <div className="space-y-2">
                {contractVehicles.map((v) => (
                  <div key={v.name} className="py-2" style={{borderBottom: "1px solid rgba(0,168,255,0.07)"}}>
                    <p className="text-xs font-bold" style={{color: "#CBD5E1"}}>{v.name}</p>
                    <p className="text-xs" style={{color: "#475569"}}>{v.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct contacts */}
            <div className="rounded-xl p-6" style={{border: "1px solid rgba(0,168,255,0.15)", backgroundColor: "#0A1929"}}>
              <h3 className="font-bold text-sm mb-4" style={{color: "#F1F5F9"}}>Direct Contacts</h3>
              <div className="space-y-3 text-xs" style={{color: "#64748B"}}>
                <div>
                  <p className="font-semibold" style={{color: "#CBD5E1"}}>Program Office (24/7)</p>
                  <p>(703) 555-0100</p>
                </div>
                <div>
                  <p className="font-semibold" style={{color: "#CBD5E1"}}>BD / Teaming</p>
                  <p>bd@apexdefense.com</p>
                </div>
                <div>
                  <p className="font-semibold" style={{color: "#CBD5E1"}}>Contracts</p>
                  <p>contracts@apexdefense.com</p>
                </div>
                <div>
                  <p className="font-semibold" style={{color: "#CBD5E1"}}>Careers</p>
                  <p>careers@apexdefense.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
