import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { StaffDivider } from "@/components/staff-divider";

const reviews = [
  {
    name: "Mara T.",
    neighborhood: "Capitol Hill",
    initials: "MT",
    rating: 5,
    text: "The Dark Canopy Cold Brew is unlike anything else in the city. Cardamom and coconut milk sounds strange but it just works. I show up every Saturday without fail.",
    accentBg: "rgba(58,38,24,0.08)",
    accentBar: "#3A2618",
  },
  {
    name: "James K.",
    neighborhood: "Ballard",
    initials: "JK",
    rating: 5,
    text: "Found them at the Ballard market and haven't gone back to chain coffee since. The oat flat white is silky — perfectly pulled every single time. Unhurried and excellent.",
    accentBg: "rgba(184,109,40,0.10)",
    accentBar: "#B86D28",
  },
  {
    name: "Priya N.",
    neighborhood: "Fremont",
    initials: "PN",
    rating: 5,
    text: "Chord & Cup feels like a tiny room with good light wherever they park. The vibe, the drinks, the care — it's all there. My Sunday isn't complete without them.",
    accentBg: "rgba(58,38,24,0.08)",
    accentBar: "#3A2618",
  },
  {
    name: "Devon R.",
    neighborhood: "South Lake Union",
    initials: "DR",
    rating: 5,
    text: "I work in SLU and the Friday pop-up is now a ritual. The Ember Honey Latte has local honey and you can actually taste the difference. Whole milk, no compromise.",
    accentBg: "rgba(184,109,40,0.10)",
    accentBar: "#B86D28",
  },
  {
    name: "Sofia L.",
    neighborhood: "West Seattle",
    initials: "SL",
    rating: 5,
    text: "Hired them for our company event — highlight of the day. Everyone was raving. Professional, fast, and the setup looked gorgeous. They brought the whole atmosphere with them.",
    accentBg: "rgba(46,84,56,0.08)",
    accentBar: "#2E5438",
  },
  {
    name: "Theo B.",
    neighborhood: "Columbia City",
    initials: "TB",
    rating: 5,
    text: "The Forest Matcha is genuinely the best matcha I've had outside of Japan. Ceremonial grade, light honey, and they don't over-sweeten. Rare and wonderful.",
    accentBg: "rgba(58,38,24,0.08)",
    accentBar: "#3A2618",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 12 12" width={11} height={11} fill="#D4922A" aria-hidden>
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
      className="bg-[#F0E6D3] py-20 px-6"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-3">
          <p
            className="text-[9px] tracking-[0.22em] uppercase text-[#B86D28] mb-3 border-b border-[#E0CEBC] pb-2 inline-block font-medium"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            From Our Regulars
          </p>
          <h2
            id="reviews-heading"
            className="text-[clamp(30px,4vw,46px)] font-bold text-[#2A1A0E] leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What Seattle&rsquo;s{" "}
            <span style={{ color: "#B86D28" }}>Saying</span>
          </h2>
          <p
            className="mt-2 text-[15px] font-light text-[#6B5440]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Real customers, real neighborhoods, real love
          </p>
        </div>

        <StaffDivider />

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <Card
              key={r.name}
              className="border border-[#E0CEBC] shadow-[0_4px_18px_rgba(42,26,14,0.08)] rounded-[14px] bg-[#FDFAF5] overflow-hidden"
            >
              {/* Color accent top bar */}
              <div className="h-1" style={{ background: r.accentBar }} />
              <CardContent className="p-5 flex flex-col gap-4">
                <Stars count={r.rating} />

                <p
                  className="text-[14px] leading-[1.7] text-[#2A1A0E] flex-1 font-light"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  &ldquo;{r.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-3 border-t border-[#F0E6D3]">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback
                      className="text-[10px] font-medium"
                      style={{
                        backgroundColor: r.accentBg,
                        color: "#3A2618",
                        fontFamily: "var(--font-ui)",
                        border: "1px solid rgba(58,38,24,0.12)",
                      }}
                    >
                      {r.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p
                      className="text-[12px] font-medium text-[#2A1A0E] leading-none"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      {r.name}
                    </p>
                    <p
                      className="text-[10px] text-[#B86D28] mt-0.5"
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

        <div className="mt-10 text-center">
          <p
            className="text-[10px] tracking-[0.15em] uppercase text-[#6B5440]"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            ★★★★★ &nbsp;·&nbsp; 4.9 / 5 across 200+ reviews &nbsp;·&nbsp; Google &amp; Yelp
          </p>
        </div>
      </div>
    </section>
  );
}
