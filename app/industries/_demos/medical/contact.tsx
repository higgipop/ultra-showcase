"use client";
import { useState } from "react";
import Link from "next/link";

export default function MedicalContact() {
  const [step, setStep] = useState(1);
  const [reason, setReason] = useState("");
  const [provider, setProvider] = useState("");

  return (
    <div className="bg-white font-sans">
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-[#0C4A6E] text-xl">Bay<span className="text-[#0891B2]">Medical</span></Link>
          <div className="hidden lg:flex gap-6 text-sm font-semibold text-gray-600">
            <Link href="services" className="hover:text-[#0891B2]">Services</Link>
            <Link href="about" className="hover:text-[#0891B2]">Providers</Link>
          </div>
          <a href="tel:8135550200" className="bg-[#0891B2] text-white font-bold px-4 py-2 rounded text-sm">(813) 555-0200</a>
        </div>
      </nav>

      {/* Teal header */}
      <section className="bg-[#0891B2] py-12 px-4 text-center">
        <h1 className="text-3xl font-black text-white mb-2">Request an Appointment</h1>
        <p className="text-white/70">Same-day and next-day availability in most cases.</p>
      </section>

      {/* Multi-step form */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Progress bar */}
          <div className="flex items-center mb-10">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center flex-1 last:flex-none">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0 transition-colors ${step >= s ? "bg-[#0891B2] text-white" : "bg-gray-100 text-gray-400"}`}>{s}</div>
                {s < 3 && <div className={`flex-1 h-0.5 mx-2 transition-colors ${step > s ? "bg-[#0891B2]" : "bg-gray-100"}`} />}
              </div>
            ))}
          </div>

          {/* Step labels */}
          <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 -mt-4 px-1">
            <span className={step >= 1 ? "text-[#0891B2]" : ""}>Reason</span>
            <span className={step >= 2 ? "text-[#0891B2]" : ""}>Provider</span>
            <span className={step >= 3 ? "text-[#0891B2]" : ""}>Details</span>
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-black text-[#0C4A6E] mb-5">What brings you in?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Annual Physical / Wellness Exam","Sick Visit — I feel unwell","Follow-Up Appointment","New Patient Visit","Pediatric / Well-Child Visit","Immunizations Only","Telehealth Visit","Urgent Concern"].map((r) => (
                  <button
                    key={r}
                    onClick={() => setReason(r)}
                    className={`border-2 rounded-xl px-4 py-4 text-left text-sm font-semibold transition-colors ${reason === r ? "border-[#0891B2] bg-[#F0F9FF] text-[#0C4A6E]" : "border-gray-200 text-gray-600 hover:border-[#0891B2]/40"}`}
                  >
                    {r}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(2)}
                disabled={!reason}
                className="mt-6 bg-[#0891B2] hover:bg-[#0779a0] disabled:opacity-40 text-white font-black px-8 py-3 rounded w-full transition-colors"
              >
                Next: Choose Provider →
              </button>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-black text-[#0C4A6E] mb-5">Select a provider</h2>
              <div className="space-y-3">
                {[
                  { name: "Dr. Maria Santos, MD", spec: "Family Medicine", avail: "Next available: Today 2:30 PM" },
                  { name: "Dr. James Park, MD", spec: "Internal Medicine", avail: "Next available: Tomorrow 9:00 AM" },
                  { name: "Dr. Emily Chen, DO", spec: "Pediatrics", avail: "Next available: Today 4:00 PM" },
                  { name: "Dr. Robert Williams, MD", spec: "Urgent Care & Family Medicine", avail: "Walk-in available now" },
                  { name: "No preference", spec: "First available provider", avail: "Next available: Today 1:00 PM" },
                ].map((p) => (
                  <button
                    key={p.name}
                    onClick={() => setProvider(p.name)}
                    className={`border-2 rounded-xl p-4 w-full text-left transition-colors ${provider === p.name ? "border-[#0891B2] bg-[#F0F9FF]" : "border-gray-200 hover:border-[#0891B2]/40"}`}
                  >
                    <p className="font-black text-[#0C4A6E] text-sm">{p.name}</p>
                    <p className="text-gray-400 text-xs">{p.spec}</p>
                    <p className="text-[#0891B2] text-xs font-bold mt-1">{p.avail}</p>
                  </button>
                ))}
              </div>
              <div className="flex gap-3 mt-6">
                <button onClick={() => setStep(1)} className="flex-1 border-2 border-gray-200 text-gray-600 font-bold py-3 rounded hover:border-gray-400 transition-colors">← Back</button>
                <button onClick={() => setStep(3)} disabled={!provider} className="flex-1 bg-[#0891B2] hover:bg-[#0779a0] disabled:opacity-40 text-white font-black py-3 rounded transition-colors">Next: Your Details →</button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-black text-[#0C4A6E] mb-5">Your contact details</h2>
              <div className="bg-[#F0F9FF] rounded-xl p-4 mb-6 text-sm">
                <p className="text-gray-500">Booking: <strong className="text-[#0C4A6E]">{reason}</strong> with <strong className="text-[#0C4A6E]">{provider}</strong></p>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#0891B2]" placeholder="First Name" />
                  <input className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#0891B2]" placeholder="Last Name" />
                </div>
                <input type="tel" className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#0891B2]" placeholder="Phone Number" />
                <input type="email" className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full focus:outline-none focus:border-[#0891B2]" placeholder="Email Address" />
                <select className="border border-gray-200 rounded-lg px-4 py-3 text-base bg-white w-full focus:outline-none focus:border-[#0891B2] text-gray-700">
                  <option>Insurance Plan</option>
                  <option>Blue Cross Blue Shield</option>
                  <option>Aetna</option>
                  <option>Cigna</option>
                  <option>United Healthcare</option>
                  <option>Medicare</option>
                  <option>Medicaid</option>
                  <option>Self-Pay</option>
                  <option>Other</option>
                </select>
                <textarea className="border border-gray-200 rounded-lg px-4 py-3 text-base w-full h-20 resize-none focus:outline-none focus:border-[#0891B2]" placeholder="Additional notes (optional)" />
                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(2)} className="flex-1 border-2 border-gray-200 text-gray-600 font-bold py-3 rounded hover:border-gray-400 transition-colors">← Back</button>
                  <button type="submit" className="flex-1 bg-[#0891B2] hover:bg-[#0779a0] text-white font-black py-3 rounded transition-colors">Confirm Appointment</button>
                </div>
                <p className="text-center text-gray-400 text-xs">We will call to confirm your appointment within 2 hours.</p>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Location + hours */}
      <section className="bg-[#F0F9FF] border-t border-blue-100 py-14 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-gray-200 rounded-2xl aspect-video flex items-center justify-center text-gray-400">Location Map</div>
          <div>
            <h3 className="font-black text-[#0C4A6E] mb-4">Location & Hours</h3>
            <p className="text-gray-600 text-sm mb-1 font-semibold">4501 N. Armenia Ave, Suite 200</p>
            <p className="text-gray-500 text-sm mb-4">Tampa, FL 33603</p>
            <div className="space-y-2 text-sm">
              {[["Mon – Fri","7:00 AM – 7:00 PM"],["Saturday","8:00 AM – 2:00 PM"],["Sunday","Closed"],["Urgent Walk-In","Mon–Sat 8 AM – 6 PM"]].map(([d, h]) => (
                <div key={d} className="flex justify-between border-b border-gray-200 pb-1.5 last:border-0">
                  <span className="text-gray-500">{d}</span><span className="font-bold text-gray-800">{h}</span>
                </div>
              ))}
            </div>
            <a href="tel:8135550200" className="mt-5 block bg-[#0891B2] hover:bg-[#0779a0] text-white font-black px-5 py-3 rounded text-center transition-colors">(813) 555-0200</a>
          </div>
        </div>
      </section>
    </div>
  );
}
