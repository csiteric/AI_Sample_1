import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F5EFE3] border-b border-[#E8D9C0]">
      {/* Background gradient — right side botanical wash */}
      <div
        className="absolute inset-y-0 right-0 w-1/2 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(90,138,80,0.10) 0%, rgba(45,74,45,0.18) 100%)",
        }}
      />

      {/* Decorative leaf */}
      <div
        className="absolute top-[-20px] right-8 text-[160px] opacity-10 pointer-events-none select-none"
        style={{ transform: "rotate(-12deg)", filter: "grayscale(0.2)" }}
        aria-hidden
      >
        🌿
      </div>
      <div
        className="absolute bottom-[-10px] right-[22%] text-[80px] opacity-[0.07] pointer-events-none select-none"
        style={{ transform: "rotate(20deg)" }}
        aria-hidden
      >
        🌱
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 lg:py-32">
        <div className="max-w-[56%] min-w-[300px]">
          {/* Eyebrow */}
          <p
            className="text-[10px] tracking-[0.22em] uppercase text-[#5A8A50] mb-4"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            Specialty Coffee · Seattle, WA
          </p>

          {/* Headline */}
          <h1
            className="text-[clamp(42px,6vw,72px)] font-light leading-[1.05] text-[#2D4A2D] tracking-[-0.01em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Where every cup
            <br />
            feels like{" "}
            <em
              className="not-italic"
              style={{ fontStyle: "italic", fontWeight: 600, color: "#A8845A" }}
            >
              home.
            </em>
          </h1>

          {/* Sub copy */}
          <p
            className="mt-5 text-[17px] leading-[1.65] text-[#4A6B42] max-w-[420px]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Freshly roasted, thoughtfully made. We bring the warmth of our
            botanical shop to farmers markets and events across Seattle.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {["Single Origin", "Small Batch", "Plant-Based Options"].map(
              (tag) => (
                <Badge
                  key={tag}
                  className="rounded-full px-3 py-1 text-[9px] tracking-[0.1em] uppercase font-medium bg-[#D4E8CB] text-[#3D6B3A] border-none hover:bg-[#D4E8CB]"
                  style={{ fontFamily: "var(--font-ui)" }}
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
              className="inline-flex items-center px-7 py-3 rounded-full bg-[#3D6B3A] text-white text-[12px] font-medium tracking-[0.1em] uppercase hover:bg-[#2D4A2D] transition-colors shadow-[0_4px_20px_rgba(45,74,45,0.22)]"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Find Our Truck
            </a>
            <a
              href="#menu"
              className="inline-flex items-center px-7 py-3 rounded-full border border-[#E8D9C0] text-[#2A1F14] text-[12px] font-medium tracking-[0.1em] uppercase hover:border-[#A8845A] hover:text-[#A8845A] transition-colors"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              View Menu
            </a>
          </div>
        </div>
      </div>

      {/* Bottom divider wave */}
      <div className="h-4 bg-[#FAF6EF]" />
    </section>
  );
}
