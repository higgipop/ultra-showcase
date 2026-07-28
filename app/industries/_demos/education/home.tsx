import Link from "next/link";

const pillars = [
  {
    letter: "F",
    title: "Faith Formation",
    desc: "Daily Mass, theology from K–12, and a service learning program that connects faith to action. Every student graduates with a firm understanding of Catholic teaching and a life of prayer.",
  },
  {
    letter: "A",
    title: "Academics",
    desc: "A classical curriculum grounded in the liberal arts — Great Books, Latin, Socratic seminar, and rigorous standards across every discipline. We prepare students for college and for life.",
  },
  {
    letter: "C",
    title: "Character",
    desc: "Virtue ethics runs through every class, every sport, every interaction. We develop leaders who are honest, disciplined, and genuinely concerned for others.",
  },
];

const classicalBullets = [
  "Socratic seminar method from 6th grade onward",
  "Great Books reading list through 12th grade",
  "Latin offered from 5th grade",
  "Formal rhetoric and logic curriculum",
];

const montessoriBullets = [
  "Self-directed learning environments (PK3–6)",
  "Mixed-age classrooms that mirror real-world collaboration",
  "Uninterrupted 3-hour work periods",
  "Concrete materials that develop abstract reasoning",
];

export default function EducationHome() {
  return (
    <div style={{ fontFamily: "Georgia, serif" }} className="bg-[#FAFAF7]">
      {/* Nav */}
      <nav className="bg-[#FAFAF7] border-b border-[#d4c9a8] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#1B2B5B] rounded-full flex items-center justify-center">
              <span style={{ fontFamily: "Georgia, serif" }} className="text-[#B8860B] text-xs font-bold italic">A</span>
            </div>
            <div>
              <span style={{ fontFamily: "Georgia, serif" }} className="italic text-[#1B2B5B] text-xs">Aquinas</span>
              <span className="block text-[#1B2B5B] text-xs font-bold tracking-[0.15em] uppercase leading-none">Academy</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-7 text-sm font-sans text-gray-600" style={{ fontFamily: "system-ui, sans-serif" }}>
            <Link href="about" className="hover:text-[#1B2B5B] transition-colors">About</Link>
            <Link href="admissions" className="hover:text-[#1B2B5B] transition-colors">Academics</Link>
            <Link href="admissions" className="hover:text-[#1B2B5B] transition-colors">Admissions</Link>
            <Link href="about" className="hover:text-[#1B2B5B] transition-colors">Faith</Link>
            <Link href="contact" className="hover:text-[#1B2B5B] transition-colors">Give</Link>
          </div>
          <Link
            href="contact"
            style={{ fontFamily: "system-ui, sans-serif" }}
            className="bg-[#1B2B5B] hover:bg-[#152248] text-white font-semibold px-4 py-2 rounded text-sm transition-colors"
          >
            Schedule a Tour
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 lg:py-32 text-center px-6">
        <p
          style={{ fontFamily: "system-ui, sans-serif" }}
          className="text-[#B8860B] text-xs font-bold uppercase tracking-[0.25em] mb-5"
        >
          Catholic · Classical · Community
        </p>
        <h1
          style={{ fontFamily: "Georgia, serif" }}
          className="text-4xl lg:text-6xl text-[#1B2B5B] font-normal leading-tight mb-6 max-w-3xl mx-auto italic"
        >
          An Education Built to Last a Lifetime.
        </h1>
        <p style={{ fontFamily: "system-ui, sans-serif" }} className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto mb-10">
          Rooted in faith, committed to excellence, forming minds and character from preschool through graduation.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center" style={{ fontFamily: "system-ui, sans-serif" }}>
          <Link
            href="contact"
            className="bg-[#1B2B5B] hover:bg-[#152248] text-white font-semibold px-8 py-4 rounded transition-colors"
          >
            Schedule a Tour
          </Link>
          <Link
            href="admissions"
            className="border-2 border-[#1B2B5B] text-[#1B2B5B] hover:bg-[#1B2B5B] hover:text-white font-semibold px-8 py-4 rounded transition-colors"
          >
            Learn About Admissions
          </Link>
        </div>
      </section>

      {/* Full-width photo */}
      <div className="w-full aspect-[21/6] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80&auto=format&fit=crop"
          alt="Aquinas Academy students"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Three pillars */}
      <section className="py-20 bg-[#FAFAF7]">
        <div className="max-w-6xl mx-auto px-6">
          <p
            style={{ fontFamily: "Georgia, serif" }}
            className="text-center text-[#1B2B5B] text-xl italic mb-12"
          >
            Faith · Academics · Character
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="text-center">
                <div className="w-14 h-14 rounded-full border-2 border-[#B8860B] flex items-center justify-center mx-auto mb-5">
                  <span style={{ fontFamily: "Georgia, serif" }} className="text-[#B8860B] text-xl italic font-bold">{p.letter}</span>
                </div>
                <h3
                  style={{ fontFamily: "Georgia, serif" }}
                  className="text-[#1B2B5B] text-xl mb-3 italic"
                >
                  {p.title}
                </h3>
                <p style={{ fontFamily: "system-ui, sans-serif" }} className="text-gray-500 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs — two columns */}
      <section className="py-20 bg-white border-y border-[#e8dfc8]">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            style={{ fontFamily: "Georgia, serif" }}
            className="text-3xl text-[#1B2B5B] italic mb-12 text-center font-normal"
          >
            Academic Programs
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-[#FAFAF7] border border-[#e8dfc8] rounded-xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#1B2B5B]" />
                <h3
                  style={{ fontFamily: "system-ui, sans-serif" }}
                  className="font-bold text-[#1B2B5B] text-sm uppercase tracking-wider"
                >
                  Classical Education Track
                </h3>
              </div>
              <p style={{ fontFamily: "system-ui, sans-serif" }} className="text-gray-500 text-sm mb-5 leading-relaxed">
                Grades 1–12. The trivium structure — Grammar, Logic, and Rhetoric — governs instruction at every level, producing students who can think, reason, and communicate at the highest level.
              </p>
              <ul style={{ fontFamily: "system-ui, sans-serif" }} className="space-y-2.5">
                {classicalBullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="text-[#B8860B] font-bold mt-0.5">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#FAFAF7] border border-[#e8dfc8] rounded-xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#B8860B]" />
                <h3
                  style={{ fontFamily: "system-ui, sans-serif" }}
                  className="font-bold text-[#1B2B5B] text-sm uppercase tracking-wider"
                >
                  Montessori Track
                </h3>
              </div>
              <p style={{ fontFamily: "system-ui, sans-serif" }} className="text-gray-500 text-sm mb-5 leading-relaxed">
                PK3–Grade 6 only. Children develop independence, concentration, and intrinsic motivation through self-directed work in a carefully prepared environment.
              </p>
              <ul style={{ fontFamily: "system-ui, sans-serif" }} className="space-y-2.5">
                {montessoriBullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="text-[#B8860B] font-bold mt-0.5">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial — dark navy */}
      <section className="bg-[#1B2B5B] py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p
            style={{ fontFamily: "Georgia, serif" }}
            className="text-white text-xl lg:text-2xl italic leading-relaxed mb-8"
          >
            &ldquo;Aquinas didn&rsquo;t just educate our children — it formed them. The difference is visible every single day.&rdquo;
          </p>
          <p style={{ fontFamily: "system-ui, sans-serif" }} className="text-[#B8860B] text-sm font-semibold uppercase tracking-widest">
            Parent of Aquinas graduate
          </p>
        </div>
      </section>

      {/* By the numbers */}
      <section className="py-16 bg-white border-b border-[#e8dfc8]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[["450", "Students Enrolled"], ["98%", "College Acceptance"], ["4:1", "Student–Teacher Ratio"], ["Est. 1985", "Serving Tampa Bay"]].map(([val, label]) => (
            <div key={label}>
              <p style={{ fontFamily: "Georgia, serif" }} className="text-3xl text-[#1B2B5B] italic">{val}</p>
              <p style={{ fontFamily: "system-ui, sans-serif" }} className="text-gray-500 text-sm mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="py-20 bg-[#FAFAF7] text-center px-6">
        <p style={{ fontFamily: "system-ui, sans-serif" }} className="text-[#B8860B] text-xs font-bold uppercase tracking-widest mb-3">
          Admissions
        </p>
        <h2 style={{ fontFamily: "Georgia, serif" }} className="text-3xl text-[#1B2B5B] italic font-normal mb-3">
          Our next open house is January 15th.
        </h2>
        <p style={{ fontFamily: "system-ui, sans-serif" }} className="text-gray-500 mb-8 leading-relaxed">
          Meet our faculty, tour the campus, and ask every question you have. Limited seating — reserve your spot today.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center" style={{ fontFamily: "system-ui, sans-serif" }}>
          <Link href="contact" className="bg-[#1B2B5B] hover:bg-[#152248] text-white font-semibold px-8 py-4 rounded transition-colors">
            Schedule a Tour
          </Link>
          <Link href="admissions" className="border border-[#d4c9a8] text-[#1B2B5B] hover:border-[#1B2B5B] font-semibold px-8 py-4 rounded transition-colors">
            Download Viewbook
          </Link>
        </div>
      </section>
    </div>
  );
}
