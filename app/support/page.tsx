import type { Metadata } from "next";
import Link from "next/link";
import siteConfig from "@/lib/site.config";

export const metadata: Metadata = {
  title: `Support | ${siteConfig.city} Data Center`,
};

export default function SupportPage() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 h-1 cp-gradient-bar" />
      <section className="bg-[var(--color-dark)] pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-3">Community Support</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            Show Your Support
          </h1>
        </div>
      </section>
      <section className="py-20 bg-[var(--color-mid)]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-gray-600 leading-relaxed text-lg mb-12">
            If you believe this project is good for {siteConfig.county}, your voice matters. Here
            are ways to make your support known to local officials and decision-makers.
          </p>

          <div className="space-y-6 mb-12">
            {[
              {
                title: "Sign the Community Support Letter",
                desc: "Add your name to our letter of community support, which will be submitted to the Baxter County Quorum Court during the public comment period.",
                cta: "Sign Now",
                href: "/contact",
              },
              {
                title: "Attend a Public Meeting",
                desc: "Public hearings on this project are open to all residents. Your presence and comments are part of the official record.",
                cta: "See Meeting Dates",
                href: "/updates",
              },
              {
                title: "Contact Your Quorum Court Justice",
                desc: "A brief email or phone call to your Baxter County Justice of the Peace expressing support carries significant weight in the approval process.",
                cta: "Find Your Representative",
                href: "/contact",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-[var(--color-heading)] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{item.desc}</p>
                <Link
                  href={item.href}
                  className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-5 py-2.5 rounded-lg transition-colors inline-block text-sm"
                >
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-[var(--color-dark)] rounded-xl p-10 text-center">
            <div className="w-12 h-1 cp-gradient-bar mx-auto mb-6 rounded-full" />
            <h2 className="text-2xl font-bold text-white mb-3">Questions before you sign?</h2>
            <p className="text-white/60 mb-6">
              We are happy to answer any question — no matter how direct.
            </p>
            <Link href="/contact" className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
