"use client";

import { ExternalLink } from "lucide-react";

const platforms = [
  {
    name: "Instagram",
    handle: "@chordandcup",
    href: "https://instagram.com/chordandcup",
    desc: "Daily shots, behind-the-scenes, seasonal menu previews",
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    accent: "#3A2618",
    bg: "rgba(58,38,24,0.08)",
  },
  {
    name: "TikTok",
    handle: "@chordandcup",
    href: "https://tiktok.com/@chordandcup",
    desc: "Pour videos, truck life, and the occasional plant tour",
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden>
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.79a8.22 8.22 0 004.83 1.55V6.89a4.85 4.85 0 01-1.06-.2z" />
      </svg>
    ),
    accent: "#B86D28",
    bg: "rgba(184,109,40,0.10)",
  },
  {
    name: "Facebook",
    handle: "Chord & Cup",
    href: "https://facebook.com/chordandcup",
    desc: "Events, market schedule updates, community news",
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden>
        <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z" />
      </svg>
    ),
    accent: "#2E5438",
    bg: "rgba(46,84,56,0.08)",
  },
];

const fauxPosts = [
  { emoji: "☕", bg: "linear-gradient(135deg, #E6D8C0, #F0E6D3)", label: "Morning pour" },
  { emoji: "🌿", bg: "linear-gradient(135deg, #1E3A28, #2E5438)", label: "Monstera corner" },
  { emoji: "🍯", bg: "linear-gradient(135deg, #B86D28, #D4922A)", label: "Ember Honey" },
  { emoji: "🚚", bg: "linear-gradient(135deg, #F0E6D3, #E6D8C0)", label: "Truck life" },
  { emoji: "🌱", bg: "linear-gradient(135deg, #2E5438, #1E3A28)", label: "Fremont Sunday" },
  { emoji: "🫧", bg: "linear-gradient(135deg, #E6D8C0, #4A7558)", label: "Forest Matcha" },
];

export function Social() {
  return (
    <section
      id="social"
      className="bg-[#FDFAF5] py-20 px-6 border-t border-[#E0CEBC]"
      aria-labelledby="social-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-[9px] tracking-[0.22em] uppercase text-[#B86D28] mb-3 border-b border-[#E0CEBC] pb-2 inline-block font-medium"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            Follow Along
          </p>
          <h2
            id="social-heading"
            className="text-[clamp(30px,4vw,46px)] font-bold text-[#2A1A0E] leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Join Our{" "}
            <span style={{ color: "#B86D28" }}>Community</span>
          </h2>
          <p
            className="mt-2 text-[15px] font-light text-[#6B5440]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            New locations, seasonal drops &amp; market days — in your feed
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: platform cards + email */}
          <div className="flex flex-col gap-4">
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-[14px] bg-[#FDFAF5] border border-[#E0CEBC] shadow-[0_2px_12px_rgba(42,26,14,0.06)] hover:shadow-[0_6px_24px_rgba(42,26,14,0.10)] transition-shadow group"
              >
                <div
                  className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0"
                  style={{ backgroundColor: p.bg, color: p.accent }}
                >
                  {p.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p
                      className="text-[13px] font-medium text-[#2A1A0E]"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      {p.name}
                    </p>
                    <ExternalLink size={10} className="text-[#B86D28] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p
                    className="text-[11px] mt-0.5 font-medium"
                    style={{ fontFamily: "var(--font-ui)", color: p.accent }}
                  >
                    {p.handle}
                  </p>
                  <p
                    className="text-[11px] text-[#6B5440] mt-1 leading-[1.5] font-light"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {p.desc}
                  </p>
                </div>
              </a>
            ))}

            {/* Email newsletter */}
            <div className="mt-2 p-5 rounded-[14px] bg-[#3A2618]">
              <p
                className="text-[9px] tracking-[0.18em] uppercase text-[#D4922A] mb-2 font-medium"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Weekly Newsletter
              </p>
              <p
                className="text-[16px] font-bold text-[#FAF5EC] mb-4 tracking-[-0.01em]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Get the{" "}
                <span style={{ color: "#D4922A" }}>schedule</span>{" "}
                in your inbox
              </p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-[#FAF5EC] placeholder-white/30 text-[12px] outline-none focus:border-[#D4922A] transition-colors font-light"
                  style={{ fontFamily: "var(--font-body)" }}
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-full bg-[#D4922A] text-[#2A1A0E] text-[10px] font-medium tracking-[0.1em] uppercase hover:bg-[#B86D28] hover:text-white transition-colors shrink-0"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Right: faux IG grid */}
          <div>
            <p
              className="text-[9px] tracking-[0.15em] uppercase text-[#6B5440] mb-4 font-medium"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              @chordandcup on Instagram
            </p>
            <div className="grid grid-cols-3 gap-2">
              {fauxPosts.map((post) => (
                <div
                  key={post.label}
                  className="aspect-square rounded-[10px] flex items-center justify-center text-[34px] relative overflow-hidden group cursor-pointer"
                  style={{ background: post.bg }}
                  title={post.label}
                >
                  <span className="transition-transform group-hover:scale-110 duration-200">
                    {post.emoji}
                  </span>
                  <div className="absolute inset-0 bg-[#3A2618]/0 group-hover:bg-[#3A2618]/20 transition-colors duration-200" />
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
              href="https://instagram.com/chordandcup"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-[11px] tracking-[0.1em] uppercase text-[#B86D28] hover:text-[#3A2618] transition-colors font-medium"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              View all on Instagram
              <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
