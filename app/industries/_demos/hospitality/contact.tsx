import Link from "next/link";

export default function HospitalityContact() {
  return (
    <div className="bg-[#F9F6F0] font-serif">
      <nav className="bg-[#F9F6F0] border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
          <Link href="home" className="text-2xl font-bold tracking-tight text-stone-800 italic">Terra Bella<span className="not-italic font-light text-stone-500"> Events</span></Link>
          <div className="hidden lg:flex items-center gap-8">
            <Link href="weddings" className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-400 hover:text-stone-800">Weddings</Link>
            <Link href="catering" className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-400 hover:text-stone-800">Catering</Link>
            <Link href="about" className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-400 hover:text-stone-800">About</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="relative min-h-[45vh] flex items-end overflow-hidden">
        <img src="https://images.unsplash.com/photo-1519671282429-b1f99c9e9dca?w=1800&q=80&auto=format&fit=crop" alt="Elegant event setup" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/70 to-stone-900/20" />
        <div className="relative max-w-6xl mx-auto px-6 pb-14 w-full text-center">
          <p className="font-sans text-xs tracking-[0.2em] text-stone-300 uppercase mb-4">Let&apos;s Talk</p>
          <h1 className="text-5xl font-bold text-white italic mb-4">Tell Us About Your Event</h1>
          <p className="text-stone-300 font-sans max-w-md mx-auto">We respond to all inquiries within one business day. No commitment required to get a proposal.</p>
        </div>
      </section>

      {/* Two-column forms */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Event inquiry form */}
          <div>
            <h2 className="text-2xl font-bold text-stone-800 italic mb-6">Request a Proposal</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">First Name</label>
                  <input className="border border-stone-200 bg-white rounded-lg px-4 py-3 font-sans text-base text-stone-700 w-full focus:outline-none focus:border-stone-500" placeholder="First" />
                </div>
                <div>
                  <label className="block font-sans text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">Last Name</label>
                  <input className="border border-stone-200 bg-white rounded-lg px-4 py-3 font-sans text-base text-stone-700 w-full focus:outline-none focus:border-stone-500" placeholder="Last" />
                </div>
              </div>
              <div>
                <label className="block font-sans text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">Email</label>
                <input type="email" className="border border-stone-200 bg-white rounded-lg px-4 py-3 font-sans text-base text-stone-700 w-full focus:outline-none focus:border-stone-500" placeholder="you@email.com" />
              </div>
              <div>
                <label className="block font-sans text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">Phone</label>
                <input type="tel" className="border border-stone-200 bg-white rounded-lg px-4 py-3 font-sans text-base text-stone-700 w-full focus:outline-none focus:border-stone-500" placeholder="(813) 555-0000" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">Event Type</label>
                  <select className="border border-stone-200 bg-white rounded-lg px-4 py-3 font-sans text-base text-stone-700 w-full focus:outline-none focus:border-stone-500">
                    <option>Select type</option>
                    <option>Wedding Reception</option>
                    <option>Rehearsal Dinner</option>
                    <option>Corporate Event</option>
                    <option>Team Catering</option>
                    <option>Client Dinner</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block font-sans text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">Est. Guests</label>
                  <input className="border border-stone-200 bg-white rounded-lg px-4 py-3 font-sans text-base text-stone-700 w-full focus:outline-none focus:border-stone-500" placeholder="e.g. 75" />
                </div>
              </div>
              <div>
                <label className="block font-sans text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">Event Date</label>
                <input type="date" className="border border-stone-200 bg-white rounded-lg px-4 py-3 font-sans text-base text-stone-700 w-full focus:outline-none focus:border-stone-500" />
              </div>
              <div>
                <label className="block font-sans text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">Tell Us More</label>
                <textarea className="border border-stone-200 bg-white rounded-lg px-4 py-3 font-sans text-base text-stone-700 w-full h-28 resize-none focus:outline-none focus:border-stone-500" placeholder="Venue, budget range, vision, dietary needs, anything that helps us understand what you&apos;re planning..." />
              </div>
              <button type="submit" className="bg-stone-800 hover:bg-stone-900 text-[#F9F6F0] font-sans font-semibold px-8 py-4 uppercase text-xs tracking-widest w-full transition-colors">Send Inquiry</button>
            </form>
          </div>

          {/* Contact info + quick contact */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-stone-800 italic mb-6">Quick Contact</h2>
              <form className="space-y-4">
                <input className="border border-stone-200 bg-white rounded-lg px-4 py-3 font-sans text-base text-stone-700 w-full focus:outline-none focus:border-stone-500" placeholder="Your Name" />
                <input type="email" className="border border-stone-200 bg-white rounded-lg px-4 py-3 font-sans text-base text-stone-700 w-full focus:outline-none focus:border-stone-500" placeholder="Email Address" />
                <textarea className="border border-stone-200 bg-white rounded-lg px-4 py-3 font-sans text-base text-stone-700 w-full h-24 resize-none focus:outline-none focus:border-stone-500" placeholder="Quick question or message..." />
                <button type="submit" className="border border-stone-300 hover:border-stone-800 text-stone-700 hover:text-stone-900 font-sans font-semibold px-8 py-3 uppercase text-xs tracking-widest w-full transition-colors">Send Message</button>
              </form>
            </div>
            <div className="border-t border-stone-200 pt-8 space-y-5">
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1">Phone</p>
                <p className="text-stone-700 font-sans">(813) 555-0220</p>
              </div>
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1">Email</p>
                <p className="text-stone-700 font-sans">hello@terrabellaevents.com</p>
              </div>
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1">Office Hours</p>
                <p className="text-stone-700 font-sans text-sm">Mon–Fri 9am–6pm · Sat 10am–3pm</p>
              </div>
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1">Service Area</p>
                <p className="text-stone-700 font-sans text-sm">Tampa, St. Pete, Clearwater, and surrounding areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "Talk With Our Team" CTA */}
      <section className="bg-stone-800 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#F9F6F0] italic mb-4">Not Sure Where to Start?</h2>
        <p className="text-stone-400 font-sans mb-8 max-w-md mx-auto">Call us. We&apos;re happy to talk through your event with no obligation — just a conversation to see if we&apos;re a good fit.</p>
        <p className="text-[#F9F6F0] font-bold font-sans text-2xl">(813) 555-0220</p>
      </section>
    </div>
  );
}
