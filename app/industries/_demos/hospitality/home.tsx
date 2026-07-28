"use client";
import { useState } from "react";
import Link from "next/link";

const services = [
  {
    title: "Weddings",
    link: "weddings",
    desc: "From rehearsal dinners to full receptions — menus built around your vision, every logistical detail handled.",
    img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Corporate Events",
    link: "corporate-events",
    desc: "Team lunches, client dinners, product launches, and annual galas. We make your company look good.",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Buffet & Plated",
    link: "catering",
    desc: "Full-service or drop-off, seated plated or flowing buffet — executed to the same standard regardless of format.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "BBQ & Outdoor",
    link: "catering",
    desc: "Smoked meats, seasonal sides, and a setup that works anywhere from a backyard to a 500-person festival.",
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Bar & Beverage",
    link: "catering",
    desc: "Craft cocktails, curated wine lists, and full bar management. Licensed, insured, professional bartenders.",
    img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80&auto=format&fit=crop",
  },
];

const whoWeServe = [
  "Weddings & Private Events",
  "Business & Corporate",
  "Nonprofits & Galas",
  "Rehearsal Dinners",
  "Athletic & Sports Events",
  "Medical & Healthcare",
];

const gallery = [
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop", alt: "Elegant table setting" },
  { src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80&auto=format&fit=crop", alt: "Plated cuisine" },
  { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80&auto=format&fit=crop", alt: "Food spread" },
  { src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80&auto=format&fit=crop", alt: "Wedding reception" },
  { src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80&auto=format&fit=crop", alt: "BBQ spread" },
  { src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80&auto=format&fit=crop", alt: "Cocktails" },
];

export default function HospitalityHome() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="bg-[#F9F6F0] font-serif">
      {/* Nav */}
      <nav className="bg-[#F9F6F0] border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
          <Link href="home" className="text-2xl font-bold tracking-tight text-stone-800 italic">
            Terra Bella<span className="not-italic font-light text-stone-500"> Catering</span>
          </Link>
          <div className="hidden lg:flex items-center gap-8 text-stone-500 tracking-wide">
            <Link href="weddings" className="hover:text-stone-800 transition-colors uppercase text-xs font-sans font-semibold">Weddings</Link>
            <Link href="catering" className="hover:text-stone-800 transition-colors uppercase text-xs font-sans font-semibold">Catering</Link>
            <Link href="corporate-events" className="hover:text-stone-800 transition-colors uppercase text-xs font-sans font-semibold">Corporate</Link>
            <Link href="about" className="hover:text-stone-800 transition-colors uppercase text-xs font-sans font-semibold">About</Link>
            <Link href="contact" className="border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white px-5 py-2.5 transition-colors uppercase text-xs font-sans font-semibold tracking-widest">
              Request a Proposal
            </Link>
          </div>
          <button className="lg:hidden text-stone-600" onClick={() => setNavOpen(!navOpen)} aria-label="Menu">
            <span className="block w-6 h-0.5 bg-stone-600 mb-1.5" />
            <span className="block w-6 h-0.5 bg-stone-600 mb-1.5" />
            <span className="block w-6 h-0.5 bg-stone-600" />
          </button>
        </div>
        {navOpen && (
          <div className="lg:hidden bg-[#F9F6F0] border-t border-stone-200 px-6 py-4 space-y-3 font-sans">
            {["weddings", "catering", "corporate-events", "about", "contact"].map((p) => (
              <Link key={p} href={p} className="block text-stone-600 text-sm capitalize py-2" onClick={() => setNavOpen(false)}>
                {p.replace("-", " ")}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="py-20 lg:py-32 px-6 text-center max-w-3xl mx-auto">
        <p className="font-sans text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase mb-6">
          Full-Service Catering · Tampa Bay, FL
        </p>
        <h1 className="text-5xl lg:text-7xl font-bold text-stone-800 leading-tight mb-8 italic">
          Thoughtfully Planned.<br />Beautifully Executed.
        </h1>
        <p className="text-stone-500 text-lg leading-relaxed font-sans mb-10 max-w-xl mx-auto">
          No fixed menus. No prepackaged offerings. Every event is built around your vision — with one lead planner who sees it through from the first call to the final plate.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="contact"
            className="bg-stone-800 text-[#F9F6F0] font-sans font-semibold px-8 py-4 uppercase text-xs tracking-widest hover:bg-stone-900 transition-colors"
          >
            Request a Proposal
          </Link>
          <Link
            href="weddings"
            className="border border-stone-300 text-stone-700 font-sans font-semibold px-8 py-4 uppercase text-xs tracking-widest hover:border-stone-500 transition-colors"
          >
            View Our Work
          </Link>
        </div>
      </section>

      {/* Full-width hero photo */}
      <section className="px-6 mb-4">
        <div className="max-w-6xl mx-auto rounded-2xl aspect-[16/7] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80&auto=format&fit=crop"
            alt="Elegant catering setup"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Who We Serve pills */}
      <section className="py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase mb-6">Who We Serve</p>
          <div className="flex flex-wrap justify-center gap-3">
            {whoWeServe.map((w) => (
              <span
                key={w}
                className="font-sans text-xs font-semibold text-stone-600 border border-stone-300 rounded-full px-5 py-2 hover:border-stone-500 hover:text-stone-800 transition-colors cursor-default"
              >
                {w}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 border-t border-stone-200">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase mb-4 text-center">What We Do</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 italic text-center mb-16">
            Every Occasion, Handled with Care
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="group">
                <div className="rounded-xl aspect-[4/3] overflow-hidden mb-5">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-stone-800 italic mb-2">{s.title}</h3>
                <p className="text-stone-500 font-sans text-sm leading-relaxed mb-4">{s.desc}</p>
                <Link
                  href={s.link}
                  className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-600 hover:text-stone-900 border-b border-stone-300 pb-0.5 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo gallery strip */}
      <section className="py-4 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-2">
            {gallery.map((g) => (
              <div key={g.src} className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={g.src}
                  alt={g.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote testimonial */}
      <section className="bg-stone-800 py-20 px-6 my-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#F9F6F0] text-2xl lg:text-3xl italic font-bold leading-relaxed mb-6">
            &ldquo;Terra Bella made our wedding day absolutely perfect. Every detail — the food, the presentation, the service — exceeded our expectations. They felt like partners, not vendors.&rdquo;
          </p>
          <p className="text-stone-400 font-sans text-xs tracking-[0.2em] uppercase">
            — Sarah &amp; James R., Married at Innisbrook Resort
          </p>
        </div>
      </section>

      {/* Why Terra Bella */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-sans text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase mb-4">Our Philosophy</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 italic mb-8">
              A Planning Partner, Not a Vendor
            </h2>
            <div className="space-y-6">
              {[
                ["One Lead Planner", "Your event has one dedicated point of contact — from the first inquiry through the final cleanup. No hand-offs."],
                ["Menus Built to Order", "No steam trays of reheated food. Every dish prepared fresh. No fixed packages — your menu is built around your event."],
                ["Transparent Proposals", "Detailed line-item proposals before you commit to anything. No surprise fees at invoice time."],
                ["15 Years of Experience", "Over 2,000 events since 2009 across Tampa Bay. We've seen everything — and handled it gracefully."],
              ].map(([title, desc]) => (
                <div key={title as string} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-stone-800 font-sans mb-1 text-sm">{title}</p>
                    <p className="text-stone-500 font-sans text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl aspect-square overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80&auto=format&fit=crop"
              alt="Chef at work"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-stone-200 py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            ["2,000+", "Events Catered"],
            ["15", "Years in Tampa Bay"],
            ["98%", "Client Satisfaction"],
            ["5", "Service Types"],
          ].map(([n, l]) => (
            <div key={l as string}>
              <p className="text-4xl font-bold text-stone-800 italic mb-2">{n}</p>
              <p className="text-stone-400 font-sans text-xs uppercase tracking-wider">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service areas */}
      <section className="py-12 px-6 bg-stone-100 border-t border-stone-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase mb-5">Service Areas</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {["Tampa", "St. Petersburg", "Clearwater", "Brandon", "Sarasota", "Lakeland", "Orlando"].map((a) => (
              <span key={a} className="text-stone-600 font-sans text-sm">{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <p className="font-sans text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase mb-4">Let&rsquo;s Talk</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 italic mb-4">Ready to Start Planning?</h2>
        <p className="text-stone-500 font-sans mb-10 max-w-md mx-auto">
          Tell us about your event and we&rsquo;ll reach out within one business day with questions, ideas, and next steps.
        </p>
        <Link
          href="contact"
          className="inline-block bg-stone-800 text-[#F9F6F0] font-sans font-semibold px-10 py-4 uppercase text-xs tracking-widest hover:bg-stone-900 transition-colors"
        >
          Request a Proposal
        </Link>
      </section>
    </div>
  );
}
