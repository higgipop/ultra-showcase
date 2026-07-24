"use client";
import siteConfig from "@/lib/site.config";

export default function ContactPage() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 h-1 cp-gradient-bar" />

      <section className="bg-[var(--color-dark)] pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-3">
            Stay Connected
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            Contact & Updates
          </h1>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-mid)]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-xl p-10 shadow-sm border border-gray-100 mb-10">
            <h2 className="text-2xl font-bold text-[var(--color-heading)] mb-3">Stay Informed</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Sign up to receive project updates, public meeting notices, and community announcements directly from the Amory Technology Park team.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Your email address"
                className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-[var(--color-heading)] placeholder-gray-400 focus:outline-none focus:border-[var(--color-primary)] transition-colors"
              />
              <button
                type="submit"
                className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
              >
                Get Updates
              </button>
            </form>
          </div>

          <div className="bg-white rounded-xl p-10 shadow-sm border border-gray-100 mb-10">
            <h2 className="text-2xl font-bold text-[var(--color-heading)] mb-3">Send a Message</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Questions about the project, meeting requests, or concerns about the community — we respond within one business day.
            </p>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="border border-gray-200 rounded-lg px-4 py-3 text-[var(--color-heading)] placeholder-gray-400 focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  className="border border-gray-200 rounded-lg px-4 py-3 text-[var(--color-heading)] placeholder-gray-400 focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                />
              </div>
              <textarea
                rows={5}
                placeholder="Your message or question"
                required
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[var(--color-heading)] placeholder-gray-400 focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
              />
              <button
                type="submit"
                className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Prefer email directly?{" "}
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-[var(--color-primary)] font-medium hover:underline"
              >
                {siteConfig.contactEmail}
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
