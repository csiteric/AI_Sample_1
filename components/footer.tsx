export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#3A2618] text-[#FAF5EC] px-6 py-16 relative overflow-hidden">
      {/* Warm amber radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 85% 50%, rgba(212,146,42,0.16) 0%, transparent 55%)",
        }}
      />
      {/* Staff lines watermark */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `repeating-linear-gradient(
            to bottom,
            transparent 0px,
            transparent 18px,
            rgba(212,146,42,0.07) 18px,
            rgba(212,146,42,0.07) 19px
          )`,
        }}
      />
      {/* Musical note watermark */}
      <div
        className="absolute top-6 right-10 text-[160px] leading-none select-none pointer-events-none"
        style={{
          color: "#D4922A",
          opacity: 0.07,
          fontFamily: "var(--font-display)",
          fontWeight: 700,
        }}
        aria-hidden
      >
        ♩
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div
              className="text-[22px] font-bold leading-none mb-3 tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-display)", color: "#FAF5EC" }}
            >
              Chord{" "}
              <span style={{ color: "#D4922A" }}>&amp;</span>{" "}
              Cup
            </div>
            <p
              className="text-[13px] font-light text-[#C4A880] mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Pull up a seat. Stay a while.
            </p>
            <p
              className="text-[12px] text-[#C4A880] leading-[1.65] max-w-[260px] font-light"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Seattle&rsquo;s specialty coffee truck — rooted in craft, community,
              and the belief that a great cup changes your whole morning.
            </p>
          </div>

          {/* Links */}
          <div>
            <p
              className="text-[9px] tracking-[0.2em] uppercase text-[#D4922A] mb-5 font-medium"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Quick Links
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Menu", href: "#menu" },
                { label: "Truck Schedule", href: "#schedule" },
                { label: "Customer Reviews", href: "#reviews" },
                { label: "Social Media", href: "#social" },
                { label: "Catering & Events", href: "#social" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-[12px] text-[#FAF5EC]/60 hover:text-[#D4922A] transition-colors font-light"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-[9px] tracking-[0.2em] uppercase text-[#D4922A] mb-5 font-medium"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Say Hello
            </p>
            <div className="flex flex-col gap-3">
              <div>
                <p
                  className="text-[9px] tracking-[0.12em] uppercase text-[#D4922A] mb-1 font-medium"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  Email
                </p>
                <a
                  href="mailto:hello@chordandcup.com"
                  className="text-[13px] text-[#FAF5EC]/70 hover:text-[#D4922A] transition-colors font-light"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  hello@chordandcup.com
                </a>
              </div>
              <div>
                <p
                  className="text-[9px] tracking-[0.12em] uppercase text-[#D4922A] mb-1 font-medium"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  Based in
                </p>
                <p
                  className="text-[13px] text-[#FAF5EC]/70 font-light"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  Seattle, Washington
                </p>
              </div>
              <div className="flex gap-3 mt-2">
                {[
                  { label: "IG", href: "https://instagram.com/chordandcup" },
                  { label: "TK", href: "https://tiktok.com/@chordandcup" },
                  { label: "FB", href: "https://facebook.com/chordandcup" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-[10px] font-medium text-white/50 hover:border-[#D4922A] hover:text-[#D4922A] transition-colors"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p
            className="text-[10px] text-white/30 font-light"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            © {year} Chord &amp; Cup · Seattle, WA · All rights reserved
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[10px] text-white/30 hover:text-white/60 transition-colors"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
