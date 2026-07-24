const siteConfig = {
  name: "ULTRA Design Agency",
  tagline: "We build websites that rank, load fast, and convert.",
  subTagline:
    "Custom web design, local SEO, and monthly care plans for businesses that take their online presence seriously.",
  phone: "(813) 555-0100",
  email: "hello@ultradesignagency.com",
  city: "Tampa",
  state: "FL",
  county: "Hillsborough County",
  contactEmail: "hello@ultradesignagency.com",

  brand: {
    theme: "dark" as "dark" | "light",
    primaryColor: "#007BFF",
    accentColor: "#00C2CB",
    font: "Inter",
  },

  statItems: [
    { value: "98+", label: "Sites Launched" },
    { value: "< 2s", label: "Avg. Load Time" },
    { value: "90+", label: "Avg. PageSpeed" },
    { value: "4.9★", label: "Client Rating" },
  ],

  meta: {
    title: "ULTRA Design Agency | Web Design, SEO & Care Plans",
    description:
      "Custom web design and local SEO for service businesses, medical practices, law firms, and more. Fast sites. Real results. Tampa, FL.",
  },

  services: [
    {
      slug: "web-design",
      title: "Web Design & Development",
      tagline: "Sites that perform, not just impress.",
      icon: "design",
      summary:
        "Custom-built websites on modern infrastructure — fast, secure, and built to convert visitors into clients.",
      features: [
        "Custom design — no templates, no page builders",
        "Mobile-first, responsive on every device",
        "Built on Next.js — loads in under 2 seconds",
        "Deployed to Cloudflare or Vercel global CDN",
        "Contact forms with email delivery",
        "Google Analytics + Search Console setup",
        "On-page SEO foundation baked in",
        "30-day post-launch support included",
      ],
      process: [
        { step: 1, title: "Discovery", body: "We learn your business, your clients, and what you need the site to accomplish." },
        { step: 2, title: "Design", body: "A full homepage mockup for your review before a single line of code is written." },
        { step: 3, title: "Build", body: "Development on a private staging environment. You review before anything goes live." },
        { step: 4, title: "Launch", body: "We handle DNS, SSL, deployment, and a final check across devices." },
      ],
      idealFor: [
        "Service businesses ready to move off a DIY or outdated site",
        "Companies that want a site that actually ranks on Google",
        "Organizations that need something custom, not a template",
      ],
      startingAt: "$3,500",
      cta: "Start a Project",
    },
    {
      slug: "website-care",
      title: "Website Care Plans",
      tagline: "Your site, maintained. Every month.",
      icon: "care",
      summary:
        "Monthly plans that keep your site fast, secure, updated, and working — so you never have to think about it.",
      features: [
        "Weekly plugin and core updates",
        "Daily automated backups with 30-day retention",
        "Uptime monitoring with instant alerts",
        "Performance monitoring — PageSpeed & Core Web Vitals",
        "Security scanning and malware removal",
        "Monthly content updates (text, images, hours, staff)",
        "Priority support — response within one business day",
        "Monthly report with uptime, performance, and work log",
      ],
      process: [
        { step: 1, title: "Site Audit", body: "We start with a full review of your current site — speed, security, and content." },
        { step: 2, title: "Onboarding", body: "Access, backups, and monitoring set up within 48 hours." },
        { step: 3, title: "First Update Cycle", body: "Updates applied, issues resolved, and a baseline report delivered." },
        { step: 4, title: "Ongoing", body: "Monthly maintenance runs automatically. You get a report. We handle the rest." },
      ],
      idealFor: [
        "Business owners who don't want to manage their own website",
        "Companies on WordPress that have been hacked or had outages",
        "Organizations that need content changes but not a full redesign",
      ],
      startingAt: "$99/month",
      cta: "See Plans",
    },
    {
      slug: "seo",
      title: "SEO & Local Search",
      tagline: "Get found by the right people in the right places.",
      icon: "seo",
      summary:
        "Search engine optimization focused on local rankings, Google Business Profile, and content that drives qualified traffic.",
      features: [
        "Local keyword research and competitive analysis",
        "Google Business Profile optimization",
        "On-page SEO — titles, meta, headings, schema",
        "Location and service landing pages",
        "Citation building and NAP consistency audit",
        "Monthly rank tracking and reporting",
        "Content strategy and blog planning",
        "Core Web Vitals optimization",
      ],
      process: [
        { step: 1, title: "Audit", body: "Full technical and content audit of your current site and local presence." },
        { step: 2, title: "Strategy", body: "Keyword map, page plan, and priority list tailored to your market." },
        { step: 3, title: "Implementation", body: "On-page changes, new pages, and GBP updates — all handled for you." },
        { step: 4, title: "Track & Report", body: "Monthly ranking reports, traffic trends, and recommendations." },
      ],
      idealFor: [
        "Local businesses not appearing in Google Maps results",
        "Companies being outranked by competitors with worse sites",
        "Organizations launching a new site and starting from zero",
      ],
      startingAt: "$350/month",
      cta: "Get an SEO Audit",
    },
    {
      slug: "branding",
      title: "Branding & Identity",
      tagline: "A brand that looks like you mean business.",
      icon: "brand",
      summary:
        "Logo, color system, typography, and brand guidelines — the foundation every professional organization needs.",
      features: [
        "Logo design (primary + alternate marks)",
        "Color palette with hex, RGB, and CMYK values",
        "Typography system — heading and body font pairing",
        "Brand guidelines PDF",
        "Business card design",
        "Email signature template",
        "Social media profile kit",
        "File delivery in all formats (SVG, PNG, PDF)",
      ],
      process: [
        { step: 1, title: "Discovery", body: "Brand questionnaire, competitor review, and mood board alignment." },
        { step: 2, title: "Concepts", body: "Three distinct logo directions for your review." },
        { step: 3, title: "Refinement", body: "Two rounds of revisions on your chosen direction." },
        { step: 4, title: "Delivery", body: "Full brand package delivered in all formats with a usage guide." },
      ],
      idealFor: [
        "New businesses that need a professional identity from day one",
        "Established companies whose brand no longer reflects where they are",
        "Organizations preparing for a website rebuild or rebrand",
      ],
      startingAt: "$1,200",
      cta: "Start Your Brand",
    },
    {
      slug: "ecommerce",
      title: "E-Commerce",
      tagline: "Sell online without the headache.",
      icon: "ecommerce",
      summary:
        "Online stores built for conversion — fast checkout, mobile-optimized, and integrated with the payment and shipping tools you already use.",
      features: [
        "Custom storefront design — not a theme",
        "Product catalog setup and organization",
        "Stripe or Shopify Payments integration",
        "Mobile-optimized cart and checkout",
        "Inventory and order management",
        "Shipping rate configuration",
        "Abandoned cart recovery",
        "Analytics and sales reporting",
      ],
      process: [
        { step: 1, title: "Scope", body: "We map your catalog, payment needs, and shipping requirements." },
        { step: 2, title: "Design", body: "Homepage, product page, and checkout flow reviewed before build." },
        { step: 3, title: "Build & Test", body: "Full store built and tested with real transactions on staging." },
        { step: 4, title: "Launch", body: "Go live with inventory imported, payments connected, and staff trained." },
      ],
      idealFor: [
        "Businesses ready to add or upgrade an online store",
        "Retailers outgrowing a basic Shopify or Squarespace setup",
        "Service businesses adding digital products or booking",
      ],
      startingAt: "$5,000",
      cta: "Plan Your Store",
    },
    {
      slug: "audit",
      title: "Website Audits",
      tagline: "Know exactly what's wrong — and how to fix it.",
      icon: "audit",
      summary:
        "A comprehensive review of your current site covering performance, SEO, accessibility, security, and conversion — with a prioritized fix list.",
      features: [
        "Lighthouse performance analysis (mobile + desktop)",
        "Core Web Vitals assessment",
        "On-page SEO review — titles, headings, schema, meta",
        "Google Business Profile check",
        "Accessibility (WCAG) review",
        "Security header scan",
        "Mobile usability review",
        "Prioritized fix list with effort estimates",
      ],
      process: [
        { step: 1, title: "Intake", body: "You share your URL, goals, and any specific concerns." },
        { step: 2, title: "Analysis", body: "We run tools and manual review across all audit categories." },
        { step: 3, title: "Report", body: "Full written report with findings, scores, and ranked fix list." },
        { step: 4, title: "Debrief", body: "30-minute call to walk through the report and answer questions." },
      ],
      idealFor: [
        "Business owners who suspect their site is hurting more than helping",
        "Companies before a redesign who want a clear picture of what to fix",
        "Organizations whose site traffic or leads have dropped unexpectedly",
      ],
      startingAt: "$450",
      cta: "Order an Audit",
    },
  ],
};

export default siteConfig;
export type SiteConfig = typeof siteConfig;
