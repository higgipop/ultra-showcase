"use client";
import { useState } from "react";
import Link from "next/link";

const settlements = [
  { amount: "$17.5M", type: "Truck Accident" },
  { amount: "$15.2M", type: "Medical Malpractice" },
  { amount: "$9.8M", type: "Wrongful Death" },
  { amount: "$7.1M", type: "Product Liability" },
  { amount: "$5.4M", type: "Slip & Fall" },
  { amount: "$3.9M", type: "Car Accident" },
];

export default function LegalHome() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="bg-white font-sans">
      {/* Top bar */}
      <div className="bg-[#DC2626] text-white text-center text-sm py-2 font-bold">
        FREE CASE EVALUATION — No Fee Unless We Win · <a href="tel:8132617700" className="underline">(813) 261-7700</a>
      </div>

      {/* Nav */}
      <nav className="bg-[#111827] sticky top-[36px] z-40">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-white text-xl tracking-tight">GARCIA<span className="text-[#DC2626]">LAW</span></Link>
          <div className="hidden lg:flex gap-6 text-sm font-semibold text-gray-300">
            <Link href="practice-areas" className="hover:text-white">Practice Areas</Link>
            <Link href="personal-injury" className="hover:text-white">Personal Injury</Link>
            <Link href="business-litigation" className="hover:text-white">Business</Link>
            <Link href="about" className="hover:text-white">Our Attorneys</Link>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:8132617700" className="hidden md:block text-white/70 font-bold text-sm hover:text-white">(813) 261-7700</a>
            <Link href="contact" className="bg-[#DC2626] hover:bg-red-700 text-white font-black px-4 py-2 rounded text-sm transition-colors">FREE CASE REVIEW</Link>
            <button className="lg:hidden text-gray-400 p-1" onClick={() => setNavOpen(!navOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
        {navOpen && (
          <div className="lg:hidden bg-[#111827] border-t border-white/10 px-4 py-4 flex flex-col gap-4 text-sm font-semibold text-gray-300">
            <Link href="practice-areas">Practice Areas</Link>
            <Link href="personal-injury">Personal Injury</Link>
            <Link href="about">Our Attorneys</Link>
            <Link href="contact">FREE CASE REVIEW</Link>
          </div>
        )}
      </nav>

      {/* Dark hero with case eval form */}
      <section className="relative py-16 lg:py-24 px-4 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1800&q=80&auto=format&fit=crop" alt="Courthouse" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/95 via-[#111827]/80 to-[#111827]/60" />
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-[#DC2626] text-white text-xs font-black px-3 py-1.5 rounded uppercase tracking-wider mb-5">$200M+ Recovered for Clients</div>
            <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              When You&apos;re Injured, You Deserve a Fighter in Your Corner
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Garcia Law has recovered over $200 million for injured Floridians. We don&apos;t get paid unless you do. Call now for your free case evaluation.
            </p>
            {/* Settlement ticker */}
            <div className="overflow-hidden">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Recent Results</p>
              <div className="flex flex-wrap gap-3">
                {settlements.map((s) => (
                  <div key={s.amount} className="border border-white/10 rounded-lg px-4 py-2 text-center">
                    <p className="font-black text-[#DC2626] text-lg leading-none">{s.amount}</p>
                    <p className="text-white/50 text-xs">{s.type}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-xs mt-2">Past results do not guarantee future outcomes.</p>
            </div>
          </div>

          {/* Case eval form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h2 className="text-xl font-black text-[#111827] mb-1">Get Your FREE Case Evaluation</h2>
            <p className="text-gray-400 text-sm mb-5">Takes 2 minutes. An attorney will call you back within 1 hour.</p>
            <form className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#DC2626]" placeholder="First Name" />
                <input className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#DC2626]" placeholder="Last Name" />
              </div>
              <input type="tel" className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#DC2626]" placeholder="Phone Number" />
              <select className="border border-gray-200 rounded-lg px-4 py-3 text-base bg-white w-full focus:outline-none focus:border-[#DC2626] text-gray-700">
                <option>Type of Case</option>
                <option>Car Accident</option>
                <option>Truck Accident</option>
                <option>Slip & Fall</option>
                <option>Medical Malpractice</option>
                <option>Wrongful Death</option>
                <option>Product Liability</option>
                <option>Business Dispute</option>
                <option>Other</option>
              </select>
              <textarea className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full h-24 resize-none focus:outline-none focus:border-[#DC2626]" placeholder="Briefly describe what happened" />
              <button type="submit" className="bg-[#DC2626] hover:bg-red-700 text-white font-black px-6 py-4 rounded w-full text-base transition-colors">GET MY FREE EVALUATION →</button>
              <p className="text-center text-gray-400 text-xs">No fee unless we win · Confidential · Available 24/7</p>
            </form>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="bg-[#DC2626] py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 text-white font-bold text-sm">
          {["$200M+ Recovered","25+ Years Experience","5,000+ Cases Won","No Fee Unless We Win","24/7 Availability"].map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </section>

      {/* Practice areas preview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-[#111827] mb-8">We Fight For You In</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: "Personal Injury", href: "personal-injury", best: "$17.5M", icon: "🏥" },
              { name: "Auto Accidents", href: "personal-injury", best: "$9.8M", icon: "🚗" },
              { name: "Truck Accidents", href: "personal-injury", best: "$17.5M", icon: "🚛" },
              { name: "Medical Malpractice", href: "practice-areas", best: "$15.2M", icon: "⚕️" },
              { name: "Wrongful Death", href: "practice-areas", best: "$9.8M", icon: "⚖️" },
              { name: "Business Disputes", href: "business-litigation", best: "$4.2M", icon: "💼" },
            ].map((p) => (
              <Link key={p.name} href={p.href} className="border-2 border-gray-100 hover:border-[#DC2626] rounded-2xl p-6 group transition-all hover:shadow-lg">
                <span className="text-3xl mb-3 block">{p.icon}</span>
                <h3 className="font-black text-[#111827] text-lg mb-1 group-hover:text-[#DC2626] transition-colors">{p.name}</h3>
                <p className="text-gray-400 text-xs">Best result: <strong className="text-[#DC2626]">{p.best}</strong></p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video testimonials placeholder */}
      <section className="bg-[#111827] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-8 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { name: "Maria T.", result: "$1.2M settlement", quote: "They fought for me when no one else would. I never paid a dime out of pocket." },
              { name: "Carlos R.", result: "$850K settlement", quote: "The best decision I made after my accident was calling Garcia Law. They handled everything." },
              { name: "Jennifer W.", result: "$2.1M settlement", quote: "They treated me like family throughout the whole process. I couldn't be more grateful." },
            ].map((t) => (
              <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-yellow-400 mb-3 font-bold">★★★★★</div>
                <p className="text-white/80 italic text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-white font-bold text-sm">{t.name}</p>
                <p className="text-[#DC2626] text-xs font-bold">{t.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#DC2626] py-14 px-4 text-center">
        <h2 className="text-3xl font-black text-white mb-3">Don&apos;t Wait. Your Rights Have a Deadline.</h2>
        <p className="text-white/80 text-lg mb-8">Florida statute of limitations may limit your right to sue. Call now for a free evaluation.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:8132617700" className="bg-white text-[#DC2626] font-black px-10 py-4 rounded text-xl hover:bg-gray-50 transition-colors">(813) 261-7700</a>
          <Link href="contact" className="border-2 border-white text-white font-bold px-10 py-4 rounded text-lg hover:bg-white hover:text-[#DC2626] transition-colors">FREE Case Evaluation</Link>
        </div>
      </section>
    </div>
  );
}
