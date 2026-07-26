import Link from "next/link";

const steps = [
  { num: "01", title: "Initial Consultation", desc: "A 30-minute call to learn about your vision, venue, and guest count. No pitch — just listening." },
  { num: "02", title: "Tasting & Menu Design", desc: "Complimentary tasting for two. We design a menu around your preferences, dietary needs, and season." },
  { num: "03", title: "Detailed Proposal", desc: "Itemized pricing with no hidden fees. You know exactly what you&apos;re getting before you sign anything." },
  { num: "04", title: "Your Wedding Day", desc: "A dedicated lead coordinator on-site from setup through teardown. You enjoy your day — we handle everything." },
];

const packages = [
  { name: "Elopement Celebration", guests: "Up to 30", price: "Starting at $1,800", includes: ["Passed appetizers + champagne","Intimate plated dinner","2 service staff","Cake cutting service"] },
  { name: "The Garden Party", guests: "30–100 guests", price: "Starting at $3,800", includes: ["Cocktail hour with passed appetizers","Buffet or family-style dinner","Full bar coordination","4 service staff"] },
  { name: "The Grand Celebration", guests: "100–300 guests", price: "Starting at $8,500", includes: ["Full cocktail hour","Plated 3-course dinner","Custom dessert display","Full bar program","8–16 service staff"] },
];

export default function Weddings() {
  return (
    <div className="bg-[#F9F6F0] font-serif">
      <nav className="bg-[#F9F6F0] border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
          <Link href="home" className="text-2xl font-bold tracking-tight text-stone-800 italic">Terra Bella<span className="not-italic font-light text-stone-500"> Events</span></Link>
          <div className="hidden lg:flex items-center gap-8">
            <Link href="weddings" className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-800">Weddings</Link>
            <Link href="catering" className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-400 hover:text-stone-800">Catering</Link>
            <Link href="corporate-events" className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-400 hover:text-stone-800">Corporate</Link>
            <Link href="contact" className="border border-stone-800 font-sans text-xs font-semibold uppercase tracking-widest text-stone-800 px-5 py-2.5 hover:bg-stone-800 hover:text-white transition-colors">Start Planning</Link>
          </div>
        </div>
      </nav>

      {/* Editorial hero */}
      <section className="py-24 px-6 text-center">
        <p className="font-sans text-xs tracking-[0.2em] text-stone-400 uppercase mb-5">Wedding Catering & Events</p>
        <h1 className="text-5xl lg:text-7xl font-bold text-stone-800 italic leading-tight mb-6">Your Day.<br />Our Best Work.</h1>
        <p className="text-stone-500 font-sans text-lg max-w-lg mx-auto leading-relaxed mb-10">We&apos;ve catered weddings from 10 to 300 guests at venues across Tampa Bay. Every one is treated like it&apos;s the only one on our calendar.</p>
        <Link href="contact" className="inline-block bg-stone-800 text-[#F9F6F0] font-sans font-semibold px-10 py-4 uppercase text-xs tracking-widest hover:bg-stone-900 transition-colors">Schedule a Consultation</Link>
      </section>

      {/* Gallery row */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-3">
          <div className="rounded-xl aspect-[3/4] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=700&q=80&auto=format&fit=crop" alt="Wedding ceremony" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-xl aspect-[3/4] overflow-hidden mt-8">
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80&auto=format&fit=crop" alt="Wedding reception" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-xl aspect-[3/4] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1578985545062-7726a9ce7c2f?w=700&q=80&auto=format&fit=crop" alt="Wedding detail" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* 4-step process */}
      <section className="bg-stone-800 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-xs tracking-[0.2em] text-stone-400 uppercase mb-4">How We Work</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#F9F6F0] italic mb-14">From First Call to First Dance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="border-t border-stone-600 pt-6">
                <p className="font-sans text-5xl font-bold text-stone-600 mb-4">{s.num}</p>
                <h3 className="font-bold text-[#F9F6F0] text-lg italic mb-3">{s.title}</h3>
                <p className="text-stone-400 font-sans text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-xs tracking-[0.2em] text-stone-400 uppercase mb-4 text-center">Starting Points</p>
          <h2 className="text-3xl font-bold text-stone-800 italic text-center mb-12">Wedding Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.name} className="border border-stone-200 rounded-2xl p-8 hover:shadow-sm transition-shadow">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">{pkg.guests}</p>
                <h3 className="text-2xl font-bold text-stone-800 italic mb-1">{pkg.name}</h3>
                <p className="text-stone-500 font-sans font-semibold mb-6">{pkg.price}</p>
                <ul className="space-y-2 mb-8">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-sans text-sm text-stone-600">
                      <span className="text-stone-300 mt-0.5">—</span>{item}
                    </li>
                  ))}
                </ul>
                <Link href="contact" className="block text-center border border-stone-300 font-sans text-xs font-semibold uppercase tracking-widest text-stone-600 py-3 hover:border-stone-800 hover:text-stone-800 transition-colors">Request a Quote</Link>
              </div>
            ))}
          </div>
          <p className="text-stone-400 font-sans text-xs text-center mt-6">All packages are customizable. Pricing varies by guest count, venue, and menu selections.</p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="border-t border-stone-200 py-20 px-6 text-center">
        <p className="text-stone-800 text-2xl italic font-bold mb-6 max-w-2xl mx-auto">"Every single guest told us the food was the best they&apos;d ever had at a wedding. Terra Bella made that possible."</p>
        <p className="font-sans text-xs text-stone-400 uppercase tracking-widest">— MELISSA & DAVID K., NOVEMBER 2024</p>
      </section>

      {/* CTA */}
      <section className="bg-[#F9F6F0] border-t border-stone-200 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-stone-800 italic mb-4">Let&apos;s Talk About Your Wedding</h2>
        <p className="text-stone-500 font-sans mb-8">Free 30-minute consultations, with complimentary tasting for booked clients.</p>
        <Link href="contact" className="inline-block bg-stone-800 text-[#F9F6F0] font-sans font-semibold px-10 py-4 uppercase text-xs tracking-widest hover:bg-stone-900 transition-colors">Schedule Consultation</Link>
      </section>
    </div>
  );
}
