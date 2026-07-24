import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

const posts = [
  {
    slug: "why-your-website-loads-slow",
    category: "Performance",
    title: "Why Your Website Loads Slow (And the Only 3 Fixes That Actually Matter)",
    excerpt:
      "Most sites are slow because of the same three problems. Fixing all of them takes less than a day. Here's exactly what to look for.",
    date: "July 14, 2026",
    readTime: "6 min",
    body: [
      {
        type: "p",
        content:
          "We run PageSpeed Insights on every site we audit. After 300+ audits, we can tell you: 90% of slow sites share the same three problems. Fix those three, and you'll gain 20–40 points without touching your server or switching platforms.",
      },
      {
        type: "h2",
        content: "1. Your images are too heavy.",
      },
      {
        type: "p",
        content:
          "A JPEG from a camera is 4–8 MB. A properly compressed WebP for web use is 80–200 KB. If your site is loading original camera photos, you're asking visitors to download 40x more data than necessary. Convert everything to WebP. Use next/image if you're on Next.js — it does it automatically.",
      },
      {
        type: "h2",
        content: "2. You're loading fonts you don't use.",
      },
      {
        type: "p",
        content:
          "Most Google Fonts imports load 6–10 font weights by default. If your site uses Regular (400) and Bold (700), that's it — import only those. Every extra weight adds a blocking request that delays the first paint.",
      },
      {
        type: "h2",
        content: "3. Your hosting is the bottleneck.",
      },
      {
        type: "p",
        content:
          "Shared hosting with a server in New Jersey loads in 180ms for someone in New York and 950ms for someone in California. A CDN-deployed site (Cloudflare, Vercel) delivers from the node closest to the visitor, dropping that to 40–80ms anywhere in the country. This is the single biggest performance gain most small business sites can make.",
      },
      {
        type: "h2",
        content: "The bottom line.",
      },
      {
        type: "p",
        content:
          "Images, fonts, hosting. Fix those three and you will pass Core Web Vitals. Everything else — lazy loading, code splitting, bundle analysis — is real but it's rounding errors compared to these fundamentals.",
      },
    ],
    related: ["local-seo-guide-2026", "wordpress-vs-nextjs"],
  },
];

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | ULTRA Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = posts.filter((p) => post.related?.includes(p.slug));

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--color-dark)] hex-pattern pt-32 pb-16">
        <div className="absolute top-0 left-0 right-0 h-1 cp-gradient-bar" />
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-8 hover:text-white transition-colors"
          >
            ← All Posts
          </Link>
          <p className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-4">
            {post.category}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-white/40 text-sm">
            <span>ULTRA Design Agency</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime} read</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            {post.body.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="text-2xl font-bold text-[var(--color-heading)] mt-12 mb-4"
                  >
                    {block.content}
                  </h2>
                );
              }
              return (
                <p key={i} className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {block.content}
                </p>
              );
            })}
          </div>

          {/* Author card */}
          <div className="mt-16 bg-[var(--color-mid)] rounded-2xl p-7 flex items-start gap-5 border border-gray-100">
            <div className="flex-shrink-0 w-14 h-14 rounded-full cp-gradient-bar flex items-center justify-center text-white font-bold text-xl">
              U
            </div>
            <div>
              <p className="font-bold text-[var(--color-heading)] mb-1">ULTRA Design Agency</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                We build fast, modern websites for businesses that want more from their online presence. Based in Florida, serving clients nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-[var(--color-mid)]">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-6">
              Keep Reading
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group bg-white rounded-xl border border-gray-100 p-6 hover:border-[var(--color-primary)]/40 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-primary)] mb-3 block">
                    {rp.category}
                  </span>
                  <h3 className="font-bold text-[var(--color-heading)] leading-tight mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {rp.title}
                  </h3>
                  <span className="text-xs text-gray-400">{rp.readTime} read</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-[var(--color-dark)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-4">
            Work With Us
          </p>
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to fix your site?
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            We audit sites, rebuild them from scratch, and keep them running. Start with a conversation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
