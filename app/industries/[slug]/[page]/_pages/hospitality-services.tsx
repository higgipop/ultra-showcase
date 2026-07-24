import Link from "next/link";

const categories = [
  {
    name: "Dinner",
    icon: "🍽️",
    desc: "Our dinner menu changes seasonally to reflect what&rsquo;s at peak — from the Gulf waters nearby to the farms we visit personally. Available Tuesday through Sunday, 5pm until close.",
    starters: ["Truffle Burrata with heirloom tomatoes & basil oil · $18", "Charcuterie & Artisan Cheese Board · $24", "Lobster Bisque with cognac & crème fraîche · $16", "Tuna Crudo with yuzu, avocado & micro shiso · $19"],
    mains: ["Grilled Branzino with caponata & lemon caper butter · $42", "Filet Mignon 8oz with truffle butter & pommes purée · $58", "Wild Mushroom Risotto with parmesan & black truffle oil · $32", "Roasted Duck Breast with cherry gastrique & polenta · $46"],
    desserts: ["Warm Chocolate Soufflé with vanilla crème anglaise · $14", "Seasonal Tart with mascarpone & candied citrus · $12", "Artisan Cheese Selection with honey & fruit conserve · $18"],
  },
  {
    name: "Brunch",
    icon: "☕",
    desc: "Our Sunday brunch is a leisurely affair — available 10:30am to 2:30pm. A la carte or the full spread. Bottomless mimosas and handcrafted cocktails available.",
    starters: ["Avocado Toast with poached egg & smoked salmon · $16", "Chilled Oysters on the Half Shell (6) · $22", "French Onion Soup gratinée · $14"],
    mains: ["Eggs Benedict with prosciutto & hollandaise · $19", "Lobster Omelette with shallots & Gruyère · $28", "Brioche French Toast with crème brûlée custard · $17", "Short Rib Hash with fried egg & crispy potatoes · $24"],
    desserts: ["Pain Perdu with fresh berries & vanilla bean cream · $13", "Seasonal Sorbet Trio · $10"],
  },
];

const wine = ["Champagne & Sparkling — 14 selections by the glass or bottle", "White Burgundy & Chardonnay — French and Californian estates", "Pinot Noir — Oregon, Burgundy, and New Zealand", "Cabernet Sauvignon & Bordeaux — Napa Valley and Médoc", "Organic & Natural Wines — curated rotating selection"];

export default function HospitalityServicesPage() {
  return (
    <div style={{fontFamily: "Georgia, 'Times New Roman', serif", backgroundColor: "#FBF7F2"}}>

      {/* Elegant top bar */}
      <div style={{backgroundColor: "#3B2A1A", color: "#D4B896"}} className="text-center text-xs py-2.5 tracking-[0.2em] uppercase font-sans">
        Dinner Tue–Sun 5pm · Brunch Sunday 10:30am · Reservations: (813) 555-0100
      </div>

      {/* Hero */}
      <section className="pt-24 pb-20" style={{backgroundColor: "#1A120B"}}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p style={{color: "#D4B896", letterSpacing: "0.35em", fontSize: "0.7rem"}} className="uppercase mb-6 font-sans">
            Menus & Dining
          </p>
          <h1 style={{color: "#FBF7F2", fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 300, lineHeight: 1.2}} className="mb-6">
            A Menu Built for<br /><em>Every Occasion</em>
          </h1>
          <p style={{color: "#D4B896", lineHeight: 1.9}} className="font-sans text-lg mb-8 max-w-2xl mx-auto font-light">
            Seasonal Italian coastal cuisine crafted from relationships with local fishermen and regional farms. Every plate is a decision, not just a recipe.
          </p>
          <Link href="/contact"
            style={{backgroundColor: "#D4B896", color: "#1A120B"}}
            className="inline-block font-sans font-semibold px-10 py-4 tracking-widest text-xs uppercase hover:opacity-90 transition-opacity">
            Request a Custom Menu
          </Link>
        </div>
      </section>

      {/* Menu sections */}
      {categories.map((cat) => (
        <section key={cat.name} className="py-20 px-6" style={{backgroundColor: cat.name === "Brunch" ? "#F3EDE4" : "#FBF7F2"}}>
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-3xl">{cat.icon}</span>
              <p style={{color: "#9C7A56", letterSpacing: "0.2em", fontSize: "0.7rem"}} className="uppercase font-sans">{cat.name}</p>
            </div>
            <h2 style={{fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "#1A120B", fontWeight: 300}} className="mb-4">
              {cat.name} Menu
            </h2>
            <p style={{color: "#6B5240", lineHeight: 1.9}} className="font-sans mb-10 max-w-2xl">{cat.desc}</p>

            <div className={`grid ${cat.desserts.length > 2 ? "md:grid-cols-3" : "md:grid-cols-2"} gap-10`}>
              {/* Starters */}
              <div>
                <h3 style={{color: "#9C7A56", letterSpacing: "0.15em", fontSize: "0.65rem"}} className="uppercase font-sans mb-5 pb-3 border-b border-[#D4B896]/30">
                  {cat.name === "Brunch" ? "To Start" : "To Start"}
                </h3>
                <ul className="space-y-4">
                  {cat.starters.map((item) => {
                    const [name, price] = item.split(" · $");
                    return (
                      <li key={item} className="font-sans">
                        <div className="flex justify-between items-baseline gap-4">
                          <span style={{color: "#3B2A1A"}} className="text-sm leading-snug">{name}</span>
                          <span style={{color: "#9C7A56"}} className="text-xs flex-shrink-0">${price}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Mains */}
              <div>
                <h3 style={{color: "#9C7A56", letterSpacing: "0.15em", fontSize: "0.65rem"}} className="uppercase font-sans mb-5 pb-3 border-b border-[#D4B896]/30">Mains</h3>
                <ul className="space-y-4">
                  {cat.mains.map((item) => {
                    const [name, price] = item.split(" · $");
                    return (
                      <li key={item} className="font-sans">
                        <div className="flex justify-between items-baseline gap-4">
                          <span style={{color: "#3B2A1A"}} className="text-sm leading-snug">{name}</span>
                          <span style={{color: "#9C7A56"}} className="text-xs flex-shrink-0">${price}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Desserts */}
              <div>
                <h3 style={{color: "#9C7A56", letterSpacing: "0.15em", fontSize: "0.65rem"}} className="uppercase font-sans mb-5 pb-3 border-b border-[#D4B896]/30">Desserts</h3>
                <ul className="space-y-4">
                  {cat.desserts.map((item) => {
                    const [name, price] = item.split(" · $");
                    return (
                      <li key={item} className="font-sans">
                        <div className="flex justify-between items-baseline gap-4">
                          <span style={{color: "#3B2A1A"}} className="text-sm leading-snug">{name}</span>
                          <span style={{color: "#9C7A56"}} className="text-xs flex-shrink-0">${price}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Wine */}
      <section className="py-20 px-6" style={{backgroundColor: "#1A120B"}}>
        <div className="max-w-4xl mx-auto">
          <p style={{color: "#D4B896", letterSpacing: "0.2em", fontSize: "0.7rem"}} className="uppercase font-sans mb-5 text-center">Wine & Cocktails</p>
          <h2 style={{fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "#FBF7F2", fontWeight: 300}} className="text-center mb-10">
            A cellar built for the table.
          </h2>
          <ul className="space-y-4">
            {wine.map((w) => (
              <li key={w} className="flex items-start gap-4 font-sans" style={{borderBottom: "1px solid rgba(212,184,150,0.1)", paddingBottom: "1rem"}}>
                <span style={{color: "#D4B896"}} className="text-lg">✦</span>
                <span style={{color: "#B09880"}} className="text-sm leading-relaxed">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Dietary */}
      <section className="py-14 px-6 text-center" style={{backgroundColor: "#F3EDE4"}}>
        <p style={{color: "#9C7A56", letterSpacing: "0.2em", fontSize: "0.7rem"}} className="uppercase font-sans mb-3">Dietary Accommodations</p>
        <p style={{color: "#3B2A1A", lineHeight: 1.9}} className="font-sans max-w-2xl mx-auto mb-6 text-sm">
          We accommodate vegetarian, vegan, gluten-free, and most food allergies with advance notice. Please note dietary requirements when making your reservation and our kitchen team will be prepared.
        </p>
        <Link href="/contact"
          style={{backgroundColor: "#3B2A1A", color: "#D4B896"}}
          className="inline-block font-sans font-semibold px-8 py-3 tracking-widest text-xs uppercase hover:opacity-90 transition-opacity">
          Make a Reservation
        </Link>
      </section>
    </div>
  );
}
