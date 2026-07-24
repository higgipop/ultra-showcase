import Link from "next/link";

export default function HospitalityContactPage() {
  return (
    <div style={{fontFamily: "Georgia, 'Times New Roman', serif", backgroundColor: "#FBF7F2"}}>
      <div style={{backgroundColor: "#3B2A1A", color: "#D4B896"}} className="text-center text-xs py-2.5 tracking-[0.2em] uppercase font-sans">
        Reservations: (813) 555-0100 · Open Tue–Sun · Private dining inquiries welcome
      </div>

      {/* Hero */}
      <section className="pt-24 pb-16" style={{backgroundColor: "#1A120B"}}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p style={{color: "#D4B896", letterSpacing: "0.35em", fontSize: "0.7rem"}} className="uppercase mb-5 font-sans">Reservations & Events</p>
          <h1 style={{color: "#FBF7F2", fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 300, lineHeight: 1.2}} className="mb-6">
            Join Us.<br /><em>Reserve Your Table.</em>
          </h1>
          <p style={{color: "#B09880", lineHeight: 1.9}} className="font-sans font-light">
            For dining reservations and private event inquiries. We respond to all event proposals within 48 hours.
          </p>
        </div>
      </section>

      {/* Split forms */}
      <section className="py-20 px-6" style={{backgroundColor: "#FBF7F2"}}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">

          {/* Dining reservation */}
          <div style={{border: "1px solid rgba(212,184,150,0.4)"}} className="p-8">
            <p style={{color: "#9C7A56", letterSpacing: "0.2em", fontSize: "0.7rem"}} className="uppercase font-sans mb-5">Dining Reservation</p>
            <h2 style={{fontSize: "1.75rem", color: "#1A120B", fontWeight: 300}} className="mb-6">Reserve a Table</h2>
            <div className="space-y-4 font-sans">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label style={{color: "#9C7A56", fontSize: "0.65rem", letterSpacing: "0.15em"}} className="block uppercase mb-1.5">Name</label>
                  <input type="text" style={{border: "1px solid rgba(212,184,150,0.4)", backgroundColor: "white", color: "#3B2A1A"}} className="w-full px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4B896]" />
                </div>
                <div>
                  <label style={{color: "#9C7A56", fontSize: "0.65rem", letterSpacing: "0.15em"}} className="block uppercase mb-1.5">Party Size</label>
                  <select style={{border: "1px solid rgba(212,184,150,0.4)", backgroundColor: "white", color: "#3B2A1A"}} className="w-full px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4B896]">
                    {[1,2,3,4,5,6,7,8].map(n => <option key={n}>{n} {n === 1 ? "guest" : "guests"}</option>)}
                    <option>9+ guests (private dining)</option>
                  </select>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label style={{color: "#9C7A56", fontSize: "0.65rem", letterSpacing: "0.15em"}} className="block uppercase mb-1.5">Preferred Date</label>
                  <input type="date" style={{border: "1px solid rgba(212,184,150,0.4)", backgroundColor: "white", color: "#3B2A1A"}} className="w-full px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4B896]" />
                </div>
                <div>
                  <label style={{color: "#9C7A56", fontSize: "0.65rem", letterSpacing: "0.15em"}} className="block uppercase mb-1.5">Preferred Time</label>
                  <select style={{border: "1px solid rgba(212,184,150,0.4)", backgroundColor: "white", color: "#3B2A1A"}} className="w-full px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4B896]">
                    <option>5:00 PM</option>
                    <option>5:30 PM</option>
                    <option>6:00 PM</option>
                    <option>6:30 PM</option>
                    <option>7:00 PM</option>
                    <option>7:30 PM</option>
                    <option>8:00 PM</option>
                    <option>8:30 PM</option>
                  </select>
                </div>
              </div>
              <div>
                <label style={{color: "#9C7A56", fontSize: "0.65rem", letterSpacing: "0.15em"}} className="block uppercase mb-1.5">Occasion (optional)</label>
                <select style={{border: "1px solid rgba(212,184,150,0.4)", backgroundColor: "white", color: "#3B2A1A"}} className="w-full px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4B896]">
                  <option>No special occasion</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Business dinner</option>
                  <option>Engagement</option>
                  <option>Other celebration</option>
                </select>
              </div>
              <div>
                <label style={{color: "#9C7A56", fontSize: "0.65rem", letterSpacing: "0.15em"}} className="block uppercase mb-1.5">Dietary Notes</label>
                <textarea rows={2} placeholder="Allergies, dietary restrictions, special requests..." style={{border: "1px solid rgba(212,184,150,0.4)", backgroundColor: "white", color: "#3B2A1A"}} className="w-full px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4B896] resize-none" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label style={{color: "#9C7A56", fontSize: "0.65rem", letterSpacing: "0.15em"}} className="block uppercase mb-1.5">Email</label>
                  <input type="email" style={{border: "1px solid rgba(212,184,150,0.4)", backgroundColor: "white", color: "#3B2A1A"}} className="w-full px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4B896]" />
                </div>
                <div>
                  <label style={{color: "#9C7A56", fontSize: "0.65rem", letterSpacing: "0.15em"}} className="block uppercase mb-1.5">Phone</label>
                  <input type="tel" style={{border: "1px solid rgba(212,184,150,0.4)", backgroundColor: "white", color: "#3B2A1A"}} className="w-full px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4B896]" />
                </div>
              </div>
              <button style={{backgroundColor: "#3B2A1A", color: "#D4B896"}} className="w-full font-sans font-semibold py-4 tracking-widest text-xs uppercase hover:opacity-90 transition-opacity">
                Request Reservation
              </button>
              <p style={{color: "#9C7A56", fontSize: "0.65rem"}} className="text-center font-sans">We confirm all reservations within 4 hours.</p>
            </div>
          </div>

          {/* Private event inquiry */}
          <div style={{border: "1px solid rgba(212,184,150,0.4)", backgroundColor: "#F3EDE4"}} className="p-8">
            <p style={{color: "#9C7A56", letterSpacing: "0.2em", fontSize: "0.7rem"}} className="uppercase font-sans mb-5">Private Dining & Events</p>
            <h2 style={{fontSize: "1.75rem", color: "#1A120B", fontWeight: 300}} className="mb-6">Request an Event Proposal</h2>
            <div className="space-y-4 font-sans">
              <div>
                <label style={{color: "#9C7A56", fontSize: "0.65rem", letterSpacing: "0.15em"}} className="block uppercase mb-1.5">Event Type</label>
                <select style={{border: "1px solid rgba(212,184,150,0.4)", backgroundColor: "white", color: "#3B2A1A"}} className="w-full px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4B896]">
                  <option>Corporate Dinner / Client Entertainment</option>
                  <option>Wedding Reception</option>
                  <option>Rehearsal Dinner</option>
                  <option>Birthday Celebration</option>
                  <option>Holiday Party</option>
                  <option>Wine Dinner / Tasting</option>
                  <option>Other Private Event</option>
                </select>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label style={{color: "#9C7A56", fontSize: "0.65rem", letterSpacing: "0.15em"}} className="block uppercase mb-1.5">Guest Count</label>
                  <select style={{border: "1px solid rgba(212,184,150,0.4)", backgroundColor: "white", color: "#3B2A1A"}} className="w-full px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4B896]">
                    <option>10–20 guests</option>
                    <option>20–40 guests</option>
                    <option>40–60 guests</option>
                    <option>60–100 guests</option>
                    <option>100+ guests</option>
                  </select>
                </div>
                <div>
                  <label style={{color: "#9C7A56", fontSize: "0.65rem", letterSpacing: "0.15em"}} className="block uppercase mb-1.5">Event Date</label>
                  <input type="date" style={{border: "1px solid rgba(212,184,150,0.4)", backgroundColor: "white", color: "#3B2A1A"}} className="w-full px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4B896]" />
                </div>
              </div>
              <div>
                <label style={{color: "#9C7A56", fontSize: "0.65rem", letterSpacing: "0.15em"}} className="block uppercase mb-1.5">Approximate Budget Range</label>
                <select style={{border: "1px solid rgba(212,184,150,0.4)", backgroundColor: "white", color: "#3B2A1A"}} className="w-full px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4B896]">
                  <option>Under $2,000</option>
                  <option>$2,000 – $5,000</option>
                  <option>$5,000 – $10,000</option>
                  <option>$10,000 – $25,000</option>
                  <option>$25,000+</option>
                  <option>Flexible / TBD</option>
                </select>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label style={{color: "#9C7A56", fontSize: "0.65rem", letterSpacing: "0.15em"}} className="block uppercase mb-1.5">Name</label>
                  <input type="text" style={{border: "1px solid rgba(212,184,150,0.4)", backgroundColor: "white", color: "#3B2A1A"}} className="w-full px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4B896]" />
                </div>
                <div>
                  <label style={{color: "#9C7A56", fontSize: "0.65rem", letterSpacing: "0.15em"}} className="block uppercase mb-1.5">Email</label>
                  <input type="email" style={{border: "1px solid rgba(212,184,150,0.4)", backgroundColor: "white", color: "#3B2A1A"}} className="w-full px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4B896]" />
                </div>
              </div>
              <button style={{backgroundColor: "#1A120B", color: "#D4B896"}} className="w-full font-sans font-semibold py-4 tracking-widest text-xs uppercase hover:opacity-90 transition-opacity">
                Request Event Proposal
              </button>
              <p style={{color: "#9C7A56", fontSize: "0.65rem"}} className="text-center font-sans">Full proposals delivered within 48 hours.</p>
            </div>
          </div>
        </div>

        {/* Hours & location */}
        <div className="max-w-6xl mx-auto mt-10 grid sm:grid-cols-2 gap-6">
          <div style={{border: "1px solid rgba(212,184,150,0.4)"}} className="p-6 font-sans">
            <p style={{color: "#9C7A56", fontSize: "0.65rem", letterSpacing: "0.15em"}} className="uppercase mb-4">Hours</p>
            <div className="space-y-2 text-sm">
              {[
                { day: "Tuesday – Thursday", hours: "5:00 PM – 10:00 PM" },
                { day: "Friday – Saturday", hours: "5:00 PM – 11:00 PM" },
                { day: "Sunday", hours: "Brunch 10:30 AM – 2:30 PM · Dinner 5:00 – 9:00 PM" },
                { day: "Monday", hours: "Closed" },
              ].map((h) => (
                <div key={h.day} className="flex justify-between gap-4" style={{borderBottom: "1px solid rgba(212,184,150,0.15)", paddingBottom: "0.5rem"}}>
                  <span style={{color: "#6B5240"}}>{h.day}</span>
                  <span style={{color: "#3B2A1A", fontWeight: 600}} className="text-right">{h.hours}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{border: "1px solid rgba(212,184,150,0.4)"}} className="p-6 font-sans">
            <p style={{color: "#9C7A56", fontSize: "0.65rem", letterSpacing: "0.15em"}} className="uppercase mb-4">Location & Contact</p>
            <div className="space-y-2 text-sm" style={{color: "#6B5240"}}>
              <p>📍 1234 Harbour Island Blvd, Tampa FL 33602</p>
              <p>📞 (813) 555-0100</p>
              <p>✉️ reservations@restaurant.com</p>
              <p className="pt-2 text-xs" style={{color: "#9C7A56"}}>Valet parking available Thursday–Sunday · Street parking available · ADA accessible</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
