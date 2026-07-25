// terrabellas.com: catering services overview, alternating warm sections, proposal CTAs
import Link from "next/link";

const services = [
  {
    name: "Wedding Catering", icon: "💍", href: "weddings",
    included: ["Menu customization around your vision", "Tasting session for engaged couple", "Day-of coordination with venue", "Professional service staff", "Setup, breakdown, linens", "Custom menu cards"],
    guestRange: "50–500 guests",
    detail: "We handle everything from setup to breakdown, so you can be present at your wedding — not managing it.",
  },
  {
    name: "Corporate Events", icon: "🏢", href: "corporate-events",
    included: ["Business lunch and dinner menus", "Working lunches and all-hands events", "Client entertainment setups", "Repeat/account billing available", "Dietary accommodation standard", "Quick-turn options for last-minute events"],
    guestRange: "10–2,000 guests",
    detail: "We understand corporate catering timelines. We can turn around a catered lunch for 30 with 48 hours notice, or coordinate a 2,000-person conference banquet with months of planning.",
  },
  {
    name: "Buffet Catering", icon: "🍽️", href: "catering",
    included: ["Chef-curated multi-item menus", "Dietary accommodations (vegan, GF, halal, kosher)", "Service staff for replenishment", "Chafing equipment and serving ware", "Custom labeling for allergens", "Hot and cold station options"],
    guestRange: "25–1,000 guests",
    detail: "Our buffet menus are designed for variety and guest satisfaction — we don't do steam tray food. Every dish is prepared fresh and presented with care.",
  },
  {
    name: "BBQ Catering", icon: "🔥", href: "catering",
    included: ["Outdoor and indoor BBQ service", "Drop-off or full-service available", "Charcoal, gas, and smoker options", "Pit master on-site (full-service)", "Classic and elevated BBQ menus", "Beer/wine pairing available"],
    guestRange: "20–500 guests",
    detail: "From backyard company cookouts to large community events, we bring real BBQ — slow-smoked brisket, pulled pork, and house-made sides that your guests will remember.",
  },
  {
    name: "Bar Services", icon: "🥂", href: "contact",
    included: ["TIPS-certified licensed bartenders", "Full open bar or beer/wine only", "Signature cocktail development", "Mocktail menu available", "Mobile bar setup included", "Responsible service policy"],
    guestRange: "All event sizes",
    detail: "Our bar service is staffed by certified, experienced bartenders who understand hospitality. We work with your budget to design a bar package that fits your event and your guests.",
  },
];

export default function HospitalityCatering() {
  return (
    <div className="bg-[#FAFAF8] font-sans">
      <nav className="bg-[#FAFAF8] border-b border-[#E8E4DC]">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
          <div className="font-bold text-[#1C1917] text-lg tracking-tight">TERRA<span className="font-light text-[#6B7C5C]">BELLA</span></div>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#4A4540]">
            <Link href="home" className="hover:text-[#1C1917]">Home</Link>
            <Link href="catering" className="text-[#6B7C5C] border-b border-[#6B7C5C]">Catering</Link>
            <Link href="weddings" className="hover:text-[#1C1917]">Weddings</Link>
            <Link href="corporate-events" className="hover:text-[#1C1917]">Corporate</Link>
            <Link href="about" className="hover:text-[#1C1917]">Our Story</Link>
          </div>
          <Link href="contact" className="bg-[#1C1917] text-white font-semibold px-4 py-2 rounded text-sm hover:bg-[#2C2921] transition-colors">Request a Proposal</Link>
        </div>
      </nav>

      <div className="py-12 px-4 bg-[#F5F3EF] border-b border-[#E8E4DC] text-center">
        <h1 className="text-4xl font-bold text-[#1C1917]" style={{fontFamily: "Georgia, serif"}}>Our Catering Services</h1>
        <p className="text-[#6B6560] text-lg mt-3 max-w-2xl mx-auto">Five service types. One team. All customized around your event.</p>
      </div>

      {services.map((s, i) => (
        <section key={s.name} className={`py-14 px-4 ${i % 2 === 0 ? "bg-[#FAFAF8]" : "bg-[#F5F3EF]"}`}>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[80px_1fr] gap-8">
            <div className="text-5xl">{s.icon}</div>
            <div>
              <h2 className="text-2xl font-bold text-[#1C1917] mb-2" style={{fontFamily: "Georgia, serif"}}>{s.name}</h2>
              <p className="text-[#6B7C5C] text-sm font-semibold mb-4">{s.guestRange}</p>
              <p className="text-[#6B6560] leading-relaxed mb-6">{s.detail}</p>
              <div className="grid sm:grid-cols-2 gap-2 mb-6">
                {s.included.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-[#4A4540] text-sm">
                    <span className="text-[#6B7C5C] font-bold mt-0.5 flex-shrink-0">✓</span> {item}
                  </div>
                ))}
              </div>
              <Link href={s.href} className="inline-block border border-[#1C1917] text-[#1C1917] font-semibold px-6 py-3 rounded hover:bg-[#1C1917] hover:text-white transition-colors text-sm">
                Request Proposal for {s.name} →
              </Link>
            </div>
          </div>
        </section>
      ))}

      <section className="py-14 bg-[#1C1917] text-center px-4">
        <h2 className="text-2xl font-bold text-white mb-5" style={{fontFamily: "Georgia, serif"}}>Ready to plan your event?</h2>
        <p className="text-white/60 mb-8">We&apos;re happy to talk through your event needs before you commit to anything. Consultations are free.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="contact" className="bg-white text-[#1C1917] font-semibold px-10 py-4 rounded hover:bg-gray-100 transition-colors">Request a Proposal</Link>
          <Link href="contact" className="border border-white text-white font-semibold px-10 py-4 rounded hover:bg-white hover:text-[#1C1917] transition-colors">Talk With Our Team</Link>
        </div>
      </section>
    </div>
  );
}
