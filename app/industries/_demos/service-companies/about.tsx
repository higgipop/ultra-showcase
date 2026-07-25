import Link from "next/link";

const values = [
  { icon: "🏆", title: "Expert Technicians", body: "Every tech is licensed, certified, and background-checked. We invest in ongoing training so you get the best." },
  { icon: "🕐", title: "Always On Time", body: "We call 30 minutes before arrival and give you a real appointment window — not an all-day wait." },
  { icon: "💲", title: "Upfront Pricing", body: "We give you the price before we start. No surprises on the invoice. Ever." },
  { icon: "✅", title: "100% Guarantee", body: "If you're not satisfied with our work, we'll come back and make it right — at no charge." },
];

const team = [
  { name: "Mike Torres", cert: "NATE Certified", years: "14 yrs", role: "Lead HVAC Tech" },
  { name: "Jake Brennan", cert: "EPA 608", years: "9 yrs", role: "AC Install Specialist" },
  { name: "Sandra Lee", cert: "Master Plumber", years: "17 yrs", role: "Lead Plumber" },
  { name: "Carlos Vega", cert: "Journeyman Electrician", years: "11 yrs", role: "Electrical Tech" },
  { name: "Tanya Williams", cert: "NATE Certified", years: "7 yrs", role: "Heating Specialist" },
  { name: "Kevin O'Brien", cert: "EPA 608", years: "5 yrs", role: "IAQ Technician" },
];

const accreds = ["BBB A+ Rated", "Angi Super Service Award", "HomeAdvisor Elite Pro", "Carrier Factory Authorized", "Trane Comfort Specialist"];

export default function HomeServicesAbout() {
  return (
    <div className="bg-white font-sans">
      <section className="bg-[#1B4B8A] py-14 px-4 text-center">
        <p className="text-[#F58220] text-xs font-bold uppercase tracking-widest mb-3">Family-Owned Since 1999</p>
        <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">Tampa's Most Trusted Home Service Company</h1>
        <p className="text-blue-200 text-xl max-w-2xl mx-auto">25+ years. 22,000+ happy customers. One call handles everything.</p>
      </section>

      {/* Story */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-5">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. ComfortPro was founded in 1999 by Robert and Carol Martinez, who wanted to build a home service company that treated every customer like a neighbor — because most of them were. What started as a two-truck HVAC operation has grown into Tampa Bay's most complete home service company.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Today, we employ 40+ licensed technicians across HVAC, plumbing, electrical, and indoor air quality — but we've never lost the values we started with: show up on time, do the job right, and stand behind your work.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Our growth has come entirely from referrals and repeat customers — and we intend to keep it that way.
            </p>
          </div>
          <div className="bg-gray-100 rounded-2xl aspect-[4/3] flex items-center justify-center text-gray-300 font-medium text-lg">
            Founder / Family Photo
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-12">What We Stand For</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-gray-100 rounded-2xl p-7 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-black text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-3">Meet Our Technicians</h2>
          <p className="text-gray-500 text-center mb-12">Licensed, certified, and background-checked. Every one.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((t) => (
              <div key={t.name} className="flex items-center gap-5 bg-gray-50 border border-gray-100 rounded-xl p-5">
                <div className="w-14 h-14 rounded-full bg-[#1B4B8A] flex items-center justify-center text-white font-black text-xl flex-shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-[#F58220] text-sm font-semibold">{t.role}</p>
                  <p className="text-gray-400 text-xs">{t.cert} · {t.years} exp.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-12 bg-[#1B4B8A] px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-blue-300 text-xs font-bold uppercase tracking-widest mb-8">Accreditations & Awards</p>
          <div className="flex flex-wrap justify-center gap-4">
            {accreds.map((a) => (
              <span key={a} className="bg-white/10 border border-white/20 text-white font-bold px-5 py-2.5 rounded-full text-sm">{a}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50 text-center px-4">
        <h2 className="text-2xl font-black text-gray-900 mb-3">Ready to Experience the Difference?</h2>
        <p className="text-gray-500 mb-8">Join 22,000+ Tampa Bay families who trust ComfortPro with their homes.</p>
        <Link href="contact" className="inline-block bg-[#F58220] hover:bg-[#e07210] text-white font-black px-10 py-4 rounded text-xl transition-colors">Schedule Service Today</Link>
      </section>
    </div>
  );
}
