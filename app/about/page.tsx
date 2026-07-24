import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | ULTRA Design Agency",
  description: "Who we are, how we work, and why we build sites the way we do.",
};

const values = [
  { title: "No page builders. Ever.", body: "Every site we build is custom code on modern infrastructure. No WordPress, no Squarespace, no Wix. This isn't snobbery — it's why our sites load in under 2 seconds and score 90+ on PageSpeed." },
  { title: "Fixed price. Fixed scope.", body: "You know exactly what you're paying before the project starts. We don't track hours. We don't send invoices for 'extra time'. The scope is agreed, the price is set, the site gets built." },
  { title: "One point of contact.", body: "You work with the person building your site, not an account manager relaying messages. Faster decisions. No miscommunication. Better outcomes." },
  { title: "Results over aesthetics.", body: "A beautiful site that doesn't rank or convert is a liability. We measure success in leads, rankings, and load times — not awards." },
];

const team = [
  { name: "Michael H.", title: "Founder & Creative Director", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 12 years building websites for local businesses, national brands, and everyone in between." },
  { name: "Dignesh P.", title: "Lead Developer", bio: "Lorem ipsum dolor sit amet. Full-stack engineer specializing in Next.js, performance optimization, and the kind of code that doesn't break at 2am." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-[var(--color-dark)] hex-pattern pt-32 pb-24">
        <div className="absolute top-0 left-0 right-0 h-1 cp-gradient-bar" />
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-6">About ULTRA</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl mb-8">
            We build websites.<br /><span className="cp-gradient-text">We measure results.</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. ULTRA is a small web design agency based in Tampa, FL. We work with service businesses, medical practices, law firms, and other local companies that need a site that actually performs.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">Our Story</p>
              <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-6 leading-tight">
                Started because most agency websites were terrible.
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. After years of auditing small business websites, the pattern was clear: slow load times, no SEO foundation, outdated design, and a monthly retainer for a care plan that meant nothing.</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. We started ULTRA to fix that — custom-built, properly optimized, and maintained by people who actually know what they're doing.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. That was the plan. It's still the plan.</p>
              </div>
            </div>
            <div className="space-y-5">
              {values.map((v) => (
                <div key={v.title} className="bg-[var(--color-mid)] rounded-xl p-6 border border-gray-100">
                  <div className="w-6 h-1 cp-gradient-bar rounded-full mb-3" />
                  <h3 className="font-bold text-[var(--color-heading)] mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-dark)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-3">The Team</p>
            <h2 className="text-3xl font-bold text-white">Small by design.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {team.map((p) => (
              <div key={p.name} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="w-14 h-14 rounded-full cp-gradient-bar flex items-center justify-center text-white font-bold text-xl mb-5">
                  {p.name[0]}
                </div>
                <h3 className="font-bold text-white mb-1">{p.name}</h3>
                <p className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-4">{p.title}</p>
                <p className="text-white/60 text-sm leading-relaxed">{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-mid)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-6">Ready to work together?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
              Start a Conversation
            </Link>
            <Link href="/work" className="bg-white border border-gray-200 hover:border-[var(--color-primary)] text-[var(--color-heading)] font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
