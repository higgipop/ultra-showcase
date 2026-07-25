// manufacturing about: dark nav, white body, facility, leadership, core values, ISO certs
import Link from "next/link";

const leadership = [
  { name: "Robert Kessler", title: "President & CEO", background: "42 years aerospace manufacturing. Former VP Operations at Northrop Grumman." },
  { name: "Sandra Lin, PE", title: "VP Engineering", background: "Licensed Professional Engineer. 18 years precision machining R&D. MIT, BSME." },
  { name: "Marcus Powell", title: "Quality Manager", background: "ASQ Certified Quality Engineer. 15 years AS9100 / ISO 13485 compliance." },
  { name: "Derek Torres", title: "Director of Sales", background: "22 years defense and aerospace supply chain. Former DLA DIBBS contracting officer." },
];

const values = [
  { title: "Precision Without Compromise", body: "Every part that leaves our facility meets or exceeds print. Zero exceptions." },
  { title: "On-Time Delivery", body: "99.4% on-time delivery rate across 40+ years. We've built our reputation on reliability." },
  { title: "Engineering Partnership", body: "We don't just make parts — we partner with your engineering team to solve problems." },
  { title: "Continuous Improvement", body: "AS9100 isn't a certificate on our wall. It's how we work every day, on every job." },
  { title: "Transparency", body: "You get real-time job status, material certs, and inspection reports without having to ask." },
];

const certs = [
  { name: "ISO 9001:2015", body: "Quality Management System", exp: "Exp. Nov 2026" },
  { name: "AS9100 Rev D", body: "Aerospace QMS", exp: "Exp. Aug 2026" },
  { name: "ISO 13485:2016", body: "Medical Device QMS", exp: "Exp. Feb 2027" },
  { name: "ITAR Registration", body: "U.S. State Dept. Registered", exp: "Active — Annual Renewal" },
];

export default function ManufacturingAbout() {
  return (
    <div className="bg-white font-sans">
      <nav className="bg-[#0F1923]">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
          <div className="font-black text-white text-lg tracking-tight">APEX<span className="text-[#1E90FF]">PRECISION</span></div>
          <div className="hidden md:flex items-center gap-5 text-sm font-semibold text-gray-300">
            <Link href="home" className="hover:text-white">Home</Link>
            <Link href="capabilities" className="hover:text-white">Capabilities</Link>
            <Link href="about" className="text-[#1E90FF]">About</Link>
            <Link href="contact" className="hover:text-white">Contact</Link>
          </div>
          <Link href="contact" className="bg-[#1E90FF] hover:bg-[#1a7fef] text-white font-bold px-4 py-2 rounded text-sm transition-colors">Request RFQ</Link>
        </div>
      </nav>

      {/* Photo banner */}
      <div className="bg-gray-200 aspect-[21/6] flex items-center justify-center text-gray-400 text-lg">
        Facility Photo Placeholder
      </div>

      <section className="py-14 bg-white px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#1E90FF] text-xs font-bold uppercase tracking-widest mb-3">About Us</p>
          <h1 className="text-4xl font-black text-[#0F1923] mb-5">Modernization with Precision</h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            Founded in 1983 as a two-man machine shop in Tampa, Florida, ApexPrecision has grown into a 12,000 square foot precision contract manufacturing facility serving the aerospace, defense, and medical device industries. Still family-owned. Still Tampa Bay.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Over four decades, we&apos;ve invested in the equipment, certifications, and talent to compete with facilities ten times our size — while maintaining the responsiveness and care that only a family operation can deliver.
          </p>
        </div>
      </section>

      {/* Facility stats */}
      <section className="py-12 bg-[#F8FAFC] border-y border-gray-100 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: "12,000", label: "Square feet" },
            { value: "47", label: "CNC machines" },
            { value: "85", label: "Employees" },
            { value: "3-shift", label: "Operation" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-black text-[#1E90FF] mb-1">{s.value}</p>
              <p className="text-gray-500 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="py-14 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-[#0F1923] mb-8">Leadership</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((l) => (
              <div key={l.name} className="border border-gray-100 rounded-2xl p-6">
                <div className="w-16 h-16 bg-[#F8FAFC] border border-gray-200 rounded-full flex items-center justify-center text-[#0F1923] font-black text-2xl mb-4">
                  {l.name[0]}
                </div>
                <h3 className="font-black text-[#0F1923] mb-0.5">{l.name}</h3>
                <p className="text-[#1E90FF] text-sm font-semibold mb-3">{l.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{l.background}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-14 bg-[#F8FAFC] px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-[#0F1923] mb-8">Core Values</h2>
          <div className="space-y-5">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl border border-gray-100 px-6 py-5">
                <h3 className="font-black text-[#0F1923] text-lg mb-1">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certs */}
      <section className="py-14 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-[#0F1923] mb-8">Certifications</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certs.map((c) => (
              <div key={c.name} className="border border-gray-200 rounded-2xl p-6">
                <p className="font-black text-[#1E90FF] text-xl mb-1">{c.name}</p>
                <p className="font-semibold text-[#0F1923] text-sm mb-2">{c.body}</p>
                <p className="text-gray-400 text-xs">{c.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0F1923] py-12 text-center px-4">
        <h2 className="text-2xl font-black text-white mb-6">40+ years of precision. Ready to put it to work for your program.</h2>
        <Link href="contact" className="inline-block bg-[#1E90FF] hover:bg-[#1a7fef] text-white font-black px-10 py-4 rounded text-lg transition-colors">Request RFQ</Link>
      </section>
    </div>
  );
}
