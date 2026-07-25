// medical services overview: 6 specialties, alternating bg sections, insurance strip
import Link from "next/link";

const services = [
  {
    name: "Primary Care", icon: "🩺", href: "primary-care",
    included: ["Annual wellness exams", "Chronic disease management (diabetes, hypertension, thyroid)", "Preventive cancer screenings", "Same-day acute/sick visits", "Medication management & refills", "Lab orders & results review"],
    ideal: "Adults 18+ seeking a long-term primary care provider.",
    sameDay: true,
  },
  {
    name: "Pediatrics", icon: "👶", href: "pediatrics",
    included: ["Well-child visits from birth to 18", "Vaccine administration & schedules", "Developmental milestone screenings", "School & sports physicals", "Acute illness & injury care", "Behavioral health screening"],
    ideal: "Infants, children, and adolescents aged 0–18.",
    sameDay: true,
  },
  {
    name: "Women's Health", icon: "🌸", href: "services",
    included: ["Annual GYN exams & Pap smears", "Contraception counseling & management", "Prenatal care coordination", "Menopause & hormone management", "Breast health & mammogram referrals", "STI testing & treatment"],
    ideal: "Women seeking comprehensive gynecological and preventive care.",
    sameDay: false,
  },
  {
    name: "Mental Health", icon: "🧠", href: "services",
    included: ["Individual therapy (CBT, DBT, ACT)", "Psychiatric medication management", "Anxiety & depression treatment", "ADHD evaluation & management", "Stress & burnout support", "Telehealth sessions available"],
    ideal: "Adults and adolescents managing mental health conditions.",
    sameDay: false,
  },
  {
    name: "Physical Therapy", icon: "💪", href: "services",
    included: ["Post-surgical rehabilitation", "Sports injury recovery", "Chronic pain management", "Fall prevention programs", "Manual therapy & dry needling", "Home exercise program design"],
    ideal: "Patients recovering from surgery, injury, or managing chronic pain.",
    sameDay: false,
  },
  {
    name: "Telehealth", icon: "📱", href: "contact",
    included: ["Video visits via secure portal", "Same-day or next-day appointments", "Prescription refills", "Chronic condition follow-ups", "Mental health sessions", "7-day availability including weekends"],
    ideal: "Established patients who prefer remote care for follow-ups.",
    sameDay: true,
  },
];

const insurance = ["Aetna", "Humana", "BlueCross BlueShield", "United Healthcare", "Cigna", "Medicare", "Medicaid", "HealthFirst", "Molina"];

export default function MedicalServices() {
  return (
    <div className="bg-white font-sans">
      <div className="bg-[#0891B2] text-white text-center py-2 text-sm font-semibold">
        Same-Day Appointments Often Available · New Patients Welcome · <a href="tel:8135550100" className="underline">(813) 555-0100</a>
      </div>

      <div className="bg-[#0C4A6E] py-12 px-4 text-center">
        <h1 className="text-4xl font-bold text-white mb-3">Comprehensive Care Under One Roof</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">Six specialty areas, one care team. No referrals needed between departments.</p>
      </div>

      {services.map((s, i) => (
        <section key={s.name} className={`py-14 px-4 ${i % 2 === 0 ? "bg-white" : "bg-[#F0F9FF]"}`}>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[80px_1fr] gap-8 items-start">
            <div className="text-5xl">{s.icon}</div>
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h2 className="text-2xl font-bold text-[#0C4A6E]">{s.name}</h2>
                {s.sameDay && <span className="text-xs font-bold bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">Same-Day Appointments Available</span>}
              </div>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">What&apos;s Included</p>
                  <ul className="space-y-2">
                    {s.included.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-[#0891B2] font-bold mt-0.5">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Ideal For</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.ideal}</p>
                </div>
              </div>
              <Link href={s.href} className="inline-block bg-[#0891B2] hover:bg-[#0770A0] text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors">
                Book Now →
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* Callout */}
      <section className="bg-[#0C4A6E] py-10 px-4 text-center">
        <p className="text-cyan-200 font-semibold text-lg">Same-day appointments often available · Most insurance accepted</p>
      </section>

      {/* Insurance */}
      <section className="py-14 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[#0891B2] text-xs font-semibold tracking-[0.15em] uppercase mb-8">Insurance Accepted</p>
          <div className="flex flex-wrap justify-center gap-3">
            {insurance.map((ins) => (
              <span key={ins} className="bg-white border border-[#BAE6FD] text-[#0C4A6E] text-sm font-semibold px-5 py-2 rounded-full">{ins}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center px-4">
        <h2 className="text-2xl font-bold text-[#0C4A6E] mb-6">Ready to get started?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="contact" className="bg-[#0891B2] hover:bg-[#0770A0] text-white font-bold px-10 py-4 rounded-xl transition-colors">Book an Appointment</Link>
          <a href="tel:8135550100" className="border-2 border-[#0C4A6E] text-[#0C4A6E] font-bold px-10 py-4 rounded-xl hover:bg-[#0C4A6E] hover:text-white transition-colors">Call (813) 555-0100</a>
        </div>
      </section>
    </div>
  );
}
