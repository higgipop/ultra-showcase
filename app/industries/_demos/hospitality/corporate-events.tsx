// corporate catering: light design, volume capabilities, dietary accommodations, proposal form
import Link from "next/link";

const eventTypes = [
  { name: "Working Lunches", desc: "Delivered and set up before your team arrives. Hot or cold menu options, minimal interruption to your day.", cap: "10–200 guests" },
  { name: "All-Hands / Town Halls", desc: "Large-format catering for company-wide meetings. Buffet or stations — we manage logistics so you focus on your message.", cap: "50–2,000 guests" },
  { name: "Client Entertainment", desc: "Elevated menus for client dinners, board meetings, and relationship events. We match the formality of the occasion.", cap: "10–100 guests" },
  { name: "Company Milestones", desc: "Anniversaries, office openings, product launches. Cocktail receptions and celebration dinners.", cap: "20–500 guests" },
];

export default function HospitalityCorporate() {
  return (
    <div className="bg-[#FAFAF8] font-sans">
      <nav className="bg-[#FAFAF8] border-b border-[#E8E4DC]">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
          <div className="font-bold text-[#1C1917] text-lg tracking-tight">TERRA<span className="font-light text-[#6B7C5C]">BELLA</span></div>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#4A4540]">
            <Link href="home" className="hover:text-[#1C1917]">Home</Link>
            <Link href="catering" className="hover:text-[#1C1917]">Catering</Link>
            <Link href="weddings" className="hover:text-[#1C1917]">Weddings</Link>
            <Link href="corporate-events" className="text-[#6B7C5C] border-b border-[#6B7C5C]">Corporate</Link>
            <Link href="about" className="hover:text-[#1C1917]">Our Story</Link>
          </div>
          <Link href="contact" className="bg-[#1C1917] text-white font-semibold px-4 py-2 rounded text-sm hover:bg-[#2C2921] transition-colors">Request a Proposal</Link>
        </div>
      </nav>

      <div className="bg-[#F5F3EF] py-12 px-4 text-center border-b border-[#E8E4DC]">
        <h1 className="text-4xl font-bold text-[#1C1917] mb-3" style={{fontFamily: "Georgia, serif"}}>Corporate Catering &amp; Event Services</h1>
        <p className="text-[#6B6560] text-lg max-w-2xl mx-auto">From working lunches to thousand-person conferences — we handle the food so you can focus on business.</p>
      </div>

      {/* Event types */}
      <section className="py-14 bg-[#FAFAF8] px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {eventTypes.map((et) => (
              <div key={et.name} className="bg-white border border-[#E8E4DC] rounded-2xl p-7">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-xl font-bold text-[#1C1917]" style={{fontFamily: "Georgia, serif"}}>{et.name}</h2>
                  <span className="text-xs font-semibold text-[#6B7C5C] bg-[#F5F3EF] px-2.5 py-1 rounded-full">{et.cap}</span>
                </div>
                <p className="text-[#6B6560] leading-relaxed">{et.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volume & dietary */}
      <section className="py-14 bg-[#F5F3EF] px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1C1917] mb-5" style={{fontFamily: "Georgia, serif"}}>Volume Capabilities</h2>
            <p className="text-[#6B6560] leading-relaxed mb-5">We can scale from a 10-person team lunch to a 2,000-person conference banquet. Our kitchen and staffing model is designed to maintain quality at any volume.</p>
            <div className="grid grid-cols-3 gap-4">
              {[{ v: "10", l: "min guests" }, { v: "2,000", l: "max guests" }, { v: "24h", l: "min notice (small events)" }].map((s) => (
                <div key={s.l} className="bg-white border border-[#E8E4DC] rounded-xl p-4 text-center">
                  <p className="text-2xl font-black text-[#6B7C5C]">{s.v}</p>
                  <p className="text-[#6B6560] text-xs mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1C1917] mb-5" style={{fontFamily: "Georgia, serif"}}>Dietary Accommodations</h2>
            <p className="text-[#6B6560] leading-relaxed mb-5">We treat dietary needs as requirements, not afterthoughts. Every menu includes options for:</p>
            <div className="grid grid-cols-2 gap-3">
              {["Vegan", "Vegetarian", "Gluten-Free", "Halal", "Kosher (licensed kitchen partner)", "Dairy-Free", "Nut-Free", "Low-Sodium"].map((d) => (
                <div key={d} className="flex items-center gap-2 text-[#4A4540] text-sm bg-white border border-[#E8E4DC] rounded-xl px-4 py-2.5">
                  <span className="text-[#6B7C5C] font-bold">✓</span> {d}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Repeat accounts */}
      <section className="py-12 bg-[#FAFAF8] border-y border-[#E8E4DC] px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-[#1C1917] mb-3" style={{fontFamily: "Georgia, serif"}}>Recurring Corporate Accounts</h2>
          <p className="text-[#6B6560] leading-relaxed">Many of our corporate clients work with us on a recurring basis — weekly team lunches, monthly leadership meetings, quarterly client dinners. Recurring accounts receive priority scheduling, simplified billing, and an account manager who knows your preferences.</p>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-12 bg-[#F5F3EF] px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#6B7C5C] text-xs font-bold uppercase tracking-[0.2em] mb-5">Service Locations</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Jacksonville", "Brunswick, GA", "Daytona Beach", "Lake City", "Gainesville"].map((a) => (
              <span key={a} className="text-[#4A4540] font-semibold bg-white border border-[#E8E4DC] px-5 py-2 rounded-full text-sm">{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Proposal form */}
      <section className="py-14 bg-[#FAFAF8] px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1C1917] text-center mb-8" style={{fontFamily: "Georgia, serif"}}>Request Corporate Catering Proposal</h2>
          <form className="bg-[#F5F3EF] border border-[#E8E4DC] rounded-2xl p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#6B6560] uppercase tracking-wider mb-1.5">Contact Name</label>
                <input type="text" className="w-full border border-[#D5D0C8] bg-white rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#6B7C5C] focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#6B6560] uppercase tracking-wider mb-1.5">Company</label>
                <input type="text" className="w-full border border-[#D5D0C8] bg-white rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#6B7C5C] focus:outline-none" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#6B6560] uppercase tracking-wider mb-1.5">Email</label>
                <input type="email" className="w-full border border-[#D5D0C8] bg-white rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#6B7C5C] focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#6B6560] uppercase tracking-wider mb-1.5">Phone</label>
                <input type="tel" className="w-full border border-[#D5D0C8] bg-white rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#6B7C5C] focus:outline-none" />
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#6B6560] uppercase tracking-wider mb-1.5">Event Type</label>
                <select className="w-full border border-[#D5D0C8] bg-white rounded-lg px-4 py-3 text-sm text-[#4A4540] focus:ring-2 focus:ring-[#6B7C5C] focus:outline-none">
                  <option>Working Lunch</option>
                  <option>All-Hands Event</option>
                  <option>Client Entertainment</option>
                  <option>Company Milestone</option>
                  <option>Recurring Account</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#6B6560] uppercase tracking-wider mb-1.5">Event Date</label>
                <input type="date" className="w-full border border-[#D5D0C8] bg-white rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#6B7C5C] focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#6B6560] uppercase tracking-wider mb-1.5">Guest Count</label>
                <input type="text" className="w-full border border-[#D5D0C8] bg-white rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#6B7C5C] focus:outline-none" placeholder="e.g. 75" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-[#6B6560] uppercase tracking-wider mb-1.5">Additional Notes</label>
              <textarea rows={3} className="w-full border border-[#D5D0C8] bg-white rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#6B7C5C] focus:outline-none resize-none" placeholder="Venue, dietary needs, service style preferences, budget guidance..." />
            </div>
            <button type="submit" className="w-full bg-[#1C1917] hover:bg-[#2C2921] text-white font-semibold py-4 rounded-xl transition-colors">
              Request Proposal
            </button>
            <p className="text-[#9A9590] text-xs text-center">We typically respond within 24 hours.</p>
          </form>
        </div>
      </section>
    </div>
  );
}
