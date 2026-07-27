import Link from "next/link";

const conditions = ["Hypertension","Type 2 Diabetes","Thyroid Disorders","High Cholesterol","Asthma & COPD","Anxiety & Depression","Arthritis","Obesity & Weight","Urinary Tract Infections","Upper Respiratory Illness","Skin Conditions","Anemia"];

const faq = [
  { q: "What should I bring to my first appointment?", a: "Photo ID, insurance card, a list of current medications, and any prior medical records you have. Arrive 15 minutes early to complete paperwork." },
  { q: "How long are appointments?", a: "New patient visits are typically 45–60 minutes. Follow-up visits are 20–30 minutes. Annual physicals are 45 minutes." },
  { q: "Do you offer telehealth?", a: "Yes. Most follow-up visits and many sick visits can be done via secure video. Call to confirm eligibility for your visit type." },
  { q: "What if I need a specialist referral?", a: "We coordinate referrals to trusted specialists in our network. Most referrals are processed within 1 business day." },
  { q: "Is my insurance accepted?", a: "We accept most major insurance plans including Blue Cross, Aetna, Cigna, United Healthcare, Humana, Medicare, and Medicaid. Call to verify." },
];

export default function PrimaryCare() {
  return (
    <div className="bg-white font-sans">
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-[#0C4A6E] text-xl tracking-tight">Bay<span className="text-[#0891B2]">Medical</span></Link>
          <div className="hidden lg:flex gap-6 text-sm font-semibold text-gray-600">
            <Link href="services" className="hover:text-[#0891B2]">Services</Link>
            <Link href="primary-care" className="text-[#0891B2]">Primary Care</Link>
            <Link href="pediatrics" className="hover:text-[#0891B2]">Pediatrics</Link>
            <Link href="about" className="hover:text-[#0891B2]">Providers</Link>
          </div>
          <Link href="contact" className="bg-[#0891B2] hover:bg-[#0779a0] text-white font-bold px-4 py-2 rounded text-sm transition-colors">Book Appointment</Link>
        </div>
      </nav>

      {/* Two-col hero */}
      <section className="py-14 px-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3">
            <p className="text-[#0891B2] text-xs font-bold uppercase tracking-[0.25em] mb-3">BayMedical Primary Care</p>
            <h1 className="text-3xl lg:text-5xl font-black text-[#0C4A6E] leading-tight mb-4">Primary Care for Adults</h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">Your health home base. We manage chronic conditions, keep you up to date on screenings, and are there when you&apos;re sick — with same-day appointments for urgent needs.</p>
            <div className="rounded-2xl overflow-hidden aspect-video mb-6">
              <img src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=1200&q=80&auto=format&fit=crop" alt="Primary care physician" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Sticky sidebar appointment form */}
          <div className="lg:col-span-2 lg:sticky lg:top-20">
            <div className="bg-[#0C4A6E] rounded-2xl p-6 text-white">
              <h2 className="font-black text-lg mb-1">Book a Visit</h2>
              <p className="text-cyan-200 text-sm mb-5">Same-day availability most days.</p>
              <form className="space-y-3">
                <input className="border-0 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:ring-2 focus:ring-[#0891B2] bg-white text-gray-800" placeholder="Full Name" />
                <input type="tel" className="border-0 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:ring-2 focus:ring-[#0891B2] bg-white text-gray-800" placeholder="Phone Number" />
                <select className="border-0 rounded-lg px-4 py-3 text-base bg-white w-full focus:outline-none focus:ring-2 focus:ring-[#0891B2] text-gray-700">
                  <option>Visit Type</option>
                  <option>New Patient</option>
                  <option>Annual Physical</option>
                  <option>Sick Visit</option>
                  <option>Chronic Disease Follow-Up</option>
                  <option>Telehealth</option>
                </select>
                <select className="border-0 rounded-lg px-4 py-3 text-base bg-white w-full focus:outline-none focus:ring-2 focus:ring-[#0891B2] text-gray-700">
                  <option>Insurance</option>
                  <option>Blue Cross Blue Shield</option>
                  <option>Aetna</option>
                  <option>Cigna</option>
                  <option>United Healthcare</option>
                  <option>Medicare / Medicaid</option>
                  <option>Self-Pay</option>
                </select>
                <button type="submit" className="w-full bg-[#0891B2] hover:bg-[#0779a0] text-white font-black py-3 rounded-lg transition-colors">Request Appointment</button>
              </form>
              <p className="text-cyan-300 text-xs mt-3 text-center">We&apos;ll call to confirm within 2 hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions grid */}
      <section className="py-14 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-black text-[#0C4A6E] mb-6">Conditions We Treat</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {conditions.map((c) => (
              <div key={c} className="bg-[#F0F9FF] border border-[#0891B2]/20 rounded-lg px-3 py-2.5 text-sm text-gray-700 font-semibold">{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-black text-[#0C4A6E] mb-6">Patient Questions</h2>
          <div className="space-y-4">
            {faq.map((item) => (
              <div key={item.q} className="border border-gray-100 rounded-xl p-5">
                <p className="font-bold text-[#0C4A6E] mb-2">{item.q}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
