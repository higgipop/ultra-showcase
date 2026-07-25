// iernaair.com AC service page: single-column content blocks, no sidebar, images embedded, multiple CTAs
import Link from "next/link";

const related = ["Heating", "Plumbing", "Indoor Air Quality", "Maintenance Plans"];

export default function AirConditioning() {
  return (
    <div className="bg-white font-sans">
      {/* Page banner */}
      <section className="bg-[#1B4B8A] py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-300 text-xs mb-2">
            <Link href="home" className="hover:underline">Home</Link> › <Link href="services" className="hover:underline">Services</Link> › Air Conditioning
          </p>
          <h1 className="text-3xl lg:text-4xl font-black text-white">Air Conditioning Services in Tampa</h1>
          <p className="text-blue-200 mt-2">Same-day AC repair, installation & maintenance across Tampa Bay</p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">

        {/* Block 1 */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Tampa Air Conditioning</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Choosing the right air conditioning system for a Tampa home means balancing efficiency, humidity control, and the unique demands of Florida's climate. Our certified technicians help you navigate every option — from traditional split systems to high-efficiency inverter units.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We carry and install Carrier, Lennox, Trane, and Rheem systems — all backed by manufacturer warranties and our own labor guarantee.
            </p>
            <Link href="contact" className="inline-block bg-[#F58220] hover:bg-[#e07210] text-white font-bold px-7 py-3 rounded transition-colors">
              Schedule Online Today
            </Link>
          </div>
          <div className="bg-gray-100 rounded-xl aspect-[4/3] flex items-center justify-center text-gray-300 font-medium">
            AC System Photo
          </div>
        </div>

        {/* Urgency bar */}
        <div className="bg-[#F58220] text-white rounded-xl py-4 px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-black text-lg">AC Not Cooling? Emergency Service Available 24/7</p>
            <p className="text-white/80 text-sm">Average response time: 2 hours or less</p>
          </div>
          <a href="tel:8135550100" className="bg-white text-[#F58220] font-black px-6 py-3 rounded text-lg whitespace-nowrap">(813) 555-0100</a>
        </div>

        {/* Block 2 */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 bg-gray-100 rounded-xl aspect-[4/3] flex items-center justify-center text-gray-300 font-medium">
            AC Maintenance Photo
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl font-black text-gray-900 mb-4">AC Repair & Maintenance</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Regular maintenance prevents 90% of AC breakdowns. Our tune-up service includes cleaning coils, checking refrigerant levels, inspecting electrical connections, and testing all system components — so your AC runs at peak efficiency all season long.
            </p>
            <ul className="space-y-2 mb-6">
              {["Inspect and clean evaporator and condenser coils", "Check refrigerant levels (recharge if needed)", "Lubricate all moving parts", "Test thermostat calibration", "Inspect electrical connections and capacitors", "Replace air filter"].map((i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-[#F58220] font-bold mt-0.5">✓</span> {i}
                </li>
              ))}
            </ul>
            <Link href="contact" className="inline-block bg-[#1B4B8A] hover:bg-[#163d73] text-white font-bold px-7 py-3 rounded transition-colors">
              Schedule a Tune-Up — $25 OFF
            </Link>
          </div>
        </div>

        {/* Block 3 */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">AC Installation & Replacement</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If your system is 10+ years old or needs repairs that exceed half the cost of replacement, a new system is almost always the smarter investment. We'll calculate your exact payback period on the spot — no pressure, just numbers.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
              <p className="font-bold text-gray-900 mb-3">Why replace your AC now?</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>✓ New systems use 30–40% less electricity</li>
                <li>✓ Better humidity control in Florida's climate</li>
                <li>✓ Manufacturer warranties up to 10 years</li>
                <li>✓ Available financing — 0% for 18 months</li>
              </ul>
            </div>
            <Link href="contact" className="inline-block bg-[#F58220] hover:bg-[#e07210] text-white font-bold px-7 py-3 rounded transition-colors">
              Get a Free Replacement Estimate
            </Link>
          </div>
          <div className="bg-gray-100 rounded-xl aspect-[4/3] flex items-center justify-center text-gray-300 font-medium">
            New AC Install Photo
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="bg-gray-50 py-12 px-4 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="font-bold text-gray-500 text-xs uppercase tracking-widest mb-4">Related Services</p>
          <div className="flex flex-wrap gap-3">
            {related.map((r) => (
              <Link key={r} href="services" className="border border-gray-200 hover:border-[#1B4B8A] hover:text-[#1B4B8A] text-gray-700 font-semibold px-5 py-2 rounded-full text-sm transition-colors">
                {r}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Phone CTA */}
      <section className="bg-[#1B4B8A] py-12 text-center px-4">
        <h2 className="text-2xl font-black text-white mb-2">Ready to Schedule?</h2>
        <p className="text-blue-200 mb-6">Call us or book online — same-day appointments often available.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:8135550100" className="bg-[#F58220] hover:bg-[#e07210] text-white font-black px-10 py-4 rounded text-xl transition-colors">(813) 555-0100</a>
          <Link href="contact" className="border-2 border-white text-white hover:bg-white hover:text-[#1B4B8A] font-bold px-10 py-4 rounded text-lg transition-colors">Book Online</Link>
        </div>
        <p className="text-blue-300 text-sm mt-4">Emergency service line: (727) 732-2803</p>
      </section>
    </div>
  );
}
