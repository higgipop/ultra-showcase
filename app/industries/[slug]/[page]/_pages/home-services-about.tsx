import Link from "next/link";

const values = [
  { icon: "🏆", title: "We Show Up", body: "On time, every time. We text before we arrive, give you a 30-minute heads-up, and clean up when we leave. Your time matters." },
  { icon: "💬", title: "Straight Talk", body: "We diagnose the problem honestly. No upsells, no fear tactics, no parts replaced that don't need replacing. You get the truth and a fair price." },
  { icon: "🛡️", title: "Backed by Our Guarantee", body: "If you're not 100% satisfied, we make it right — free. Every repair guaranteed for 1 year, every installation for 2." },
];

const team = [
  { name: "Marcus T.", cert: "NATE Certified", spec: "HVAC", years: "14 yrs" },
  { name: "Diego R.", cert: "Master Plumber", spec: "Plumbing", years: "11 yrs" },
  { name: "Sarah K.", cert: "Licensed Electrician", spec: "Electrical", years: "9 yrs" },
  { name: "James W.", cert: "NATE Certified", spec: "HVAC / IAQ", years: "7 yrs" },
];

const awards = ["BBB A+ Rating", "Angi Super Service Award", "HomeAdvisor Elite", "Google 4.9★ (2,847 reviews)", "Top Rated — Yelp"];

export default function HomeServicesAboutPage() {
  return (
    <div className="bg-white font-sans">
      {/* Hero */}
      <section className="bg-[#0A4DA1] pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 30px)"}} />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl">
            <p className="text-[#7DD3FC] text-xs font-semibold tracking-widest uppercase mb-4">About Us</p>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              25+ Years.<br />22,000+ Happy Customers.
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. We started as a one-truck HVAC operation in 1999 and grew into Tampa Bay&rsquo;s most trusted full-service home repair company — because we never forgot that we work in people&rsquo;s homes, not just their equipment.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#E84C27] text-xs font-semibold tracking-widest uppercase mb-3">Our Story</p>
            <h2 className="text-3xl font-black text-gray-900 mb-6">Built on service, not sales.</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. When founder Mike Deluca started this company out of his garage in 1999, he had one rule: fix it right the first time and charge a fair price. Twenty-five years later, that rule still runs the company.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We grew to 40 technicians not by cutting corners, but by earning referrals. More than 60% of our new customers come from a neighbor or family member who&rsquo;s used us before.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Every technician on our team is background-checked, drug-tested, and trained in-house before they ever enter your home.
            </p>
          </div>
          <div className="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center">
            <p className="text-gray-300 font-bold text-lg">Owner Photo</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900">How we do things differently.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 border border-gray-100">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-black text-gray-900 text-xl mb-3">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900">The technicians who show up.</h2>
            <p className="text-gray-500 mt-2">Background-checked · Drug-tested · In-house trained</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
                <div className="w-16 h-16 rounded-full bg-[#0A4DA1]/10 border-4 border-white shadow mx-auto mb-4 flex items-center justify-center font-black text-[#0A4DA1] text-2xl">
                  {t.name[0]}
                </div>
                <p className="font-black text-gray-900">{t.name}</p>
                <p className="text-[#0A4DA1] text-xs font-semibold mt-1">{t.cert}</p>
                <p className="text-gray-400 text-xs mt-1">{t.spec} · {t.years} exp.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-14 bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-[#7DD3FC] text-xs font-semibold tracking-widest uppercase mb-8">Our Guarantees</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Licensed & Insured", "Background-Checked Techs", "Satisfaction Guaranteed", "1-Year Repair Warranty", "2-Year Install Warranty", "Upfront Flat-Rate Pricing"].map((g) => (
              <div key={g} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5">
                <span className="text-[#E84C27] font-bold">✓</span>
                <span className="text-white text-sm font-semibold">{g}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-gray-400 text-xs font-semibold tracking-widest uppercase mb-6">Awards & Recognition</p>
          <div className="flex flex-wrap justify-center gap-4">
            {awards.map((a) => (
              <span key={a} className="border border-gray-200 rounded px-4 py-2 text-gray-500 text-sm font-semibold">{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A4DA1] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to experience the difference?</h2>
          <p className="text-blue-200 mb-8">Join 22,000+ Tampa Bay homeowners who trust us to keep their homes running.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8135550100" className="bg-[#E84C27] hover:bg-[#C73D1F] text-white font-black px-10 py-4 rounded-xl text-xl transition-colors">
              (813) 555-0100
            </a>
            <Link href="/contact" className="bg-white/10 border-2 border-white text-white font-bold px-10 py-4 rounded-xl transition-colors hover:bg-white hover:text-[#0A4DA1]">
              Schedule Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
