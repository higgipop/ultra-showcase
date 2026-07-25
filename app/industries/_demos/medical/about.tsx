// medical about: provider cards, practice philosophy, support staff, awards
import Link from "next/link";

const providers = [
  {
    name: "Dr. Amanda Chen, MD", init: "C", spec: "Internal Medicine · Primary Care", edu: "Johns Hopkins School of Medicine", residency: "Tampa General Hospital", years: "14 years", accepting: true,
    bio: "Dr. Chen leads our primary care department with a focus on preventive medicine and chronic disease management. A Johns Hopkins graduate, she completed her residency at Tampa General and has been named to the Tampa Bay Top Doctors list three years running.",
    philosophy: "\"Great primary care is about building a relationship over years, not transactions. I want to know my patients, not just their diagnoses.\"",
  },
  {
    name: "Dr. Marcus Webb, DO", init: "W", spec: "Family Medicine · Sports Medicine", edu: "Nova Southeastern University COM", residency: "USF Health Family Medicine", years: "9 years", accepting: true,
    bio: "Dr. Webb is a double-board certified family and sports medicine physician. He specializes in musculoskeletal injuries, return-to-sport protocols, and men's health. Former team physician for the University of South Florida athletic program.",
    philosophy: "\"I treat the whole person — not just the injury or the illness. Lifestyle, stress, sleep — it all connects.\"",
  },
  {
    name: "Dr. Priya Nair, MD", init: "N", spec: "Pediatrics · Adolescent Medicine", edu: "University of Michigan Medical School", residency: "All Children's Hospital", years: "11 years", accepting: false,
    bio: "Dr. Nair is a board-certified pediatrician specializing in adolescent medicine and developmental pediatrics. She completed her fellowship at Johns Hopkins and has published research on ADHD outcomes in adolescent populations.",
    philosophy: "\"My job is to partner with parents to raise healthy, confident kids. That starts at birth and goes all the way through 18.\"",
  },
  {
    name: "Sarah Hoffman, LCSW", init: "H", spec: "Mental Health · Anxiety · ADHD", edu: "Florida State University, MSW", residency: "Tampa Bay Counseling Center", years: "7 years", accepting: true,
    bio: "Sarah Hoffman is a licensed clinical social worker specializing in cognitive behavioral therapy (CBT), anxiety, depression, and adult ADHD. She provides both in-person and telehealth therapy sessions.",
    philosophy: "\"Mental health is health. I work to make therapy feel accessible and practical — not clinical and intimidating.\"",
  },
];

const awards = [
  { name: "Patient's Choice Award", sub: "2022, 2023, 2024", icon: "🏆" },
  { name: "Healthgrades Top Provider", sub: "3 consecutive years", icon: "🌟" },
  { name: "Vitals Compassionate Doctor", sub: "2023 · 2024", icon: "❤️" },
  { name: "Tampa Bay Top Doctors", sub: "Tampa Magazine 2024", icon: "📋" },
];

export default function MedicalAbout() {
  return (
    <div className="bg-white font-sans">
      <div className="bg-[#0891B2] text-white text-center py-2 text-sm font-semibold">
        Accepting New Patients · Same-Day Appointments · <a href="tel:8135550100" className="underline">(813) 555-0100</a>
      </div>

      <div className="bg-[#0C4A6E] py-12 px-4 text-center">
        <h1 className="text-4xl font-bold text-white">Meet Your Care Team</h1>
        <p className="text-white/70 text-lg mt-3 max-w-2xl mx-auto">Experienced, board-certified providers committed to patient-centered care across Tampa Bay.</p>
      </div>

      {/* Providers */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {providers.map((p, i) => (
            <div key={p.name} className={`grid lg:grid-cols-[240px_1fr] gap-10 items-start ${i > 0 ? "border-t border-gray-100 pt-12" : ""}`}>
              <div className="text-center lg:text-left">
                <div className="w-40 h-40 rounded-2xl bg-gradient-to-b from-[#E0F2FE] to-[#BAE6FD] flex items-center justify-center text-[#0C4A6E] font-black text-5xl mx-auto lg:mx-0 mb-4">
                  {p.init}
                </div>
                <div className="space-y-2">
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${p.accepting ? "bg-green-50 text-green-700" : "bg-orange-50 text-orange-600"}`}>
                    {p.accepting ? "Accepting New Patients" : "Waitlist Only"}
                  </span>
                  {p.accepting && (
                    <div>
                      <Link href="contact" className="block bg-[#0891B2] hover:bg-[#0770A0] text-white font-bold py-2 rounded-xl text-sm transition-colors text-center">Book with {p.name.split(" ")[1]}</Link>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#0C4A6E] mb-1">{p.name}</h2>
                <p className="text-[#0891B2] font-semibold mb-4">{p.spec}</p>
                <p className="text-gray-700 leading-relaxed mb-5">{p.bio}</p>
                <div className="grid sm:grid-cols-3 gap-4 mb-5">
                  <div className="bg-gray-50 rounded-xl p-3"><p className="text-xs text-gray-400 mb-0.5">Education</p><p className="font-semibold text-gray-800 text-sm">{p.edu}</p></div>
                  <div className="bg-gray-50 rounded-xl p-3"><p className="text-xs text-gray-400 mb-0.5">Residency</p><p className="font-semibold text-gray-800 text-sm">{p.residency}</p></div>
                  <div className="bg-gray-50 rounded-xl p-3"><p className="text-xs text-gray-400 mb-0.5">Experience</p><p className="font-semibold text-gray-800 text-sm">{p.years}</p></div>
                </div>
                <blockquote className="border-l-4 border-[#0891B2] pl-4 text-gray-500 italic text-sm">{p.philosophy}</blockquote>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-14 bg-[#F0F9FF] px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#0C4A6E] mb-5">Our Practice Philosophy</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-5">
            We believe that great healthcare is built on long-term relationships — not 10-minute transactions. Our providers take time to understand the full picture of your health: your lifestyle, your history, your goals, and your concerns.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We&apos;ve structured our practice around access: same-day appointments for urgent needs, telehealth for convenience, and a care team that coordinates across specialties to make sure nothing falls through the cracks.
          </p>
        </div>
      </section>

      {/* Support staff */}
      <section className="py-14 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0C4A6E] mb-8">Our Support Team</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { role: "Registered Nurses", count: "4 RNs on staff", desc: "Our nursing team assists with triage, vaccine administration, wound care, and patient education." },
              { role: "Medical Assistants", count: "6 MAs", desc: "Rooming patients, taking vitals, processing labs, and supporting providers throughout the day." },
              { role: "Care Coordinators", count: "2 dedicated coordinators", desc: "Specialist referrals, prior authorizations, care transitions, and chronic disease follow-up calls." },
            ].map((s) => (
              <div key={s.role} className="border border-gray-100 rounded-2xl p-6">
                <p className="text-[#0891B2] font-bold text-sm mb-1">{s.count}</p>
                <h3 className="font-bold text-[#0C4A6E] text-lg mb-3">{s.role}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-14 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0C4A6E] text-center mb-10">Recognition & Awards</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {awards.map((a) => (
              <div key={a.name} className="bg-white rounded-2xl border border-gray-100 p-6 text-center">
                <div className="text-4xl mb-3">{a.icon}</div>
                <p className="font-bold text-[#0C4A6E] text-sm mb-1">{a.name}</p>
                <p className="text-gray-400 text-xs">{a.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0C4A6E] py-14 text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to meet your care team?</h2>
        <Link href="contact" className="inline-block bg-[#0891B2] hover:bg-[#0770A0] text-white font-bold px-12 py-4 rounded-xl text-lg transition-colors">Request an Appointment</Link>
      </section>
    </div>
  );
}
