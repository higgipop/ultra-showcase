"use client";
import { useState } from "react";
import Link from "next/link";

export default function HospitalityHome() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="bg-[#F9F6F0] font-serif">
      {/* Nav */}
      <nav className="bg-[#F9F6F0] border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
          <Link href="home" className="text-2xl font-bold tracking-tight text-stone-800 italic">Terra Bella<span className="not-italic font-light text-stone-500"> Events</span></Link>
          <div className="hidden lg:flex items-center gap-8 text-sm font-sans font-semibold text-stone-500 tracking-wide">
            <Link href="weddings" className="hover:text-stone-800 transition-colors uppercase text-xs">Weddings</Link>
            <Link href="catering" className="hover:text-stone-800 transition-colors uppercase text-xs">Catering</Link>
            <Link href="corporate-events" className="hover:text-stone-800 transition-colors uppercase text-xs">Corporate</Link>
            <Link href="about" className="hover:text-stone-800 transition-colors uppercase text-xs">About</Link>
            <Link href="contact" className="border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white px-5 py-2.5 transition-colors uppercase text-xs tracking-widest">Start Planning</Link>
          </div>
          <button className="lg:hidden text-stone-600" onClick={() => setNavOpen(!navOpen)}>
            <span className="block w-6 h-0.5 bg-stone-600 mb-1.5" />
            <span className="block w-6 h-0.5 bg-stone-600 mb-1.5" />
            <span className="block w-6 h-0.5 bg-stone-600" />
          </button>
        </div>
        {navOpen && (
          <div className="lg:hidden bg-[#F9F6F0] border-t border-stone-200 px-6 py-4 space-y-3 font-sans">
            {["weddings","catering","corporate-events","about","contact"].map((p) => (
              <Link key={p} href={p} className="block text-stone-600 text-sm capitalize py-1" onClick={() => setNavOpen(false)}>{p.replace("-"," ")}</Link>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="py-20 lg:py-32 px-6 text-center max-w-3xl mx-auto">
        <p className="font-sans text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase mb-6">Full-Service Event Catering · Tampa Bay, FL</p>
        <h1 className="text-5xl lg:text-7xl font-bold text-stone-800 leading-tight mb-8 italic">Events Worth<br />Remembering</h1>
        <p className="text-stone-500 text-lg leading-relaxed font-sans mb-10 max-w-xl mx-auto">From intimate gatherings to grand celebrations — we handle the details so you can be present for the moments that matter.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="contact" className="bg-stone-800 text-[#F9F6F0] font-sans font-semibold px-8 py-4 uppercase text-xs tracking-widest hover:bg-stone-900 transition-colors">Start Planning</Link>
          <Link href="weddings" className="border border-stone-300 text-stone-700 font-sans font-semibold px-8 py-4 uppercase text-xs tracking-widest hover:border-stone-500 transition-colors">View Weddings</Link>
        </div>
      </section>

      {/* Photo hero placeholder */}
      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto bg-stone-200 rounded-2xl aspect-[16/7] flex items-center justify-center text-stone-400 font-sans text-sm">Featured Event Photo</div>
      </section>

      {/* Services overview */}
      <section className="py-20 px-6 border-t border-stone-200">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase mb-4 text-center">What We Do</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 italic text-center mb-16">Every Occasion, Handled with Care</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Weddings", link: "weddings", desc: "From rehearsal dinners to receptions — menus designed around your love story, logistics handled start to finish.", img: "Wedding Reception Photo" },
              { title: "Catering", link: "catering", desc: "Drop-off, buffet, and full-service catering for events of all sizes. Seasonal menus, dietary accommodations.", img: "Catering Spread Photo" },
              { title: "Corporate Events", link: "corporate-events", desc: "Team lunches, client dinners, product launches, and annual galas. We make your company look good.", img: "Corporate Event Photo" },
            ].map((s) => (
              <div key={s.title} className="group">
                <div className="bg-stone-200 rounded-xl aspect-[4/3] flex items-center justify-center text-stone-400 font-sans text-sm mb-5">{s.img}</div>
                <h3 className="text-xl font-bold text-stone-800 italic mb-3">{s.title}</h3>
                <p className="text-stone-500 font-sans text-sm leading-relaxed mb-4">{s.desc}</p>
                <Link href={s.link} className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-600 hover:text-stone-900 border-b border-stone-300 pb-0.5 transition-colors">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / Social Proof */}
      <section className="bg-stone-800 py-20 px-6 my-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#F9F6F0] text-2xl lg:text-3xl italic font-bold leading-relaxed mb-6">"Terra Bella made our wedding day absolutely perfect. Every detail — the food, the presentation, the service — exceeded our expectations."</p>
          <p className="text-stone-400 font-sans text-sm tracking-wider">— SARAH & JAMES R., MARRIED AT INNISBROOK RESORT</p>
        </div>
      </section>

      {/* Why Terra Bella */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-sans text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase mb-4">Why Choose Us</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 italic mb-8">A Different Kind of Catering Company</h2>
            <div className="space-y-6">
              {[
                ["Collaborative Planning","We work with your vision, not against it. One lead planner for your event, start to finish."],
                ["Scratch-Made Menus","No steam trays of reheated food. Every dish is prepared fresh, on-site or in our certified kitchen."],
                ["Transparent Pricing","Detailed proposals with line items. No surprise fees at invoice time."],
                ["15 Years Experience","Over 2,000 events since 2009. We've seen it all — and handled it gracefully."],
              ].map(([title, desc]) => (
                <div key={title as string} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-stone-800 mb-1">{title}</p>
                    <p className="text-stone-500 font-sans text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-stone-200 rounded-2xl aspect-square flex items-center justify-center text-stone-400 font-sans text-sm">Chef / Kitchen Photo</div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-stone-200 py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[["2,000+","Events Catered"],["15","Years in Tampa Bay"],["98%","Client Satisfaction"],["50","Max Venue Staff"]].map(([n, l]) => (
            <div key={l as string}>
              <p className="text-4xl font-bold text-stone-800 italic mb-2">{n}</p>
              <p className="text-stone-400 font-sans text-xs uppercase tracking-wider">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-stone-800 italic mb-4">Ready to Start Planning?</h2>
        <p className="text-stone-500 font-sans mb-8">Tell us about your event and we&apos;ll reach out within one business day.</p>
        <Link href="contact" className="inline-block bg-stone-800 text-[#F9F6F0] font-sans font-semibold px-10 py-4 uppercase text-xs tracking-widest hover:bg-stone-900 transition-colors">Get a Proposal</Link>
      </section>
    </div>
  );
}
