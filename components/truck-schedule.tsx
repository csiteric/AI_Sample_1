import { MapPin, Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
  "Capitol Hill":   { bg: "#D4E8CB", text: "#3D6B3A" },
  Ballard:          { bg: "#F5EDE0", text: "#A8845A" },
  Fremont:          { bg: "#D4E8CB", text: "#3D6B3A" },
  "Columbia City":  { bg: "#E8E4DC", text: "#5A6B52" },
  "South Lake Union":{ bg: "#F5EDE0", text: "#A8845A" },
  "West Seattle":   { bg: "#D4E8CB", text: "#3D6B3A" },
};

export function TruckSchedule() {
  return (
    <section
      id="schedule"
      className="bg-[#E8E4DC] py-20 px-6"
      aria-labelledby="schedule-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-[9px] tracking-[0.22em] uppercase text-[#A8845A] mb-3 border-b border-[#E8D9C0] pb-2 inline-block"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            Weekly Locations
          </p>
          <h2
            id="schedule-heading"
            className="text-[clamp(32px,4vw,48px)] font-light text-[#2D4A2D] leading-[1.1]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Find Our{" "}
            <em style={{ fontStyle: "italic", fontWeight: 600, color: "#A8845A" }}>
              Truck
            </em>
          </h2>
          <p
            className="mt-2 text-[17px] italic font-light text-[#5A8A50]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            We're out in the neighborhood — come say hi
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {schedule.map((ev) => {
            const colors = neighborhoodColor[ev.neighborhood] ?? {
              bg: "#D4E8CB",
              text: "#3D6B3A",
            };
            return (
              <div
                key={ev.name}
                className={`rounded-[18px] bg-white border p-5 flex flex-col gap-3 shadow-[0_6px_24px_rgba(42,31,20,0.10)] transition-shadow hover:shadow-[0_12px_40px_rgba(42,31,20,0.15)] ${
                  ev.highlight
                    ? "border-[#3D6B3A] ring-1 ring-[#3D6B3A]/20"
                    : "border-[#E8D9C0]"
                }`}
              >
                {/* Day + badge row */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p
                      className="text-[13px] font-medium text-[#2D4A2D] leading-none"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      {ev.day}
                    </p>
                    {ev.recurring && (
                      <p
                        className="text-[10px] text-[#8DB87A] mt-0.5"
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
                  className="text-[18px] font-semibold text-[#2D4A2D] leading-[1.2]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {ev.name}
                </h3>

                {/* Details */}
                <div className="flex flex-col gap-1.5 mt-auto">
                  <div className="flex items-center gap-2 text-[#5A6B52]">
                    <MapPin size={12} strokeWidth={1.5} />
                    <span
                      className="text-[11px]"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      {ev.address}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[#5A6B52]">
                    <Clock size={12} strokeWidth={1.5} />
                    <span
                      className="text-[11px]"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      {ev.hours}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[#5A6B52]">
                    <Calendar size={12} strokeWidth={1.5} />
                    <span
                      className="text-[11px]"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      {ev.date}
                    </span>
                  </div>
                </div>

                {ev.highlight && (
                  <div
                    className="text-[9px] tracking-[0.12em] uppercase text-[#3D6B3A] font-medium mt-1"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    ★ This week's featured stop
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="mt-10 rounded-[14px] bg-[#2D4A2D] text-white px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p
              className="text-[10px] tracking-[0.2em] uppercase text-[#8DB87A] mb-1"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Special Events
            </p>
            <p
              className="text-[18px] font-light"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Catering &amp;{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 600,
                  color: "#C9A87A",
                }}
              >
                Private Events
              </em>
            </p>
            <p
              className="text-[12px] text-[#8DB87A] mt-1"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Festivals, weddings, corporate pop-ups — we bring the jungle to you.
            </p>
          </div>
          <a
            href="#social"
            className="shrink-0 px-5 py-2.5 rounded-full bg-[#C9A87A] text-[#2D4A2D] text-[11px] font-medium tracking-[0.1em] uppercase hover:bg-[#D4A84B] transition-colors"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
