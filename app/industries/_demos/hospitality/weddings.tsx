// weddings: elegant but LIGHT, 4-step process, proposal form, gallery placeholders
import Link from "next/link";

const steps = [
  { num: "01", title: "Initial Inquiry", body: "Submit your event details and we&apos;ll respond within 24 hours to schedule a complimentary consultation." },
  { num: "02", title: "Menu Tasting", body: "We invite you to a private tasting session so you can experience the quality and make informed menu decisions." },
  { num: "03", title: "Proposal & Planning", body: "We create a detailed proposal with menu, staffing, timeline, and pricing. We revise until everything is right." },
  { num: "04", title: "Your Wedding Day", body: "Our team arrives early, sets up flawlessly, and handles every detail — so you can be present and enjoy your day." },
];

const menuHighlights = [
  { course: "Passed Appetizers", items: ["Prosciutto-wrapped melon", "Bruschetta with heirloom tomato", "Mini crab cakes with remoulade", "Brie en croûte with fig jam"] },
  { course: "Plated Dinner", items: ["Filet mignon with truffle demi-glace", "Pan-seared salmon with lemon beurre blanc", "Chicken Marsala with wild mushroom", "Vegetarian: Risotto Primavera"] },
  { course: "Dessert Station", items: ["Wedding cake service", "Assorted macarons and petit fours", "Fresh fruit display", "Espresso & dessert coffee station"] },
];

export default function HospitalityWeddings() {
  return (
    <div className="bg-[#FAFAF8] font-sans">
      <nav className="bg-[#FAFAF8] border-b border-[#E8E4DC]">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
          <div className="font-bold text-[#1C1917] text-lg tracking-tight">TERRA<span className="font-light text-[#6B7C5C]">BELLA</span></div>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#4A4540]">
            <Link href="home" className="hover:text-[#1C1917]">Home</Link>
            <Link href="catering" className="hover:text-[#1C1917]">Catering</Link>
            <Link href="weddings" className="text-[#6B7C5C] border-b border-[#6B7C5C]">Weddings</Link>
            <Link href="corporate-events" className="hover:text-[#1C1917]">Corporate</Link>
            <Link href="about" className="hover:text-[#1C1917]">Our Story</Link>
          </div>
          <Link href="contact" className="bg-[#1C1917] text-white font-semibold px-4 py-2 rounded text-sm hover:bg-[#2C2921] transition-colors">Request a Proposal</Link>
        </div>
      </nav>

      <div className="bg-[#F5F3EF] py-14 px-4 text-center border-b border-[#E8E4DC]">
        <p className="text-[#6B7C5C] text-xs font-bold uppercase tracking-[0.2em] mb-3">Wedding Services</p>
        <h1 className="text-4xl font-bold text-[#1C1917] mb-3" style={{fontFamily: "Georgia, serif"}}>Wedding Catering &amp; Reception Services</h1>
        <p className="text-[#6B6560] text-lg max-w-2xl mx-auto">Every detail of your reception matters to us — because it matters to you.</p>
      </div>

      {/* What's included */}
      <section className="py-14 bg-[#FAFAF8] px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-[#1C1917] mb-6" style={{fontFamily: "Georgia, serif"}}>What&apos;s Included</h2>
            <ul className="space-y-3">
              {["Full menu customization around your preferences and dietary needs", "Private tasting session for the engaged couple and up to 4 guests", "Day-of coordination with your venue and wedding planner", "Professional service staff — servers, captain, and team lead", "Setup, breakdown, and linen service", "Custom printed menu cards for tables", "Timeline planning with your event coordinator", "Post-event cleanup"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#4A4540]">
                  <span className="text-[#6B7C5C] font-bold mt-0.5 flex-shrink-0">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#E8E4DC] rounded-2xl aspect-[4/3] flex items-center justify-center text-[#B0A898] text-sm">
            Wedding Photo Placeholder
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 bg-[#F5F3EF] px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1C1917] text-center mb-10" style={{fontFamily: "Georgia, serif"}}>How It Works</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="text-4xl font-bold text-[#6B7C5C] mb-3">{s.num}</div>
                <h3 className="font-bold text-[#1C1917] mb-2">{s.title}</h3>
                <p className="text-[#6B6560] text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu highlights */}
      <section className="py-14 bg-[#FAFAF8] px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1C1917] mb-8" style={{fontFamily: "Georgia, serif"}}>Sample Menu Options</h2>
          <p className="text-[#6B6560] mb-8">All menus are customized. These are examples of what we&apos;ve created for past weddings.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {menuHighlights.map((course) => (
              <div key={course.course} className="bg-[#F5F3EF] border border-[#E8E4DC] rounded-2xl p-6">
                <h3 className="font-bold text-[#1C1917] mb-4 text-sm uppercase tracking-wider">{course.course}</h3>
                <ul className="space-y-2">
                  {course.items.map((item) => (
                    <li key={item} className="text-[#6B6560] text-sm flex items-start gap-2"><span className="text-[#6B7C5C]">·</span> {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-14 bg-[#F5F3EF] px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1C1917] mb-8 text-center" style={{fontFamily: "Georgia, serif"}}>Recent Weddings</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[1,2,3,4,5,6].map((n) => (
              <div key={n} className="bg-[#E8E4DC] aspect-square rounded-2xl flex items-center justify-center text-[#B0A898] text-xs">Photo {n}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-14 bg-[#FAFAF8] px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1C1917] text-center mb-8" style={{fontFamily: "Georgia, serif"}}>Request a Proposal</h2>
          <form className="bg-[#F5F3EF] border border-[#E8E4DC] rounded-2xl p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#6B6560] uppercase tracking-wider mb-1.5">Your Name</label>
                <input type="text" className="w-full border border-[#D5D0C8] bg-white rounded-lg px-4 py-3 text-sm text-[#1C1917] focus:ring-2 focus:ring-[#6B7C5C] focus:outline-none" placeholder="Name" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#6B6560] uppercase tracking-wider mb-1.5">Email Address</label>
                <input type="email" className="w-full border border-[#D5D0C8] bg-white rounded-lg px-4 py-3 text-sm text-[#1C1917] focus:ring-2 focus:ring-[#6B7C5C] focus:outline-none" placeholder="you@email.com" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#6B6560] uppercase tracking-wider mb-1.5">Wedding Date</label>
                <input type="date" className="w-full border border-[#D5D0C8] bg-white rounded-lg px-4 py-3 text-sm text-[#1C1917] focus:ring-2 focus:ring-[#6B7C5C] focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#6B6560] uppercase tracking-wider mb-1.5">Estimated Guest Count</label>
                <input type="text" className="w-full border border-[#D5D0C8] bg-white rounded-lg px-4 py-3 text-sm text-[#1C1917] focus:ring-2 focus:ring-[#6B7C5C] focus:outline-none" placeholder="e.g. 150" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-[#6B6560] uppercase tracking-wider mb-1.5">Venue / Location</label>
              <input type="text" className="w-full border border-[#D5D0C8] bg-white rounded-lg px-4 py-3 text-sm text-[#1C1917] focus:ring-2 focus:ring-[#6B7C5C] focus:outline-none" placeholder="Venue name or address" />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#6B6560] uppercase tracking-wider mb-1.5">Tell us about your vision</label>
              <textarea rows={4} className="w-full border border-[#D5D0C8] bg-white rounded-lg px-4 py-3 text-sm text-[#1C1917] focus:ring-2 focus:ring-[#6B7C5C] focus:outline-none resize-none" placeholder="Style, cuisine preferences, dietary needs, anything else you&apos;d like us to know..." />
            </div>
            <button type="submit" className="w-full bg-[#1C1917] hover:bg-[#2C2921] text-white font-semibold py-4 rounded-xl transition-colors">
              Request Proposal
            </button>
            <p className="text-[#9A9590] text-xs text-center">We typically respond within 24 hours. No obligation.</p>
          </form>
        </div>
      </section>
    </div>
  );
}
