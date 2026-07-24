import Link from "next/link";
import type { Metadata } from "next";
import posts from "@/lib/posts";
import siteConfig from "@/lib/site.config";

export const metadata: Metadata = {
  title: `Current Issues | ${siteConfig.city} Data Center`,
  description: `Local issues in ${siteConfig.county} and how Crystal Peaks Data Centers is working with the community to address them.`,
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function CurrentPage() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const [featured, ...rest] = sorted;

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 h-1 cp-gradient-bar" />

      {/* Hero */}
      <section className="bg-[var(--color-dark)] pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-3">
            Community · {siteConfig.county}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl mb-4">
            Current Issues
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed">
            Real concerns raised in {siteConfig.county} — and exactly what we're
            doing about them. Published twice a month.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">

          {/* Featured post */}
          {featured && (
            <Link
              href={`/current/${featured.slug}`}
              className="group block mb-14 rounded-2xl border border-gray-100 hover:border-[var(--color-primary)]/30 bg-[var(--color-mid)] hover:bg-[var(--color-mid)] transition-colors overflow-hidden"
            >
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide bg-blue-100 px-2.5 py-1 rounded-full">
                    {featured.category}
                  </span>
                  <time className="text-sm text-gray-400">{formatDate(featured.date)}</time>
                  <span className="text-xs font-semibold text-[var(--color-accent2)] uppercase tracking-wide bg-green-50 px-2.5 py-1 rounded-full ml-1">
                    Latest
                  </span>
                </div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                  Issue: {featured.issue}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-heading)] leading-snug mb-4 group-hover:text-[var(--color-primary)] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-500 leading-relaxed max-w-2xl">{featured.excerpt}</p>
                <p className="mt-5 text-sm font-semibold text-[var(--color-primary)] group-hover:underline">
                  Read the full update →
                </p>
              </div>
            </Link>
          )}

          {/* Remaining posts */}
          {rest.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/current/${post.slug}`}
                  className="group block rounded-2xl border border-gray-100 hover:border-[var(--color-primary)]/30 bg-white hover:bg-[var(--color-mid)] transition-colors p-7"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide bg-blue-50 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <time className="text-sm text-gray-400">{formatDate(post.date)}</time>
                  </div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                    Issue: {post.issue}
                  </p>
                  <h2 className="text-xl font-bold text-[var(--color-heading)] leading-snug mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed">{post.excerpt}</p>
                  <p className="mt-4 text-sm font-semibold text-[var(--color-primary)] group-hover:underline">
                    Read more →
                  </p>
                </Link>
              ))}
            </div>
          )}

          {posts.length === 0 && (
            <div className="text-center py-20">
              <div className="w-12 h-1 cp-gradient-bar mx-auto mb-8 rounded-full" />
              <h2 className="text-2xl font-bold text-[var(--color-heading)] mb-3">Issues Coming Soon</h2>
              <p className="text-gray-500">
                We'll publish community issue updates here twice a month starting in August.
              </p>
            </div>
          )}

          {/* Cadence note */}
          <div className="mt-14 border-t border-gray-100 pt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="text-sm font-semibold text-[var(--color-heading)] mb-1">Published twice a month</p>
              <p className="text-sm text-gray-500">
                Have a concern that isn't addressed here?{" "}
                <Link href="/contact" className="text-[var(--color-primary)] hover:underline font-medium">
                  Contact us directly.
                </Link>
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              Submit a Concern
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
