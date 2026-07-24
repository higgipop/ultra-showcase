// Design reference: clean white/blue-green, patient booking-first, provider grid, insurance accepted, trust signals
import Link from "next/link";

const services = [
  { name: "Primary Care", icon: "🩺", body: "Annual wellness visits, chronic disease management, preventive screenings, and same-day sick visits." },
  { name: "Pediatrics", icon: "👶", body: "Well-child exams, immunizations, developmental screenings, and acute illness visits for patients 0–18." },
  { name: "Women's Health", icon: "🌸", body: "GYN exams, contraception, prenatal care, and hormone management throughout every life stage." },
  { name: "Mental Health", icon: "🧠", body: "Individual therapy, medication management, anxiety, depression, and ADHD evaluations." },
  { name: "Physical Therapy", icon: "💪", body: "Post-surgical rehab, sports injury recovery, musculoskeletal pain, and fall prevention programs." },
  { name: "Telehealth", icon: "📱", body: "Video and phone visits for established patients. Same-day appointments often available." },
];

const providers = [
  { name: "Dr. Amanda Chen, MD", spec: "Internal Medicine · Primary Care", edu: "Johns Hopkins · Tampa General", accepting: true },
  { name: "Dr. Marcus Webb, DO", spec: "Family Medicine · Sports Medicine", edu: "Nova Southeastern · USF Health", accepting: true },
  { name: "Dr. Priya Nair, MD", spec: "Pediatrics · Adolescent Medicine", edu: "University of Michigan · All Children's", accepting: false },
  { name: "Sarah Hoffman, LCSW", spec: "Mental Health · Anxiety · ADHD", edu: "FSU · Tampa Bay Counseling Center", accepting: true },
];

const insurance = [
  "Aetna", "Humana", "BlueCross BlueShield", "United Healthcare",
  "Cigna", "Medicare", "Medicaid", "HealthFirst", "Molina",
];

const stats = [
  { value: "98%", label: "Patient satisfaction score" },
  { value: "<24h", label: "Avg. appointment wait" },
  { value: "18+", label: "Years serving the community" },
  { value: "4.9★", label: "Google rating (1,200+ reviews)" },
];

export default function MedicalDemo() {
  return (
    <div className="bg-white font-sans">

      {/* Appointment top bar */}
      <div className="bg-[#0891B2] text-white text-center text-sm py-2.5 font-medium">
        New patients welcome · Same-day appointments available ·{" "}
        <a href="tel:8135550100" className="font-bold underline underline-offset-2">(813) 555-0100</a>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0C4A6E] to-[#0891B2] pt-24 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px"}} />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-cyan-200 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                Comprehensive Healthcare · Tampa, FL
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Your health,<br />in good hands.
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Patient-centered primary and specialty care for families across Tampa Bay — same-day appointments, telehealth, and a team that actually listens.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact"
                  className="bg-white hover:bg-white/90 text-[#0C4A6E] font-bold px-8 py-4 rounded-xl transition-colors text-center">
                  Book an Appointment
                </Link>
                <a href="tel:8135550100"
                  className="border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl transition-colors text-center">
                  Call (813) 555-0100
                </a>
              </div>
            </div>

            {/* Booking card */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h2 className="font-bold text-[#0C4A6E] text-xl mb-6">Schedule a Visit</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Visit Type
                  </label>
                  <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#0891B2]">
                    <option>New Patient Visit</option>
                    <option>Follow-Up Appointment</option>
                    <option>Urgent / Sick Visit</option>
                    <option>Telehealth Visit</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Department
                  </label>
                  <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#0891B2]">
                    <option>Primary Care</option>
                    <option>Pediatrics</option>
                    <option>Women&apos;s Health</option>
                    <option>Mental Health</option>
                    <option>Physical Therapy</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Preferred Date
                  </label>
                  <input type="date" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#0891B2]" />
                </div>
                <button className="w-full bg-[#0891B2] hover:bg-[#0770A0] text-white font-bold py-4 rounded-xl transition-colors">
                  Request Appointment
                </button>
              </div>
              <p className="text-gray-400 text-xs text-center mt-4">
                We&apos;ll confirm via text or email within 2 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 border-b border-gray-100 -mt-8 relative z-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-[#0891B2] mb-1">{s.value}</p>
              <p className="text-gray-500 text-sm leading-tight">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#0891B2] text-xs font-semibold tracking-[0.15em] uppercase mb-3">Our Services</p>
            <h2 className="text-3xl font-bold text-[#0C4A6E]">
              Comprehensive care under one roof.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link key={s.name} href="/contact"
                className="group bg-white border border-gray-100 rounded-2xl p-7 hover:border-[#0891B2]/40 hover:shadow-md transition-all">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-[#0C4A6E] text-lg mb-2 group-hover:text-[#0891B2] transition-colors">
                  {s.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.body}</p>
                <span className="text-xs font-semibold text-[#0891B2] uppercase tracking-wider">
                  Book Now →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Providers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#0891B2] text-xs font-semibold tracking-[0.15em] uppercase mb-3">Our Providers</p>
            <h2 className="text-3xl font-bold text-[#0C4A6E]">Meet your care team.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {providers.map((p) => (
              <div key={p.name} className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-b from-[#E0F2FE] to-white h-36 flex items-end justify-center pb-0 relative">
                  <div className="w-20 h-20 rounded-full bg-[#0891B2]/20 border-4 border-white shadow flex items-center justify-center text-[#0891B2] font-black text-2xl">
                    {p.name.split(" ")[1][0]}
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-[#0C4A6E] text-sm leading-tight mb-1">{p.name}</h3>
                  <p className="text-[#0891B2] text-xs font-semibold mb-2">{p.spec}</p>
                  <p className="text-gray-400 text-xs mb-3">{p.edu}</p>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${p.accepting ? "bg-green-50 text-green-700" : "bg-orange-50 text-orange-600"}`}>
                    {p.accepting ? "Accepting Patients" : "Waitlist Only"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-16 bg-[#F0FDFF]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[#0891B2] text-xs font-semibold tracking-[0.15em] uppercase mb-8">
            Insurance Accepted
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {insurance.map((ins) => (
              <span key={ins}
                className="bg-white border border-[#BAE6FD] text-[#0C4A6E] text-sm font-semibold px-5 py-2 rounded-full">
                {ins}
              </span>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-6">
            Don&apos;t see your plan? Call us — we work with most major carriers.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0C4A6E] text-center px-6">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to make your appointment?
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
          New patients welcome. Same-day sick visits often available. Call or book online in under 2 minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-[#0891B2] hover:bg-[#0770A0] text-white font-bold px-10 py-4 rounded-xl transition-colors">
            Book Online
          </Link>
          <a href="tel:8135550100" className="border-2 border-white/30 hover:border-white text-white font-bold px-10 py-4 rounded-xl transition-colors">
            Call (813) 555-0100
          </a>
        </div>
      </section>
    </div>
  );
}
