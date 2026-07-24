import Link from "next/link";
import siteConfig from "@/lib/site.config";

function Hero() {
  return (
    <section className="relative bg-[var(--color-dark)] min-h-[70vh] flex flex-col justify-center overflow-hidden hex-pattern">
      <div className="absolute top-0 left-0 right-0 h-1 cp-gradient-bar" />
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        aria-hidden="true"
      >
        <source src={siteConfig.project.heroVideo} type="video/mp4" />
      </video>
      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
        <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-4">
          {siteConfig.city}, {siteConfig.state}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl mb-6">
          {siteConfig.tagline}
        </h1>
        <p className="text-white/60 text-lg max-w-xl mb-10 leading-relaxed">
          Welcome to the Amory Technology Park Information Center. This website was created to provide clear information about the proposed Technology Park, answer questions, and give residents opportunities to learn more and share their ideas.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/impact"
            className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            See the Impact
          </Link>
          <Link
            href="/community"
            className="bg-[var(--color-primary)]/10 border border-white/30 hover:border-white text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {siteConfig.statItems.map((item) => (
          <div key={item.label} className="text-center">
            <p className="text-3xl md:text-4xl font-bold cp-gradient-text mb-1">
              {item.value}
            </p>
            <p className="text-sm text-gray-500 font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CommunityFirst() {
  const bullets = [
    "Listen respectfully.",
    "Share information openly.",
    "Answer questions honestly.",
    "Continue engaging long after construction is complete.",
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">
              Our Approach
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)] mb-6 leading-tight">
              Community Comes First
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Every successful project begins with listening. That&rsquo;s why community engagement isn&rsquo;t something we&rsquo;re saving until construction begins. It&rsquo;s one of the very first steps. Throughout planning, construction, and operation of the campus, residents will have opportunities to attend community meetings, open houses, educational workshops, and conversations with project representatives.
            </p>
            <ul className="space-y-3 mb-6">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full cp-gradient-bar" />
                  {b}
                </li>
              ))}
            </ul>
            <p className="text-[var(--color-heading)] font-semibold italic">
              Trust isn&rsquo;t built through presentations. It&rsquo;s built through relationships.
            </p>
          </div>
          <div className="space-y-5">
            {siteConfig.commitments.map((c) => (
              <div key={c.title} className="bg-[var(--color-mid)] rounded-xl p-7 border border-gray-100">
                <div className="w-8 h-1 cp-gradient-bar rounded-full mb-4" />
                <h3 className="font-bold text-[var(--color-heading)] mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CBASection() {
  const investments = [
    "Parks and recreation",
    "Public safety",
    "Schools",
    "Workforce training",
    "Community organizations",
    "Infrastructure improvements",
    "Neighborhood projects",
    "Resident-identified priorities",
  ];
  return (
    <section className="bg-[var(--color-dark)] py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-3">
          Community Benefit Agreement
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          Your Voice Will Help Shape This Project
        </h2>
        <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
          One of the most important parts of the Amory Technology Park is making sure local residents have a meaningful role in shaping its future. We will establish a Community Advisory Task Force made up of residents, educators, business owners, civic leaders, and community organizations.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 text-left">
          {investments.map((item) => (
            <div key={item} className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white/80 text-sm">
              {item}
            </div>
          ))}
        </div>
        <Link
          href="/community"
          className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Learn About the Task Force
        </Link>
      </div>
    </section>
  );
}

function EconomicImpact() {
  const stats = [
    { value: "1,000+", label: "Construction Jobs", note: "At peak construction" },
    { value: "120+", label: "Permanent Careers", note: "Operations, maintenance, and skilled trades" },
    { value: "200 MW", label: "Capacity", note: "State-of-the-art infrastructure" },
  ];
  const taxBenefits = [
    "Public schools",
    "Police, fire, and emergency services",
    "Roads and bridges",
    "Parks and recreation",
    "Community programs",
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">
            Economic Impact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)] mb-4">
            Investing in Amory&rsquo;s Future
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            The Amory Technology Park represents one of the largest private investments in the region. Unlike many forms of development, these benefits continue year after year.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="bg-[var(--color-mid)] rounded-xl p-8 border border-gray-100 text-center">
              <p className="text-4xl font-bold cp-gradient-text mb-2">{s.value}</p>
              <h3 className="font-bold text-[var(--color-heading)] mb-2">{s.label}</h3>
              <p className="text-sm text-gray-500">{s.note}</p>
            </div>
          ))}
        </div>
        <div className="bg-[var(--color-mid)] rounded-xl p-8 border border-gray-100">
          <p className="font-semibold text-[var(--color-heading)] mb-4">Those property taxes can help support:</p>
          <div className="flex flex-wrap gap-3">
            {taxBenefits.map((b) => (
              <span key={b} className="bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-600">
                {b}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link href="/impact" className="text-[var(--color-primary)] font-semibold hover:underline">
            See full impact numbers &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

function GoodNeighbor() {
  const items = [
    "Very low water use",
    "Modern cooling technology",
    "Reduced noise",
    "Carefully designed lighting",
    "Attractive landscaping and natural buffers",
    "Minimal daily traffic after construction",
    "Cleaner backup power solutions",
    "Green space",
  ];
  return (
    <section className="py-20 bg-[var(--color-mid)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">
              Designed for Amory
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)] mb-6 leading-tight">
              Designed to Be a Good Neighbor
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              Every part of the campus has been designed with neighboring properties and the surrounding community in mind. Our goal is to create a campus that fits comfortably into the community and becomes something Amory can be proud of.
            </p>
            <Link href="/environment" className="text-[var(--color-primary)] font-semibold hover:underline">
              Our environmental commitments &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {items.map((item) => (
              <div key={item} className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm flex items-start gap-3">
                <span className="flex-shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full cp-gradient-bar" />
                <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTAGrid() {
  const cards = [
    { href: "/about", label: "About", desc: "Our approach, our values, and why Amory matters to this project" },
    { href: "/impact", label: "Impact", desc: "Jobs, tax revenue, and economic value for Monroe County" },
    { href: "/environment", label: "Environment", desc: "Our sustainability commitments, water use, and environmental protections" },
    { href: "/community", label: "Community", desc: "The Community Advisory Task Force and how to get involved in shaping the CBA" },
    { href: "/faq", label: "FAQ", desc: "Answers about traffic, noise, zoning, water, and the project timeline" },
    { href: "/contact", label: "Contact", desc: "Ask a question, send a message, or sign up for project updates" },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[var(--color-primary)] text-xs font-semibold tracking-widest uppercase mb-3">
            Learn More
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)]">
            Everything You Need to Know
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group block bg-[var(--color-mid)] hover:bg-[var(--color-primary)] rounded-xl p-6 border border-gray-100 transition-colors"
            >
              <h3 className="font-bold text-[var(--color-heading)] group-hover:text-white mb-2 transition-colors">
                {c.label}
              </h3>
              <p className="text-sm text-gray-500 group-hover:text-white/80 leading-relaxed transition-colors">
                {c.desc}
              </p>
              <span className="mt-4 inline-block text-[var(--color-primary)] group-hover:text-white text-sm font-semibold transition-colors">
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <CommunityFirst />
      <CBASection />
      <EconomicImpact />
      <GoodNeighbor />
      <CTAGrid />
    </>
  );
}
