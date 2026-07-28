import Link from "next/link";

export default function CNCMachining() {
  return (
    <div className="bg-white font-sans">
      <div className="bg-[#0F1923] text-center text-white text-xs py-2 font-semibold tracking-wider">ISO 9001:2015 · AS9100D · ITAR · 48-Hour RFQ Response</div>
      <nav className="bg-[#0F1923] border-t border-white/5 sticky top-[32px] z-40">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-white text-xl">APEX<span className="text-[#1E90FF]">MFG</span></Link>
          <div className="hidden lg:flex gap-6 text-sm font-semibold text-gray-300">
            <Link href="capabilities" className="hover:text-white">Capabilities</Link>
            <Link href="cnc-machining" className="text-white">CNC</Link>
            <Link href="fabrication" className="hover:text-white">Fabrication</Link>
            <Link href="about" className="hover:text-white">About</Link>
          </div>
          <Link href="contact" className="bg-[#1E90FF] hover:bg-blue-600 text-white font-bold px-4 py-2 rounded text-sm transition-colors">Submit RFQ</Link>
        </div>
      </nav>

      {/* Page header */}
      <section className="relative min-h-[38vh] flex items-end overflow-hidden">
        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80&auto=format&fit=crop" alt="CNC machining" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1923] via-[#0F1923]/75 to-[#0F1923]/25" />
        <div className="relative max-w-7xl mx-auto px-4 pb-10 w-full">
          <div className="text-gray-400 text-xs mb-3">
            <Link href="home" className="hover:text-gray-200">Home</Link> › <Link href="capabilities" className="hover:text-gray-200">Capabilities</Link> › CNC Machining
          </div>
          <h1 className="text-4xl font-black text-white">CNC Machining</h1>
          <p className="text-gray-300 mt-2 text-lg">3, 4 & 5-Axis Milling · Turning · Grinding · EDM</p>
        </div>
      </section>

      {/* Two-column: specs + sidebar */}
      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {[
              {
                title: "3, 4 & 5-Axis Milling",
                desc: "Our machining centers handle everything from simple prismatic parts to complex contoured aerospace components. 5-axis simultaneous cutting reduces setups and improves geometric accuracy on complex features.",
                table: [
                  ["Machine", "Travel (X/Y/Z)", "Spindle", "Tolerance"],
                  ["Haas VF-4 (3-axis)", '40" / 20" / 25"', "15,000 RPM", "±0.001\""],
                  ["Haas UMC-750 (5-axis)", '30" / 20" / 20"', "12,000 RPM", "±0.0005\""],
                  ["Okuma MU-500V (5-axis)", '20" / 20" / 18"', "20,000 RPM", "±0.0003\""],
                ],
              },
              {
                title: "CNC Turning & Swiss",
                desc: "Multi-axis turning centers and Swiss-style machines for shafts, connectors, and small precision components. Live tooling enables complex turned parts in a single setup.",
                table: [
                  ["Machine", "Max Diameter", "Max Length", "Tolerance"],
                  ["Mazak Quick Turn 250 (2-axis)", '10" dia', '24" length', "±0.0005\""],
                  ["Doosan Lynx 220 (Live Tooling)", '8" dia', '20" length', "±0.0005\""],
                  ["Star SV-20 (Swiss)", '0.75" dia', '15" length', "±0.0002\""],
                ],
              },
            ].map((block) => (
              <div key={block.title}>
                <h2 className="text-xl font-black text-[#0F1923] mb-3">{block.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-5">{block.desc}</p>
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#0F1923] text-white">
                        {block.table[0].map((h) => <th key={h} className="text-left px-4 py-3 font-bold">{h}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {block.table.slice(1).map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          {row.map((cell, j) => (
                            <td key={j} className={`px-4 py-3 ${j === 0 ? "font-semibold text-[#0F1923]" : "text-gray-600"}`}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}

            {/* Materials */}
            <div>
              <h2 className="text-xl font-black text-[#0F1923] mb-3">Materials We Machine</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {["6061-T6 Aluminum","7075-T651 Aluminum","304/316 Stainless Steel","17-4 PH Stainless","4130/4340 Steel","A2/D2 Tool Steel","Grade 5 Titanium (Ti-6Al-4V)","Inconel 625/718","Copper / Brass / Bronze","Delrin (POM)","PEEK / Ultem","Polycarbonate"].map((m) => (
                  <div key={m} className="border border-gray-100 rounded-lg px-3 py-2 text-xs font-semibold text-gray-700">{m}</div>
                ))}
              </div>
            </div>

            {/* File formats */}
            <div>
              <h2 className="text-xl font-black text-[#0F1923] mb-3">Accepted File Formats</h2>
              <div className="flex flex-wrap gap-2">
                {[".STEP",".IGES",".STP",".DXF",".DWG",".X_T (Parasolid)","SolidWorks (.SLDPRT)","PDF drawings"].map((f) => (
                  <span key={f} className="bg-[#1E90FF]/10 text-[#1E90FF] text-xs font-bold px-3 py-1.5 rounded">{f}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-[#0F1923] rounded-2xl p-6">
              <h3 className="font-black text-white mb-4">Submit RFQ</h3>
              <form className="space-y-3">
                <input className="border border-white/20 bg-white/10 text-white placeholder-white/40 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-white" placeholder="Your Name" />
                <input className="border border-white/20 bg-white/10 text-white placeholder-white/40 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-white" placeholder="Company" />
                <input className="border border-white/20 bg-white/10 text-white placeholder-white/40 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-white" placeholder="Email" />
                <textarea className="border border-white/20 bg-white/10 text-white placeholder-white/40 rounded-lg px-4 py-3 text-base w-full h-20 resize-none focus:outline-none focus:border-white" placeholder="Part description / quantity" />
                <button type="submit" className="bg-[#1E90FF] hover:bg-blue-600 text-white font-black px-6 py-3 rounded w-full transition-colors">Submit RFQ</button>
              </form>
              <p className="text-white/40 text-xs mt-3 text-center">48-hour response guaranteed · NDA available</p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-5 space-y-3">
              <p className="font-black text-[#0F1923] text-sm">Certifications</p>
              {["ISO 9001:2015","AS9100D Rev D","NADCAP (pending)","ITAR Registered","DFARS Compliant"].map((c) => (
                <div key={c} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-[#1E90FF] font-bold">✓</span>{c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
