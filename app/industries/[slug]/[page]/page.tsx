import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Home page demos (existing)
import HomeServicesHome from "../../_demos/home-services";
import MedicalHome from "../../_demos/medical";
import LegalHome from "../../_demos/legal";
import ManufacturingHome from "../../_demos/manufacturing";
import HospitalityHome from "../../_demos/hospitality";
import FinancialHome from "../../_demos/financial";
import DefenseHome from "../../_demos/defense";

// Inner pages
import HomeServicesServices from "./_pages/home-services-services";
import HomeServicesAbout from "./_pages/home-services-about";
import HomeServicesContact from "./_pages/home-services-contact";
import MedicalServices from "./_pages/medical-services";
import MedicalAbout from "./_pages/medical-about";
import MedicalContact from "./_pages/medical-contact";
import LegalServices from "./_pages/legal-services";
import LegalAbout from "./_pages/legal-about";
import LegalContact from "./_pages/legal-contact";
import ManufacturingServices from "./_pages/manufacturing-services";
import ManufacturingAbout from "./_pages/manufacturing-about";
import ManufacturingContact from "./_pages/manufacturing-contact";
import HospitalityServices from "./_pages/hospitality-services";
import HospitalityAbout from "./_pages/hospitality-about";
import HospitalityContact from "./_pages/hospitality-contact";
import FinancialServices from "./_pages/financial-services";
import FinancialAbout from "./_pages/financial-about";
import FinancialContact from "./_pages/financial-contact";
import DefenseServices from "./_pages/defense-services";
import DefenseAbout from "./_pages/defense-about";
import DefenseContact from "./_pages/defense-contact";

type Props = { params: Promise<{ slug: string; page: string }> };

const pageLabels: Record<string, string> = {
  home: "Home Page",
  services: "Services Page",
  about: "About Page",
  contact: "Contact Page",
};

const industryLabels: Record<string, string> = {
  "service-companies": "Home Services",
  medical: "Medical & Dental",
  legal: "Legal",
  manufacturing: "Manufacturing",
  hospitality: "Hospitality",
  financial: "Financial Services",
  defense: "Defense & Government",
};

type ComponentMap = Record<string, Record<string, React.ComponentType>>;

const components: ComponentMap = {
  "service-companies": {
    home: HomeServicesHome,
    services: HomeServicesServices,
    about: HomeServicesAbout,
    contact: HomeServicesContact,
  },
  medical: {
    home: MedicalHome,
    services: MedicalServices,
    about: MedicalAbout,
    contact: MedicalContact,
  },
  legal: {
    home: LegalHome,
    services: LegalServices,
    about: LegalAbout,
    contact: LegalContact,
  },
  manufacturing: {
    home: ManufacturingHome,
    services: ManufacturingServices,
    about: ManufacturingAbout,
    contact: ManufacturingContact,
  },
  hospitality: {
    home: HospitalityHome,
    services: HospitalityServices,
    about: HospitalityAbout,
    contact: HospitalityContact,
  },
  financial: {
    home: FinancialHome,
    services: FinancialServices,
    about: FinancialAbout,
    contact: FinancialContact,
  },
  defense: {
    home: DefenseHome,
    services: DefenseServices,
    about: DefenseAbout,
    contact: DefenseContact,
  },
};

const industryPages = [
  { slug: "service-companies", pages: ["home", "services", "about", "contact"] },
  { slug: "medical", pages: ["home", "services", "about", "contact"] },
  { slug: "legal", pages: ["home", "services", "about", "contact"] },
  { slug: "manufacturing", pages: ["home", "services", "about", "contact"] },
  { slug: "hospitality", pages: ["home", "services", "about", "contact"] },
  { slug: "financial", pages: ["home", "services", "about", "contact"] },
  { slug: "defense", pages: ["home", "services", "about", "contact"] },
];

export function generateStaticParams() {
  return industryPages.flatMap(({ slug, pages }) =>
    pages.map((page) => ({ slug, page }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, page } = await params;
  const label = industryLabels[slug];
  const pageLabel = pageLabels[page];
  if (!label || !pageLabel) return {};
  return {
    title: `${label} ${pageLabel} Demo | ULTRA Design Agency`,
    description: `See what an ULTRA-built ${pageLabel.toLowerCase()} looks like for a ${label.toLowerCase()} business.`,
  };
}

export default async function IndustryDemoPage({ params }: Props) {
  const { slug, page } = await params;
  const industryLabel = industryLabels[slug];
  const pageLabel = pageLabels[page];
  const Component = components[slug]?.[page];

  if (!industryLabel || !pageLabel || !Component) notFound();

  const allPages = ["home", "services", "about", "contact"];
  const pageNames: Record<string, string> = {
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",
  };

  return (
    <>
      {/* Demo banner */}
      <div className="bg-[#007BFF] text-white text-sm py-2.5 font-medium sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
          <span>
            ✦ <strong>ULTRA Demo</strong> · {industryLabel} · {pageLabel}
          </span>
          <div className="flex items-center gap-4 text-xs">
            {allPages.map((p) => (
              <Link
                key={p}
                href={`/industries/${slug}/${p}`}
                className={`hover:underline transition-opacity ${p === page ? "font-bold opacity-100" : "opacity-60 hover:opacity-100"}`}
              >
                {pageNames[p]}
              </Link>
            ))}
            <span className="opacity-30">|</span>
            <Link href={`/industries/${slug}`} className="underline underline-offset-2 opacity-80 hover:opacity-100">
              ← Back
            </Link>
            <Link href="/contact" className="underline underline-offset-2 opacity-80 hover:opacity-100">
              Build mine →
            </Link>
          </div>
        </div>
      </div>

      {/* Demo content */}
      <Component />
    </>
  );
}
