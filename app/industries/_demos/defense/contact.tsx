import Link from "next/link";

export default function DefenseContact() {
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
          <Link href="contact" className="bg-[#0057FF] text-white font-semibold px-4 py-2 rounded text-sm">Contact Us</Link>
        </div>
      </nav>

      {/* Page header */}
      <section className="relative min-h-[38vh] flex items-end overflow-hidden">
        <img src="https://images.unsplash.com/photo-1521737604579-b5cd6882c0a6?w=1800&q=80&auto=format&fit=crop" alt="Team meeting" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1929] via-[#0F1929]/80 to-[#0F1929]/30" />
        <div className="relative max-w-7xl mx-auto px-4 pb-10 w-full">
          <p className="text-[#0057FF] text-xs font-bold uppercase tracking-[0.3em] mb-3">Program Office Contact</p>
          <h1 className="text-4xl font-black text-white">Contact Our PMO</h1>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left: form (2 cols wide) */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-black text-[#0F1929] mb-6">Program Office Inquiry</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Full Name *</label>
                  <input className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#0057FF]" placeholder="John Smith" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Organization *</label>
                  <input className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#0057FF]" placeholder="Agency / Company" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Work Email *</label>
                <input type="email" className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#0057FF]" placeholder="john.smith@agency.gov" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Contract Vehicle</label>
                  <select className="border border-gray-200 rounded-lg px-4 py-3 text-base bg-white w-full focus:outline-none focus:border-[#0057FF] text-gray-700">
                    <option>Select a vehicle</option>
                    <option>GSA MAS IT70</option>
                    <option>SEWP V</option>
                    <option>SeaPort NxG</option>
                    <option>8(a) STARS III</option>
                    <option>OASIS SB</option>
                    <option>Direct / Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Clearance Level</label>
                  <select className="border border-gray-200 rounded-lg px-4 py-3 text-base bg-white w-full focus:outline-none focus:border-[#0057FF] text-gray-700">
                    <option>Your clearance level</option>
                    <option>Unclassified</option>
                    <option>Secret</option>
                    <option>Top Secret</option>
                    <option>TS/SCI</option>
                    <option>Prefer not to say</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Program / Requirement Description *</label>
                <textarea className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full h-36 resize-none focus:outline-none focus:border-[#0057FF]" placeholder="Describe your program, timeline, and capability needs. Include classification level if applicable." />
              </div>
              <button type="submit" className="bg-[#0057FF] hover:bg-[#0048d9] text-white font-bold px-8 py-4 rounded w-full sm:w-auto transition-colors">Submit to Program Office</button>
            </form>
          </div>

          {/* Right: what happens next + extras */}
          <div className="space-y-8">
            <div>
              <h3 className="font-black text-[#0F1929] mb-5 text-sm uppercase tracking-widest">What Happens Next</h3>
              <div className="space-y-5">
                {[
                  { num: "1", title: "Initial Response", body: "A cleared Program Manager will respond within 48 business hours." },
                  { num: "2", title: "Discovery Call", body: "We schedule a 30-minute call (classified or unclassified) to understand your requirement in detail." },
                  { num: "3", title: "Capability Briefing", body: "We deliver a tailored briefing with past performance examples and proposed team structure." },
                ].map((step) => (
                  <div key={step.num} className="flex gap-4 items-start">
                    <span className="w-8 h-8 rounded-full bg-[#0057FF] text-white text-sm font-black flex items-center justify-center flex-shrink-0">{step.num}</span>
                    <div>
                      <p className="font-bold text-[#0F1929] text-sm mb-1">{step.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl p-5 border border-gray-100">
              <p className="font-bold text-[#0F1929] text-sm mb-2">Capability Statement Download</p>
              <p className="text-gray-500 text-xs mb-3">2-page PDF with NAICS codes, past performance, and contract vehicles.</p>
              <button className="border border-[#0F1929] text-[#0F1929] text-xs font-bold px-4 py-2 rounded hover:bg-[#0F1929] hover:text-white transition-colors">Download PDF</button>
            </div>

            <div className="bg-[#0F1929] rounded-xl p-5">
              <p className="font-bold text-[#0057FF] text-xs uppercase tracking-widest mb-2">CUI / Security Notice</p>
              <p className="text-white/60 text-xs leading-relaxed">
                Do not submit classified information through this form. If your inquiry involves CUI, please request a secure communication channel. All submitted information is protected under 32 CFR Part 117.
              </p>
            </div>

            <div>
              <p className="font-black text-[#0F1929] text-sm uppercase tracking-widest mb-4">Office Locations</p>
              <div className="space-y-4">
                {[
                  { label: "HQ — Arlington, VA", lines: ["4600 N. Fairfax Dr., Suite 400", "Arlington, VA 22203", "(703) 555-0100"] },
                  { label: "Satellite — Huntsville, AL", lines: ["2011 Research Park Blvd.", "Huntsville, AL 35805", "(256) 555-0200"] },
                ].map((loc) => (
                  <div key={loc.label}>
                    <p className="text-xs font-bold text-[#0057FF] mb-1">{loc.label}</p>
                    {loc.lines.map((l) => <p key={l} className="text-gray-600 text-sm">{l}</p>)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
