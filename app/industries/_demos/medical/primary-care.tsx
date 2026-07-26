import Link from "next/link";

const conditions = [
  "Hypertension (High Blood Pressure)","Type 2 Diabetes","Asthma & COPD","High Cholesterol","Thyroid Disorders","Anxiety & Depression","Arthritis","Obesity / Weight Management","GERD / Acid Reflux","Sleep Disorders",
];

export default function PrimaryCare() {
  return (
    <div className="bg-white font-sans">
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-[#0C4A6E] text-xl">Bay<span className="text-[#0891B2]">Medical</span></Link>
          <div className="hidden lg:flex gap-6 text-sm font-semibold text-gray-600">
            <Link href="services" className="hover:text-[#0891B2]">Services</Link>
            <Link href="primary-care" className="text-[#0891B2]">Primary Care</Link>
            <Link href="pediatrics" className="hover:text-[#0891B2]">Pediatrics</Link>
            <Link href="about" className="hover:text-[#0891B2]">Providers</Link>
          </div>
          <Link href="contact" className="bg-[#0891B2] hover:bg-[#0779a0] text-white font-bold px-4 py-2 rounded text-sm transition-colors">Book Appointment</Link>
        </div>
      </nav>

      {/* Teal header */}
      <section className="bg-[#0891B2] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-cyan-100 text-xs font-semibold mb-2">
            <Link href="home" className="hover:text-white">Home</Link> › <Link href="services" className="hover:text-white">Services</Link> › Primary Care
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-white mb-2">Primary Care</h1>
          <p className="text-white/70 text-lg">Comprehensive, ongoing healthcare for adults and families.</p>
        </div>
      </section>

      {/* Two-column: conditions + sticky booking form */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left content — 2 cols */}
          <div className="lg:col-span-2 space-y-10">
            {/* What's included */}
            <div>
              <h2 className="text-xl font-black text-[#0C4A6E] mb-4">What&apos;s Included in a Primary Care Visit</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Comprehensive medical history review","Physical exam and vital signs","Preventive screenings (age-appropriate)","Chronic disease monitoring & management","Prescription management and refills","Lab orders and result review","Referrals to specialists when needed","Personalized care plan & goal-setting"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                    <span className="text-[#0891B2] font-bold mt-0.5 flex-shrink-0">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Conditions we manage */}
            <div>
              <h2 className="text-xl font-black text-[#0C4A6E] mb-4">Conditions We Manage</h2>
              <div className="flex flex-wrap gap-2">
                {conditions.map((c) => (
                  <span key={c} className="bg-[#F0F9FF] border border-[#0891B2]/20 text-[#0C4A6E] text-sm font-semibold px-3 py-1.5 rounded-full">{c}</span>
                ))}
              </div>
            </div>

            {/* First visit steps */}
            <div>
              <h2 className="text-xl font-black text-[#0C4A6E] mb-5">Your First Visit — What to Expect</h2>
              <div className="space-y-4">
                {[
                  ["Arrive 15 min early","Bring your photo ID, insurance card, and a list of current medications."],
                  ["Complete new patient forms","Or fill them out online in advance — we'll send a link when you book."],
                  ["Meet your provider","Your physician will review your medical history, current concerns, and goals."],
                  ["Lab work if needed","We have an in-house lab — no separate visit for most routine tests."],
                  ["Leave with a plan","Clear next steps, follow-up schedule, and any prescriptions ordered."],
                ].map(([step, desc], i) => (
                  <div key={i} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#0891B2] text-white text-sm font-black flex items-center justify-center flex-shrink-0">{i + 1}</span>
                    <div>
                      <p className="font-bold text-[#0C4A6E] text-sm">{step}</p>
                      <p className="text-gray-500 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky appointment form */}
          <div className="lg:sticky lg:top-24 self-start">
            <div className="border-2 border-[#0891B2]/30 rounded-2xl p-6 bg-[#F0F9FF]">
              <h3 className="font-black text-[#0C4A6E] text-lg mb-1">Book a Primary Care Visit</h3>
              <p className="text-gray-400 text-sm mb-4">Same-day and next-day available.</p>
              <form className="space-y-3">
                <input className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full bg-white focus:outline-none focus:border-[#0891B2]" placeholder="Your Name" />
                <input type="tel" className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full bg-white focus:outline-none focus:border-[#0891B2]" placeholder="Phone Number" />
                <select className="border border-gray-200 rounded-lg px-4 py-3 text-base bg-white w-full focus:outline-none focus:border-[#0891B2] text-gray-700">
                  <option>Visit Type</option>
                  <option>New Patient</option>
                  <option>Established Patient</option>
                  <option>Annual Physical</option>
                  <option>Sick Visit</option>
                  <option>Follow-Up</option>
                </select>
                <select className="border border-gray-200 rounded-lg px-4 py-3 text-base bg-white w-full focus:outline-none focus:border-[#0891B2] text-gray-700">
                  <option>Preferred Provider</option>
                  <option>Dr. Maria Santos, MD</option>
                  <option>Dr. James Park, MD</option>
                  <option>Dr. Robert Williams, MD</option>
                  <option>No preference</option>
                </select>
                <textarea className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full h-20 resize-none bg-white focus:outline-none focus:border-[#0891B2]" placeholder="Reason for visit (optional)" />
                <button type="submit" className="bg-[#0891B2] hover:bg-[#0779a0] text-white font-black px-6 py-3 rounded w-full transition-colors">Request Appointment</button>
              </form>
              <div className="mt-4 pt-4 border-t border-[#0891B2]/20">
                <p className="text-xs text-gray-400 text-center">Or call us directly: <a href="tel:8135550200" className="text-[#0891B2] font-bold">(813) 555-0200</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
