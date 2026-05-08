"use client";

import { ExternalLink } from "lucide-react";

const platforms = [
  {
    name: "Instagram",
    handle: "@urbanrootscoffee",
    href: "https://instagram.com/urbanrootscoffee",
    desc: "Daily shots, behind-the-scenes, seasonal menu previews",
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    accent: "#3D6B3A",
    bg: "#D4E8CB",
  },
  {
    name: "TikTok",
    handle: "@urbanrootscoffee",
    href: "https://tiktok.com/@urbanrootscoffee",
    desc: "Pour videos, truck life, and the occasional plant tour",
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22} fill="currentColor" aria-hidden>
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.79a8.22 8.22 0 004.83 1.55V6.89a4.85 4.85 0 01-1.06-.2z" />
      </svg>
    ),
    accent: "#A8845A",
    bg: "#F5EDE0",
  },
  {
    name: "Facebook",
    handle: "Urban Roots Coffee",
    href: "https://facebook.com/urbanrootscoffee",
    desc: "Events, market schedule updates, community news",
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22} fill="currentColor" aria-hidden>
        <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z" />
      </svg>
    ),
    accent: "#3D6B3A",
    bg: "#D4E8CB",
  },
];

// Faux IG grid posts — represent the aesthetic with colored tiles
const fauxPosts = [
  { emoji: "☕", bg: "linear-gradient(135deg, #D4E8CB, #8DB87A)", label: "Morning pour" },
  { emoji: "🌿", bg: "linear-gradient(135deg, #2D4A2D, #3D6B3A)", label: "Living wall" },
  { emoji: "🍯", bg: "linear-gradient(135deg, #F5EDE0, #C9A87A)", label: "Honey Wood" },
  { emoji: "🚚", bg: "linear-gradient(135deg, #F5EFE3, #E8D9C0)", label: "Truck life" },
  { emoji: "🌱", bg: "linear-gradient(135deg, #D4E8CB, #3D6B3A)", label: "Fremont Sunday" },
  { emoji: "🫧", bg: "linear-gradient(135deg, #E8E4DC, #D4E8CB)", label: "Forest Matcha" },
];

export function Social() {
  return (
    <section
      id="social"
      className="bg-[#F5EFE3] py-20 px-6 border-t border-[#E8D9C0]"
      aria-labelledby="social-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-[9px] tracking-[0.22em] uppercase text-[#A8845A] mb-3 border-b border-[#E8D9C0] pb-2 inline-block"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            Follow Along
          </p>
          <h2
            id="social-heading"
            className="text-[clamp(32px,4vw,48px)] font-light text-[#2D4A2D] leading-[1.1]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Join Our{" "}
            <em style={{ fontStyle: "italic", fontWeight: 600, color: "#A8845A" }}>
              Community
            </em>
          </h2>
          <p
            className="mt-2 text-[17px] italic font-light text-[#5A8A50]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Stay in the loop — new locations, seasonal drops, &amp; market days
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Platform cards */}
          <div className="flex flex-col gap-4">
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-[14px] bg-white border border-[#E8D9C0] shadow-[0_4px_16px_rgba(42,31,20,0.07)] hover:shadow-[0_8px_28px_rgba(42,31,20,0.12)] transition-shadow group"
              >
                {/* Icon container */}
                <div
                  className="w-11 h-11 rounded-[10px] flex items-center justify-center shrink-0"
                  style={{ backgroundColor: p.bg, color: p.accent }}
                >
                  {p.icon}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p
                      className="text-[13px] font-medium text-[#2D4A2D]"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      {p.name}
                    </p>
                    <ExternalLink
                      size={11}
                      className="text-[#8DB87A] opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <p
                    className="text-[11px] mt-0.5"
                    style={{ fontFamily: "var(--font-ui)", color: p.accent }}
                  >
                    {p.handle}
                  </p>
                  <p
                    className="text-[11px] text-[#999] mt-1 leading-[1.5]"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    {p.desc}
                  </p>
                </div>
              </a>
            ))}

            {/* Email CTA */}
            <div className="mt-2 p-5 rounded-[14px] bg-[#2D4A2D] border border-[#2D4A2D]">
              <p
                className="text-[10px] tracking-[0.18em] uppercase text-[#8DB87A] mb-2"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Weekly Newsletter
              </p>
              <p
                className="text-[16px] font-light text-white mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Get the{" "}
                <em style={{ fontStyle: "italic", fontWeight: 600, color: "#C9A87A" }}>
                  schedule
                </em>{" "}
                in your inbox
              </p>
              <form
                className="flex gap-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 text-[12px] outline-none focus:border-[#8DB87A] transition-colors"
                  style={{ fontFamily: "var(--font-ui)" }}
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-full bg-[#C9A87A] text-[#2D4A2D] text-[10px] font-medium tracking-[0.1em] uppercase hover:bg-[#D4A84B] transition-colors shrink-0"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Right: Faux IG grid */}
          <div>
            <p
              className="text-[9px] tracking-[0.15em] uppercase text-[#8DB87A] mb-4"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              @urbanrootscoffee on Instagram
            </p>
            <div className="grid grid-cols-3 gap-2">
              {fauxPosts.map((post) => (
                <div
                  key={post.label}
                  className="aspect-square rounded-[10px] flex items-center justify-center text-[36px] relative overflow-hidden group cursor-pointer"
                  style={{ background: post.bg }}
                  title={post.label}
                >
                  <span className="transition-transform group-hover:scale-110 duration-200">
                    {post.emoji}
                  </span>
                  <div className="absolute inset-0 bg-[#2D4A2D]/0 group-hover:bg-[#2D4A2D]/20 transition-colors duration-200" />
                  <p
                    className="absolute bottom-1.5 left-2 text-[8px] tracking-[0.08em] uppercase text-white/80 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    {post.label}
                  </p>
                </div>
              ))}
            </div>
            <a
              href="https://instagram.com/urbanrootscoffee"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-[11px] tracking-[0.1em] uppercase text-[#3D6B3A] hover:text-[#2D4A2D] transition-colors"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              View all on Instagram
              <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
