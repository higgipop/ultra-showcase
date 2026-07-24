import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | ULTRA Design Agency",
  description:
    "Web design, SEO, and digital marketing insights from the ULTRA team.",
};

const posts = [
  {
    slug: "why-your-website-loads-slow",
    category: "Performance",
    title: "Why Your Website Loads Slow (And the Only 3 Fixes That Actually Matter)",
    excerpt:
      "Most sites are slow because of the same three problems. Fixing all of them takes less than a day. Here's exactly what to look for.",
    date: "July 14, 2026",
    readTime: "6 min",
    featured: true,
  },
  {
    slug: "local-seo-guide-2026",
    category: "SEO",
    title: "Local SEO in 2026: What Still Works and What's a Waste of Time",
    excerpt:
      "Google's algorithm has changed. Citation building is mostly dead. Here's what actually moves rankings for local businesses today.",
    date: "July 7, 2026",
    readTime: "9 min",
    featured: false,
  },
  {
    slug: "wordpress-vs-nextjs",
    category: "Web Design",
    title: "WordPress vs. Next.js: Which One Is Right for Your Business?",
    excerpt:
      "The honest answer depends on what you're trying to do. Here's how we think through the choice for every new client.",
    date: "June 28, 2026",
    readTime: "7 min",
    featured: false,
  },
  {
    slug: "conversion-rate-optimization-basics",
    category: "Strategy",
    title: "5 Things on Your Contact Page That Are Killing Your Lead Volume",
    excerpt:
      "The contact page is the last thing most businesses improve. It's also the one that makes the biggest difference. Here's what to fix.",
    date: "June 20, 2026",
    readTime: "5 min",
    featured: false,
  },
  {
    slug: "google-business-profile-optimization",
    category: "SEO",
    title: "The Google Business Profile Checklist Nobody Gives You",
    excerpt:
      "Most GBP guides stop at 'fill out your hours.' Here's the 14-point checklist we use for every new client — including the parts that actually drive map pack rankings.",
    date: "June 12, 2026",
    readTime: "8 min",
    featured: false,
  },
  {
    slug: "website-care-plan-worth-it",
    category: "Web Design",
    title: "Is a Website Care Plan Actually Worth It? (Here's the Math)",
    excerpt:
      "A single hack recovery costs $800–$2,400. A year of prevention costs $1,188. We'll let you do the math.",
    date: "June 4, 2026",
    readTime: "4 min",
    featured: false,
  },
];

const categories = ["All", "Web Design", "SEO", "Performance", "Strategy"];

export default function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--color-dark)] hex-pattern pt-32 pb-20">
        <div className="absolute top-0 left-0 right-0 h-1 cp-gradient-bar" />
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-4">
            The ULTRA Blog
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl mb-6">
            Insights on web, SEO,{" "}
            <span className="cp-gradient-text">and growth.</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed">
            No fluff. Practical guides and honest opinions from a team that builds and maintains real websites for real businesses.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`flex-shrink-0 text-sm font-semibold px-4 py-2 rounded-full transition-colors ${
                cat === "All"
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-[var(--color-mid)] text-[var(--color-heading)] hover:bg-[var(--color-primary)]/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Featured post */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group block bg-[var(--color-dark)] rounded-2xl overflow-hidden mb-10 hover:shadow-2xl transition-shadow"
            >
              <div className="p-10 md:p-14">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-bold tracking-widest uppercase bg-[var(--color-primary)] text-white px-3 py-1 rounded-full">
                    Featured
                  </span>
                  <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)]">
                    {featured.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-5 max-w-3xl group-hover:cp-gradient-text transition-all">
                  {featured.title}
                </h2>
                <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-8">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 text-white/40 text-sm">
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime} read</span>
                  <span className="ml-2 text-[var(--color-accent)] font-semibold group-hover:translate-x-1 transition-transform inline-block">
                    Read article →
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Post grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:border-[var(--color-primary)]/30 transition-all"
              >
                <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-primary)] mb-4">
                  {post.category}
                </span>
                <h2 className="text-lg font-bold text-[var(--color-heading)] leading-tight mb-3 flex-1 group-hover:text-[var(--color-primary)] transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{post.date}</span>
                  <span>{post.readTime} read</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-[var(--color-mid)]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-4">
            Stay Sharp
          </p>
          <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-4">
            One email a month. No noise.
          </h2>
          <p className="text-gray-500 mb-8">
            Practical SEO and web tips from our team. Unsubscribe any time.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-6 py-3 rounded-lg transition-colors flex-shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
