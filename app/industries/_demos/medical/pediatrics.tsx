import Link from "next/link";

const wellChildSchedule = [
  { age: "Newborn", visits: "2–5 days after birth", vaccines: "Hep B #2" },
  { age: "2 Months", visits: "Weight, length, head", vaccines: "DTaP, HiB, IPV, PCV, RV" },
  { age: "4 Months", visits: "Growth, development", vaccines: "DTaP, HiB, IPV, PCV, RV" },
  { age: "6 Months", visits: "Nutrition, milestones", vaccines: "DTaP, HiB, PCV, Flu (first dose)" },
  { age: "12 Months", visits: "Walking, speech", vaccines: "MMR, Varicella, Hep A" },
  { age: "18 Months", visits: "Language, behavior", vaccines: "DTaP, HiB, PCV, Hep A #2" },
  { age: "2 Years", visits: "MCHAT screening", vaccines: "Flu (annual)" },
  { age: "4–5 Years", visits: "Pre-K physical", vaccines: "DTaP, MMR, Varicella, IPV" },
  { age: "11–12 Years", visits: "Adolescent well-child", vaccines: "Tdap, HPV, MenACWY" },
];

const vaccines = ["Hepatitis A & B","DTaP / Tdap","MMR","Varicella","Polio (IPV)","Hib","PCV13","Meningococcal","HPV (Gardasil)","Influenza (Annual)","COVID-19","Rotavirus"];

export default function Pediatrics() {
  return (
    <div className="bg-white font-sans">
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-[#0C4A6E] text-xl tracking-tight">Bay<span className="text-[#0891B2]">Medical</span></Link>
          <div className="hidden lg:flex gap-6 text-sm font-semibold text-gray-600">
            <Link href="services" className="hover:text-[#0891B2]">Services</Link>
            <Link href="primary-care" className="hover:text-[#0891B2]">Primary Care</Link>
            <Link href="pediatrics" className="text-[#0891B2]">Pediatrics</Link>
            <Link href="about" className="hover:text-[#0891B2]">Providers</Link>
          </div>
          <Link href="contact" className="bg-[#0891B2] hover:bg-[#0779a0] text-white font-bold px-4 py-2 rounded text-sm transition-colors">Book Appointment</Link>
        </div>
      </nav>

      {/* Photo hero split */}
      <section className="py-14 px-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#0891B2] text-xs font-bold uppercase tracking-[0.25em] mb-3">Newborn Through Age 18</p>
            <h1 className="text-3xl lg:text-5xl font-black text-[#0C4A6E] leading-tight mb-4">Pediatric Care</h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-5">Well-child visits, vaccinations, developmental screenings, and same-day sick appointments — all with providers who love working with kids.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="contact" className="bg-[#0891B2] hover:bg-[#0779a0] text-white font-black px-6 py-3 rounded text-center transition-colors">Book Well-Child Visit</Link>
              <a href="tel:8138723200" className="border-2 border-[#0891B2] text-[#0891B2] font-bold px-6 py-3 rounded text-center hover:bg-[#0891B2] hover:text-white transition-colors">(813) 872-3200</a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80&auto=format&fit=crop" alt="Pediatric care" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Well-child schedule visual timeline */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#0891B2] text-xs font-bold uppercase tracking-[0.2em] mb-2">Schedule</p>
          <h2 className="text-2xl font-black text-[#0C4A6E] mb-8">Well-Child Visit Schedule</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[#0C4A6E] text-white">
                  <th className="text-left px-5 py-3 font-bold">Age</th>
                  <th className="text-left px-5 py-3 font-bold">Focus Areas</th>
                  <th className="text-left px-5 py-3 font-bold">Vaccines Due</th>
                </tr>
              </thead>
              <tbody>
                {wellChildSchedule.map((row, i) => (
                  <tr key={row.age} className={i % 2 === 0 ? "bg-white" : "bg-[#F0F9FF]"}>
                    <td className="px-5 py-3 font-black text-[#0891B2]">{row.age}</td>
                    <td className="px-5 py-3 text-gray-600">{row.visits}</td>
                    <td className="px-5 py-3 text-gray-500 text-xs">{row.vaccines}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Vaccine grid */}
      <section className="bg-[#F0F9FF] border-y border-[#0891B2]/10 py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-xl font-black text-[#0C4A6E] mb-4">Vaccines We Provide</h2>
              <p className="text-gray-500 leading-relaxed mb-6">We follow the CDC and AAP recommended immunization schedule. All vaccines are stocked on-site — no need to visit a pharmacy.</p>
              <div className="grid grid-cols-2 gap-2">
                {vaccines.map((v) => (
                  <div key={v} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-[#0891B2] font-black">✓</span> {v}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video">
              <img src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=900&q=80&auto=format&fit=crop" alt="Medical equipment" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency symptoms callout */}
      <section className="bg-[#DC2626] py-10 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-white font-black text-xl mb-2">When to Go to the ER</h2>
            <p className="text-red-100 text-sm">Some symptoms require immediate emergency care — not a same-day appointment.</p>
          </div>
          <ul className="space-y-1.5">
            {["Difficulty breathing or shortness of breath","High fever in infants under 3 months","Seizures or loss of consciousness","Severe allergic reaction","Uncontrolled bleeding or injury"].map((s) => (
              <li key={s} className="text-red-100 text-sm flex items-start gap-2"><span className="font-black">!</span>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Parent FAQ */}
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-black text-[#0C4A6E] mb-6">Parent FAQs</h2>
          <div className="space-y-4">
            {[
              { q: "Do you see newborns?", a: "Yes. We see newborns starting at 2–5 days after birth. We recommend scheduling your first visit before delivery if possible." },
              { q: "What if my child is sick and I can't get an appointment?", a: "We keep same-day slots open for sick children. Call first thing in the morning — we will get your child seen." },
              { q: "Do you offer sports physicals?", a: "Yes. We offer sports physicals year-round, typically as a brief 20-minute visit. Call ahead to confirm availability." },
              { q: "Can my child see the same doctor every visit?", a: "We strongly encourage continuity of care. We will do our best to schedule your child with their primary provider." },
            ].map((item) => (
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
