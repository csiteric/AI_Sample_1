export function StaffDivider() {
  return (
    <div className="relative w-full h-7 my-1" aria-hidden>
      {/* Five staff lines */}
      <div
        className="absolute inset-0"
        style={{
          background: `repeating-linear-gradient(
            to bottom,
            transparent 0px,
            transparent 5px,
            rgba(92,58,34,0.32) 5px,
            rgba(92,58,34,0.32) 6px
          )`,
        }}
      />
      {/* Treble clef */}
      <span
        className="absolute left-1 top-1/2 -translate-y-1/2 text-[32px] leading-none select-none"
        style={{ color: "#B86D28", opacity: 0.6, lineHeight: 1 }}
      >
        𝄞
      </span>
    </div>
  );
}
