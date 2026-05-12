import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FDFAF5] border-b border-[#E0CEBC]">
      {/* Right panel — gradient fade to dark, like the brand board */}
      <div
        className="absolute inset-y-0 right-0 w-[55%] pointer-events-none"
        style={{
          background: "linear-gradient(to left, #3A2618 38%, transparent 100%)",
        }}
      />

      {/* Musical note — visible on dark side */}
      <div
        className="absolute right-16 top-1/2 -translate-y-1/2 pointer-events-none select-none text-[160px] leading-none"
        style={{
          color: "#D4922A",
          opacity: 0.38,
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          zIndex: 1,
        }}
        aria-hidden
      >
        ♪
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 lg:py-32">
        <div className="max-w-[52%] min-w-[300px]">
          {/* Eyebrow */}
          <p
            className="text-[9px] tracking-[0.24em] uppercase text-[#B86D28] mb-5 font-medium"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            Specialty Coffee · Seattle, WA
          </p>

          {/* Headline */}
          <h1
            className="text-[clamp(40px,5.5vw,68px)] font-bold leading-[1.02] text-[#2A1A0E] tracking-[-0.03em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Good light,{" "}
            <span style={{ color: "#B86D28" }}>good coffee.</span>
          </h1>

          {/* Sub copy */}
          <p
            className="mt-5 text-[16px] leading-[1.7] text-[#6B5440] max-w-[400px] font-light"
            style={{ fontFamily: "var(--font-body)" }}
          >
            A place to work, drift, or just sit with a warm cup. We set up at
            markets and events around Seattle every week.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {["Single Origin", "Small Batch", "Plant-Based Options"].map(
              (tag) => (
                <Badge
                  key={tag}
                  className="rounded-full px-3 py-1 text-[8px] tracking-[0.1em] uppercase font-medium border-none hover:opacity-90"
                  style={{
                    backgroundColor: "#3A2618",
                    color: "#D4C4A8",
                    fontFamily: "var(--font-ui)",
                  }}
                >
                  {tag}
                </Badge>
              )
            )}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="#schedule"
              className="inline-flex items-center px-7 py-3 rounded-full bg-[#3A2618] text-[#FAF5EC] text-[11px] font-medium tracking-[0.1em] uppercase hover:bg-[#4A3020] transition-colors shadow-[0_4px_18px_rgba(58,38,24,0.22)]"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Find Our Truck
            </a>
            <a
              href="#menu"
              className="inline-flex items-center px-7 py-3 rounded-full border border-[#E0CEBC] text-[#2A1A0E] text-[11px] font-medium tracking-[0.1em] uppercase hover:border-[#B86D28] hover:text-[#B86D28] transition-colors"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              View Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
