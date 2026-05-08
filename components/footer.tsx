export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2D4A2D] text-white px-6 py-16 relative overflow-hidden">
      {/* Radial warm glow from right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 90% 50%, rgba(168,132,90,0.18) 0%, transparent 55%)",
        }}
      />
      {/* Botanical watermark */}
      <div
        className="absolute top-4 right-8 text-[160px] opacity-[0.04] pointer-events-none select-none"
        aria-hidden
      >
        🌿
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <div>
            <div
              className="text-[24px] leading-none mb-3"
              style={{ fontFamily: "var(--font-display)", color: "white" }}
            >
              <em style={{ fontStyle: "italic", fontWeight: 600 }}>
                Urban Roots
              </em>{" "}
              <span style={{ fontWeight: 300, color: "#C9A87A" }}>Coffee</span>
            </div>
            <p
              className="text-[14px] italic font-light text-[#8DB87A] mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Where the jungle meets your cup.
            </p>
            <p
              className="text-[12px] text-[#8DB87A] leading-[1.65] max-w-[260px]"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Seattle's botanical coffee truck — rooted in craft, community, and
              the belief that a great cup changes your whole morning.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p
              className="text-[9px] tracking-[0.2em] uppercase text-[#8DB87A] mb-5"
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
                  className="text-[12px] text-white/70 hover:text-[#C9A87A] transition-colors"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact / location */}
          <div>
            <p
              className="text-[9px] tracking-[0.2em] uppercase text-[#8DB87A] mb-5"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Say Hello
            </p>
            <div className="flex flex-col gap-3">
              <div>
                <p
                  className="text-[10px] tracking-[0.12em] uppercase text-[#8DB87A] mb-1"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  Email
                </p>
                <a
                  href="mailto:hello@urbanrootscoffee.com"
                  className="text-[13px] text-white/80 hover:text-[#C9A87A] transition-colors"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  hello@urbanrootscoffee.com
                </a>
              </div>
              <div>
                <p
                  className="text-[10px] tracking-[0.12em] uppercase text-[#8DB87A] mb-1"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  Based in
                </p>
                <p
                  className="text-[13px] text-white/80"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  Seattle, Washington
                </p>
              </div>
              <div className="flex gap-3 mt-2">
                {[
                  { label: "IG", href: "https://instagram.com/urbanrootscoffee" },
                  { label: "TK", href: "https://tiktok.com/@urbanrootscoffee" },
                  { label: "FB", href: "https://facebook.com/urbanrootscoffee" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-medium text-white/60 hover:border-[#C9A87A] hover:text-[#C9A87A] transition-colors"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p
            className="text-[10px] text-white/40"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            © {year} Urban Roots Coffee · Seattle, WA · All rights reserved
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[10px] text-white/40 hover:text-white/70 transition-colors"
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
