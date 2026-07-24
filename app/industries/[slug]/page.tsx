import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import HomeServicesDemo from "../_demos/home-services";
import MedicalDemo from "../_demos/medical";
import LegalDemo from "../_demos/legal";
import ManufacturingDemo from "../_demos/manufacturing";
import HospitalityDemo from "../_demos/hospitality";
import FinancialDemo from "../_demos/financial";
import DefenseDemo from "../_demos/defense";

type Props = { params: Promise<{ slug: string }> };

const industries = [
  { slug: "service-companies", label: "Home Services", Component: HomeServicesDemo },
  { slug: "medical",           label: "Medical & Dental", Component: MedicalDemo },
  { slug: "legal",             label: "Legal", Component: LegalDemo },
  { slug: "manufacturing",     label: "Manufacturing", Component: ManufacturingDemo },
  { slug: "hospitality",       label: "Hospitality", Component: HospitalityDemo },
  { slug: "financial",         label: "Financial Services", Component: FinancialDemo },
  { slug: "defense",           label: "Defense & Government", Component: DefenseDemo },
];

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) return {};
  return {
    title: `${ind.label} Web Design Demo | ULTRA Design Agency`,
    description: `See what an ULTRA-built website looks like for ${ind.label.toLowerCase()} businesses — real layout, real sections, real content strategy.`,
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) notFound();

  const { Component, label } = ind;

  return (
    <>
      {/* Demo banner — always on top */}
      <div className="bg-[#007BFF] text-white text-center text-sm py-2.5 font-medium">
        ✦ This is an <strong>ULTRA demo page</strong> — showing what a {label} site looks like.&nbsp;
        <Link href="/industries" className="underline underline-offset-2 opacity-80 hover:opacity-100">
          ← All industries
        </Link>
        &nbsp;·&nbsp;
        <Link href="/contact" className="underline underline-offset-2 opacity-80 hover:opacity-100">
          Build mine →
        </Link>
      </div>

      {/* Industry-specific demo */}
      <Component />

      {/* ULTRA CTA footer — consistent across all demos */}
      <section className="py-20 bg-[#0D1B2A]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#00C2CB] text-xs font-semibold tracking-widest uppercase mb-4">
            Build Your {label} Site
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            This is what we&rsquo;d build for you.
          </h2>
          <p className="text-white/60 mb-10 text-lg leading-relaxed">
            Every {label.toLowerCase()} site we build is custom — same structure, your brand, your market, your clients. Fixed price. Fixed timeline. Live in 6 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#007BFF] hover:bg-[#0069d9] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Start a Conversation
            </Link>
            <Link
              href="/pricing"
              className="bg-white/5 border border-white/20 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
