import Link from "next/link";

const eventTypes = [
  { title: "Team Lunches & Breakfasts", desc: "Daily, weekly, or one-time catered meals for your team. Hot buffets, boxed lunches, continental breakfast setups.", capacity: "12–500 people", popular: true },
  { title: "Client & Board Dinners", desc: "White-tablecloth service for executive dining. Small-plate tastings or full plated dinner service.", capacity: "8–50 people", popular: false },
  { title: "Product Launches & Galas", desc: "Cocktail-style or formal dinner for milestone events. Branded displays, specialty cocktails, passed service.", capacity: "50–500 people", popular: true },
  { title: "Conference & Training", desc: "All-day catering for conferences: AM/PM breaks, working lunches, grab-and-go stations.", capacity: "25–1,000 people", popular: false },
];

export default function CorporateEvents() {
  return (
    <div className="bg-[#F9F6F0] font-serif">
      <nav className="bg-[#F9F6F0] border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
          <Link href="home" className="text-2xl font-bold tracking-tight text-stone-800 italic">Terra Bella<span className="not-italic font-light text-stone-500"> Events</span></Link>
          <div className="hidden lg:flex items-center gap-8">
            <Link href="weddings" className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-400 hover:text-stone-800">Weddings</Link>
            <Link href="catering" className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-400 hover:text-stone-800">Catering</Link>
            <Link href="corporate-events" className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-800">Corporate</Link>
            <Link href="contact" className="border border-stone-800 font-sans text-xs font-semibold uppercase tracking-widest text-stone-800 px-5 py-2.5 hover:bg-stone-800 hover:text-white transition-colors">Request a Proposal</Link>
          </div>
        </div>
      </nav>

      {/* Header — clean, professional */}
      <section className="py-20 px-6 border-b border-stone-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <p className="font-sans text-xs tracking-[0.2em] text-stone-400 uppercase mb-4">Corporate Catering & Events</p>
            <h1 className="text-5xl font-bold text-stone-800 italic leading-tight">Make Your Company Look Good</h1>
          </div>
          <div>
            <p className="text-stone-500 font-sans text-lg leading-relaxed">Professional catering for team events, client dinners, product launches, and annual galas. We understand the stakes — so we get it right.</p>
          </div>
        </div>
      </section>

      {/* Event type grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-xs tracking-[0.2em] text-stone-400 uppercase mb-10 text-center">What We Handle</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eventTypes.map((e) => (
              <div key={e.title} className={`border rounded-2xl p-8 ${e.popular ? "border-stone-800 bg-stone-800" : "border-stone-200 bg-[#F9F6F0]"}`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-xl font-bold italic ${e.popular ? "text-[#F9F6F0]" : "text-stone-800"}`}>{e.title}</h3>
                  {e.popular && <span className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-400 bg-stone-700 px-3 py-1 rounded-full">Popular</span>}
                </div>
                <p className={`font-sans text-sm leading-relaxed mb-5 ${e.popular ? "text-stone-400" : "text-stone-500"}`}>{e.desc}</p>
                <div className="flex items-center justify-between">
                  <span className={`font-sans text-xs font-semibold ${e.popular ? "text-stone-400" : "text-stone-400"}`}>{e.capacity}</span>
                  <Link href="contact" className={`font-sans text-xs font-semibold uppercase tracking-widest border px-4 py-2 transition-colors ${e.popular ? "border-stone-600 text-stone-300 hover:border-white hover:text-white" : "border-stone-300 text-stone-600 hover:border-stone-800 hover:text-stone-800"}`}>Get a Quote</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo row */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3">
          {["Team Lunch","Gala Setup","Boxed Lunch","Conference Break"].map((l) => (
            <div key={l} className="bg-stone-200 rounded-xl aspect-[4/3] flex items-center justify-center text-stone-400 font-sans text-xs">{l}</div>
          ))}
        </div>
      </section>

      {/* Capabilities strip */}
      <section className="border-t border-b border-stone-200 py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-xs tracking-[0.2em] text-stone-400 uppercase mb-8 text-center">What Sets Us Apart for Corporate Clients</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["Invoice & PO Friendly","We issue proper invoices on company letterhead and accept purchase orders from established clients."],
              ["Repeatable & Consistent","If you&apos;re booking us monthly, our recipes are standardized — you get the same quality every time."],
              ["Dietary Documentation","Full allergen and ingredient sheets available for all menu items upon request."],
              ["Branded Presentations","Menus, signage, and tablescaping can incorporate your brand colors and logo."],
              ["Last-Minute Availability","We maintain capacity for same-week bookings. Call us — we&apos;ll do our best."],
              ["Coordinator Included","Every corporate event gets one dedicated point of contact, not a rotating staff."],
            ].map(([title, desc]) => (
              <div key={title as string} className="border-l-2 border-stone-200 pl-5">
                <h4 className="font-bold text-stone-800 italic mb-2">{title}</h4>
                <p className="font-sans text-sm text-stone-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-stone-800 italic mb-4">Ready to Get a Proposal?</h2>
        <p className="text-stone-500 font-sans mb-8 max-w-md mx-auto">Tell us your date, guest count, and budget range. We respond within one business day.</p>
        <Link href="contact" className="inline-block bg-stone-800 text-[#F9F6F0] font-sans font-semibold px-10 py-4 uppercase text-xs tracking-widest hover:bg-stone-900 transition-colors">Request a Proposal</Link>
      </section>
    </div>
  );
}
