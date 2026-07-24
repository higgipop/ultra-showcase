import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Notes | Amory Technology Park",
  description: "Internal notes for the Amory Technology Park content and PR team.",
};

const live = [
  { page: "Home (/)", status: "Live", note: "Stats are placeholder — tax revenue TBD, jobs/capacity confirmed" },
  { page: "About (/about)", status: "Live", note: "Draft copy incorporated — Enviva closure, tornado resilience, Our Promise" },
  { page: "Impact (/impact)", status: "Live", note: "Tax revenue shows as TBD — needs real number before full launch" },
  { page: "Environment (/environment)", status: "Live", note: "Water content folded in — no separate /water page" },
  { page: "Community (/community)", status: "Live", note: "Task Force + CBA structure is in place — no meeting dates yet" },
  { page: "FAQ (/faq)", status: "Live", note: "7 questions generated — needs Amory-specific Q&A informed by actual concerns from local meetings" },
  { page: "Contact (/contact)", status: "Live", note: "Forms are not yet connected to an email endpoint or list service" },
];

const hidden = [
  { page: "/myths", issue: "Needs Amory-specific fact-checking. What misinformation is being shared locally on Facebook, at church, at the diner? Generic data center myths are a starting point — not the finish line." },
  { page: "/updates", issue: "Press releases and news. Currently empty. Needs at least one entry before public launch. Suggested first post: project announcement / introduction to the community." },
];

const gaps = [
  {
    num: 1,
    title: "Annual tax revenue projection",
    detail: "The draft copy says 'millions in property tax.' We need a specific number or range before publishing the Impact page at full confidence. Source: Monroe County assessor estimate or project financial model.",
  },
  {
    num: 2,
    title: "Contact form endpoint",
    detail: "The Send a Message form has no backend. It needs an email address or form handler (e.g., Formspree, Mailchimp, or a Cloudflare Worker). Who should receive these messages?",
  },
  {
    num: 3,
    title: "Email signup integration",
    detail: "The Stay Informed form needs a destination — Mailchimp list, ConvertKit, or similar. Who manages the community email list?",
  },
  {
    num: 4,
    title: "Community meeting dates and locations",
    detail: "The site references community meetings throughout but has no dates. As soon as the first meeting is scheduled, it should appear on the site — ideally on its own /updates post and on the Community page.",
  },
  {
    num: 5,
    title: "Real rendering or site photo",
    detail: "The site currently uses a stock aerial placeholder. A project rendering, site plan aerial, or location photo would significantly increase credibility — especially for the home page hero.",
  },
  {
    num: 6,
    title: "Community Advisory Task Force timeline",
    detail: "When will applications open? When does the Task Force first convene? This is the most distinctive differentiator in the project's community strategy and the Community page is thin without real dates.",
  },
  {
    num: 7,
    title: "Local quotes or endorsements",
    detail: "Even one quote from a Monroe County official, business leader, or community figure would significantly strengthen the About and Home pages. A quote from an elected official carries the most weight.",
  },
  {
    num: 8,
    title: "Project location and site map",
    detail: "Where exactly in Monroe County? A simple map embed or address strengthens credibility and answers one of the first questions any neighbor will have. Without this, the site feels abstract.",
  },
];

export default function NotesPage() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 h-1 cp-gradient-bar" />

      <section className="bg-[var(--color-dark)] pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-3">
            Content Team
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            What This Site Still Needs
          </h1>
          <p className="text-white/50 mt-4 text-base max-w-xl leading-relaxed">
            This page is for the Amory Technology Park content and PR team. It is not linked from the public navigation.
          </p>
        </div>
      </section>

      {/* Live pages */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">Status</p>
          <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-10">What&rsquo;s Live</h2>
          <div className="space-y-4">
            {live.map((item) => (
              <div key={item.page} className="bg-[var(--color-mid)] rounded-xl p-6 border border-gray-100 flex items-start gap-5">
                <span className="flex-shrink-0 mt-1 text-[var(--color-accent2)] font-bold text-lg">&#x2713;</span>
                <div>
                  <p className="font-bold text-[var(--color-heading)] mb-1">{item.page}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hidden pages */}
      <section className="py-20 bg-[var(--color-mid)]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">Not in Nav</p>
          <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-4">Hidden From Nav &mdash; Needs Content</h2>
          <p className="text-gray-500 mb-10">These pages exist but are not linked from navigation. They need content before they should be surfaced publicly.</p>
          <div className="space-y-5">
            {hidden.map((item) => (
              <div key={item.page} className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                <code className="text-[var(--color-primary)] font-mono text-sm font-bold mb-3 block">{item.page}</code>
                <p className="text-gray-600 leading-relaxed">{item.issue}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content gaps */}
      <section className="bg-[var(--color-dark)] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-3">Action Items</p>
          <h2 className="text-3xl font-bold text-white mb-10">Specific Content Needed</h2>
          <div className="space-y-6">
            {gaps.map((g) => (
              <div key={g.num} className="bg-white/5 border border-white/10 rounded-xl p-8">
                <div className="flex items-start gap-5">
                  <span className="flex-shrink-0 text-3xl font-bold cp-gradient-text leading-none">{g.num}</span>
                  <div>
                    <h3 className="font-bold text-white mb-2">{g.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{g.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gray-500 mb-2">Questions about this site or the build?</p>
          <a
            href="mailto:michael@ultradesignagency.com"
            className="text-[var(--color-primary)] font-semibold hover:underline text-lg"
          >
            michael@ultradesignagency.com
          </a>
          <p className="text-gray-400 text-sm mt-2">ULTRA Design Agency &mdash; Built by ULTRA</p>
        </div>
      </section>
    </div>
  );
}
