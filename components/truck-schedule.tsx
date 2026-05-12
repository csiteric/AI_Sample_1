import { MapPin, Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { StaffDivider } from "@/components/staff-divider";

type Event = {
  day: string;
  date: string;
  name: string;
  neighborhood: string;
  address: string;
  hours: string;
  recurring: boolean;
  highlight?: boolean;
};

const schedule: Event[] = [
  {
    day: "Saturday",
    date: "Weekly",
    name: "Capitol Hill Farmers Market",
    neighborhood: "Capitol Hill",
    address: "Broadway & Pike St",
    hours: "8:00 am – 2:00 pm",
    recurring: true,
    highlight: true,
  },
  {
    day: "Sunday",
    date: "Weekly",
    name: "Ballard Farmers Market",
    neighborhood: "Ballard",
    address: "Ballard Ave NW",
    hours: "10:00 am – 3:00 pm",
    recurring: true,
  },
  {
    day: "Sunday",
    date: "Weekly",
    name: "Fremont Sunday Market",
    neighborhood: "Fremont",
    address: "3401 Evanston Ave N",
    hours: "10:00 am – 4:00 pm",
    recurring: true,
  },
  {
    day: "Wednesday",
    date: "Weekly",
    name: "Columbia City Farmers Market",
    neighborhood: "Columbia City",
    address: "4801 Rainier Ave S",
    hours: "3:00 pm – 7:00 pm",
    recurring: true,
  },
  {
    day: "Friday",
    date: "Weekly",
    name: "South Lake Union Pop-Up",
    neighborhood: "South Lake Union",
    address: "Terry Ave N & Thomas St",
    hours: "7:00 am – 2:00 pm",
    recurring: true,
  },
  {
    day: "Saturday",
    date: "Weekly",
    name: "West Seattle Farmers Market",
    neighborhood: "West Seattle",
    address: "California Ave SW & Alaska St",
    hours: "10:00 am – 2:00 pm",
    recurring: true,
  },
];

const neighborhoodColor: Record<string, { bg: string; text: string }> = {
  "Capitol Hill":    { bg: "rgba(58,38,24,0.08)",  text: "#5C3A22" },
  Ballard:           { bg: "rgba(184,109,40,0.12)", text: "#B86D28" },
  Fremont:           { bg: "rgba(58,38,24,0.08)",  text: "#5C3A22" },
  "Columbia City":   { bg: "rgba(107,84,64,0.10)", text: "#6B5440" },
  "South Lake Union":{ bg: "rgba(184,109,40,0.12)", text: "#B86D28" },
  "West Seattle":    { bg: "rgba(46,84,56,0.10)",  text: "#2E5438" },
};

export function TruckSchedule() {
  return (
    <section
      id="schedule"
      className="bg-[#E6D8C0] py-20 px-6"
      aria-labelledby="schedule-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-3">
          <p
            className="text-[9px] tracking-[0.22em] uppercase text-[#B86D28] mb-3 border-b border-[#E0CEBC] pb-2 inline-block font-medium"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            Weekly Locations
          </p>
          <h2
            id="schedule-heading"
            className="text-[clamp(30px,4vw,46px)] font-bold text-[#2A1A0E] leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Find Our{" "}
            <span style={{ color: "#B86D28" }}>Truck</span>
          </h2>
          <p
            className="mt-2 text-[15px] font-light text-[#6B5440]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            We're out in the neighborhood — come say hi
          </p>
        </div>

        <StaffDivider />

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {schedule.map((ev) => {
            const colors = neighborhoodColor[ev.neighborhood] ?? {
              bg: "rgba(58,38,24,0.08)",
              text: "#5C3A22",
            };
            return (
              <div
                key={ev.name}
                className={`rounded-[14px] bg-[#FDFAF5] border p-5 flex flex-col gap-3 shadow-[0_4px_18px_rgba(42,26,14,0.08)] transition-shadow hover:shadow-[0_10px_32px_rgba(42,26,14,0.13)] ${
                  ev.highlight
                    ? "border-[#B86D28] ring-1 ring-[#B86D28]/20"
                    : "border-[#E0CEBC]"
                }`}
              >
                {/* Day + badge row */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p
                      className="text-[12px] font-medium text-[#2A1A0E] leading-none"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      {ev.day}
                    </p>
                    {ev.recurring && (
                      <p
                        className="text-[10px] text-[#B86D28] mt-0.5"
                        style={{ fontFamily: "var(--font-ui)" }}
                      >
                        Every week
                      </p>
                    )}
                  </div>
                  <Badge
                    className="rounded-full px-2.5 py-1 text-[8px] tracking-[0.08em] uppercase font-medium border-none shrink-0"
                    style={{
                      backgroundColor: colors.bg,
                      color: colors.text,
                      fontFamily: "var(--font-ui)",
                    }}
                  >
                    {ev.neighborhood}
                  </Badge>
                </div>

                {/* Event name */}
                <h3
                  className="text-[16px] font-semibold text-[#2A1A0E] leading-[1.2] tracking-[-0.01em]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {ev.name}
                </h3>

                {/* Details */}
                <div className="flex flex-col gap-1.5 mt-auto">
                  <div className="flex items-center gap-2 text-[#6B5440]">
                    <MapPin size={11} strokeWidth={1.5} />
                    <span className="text-[11px]" style={{ fontFamily: "var(--font-ui)" }}>
                      {ev.address}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[#6B5440]">
                    <Clock size={11} strokeWidth={1.5} />
                    <span className="text-[11px]" style={{ fontFamily: "var(--font-ui)" }}>
                      {ev.hours}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[#6B5440]">
                    <Calendar size={11} strokeWidth={1.5} />
                    <span className="text-[11px]" style={{ fontFamily: "var(--font-ui)" }}>
                      {ev.date}
                    </span>
                  </div>
                </div>

                {ev.highlight && (
                  <div
                    className="text-[9px] tracking-[0.12em] uppercase text-[#B86D28] font-medium mt-1"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    ★ This week's featured stop
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA bar */}
        <div className="mt-10 rounded-[14px] bg-[#3A2618] text-[#FAF5EC] px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p
              className="text-[9px] tracking-[0.2em] uppercase text-[#D4922A] mb-1 font-medium"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Special Events
            </p>
            <p
              className="text-[17px] font-bold tracking-[-0.01em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Catering &amp;{" "}
              <span style={{ color: "#D4922A" }}>Private Events</span>
            </p>
            <p
              className="text-[12px] text-[#C4A880] mt-1 font-light"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Festivals, weddings, corporate pop-ups — we bring the good stuff to you.
            </p>
          </div>
          <a
            href="#social"
            className="shrink-0 px-5 py-2.5 rounded-full bg-[#D4922A] text-[#2A1A0E] text-[10px] font-medium tracking-[0.1em] uppercase hover:bg-[#B86D28] hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
