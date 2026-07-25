import Link from "next/link";

export default function Plumbing() {
  return (
    <div className="bg-white font-sans">
      <section className="bg-[#1B4B8A] py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-300 text-xs mb-2">
            <Link href="home" className="hover:underline">Home</Link> › <Link href="services" className="hover:underline">Services</Link> › Plumbing
          </p>
          <h1 className="text-3xl lg:text-4xl font-black text-white">Plumbing Services in Tampa</h1>
          <p className="text-blue-200 mt-2">Leak repair, drain cleaning, water heaters & more — same-day service</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        {/* Block 1 */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Leak Detection & Repair</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A slow drip wastes up to 3,000 gallons per year — and hidden leaks can cause thousands in structural damage before you notice them. Our plumbers use non-invasive detection equipment to locate leaks behind walls, under slabs, and in ceilings without unnecessary demolition.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We repair copper, PVC, PEX, and galvanized pipe — and we'll show you exactly what we found before we touch anything.
            </p>
            <Link href="contact" className="inline-block bg-[#F58220] hover:bg-[#e07210] text-white font-bold px-7 py-3 rounded transition-colors">
              Schedule Leak Repair
            </Link>
          </div>
          <div className="bg-gray-100 rounded-xl aspect-[4/3] flex items-center justify-center text-gray-300 font-medium">Leak Repair Photo</div>
        </div>

        <div className="bg-[#F58220] text-white rounded-xl py-4 px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-black text-lg">Plumbing Emergency? We Answer 24/7.</p>
            <p className="text-white/80 text-sm">Burst pipe, sewer backup, no hot water — call us now.</p>
          </div>
          <a href="tel:8135550100" className="bg-white text-[#F58220] font-black px-6 py-3 rounded text-lg whitespace-nowrap">(813) 555-0100</a>
        </div>

        {/* Block 2 */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 bg-gray-100 rounded-xl aspect-[4/3] flex items-center justify-center text-gray-300 font-medium">Drain Cleaning Photo</div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl font-black text-gray-900 mb-4">Drain Cleaning</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Store-bought drain cleaners damage pipes and rarely fix the underlying problem. Our hydro-jetting service uses high-pressure water to completely clear blockages — grease, roots, mineral buildup — without chemicals.
            </p>
            <ul className="space-y-2 mb-6">
              {["Kitchen sink and grease trap clearing", "Bathroom drain and tub clearing", "Main sewer line cleaning", "Root intrusion removal", "Video inspection to diagnose blockages", "Recurring drain maintenance programs"].map((i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-[#F58220] font-bold mt-0.5">✓</span> {i}
                </li>
              ))}
            </ul>
            <Link href="contact" className="inline-block bg-[#1B4B8A] hover:bg-[#163d73] text-white font-bold px-7 py-3 rounded transition-colors">
              Book Drain Cleaning
            </Link>
          </div>
        </div>

        {/* Block 3 */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Water Heater Services</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              No hot water is never convenient. We service all brands of tank and tankless water heaters — and with same-day installation available, you won't spend a second night without hot water.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
              <p className="font-bold text-gray-900 mb-3">Signs you need a new water heater:</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>✓ Unit is 10+ years old</li>
                <li>✓ Rusty or discolored water</li>
                <li>✓ Rumbling or popping sounds</li>
                <li>✓ Running out of hot water faster than before</li>
                <li>✓ Visible corrosion around the tank</li>
              </ul>
            </div>
            <Link href="contact" className="inline-block bg-[#F58220] hover:bg-[#e07210] text-white font-bold px-7 py-3 rounded transition-colors">
              Get Water Heater Quote
            </Link>
          </div>
          <div className="bg-gray-100 rounded-xl aspect-[4/3] flex items-center justify-center text-gray-300 font-medium">Water Heater Photo</div>
        </div>
      </div>

      <section className="bg-[#1B4B8A] py-12 text-center px-4">
        <h2 className="text-2xl font-black text-white mb-2">Licensed Plumbers. Upfront Pricing. Same Day.</h2>
        <p className="text-blue-200 mb-6">Call now or book online — we'll confirm your appointment within 30 minutes.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:8135550100" className="bg-[#F58220] hover:bg-[#e07210] text-white font-black px-10 py-4 rounded text-xl transition-colors">(813) 555-0100</a>
          <Link href="contact" className="border-2 border-white text-white hover:bg-white hover:text-[#1B4B8A] font-bold px-10 py-4 rounded text-lg transition-colors">Book Online</Link>
        </div>
      </section>
    </div>
  );
}
