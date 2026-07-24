import Link from "next/link";

const team = [
  { role: "Executive Chef & Owner", name: "Marco Bellini", detail: "Trained in Milan and Lyon. 20 years in fine dining. Returned to Florida in 2009 to build something that felt like home." },
  { role: "Sous Chef", name: "Gabriella Cruz", detail: "Florida-born, French-trained. Specializes in modern interpretations of classical sauces and house-made pasta." },
  { role: "Director of Events", name: "Claire Fontaine", detail: "15 years coordinating private events, weddings, and corporate dining for 10 to 600 guests." },
  { role: "Sommelier", name: "Thomas Reilly", detail: "Advanced Sommelier (Court of Master Sommeliers). Curates the cellar and leads private wine dinners." },
];

const press = [
  { pub: "Tampa Bay Times", quote: "One of Tampa&rsquo;s most celebrated dining rooms — the kind of place that earns its reputation one plate at a time." },
  { pub: "Eater Tampa", quote: "The branzino alone is worth the drive. Unparalleled attention to detail in every course." },
  { pub: "Florida Trend — Best Restaurant", quote: "A singular commitment to seasonal ingredients and classical technique that few restaurants in the state can match." },
  { pub: "Open Table Diners’ Choice", quote: "Nominated 5 consecutive years. Exceptional in every category: food, service, ambiance, and value." },
];

const farms = ["Sunset Ridge Farm (Bradenton) — microgreens & herbs", "Gulf Fresh Seafood (Cortez) — stone crab, snapper, grouper", "Palmetto Creek Farms — heritage pork", "Duda Farm Fresh Foods — tomatoes & citrus"];

export default function HospitalityAboutPage() {
  return (
    <div style={{fontFamily: "Georgia, 'Times New Roman', serif", backgroundColor: "#FBF7F2"}}>
      <div style={{backgroundColor: "#3B2A1A", color: "#D4B896"}} className="text-center text-xs py-2.5 tracking-[0.2em] uppercase font-sans">
        Est. 2011 · Tampa, Florida · (813) 555-0100
      </div>

      {/* Hero */}
      <section className="pt-24 pb-20 relative" style={{backgroundColor: "#1A120B", minHeight: "60vh"}}>
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
          <span style={{fontSize: "30vw", color: "#D4B896"}}>✦</span>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center" style={{minHeight: "50vh"}}>
          <p style={{color: "#D4B896", letterSpacing: "0.35em", fontSize: "0.7rem"}} className="uppercase mb-6 font-sans">Our Story</p>
          <h1 style={{color: "#FBF7F2", fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 300, lineHeight: 1.2}} className="mb-6">
            Established 2011.<br /><em>Still cooking with intention.</em>
          </h1>
          <p style={{color: "#B09880", lineHeight: 1.9}} className="font-sans text-lg max-w-2xl font-light">
            What started as a 40-seat neighborhood restaurant has become one of Tampa Bay&rsquo;s most enduring dining destinations — not through ambition, but through consistency.
          </p>
        </div>
      </section>

      {/* Chef bio */}
      <section className="py-24 px-6" style={{backgroundColor: "#FBF7F2"}}>
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div style={{backgroundColor: "#EFE8DE", aspectRatio: "3/4"}} className="rounded" />
            <div style={{backgroundColor: "#D4B896", width: "40%", aspectRatio: "1"}} className="absolute -bottom-6 -right-6 rounded" />
          </div>
          <div>
            <p style={{color: "#9C7A56", letterSpacing: "0.2em", fontSize: "0.7rem"}} className="uppercase font-sans mb-5">Executive Chef & Owner</p>
            <h2 style={{fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "#1A120B", fontWeight: 300}} className="mb-6">Marco Bellini</h2>
            <p style={{color: "#6B5240", lineHeight: 1.9}} className="font-sans mb-4 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Marco trained under Gualtiero Marchesi in Milan and spent three years in Lyon before returning to the United States. After stints at two James Beard Award-nominated restaurants in New York, he moved to Florida in 2009 with a single goal: open a restaurant that felt like an Italian grandmother&rsquo;s table, elevated.
            </p>
            <p style={{color: "#6B5240", lineHeight: 1.9}} className="font-sans mb-6 text-sm">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. He opened with 40 seats and a menu that changed weekly. Fourteen years later, the philosophy hasn&rsquo;t changed — only the dining room grew.
            </p>
            <p style={{color: "#9C7A56", fontStyle: "italic", fontSize: "1rem", lineHeight: 1.7}} className="font-sans border-l-2 border-[#D4B896] pl-5">
              &ldquo;The best ingredient is always the one in season. The second best is the one grown by someone whose name you know.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Kitchen philosophy */}
      <section className="py-20 px-6" style={{backgroundColor: "#F3EDE4"}}>
        <div className="max-w-4xl mx-auto text-center">
          <p style={{color: "#9C7A56", letterSpacing: "0.2em", fontSize: "0.7rem"}} className="uppercase font-sans mb-5">Our Philosophy</p>
          <h2 style={{fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "#1A120B", fontWeight: 300}} className="mb-8">Cook what&rsquo;s in season. Know where it came from.</h2>
          <p style={{color: "#6B5240", lineHeight: 1.9}} className="font-sans mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Every menu at this restaurant begins not in a kitchen but at a farm or on a dock. The produce, proteins, and dairy we work with drive our decisions — not the other way around.
          </p>
          <p style={{color: "#6B5240", lineHeight: 1.9}} className="font-sans">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We believe that extraordinary dining is the product of extraordinary ingredients handled with respect and restraint. We don&rsquo;t compete with complexity. We compete with simplicity done perfectly.
          </p>
        </div>
      </section>

      {/* Sourcing */}
      <section className="py-20 px-6" style={{backgroundColor: "#1A120B"}}>
        <div className="max-w-4xl mx-auto">
          <p style={{color: "#D4B896", letterSpacing: "0.2em", fontSize: "0.7rem"}} className="uppercase font-sans mb-5 text-center">Our Partners</p>
          <h2 style={{fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "#FBF7F2", fontWeight: 300}} className="text-center mb-10">
            Farms & fishermen we trust.
          </h2>
          <ul className="space-y-4">
            {farms.map((f) => (
              <li key={f} style={{borderBottom: "1px solid rgba(212,184,150,0.15)", paddingBottom: "1rem"}} className="flex items-start gap-4 font-sans">
                <span style={{color: "#D4B896"}}>✦</span>
                <span style={{color: "#B09880"}} className="text-sm">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6" style={{backgroundColor: "#FBF7F2"}}>
        <div className="max-w-5xl mx-auto">
          <p style={{color: "#9C7A56", letterSpacing: "0.2em", fontSize: "0.7rem"}} className="uppercase font-sans mb-5">Our Team</p>
          <h2 style={{fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "#1A120B", fontWeight: 300}} className="mb-10">The people behind every plate.</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {team.map((t) => (
              <div key={t.name} style={{border: "1px solid rgba(212,184,150,0.3)", backgroundColor: "white"}} className="rounded p-7">
                <p style={{color: "#9C7A56", fontSize: "0.65rem", letterSpacing: "0.15em"}} className="uppercase font-sans mb-2">{t.role}</p>
                <h3 style={{color: "#1A120B", fontSize: "1.25rem", fontWeight: 400}} className="mb-3">{t.name}</h3>
                <p style={{color: "#6B5240", lineHeight: 1.8}} className="font-sans text-sm">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="py-20 px-6" style={{backgroundColor: "#F3EDE4"}}>
        <div className="max-w-5xl mx-auto">
          <p style={{color: "#9C7A56", letterSpacing: "0.2em", fontSize: "0.7rem"}} className="uppercase font-sans mb-5 text-center">As Seen In</p>
          <div className="grid md:grid-cols-2 gap-8">
            {press.map((p) => (
              <div key={p.pub} style={{border: "1px solid rgba(212,184,150,0.3)"}} className="p-7">
                <p style={{color: "#3B2A1A", lineHeight: 1.9, fontStyle: "italic"}} className="mb-4 text-sm">
                  &ldquo;{p.quote}&rdquo;
                </p>
                <p style={{color: "#9C7A56", fontSize: "0.65rem", letterSpacing: "0.2em"}} className="uppercase font-sans">— {p.pub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{backgroundColor: "#D4B896"}}>
        <h2 style={{fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1A120B", fontWeight: 300}} className="mb-8">Join us for dinner.</h2>
        <Link href="/contact"
          style={{backgroundColor: "#1A120B", color: "#D4B896"}}
          className="inline-block font-sans font-semibold px-10 py-4 tracking-widest text-xs uppercase hover:opacity-90 transition-opacity">
          Make a Reservation
        </Link>
      </section>
    </div>
  );
}
