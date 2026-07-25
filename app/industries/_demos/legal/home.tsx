// dennishernandez.com reference: dark hero, red #DC2626, case evaluation form in hero, $17M settlement carousel, 5x FREE CASE REVIEW, video testimonials, aggressive multi-CTA
"use client";
import { useState } from "react";
import Link from "next/link";

const settlements = [
  { amount: "$17,000,000", type: "Motorcycle Accident" },
  { amount: "$15,000,000", type: "Auto Accident" },
  { amount: "$9,000,000", type: "Trucking Accident" },
  { amount: "$5,000,000", type: "Wrongful Death" },
  { amount: "$3,000,000", type: "Slip & Fall" },
  { amount: "$2,750,000", type: "Medical Malpractice" },
];

const videos = [
  { name: "Maria S.", outcome: "$1.2M Auto Accident", label: "Watch Testimonial" },
  { name: "Carlos R.", outcome: "$875K Slip & Fall", label: "Watch Testimonial" },
  { name: "The Johnson Family", outcome: "$3M Wrongful Death", label: "Watch Testimonial" },
  { name: "David T.", outcome: "$450K Workplace Injury", label: "Watch Testimonial" },
  { name: "Angela M.", outcome: "$1.8M Motorcycle", label: "Watch Testimonial" },
  { name: "Tom W.", outcome: "$650K Dog Bite", label: "Watch Testimonial" },
];

const faqs = [
  "How much does a personal injury lawyer cost?",
  "How long will my case take to settle?",
  "What if I was partially at fault?",
  "What damages can I recover?",
  "How do I know if I have a case?",
  "What should I do immediately after an accident?",
];

const areas = ["Personal Injury", "Car Accidents", "Motorcycle Accidents", "Slip & Fall", "Wrongful Death", "Medical Malpractice"];

export default function LegalHome() {
  const [sel, setSel] = useState(0);
  return (
    <div className="bg-white font-sans">
      {/* Top bar */}
      <div className="bg-[#DC2626] text-white text-center py-2 text-sm font-bold tracking-wide">
        YOU PAY NOTHING UNLESS WE WIN · Call 24/7: <a href="tel:8135550100" className="underline">(813) 555-0100</a>
      </div>

      {/* Hero */}
      <section className="bg-[#111827] py-16 lg:py-24 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <p className="text-[#DC2626] text-xs font-bold uppercase tracking-[0.2em] mb-4">Harvard Law Graduate · 29 Years Experience · 1,400+ Reviews</p>
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6 uppercase">
              We Fight<br />to Get You<br /><span className="text-[#DC2626]">Paid.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. If you've been injured through someone else's negligence, you deserve maximum compensation — and a lawyer who will fight to get it.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="text-center bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                <p className="text-2xl font-black text-white">$50M+</p>
                <p className="text-gray-400 text-xs">Recovered</p>
              </div>
              <div className="text-center bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                <p className="text-2xl font-black text-white">1,429</p>
                <p className="text-gray-400 text-xs">5-Star Reviews</p>
              </div>
              <div className="text-center bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                <p className="text-2xl font-black text-white">29 Yrs</p>
                <p className="text-gray-400 text-xs">Experience</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="contact" className="bg-[#DC2626] hover:bg-[#b91c1c] text-white font-black text-xl px-8 py-4 rounded text-center transition-colors">FREE CASE REVIEW</Link>
              <a href="tel:8135550100" className="border-2 border-white text-white hover:bg-white hover:text-[#111827] font-bold text-xl px-8 py-4 rounded text-center transition-colors">(813) 555-0100</a>
            </div>
          </div>
          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h2 className="text-2xl font-black text-gray-900 mb-2">FREE CASE EVALUATION</h2>
            <p className="text-gray-500 text-sm mb-6">No obligation. We respond within 1 hour.</p>
            <form className="space-y-4">
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#DC2626] focus:outline-none" placeholder="Your Full Name" />
              <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#DC2626] focus:outline-none" placeholder="Phone Number" />
              <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-[#DC2626] focus:outline-none">
                <option>Type of Case</option>
                {areas.map((a) => <option key={a}>{a}</option>)}
              </select>
              <textarea rows={3} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#DC2626] focus:outline-none" placeholder="Briefly describe what happened..." />
              <button type="submit" className="w-full bg-[#DC2626] hover:bg-[#b91c1c] text-white font-black py-4 rounded-lg text-xl transition-colors">
                GET MY FREE EVALUATION
              </button>
              <p className="text-gray-400 text-xs text-center">Confidential · No fees unless we win · Available 24/7</p>
            </form>
          </div>
        </div>
      </section>

      {/* Settlement showcase */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#DC2626] text-xs font-bold uppercase tracking-widest mb-2">Our Case Results</p>
            <h2 className="text-3xl font-black text-gray-900">Recent Verdicts & Settlements</h2>
            <p className="text-gray-500 text-sm mt-2">Past results do not guarantee future outcomes.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {settlements.map((s, i) => (
              <div key={i} className={`rounded-2xl p-6 text-center border-2 ${i === 0 ? "bg-[#DC2626] border-[#DC2626] text-white" : "bg-white border-gray-100"}`}>
                <p className={`text-2xl lg:text-3xl font-black mb-1 ${i === 0 ? "text-white" : "text-[#DC2626]"}`}>{s.amount}</p>
                <p className={`text-sm font-semibold ${i === 0 ? "text-red-100" : "text-gray-500"}`}>{s.type}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="contact" className="inline-block bg-[#DC2626] hover:bg-[#b91c1c] text-white font-black px-10 py-4 rounded text-xl transition-colors">
              FREE CASE REVIEW
            </Link>
          </div>
        </div>
      </section>

      {/* 3 pillars */}
      <section className="py-14 bg-[#111827] px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            { title: "ACCESSIBLE", body: "We answer calls 24/7. You'll always speak with your attorney directly — not a paralegal." },
            { title: "PROVEN TRACK RECORD", body: "$50M+ recovered. 1,400+ five-star reviews. Decades of courtroom experience." },
            { title: "AGGRESSIVE REPRESENTATION", body: "We don't settle for less than you deserve. We prepare every case as if it's going to trial." },
          ].map((p) => (
            <div key={p.title} className="border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-black text-[#DC2626] mb-4 tracking-wider">{p.title}</h3>
              <p className="text-gray-400 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video testimonials */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#DC2626] text-xs font-bold uppercase tracking-widest mb-2">Client Testimonials</p>
            <h2 className="text-3xl font-black text-gray-900">Hear From Real Clients</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {videos.map((v) => (
              <div key={v.name} className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer">
                <div className="bg-gray-900 aspect-video flex items-center justify-center relative">
                  <div className="w-16 h-16 bg-[#DC2626] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white ml-1" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-bold text-gray-900">{v.name}</p>
                  <p className="text-[#DC2626] text-sm font-semibold">{v.outcome}</p>
                  <p className="text-gray-400 text-xs mt-1">{v.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-gray-50 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {faqs.map((q) => (
              <Link key={q} href="contact" className="block bg-white border border-gray-200 hover:border-[#DC2626] hover:text-[#DC2626] rounded-xl px-6 py-4 font-semibold text-gray-800 transition-colors">
                {q} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related areas */}
      <section className="py-12 bg-white border-t border-gray-100 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-5 text-center">Practice Areas</p>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((a) => (
              <Link key={a} href="practice-areas" className="border border-gray-200 hover:border-[#DC2626] hover:text-[#DC2626] text-gray-700 font-semibold px-5 py-2.5 rounded-full text-sm transition-colors">
                {a}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#DC2626] py-14 text-center px-4">
        <h2 className="text-3xl font-black text-white mb-3">Don&apos;t Wait. Your Deadline to File May Be Approaching.</h2>
        <p className="text-red-100 text-lg mb-8">Florida law limits the time you have to file a claim. Call now for a free evaluation.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="contact" className="bg-white text-[#DC2626] font-black px-10 py-4 rounded text-xl hover:bg-gray-100 transition-colors">FREE CASE REVIEW</Link>
          <a href="tel:8135550100" className="border-2 border-white text-white font-black px-10 py-4 rounded text-xl hover:bg-white hover:text-[#DC2626] transition-colors">(813) 555-0100</a>
        </div>
      </section>
    </div>
  );
}
