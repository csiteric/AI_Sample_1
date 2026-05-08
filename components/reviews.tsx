import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const reviews = [
  {
    name: "Mara T.",
    neighborhood: "Capitol Hill",
    initials: "MT",
    rating: 5,
    text: "The Jungle Cold Brew is unlike anything else in the city. Cardamom and coconut milk sounds strange but it just works. I show up every Saturday without fail.",
    color: "#D4E8CB",
  },
  {
    name: "James K.",
    neighborhood: "Ballard",
    initials: "JK",
    rating: 5,
    text: "Found these guys at the Ballard market and haven't gone back to chain coffee since. The oat flat white is silky perfection — perfectly pulled every single time.",
    color: "#F5EDE0",
  },
  {
    name: "Priya N.",
    neighborhood: "Fremont",
    initials: "PN",
    rating: 5,
    text: "Urban Roots feels like the shop itself transported to wherever they park. The vibe, the drinks, the care — it's all there. My Sunday isn't complete without them.",
    color: "#D4E8CB",
  },
  {
    name: "Devon R.",
    neighborhood: "South Lake Union",
    initials: "DR",
    rating: 5,
    text: "I work in SLU and the Friday pop-up is now a ritual. The Honey Wood Latte has local honey and you can actually taste the difference. Whole milk, no compromise.",
    color: "#F5EDE0",
  },
  {
    name: "Sofia L.",
    neighborhood: "West Seattle",
    initials: "SL",
    rating: 5,
    text: "Hired them for our company event and it was the highlight. Everyone was raving. Professional, fast, and the setup looks gorgeous — plants everywhere, very on-brand.",
    color: "#E8E4DC",
  },
  {
    name: "Theo B.",
    neighborhood: "Columbia City",
    initials: "TB",
    rating: 5,
    text: "The Forest Matcha is genuinely the best matcha I've had outside of Japan. Ceremonial grade, light honey, and they don't over-sweeten. Rare and wonderful.",
    color: "#D4E8CB",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 12 12"
          width={12}
          height={12}
          fill="#D4A84B"
          aria-hidden
        >
          <path d="M6 1l1.3 2.7 3 .4-2.2 2.1.5 3L6 7.9 3.4 9.2l.5-3L1.7 4.1l3-.4L6 1z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-[#FAF6EF] py-20 px-6"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-[9px] tracking-[0.22em] uppercase text-[#A8845A] mb-3 border-b border-[#E8D9C0] pb-2 inline-block"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            From Our Regulars
          </p>
          <h2
            id="reviews-heading"
            className="text-[clamp(32px,4vw,48px)] font-light text-[#2D4A2D] leading-[1.1]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What Seattle's{" "}
            <em style={{ fontStyle: "italic", fontWeight: 600, color: "#A8845A" }}>
              Saying
            </em>
          </h2>
          <p
            className="mt-2 text-[17px] italic font-light text-[#5A8A50]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Real customers, real neighborhoods, real love
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <Card
              key={r.name}
              className="border border-[#E8D9C0] shadow-[0_6px_24px_rgba(42,31,20,0.08)] rounded-[18px] bg-white overflow-hidden"
            >
              {/* Color accent top */}
              <div
                className="h-1.5"
                style={{ background: r.color === "#D4E8CB" ? "#3D6B3A" : r.color === "#F5EDE0" ? "#A8845A" : "#8DB87A" }}
              />
              <CardContent className="p-5 flex flex-col gap-4">
                {/* Stars */}
                <Stars count={r.rating} />

                {/* Quote */}
                <p
                  className="text-[15px] leading-[1.65] text-[#2A1F14] flex-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  &ldquo;{r.text}&rdquo;
                </p>

                {/* Reviewer */}
                <div className="flex items-center gap-3 pt-2 border-t border-[#F5EFE3]">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback
                      className="text-[10px] font-medium"
                      style={{
                        backgroundColor: r.color,
                        color: "#2D4A2D",
                        fontFamily: "var(--font-ui)",
                      }}
                    >
                      {r.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p
                      className="text-[12px] font-medium text-[#2D4A2D] leading-none"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      {r.name}
                    </p>
                    <p
                      className="text-[10px] text-[#8DB87A] mt-0.5"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      {r.neighborhood}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Aggregate rating */}
        <div className="mt-10 text-center">
          <p
            className="text-[10px] tracking-[0.15em] uppercase text-[#8DB87A]"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            ★★★★★ &nbsp;·&nbsp; 4.9 / 5 across 200+ reviews &nbsp;·&nbsp; Google &amp; Yelp
          </p>
        </div>
      </div>
    </section>
  );
}
