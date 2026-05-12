import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StaffDivider } from "@/components/staff-divider";

const drinks = [
  {
    emoji: "☕",
    band: "linear-gradient(135deg, #E6D8C0, #F0E6D3)",
    tag: "Espresso · Milk",
    name: "Oat Flat White",
    desc: "Double ristretto, steamed oat milk, velvety microfoam",
    price: "$5.50",
    badge: "Staff Pick",
  },
  {
    emoji: "🌿",
    band: "linear-gradient(135deg, #1E3A28, #2E5438)",
    tag: "Seasonal · Cold",
    name: "Dark Canopy Cold Brew",
    desc: "18-hr cold brew, cardamom, coconut milk, over ice",
    price: "$6.50",
    badge: "Fan Favorite",
  },
  {
    emoji: "🍯",
    band: "linear-gradient(135deg, #B86D28, #D4922A)",
    tag: "Signature · Hot",
    name: "Ember Honey Latte",
    desc: "Espresso, local Pacific Northwest honey, steamed whole milk",
    price: "$6.00",
    badge: "Signature",
  },
  {
    emoji: "🫧",
    band: "linear-gradient(135deg, #E6D8C0, #4A7558)",
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
      className="bg-[#F0E6D3] py-20 px-6"
      aria-labelledby="menu-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-3">
          <p
            className="text-[9px] tracking-[0.22em] uppercase text-[#B86D28] mb-3 border-b border-[#E0CEBC] pb-2 inline-block font-medium"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            What We're Pouring
          </p>
          <h2
            id="menu-heading"
            className="text-[clamp(30px,4vw,46px)] font-bold text-[#2A1A0E] leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our{" "}
            <span style={{ color: "#B86D28" }}>Menu</span>
          </h2>
          <p
            className="mt-2 text-[15px] font-light text-[#6B5440]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Seasonal drinks &amp; single-origin espresso
          </p>
        </div>

        <StaffDivider />

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-5">
          {drinks.map((d) => (
            <Card
              key={d.name}
              className="border border-[#E0CEBC] shadow-[0_4px_18px_rgba(42,26,14,0.09)] rounded-[14px] overflow-hidden bg-[#FDFAF5]"
            >
              {/* Image band */}
              <div
                className="h-[72px] flex items-center justify-center text-[30px]"
                style={{ background: d.band }}
              >
                {d.emoji}
              </div>
              <CardContent className="p-4">
                <p
                  className="text-[8px] tracking-[0.12em] uppercase text-[#B86D28] mb-1 font-medium"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  {d.tag}
                </p>
                <h3
                  className="text-[15px] font-semibold text-[#2A1A0E] leading-[1.2] tracking-[-0.01em]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {d.name}
                </h3>
                <p
                  className="text-[11px] text-[#6B5440] mt-1 leading-[1.5] font-light"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {d.desc}
                </p>
                <div className="flex justify-between items-center mt-3">
                  <span
                    className="text-[18px] font-light text-[#B86D28] tracking-[-0.01em]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {d.price}
                  </span>
                  <Badge
                    className="rounded-full px-2 py-0.5 text-[8px] tracking-[0.08em] uppercase font-medium border-none"
                    style={{
                      backgroundColor: "#3A2618",
                      color: "#D4C4A8",
                      fontFamily: "var(--font-ui)",
                    }}
                  >
                    {d.badge}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p
          className="text-center mt-8 text-[10px] tracking-[0.14em] uppercase text-[#6B5440]"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          Full menu at the truck · Seasonal offerings rotate weekly
        </p>
      </div>
    </section>
  );
}
