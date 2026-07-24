import type { Metadata } from "next";
import siteConfig from "@/lib/site.config";

export const metadata: Metadata = {
  title: `Project Updates | ${siteConfig.city} Data Center`,
};

// Add real updates here as the project progresses
const updates: {
  date: string;
  category: string;
  title: string;
  body: string;
}[] = [
  // {
  //   date: "2026-08-01",
  //   category: "Milestone",
  //   title: "Groundbreaking Ceremony",
  //   body: "We officially broke ground on the RB Inyokern Data Center campus...",
  // },
];

export default function UpdatesPage() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 h-1 cp-gradient-bar" />

      {/* Hero */}
      <section className="bg-[var(--color-dark)] pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-3">
            Project News
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            Latest Updates
          </h1>
        </div>
      </section>

      {/* Updates feed */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {updates.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-12 h-1 cp-gradient-bar mx-auto mb-8 rounded-full" />
              <h2 className="text-2xl font-bold text-[var(--color-heading)] mb-3">
                Updates Coming Soon
              </h2>
              <p className="text-gray-500 mb-8">
                Project milestones, community meetings, and permit updates will be
                posted here. Sign up below to get notified.
              </p>
              <a
                href="/contact"
                className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Get Notified
              </a>
            </div>
          ) : (
            <div className="space-y-8">
              {updates.map((u) => (
                <article key={u.title} className="border-b border-gray-100 pb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide bg-blue-50 px-2 py-1 rounded">
                      {u.category}
                    </span>
                    <time className="text-sm text-gray-400">{u.date}</time>
                  </div>
                  <h2 className="text-xl font-bold text-[var(--color-heading)] mb-3">{u.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{u.body}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
