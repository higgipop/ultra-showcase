import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Inquire",
    desc: "Submit a brief inquiry form and we will send you our current viewbook, tuition schedule, and upcoming open house dates within one business day.",
  },
  {
    num: "02",
    title: "Tour",
    desc: "Visit campus, observe a class in session, and meet with our admissions director. Most families schedule a private tour before completing an application.",
  },
  {
    num: "03",
    title: "Apply",
    desc: "Complete the application, submit previous school records and teacher recommendations, and schedule a student visit day if applying for Grades 4–12.",
  },
  {
    num: "04",
    title: "Decision",
    desc: "Admission decisions are communicated within two weeks of a complete application. Rolling admissions — we welcome inquiries year-round.",
  },
];

const requirements = [
  "Completed application form",
  "Previous two years of school records",
  "Two teacher recommendations (Grades 4–12)",
  "Standardized test scores, if available",
  "Student visit day (Grades 4–12)",
  "Family interview with admissions director",
];

const faqs = [
  {
    q: "When does the admissions process open?",
    a: "Priority admissions for the following school year opens November 1. We accept rolling applications through July 31 for any remaining openings.",
  },
  {
    q: "Do you offer financial aid?",
    a: "Yes. Need-based financial aid is available through our scholarship fund, the Diocese of St. Petersburg Catholic Education Foundation, and Step Up for Students. Families are encouraged to apply regardless of financial situation.",
  },
  {
    q: "Is there a waitlist?",
    a: "Some grade levels fill quickly, particularly PK3 and Kindergarten. We maintain an active waitlist and notify families as space becomes available.",
  },
  {
    q: "What is the difference between the Classical and Montessori tracks?",
    a: "The Montessori track serves PK3–Grade 6 and emphasizes self-directed learning. The Classical track serves Grades 1–12 with a structured, Socratic approach. Both tracks share our Catholic faith formation program.",
  },
];

export default function EducationAdmissions() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }} className="bg-white">
      {/* Nav */}
      <nav className="bg-[#FAFAF7] border-b border-[#d4c9a8] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <Link href="home" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#1B2B5B] rounded-full flex items-center justify-center">
              <span style={{ fontFamily: "Georgia, serif" }} className="text-[#B8860B] text-xs font-bold italic">A</span>
            </div>
            <div>
              <span style={{ fontFamily: "Georgia, serif" }} className="italic text-[#1B2B5B] text-xs">Aquinas</span>
              <span className="block text-[#1B2B5B] text-xs font-bold tracking-[0.15em] uppercase leading-none">Academy</span>
            </div>
          </Link>
          <div className="hidden lg:flex items-center gap-7 text-sm text-gray-600">
            <Link href="about" className="hover:text-[#1B2B5B] transition-colors">About</Link>
            <Link href="admissions" className="text-[#1B2B5B] font-semibold">Admissions</Link>
            <Link href="contact" className="hover:text-[#1B2B5B] transition-colors">Contact</Link>
          </div>
          <Link href="contact" className="bg-[#1B2B5B] hover:bg-[#152248] text-white font-semibold px-4 py-2 rounded text-sm transition-colors">
            Schedule a Tour
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-[#1B2B5B] py-16 px-6 text-center">
        <p style={{ fontFamily: "Georgia, serif" }} className="text-[#B8860B] italic text-base mb-2">PK3–Grade 12</p>
        <h1 style={{ fontFamily: "Georgia, serif" }} className="text-4xl text-white font-normal italic mb-3">
          Admissions
        </h1>
        <p className="text-white/60 text-base max-w-xl mx-auto">
          We make the process straightforward. Most families complete all four steps within three to four weeks.
        </p>
      </section>

      {/* Process steps */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#B8860B] text-xs font-bold uppercase tracking-widest mb-8">The Process</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="border border-gray-100 rounded-xl p-7 bg-[#FAFAF7]">
                <p style={{ fontFamily: "Georgia, serif" }} className="text-[#B8860B] text-3xl italic mb-3">{s.num}</p>
                <h3 className="font-bold text-[#1B2B5B] text-base mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements + tuition */}
      <section className="bg-[#FAFAF7] border-y border-[#e8dfc8] py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-[#B8860B] text-xs font-bold uppercase tracking-widest mb-4">Requirements</p>
            <h2 style={{ fontFamily: "Georgia, serif" }} className="text-2xl text-[#1B2B5B] font-normal italic mb-6">
              Application Checklist
            </h2>
            <ul className="space-y-3">
              {requirements.map((r) => (
                <li key={r} className="flex items-start gap-3 text-gray-600 text-sm">
                  <span className="w-4 h-4 rounded-full border-2 border-[#B8860B] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B]" />
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[#B8860B] text-xs font-bold uppercase tracking-widest mb-4">Tuition & Aid</p>
            <h2 style={{ fontFamily: "Georgia, serif" }} className="text-2xl text-[#1B2B5B] font-normal italic mb-5">
              Financial Accessibility
            </h2>
            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>Annual tuition ranges from $7,200 (PK3 half-day) to $13,500 (Grades 9–12). Payment plans are available monthly, quarterly, or annually through FACTS Management.</p>
              <p>Need-based financial aid is awarded on a rolling basis. Over 30% of our families receive some form of assistance. We do not want tuition to be a barrier for families who are the right fit for Aquinas.</p>
              <p>Florida residents may be eligible for the Step Up for Students scholarship, which covers up to $8,000 per year for qualifying families.</p>
            </div>
            <Link href="contact" className="inline-block mt-6 text-[#1B2B5B] font-semibold text-sm border-b border-[#1B2B5B] pb-0.5 hover:text-[#B8860B] hover:border-[#B8860B] transition-colors">
              Request financial aid information →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#B8860B] text-xs font-bold uppercase tracking-widest mb-4">FAQs</p>
          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-3xl text-[#1B2B5B] font-normal italic mb-10">
            Common Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-[#1B2B5B] text-sm mb-2">{f.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open house CTA */}
      <section className="bg-[#1B2B5B] py-16 px-6 text-center">
        <p style={{ fontFamily: "Georgia, serif" }} className="text-[#B8860B] italic text-base mb-2">Next Open House — January 15th</p>
        <h2 style={{ fontFamily: "Georgia, serif" }} className="text-3xl text-white font-normal italic mb-4">
          The best way to know if Aquinas is right for your family is to visit.
        </h2>
        <p className="text-white/60 mb-8">Seating is limited. Reserve your family&rsquo;s spot today.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="contact" className="bg-[#B8860B] hover:bg-[#a07609] text-white font-semibold px-8 py-3 rounded transition-colors">
            Reserve Open House Spot
          </Link>
          <Link href="contact" className="border border-white/30 hover:border-white text-white font-semibold px-8 py-3 rounded transition-colors">
            Schedule a Private Tour
          </Link>
        </div>
      </section>
    </div>
  );
}
