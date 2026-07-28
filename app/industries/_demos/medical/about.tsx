import Link from "next/link";

const providers = [
  { name: "Dr. Sarah Chen, MD", specialty: "Primary Care & Internal Medicine", bio: "Dr. Chen completed her residency at Johns Hopkins and has been practicing in Tampa Bay for 12 years. She specializes in preventive care and chronic disease management.", creds: ["MD, Johns Hopkins University","Board Certified, Internal Medicine","ABIM Diplomate","15+ years experience"], img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80&auto=format&fit=crop&crop=faces" },
  { name: "Dr. James Park, MD", specialty: "Primary Care & Men's Health", bio: "Dr. Park joined BayMedical in 2015 after a decade at Tampa General. He focuses on cardiovascular risk reduction and preventive medicine for adult men.", creds: ["MD, University of Florida","Board Certified, Family Medicine","Fellow, American Academy of Family Physicians","10+ years experience"], img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80&auto=format&fit=crop&crop=faces" },
  { name: "Dr. Maria Lopez, MD", specialty: "Pediatrics", bio: "Dr. Lopez trained at CHOP and has dedicated her career to children's health. She is fluent in English and Spanish and sees patients from birth through age 18.", creds: ["MD, University of Miami","Board Certified, Pediatrics","Fellow, American Academy of Pediatrics","8+ years experience"], img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format&fit=crop&crop=faces" },
  { name: "Dr. Thomas Reed, DO", specialty: "Geriatrics & Preventive Medicine", bio: "Dr. Reed specializes in care for adults over 65 and coordinates complex multi-specialty care. He is known for his thoroughness and his patients' exceptional outcomes.", creds: ["DO, A.T. Still University","Board Certified, Internal Medicine","Certificate of Added Qualification, Geriatrics","18+ years experience"], img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80&auto=format&fit=crop&crop=faces" },
];

const support = [
  { name: "Keisha Davis, RN", role: "Head Nurse", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80&auto=format&fit=crop&crop=faces" },
  { name: "Angela Torres, MA", role: "Medical Assistant", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop&crop=faces" },
  { name: "David Kim, PA-C", role: "Physician Assistant", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop&crop=faces" },
];

export default function MedicalAbout() {
  return (
    <div className="bg-white font-sans">
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-[#0C4A6E] text-xl tracking-tight">Bay<span className="text-[#0891B2]">Medical</span></Link>
          <div className="hidden lg:flex gap-6 text-sm font-semibold text-gray-600">
            <Link href="services" className="hover:text-[#0891B2]">Services</Link>
            <Link href="primary-care" className="hover:text-[#0891B2]">Primary Care</Link>
            <Link href="pediatrics" className="hover:text-[#0891B2]">Pediatrics</Link>
            <Link href="about" className="text-[#0891B2]">Providers</Link>
          </div>
          <Link href="contact" className="bg-[#0891B2] hover:bg-[#0779a0] text-white font-bold px-4 py-2 rounded text-sm transition-colors">Book Appointment</Link>
        </div>
      </nav>

      {/* Photo strip hero */}
      <section className="py-14 px-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#0891B2] text-xs font-bold uppercase tracking-[0.25em] mb-3">Our Care Team</p>
            <h1 className="text-3xl lg:text-5xl font-black text-[#0C4A6E] leading-tight mb-4">Meet Your Providers</h1>
            <p className="text-gray-500 text-lg leading-relaxed">Board-certified physicians committed to building long-term relationships with their patients — not just treating the immediate complaint.</p>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-video">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80&auto=format&fit=crop" alt="BayMedical clinic" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Provider profiles */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-10">
          {providers.map((p, i) => (
            <div key={p.name} className={`grid grid-cols-1 lg:grid-cols-4 gap-8 items-start ${i > 0 ? "border-t border-gray-100 pt-10" : ""}`}>
              <div className="rounded-2xl overflow-hidden aspect-square lg:aspect-[3/4]">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover object-top" />
              </div>
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-black text-[#0C4A6E] mb-1">{p.name}</h2>
                <p className="text-[#0891B2] font-semibold text-sm mb-4">{p.specialty}</p>
                <p className="text-gray-600 leading-relaxed mb-5">{p.bio}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.creds.map((c) => (
                    <span key={c} className="bg-[#F0F9FF] border border-[#0891B2]/20 text-[#0C4A6E] text-xs font-bold px-3 py-1.5 rounded-full">{c}</span>
                  ))}
                </div>
                <Link href="contact" className="inline-block bg-[#0891B2] hover:bg-[#0779a0] text-white font-bold px-5 py-2.5 rounded text-sm transition-colors">Book with Dr. {p.name.split(" ")[1]} →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Support staff */}
      <section className="bg-[#F0F9FF] border-y border-[#0891B2]/10 py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-black text-[#0C4A6E] mb-8">Support Staff</h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-5">
            {support.map((s) => (
              <div key={s.name} className="text-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-2 border-2 border-[#0891B2]/20">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover object-top" />
                </div>
                <p className="font-bold text-[#0C4A6E] text-xs">{s.name.split(",")[0]}</p>
                <p className="text-gray-400 text-xs">{s.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards strip */}
      <section className="bg-[#0C4A6E] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center">
          {["Patients' Choice Award 2024","Best Primary Care Tampa Bay — Tampa Bay Times","Top Docs 2023 — Tampa Magazine","NCQA Patient-Centered Medical Home","Healthgrades Outstanding Patient Experience"].map((a) => (
            <span key={a} className="border border-white/20 rounded-lg px-4 py-2 text-white text-xs font-semibold text-center">{a}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
