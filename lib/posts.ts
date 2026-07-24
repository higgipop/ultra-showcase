export type PostSection =
  | { type: "paragraph"; content: string }
  | { type: "heading"; content: string }
  | { type: "bullets"; items: string[] }
  | { type: "callout"; content: string };

export type Post = {
  slug: string;
  date: string;
  category: string;
  issue: string;
  title: string;
  excerpt: string;
  sections: PostSection[];
};

const posts: Post[] = [
  {
    slug: "highway-62-construction-traffic",
    date: "2026-07-15",
    category: "Roads & Access",
    issue: "Construction Traffic on Highway 62",
    title: "How We're Managing Construction Traffic on Highway 62",
    excerpt:
      "Residents along Highway 62 have raised real concerns about truck traffic during site preparation. Here's what we're doing, what the county has required, and the specific hours and routes we're committed to.",
    sections: [
      {
        type: "paragraph",
        content:
          "Since site preparation began in late June, we've heard directly from neighbors along Highway 62 about increased truck traffic — particularly in the early morning. That feedback is legitimate, and we want to address it plainly.",
      },
      {
        type: "heading",
        content: "What the County Required",
      },
      {
        type: "paragraph",
        content:
          "As a condition of our conditional use permit, Baxter County Transportation required us to submit and adhere to a Construction Traffic Management Plan. That plan restricts heavy haul vehicles to specific routes and limits primary access movements to between 7:00 AM and 6:00 PM, Monday through Saturday.",
      },
      {
        type: "heading",
        content: "What We've Committed to Beyond the Permit",
      },
      {
        type: "bullets",
        items: [
          "A dedicated construction access point off the north service road — not the residential intersection at County Road 14",
          "A flagging crew stationed at the Highway 62 merge during peak delivery windows",
          "No concrete pours or oversized load movements before 8:00 AM",
          "Weekly coordination calls with the Baxter County Road Department through Phase 1 completion",
        ],
      },
      {
        type: "callout",
        content:
          "If you experience a specific incident — a truck at an off-hours time, a blocked driveway, a flagging gap — call our community line directly at (870) 555-0182. We log every call and respond within one business day.",
      },
      {
        type: "heading",
        content: "The Timeline",
      },
      {
        type: "paragraph",
        content:
          "Heavy earthwork and the bulk of construction trucking is projected to run through Q4 2026. After that, materials deliveries become infrequent and the day-to-day traffic profile of the facility is minimal — comparable to a light industrial warehouse, not a trucking depot.",
      },
    ],
  },
  {
    slug: "white-river-water-use",
    date: "2026-07-01",
    category: "Water",
    issue: "Water Use and the White River",
    title: "Our Water Use: What We're Actually Pulling, and From Where",
    excerpt:
      "Data centers and water use is a real conversation worth having honestly. Here are the numbers, the source, the cooling approach we're using, and why it's different from older facilities.",
    sections: [
      {
        type: "paragraph",
        content:
          "Water use is one of the most consistent concerns we hear from Baxter County residents, and it's fair. Older-generation data centers could consume millions of gallons per day using evaporative cooling towers. We want to be direct about what our facility actually does.",
      },
      {
        type: "heading",
        content: "Our Cooling Approach",
      },
      {
        type: "paragraph",
        content:
          "The Baxter County campus uses closed-loop rear-door heat exchangers and dry-side economization — not open evaporative cooling. This means water circulates in a sealed system and is not evaporated into the atmosphere. Total consumptive water loss is approximately 90% lower than an equivalent facility using conventional cooling towers.",
      },
      {
        type: "heading",
        content: "The Numbers",
      },
      {
        type: "bullets",
        items: [
          "Peak water consumption at full 120 MW load: approximately 180,000 gallons per day",
          "Equivalent daily use: roughly 1.8 households per megawatt of IT load",
          "Water source: Baxter County Water Authority municipal supply — not a direct White River withdrawal",
          "We are a metered commercial customer, subject to the same conservation requirements as other large commercial users in the county",
        ],
      },
      {
        type: "callout",
        content:
          "For comparison: a typical 18-hole golf course in Arkansas consumes 500,000–800,000 gallons per day in summer months. Our facility at full build-out uses less than a quarter of that, year-round.",
      },
      {
        type: "heading",
        content: "Our Commitment",
      },
      {
        type: "paragraph",
        content:
          "We've agreed to publish quarterly water consumption reports to the Baxter County Water Authority and make them publicly available on this site. The first report will cover Q3 2026 once the facility begins commissioning operations.",
      },
    ],
  },
  {
    slug: "local-hiring-first-round",
    date: "2026-06-15",
    category: "Jobs",
    issue: "Local Hiring — Where Things Stand",
    title: "Hiring Update: What We've Done, Who We've Hired, What's Coming",
    excerpt:
      "We committed to prioritizing Baxter County residents for construction and permanent roles. Here's a first accounting of how that commitment is tracking against real numbers.",
    sections: [
      {
        type: "paragraph",
        content:
          "In February, we committed publicly to sourcing at least 60% of construction labor from Baxter County and surrounding counties, and to working with local partners — not just posting jobs on a corporate website. Three months into active construction, here's where things stand.",
      },
      {
        type: "heading",
        content: "Construction Workforce — Current Status",
      },
      {
        type: "bullets",
        items: [
          "Total active construction workers on site: 214",
          "Baxter County residents: 89 (42%)",
          "Surrounding county residents (Fulton, Marion, Boone, Stone): 61 (28%)",
          "Combined local workforce: 70% — above our 60% commitment",
          "Primary trades on site: concrete, electrical rough-in, steel erection, site utilities",
        ],
      },
      {
        type: "paragraph",
        content:
          "These numbers will shift as the project phases in specialty work — particularly mechanical and data infrastructure installation — where regional or national contractors with specific certifications are sometimes required. We'll report those numbers transparently when they change.",
      },
      {
        type: "heading",
        content: "Partners We're Working With",
      },
      {
        type: "bullets",
        items: [
          "Arkansas Workforce Services — Mountain Home office: active referrals for construction labor",
          "North Arkansas College: we've sponsored 8 students in the Electrical Technology program",
          "Baxter County Economic Development Corporation: joint referral pipeline for permanent roles",
          "Mountain Home High School: toured the site with 24 students in February (a second visit is planned for September)",
        ],
      },
      {
        type: "callout",
        content:
          "Permanent operations roles — data center technicians, facilities engineers, security staff, and administration — will begin posting in Q1 2027. We'll hold local job fairs before any of those roles go to external recruiters.",
      },
      {
        type: "heading",
        content: "What's Next",
      },
      {
        type: "paragraph",
        content:
          "Phase 1 construction peaks in Q3 2026, when we expect the on-site workforce to exceed 400. We'll publish another hiring update then. If you're a local contractor or trade worker looking to get on the bid list, contact us at jobs@cpdatacenters.com and we'll connect you with the appropriate general contractor.",
      },
    ],
  },
];

export default posts;

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
