import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const drinks = [
  {
    emoji: "☕",
    band: "linear-gradient(135deg, #D4E8CB, #F5EFE3)",
    tag: "Espresso · Milk",
    name: "Oat Flat White",
    desc: "Double ristretto, steamed oat milk, velvety microfoam",
    price: "$5.50",
    badge: "Staff Pick",
  },
  {
    emoji: "🌿",
    band: "linear-gradient(135deg, #D4E8CB, #8DB87A)",
    tag: "Seasonal · Cold",
    name: "Jungle Cold Brew",
    desc: "18-hr cold brew, cardamom, coconut milk, served over ice",
    price: "$6.50",
    badge: "Fan Favorite",
  },
  {
    emoji: "🍯",
    band: "linear-gradient(135deg, #F5EDE0, #C9A87A)",
    tag: "Signature · Hot",
    name: "Honey Wood Latte",
    desc: "Espresso, local Pacific Northwest honey, steamed whole milk",
    price: "$6.00",
    badge: "Signature",
  },
  {
    emoji: "🫧",
    band: "linear-gradient(135deg, #E8E4DC, #D4E8CB)",
    tag: "Matcha · Iced",
    name: "Forest Matcha",
    desc: "Ceremonial matcha, oat milk, light honey, served iced",
    price: "$6.00",
    badge: "New",
  },
];

export function MenuPreview() {
  return (
    <section
      id="menu"
      className="bg-[#FAF6EF] py-20 px-6"
      aria-labelledby="menu-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p
            className="text-[9px] tracking-[0.22em] uppercase text-[#A8845A] mb-3 border-b border-[#E8D9C0] pb-2 inline-block"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            What We're Pouring
          </p>
          <h2
            id="menu-heading"
            className="text-[clamp(32px,4vw,48px)] font-light text-[#2D4A2D] leading-[1.1]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our{" "}
            <em style={{ fontStyle: "italic", fontWeight: 600, color: "#A8845A" }}>
              Menu
            </em>
          </h2>
          <p
            className="mt-2 text-[17px] italic font-light text-[#5A8A50]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Seasonal drinks &amp; single-origin espresso
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {drinks.map((d) => (
            <Card
              key={d.name}
              className="border border-[#E8E4DC] shadow-[0_6px_24px_rgba(42,31,20,0.10)] rounded-[18px] overflow-hidden bg-white"
            >
              {/* Image band */}
              <div
                className="h-[76px] flex items-center justify-center text-[32px]"
                style={{ background: d.band }}
              >
                {d.emoji}
              </div>
              <CardContent className="p-4">
                <p
                  className="text-[9px] tracking-[0.1em] uppercase text-[#5A8A50] mb-1"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  {d.tag}
                </p>
                <h3
                  className="text-[17px] font-semibold text-[#2D4A2D] leading-[1.2]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {d.name}
                </h3>
                <p
                  className="text-[11px] text-[#999] mt-1 leading-[1.5]"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  {d.desc}
                </p>
                <div className="flex justify-between items-center mt-3">
                  <span
                    className="text-[20px] italic text-[#A8845A]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {d.price}
                  </span>
                  <Badge className="rounded-full px-2 py-0.5 text-[8px] tracking-[0.08em] uppercase font-medium bg-[#D4E8CB] text-[#3D6B3A] border-none hover:bg-[#D4E8CB]"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    {d.badge}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p
          className="text-center mt-8 text-[11px] tracking-[0.12em] uppercase text-[#8DB87A]"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          Full menu available at the truck · Seasonal offerings rotate weekly
        </p>
      </div>
    </section>
  );
}
