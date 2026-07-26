import Link from "next/link";

const menus = [
  {
    title: "Seasonal Buffet",
    desc: "A rotating menu built around what's fresh and local. Great for 50–500 guests.",
    items: ["Carved proteins + vegetarian main","5 seasonal sides","Artisan bread station","Dessert display","Full service staff"],
    price: "From $42 / person",
  },
  {
    title: "Plated Dinner Service",
    desc: "White-glove plated service for formal occasions. Three- to five-course options.",
    items: ["Chef's amuse-bouche","Soup or salad course","Choice of entrée (2–3 options)","Dessert service","Full table staff"],
    price: "From $68 / person",
  },
  {
    title: "Heavy Appetizers",
    desc: "Passed hors d'oeuvres and stationed displays — no formal dinner required.",
    items: ["8–12 passed selections","2–3 stationed displays","Charcuterie & cheese board","Cocktail napkins + small plates","Butler-style service"],
    price: "From $28 / person",
  },
  {
    title: "Drop-Off Catering",
    desc: "No staff needed. We deliver, set up, and leave you the food. Perfect for office catering.",
    items: ["Full meal packaged for self-service","Chafing dishes if requested","Utensils, napkins, serving ware","Same-day delivery available","Min. 12 guests"],
    price: "From $18 / person",
  },
];

const dietary = ["Gluten-Free","Vegan","Vegetarian","Nut-Free","Kosher-Style","Halal","Low-Sodium","Dairy-Free"];

export default function Catering() {
  return (
    <div className="bg-[#F9F6F0] font-serif">
      <nav className="bg-[#F9F6F0] border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
          <Link href="home" className="text-2xl font-bold tracking-tight text-stone-800 italic">Terra Bella<span className="not-italic font-light text-stone-500"> Events</span></Link>
          <div className="hidden lg:flex items-center gap-8">
            <Link href="weddings" className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-400 hover:text-stone-800">Weddings</Link>
            <Link href="catering" className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-800">Catering</Link>
            <Link href="corporate-events" className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-400 hover:text-stone-800">Corporate</Link>
            <Link href="contact" className="border border-stone-800 font-sans text-xs font-semibold uppercase tracking-widest text-stone-800 px-5 py-2.5 hover:bg-stone-800 hover:text-white transition-colors">Get a Proposal</Link>
          </div>
        </div>
      </nav>

      {/* Page header */}
      <section className="py-20 px-6 text-center border-b border-stone-200">
        <p className="font-sans text-xs tracking-[0.2em] text-stone-400 uppercase mb-4">Full-Service Catering</p>
        <h1 className="text-5xl font-bold text-stone-800 italic mb-4">Food That Elevates the Moment</h1>
        <p className="text-stone-500 font-sans max-w-xl mx-auto leading-relaxed">Scratch-made menus, professional staff, and a planning process designed to make your event effortless.</p>
      </section>

      {/* Service packages — alternating warm/white */}
      {menus.map((m, i) => (
        <section key={m.title} className={`py-16 px-6 ${i % 2 === 1 ? "bg-stone-100" : "bg-[#F9F6F0]"} border-b border-stone-200`}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {i % 2 === 0 ? (
              <>
                <div>
                  <h2 className="text-3xl font-bold text-stone-800 italic mb-3">{m.title}</h2>
                  <p className="text-stone-500 font-sans leading-relaxed mb-5">{m.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {m.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 font-sans text-sm text-stone-700">
                        <span className="text-stone-400">—</span>{item}
                      </li>
                    ))}
                  </ul>
                  <p className="font-bold text-stone-800 italic text-lg mb-6">{m.price}</p>
                  <Link href="contact" className="inline-block border border-stone-800 font-sans text-xs font-semibold uppercase tracking-widest text-stone-800 px-6 py-3 hover:bg-stone-800 hover:text-white transition-colors">Request a Proposal</Link>
                </div>
                <div className="rounded-2xl aspect-[4/3] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80&auto=format&fit=crop" alt={m.title} className="w-full h-full object-cover" />
                </div>
              </>
            ) : (
              <>
                <div className="rounded-2xl aspect-[4/3] overflow-hidden order-last lg:order-first">
                  <img src="https://images.unsplash.com/photo-1578985545062-7726a9ce7c2f?w=900&q=80&auto=format&fit=crop" alt={m.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-stone-800 italic mb-3">{m.title}</h2>
                  <p className="text-stone-500 font-sans leading-relaxed mb-5">{m.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {m.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 font-sans text-sm text-stone-700">
                        <span className="text-stone-400">—</span>{item}
                      </li>
                    ))}
                  </ul>
                  <p className="font-bold text-stone-800 italic text-lg mb-6">{m.price}</p>
                  <Link href="contact" className="inline-block border border-stone-800 font-sans text-xs font-semibold uppercase tracking-widest text-stone-800 px-6 py-3 hover:bg-stone-800 hover:text-white transition-colors">Request a Proposal</Link>
                </div>
              </>
            )}
          </div>
        </section>
      ))}

      {/* Dietary accommodations */}
      <section className="py-16 px-6 bg-stone-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.2em] text-stone-400 uppercase mb-4">We Accommodate</p>
          <h2 className="text-3xl font-bold text-[#F9F6F0] italic mb-10">Dietary Needs, Thoughtfully Handled</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {dietary.map((d) => (
              <span key={d} className="border border-stone-600 text-stone-300 font-sans text-xs font-semibold px-4 py-2 rounded-full tracking-wider">{d}</span>
            ))}
          </div>
          <p className="text-stone-400 font-sans text-sm mt-6 max-w-md mx-auto">All dietary accommodations are handled at no additional charge. Just let us know when you request a proposal.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-stone-800 italic mb-4">Not Sure Which Package Is Right?</h2>
        <p className="text-stone-500 font-sans mb-8 max-w-md mx-auto">Tell us about your event — guest count, venue, and vision — and we&apos;ll recommend the best approach and price it out.</p>
        <Link href="contact" className="inline-block bg-stone-800 text-[#F9F6F0] font-sans font-semibold px-10 py-4 uppercase text-xs tracking-widest hover:bg-stone-900 transition-colors">Get a Custom Proposal</Link>
      </section>
    </div>
  );
}
