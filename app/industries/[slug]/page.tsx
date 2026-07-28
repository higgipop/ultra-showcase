import { notFound } from "next/navigation";
import type { Metadata } from "next";

import ServiceCompaniesIndex from "../_indexes/service-companies";
import LegalIndex from "../_indexes/legal";
import MedicalIndex from "../_indexes/medical";
import ManufacturingIndex from "../_indexes/manufacturing";
import HospitalityIndex from "../_indexes/hospitality";
import FinancialIndex from "../_indexes/financial";
import DefenseIndex from "../_indexes/defense";
import EducationIndex from "../_indexes/education";

type Props = { params: Promise<{ slug: string }> };

const indexes: Record<string, React.ComponentType> = {
  "service-companies": ServiceCompaniesIndex,
  legal: LegalIndex,
  medical: MedicalIndex,
  manufacturing: ManufacturingIndex,
  hospitality: HospitalityIndex,
  financial: FinancialIndex,
  defense: DefenseIndex,
  education: EducationIndex,
};

const industryLabels: Record<string, string> = {
  "service-companies": "Home Services",
  legal: "Legal",
  medical: "Medical & Dental",
  manufacturing: "Manufacturing",
  hospitality: "Hospitality",
  financial: "Financial Services",
  defense: "Defense & Government",
  education: "Education",
};

export function generateStaticParams() {
  return Object.keys(indexes).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const label = industryLabels[slug];
  if (!label) return {};
  return {
    title: `${label} Website Design Demo | ULTRA Design Agency`,
    description: `See every page of what ULTRA would build for a ${label.toLowerCase()} business — fully designed demo pages.`,
  };
}

export default async function IndustryIndexPage({ params }: Props) {
  const { slug } = await params;
  const Component = indexes[slug];
  if (!Component) notFound();
  return <Component />;
}
