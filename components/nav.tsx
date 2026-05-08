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
    <header className="sticky top-0 z-50 bg-[#F5EFE3]/95 backdrop-blur-sm border-b border-[#E8D9C0] shadow-[0_2px_10px_rgba(42,31,20,0.08)]">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-8">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <span
            className="text-xl leading-none"
            style={{ fontFamily: "var(--font-display)", color: "#2D4A2D" }}
          >
            <em
              style={{
                fontStyle: "italic",
                fontWeight: 600,
                color: "#2D4A2D",
              }}
            >
              Urban Roots
            </em>{" "}
            <span
              style={{
                fontWeight: 300,
                fontStyle: "normal",
                color: "#A8845A",
              }}
            >
              Coffee
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-7 ml-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#3D6B3A] hover:text-[#2D4A2D] transition-colors"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#schedule"
          className="hidden md:inline-flex ml-auto items-center px-4 py-2 rounded-full bg-[#3D6B3A] text-white text-[10px] font-medium tracking-[0.1em] uppercase hover:bg-[#2D4A2D] transition-colors shadow-[0_4px_20px_rgba(45,74,45,0.15)]"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          Find Our Truck
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden ml-auto p-1 text-[#2D4A2D]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#E8D9C0] bg-[#F5EFE3] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[12px] font-medium tracking-[0.1em] uppercase text-[#3D6B3A]"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#schedule"
            onClick={() => setOpen(false)}
            className="self-start px-4 py-2 rounded-full bg-[#3D6B3A] text-white text-[10px] font-medium tracking-[0.1em] uppercase"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            Find Our Truck
          </a>
        </div>
      )}
    </header>
  );
}
