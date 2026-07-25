// paligentech.com: dark nav, white body, C4ISR/EW/Sensor Fusion/Mission Integration, sidebar + FAQ
import Link from "next/link";

const services = [
  {
    title: "C4ISR Architecture & Integration",
    body: "We design and integrate Command, Control, Communications, Computers, Intelligence, Surveillance, and Reconnaissance (C4ISR) systems for airborne, ground, and maritime platforms. Our engineers have supported programs across AFSOC, SOCOM, and US Army aviation.",
    includes: ["Architecture design using DoDAF and SysML", "Integration of sensors, radios, and mission computers", "Software-Defined Radio (SDR) signal processing", "Link 16 / VMF / JCIDS message formatting", "Interoperability testing (COI / OV compliance)"],
  },
  {
    title: "Electronic Warfare (EW) Systems Support",
    body: "From threat modeling to ECM system integration, our EW team supports radar warning receiver (RWR), directed infrared countermeasures (DIRCM), and electronic attack (EA) systems across fixed-wing, rotary-wing, and unmanned platforms.",
    includes: ["Electronic Order of Battle (EOB) analysis", "Radar Warning Receiver (RWR) integration and test", "DIRCM system integration (AN/AAQ series)", "EA waveform development and compliance testing", "MIL-STD-461 electromagnetic compatibility (EMC)"],
  },
  {
    title: "Sensor Fusion & Data Processing",
    body: "We develop and integrate multi-INT sensor fusion pipelines that combine radar, EO/IR, SIGINT, and ADS-B data streams into coherent situational awareness for operators. Processing architectures include edge compute, GPU-accelerated analytics, and cloud-connected intelligence.",
    includes: ["Multi-source data fusion architecture design", "Real-time track management and correlation", "EO/IR sensor integration (Full-Motion Video)", "SIGINT exploitation pipeline development", "GPU-accelerated signal processing (CUDA)"],
  },
  {
    title: "Mission System Integration",
    body: "End-to-end mission system integration including weapons management, stores management, and cockpit human-machine interface (HMI) updates. We support DO-178C compliance, airworthiness certification, and qualification testing across MIL-STD and FAA standards.",
    includes: ["Weapons Management System (WMS) integration", "Stores Management System (SMS) software updates", "HMI / cockpit display integration (MFD / HUD)", "DO-178C software assurance (DAL A–C)", "Ground and flight test support (OT&E / DT&E)"],
  },
];

const platforms = [
  "MH-60 Black Hawk", "CH-47 Chinook", "UH-72 Lakota", "AH-64 Apache",
  "C-130 Hercules", "C-12 Huron", "Fixed-wing ISR platforms",
  "UAS (Group 3–5)", "Ground vehicles (JLTV, HMMWV, Bradley)",
];

const faqs = [
  { q: "What platform experience does your systems integration team have?", a: "Our engineers have directly supported integration programs on multiple rotary-wing, fixed-wing, and ground platforms including MH-60, CH-47, C-130, and UAS programs across AFSOC and US Army Aviation." },
  { q: "Do you support both hardware and software integration?", a: "Yes. Our team covers both domains — from hardware rack design and cable harness definition through firmware, RTOS software, and HMI display software. We act as a single integrating contractor across the full system stack." },
  { q: "Can you support Test & Evaluation requirements?", a: "We have T&E support capabilities including DT&E test planning, ground lab integration, hardware-in-the-loop (HWIL) simulation, and flight test data reduction. We also support OT&E planning as a technical resource to the PM." },
  { q: "How do you handle DO-178C compliance for airborne software?", a: "Our software team includes DO-178C-experienced engineers at DAL A–D. We maintain a compliant development environment including traceability tooling (DOORS, Jama), code coverage tools, and review processes aligned to the applicable DAL." },
  { q: "What is your experience with SOCOM and special operations programs?", a: "We have supported multiple special operations programs through both direct contracts and as a subcontractor. We understand the tempo, security requirements, and program sensitivity typical of SOF acquisitions." },
];

export default function DefenseSystemsIntegration() {
  return (
    <div className="bg-white font-sans">
      <nav className="bg-[#0F1929] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="font-black text-white text-lg tracking-tight">APEX<span className="text-[#0057FF]">DEFENSE</span></div>
          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-gray-300">
            <Link href="about" className="hover:text-white">About Us</Link>
            <Link href="capabilities" className="hover:text-white">Divisions</Link>
            <Link href="systems-integration" className="text-white border-b border-white pb-0.5">Systems Integration</Link>
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
            <span className="text-gray-300">Systems Integration</span>
          </nav>
          <h1 className="text-4xl font-black text-white mb-3">Systems Integration Division</h1>
          <p className="text-white/60 text-lg">C4ISR · Electronic Warfare · Sensor Fusion · Mission Systems</p>
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
            {/* Contact mini-form */}
            <div className="bg-[#0F1929] rounded-2xl p-6">
              <h3 className="text-white font-black mb-4">Contact Our Program Office</h3>
              <form className="space-y-3">
                <input type="text" placeholder="Full Name" className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#0057FF]" />
                <input type="text" placeholder="Organization" className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#0057FF]" />
                <input type="email" placeholder="Work Email" className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#0057FF]" />
                <textarea rows={3} placeholder="Describe your program or RFI..." className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#0057FF] resize-none" />
                <button type="submit" className="w-full bg-[#0057FF] hover:bg-[#0048d9] text-white font-bold py-3 rounded-lg text-sm transition-colors">
                  Send Inquiry
                </button>
              </form>
            </div>

            {/* Platform experience */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              <h3 className="font-black text-[#0F1929] mb-4 text-sm">Platform Experience</h3>
              <ul className="space-y-2">
                {platforms.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-gray-600 text-xs">
                    <span className="text-[#0057FF] font-bold">·</span> {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Related */}
            <div className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-5">
              <h3 className="font-black text-[#0F1929] mb-3 text-sm">Related Capabilities</h3>
              <ul className="space-y-2">
                {["Cybersecurity", "Software Engineering", "Program Support"].map((c) => (
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
