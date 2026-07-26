import Link from "next/link";

const wellChildSchedule = [
  { age: "Newborn", visits: "Hospital discharge, 2–5 days" },
  { age: "1 month", visits: "Growth check, feeding assessment" },
  { age: "2 months", visits: "Vaccines: DTaP, IPV, Hib, PCV, Rotavirus" },
  { age: "4 months", visits: "Vaccines: DTaP, IPV, Hib, PCV, Rotavirus" },
  { age: "6 months", visits: "Vaccines: DTaP, IPV, Hib, PCV, Rotavirus, Flu" },
  { age: "9 months", visits: "Developmental screening, iron check" },
  { age: "12 months", visits: "Vaccines: MMR, Varicella, Hep A" },
  { age: "15 months", visits: "Vaccines: DTaP, Hib, PCV" },
  { age: "18 months", visits: "Autism screening, developmental milestones" },
  { age: "2 years", visits: "Vaccines: Hep A. Full developmental assessment" },
  { age: "3–5 years", visits: "Annual well visit + vision & hearing screening" },
  { age: "6–12 years", visits: "Annual well visit + BMI, dental, vision" },
  { age: "13–18 years", visits: "Annual well visit + mental health screen, STI education" },
];

const vaccines = [
  "DTaP (Diphtheria, Tetanus, Pertussis)",
  "IPV (Polio)",
  "MMR (Measles, Mumps, Rubella)",
  "Varicella (Chickenpox)",
  "Hib (Haemophilus influenzae type b)",
  "PCV (Pneumococcal)",
  "Hepatitis A & B",
  "Rotavirus",
  "Influenza (annual)",
  "HPV (ages 11–12)",
  "Meningococcal (MenACWY)",
  "COVID-19",
];

export default function Pediatrics() {
  return (
    <div className="bg-white font-sans">
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-[#0C4A6E] text-xl">Bay<span className="text-[#0891B2]">Medical</span></Link>
          <div className="hidden lg:flex gap-6 text-sm font-semibold text-gray-600">
            <Link href="services" className="hover:text-[#0891B2]">Services</Link>
            <Link href="primary-care" className="hover:text-[#0891B2]">Primary Care</Link>
            <Link href="pediatrics" className="text-[#0891B2]">Pediatrics</Link>
            <Link href="about" className="hover:text-[#0891B2]">Providers</Link>
          </div>
          <Link href="contact" className="bg-[#0891B2] hover:bg-[#0779a0] text-white font-bold px-4 py-2 rounded text-sm transition-colors">Book Appointment</Link>
        </div>
      </nav>

      {/* Softer header — lighter teal */}
      <section className="bg-[#E0F7FA] border-b border-[#0891B2]/20 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-[#0891B2] text-xs font-bold uppercase tracking-[0.25em] mb-3">Pediatric Care</p>
            <h1 className="text-4xl font-black text-[#0C4A6E] leading-tight mb-4">Caring for Kids from Birth Through 18</h1>
            <p className="text-gray-600 leading-relaxed">Dr. Emily Chen and our pediatric team provide comprehensive well-child visits, immunizations, developmental screenings, and sick care in a warm, kid-friendly environment.</p>
          </div>
          <div className="bg-[#0891B2]/10 rounded-2xl p-6 border border-[#0891B2]/20">
            <p className="font-black text-[#0C4A6E] mb-4">Quick Book — Pediatric Visit</p>
            <form className="space-y-3">
              <input className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full bg-white focus:outline-none focus:border-[#0891B2]" placeholder="Child's Name" />
              <input className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full bg-white focus:outline-none focus:border-[#0891B2]" placeholder="Parent's Phone" />
              <select className="border border-gray-200 rounded-lg px-4 py-3 text-base bg-white w-full focus:outline-none focus:border-[#0891B2] text-gray-700">
                <option>Visit Type</option>
                <option>Well-Child Visit</option>
                <option>Sick Visit</option>
                <option>Immunizations Only</option>
                <option>Sports Physical</option>
                <option>New Patient</option>
              </select>
              <button type="submit" className="bg-[#0891B2] hover:bg-[#0779a0] text-white font-black px-6 py-3 rounded w-full transition-colors">Book Now</button>
            </form>
          </div>
        </div>
      </section>

      {/* Well-child schedule as visual timeline */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-[#0C4A6E] mb-2">Well-Child Visit Schedule</h2>
          <p className="text-gray-500 mb-8">AAP-recommended schedule for preventive care visits from birth through 18 years.</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0C4A6E] text-white">
                  <th className="text-left px-5 py-3 font-bold">Age</th>
                  <th className="text-left px-5 py-3 font-bold">Visit Focus</th>
                  <th className="text-left px-5 py-3 font-bold">Schedule</th>
                </tr>
              </thead>
              <tbody>
                {wellChildSchedule.map((row, i) => (
                  <tr key={row.age} className={i % 2 === 0 ? "bg-white" : "bg-[#F0F9FF]"}>
                    <td className="px-5 py-3 font-bold text-[#0C4A6E]">{row.age}</td>
                    <td className="px-5 py-3 text-gray-600">{row.visits}</td>
                    <td className="px-5 py-3">
                      <Link href="contact" className="text-[#0891B2] font-bold text-xs hover:underline">Book →</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Vaccine grid */}
      <section className="bg-[#F0F9FF] border-y border-blue-100 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-[#0C4A6E] mb-2">Childhood Vaccines We Provide</h2>
          <p className="text-gray-500 mb-6">We follow the CDC and AAP immunization schedule. All vaccines available in-office — no referral needed.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {vaccines.map((v) => (
              <div key={v} className="bg-white border border-[#0891B2]/20 rounded-xl px-4 py-3 flex items-center gap-3">
                <span className="text-[#0891B2] font-black text-lg flex-shrink-0">💉</span>
                <span className="text-sm font-semibold text-gray-700">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency symptom callout */}
      <section className="bg-[#DC2626] py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-xl font-black text-white mb-2">When to Go to the ER</h2>
            <p className="text-white/80 text-sm">If your child has any of these symptoms, go to the emergency room immediately:</p>
          </div>
          <ul className="grid grid-cols-2 gap-2">
            {["Difficulty breathing","High fever (under 3 months)","Seizure or convulsion","Severe allergic reaction","Unresponsive or lethargic","Severe dehydration","Chest pain","Head injury with vomiting"].map((s) => (
              <li key={s} className="flex items-start gap-2 text-white text-sm font-semibold">
                <span className="text-yellow-300 flex-shrink-0">⚠️</span>{s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Parent FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-[#0C4A6E] mb-8">Parent FAQ</h2>
          <div className="space-y-5">
            {[
              ["Do you accept same-day sick child appointments?", "Yes. We reserve morning and afternoon slots for same-day sick visits. Call by 8am for best availability. Walk-in also available during urgent care hours."],
              ["My child is afraid of shots. What do you do?", "Dr. Chen and our nurses use comfort positioning, distraction techniques, and numbing spray to make immunizations as easy as possible for young children."],
              ["Can both my kids see the same provider?", "Absolutely. We encourage family continuity — you can schedule back-to-back appointments for multiple children with the same provider."],
              ["Do you see teens for mental health concerns?", "Yes. We screen for anxiety, depression, and substance use at every annual teen visit and can provide referrals to pediatric mental health specialists."],
              ["What if I have questions between visits?", "We offer secure patient portal messaging and nurse triage by phone during business hours. Telehealth follow-ups are also available."],
            ].map(([q, a]) => (
              <div key={q} className="border-b border-gray-100 pb-5">
                <p className="font-black text-[#0C4A6E] mb-2">{q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
