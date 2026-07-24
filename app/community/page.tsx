import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Community | Amory Technology Park",
  description: "The Community Advisory Task Force and Community Benefit Agreement — shaping the future of Amory together.",
};

const taskForceGroups = [
  { label: "Residents & Homeowners", desc: "People who live in and around the project area" },
  { label: "Local Educators & School Staff", desc: "Teachers, administrators, and school board members" },
  { label: "Business Owners & Employers", desc: "Local businesses invested in Monroe County's economy" },
  { label: "Civic & Faith Leaders", desc: "Community organizations, churches, and civic groups" },
  { label: "Community Organizations", desc: "Nonprofits and service organizations serving Amory" },
  { label: "Anyone Who Lives or Works in Amory", desc: "This is an open process — all voices are welcome" },
];

const investments = [
  "Parks and recreation",
  "Public safety",
  "Schools",
  "Workforce training",
  "Community organizations",
  "Infrastructure improvements",
  "Neighborhood projects",
  "Other priorities identified by local residents",
];

const steps = [
  {
    num: "01",
    title: "Community Meetings & Open Houses",
    desc: "We hold public meetings and open houses where residents can learn about the project, ask questions, and share their priorities. These events are open to everyone.",
  },
  {
    num: "02",
    title: "Task Force Formation & CBA Development",
    desc: "A Community Advisory Task Force is formed from local residents, educators, business owners, and civic leaders. Together they develop the Community Benefit Agreement.",
  },
  {
    num: "03",
    title: "Long-Term Partnership & Accountability",
    desc: "Once the CBA is established, we honor its commitments throughout construction and operation — and remain present and accountable to the community for decades.",
  },
];

export default function CommunityPage() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 h-1 cp-gradient-bar" />

      {/* Hero */}
      <section className="bg-[var(--color-dark)] pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-3">
            Community Partnership
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            Shaping the Future Together
          </h1>
        </div>
      </section>

      {/* Task Force */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">
            Community Advisory Task Force
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)] mb-6 leading-tight max-w-2xl">
            A Seat at the Table for Amory
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4 max-w-3xl">
            One of the most important parts of the Amory Technology Park is making sure local residents have a meaningful role in shaping its future. To accomplish that, we will establish a Community Advisory Task Force made up of residents, educators, business owners, civic leaders, and community organizations.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mb-12 max-w-3xl">
            The Task Force isn&rsquo;t a formality. It&rsquo;s how we make sure the right people are in the room when decisions are made about community investments.
          </p>
          <h3 className="font-bold text-[var(--color-heading)] mb-6 text-lg">Who is invited to participate:</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {taskForceGroups.map((g) => (
              <div key={g.label} className="bg-[var(--color-mid)] rounded-xl p-6 border border-gray-100">
                <div className="w-8 h-1 cp-gradient-bar rounded-full mb-4" />
                <h4 className="font-bold text-[var(--color-heading)] mb-2">{g.label}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CBA */}
      <section className="py-20 bg-[var(--color-mid)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">
                Community Benefit Agreement
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)] mb-6 leading-tight">
                Community Investment, Shaped by You
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Instead of deciding from a corporate office where community investments should go, we believe those decisions should be informed by the people who know Amory best. Together, the Task Force will help develop a Community Benefit Agreement (CBA) that reflects the priorities of the people who live here.
              </p>
              <p className="text-[var(--color-heading)] font-semibold text-lg italic">
                This isn&rsquo;t simply community outreach. It&rsquo;s shared ownership.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-heading)] mb-5">Potential community investment areas:</p>
              <div className="grid grid-cols-2 gap-3">
                {investments.map((item) => (
                  <div key={item} className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 leading-snug">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">
              The Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)]">
              How It Works
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="relative">
                <div className="text-5xl font-bold cp-gradient-text mb-4 leading-none">{s.num}</div>
                <h3 className="font-bold text-[var(--color-heading)] mb-3 text-lg">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-dark)] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-12 h-1 cp-gradient-bar mx-auto mb-8 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Interested in participating or learning more?
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            Contact our community team. We will make sure you are notified when Task Force applications open and community meetings are scheduled.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
