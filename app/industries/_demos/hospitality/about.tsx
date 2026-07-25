// terrabellas.com: light/warm, Our Story, chef/founder bio, philosophy, team, service areas
import Link from "next/link";

const team = [
  { name: "Elena Ricci", title: "Executive Chef & Founder", bio: "Elena founded TerraBella in 2008 after a decade of fine dining in New York and Rome. Her philosophy is simple: great catering starts with great ingredients and real technique — not shortcuts." },
  { name: "James Holloway", title: "Event Director", bio: "With 16 years in hospitality management, James leads all event logistics and client relationships. He ensures every event runs exactly as planned — and recovers gracefully when it doesn&apos;t." },
  { name: "Sarah Park", title: "Catering Manager", bio: "Sarah manages day-of operations for all events, coordinating kitchen, front-of-house, and vendor teams. She&apos;s catered over 800 events and counting." },
  { name: "Marcus Vega", title: "Operations Lead", bio: "Marcus manages equipment, logistics, and production scheduling. His precision ensures the right supplies arrive at the right events, every time." },
];

const areas = [
  { city: "Jacksonville", note: "Headquarters · Full-service events" },
  { city: "Brunswick, GA", note: "Full-service events · 45 min from JAX" },
  { city: "Daytona Beach", note: "Selected events · Inquiry required" },
  { city: "Lake City", note: "Selected events · Inquiry required" },
  { city: "Gainesville", note: "Selected events · Inquiry required" },
];

export default function HospitalityAbout() {
  return (
    <div className="bg-[#FAFAF8] font-sans">
      <nav className="bg-[#FAFAF8] border-b border-[#E8E4DC]">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
          <div className="font-bold text-[#1C1917] text-lg tracking-tight">TERRA<span className="font-light text-[#6B7C5C]">BELLA</span></div>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#4A4540]">
            <Link href="home" className="hover:text-[#1C1917]">Home</Link>
            <Link href="catering" className="hover:text-[#1C1917]">Catering</Link>
            <Link href="weddings" className="hover:text-[#1C1917]">Weddings</Link>
            <Link href="about" className="text-[#6B7C5C] border-b border-[#6B7C5C]">Our Story</Link>
          </div>
          <Link href="contact" className="bg-[#1C1917] text-white font-semibold px-4 py-2 rounded text-sm hover:bg-[#2C2921] transition-colors">Request a Proposal</Link>
        </div>
      </nav>

      <div className="bg-[#F5F3EF] py-12 px-4 text-center border-b border-[#E8E4DC]">
        <h1 className="text-4xl font-bold text-[#1C1917]" style={{fontFamily: "Georgia, serif"}}>Our Story</h1>
      </div>

      {/* Story */}
      <section className="py-16 bg-[#FAFAF8] px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#6B7C5C] text-xs font-bold uppercase tracking-[0.2em] mb-4">Founded in Jacksonville, 2008</p>
            <h2 className="text-3xl font-bold text-[#1C1917] mb-5" style={{fontFamily: "Georgia, serif"}}>Built on the belief that every event deserves real food.</h2>
            <p className="text-[#6B6560] leading-relaxed mb-4">
              Elena Ricci started TerraBella after years of watching corporate catering get reduced to steam trays and premade salads. She believed — and still believes — that catering is an expression of hospitality, and that every event deserves food prepared with care and intention.
            </p>
            <p className="text-[#6B6560] leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. What began as a solo catering operation in Jacksonville has grown to a team of 28, serving clients across Northeast Florida and Southeast Georgia.
            </p>
            <p className="text-[#6B6560] leading-relaxed">
              We&apos;re still independent. Still family-run. Still obsessed with the food.
            </p>
          </div>
          <div className="bg-[#E8E4DC] rounded-2xl aspect-[4/3] flex items-center justify-center text-[#B0A898] text-sm">
            Chef / Kitchen Photo Placeholder
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-14 bg-[#F5F3EF] px-4">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl font-bold text-[#1C1917] leading-relaxed mb-6" style={{fontFamily: "Georgia, serif"}}>
            &ldquo;We build menus around your vision, not the other way around.&rdquo;
          </blockquote>
          <p className="text-[#6B6560]">— Elena Ricci, Executive Chef &amp; Founder</p>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-[#FAFAF8] px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1C1917] mb-10 text-center" style={{fontFamily: "Georgia, serif"}}>Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <div key={m.name} className="bg-[#F5F3EF] border border-[#E8E4DC] rounded-2xl p-6">
                <div className="w-16 h-16 bg-[#E8E4DC] rounded-full flex items-center justify-center text-[#6B7C5C] font-bold text-2xl mb-4">
                  {m.name[0]}
                </div>
                <h3 className="font-bold text-[#1C1917] mb-0.5">{m.name}</h3>
                <p className="text-[#6B7C5C] text-xs font-semibold mb-3">{m.title}</p>
                <p className="text-[#6B6560] text-sm leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-14 bg-[#F5F3EF] border-y border-[#E8E4DC] px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1C1917] mb-8 text-center" style={{fontFamily: "Georgia, serif"}}>Service Areas</h2>
          <div className="space-y-3">
            {areas.map((a) => (
              <div key={a.city} className="flex justify-between items-center bg-white border border-[#E8E4DC] rounded-xl px-5 py-4">
                <span className="font-bold text-[#1C1917]">{a.city}</span>
                <span className="text-[#6B6560] text-sm">{a.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#1C1917] text-center px-4">
        <h2 className="text-2xl font-bold text-white mb-5" style={{fontFamily: "Georgia, serif"}}>Let&apos;s plan your next event together.</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="contact" className="bg-white text-[#1C1917] font-semibold px-10 py-4 rounded hover:bg-gray-100 transition-colors">Request a Proposal</Link>
          <Link href="contact" className="border border-white text-white font-semibold px-10 py-4 rounded hover:bg-white hover:text-[#1C1917] transition-colors">Talk With Our Team</Link>
        </div>
      </section>
    </div>
  );
}
