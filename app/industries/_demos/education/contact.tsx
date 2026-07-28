import Link from "next/link";

export default function EducationContact() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }} className="bg-white">
      {/* Nav */}
      <nav className="bg-[#FAFAF7] border-b border-[#d4c9a8] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <Link href="home" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#1B2B5B] rounded-full flex items-center justify-center">
              <span style={{ fontFamily: "Georgia, serif" }} className="text-[#B8860B] text-xs font-bold italic">A</span>
            </div>
            <div>
              <span style={{ fontFamily: "Georgia, serif" }} className="italic text-[#1B2B5B] text-xs">Aquinas</span>
              <span className="block text-[#1B2B5B] text-xs font-bold tracking-[0.15em] uppercase leading-none">Academy</span>
            </div>
          </Link>
          <div className="hidden lg:flex items-center gap-7 text-sm text-gray-600">
            <Link href="about" className="hover:text-[#1B2B5B] transition-colors">About</Link>
            <Link href="admissions" className="hover:text-[#1B2B5B] transition-colors">Admissions</Link>
            <Link href="contact" className="text-[#1B2B5B] font-semibold">Contact</Link>
          </div>
          <Link href="contact" className="bg-[#1B2B5B] hover:bg-[#152248] text-white font-semibold px-4 py-2 rounded text-sm transition-colors">
            Schedule a Tour
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-[#1B2B5B] py-16 px-6 text-center">
        <h1 style={{ fontFamily: "Georgia, serif" }} className="text-4xl text-white font-normal italic mb-3">
          Contact & Tour Request
        </h1>
        <p className="text-white/60 text-base max-w-xl mx-auto">
          We respond to all inquiries within one business day. Tours are available Monday through Friday.
        </p>
      </section>

      {/* Two-column layout */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Inquiry form */}
          <div className="lg:col-span-2">
            <p className="text-[#B8860B] text-xs font-bold uppercase tracking-widest mb-4">Inquiry Form</p>
            <h2 style={{ fontFamily: "Georgia, serif" }} className="text-2xl text-[#1B2B5B] font-normal italic mb-7">
              Tell us about your family
            </h2>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Parent / Guardian Name</label>
                  <input className="border border-gray-200 rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:border-[#1B2B5B]" placeholder="Full name" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Email Address</label>
                  <input type="email" className="border border-gray-200 rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:border-[#1B2B5B]" placeholder="your@email.com" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Phone Number</label>
                  <input type="tel" className="border border-gray-200 rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:border-[#1B2B5B]" placeholder="(813) XXX-XXXX" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Grade Applying For</label>
                  <select className="border border-gray-200 rounded-lg px-4 py-3 text-sm bg-white w-full focus:outline-none focus:border-[#1B2B5B] text-gray-700">
                    <option>Select a grade</option>
                    <option>PK3</option>
                    <option>PK4</option>
                    <option>Kindergarten</option>
                    <option>Grade 1</option>
                    <option>Grade 2</option>
                    <option>Grade 3</option>
                    <option>Grade 4</option>
                    <option>Grade 5</option>
                    <option>Grade 6</option>
                    <option>Grade 7</option>
                    <option>Grade 8</option>
                    <option>Grade 9</option>
                    <option>Grade 10</option>
                    <option>Grade 11</option>
                    <option>Grade 12</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Current School</label>
                <input className="border border-gray-200 rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:border-[#1B2B5B]" placeholder="School name and city" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">How Did You Hear About Us?</label>
                <select className="border border-gray-200 rounded-lg px-4 py-3 text-sm bg-white w-full focus:outline-none focus:border-[#1B2B5B] text-gray-700">
                  <option>Select one</option>
                  <option>Current or former Aquinas family</option>
                  <option>Parish recommendation</option>
                  <option>Google search</option>
                  <option>Social media</option>
                  <option>Open house</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Questions or Comments</label>
                <textarea className="border border-gray-200 rounded-lg px-4 py-3 text-sm w-full h-32 resize-none focus:outline-none focus:border-[#1B2B5B]" placeholder="What would you like to know about Aquinas Academy?" />
              </div>
              <button type="submit" className="w-full bg-[#1B2B5B] hover:bg-[#152248] text-white font-semibold py-4 rounded-lg transition-colors">
                Submit Inquiry
              </button>
              <p className="text-center text-gray-400 text-xs">We respond within one business day. All inquiries are confidential.</p>
            </form>
          </div>

          {/* Right sidebar */}
          <div className="space-y-8">
            {/* Tour CTA */}
            <div className="bg-[#1B2B5B] rounded-xl p-7 text-center">
              <p style={{ fontFamily: "Georgia, serif" }} className="text-[#B8860B] italic text-base mb-2">Open House</p>
              <p className="text-white font-bold text-sm mb-1">January 15th, 2026</p>
              <p className="text-white/50 text-xs mb-5">9:00am – 11:00am · Main Campus</p>
              <Link href="admissions" className="block w-full bg-[#B8860B] hover:bg-[#a07609] text-white font-semibold py-3 rounded transition-colors text-sm">
                Reserve a Spot
              </Link>
            </div>

            {/* Campus info */}
            <div>
              <p className="text-[#B8860B] text-xs font-bold uppercase tracking-widest mb-4">Campus</p>
              <div className="space-y-3 text-sm text-gray-600">
                <div>
                  <p className="font-semibold text-[#1B2B5B]">Aquinas Academy</p>
                  <p>4100 S. Lois Avenue</p>
                  <p>Tampa, FL 33611</p>
                </div>
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Office Hours</p>
                  <p>Monday – Friday: 7:30am – 4:30pm</p>
                </div>
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Admissions Office</p>
                  <a href="tel:8136431000" className="text-[#1B2B5B] font-semibold hover:text-[#B8860B] transition-colors">(813) 643-1000</a>
                  <p className="text-gray-400 text-xs mt-0.5">admissions@aquinastampa.org</p>
                </div>
              </div>
            </div>

            {/* Map callout */}
            <div className="bg-[#FAFAF7] border border-[#e8dfc8] rounded-xl p-5 text-center">
              <p className="text-xs text-gray-500 mb-3">Located in South Tampa, minutes from Gandy Bridge and Dale Mabry Hwy.</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-[#1B2B5B] text-sm font-semibold hover:text-[#B8860B] transition-colors">
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
