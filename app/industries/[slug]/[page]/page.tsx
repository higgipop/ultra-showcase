import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Service Companies (6 pages)
import ServiceCompaniesHome from "../../_demos/service-companies/home";
import ServiceCompaniesServices from "../../_demos/service-companies/services";
import ServiceCompaniesAirConditioning from "../../_demos/service-companies/air-conditioning";
import ServiceCompaniesPlumbing from "../../_demos/service-companies/plumbing";
import ServiceCompaniesAbout from "../../_demos/service-companies/about";
import ServiceCompaniesContact from "../../_demos/service-companies/contact";

// Legal (6 pages)
import LegalHome from "../../_demos/legal/home";
import LegalPracticeAreas from "../../_demos/legal/practice-areas";
import LegalPersonalInjury from "../../_demos/legal/personal-injury";
import LegalBusinessLitigation from "../../_demos/legal/business-litigation";
import LegalAbout from "../../_demos/legal/about";
import LegalContact from "../../_demos/legal/contact";

// Medical (6 pages)
import MedicalHome from "../../_demos/medical/home";
import MedicalServices from "../../_demos/medical/services";
import MedicalPrimaryCare from "../../_demos/medical/primary-care";
import MedicalPediatrics from "../../_demos/medical/pediatrics";
import MedicalAbout from "../../_demos/medical/about";
import MedicalContact from "../../_demos/medical/contact";

// Manufacturing (6 pages)
import ManufacturingHome from "../../_demos/manufacturing/home";
import ManufacturingCapabilities from "../../_demos/manufacturing/capabilities";
import ManufacturingCNCMachining from "../../_demos/manufacturing/cnc-machining";
import ManufacturingFabrication from "../../_demos/manufacturing/fabrication";
import ManufacturingAbout from "../../_demos/manufacturing/about";
import ManufacturingContact from "../../_demos/manufacturing/contact";

// Hospitality (6 pages)
import HospitalityHome from "../../_demos/hospitality/home";
import HospitalityCatering from "../../_demos/hospitality/catering";
import HospitalityWeddings from "../../_demos/hospitality/weddings";
import HospitalityCorporateEvents from "../../_demos/hospitality/corporate-events";
import HospitalityAbout from "../../_demos/hospitality/about";
import HospitalityContact from "../../_demos/hospitality/contact";

// Financial (6 pages)
import FinancialHome from "../../_demos/financial/home";
import FinancialServices from "../../_demos/financial/services";
import FinancialWealthManagement from "../../_demos/financial/wealth-management";
import FinancialRetirementPlanning from "../../_demos/financial/retirement-planning";
import FinancialAbout from "../../_demos/financial/about";
import FinancialContact from "../../_demos/financial/contact";

// Defense (6 pages)
import DefenseHome from "../../_demos/defense/home";
import DefenseCapabilities from "../../_demos/defense/capabilities";
import DefenseCybersecurity from "../../_demos/defense/cybersecurity";
import DefenseSystemsIntegration from "../../_demos/defense/systems-integration";
import DefenseAbout from "../../_demos/defense/about";
import DefenseContact from "../../_demos/defense/contact";

// Education (4 pages)
import EducationHome from "../../_demos/education/home";
import EducationAdmissions from "../../_demos/education/admissions";
import EducationAbout from "../../_demos/education/about";
import EducationContact from "../../_demos/education/contact";

type Props = { params: Promise<{ slug: string; page: string }> };

// Short labels for demo banner navigation
const bannerLabels: Record<string, string> = {
  home: "Home",
  services: "Services",
  "air-conditioning": "A/C",
  plumbing: "Plumbing",
  "practice-areas": "Practice Areas",
  "personal-injury": "Personal Injury",
  "business-litigation": "Business Lit.",
  "primary-care": "Primary Care",
  pediatrics: "Pediatrics",
  capabilities: "Capabilities",
  "cnc-machining": "CNC",
  fabrication: "Fabrication",
  catering: "Catering",
  weddings: "Weddings",
  "corporate-events": "Corporate",
  "wealth-management": "Wealth Mgmt",
  "retirement-planning": "Retirement",
  cybersecurity: "Cyber",
  "systems-integration": "Systems",
  about: "About",
  contact: "Contact",
  admissions: "Admissions",
};

// Full labels for metadata
const pageLabels: Record<string, string> = {
  home: "Home Page",
  services: "Services Page",
  "air-conditioning": "Air Conditioning Page",
  plumbing: "Plumbing Page",
  "practice-areas": "Practice Areas Page",
  "personal-injury": "Personal Injury Page",
  "business-litigation": "Business Litigation Page",
  "primary-care": "Primary Care Page",
  pediatrics: "Pediatrics Page",
  capabilities: "Capabilities Page",
  "cnc-machining": "CNC Machining Page",
  fabrication: "Fabrication Page",
  catering: "Catering Page",
  weddings: "Weddings Page",
  "corporate-events": "Corporate Events Page",
  "wealth-management": "Wealth Management Page",
  "retirement-planning": "Retirement Planning Page",
  cybersecurity: "Cybersecurity Page",
  "systems-integration": "Systems Integration Page",
  admissions: "Admissions Page",
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
  education: "Education",
};

type ComponentMap = Record<string, Record<string, React.ComponentType>>;

const components: ComponentMap = {
  "service-companies": {
    home: ServiceCompaniesHome,
    services: ServiceCompaniesServices,
    "air-conditioning": ServiceCompaniesAirConditioning,
    plumbing: ServiceCompaniesPlumbing,
    about: ServiceCompaniesAbout,
    contact: ServiceCompaniesContact,
  },
  legal: {
    home: LegalHome,
    "practice-areas": LegalPracticeAreas,
    "personal-injury": LegalPersonalInjury,
    "business-litigation": LegalBusinessLitigation,
    about: LegalAbout,
    contact: LegalContact,
  },
  medical: {
    home: MedicalHome,
    services: MedicalServices,
    "primary-care": MedicalPrimaryCare,
    pediatrics: MedicalPediatrics,
    about: MedicalAbout,
    contact: MedicalContact,
  },
  manufacturing: {
    home: ManufacturingHome,
    capabilities: ManufacturingCapabilities,
    "cnc-machining": ManufacturingCNCMachining,
    fabrication: ManufacturingFabrication,
    about: ManufacturingAbout,
    contact: ManufacturingContact,
  },
  hospitality: {
    home: HospitalityHome,
    catering: HospitalityCatering,
    weddings: HospitalityWeddings,
    "corporate-events": HospitalityCorporateEvents,
    about: HospitalityAbout,
    contact: HospitalityContact,
  },
  financial: {
    home: FinancialHome,
    services: FinancialServices,
    "wealth-management": FinancialWealthManagement,
    "retirement-planning": FinancialRetirementPlanning,
    about: FinancialAbout,
    contact: FinancialContact,
  },
  defense: {
    home: DefenseHome,
    capabilities: DefenseCapabilities,
    cybersecurity: DefenseCybersecurity,
    "systems-integration": DefenseSystemsIntegration,
    about: DefenseAbout,
    contact: DefenseContact,
  },
  education: {
    home: EducationHome,
    admissions: EducationAdmissions,
    about: EducationAbout,
    contact: EducationContact,
  },
};

const industryPages: Record<string, string[]> = {
  "service-companies": ["home", "services", "air-conditioning", "plumbing", "about", "contact"],
  legal: ["home", "practice-areas", "personal-injury", "business-litigation", "about", "contact"],
  medical: ["home", "services", "primary-care", "pediatrics", "about", "contact"],
  manufacturing: ["home", "capabilities", "cnc-machining", "fabrication", "about", "contact"],
  hospitality: ["home", "catering", "weddings", "corporate-events", "about", "contact"],
  financial: ["home", "services", "wealth-management", "retirement-planning", "about", "contact"],
  defense: ["home", "capabilities", "cybersecurity", "systems-integration", "about", "contact"],
  education: ["home", "admissions", "about", "contact"],
};

export function generateStaticParams() {
  return Object.entries(industryPages).flatMap(([slug, pages]) =>
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

  const pages = industryPages[slug] ?? [];

  return (
    <>
      {/* Demo banner */}
      <div className="bg-[#007BFF] text-white text-sm py-2.5 font-medium sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
          <span className="whitespace-nowrap">
            ✦ <strong>ULTRA Demo</strong> · {industryLabel}
          </span>
          <div className="flex items-center gap-3 text-xs flex-wrap">
            {pages.map((p) => (
              <Link
                key={p}
                href={`/industries/${slug}/${p}`}
                className={`hover:underline transition-opacity whitespace-nowrap ${p === page ? "font-bold opacity-100" : "opacity-60 hover:opacity-100"}`}
              >
                {bannerLabels[p] ?? p}
              </Link>
            ))}
            <span className="opacity-30">|</span>
            <Link href={`/industries/${slug}`} className="underline underline-offset-2 opacity-80 hover:opacity-100 whitespace-nowrap">
              ← Back
            </Link>
            <Link href="/contact" className="underline underline-offset-2 opacity-80 hover:opacity-100 whitespace-nowrap">
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
