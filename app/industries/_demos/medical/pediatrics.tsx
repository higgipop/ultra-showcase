// pediatrics: well-child schedule table, vaccine section, urgency callout, parent FAQ
import Link from "next/link";

const wellChildVisits = [
  { age: "2 months", vaccines: "DTaP, IPV, Hib, PCV, RV", focus: "Feeding, sleep, social development" },
  { age: "4 months", vaccines: "DTaP, IPV, Hib, PCV, RV (2nd)", focus: "Motor milestones, tummy time" },
  { age: "6 months", vaccines: "DTaP, IPV, Hib, PCV, RV (3rd), Flu", focus: "Solid food introduction, sitting" },
  { age: "9 months", vaccines: "None (screening visit)", focus: "Stranger anxiety, crawling" },
  { age: "12 months", vaccines: "MMR, Varicella, Hep A, PCV (4th)", focus: "First words, walking, independence" },
  { age: "15 months", vaccines: "DTaP (4th), Hib (4th), Hep A (2nd)", focus: "Language explosion, independence" },
  { age: "18 months", vaccines: "Flu (annually after 6 months)", focus: "Autism screening (M-CHAT)" },
  { age: "24 months", vaccines: "Annual flu shot", focus: "Language (50+ words), socialization" },
  { age: "3 years", vaccines: "Annual flu shot", focus: "Preschool readiness, motor skills" },
  { age: "Annual 4–18", vaccines: "Per schedule (Tdap, HPV, Meningococcal)", focus: "Growth, development, mental health" },
];

const vaccineSchedule = [
  { name: "Hepatitis B (Hep B)", timing: "Birth · 1–2 months · 6–18 months" },
  { name: "DTaP (Diphtheria, Tetanus, Pertussis)", timing: "2, 4, 6, 15–18 months · 4–6 years" },
  { name: "Hib (Haemophilus influenzae b)", timing: "2, 4, 6, 12–15 months" },
  { name: "Pneumococcal (PCV15/20)", timing: "2, 4, 6, 12–15 months" },
  { name: "Polio (IPV)", timing: "2, 4, 6–18 months · 4–6 years" },
  { name: "MMR (Measles, Mumps, Rubella)", timing: "12–15 months · 4–6 years" },
  { name: "Influenza (Flu)", timing: "Annually starting at 6 months" },
  { name: "HPV", timing: "11–12 years (2-dose series)" },
];

const urgentSymptoms = [
  "Fever over 104°F (or any fever in infants under 3 months)", "Difficulty breathing or rapid breathing", "Severe abdominal pain", "Signs of dehydration (no wet diapers, sunken eyes, no tears)", "Rash with fever that doesn't fade under pressure", "Seizure or loss of consciousness", "Stiff neck with headache and fever", "Severe allergic reaction (swelling, hives, difficulty breathing)",
];

const faqs = [
  { q: "When do I need to schedule my child's first appointment?", a: "We recommend scheduling the first well-child visit within the first 3–5 days after birth, or immediately after discharge from the hospital. We're happy to schedule a pre-birth meet-and-greet appointment." },
  { q: "Do you see sick children on the same day?", a: "Yes. We prioritize same-day sick visits. Call early in the morning — we hold slots for urgent needs and our staff will triage your call to determine the best appointment time." },
  { q: "How do I know which vaccines my child needs?", a: "At every well-child visit, we review your child's immunization record and administer any vaccines that are due. We follow the CDC and AAP-recommended schedule." },
  { q: "Does your practice support delayed vaccine schedules?", a: "We follow the CDC-recommended schedule, which is designed for maximum protection during the most vulnerable ages. We're happy to discuss vaccine science and answer your questions at any visit." },
  { q: "At what age do you stop seeing pediatric patients?", a: "We see patients through age 18. We help coordinate the transition to adult primary care when appropriate, typically around age 17–18." },
  { q: "Is telehealth available for pediatric visits?", a: "Telehealth is available for follow-up appointments, behavioral health check-ins, and minor illness assessments for established patients. Some conditions require an in-person exam." },
];

export default function MedicalPediatrics() {
  return (
    <div className="bg-white font-sans">
      <div className="bg-[#0891B2] text-white text-center py-2 text-sm font-semibold">
        Accepting New Pediatric Patients · Same-Day Sick Visits · <a href="tel:8135550100" className="underline">(813) 555-0100</a>
      </div>

      <div className="bg-[#0C4A6E] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-cyan-200 text-xs font-bold uppercase tracking-widest mb-2">Our Services</p>
          <h1 className="text-4xl font-bold text-white">Pediatrics</h1>
          <p className="text-white/70 mt-2">Well-child care, sick visits, immunizations, and developmental support for ages 0–18.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Well-child table */}
        <h2 className="text-2xl font-bold text-[#0C4A6E] mb-6">Well-Child Visit Schedule</h2>
        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-100 rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-[#0C4A6E] text-white">
                <th className="text-left px-4 py-3 font-bold">Age</th>
                <th className="text-left px-4 py-3 font-bold">Vaccines Due</th>
                <th className="text-left px-4 py-3 font-bold">Developmental Focus</th>
              </tr>
            </thead>
            <tbody>
              {wellChildVisits.map((row, i) => (
                <tr key={row.age} className={i % 2 === 0 ? "bg-white" : "bg-[#F0F9FF]"}>
                  <td className="px-4 py-3 font-semibold text-[#0C4A6E]">{row.age}</td>
                  <td className="px-4 py-3 text-gray-600">{row.vaccines}</td>
                  <td className="px-4 py-3 text-gray-600">{row.focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Vaccine schedule */}
        <h2 className="text-2xl font-bold text-[#0C4A6E] mb-6">Recommended Vaccine Schedule</h2>
        <div className="grid sm:grid-cols-2 gap-3 mb-12">
          {vaccineSchedule.map((v) => (
            <div key={v.name} className="bg-[#F0F9FF] border border-[#BAE6FD] rounded-xl px-5 py-4">
              <p className="font-bold text-[#0C4A6E] text-sm mb-1">{v.name}</p>
              <p className="text-gray-500 text-xs">{v.timing}</p>
            </div>
          ))}
        </div>

        {/* Urgent symptoms */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-12">
          <h2 className="text-xl font-bold text-red-800 mb-4">When to Seek Urgent Care or Call 911</h2>
          <p className="text-red-700 text-sm mb-4">Bring your child in immediately or call 911 for any of the following:</p>
          <ul className="grid sm:grid-cols-2 gap-2">
            {urgentSymptoms.map((s) => (
              <li key={s} className="flex items-start gap-2 text-red-700 text-sm">
                <span className="font-bold mt-0.5 flex-shrink-0">!</span> {s}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex gap-4">
            <a href="tel:911" className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded-lg text-sm transition-colors">Call 911 — Emergency</a>
            <a href="tel:8135550100" className="bg-white border border-red-300 text-red-700 font-bold px-6 py-2 rounded-lg text-sm hover:bg-red-50 transition-colors">Call Our Office</a>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-[#0C4A6E] mb-6">Frequently Asked Questions for Parents</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-b border-gray-100 pb-6 last:border-0">
              <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-[#0C4A6E] py-12 text-center px-4">
        <h2 className="text-2xl font-bold text-white mb-6">Schedule your child&apos;s next well-child visit</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="contact" className="bg-[#0891B2] hover:bg-[#0770A0] text-white font-bold px-10 py-4 rounded-xl transition-colors">Book Online</Link>
          <a href="tel:8135550100" className="border-2 border-white text-white font-bold px-10 py-4 rounded-xl hover:bg-white hover:text-[#0C4A6E] transition-colors">Call (813) 555-0100</a>
        </div>
      </section>
    </div>
  );
}
