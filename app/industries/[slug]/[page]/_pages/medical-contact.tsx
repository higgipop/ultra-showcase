import Link from "next/link";

export default function MedicalContactPage() {
  return (
    <div className="bg-white font-sans">
      <div className="bg-[#0891B2] text-white text-center text-sm py-2.5 font-medium">
        New patients welcome · Insurance verified before your visit · Telehealth available
      </div>

      <section className="bg-gradient-to-br from-[#0C4A6E] to-[#0891B2] pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-cyan-200 text-xs font-semibold tracking-widest uppercase mb-4">Book an Appointment</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Request Your Appointment</h1>
          <p className="text-white/70 text-lg">We&rsquo;ll confirm via text or email within 2 hours during business hours.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 className="font-bold text-[#0C4A6E] text-2xl mb-6">Appointment Request</h2>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Visit Type</label>
                  <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0891B2]">
                    <option>New Patient Visit</option>
                    <option>Established Patient Follow-Up</option>
                    <option>Annual Physical</option>
                    <option>Sick Visit</option>
                    <option>Telehealth Visit</option>
                    <option>Lab Review</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Department</label>
                  <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0891B2]">
                    <option>Primary Care</option>
                    <option>Pediatrics</option>
                    <option>Women&apos;s Health</option>
                    <option>Mental Health</option>
                    <option>Physical Therapy</option>
                    <option>Telehealth</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Insurance Plan</label>
                <input type="text" placeholder="e.g. BlueCross BlueShield, Aetna, Medicare" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0891B2]" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Preferred Date</label>
                <input type="date" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0891B2]" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Patient Name</label>
                  <input type="text" placeholder="Full name" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0891B2]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Date of Birth</label>
                  <input type="date" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0891B2]" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Phone</label>
                  <input type="tel" placeholder="(813) 000-0000" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0891B2]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Email</label>
                  <input type="email" placeholder="you@email.com" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0891B2]" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Reason for Visit / Notes</label>
                <textarea rows={3} placeholder="Please describe your concern or symptoms..." className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0891B2] resize-none" />
              </div>
              <button className="w-full bg-[#0891B2] hover:bg-[#0770A0] text-white font-bold py-4 rounded-xl transition-colors">
                Submit Appointment Request
              </button>
              <p className="text-gray-400 text-xs text-center">We&rsquo;ll confirm your appointment within 2 hours during business hours.</p>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-5">
            {/* Hours */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-bold text-[#0C4A6E] mb-4">Hours & Location</h3>
              <div className="space-y-2 mb-5">
                {[
                  { day: "Monday – Thursday", hours: "8:00 AM – 6:00 PM" },
                  { day: "Friday", hours: "8:00 AM – 5:00 PM" },
                  { day: "Saturday", hours: "9:00 AM – 1:00 PM" },
                  { day: "Sunday", hours: "Telehealth Only" },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between text-sm border-b border-gray-50 pb-2">
                    <span className="text-gray-500">{h.day}</span>
                    <span className="text-gray-900 font-semibold">{h.hours}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#0891B2] font-semibold text-sm">📍 1234 Bay Center Drive, Tampa FL 33605</p>
              <p className="text-gray-500 text-sm mt-1">📞 (813) 555-0100</p>
            </div>

            {/* Insurance callout */}
            <div className="bg-[#F0FDFF] rounded-2xl border border-[#BAE6FD] p-6">
              <h3 className="font-bold text-[#0C4A6E] mb-2">Insurance Verification</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We verify your coverage before your appointment so there are no billing surprises. Most major plans accepted — call us to confirm yours.
              </p>
            </div>

            {/* New patient checklist */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-bold text-[#0C4A6E] mb-4">New Patients — What to Bring</h3>
              <ul className="space-y-2">
                {["Photo ID", "Insurance card", "List of current medications & dosages", "Previous medical records (if available)", "Referral paperwork (if applicable)", "Copay payment (cash, card, or HSA/FSA)"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full bg-[#0891B2]/15 flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0891B2]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Telehealth note */}
            <div className="bg-[#0C4A6E] rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-2">📱 Prefer Telehealth?</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Most follow-up visits, medication reviews, and minor illness appointments can be handled by video. Select &ldquo;Telehealth Visit&rdquo; in the form and we&rsquo;ll send you a secure link before your appointment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
