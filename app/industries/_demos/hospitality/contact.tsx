// terrabellas.com: light, two forms side by side, location directory, Talk With Our Team CTA
import Link from "next/link";

const locations = [
  { city: "Jacksonville (HQ)", addr: "4200 Southpoint Dr, Suite 120", phone: "(904) 555-0100", hours: "Mon–Fri 9am–6pm" },
  { city: "Brunswick, GA", addr: "120 Glynn Ave, Suite B", phone: "(912) 555-0200", hours: "Mon–Fri 10am–5pm" },
  { city: "Daytona Beach", addr: "By appointment — (386) 555-0300", phone: "(386) 555-0300", hours: "By appointment" },
];

export default function HospitalityContact() {
  return (
    <div className="bg-[#FAFAF8] font-sans">
      <nav className="bg-[#FAFAF8] border-b border-[#E8E4DC]">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
          <div className="font-bold text-[#1C1917] text-lg tracking-tight">TERRA<span className="font-light text-[#6B7C5C]">BELLA</span></div>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#4A4540]">
            <Link href="home" className="hover:text-[#1C1917]">Home</Link>
            <Link href="catering" className="hover:text-[#1C1917]">Catering</Link>
            <Link href="weddings" className="hover:text-[#1C1917]">Weddings</Link>
            <Link href="about" className="hover:text-[#1C1917]">Our Story</Link>
          </div>
          <Link href="contact" className="bg-[#1C1917] text-white font-semibold px-4 py-2 rounded text-sm">Request a Proposal</Link>
        </div>
      </nav>

      <div className="bg-[#F5F3EF] py-12 px-4 text-center border-b border-[#E8E4DC]">
        <h1 className="text-4xl font-bold text-[#1C1917]" style={{fontFamily: "Georgia, serif"}}>Request a Proposal</h1>
        <p className="text-[#6B6560] text-lg mt-3">We typically respond within 24 hours. Consultations are always free.</p>
      </div>

      <section className="py-14 bg-[#FAFAF8] px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Dining Reservation form */}
          <div className="bg-white border border-[#E8E4DC] rounded-2xl p-7">
            <h2 className="text-xl font-bold text-[#1C1917] mb-1" style={{fontFamily: "Georgia, serif"}}>Dining Reservation</h2>
            <p className="text-[#6B6560] text-sm mb-6">For restaurant dining or small private room bookings.</p>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#6B6560] uppercase tracking-wider mb-1.5">Your Name</label>
                  <input type="text" className="w-full border border-[#D5D0C8] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#6B7C5C] focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#6B6560] uppercase tracking-wider mb-1.5">Party Size</label>
                  <input type="number" min="1" className="w-full border border-[#D5D0C8] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#6B7C5C] focus:outline-none" placeholder="e.g. 6" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#6B6560] uppercase tracking-wider mb-1.5">Preferred Date</label>
                  <input type="date" className="w-full border border-[#D5D0C8] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#6B7C5C] focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#6B6560] uppercase tracking-wider mb-1.5">Preferred Time</label>
                  <select className="w-full border border-[#D5D0C8] rounded-lg px-4 py-3 text-sm text-[#4A4540] focus:ring-2 focus:ring-[#6B7C5C] focus:outline-none">
                    <option>Lunch (11am–2pm)</option>
                    <option>Early Dinner (5pm–6:30pm)</option>
                    <option>Dinner (6:30pm–9pm)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#6B6560] uppercase tracking-wider mb-1.5">Occasion</label>
                <input type="text" className="w-full border border-[#D5D0C8] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#6B7C5C] focus:outline-none" placeholder="Birthday, anniversary, business dinner..." />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#6B6560] uppercase tracking-wider mb-1.5">Dietary Needs</label>
                <input type="text" className="w-full border border-[#D5D0C8] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#6B7C5C] focus:outline-none" placeholder="Vegan, gluten-free, allergies..." />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#6B6560] uppercase tracking-wider mb-1.5">Email</label>
                  <input type="email" className="w-full border border-[#D5D0C8] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#6B7C5C] focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#6B6560] uppercase tracking-wider mb-1.5">Phone</label>
                  <input type="tel" className="w-full border border-[#D5D0C8] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#6B7C5C] focus:outline-none" />
                </div>
              </div>
              <button type="submit" className="w-full bg-[#1C1917] hover:bg-[#2C2921] text-white font-semibold py-4 rounded-xl transition-colors">
                Request Reservation
              </button>
            </form>
          </div>

          {/* Private Event Inquiry */}
          <div className="bg-white border border-[#E8E4DC] rounded-2xl p-7">
            <h2 className="text-xl font-bold text-[#1C1917] mb-1" style={{fontFamily: "Georgia, serif"}}>Private Event Inquiry</h2>
            <p className="text-[#6B6560] text-sm mb-6">Weddings, corporate events, large celebrations, and off-site catering.</p>
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#6B6560] uppercase tracking-wider mb-1.5">Event Type</label>
                <select className="w-full border border-[#D5D0C8] rounded-lg px-4 py-3 text-sm text-[#4A4540] focus:ring-2 focus:ring-[#6B7C5C] focus:outline-none">
                  <option>Wedding / Reception</option>
                  <option>Corporate Event</option>
                  <option>Birthday / Milestone Celebration</option>
                  <option>Nonprofit / Fundraiser</option>
                  <option>Government / Military Event</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#6B6560] uppercase tracking-wider mb-1.5">Event Date</label>
                  <input type="date" className="w-full border border-[#D5D0C8] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#6B7C5C] focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#6B6560] uppercase tracking-wider mb-1.5">Guest Count</label>
                  <input type="text" className="w-full border border-[#D5D0C8] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#6B7C5C] focus:outline-none" placeholder="e.g. 200" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#6B6560] uppercase tracking-wider mb-1.5">Venue / Location</label>
                <input type="text" className="w-full border border-[#D5D0C8] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#6B7C5C] focus:outline-none" placeholder="Venue name, city, or TBD" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#6B6560] uppercase tracking-wider mb-1.5">Budget Range</label>
                <select className="w-full border border-[#D5D0C8] rounded-lg px-4 py-3 text-sm text-[#4A4540] focus:ring-2 focus:ring-[#6B7C5C] focus:outline-none">
                  <option>Under $2,500</option>
                  <option>$2,500–$5,000</option>
                  <option>$5,000–$15,000</option>
                  <option>$15,000–$30,000</option>
                  <option>$30,000+</option>
                  <option>Flexible / Not sure yet</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#6B6560] uppercase tracking-wider mb-1.5">Tell us about your event</label>
                <textarea rows={3} className="w-full border border-[#D5D0C8] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#6B7C5C] focus:outline-none resize-none" placeholder="Vision, cuisine preferences, service style, anything helpful..." />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#6B6560] uppercase tracking-wider mb-1.5">Name</label>
                  <input type="text" className="w-full border border-[#D5D0C8] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#6B7C5C] focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#6B6560] uppercase tracking-wider mb-1.5">Email</label>
                  <input type="email" className="w-full border border-[#D5D0C8] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#6B7C5C] focus:outline-none" />
                </div>
              </div>
              <button type="submit" className="w-full bg-[#1C1917] hover:bg-[#2C2921] text-white font-semibold py-4 rounded-xl transition-colors">
                Submit Event Inquiry
              </button>
            </form>
          </div>
        </div>
        <p className="text-center text-[#9A9590] text-sm mt-8">We typically respond within 24 hours. Consultations are free and carry no obligation.</p>
      </section>

      {/* Location directory */}
      <section className="py-12 bg-[#F5F3EF] px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1C1917] mb-8 text-center" style={{fontFamily: "Georgia, serif"}}>Our Locations</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {locations.map((loc) => (
              <div key={loc.city} className="bg-white border border-[#E8E4DC] rounded-2xl p-6">
                <h3 className="font-bold text-[#1C1917] mb-2">{loc.city}</h3>
                <p className="text-[#6B6560] text-sm mb-2">{loc.addr}</p>
                <a href={`tel:${loc.phone.replace(/\D/g,"")}`} className="text-[#6B7C5C] font-semibold text-sm hover:underline">{loc.phone}</a>
                <p className="text-[#9A9590] text-xs mt-2">{loc.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#FAFAF8] border-t border-[#E8E4DC] text-center px-4">
        <p className="text-[#6B6560] mb-4">Prefer to talk? We love that.</p>
        <a href="tel:9045550100" className="text-3xl font-bold text-[#1C1917]">(904) 555-0100</a>
        <p className="text-[#9A9590] text-xs mt-2">Talk With Our Team — Mon–Fri 9am–6pm</p>
      </section>
    </div>
  );
}
