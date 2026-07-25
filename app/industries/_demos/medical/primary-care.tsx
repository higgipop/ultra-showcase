// primary care service detail: teal banner, what's included, first visit steps, conditions, insurance, FAQ
import Link from "next/link";

const conditions = [
  "Hypertension (high blood pressure)", "Type 2 Diabetes", "Thyroid disorders", "Asthma & COPD", "High cholesterol", "Obesity & metabolic syndrome",
  "Arthritis & joint pain", "Sleep disorders", "Skin conditions", "Urinary tract infections", "Seasonal allergies", "Heart disease management",
];

const faqs = [
  { q: "How do I become a new patient?", a: "Call our office or use the online booking form to schedule a new patient visit. Please bring your insurance card, a photo ID, and a list of current medications to your first appointment." },
  { q: "Do you accept walk-in patients?", a: "We accommodate walk-ins for acute/urgent concerns on a space-available basis. Same-day appointments are often available — we recommend calling ahead to secure a slot." },
  { q: "Is telehealth available for primary care?", a: "Yes. Established patients can schedule telehealth visits for follow-ups, medication refills, and non-emergency concerns. Telehealth is available 7 days a week." },
  { q: "What happens if I need care after hours?", a: "Our after-hours nurse line is available until 10pm weekdays. For emergencies, please call 911. Non-emergency urgent needs can be addressed via telehealth." },
  { q: "Do you provide referrals to specialists?", a: "Yes. We coordinate specialist referrals and ensure your specialist has complete records. We also follow up after specialist visits to keep your care coordinated." },
];

const insurance = ["Aetna", "Humana", "BlueCross BlueShield", "United Healthcare", "Cigna", "Medicare", "Medicaid", "HealthFirst", "Molina"];

export default function MedicalPrimaryCare() {
  return (
    <div className="bg-white font-sans">
      <div className="bg-[#0891B2] text-white text-center py-2 text-sm font-semibold">
        New Patients Welcome · Same-Day Appointments Available · <a href="tel:8135550100" className="underline">(813) 555-0100</a>
      </div>

      {/* Banner */}
      <div className="bg-[#0C4A6E] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-cyan-200 text-xs font-bold uppercase tracking-widest mb-2">Our Services</p>
          <h1 className="text-4xl font-bold text-white">Primary Care Services</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-[1fr_320px] gap-10">
          <div>
            {/* What's included */}
            <h2 className="text-2xl font-bold text-[#0C4A6E] mb-5">What&apos;s Included in Primary Care</h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {["Annual wellness exams & health risk assessments", "Chronic disease management (diabetes, hypertension, thyroid)", "Preventive cancer screenings & immunizations", "Same-day acute & sick visit appointments", "Medication management & prescription refills", "Lab orders, results review & care coordination", "Referral management to specialists", "Lifestyle & nutrition counseling"].map((item) => (
                <div key={item} className="flex items-start gap-2 bg-[#F0F9FF] border border-[#BAE6FD] rounded-xl px-4 py-3">
                  <span className="text-[#0891B2] font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* First visit */}
            <h2 className="text-2xl font-bold text-[#0C4A6E] mb-5">What to Expect on Your First Visit</h2>
            <div className="grid sm:grid-cols-3 gap-5 mb-10">
              {[
                { step: "1", title: "Medical History Review", body: "Your provider reviews your full medical history, current medications, allergies, and family history." },
                { step: "2", title: "Physical Examination", body: "A comprehensive exam including vital signs, cardiovascular, respiratory, and musculoskeletal assessment." },
                { step: "3", title: "Care Plan & Follow-Up", body: "You&apos;ll leave with a written care plan, any necessary lab orders, and a scheduled follow-up if needed." },
              ].map((s) => (
                <div key={s.step} className="border border-gray-100 rounded-xl p-5">
                  <div className="w-10 h-10 bg-[#0891B2] rounded-full flex items-center justify-center text-white font-black text-lg mb-3">{s.step}</div>
                  <h3 className="font-bold text-[#0C4A6E] mb-2 text-sm">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>

            {/* Conditions */}
            <h2 className="text-2xl font-bold text-[#0C4A6E] mb-5">Conditions We Treat</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-10">
              {conditions.map((c) => (
                <div key={c} className="flex items-center gap-2 text-gray-600 text-sm py-1.5 border-b border-gray-50">
                  <span className="w-2 h-2 bg-[#0891B2] rounded-full flex-shrink-0" />
                  {c}
                </div>
              ))}
            </div>

            {/* Insurance */}
            <h2 className="text-2xl font-bold text-[#0C4A6E] mb-5">Insurance Accepted</h2>
            <div className="flex flex-wrap gap-2 mb-10">
              {insurance.map((ins) => (
                <span key={ins} className="bg-[#F0F9FF] border border-[#BAE6FD] text-[#0C4A6E] text-sm font-semibold px-4 py-1.5 rounded-full">{ins}</span>
              ))}
            </div>
            <p className="text-gray-500 text-sm mb-10">Don&apos;t see your plan? Call us — we work with most major carriers.</p>

            {/* FAQ */}
            <h2 className="text-2xl font-bold text-[#0C4A6E] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="border-b border-gray-100 pb-6 last:border-0">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-[#0C4A6E] rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-5">Book an Appointment</h3>
              <form className="space-y-3">
                <input type="text" placeholder="Your Name" className="w-full border border-white/20 bg-white/10 text-white placeholder-white/50 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#0891B2] focus:outline-none" />
                <input type="tel" placeholder="Phone Number" className="w-full border border-white/20 bg-white/10 text-white placeholder-white/50 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#0891B2] focus:outline-none" />
                <select className="w-full border border-white/20 bg-white/10 text-white rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#0891B2] focus:outline-none">
                  <option>New Patient Visit</option>
                  <option>Annual Wellness</option>
                  <option>Sick Visit</option>
                  <option>Follow-Up</option>
                </select>
                <input type="date" className="w-full border border-white/20 bg-white/10 text-white rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#0891B2] focus:outline-none" />
                <button className="w-full bg-[#0891B2] hover:bg-[#0770A0] text-white font-bold py-3 rounded-xl transition-colors">Request Appointment</button>
              </form>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center">
              <p className="text-gray-500 text-sm mb-2">Prefer to call?</p>
              <a href="tel:8135550100" className="text-2xl font-bold text-[#0891B2] hover:underline">(813) 555-0100</a>
              <p className="text-gray-400 text-xs mt-2">Mon–Fri 7am–7pm · Sat 8am–2pm</p>
            </div>
            <div className="bg-[#F0F9FF] border border-[#BAE6FD] rounded-2xl p-5">
              <p className="text-[#0C4A6E] font-bold mb-2 text-sm">What to Bring</p>
              <ul className="space-y-1.5 text-gray-600 text-sm">
                {["Photo ID", "Insurance card", "List of current medications", "Prior medical records (if available)", "List of questions for provider"].map((item) => (
                  <li key={item} className="flex items-center gap-2"><span className="text-[#0891B2]">·</span> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#0C4A6E] py-12 text-center px-4">
        <h2 className="text-2xl font-bold text-white mb-6">Ready to establish care with a primary care provider?</h2>
        <Link href="contact" className="inline-block bg-[#0891B2] hover:bg-[#0770A0] text-white font-bold px-10 py-4 rounded-xl transition-colors text-lg">Book Your First Appointment</Link>
      </section>
    </div>
  );
}
