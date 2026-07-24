import type { Metadata } from "next";
import siteConfig from "@/lib/site.config";

export const metadata: Metadata = {
  title: "FAQ | Amory Technology Park",
  description: "Common questions about the Amory Technology Park — answered directly.",
};

export default function FAQPage() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 h-1 cp-gradient-bar" />

      <section className="bg-[var(--color-dark)] pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-3">
            Questions & Answers
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            Common Questions About the Amory Technology Park
          </h1>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-mid)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {siteConfig.faq.map((item) => (
              <details
                key={item.q}
                className="bg-white rounded-xl border border-gray-100 shadow-sm group"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-semibold text-[var(--color-heading)] hover:text-[var(--color-primary)] transition-colors">
                  {item.q}
                  <span className="ml-4 text-[var(--color-primary)] text-xl font-light group-open:rotate-45 transition-transform inline-block flex-shrink-0">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 text-gray-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 mt-10 italic">
            More questions coming &mdash; check back as the project progresses and community meetings begin.
          </p>

          <div className="mt-10 bg-[var(--color-dark)] rounded-xl p-10 text-center">
            <div className="w-12 h-1 cp-gradient-bar mx-auto mb-6 rounded-full" />
            <h2 className="text-2xl font-bold text-white mb-3">Still have questions?</h2>
            <p className="text-white/60 mb-6">
              Reach out directly and a member of our team will respond within one business day.
            </p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
