// medical contact: teal hero, full intake form, hours/location, what to bring
import Link from "next/link";

export default function MedicalContact() {
  return (
    <div className="bg-white font-sans">
      <div className="bg-[#0891B2] text-white text-center py-2 text-sm font-semibold">
        New Patients Welcome · Same-Day Appointments · <a href="tel:8135550100" className="underline">(813) 555-0100</a>
      </div>

      <section className="bg-[#0C4A6E] py-12 px-4 text-center">
        <h1 className="text-4xl font-bold text-white">Request an Appointment</h1>
        <p className="text-white/70 text-lg mt-3">We confirm within 2 hours via text or email.</p>
      </section>

      <section className="py-14 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.4fr_1fr] gap-10">
          {/* Form */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#0C4A6E] mb-6">Appointment Request</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Patient Type</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <input type="radio" name="patientType" defaultChecked className="accent-[#0891B2]" /> New Patient
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <input type="radio" name="patientType" className="accent-[#0891B2]" /> Existing Patient
                  </label>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">First Name *</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#0891B2] focus:outline-none" placeholder="First name" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Last Name *</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#0891B2] focus:outline-none" placeholder="Last name" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Date of Birth</label>
                  <input type="date" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#0891B2] focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Phone Number *</label>
                  <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#0891B2] focus:outline-none" placeholder="(813) 555-0100" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Email Address</label>
                <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#0891B2] focus:outline-none" placeholder="you@email.com" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Visit Type *</label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 focus:ring-2 focus:ring-[#0891B2] focus:outline-none">
                    <option value="">Select...</option>
                    <option>New Patient Visit</option>
                    <option>Annual Wellness Exam</option>
                    <option>Sick / Urgent Visit</option>
                    <option>Follow-Up</option>
                    <option>Telehealth Visit</option>
                    <option>Sports Physical</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Department *</label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 focus:ring-2 focus:ring-[#0891B2] focus:outline-none">
                    <option value="">Select...</option>
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
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Preferred Provider</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 focus:ring-2 focus:ring-[#0891B2] focus:outline-none">
                  <option value="">No preference</option>
                  <option>Dr. Amanda Chen, MD</option>
                  <option>Dr. Marcus Webb, DO</option>
                  <option>Dr. Priya Nair, MD</option>
                  <option>Sarah Hoffman, LCSW</option>
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Preferred Date</label>
                  <input type="date" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#0891B2] focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Preferred Time</label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 focus:ring-2 focus:ring-[#0891B2] focus:outline-none">
                    <option>Morning (7am–12pm)</option>
                    <option>Afternoon (12pm–5pm)</option>
                    <option>Evening (5pm–7pm)</option>
                    <option>Saturday (8am–2pm)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Insurance Provider</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#0891B2] focus:outline-none" placeholder="e.g. Aetna, Blue Cross, Medicare" />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Reason for Visit / Notes</label>
                <textarea rows={3} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#0891B2] focus:outline-none resize-none" placeholder="Briefly describe your reason for visit or any relevant medical history..." />
              </div>

              <button type="submit" className="w-full bg-[#0891B2] hover:bg-[#0770A0] text-white font-bold py-4 rounded-xl text-lg transition-colors">
                Request Appointment
              </button>
              <p className="text-gray-400 text-xs text-center">We confirm via text or email within 2 hours. Your information is kept confidential.</p>
            </form>
          </div>

          {/* Right side */}
          <div className="space-y-5">
            <div className="bg-[#0C4A6E] rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-5">Office Hours</h3>
              <div className="space-y-3">
                {[
                  { day: "Monday – Friday", hours: "7:00 am – 7:00 pm" },
                  { day: "Saturday", hours: "8:00 am – 2:00 pm" },
                  { day: "Telehealth", hours: "7 days a week" },
                  { day: "After-Hours Nurse Line", hours: "Until 10:00 pm weekdays" },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between border-b border-white/10 pb-3 last:border-0 last:pb-0">
                    <span className="text-white/70 text-sm">{h.day}</span>
                    <span className="text-white font-semibold text-sm">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="font-bold text-[#0C4A6E] text-lg mb-3">Our Location</h3>
              <p className="text-gray-700 text-sm mb-1">2501 Rocky Point Road, Suite 400</p>
              <p className="text-gray-700 text-sm mb-4">Tampa, FL 33607</p>
              <a href="tel:8135550100" className="text-2xl font-bold text-[#0891B2] hover:underline block">(813) 555-0100</a>
            </div>

            <div className="bg-[#F0F9FF] border border-[#BAE6FD] rounded-2xl p-6">
              <h3 className="font-bold text-[#0C4A6E] mb-3">What to Bring to Your Appointment</h3>
              <ul className="space-y-2">
                {["Photo ID (driver's license or passport)", "Insurance card", "List of current medications and dosages", "Medical records from previous providers", "Completed new patient forms (we email these)", "List of questions for your provider"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="text-[#0891B2] font-bold mt-0.5">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
              <p className="font-bold text-yellow-800 text-sm mb-1">Insurance Verification Note</p>
              <p className="text-yellow-700 text-xs leading-relaxed">We verify insurance before your visit. Please provide your insurance information when scheduling. If you&apos;re uninsured, we offer self-pay rates — call to discuss.</p>
            </div>

            <div className="bg-[#0891B2] rounded-2xl p-5 text-center">
              <p className="text-white/80 text-sm mb-1">Need urgent care today?</p>
              <a href="tel:8135550100" className="text-3xl font-bold text-white">(813) 555-0100</a>
              <p className="text-white/60 text-xs mt-1">Same-day slots held for urgent needs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
