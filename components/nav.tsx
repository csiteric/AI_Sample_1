"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Find Us", href: "#schedule" },
  { label: "Reviews", href: "#reviews" },
  { label: "Social", href: "#social" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FDFAF5]/95 backdrop-blur-sm border-b border-[#E0CEBC] shadow-[0_2px_10px_rgba(42,26,14,0.07)]">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-8">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <span
            className="text-[18px] font-bold leading-none tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-display)", color: "#2A1A0E" }}
          >
            Chord{" "}
            <span style={{ color: "#B86D28" }}>&amp;</span>{" "}
            Cup
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-7 ml-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#6B5440] hover:text-[#B86D28] transition-colors"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#schedule"
          className="hidden md:inline-flex ml-auto items-center px-5 py-2 rounded-full bg-[#3A2618] text-[#FAF5EC] text-[10px] font-medium tracking-[0.1em] uppercase hover:bg-[#4A3020] transition-colors shadow-[0_2px_10px_rgba(58,38,24,0.18)]"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          Find Our Truck
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden ml-auto p-1 text-[#3A2618]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#E0CEBC] bg-[#FDFAF5] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#6B5440]"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#schedule"
            onClick={() => setOpen(false)}
            className="self-start px-5 py-2 rounded-full bg-[#3A2618] text-[#FAF5EC] text-[10px] font-medium tracking-[0.1em] uppercase"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            Find Our Truck
          </a>
        </div>
      )}
    </header>
  );
}
