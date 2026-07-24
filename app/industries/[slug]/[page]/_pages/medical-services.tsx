import Link from "next/link";

const services = [
  {
    name: "Primary Care",
    icon: "🩺",
    desc: "Your home base for health. Annual wellness visits, chronic disease management, and same-day sick visits for when you need to be seen today.",
    includes: ["Annual physicals", "Chronic disease management (diabetes, hypertension, thyroid)", "Preventive screenings & labs", "Medication management", "Same-day sick visits", "Referral coordination"],
  },
  {
    name: "Pediatrics",
    icon: "👶",
    desc: "Compassionate care for your child from birth through young adulthood. Well-child exams, immunizations, and sick visits — all in one trusted practice.",
    includes: ["Well-child exams (birth–18)", "Immunization schedules", "Developmental screenings", "School & sports physicals", "Acute illness visits", "Behavioral health coordination"],
  },
  {
    name: "Women's Health",
    icon: "🌸",
    desc: "Comprehensive gynecologic and preventive care across every stage of a woman's life, from routine exams to hormone management and prenatal coordination.",
    includes: ["Annual GYN exams & Pap smear", "Contraception counseling", "Hormone & menopause management", "STI screening & treatment", "Prenatal care coordination", "Osteoporosis screening"],
  },
  {
    name: "Mental Health",
    icon: "🧠",
    desc: "Individual therapy, medication evaluation, and integrated mental health support. Anxiety, depression, ADHD, grief, and life transitions — we treat the whole person.",
    includes: ["Individual therapy sessions", "Psychiatric medication management", "Anxiety & depression treatment", "ADHD evaluation & treatment", "Grief & trauma counseling", "Telehealth mental health visits"],
  },
  {
    name: "Physical Therapy",
    icon: "💪",
    desc: "Targeted rehab programs for post-surgical recovery, sports injuries, chronic pain, and mobility concerns. Get back to the activities you love.",
    includes: ["Post-surgical rehabilitation", "Sports & overuse injury", "Low back & neck pain", "Balance & fall prevention", "Pre-surgical optimization", "Home exercise programs"],
  },
  {
    name: "Telehealth",
    icon: "📱",
    desc: "See your provider from anywhere — same quality care, no commute. Available for most follow-ups, medication management, and minor illness visits.",
    includes: ["Video appointments", "Secure messaging with your provider", "Lab result reviews", "Prescription refills", "Post-visit follow-up", "After-hours urgent consults"],
  },
];

const insurance = ["Aetna", "Humana", "BlueCross BlueShield", "United Healthcare", "Cigna", "Medicare", "Medicaid", "HealthFirst", "Molina", "Oscar", "Ambetter", "Tricare"];

export default function MedicalServicesPage() {
  return (
    <div className="bg-white font-sans">
      {/* Same-day banner */}
      <div className="bg-[#0891B2] text-white text-center text-sm py-2.5 font-medium">
        Same-day appointments often available · Call (813) 555-0100 or book online
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0C4A6E] to-[#0891B2] pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-cyan-200 text-xs font-semibold tracking-widest uppercase mb-4">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Comprehensive Care Under One Roof</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            From your child&rsquo;s first checkup to managing a chronic condition, our team is here for every stage of your health.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.name} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="px-7 py-5 border-b border-gray-50 flex items-center gap-4">
                  <span className="text-3xl">{s.icon}</span>
                  <h2 className="font-bold text-[#0C4A6E] text-xl">{s.name}</h2>
                </div>
                <div className="p-7">
                  <p className="text-gray-600 leading-relaxed mb-5">{s.desc}</p>
                  <div className="mb-6">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">What&rsquo;s included:</p>
                    <div className="grid grid-cols-1 gap-2">
                      {s.includes.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="w-4 h-4 rounded-full bg-[#0891B2]/15 flex items-center justify-center flex-shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0891B2]" />
                          </span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link href="/contact" className="block text-center bg-[#0891B2] hover:bg-[#0770A0] text-white font-bold py-3 rounded-xl transition-colors">
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-16 bg-[#F0FDFF]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-[#0891B2] text-xs font-semibold tracking-widest uppercase mb-3">Insurance Accepted</p>
            <h2 className="text-2xl font-bold text-[#0C4A6E]">We work with most major plans.</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {insurance.map((ins) => (
              <span key={ins} className="bg-white border border-[#BAE6FD] text-[#0C4A6E] text-sm font-semibold px-5 py-2 rounded-full">{ins}</span>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm">Don&rsquo;t see your plan? Call us — we verify coverage before your visit.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0C4A6E] text-center px-6">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to schedule?</h2>
        <p className="text-white/70 mb-8">New patients welcome. Most appointments available within 48 hours.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-[#0891B2] hover:bg-[#0770A0] text-white font-bold px-10 py-4 rounded-xl transition-colors">Book Online</Link>
          <a href="tel:8135550100" className="border-2 border-white/30 hover:border-white text-white font-bold px-10 py-4 rounded-xl transition-colors">(813) 555-0100</a>
        </div>
      </section>
    </div>
  );
}
