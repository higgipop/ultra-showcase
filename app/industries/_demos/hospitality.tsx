// Design reference: terrabellas.com — warm cream, elegant serif, full-bleed imagery, event/menu categories, refined tone
import Link from "next/link";

const categories = [
  { label: "Dinner", icon: "🍽️" },
  { label: "Brunch", icon: "☕" },
  { label: "Private Events", icon: "🥂" },
  { label: "Catering", icon: "🍾" },
  { label: "Gift Cards", icon: "🎁" },
  { label: "Reservations", icon: "📅" },
];

const menuHighlights = [
  { section: "To Start", items: ["Truffle Burrata · $18", "Charcuterie Board · $24", "Lobster Bisque · $16"] },
  { section: "Mains", items: ["Grilled Branzino · $42", "Filet Mignon 8oz · $58", "Wild Mushroom Risotto · $32"] },
  { section: "Desserts", items: ["Warm Chocolate Soufflé · $14", "Seasonal Tart · $12", "Artisan Cheese Board · $18"] },
];

const events = [
  { type: "Corporate Events", body: "Impress clients and celebrate teams in our private dining room. Capacity 10–60 guests." },
  { type: "Wedding Receptions", body: "From intimate celebrations to grand receptions. Full-service coordination available." },
  { type: "Holiday Parties", body: "Custom menus, dedicated staff, and décor packages for seasonal gatherings." },
];

const pressQuotes = [
  { pub: "Tampa Bay Times", quote: "One of Tampa's most celebrated dining rooms — the kind of place that earns its reputation." },
  { pub: "Eater Tampa", quote: "The branzino alone is worth the drive. Unparalleled attention to detail in every course." },
];

export default function HospitalityDemo() {
  return (
    <div style={{fontFamily: "Georgia, 'Times New Roman', serif", backgroundColor: "#FBF7F2"}}>

      {/* Elegant top bar */}
      <div style={{backgroundColor: "#3B2A1A", color: "#D4B896"}} className="text-center text-xs py-2.5 tracking-[0.2em] uppercase font-sans">
        Reservations: (813) 555-0100 · Open Tue–Sun · Dinner from 5:00 PM
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{minHeight: "90vh", backgroundColor: "#1A120B"}}>
        {/* Full-bleed placeholder with overlay */}
        <div className="absolute inset-0" style={{background: "linear-gradient(to bottom, rgba(26,18,11,0.3) 0%, rgba(26,18,11,0.6) 60%, rgba(26,18,11,0.9) 100%)"}} />
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <span style={{fontSize: "40vw", color: "#D4B896"}}>✦</span>
        </div>

        <div className="relative flex flex-col items-center justify-center text-center px-6" style={{minHeight: "90vh"}}>
          <p style={{color: "#D4B896", letterSpacing: "0.35em", fontSize: "0.7rem"}} className="uppercase mb-6 font-sans">
            Est. 2011 · Tampa, Florida
          </p>
          <h1 style={{color: "#FBF7F2", fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1.1, fontWeight: 300}} className="mb-6">
            An Evening<br /><em>to Remember</em>
          </h1>
          <p style={{color: "#D4B896", maxWidth: "40ch", lineHeight: 1.8}} className="text-lg mb-10 font-sans font-light">
            Modern Italian coastal cuisine in the heart of Tampa Bay. Every table is a destination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact"
              style={{backgroundColor: "#D4B896", color: "#1A120B"}}
              className="font-sans font-semibold px-10 py-4 tracking-widest text-xs uppercase hover:opacity-90 transition-opacity">
              Reserve a Table
            </Link>
            <Link href="/menu"
              style={{border: "1px solid rgba(212,184,150,0.4)", color: "#D4B896"}}
              className="font-sans font-semibold px-10 py-4 tracking-widest text-xs uppercase hover:border-[#D4B896] transition-colors">
              View Menu
            </Link>
          </div>
        </div>

        {/* Category nav */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-3 md:grid-cols-6" style={{backgroundColor: "rgba(26,18,11,0.8)", backdropFilter: "blur(8px)"}}>
              {categories.map((c) => (
                <Link key={c.label} href="/contact"
                  className="flex flex-col items-center gap-2 py-5 font-sans transition-colors group"
                  style={{borderRight: "1px solid rgba(212,184,150,0.15)"}}>
                  <span className="text-lg">{c.icon}</span>
                  <span style={{color: "#D4B896", fontSize: "0.65rem", letterSpacing: "0.15em"}} className="uppercase group-hover:text-white transition-colors">
                    {c.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6" style={{backgroundColor: "#FBF7F2"}}>
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p style={{color: "#9C7A56", letterSpacing: "0.2em", fontSize: "0.7rem"}} className="uppercase font-sans mb-5">
              Our Story
            </p>
            <h2 style={{fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1A120B", fontWeight: 300, lineHeight: 1.25}} className="mb-8">
              Where Italian craft<br />meets Florida light.
            </h2>
            <p style={{color: "#6B5240", lineHeight: 1.9}} className="font-sans mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p style={{color: "#6B5240", lineHeight: 1.9}} className="font-sans mb-8">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link href="/about"
              style={{color: "#9C7A56", borderBottom: "1px solid currentColor", paddingBottom: "2px"}}
              className="font-sans text-sm tracking-widest uppercase hover:opacity-70 transition-opacity">
              Our Philosophy
            </Link>
          </div>
          {/* Decorative placeholder */}
          <div className="relative">
            <div style={{backgroundColor: "#EFE8DE", aspectRatio: "4/5"}} className="rounded" />
            <div style={{backgroundColor: "#D4B896", width: "50%", aspectRatio: "4/5"}}
              className="absolute -bottom-8 -left-8 rounded" />
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="py-24 px-6" style={{backgroundColor: "#F3EDE4"}}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p style={{color: "#9C7A56", letterSpacing: "0.2em", fontSize: "0.7rem"}} className="uppercase font-sans mb-5">
              Current Menu
            </p>
            <h2 style={{fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1A120B", fontWeight: 300}}>
              A selection from the kitchen
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {menuHighlights.map((m) => (
              <div key={m.section}>
                <h3 style={{color: "#9C7A56", letterSpacing: "0.15em", fontSize: "0.7rem"}}
                  className="uppercase font-sans mb-6 pb-3 border-b border-[#D4B896]/40">
                  {m.section}
                </h3>
                <ul className="space-y-3">
                  {m.items.map((item) => {
                    const [name, price] = item.split(" · ");
                    return (
                      <li key={item} className="flex justify-between items-baseline font-sans">
                        <span style={{color: "#3B2A1A"}} className="text-sm">{name}</span>
                        <span style={{color: "#9C7A56"}} className="text-xs ml-4 flex-shrink-0">{price}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/menu"
              style={{backgroundColor: "#3B2A1A", color: "#D4B896"}}
              className="inline-block font-sans font-semibold px-10 py-4 tracking-widest text-xs uppercase hover:opacity-90 transition-opacity">
              Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Private Events */}
      <section className="py-24 px-6" style={{backgroundColor: "#1A120B"}}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p style={{color: "#D4B896", letterSpacing: "0.2em", fontSize: "0.7rem"}} className="uppercase font-sans mb-5">
              Private Events
            </p>
            <h2 style={{fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FBF7F2", fontWeight: 300}}>
              Your moment, beautifully hosted.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((e) => (
              <div key={e.type} style={{border: "1px solid rgba(212,184,150,0.2)"}} className="p-8">
                <h3 style={{color: "#D4B896"}} className="font-sans font-semibold mb-4">{e.type}</h3>
                <p style={{color: "#B09880", lineHeight: 1.8}} className="font-sans text-sm mb-6">{e.body}</p>
                <Link href="/contact"
                  style={{color: "#D4B896", borderBottom: "1px solid currentColor", paddingBottom: "2px", fontSize: "0.65rem"}}
                  className="font-sans tracking-widest uppercase hover:opacity-70 transition-opacity">
                  Inquire →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="py-20 px-6" style={{backgroundColor: "#FBF7F2"}}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p style={{color: "#9C7A56", letterSpacing: "0.2em", fontSize: "0.7rem"}} className="uppercase font-sans">
              As Seen In
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {pressQuotes.map((q) => (
              <div key={q.pub} className="text-center px-6">
                <p style={{color: "#3B2A1A", lineHeight: 1.8, fontStyle: "italic", fontSize: "1.1rem"}} className="mb-4">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <p style={{color: "#9C7A56", fontSize: "0.7rem", letterSpacing: "0.2em"}} className="uppercase font-sans">
                  — {q.pub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-20 px-6 text-center" style={{backgroundColor: "#D4B896"}}>
        <p style={{color: "#1A120B", letterSpacing: "0.2em", fontSize: "0.7rem"}} className="uppercase font-sans mb-5">
          Join Us
        </p>
        <h2 style={{fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1A120B", fontWeight: 300}} className="mb-8">
          Reserve your table tonight.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact"
            style={{backgroundColor: "#1A120B", color: "#D4B896"}}
            className="font-sans font-semibold px-10 py-4 tracking-widest text-xs uppercase hover:opacity-90 transition-opacity">
            Make a Reservation
          </Link>
          <a href="tel:8135550100"
            style={{border: "1px solid #1A120B", color: "#1A120B"}}
            className="font-sans font-semibold px-10 py-4 tracking-widest text-xs uppercase hover:bg-[#1A120B] hover:text-[#D4B896] transition-colors">
            (813) 555-0100
          </a>
        </div>
      </section>
    </div>
  );
}
