import Link from "next/link";

const team = [
  { name: "Maria Costello", role: "Founder & Executive Chef", bio: "Maria spent 12 years at luxury resorts across Florida before founding Terra Bella in 2009. Her philosophy: food should feel like hospitality, not a transaction.", img: "https://images.unsplash.com/photo-1600565597073-b308c9f3489a?w=800&q=80&auto=format&fit=crop" },
  { name: "Roberto Esposito", role: "Head of Operations", bio: "Roberto keeps everything running on event days — logistics, staffing, vendor coordination. 200+ events without a missed delivery window.", img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80&auto=format&fit=crop" },
  { name: "Priya Nair", role: "Event Design Lead", bio: "Priya translates client vision into tablescaping, menu presentation, and venue flow. She has a background in interior design and it shows.", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop" },
];

const areas = ["Tampa","St. Petersburg","Clearwater","Sarasota","Brandon","Westchase","New Tampa","Wesley Chapel","Lakeland","Bradenton"];

export default function HospitalityAbout() {
  return (
    <div className="bg-[#F9F6F0] font-serif">
      <nav className="bg-[#F9F6F0] border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
          <Link href="home" className="text-2xl font-bold tracking-tight text-stone-800 italic">Terra Bella<span className="not-italic font-light text-stone-500"> Events</span></Link>
          <div className="hidden lg:flex items-center gap-8">
            <Link href="weddings" className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-400 hover:text-stone-800">Weddings</Link>
            <Link href="catering" className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-400 hover:text-stone-800">Catering</Link>
            <Link href="about" className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-800">About</Link>
            <Link href="contact" className="border border-stone-800 font-sans text-xs font-semibold uppercase tracking-widest text-stone-800 px-5 py-2.5 hover:bg-stone-800 hover:text-white transition-colors">Start Planning</Link>
          </div>
        </div>
      </nav>

      {/* Story section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-sans text-xs tracking-[0.2em] text-stone-400 uppercase mb-5">Our Story</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-stone-800 italic mb-6">Built Around the Belief That Food Is the Heart of Every Event</h1>
            <p className="text-stone-500 font-sans leading-relaxed mb-5">Terra Bella was founded in 2009 by Maria Costello after years of cooking at high-end Tampa Bay venues. She saw a gap: clients were getting either cheap banquet food or overpriced catering with impersonal service. She started Terra Bella to offer something different — chef-driven menus with the feel of a small, dedicated team.</p>
            <p className="text-stone-500 font-sans leading-relaxed">Today we&apos;ve catered over 2,000 events, from 10-person rehearsal dinners to 500-person corporate galas. The size of the event doesn&apos;t change how much care goes into the food and service.</p>
          </div>
          <div className="rounded-2xl aspect-square overflow-hidden">
            <img src="https://images.unsplash.com/photo-1600565597073-b308c9f3489a?w=900&q=80&auto=format&fit=crop" alt="Maria Costello, Founder" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-stone-800 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.2em] text-stone-400 uppercase mb-6">Our Philosophy</p>
          <p className="text-[#F9F6F0] text-2xl lg:text-3xl italic font-bold leading-relaxed mb-10">"We don&apos;t do templates. Every menu we write starts with a conversation about who the guests are, what matters to you, and what the moment calls for."</p>
          <p className="text-stone-400 font-sans text-sm uppercase tracking-widest">— Maria Costello, Founder</p>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-xs tracking-[0.2em] text-stone-400 uppercase mb-4 text-center">The Team</p>
          <h2 className="text-3xl font-bold text-stone-800 italic text-center mb-14">The People Behind Your Event</h2>
          <div className="space-y-12">
            {team.map((m, i) => (
              <div key={m.name} className={`grid grid-cols-1 lg:grid-cols-5 gap-10 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={`lg:col-span-2 rounded-2xl aspect-[4/3] overflow-hidden ${i % 2 === 1 ? "lg:order-last" : ""}`}>
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <div className="lg:col-span-3">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">{m.role}</p>
                  <h3 className="text-2xl font-bold text-stone-800 italic mb-4">{m.name}</h3>
                  <p className="text-stone-500 font-sans leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="border-t border-stone-200 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-xs tracking-[0.2em] text-stone-400 uppercase mb-4 text-center">Service Area</p>
          <h2 className="text-2xl font-bold text-stone-800 italic text-center mb-8">We Serve Greater Tampa Bay</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((a) => (
              <span key={a} className="border border-stone-200 text-stone-600 font-sans text-sm px-4 py-2 rounded-full">{a}</span>
            ))}
          </div>
          <p className="text-stone-400 font-sans text-xs text-center mt-5">Serving locations beyond this area? Contact us — we travel for larger events.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-[#F9F6F0]">
        <h2 className="text-3xl font-bold text-stone-800 italic mb-4">Ready to Work with Our Team?</h2>
        <Link href="contact" className="inline-block bg-stone-800 text-[#F9F6F0] font-sans font-semibold px-10 py-4 uppercase text-xs tracking-widest hover:bg-stone-900 transition-colors">Get in Touch</Link>
      </section>
    </div>
  );
}
