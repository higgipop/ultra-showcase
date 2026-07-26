// iernaair.com reference: blue nav, orange accent #F58220, white body, clippable coupon cards, 4-service grid
"use client";
import { useState } from "react";
import Link from "next/link";

const services = [
  { icon: "❄️", name: "Air Conditioning", href: "air-conditioning", sub: "Repair · Install · Maintenance" },
  { icon: "🔥", name: "Heating", href: "services", sub: "Furnace · Heat Pump · Boiler" },
  { icon: "🌬️", name: "Indoor Air Quality", href: "services", sub: "Filtration · UV · Humidity" },
  { icon: "💧", name: "Plumbing", href: "plumbing", sub: "Leak · Drain · Water Heater" },
];

const coupons = [
  { off: "$50 OFF", desc: "Any Repair Service", fine: "New customers only. Exp. 12/31" },
  { off: "0% APR", desc: "Financing Available", fine: "18 months, on approved credit" },
  { off: "FREE", desc: "Second Opinion", fine: "On any prior diagnosis" },
  { off: "$25 OFF", desc: "Tune-Up Service", fine: "Per system. Exp. 12/31" },
];

const trust = [
  { icon: "🏆", label: "Expert Repairs", sub: "Licensed & certified techs" },
  { icon: "✅", label: "100% Satisfaction", sub: "Guaranteed or we fix it free" },
  { icon: "🕐", label: "On Time Service", sub: "We call 30 min before arrival" },
  { icon: "🛡️", label: "No Breakdown Guarantee", sub: "Parts & labor warranty" },
];

const tips = [
  { date: "Dec 15, 2025", title: "5 Signs Your AC Needs Repair Before Summer", read: "3 min" },
  { date: "Nov 28, 2025", title: "How Often Should You Replace Your Air Filter?", read: "2 min" },
  { date: "Oct 10, 2025", title: "Water Heater Making Noise? Here's What It Means.", read: "4 min" },
];

export default function HomeServicesHome() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white font-sans">
      {/* Top bar */}
      <div className="bg-[#F58220] text-white text-center text-sm py-2 font-semibold tracking-wide">
        ⚡ Same-Day Service Available · Call Now: <a href="tel:8135550100" className="underline">(813) 555-0100</a> · $50 OFF Any Repair
      </div>

      {/* Nav */}
      <nav className="bg-white border-b border-gray-200 sticky top-[36px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="font-black text-[#1B4B8A] text-xl tracking-tight">COMFORT<span className="text-[#F58220]">PRO</span></div>
          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-gray-700">
            <Link href="air-conditioning" className="hover:text-[#1B4B8A]">Air Conditioning</Link>
            <Link href="plumbing" className="hover:text-[#1B4B8A]">Plumbing</Link>
            <Link href="services" className="hover:text-[#1B4B8A]">All Services</Link>
            <Link href="about" className="hover:text-[#1B4B8A]">About Us</Link>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:8135550100" className="hidden md:block font-bold text-[#1B4B8A] text-sm">(813) 555-0100</a>
            <Link href="contact" className="bg-[#F58220] hover:bg-[#e07210] text-white font-bold px-4 py-2 rounded text-sm transition-colors">Schedule Online</Link>
            <button className="lg:hidden text-gray-600" onClick={() => setOpen(!open)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-3 text-sm font-semibold text-gray-700">
            <Link href="air-conditioning">Air Conditioning</Link>
            <Link href="plumbing">Plumbing</Link>
            <Link href="services">All Services</Link>
            <Link href="about">About Us</Link>
            <a href="tel:8135550100" className="text-[#1B4B8A]">(813) 555-0100</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="bg-[#1B4B8A] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#F58220] text-xs font-bold uppercase tracking-[0.2em] mb-4">Tampa Bay's #1 Home Service Company</p>
              <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
                Experience Full-Service Comfort Anytime, With Same-Day Service and Next-Day Installations!
              </h1>
              <p className="text-blue-200 text-lg leading-relaxed mb-8">
                AC repair, heating, plumbing, and indoor air quality — all under one roof. Licensed, insured, and available 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:8135550100" className="bg-[#F58220] hover:bg-[#e07210] text-white font-black text-lg px-8 py-4 rounded text-center transition-colors">
                  📞 (813) 555-0100
                </a>
                <Link href="contact" className="border-2 border-white hover:bg-white hover:text-[#1B4B8A] text-white font-bold text-lg px-8 py-4 rounded text-center transition-colors">
                  Schedule Online
                </Link>
              </div>
            </div>
            {/* Coupon cards */}
            <div className="grid grid-cols-2 gap-4">
              {coupons.map((c) => (
                <div key={c.desc} className="bg-white rounded-lg p-5 text-center relative" style={{border: "3px dashed #1B4B8A"}}>
                  <div className="text-3xl font-black text-[#F58220] mb-1">{c.off}</div>
                  <div className="font-bold text-gray-800 text-sm mb-2">{c.desc}</div>
                  <div className="text-gray-400 text-xs leading-tight">{c.fine}</div>
                  <div className="mt-3">
                    <span className="text-xs font-bold text-[#1B4B8A] uppercase tracking-wider border border-[#1B4B8A] px-2 py-0.5 rounded">
                      Print Coupon
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trust.map((t) => (
            <div key={t.label} className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">{t.icon}</span>
              <div>
                <p className="font-bold text-gray-900 text-sm">{t.label}</p>
                <p className="text-gray-500 text-xs leading-tight">{t.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-2">What Can We Help With Today?</h2>
            <p className="text-gray-500">One call handles everything. Same-day appointments available.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <Link key={s.name} href={s.href}
                className="bg-white border-2 border-gray-100 hover:border-[#1B4B8A] rounded-xl p-7 text-center group transition-all hover:shadow-lg">
                <div className="text-5xl mb-4">{s.icon}</div>
                <h3 className="font-black text-gray-900 text-lg mb-1 group-hover:text-[#1B4B8A] transition-colors">{s.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{s.sub}</p>
                <span className="text-sm font-bold text-[#F58220]">Schedule Service →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#F58220] text-xs font-bold uppercase tracking-[0.2em] mb-3">About Us</p>
            <h2 className="text-3xl font-black text-gray-900 mb-5">22+ Years Serving Tampa Bay Families</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Since 1999, we've been the Tampa Bay area's most trusted home service company — family-owned, locally operated, and committed to doing the job right the first time.
            </p>
            <ul className="space-y-2">
              {["Same-Day Service — We're there when you need us", "Expert Technicians — Licensed, certified, background-checked", "Upfront Pricing — No surprises before we start", "100% Satisfaction Guarantee — We stand behind every job", "24/7 Emergency Service — Because problems don't keep business hours"].map((b) => (
                <li key={b} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-[#F58220] font-bold mt-0.5">✓</span> {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl aspect-[4/3] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80&auto=format&fit=crop" alt="ComfortPro service team" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Tips/Blog */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl font-black text-gray-900">Expert Tips & Advice</h2>
            <Link href="services" className="text-sm font-bold text-[#1B4B8A] hover:underline">View All →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tips.map((t) => (
              <div key={t.title} className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="aspect-video overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80&auto=format&fit=crop" alt="Home service tips" className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-gray-400 text-xs mb-2">{t.date} · {t.read} read</p>
                  <h3 className="font-bold text-gray-900 leading-snug mb-3 group-hover:text-[#1B4B8A] transition-colors">{t.title}</h3>
                  <span className="text-sm font-bold text-[#F58220]">Read More →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B4B8A] py-14 text-center px-4">
        <h2 className="text-3xl font-black text-white mb-3">Problem? We're Ready Right Now.</h2>
        <p className="text-blue-200 text-lg mb-8">Same-day appointments. No trip fee for estimates. Emergency service 24/7.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:8135550100" className="bg-[#F58220] hover:bg-[#e07210] text-white font-black px-10 py-4 rounded text-xl transition-colors">(813) 555-0100</a>
          <Link href="contact" className="border-2 border-white hover:bg-white hover:text-[#1B4B8A] text-white font-bold px-10 py-4 rounded text-lg transition-colors">Book Online</Link>
        </div>
      </section>
    </div>
  );
}
