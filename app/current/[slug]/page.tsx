import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import posts, { getPost } from "@/lib/posts";
import siteConfig from "@/lib/site.config";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | ${siteConfig.city} Data Center`,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const allSorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const related = allSorted.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 h-1 cp-gradient-bar" />

      {/* Header */}
      <section className="bg-[var(--color-dark)] pt-28 pb-14">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/current"
            className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm font-semibold hover:text-white transition-colors mb-8"
          >
            ← Current Issues
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide bg-blue-900/40 px-2.5 py-1 rounded-full">
              {post.category}
            </span>
            <time className="text-sm text-white/50">{formatDate(post.date)}</time>
          </div>
          <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">
            Issue: {post.issue}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-5">
            {post.title}
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">{post.excerpt}</p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose-style space-y-6">
            {post.sections.map((section, i) => {
              if (section.type === "paragraph") {
                return (
                  <p key={i} className="text-gray-600 leading-relaxed text-[1.0625rem]">
                    {section.content}
                  </p>
                );
              }
              if (section.type === "heading") {
                return (
                  <h2 key={i} className="text-xl font-bold text-[var(--color-heading)] mt-10 mb-1">
                    {section.content}
                  </h2>
                );
              }
              if (section.type === "bullets") {
                return (
                  <ul key={i} className="space-y-3 pl-0">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                        <span className="text-gray-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (section.type === "callout") {
                return (
                  <div
                    key={i}
                    className="border-l-4 border-[var(--color-accent)] bg-[var(--color-mid)] rounded-r-xl px-6 py-5"
                  >
                    <p className="text-[var(--color-heading)] font-medium leading-relaxed">{section.content}</p>
                  </div>
                );
              }
              return null;
            })}
          </div>

          {/* Contact prompt */}
          <div className="mt-14 rounded-2xl bg-[var(--color-mid)] border border-[var(--color-primary)]/10 p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="font-bold text-[var(--color-heading)] mb-1">Have a follow-up question?</p>
              <p className="text-sm text-gray-500">
                Reach us at{" "}
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-[var(--color-primary)] hover:underline"
                >
                  {siteConfig.contactEmail}
                </a>{" "}
                or use the contact form.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-[var(--color-mid)] border-t border-gray-100 py-14">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-lg font-bold text-[var(--color-heading)] mb-8">More Current Issues</h2>
            <div className="grid gap-5 md:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/current/${p.slug}`}
                  className="group block rounded-xl border border-gray-200 hover:border-[var(--color-primary)]/30 bg-white hover:bg-[var(--color-mid)] transition-colors p-6"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide bg-blue-50 px-2 py-0.5 rounded-full">
                      {p.category}
                    </span>
                    <time className="text-sm text-gray-400">{formatDate(p.date)}</time>
                  </div>
                  <h3 className="font-bold text-[var(--color-heading)] leading-snug group-hover:text-[var(--color-primary)] transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[var(--color-primary)] group-hover:underline">
                    Read more →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
