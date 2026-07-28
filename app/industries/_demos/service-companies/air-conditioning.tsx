import Link from "next/link";

const serviceBlocks = [
  { title: "AC Repair", img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80&auto=format&fit=crop", desc: "Fast, accurate diagnosis and repair for all AC brands. We carry common parts on every truck — most repairs completed same day. Flat-rate pricing, no surprises.", items: ["All brands & models serviced","Same-day parts on most calls","Written estimate before any work begins","90-day parts and labor warranty"] },
  { title: "AC Installation", img: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&q=80&auto=format&fit=crop", desc: "New system installed by factory-certified technicians. We size your system correctly using Manual J load calculations — not guesswork.", items: ["Free in-home estimate","Carrier, Trane, Lennox, Goodman","Permit pulled & inspected","12-month installation warranty"] },
  { title: "AC Maintenance", img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80&auto=format&fit=crop", desc: "Annual tune-ups extend equipment life and catch small problems before they become expensive ones. Join our maintenance plan for priority scheduling and discounts.", items: ["21-point inspection","Coil cleaning & refrigerant check","Filter replacement included","Priority scheduling for members"] },
];

export default function AirConditioning() {
  return (
    <div className="bg-white font-sans">
      <div className="bg-[#F58220] text-white text-center text-sm py-2 font-semibold">
        Same-Day AC Service · <a href="tel:8132056160" className="underline">(813) 205-6160</a> · $50 OFF Repairs
      </div>
      <nav className="bg-white border-b border-gray-200 sticky top-[36px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="home" className="font-black text-[#1B4B8A] text-xl tracking-tight">COMFORT<span className="text-[#F58220]">PRO</span></Link>
          <div className="hidden lg:flex gap-6 text-sm font-semibold text-gray-700">
            <Link href="air-conditioning" className="text-[#1B4B8A]">Air Conditioning</Link>
            <Link href="plumbing" className="hover:text-[#1B4B8A]">Plumbing</Link>
            <Link href="services" className="hover:text-[#1B4B8A]">All Services</Link>
            <Link href="about" className="hover:text-[#1B4B8A]">About</Link>
          </div>
          <Link href="contact" className="bg-[#F58220] hover:bg-[#e07210] text-white font-bold px-4 py-2 rounded text-sm transition-colors">Schedule Online</Link>
        </div>
      </nav>

      {/* Photo hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <img src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1800&q=80&auto=format&fit=crop" alt="AC technician servicing a unit" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B4B8A] via-[#1B4B8A]/65 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 pb-14 w-full">
          <p className="text-[#F58220] text-xs font-bold uppercase tracking-[0.2em] mb-3">Tampa Bay&rsquo;s AC Experts</p>
          <h1 className="text-3xl lg:text-5xl font-black text-white leading-tight mb-4">Air Conditioning Repair,<br />Installation &amp; Maintenance</h1>
          <p className="text-blue-200 leading-relaxed mb-6 max-w-2xl">Same-day AC repair by licensed, certified technicians. We service all brands and models. Emergency service 24/7.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:8132056160" className="bg-[#F58220] text-white font-black px-6 py-3 rounded text-center hover:bg-[#e07210] transition-colors">(813) 205-6160</a>
            <Link href="contact" className="border-2 border-white text-white font-bold px-6 py-3 rounded text-center hover:bg-white hover:text-[#1B4B8A] transition-colors">Book Online</Link>
          </div>
        </div>
      </section>

      {/* Seasonal coupon strip */}
      <section className="bg-[#1B4B8A] py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center items-center">
          <div className="border-2 border-dashed border-white/40 rounded-xl px-8 py-4 text-center">
            <div className="text-3xl font-black text-[#F58220]">$50 OFF</div>
            <p className="text-white text-sm font-semibold">Any AC Repair · New Customers</p>
          </div>
          <div className="border-2 border-dashed border-white/40 rounded-xl px-8 py-4 text-center">
            <div className="text-3xl font-black text-[#F58220]">0% APR</div>
            <p className="text-white text-sm font-semibold">18-Month Financing Available</p>
          </div>
          <div className="border-2 border-dashed border-white/40 rounded-xl px-8 py-4 text-center">
            <div className="text-3xl font-black text-[#F58220]">FREE</div>
            <p className="text-white text-sm font-semibold">Second Opinion on Any Diagnosis</p>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="border-b border-gray-100 py-5 px-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-6 justify-center text-sm">
          {["Licensed & Insured","5-Star Rated","Same-Day Service","All Brands Serviced","Financing Available","Parts Warranty"].map((b) => (
            <span key={b} className="font-semibold text-gray-700 flex items-center gap-1.5"><span className="text-[#F58220] font-black">✓</span>{b}</span>
          ))}
        </div>
      </section>

      {/* Service blocks — each with unique photo */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-14">
          {serviceBlocks.map((block, i) => (
            <div key={block.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="rounded-2xl overflow-hidden aspect-video">
                <img src={block.img} alt={block.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-3">{block.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-5">{block.desc}</p>
                <ul className="space-y-2 mb-6">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="text-[#F58220] font-black mt-0.5">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <Link href="contact" className="inline-block bg-[#1B4B8A] hover:bg-[#F58220] text-white font-bold px-6 py-3 rounded transition-colors text-sm">Schedule {block.title}</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B4B8A] py-14 text-center px-4">
        <h2 className="text-2xl font-black text-white mb-3">AC Problem? We&rsquo;re Ready.</h2>
        <p className="text-blue-200 mb-6">Same-day appointments in most cases. No trip fee for estimates.</p>
        <a href="tel:8132056160" className="inline-block bg-[#F58220] hover:bg-[#e07210] text-white font-black px-10 py-4 rounded text-xl transition-colors">(813) 205-6160</a>
      </section>
    </div>
  );
}
