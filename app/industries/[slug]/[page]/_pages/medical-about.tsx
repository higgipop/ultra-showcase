import Link from "next/link";

const providers = [
  {
    name: "Dr. Amanda Chen, MD",
    title: "Internal Medicine · Primary Care",
    edu: "Johns Hopkins School of Medicine",
    res: "Tampa General Hospital",
    accepting: true,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dr. Chen has been practicing internal medicine in Tampa Bay for over 12 years, with a focus on preventive care and managing complex chronic conditions. She believes in building long-term relationships with her patients and taking the time to truly understand their health goals. Sed do eiusmod tempor incididunt ut labore.",
    interests: ["Preventive medicine", "Diabetes management", "Women's internal medicine", "Complex chronic disease"],
  },
  {
    name: "Dr. Marcus Webb, DO",
    title: "Family Medicine · Sports Medicine",
    edu: "Nova Southeastern University",
    res: "USF Health",
    accepting: true,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dr. Webb brings a whole-body approach to family medicine, treating patients from infancy through geriatrics. A former collegiate athlete himself, he has a particular passion for sports medicine and keeping active patients in the game. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    interests: ["Sports injury & rehab", "Adolescent medicine", "Men's health", "Musculoskeletal conditions"],
  },
  {
    name: "Dr. Priya Nair, MD",
    title: "Pediatrics · Adolescent Medicine",
    edu: "University of Michigan",
    res: "All Children's Hospital",
    accepting: false,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dr. Nair has dedicated her career to the health of children and adolescents. She is known for her gentle approach with anxious young patients and her ability to connect with teenagers on sensitive health topics. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    interests: ["Newborn care", "Developmental pediatrics", "Adolescent mental health", "Immunization schedules"],
  },
  {
    name: "Sarah Hoffman, LCSW",
    title: "Mental Health · Anxiety · ADHD",
    edu: "Florida State University (MSW)",
    res: "Tampa Bay Counseling Center",
    accepting: true,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sarah specializes in evidence-based treatment for anxiety, depression, ADHD, and life transitions. She works with adults and adolescents using a combination of cognitive-behavioral therapy (CBT), motivational interviewing, and mindfulness-based techniques. Excepteur sint occaecat cupidatat non proident.",
    interests: ["Anxiety & panic disorders", "ADHD in adults", "Life transitions", "Grief & trauma"],
  },
];

export default function MedicalAboutPage() {
  return (
    <div className="bg-white font-sans">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0C4A6E] to-[#0891B2] pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-cyan-200 text-xs font-semibold tracking-widest uppercase mb-4">Our Providers</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">A Team Built Around You</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Every provider on our team is carefully selected for clinical excellence and genuine compassion. You&rsquo;re not a chart number here.
          </p>
        </div>
      </section>

      {/* Providers */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
          {providers.map((p) => (
            <div key={p.name} className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="grid lg:grid-cols-3">
                {/* Photo + basics */}
                <div className="bg-gradient-to-b from-[#E0F2FE] to-[#F0FDFF] p-8 flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 rounded-full bg-[#0891B2]/20 border-4 border-white shadow flex items-center justify-center text-[#0891B2] font-black text-3xl mb-4">
                    {p.name.split(" ")[1][0]}
                  </div>
                  <h2 className="font-bold text-[#0C4A6E] leading-tight mb-1">{p.name}</h2>
                  <p className="text-[#0891B2] text-xs font-semibold mb-3">{p.title}</p>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${p.accepting ? "bg-green-50 text-green-700" : "bg-orange-50 text-orange-600"}`}>
                    {p.accepting ? "Accepting New Patients" : "Waitlist Only"}
                  </span>
                  <div className="mt-4 text-xs text-gray-500 space-y-1">
                    <p><strong>Education:</strong> {p.edu}</p>
                    <p><strong>Residency:</strong> {p.res}</p>
                  </div>
                </div>
                {/* Bio */}
                <div className="lg:col-span-2 p-8">
                  <p className="text-gray-600 leading-relaxed mb-5">{p.bio}</p>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Areas of Interest</p>
                    <div className="flex flex-wrap gap-2">
                      {p.interests.map((i) => (
                        <span key={i} className="bg-[#F0FDFF] border border-[#BAE6FD] text-[#0C4A6E] text-xs font-semibold px-3 py-1 rounded-full">{i}</span>
                      ))}
                    </div>
                  </div>
                  {p.accepting && (
                    <Link href="/contact" className="inline-block mt-6 bg-[#0891B2] hover:bg-[#0770A0] text-white font-bold px-6 py-2.5 rounded-lg transition-colors text-sm">
                      Book with {p.name.split(" ")[1]}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#0891B2] text-xs font-semibold tracking-widest uppercase mb-4">Our Philosophy</p>
          <h2 className="text-3xl font-bold text-[#0C4A6E] mb-6">Medicine that takes its time.</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. We intentionally limit our panel size so that every provider has the time to actually listen. Appointments start on time. Messages are returned by end of day.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We believe that a patient who feels heard is more likely to follow through, ask questions, and stay healthy long-term. That&rsquo;s not idealism — it&rsquo;s better medicine.
          </p>
        </div>
      </section>

      {/* Join our team */}
      <section className="py-14 bg-[#0C4A6E] text-center px-6">
        <h2 className="text-2xl font-bold text-white mb-3">Join Our Team</h2>
        <p className="text-white/70 mb-6 max-w-xl mx-auto">We&rsquo;re growing and looking for providers and staff who share our commitment to patient-centered care.</p>
        <Link href="/contact" className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#0C4A6E] font-bold px-8 py-3 rounded-xl transition-colors">
          View Open Positions
        </Link>
      </section>
    </div>
  );
}
