import Link from "next/link";

const providers = [
  {
    name: "Dr. Maria Santos, MD",
    title: "Family Medicine",
    creds: "Board-Certified Family Medicine · MD, University of Florida · Residency: USF Health",
    bio: "Dr. Santos has been practicing family medicine in Tampa Bay for 18 years. She specializes in chronic disease management, preventive care, and women's health. She is fluent in Spanish and English.",
    accepting: true,
  },
  {
    name: "Dr. James Park, MD",
    title: "Internal Medicine",
    creds: "Board-Certified Internal Medicine · MD, Emory University · Fellowship: Mayo Clinic",
    bio: "Dr. Park focuses on adult medicine, complex chronic conditions, and preventive cardiology. He spent 5 years at Mayo Clinic before returning to Tampa Bay to serve his community.",
    accepting: true,
  },
  {
    name: "Dr. Emily Chen, DO",
    title: "Pediatrics",
    creds: "Board-Certified Pediatrics · DO, NSU College of Osteopathic Medicine · Residency: All Children's Hospital",
    bio: "Dr. Chen has dedicated her career to pediatric medicine, from newborns to teens. She is known for her patience with anxious children and clear communication with parents.",
    accepting: true,
  },
  {
    name: "Dr. Robert Williams, MD",
    title: "Family Medicine & Urgent Care",
    creds: "Board-Certified Family Medicine · MD, USF Morsani · Fellowship: Global Health",
    bio: "Dr. Williams leads our urgent care services and also maintains a panel of primary care patients. He has extensive international health experience and speaks conversational Haitian Creole.",
    accepting: false,
  },
];

export default function MedicalAbout() {
  return (
    <div className="bg-white font-sans">
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-[#0C4A6E] text-xl">Bay<span className="text-[#0891B2]">Medical</span></Link>
          <div className="hidden lg:flex gap-6 text-sm font-semibold text-gray-600">
            <Link href="services" className="hover:text-[#0891B2]">Services</Link>
            <Link href="primary-care" className="hover:text-[#0891B2]">Primary Care</Link>
            <Link href="pediatrics" className="hover:text-[#0891B2]">Pediatrics</Link>
            <Link href="about" className="text-[#0891B2]">Providers</Link>
          </div>
          <Link href="contact" className="bg-[#0891B2] hover:bg-[#0779a0] text-white font-bold px-4 py-2 rounded text-sm transition-colors">Book Appointment</Link>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-[#0C4A6E] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-black text-white mb-2">Meet Your Providers</h1>
          <p className="text-white/60">Board-certified physicians committed to your long-term health.</p>
        </div>
      </section>

      {/* Large provider cards */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          {providers.map((p, i) => (
            <div key={p.name} className={`rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow ${i % 2 === 0 ? "" : "bg-[#F0F9FF] border-blue-100"}`}>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-0">
                <div className="bg-gray-200 sm:col-span-1 aspect-square sm:aspect-auto flex items-center justify-center text-gray-400 text-sm min-h-[200px]">
                  Provider Photo
                </div>
                <div className="sm:col-span-3 p-7">
                  <div className="flex items-start justify-between flex-wrap gap-3 mb-1">
                    <div>
                      <h2 className="text-xl font-black text-[#0C4A6E]">{p.name}</h2>
                      <p className="text-[#0891B2] font-bold text-sm">{p.title}</p>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${p.accepting ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                      {p.accepting ? "✓ Accepting New Patients" : "Not Accepting New Patients"}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs mb-3">{p.creds}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{p.bio}</p>
                  {p.accepting && (
                    <Link href="contact" className="inline-block bg-[#0891B2] hover:bg-[#0779a0] text-white font-bold px-5 py-2.5 rounded text-sm transition-colors">
                      Book with {p.name.split(" ")[1]} →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Practice philosophy */}
      <section className="bg-[#0C4A6E] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-black text-white mb-6">Our Philosophy</h2>
          <blockquote className="text-white/80 text-xl leading-relaxed italic">
            "We believe the best healthcare is built on relationships — a physician who knows you, your history, and your goals is better equipped to keep you healthy than any technology alone."
          </blockquote>
          <p className="text-white/40 text-sm mt-4">— Dr. Maria Santos, Founder</p>
        </div>
      </section>

      {/* Support staff + awards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-black text-[#0C4A6E] mb-5">Our Support Team</h2>
            <div className="space-y-3">
              {[
                ["Jennifer Torres, RN","Lead Nurse, 12 years"],
                ["Carlos Rivera, MA","Medical Assistant, Bilingual (Spanish)"],
                ["Sarah Kim, LPN","Pediatric Specialist"],
                ["David Lopez, Phlebotomist","In-house lab, certified"],
                ["Amanda Wright","Patient Coordinator"],
              ].map(([name, role]) => (
                <div key={name} className="flex items-center gap-4 py-3 border-b border-gray-100 last:border-0">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex-shrink-0 flex items-center justify-center text-gray-400 text-xs">Photo</div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{name}</p>
                    <p className="text-gray-400 text-xs">{role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-black text-[#0C4A6E] mb-5">Awards & Recognition</h2>
            <div className="grid grid-cols-2 gap-3">
              {["Tampa Bay's Best Primary Care 2024","USF Health Community Partner","NCQA Patient-Centered Medical Home","Press Ganey Excellence Award","Florida Medical Association Member","AAFP Member Practice","ACP Member Practice","Google 4.9★ (340+ reviews)"].map((a) => (
                <div key={a} className="border border-gray-100 rounded-xl p-4">
                  <span className="text-[#0891B2] text-lg block mb-1">🏆</span>
                  <p className="text-gray-700 text-xs font-semibold leading-snug">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
