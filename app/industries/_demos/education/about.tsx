import Link from "next/link";

const leadership = [
  {
    name: "Dr. Catherine Moore",
    title: "Principal",
    bio: "Dr. Moore joined Aquinas in 2012 after 18 years in Catholic education. She holds a doctorate in Educational Leadership from the University of Notre Dame and has guided the school through two campus expansions and the launch of the Classical track.",
  },
  {
    name: "Mr. Daniel Reyes",
    title: "VP of Academic Affairs",
    bio: "Mr. Reyes oversees curriculum development, faculty formation, and academic standards. He holds a master's degree in Classical Studies from Ave Maria University and has been at Aquinas since 2015.",
  },
  {
    name: "Fr. Thomas Callahan",
    title: "Campus Minister",
    bio: "Father Callahan has served as campus minister since 2018, leading daily Mass, retreat programs, and the school's service learning initiative. He is a graduate of Franciscan University of Steubenville.",
  },
];

const accreditations = [
  { name: "SACS/AdvancED", body: "Southern Association of Colleges and Schools" },
  { name: "Diocese of St. Petersburg", body: "Catholic Schools Department — Full Accreditation" },
  { name: "Montessori Accreditation Council", body: "MACTE — Early Childhood & Elementary" },
  { name: "National Catholic Educational Association", body: "NCEA Institutional Member since 1986" },
];

export default function EducationAbout() {
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
            <Link href="about" className="text-[#1B2B5B] font-semibold">About</Link>
            <Link href="admissions" className="hover:text-[#1B2B5B] transition-colors">Admissions</Link>
            <Link href="contact" className="hover:text-[#1B2B5B] transition-colors">Contact</Link>
          </div>
          <Link href="contact" className="bg-[#1B2B5B] hover:bg-[#152248] text-white font-semibold px-4 py-2 rounded text-sm transition-colors">
            Schedule a Tour
          </Link>
        </div>
      </nav>

      {/* Page header */}
      <section className="bg-[#1B2B5B] py-16 px-6 text-center">
        <p style={{ fontFamily: "Georgia, serif" }} className="text-[#B8860B] italic text-base mb-2">Est. 1985</p>
        <h1 style={{ fontFamily: "Georgia, serif" }} className="text-4xl text-white font-normal italic mb-3">
          About Aquinas Academy
        </h1>
        <p className="text-white/60 text-base max-w-xl mx-auto">
          Four decades of forming students in faith, virtue, and the love of learning.
        </p>
      </section>

      {/* School history */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#B8860B] text-xs font-bold uppercase tracking-widest mb-4">Our History</p>
          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-3xl text-[#1B2B5B] font-normal italic mb-6">
            Founded on a conviction, not a trend.
          </h2>
          <div className="space-y-5 text-gray-600 leading-relaxed text-base">
            <p>
              Aquinas Academy was founded in 1985 by a small group of Tampa Bay Catholic families who believed that education grounded in the Western intellectual tradition and the Catholic faith produced graduates who were not just employed, but formed — people of conviction, clarity, and compassion.
            </p>
            <p>
              The school opened with 47 students in a single building in South Tampa. Today, more than 450 students attend across a 12-acre campus, served by 62 faculty and staff. The founding vision has not changed.
            </p>
            <p>
              In 2008, Aquinas added a Montessori track for PK3 through 6th grade — recognizing that the same spirit of intellectual freedom that drives Classical education at the secondary level is best cultivated through self-directed discovery at the primary level.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#FAFAF7] border-y border-[#e8dfc8] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#B8860B] text-xs font-bold uppercase tracking-widest mb-4">Our Mission</p>
          <p style={{ fontFamily: "Georgia, serif" }} className="text-[#1B2B5B] text-2xl italic leading-relaxed font-normal">
            &ldquo;To form the whole person — mind, body, and soul — through a rigorous Catholic education rooted in the classical tradition, so that every graduate leaves equipped to pursue truth, live virtuously, and serve others.&rdquo;
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#B8860B] text-xs font-bold uppercase tracking-widest mb-4">Administration</p>
          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-3xl text-[#1B2B5B] font-normal italic mb-10">
            School Leadership
          </h2>
          <div className="space-y-8">
            {leadership.map((l) => (
              <div key={l.name} className="border border-gray-100 rounded-xl p-7 bg-white">
                <h3 className="font-bold text-[#1B2B5B] text-base mb-0.5">{l.name}</h3>
                <p className="text-[#B8860B] text-xs font-semibold uppercase tracking-wider mb-3">{l.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="bg-[#1B2B5B] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#B8860B] text-xs font-bold uppercase tracking-widest mb-4">Accreditations</p>
          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-3xl text-white font-normal italic mb-8">
            Recognized Standards
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {accreditations.map((a) => (
              <div key={a.name} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="font-bold text-white text-sm mb-1">{a.name}</p>
                <p className="text-white/50 text-xs">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-[#FAFAF7]">
        <h2 style={{ fontFamily: "Georgia, serif" }} className="text-2xl text-[#1B2B5B] italic font-normal mb-3">
          Come see what we&rsquo;re building.
        </h2>
        <p className="text-gray-500 mb-6">Schedule a campus tour and spend an hour with our principal and faculty.</p>
        <Link href="contact" className="inline-block bg-[#1B2B5B] hover:bg-[#152248] text-white font-semibold px-8 py-3 rounded transition-colors">
          Schedule a Tour
        </Link>
      </section>
    </div>
  );
}
