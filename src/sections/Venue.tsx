import { useState } from "react";
import { Navigation, MapPin, CalendarPlus, Church, Utensils, Home } from "lucide-react";
import Reveal from "../components/Reveal";
import {
  wedding,
  googleCalendarUrl,
  downloadICS,
  mapsDirectionsUrl,
} from "../config";

interface VenueItem {
  id: string;
  title: string;
  name: string;
  address: string;
  purpose: string;
  mapsQuery: string;
  icon: typeof Utensils;
}

const VENUES: VenueItem[] = [
  {
    id: "euphoria",
    title: "Reception & Dining Venue",
    name: "Grand Euphoria",
    address: "Haridwar Bypass Road, Near Kargi Chowk / Near ISBT, Dehradun",
    purpose: "Dinner (14th Nov, 7:30 PM) & Wedding Lunch (15th Nov, 1:00 PM)",
    mapsQuery: "Grand Euphoria Haridwar Bypass Road Dehradun",
    icon: Utensils,
  },
  {
    id: "gurudwara",
    title: "Sacred Wedding Ceremony",
    name: "Gurudwara Sahib",
    address: "Gobind Nagar, Race Course, Dehradun",
    purpose: "Anand Karaj (15th Nov, 12:00 Noon) · Reassembly near PNB",
    mapsQuery: "Gurudwara Sahib Gobind Nagar Race Course Dehradun",
    icon: Church,
  },
  {
    id: "home",
    title: "Ratra Residence",
    name: "71, Guru Road",
    address: "71, Guru Road, Dehradun, Uttarakhand",
    purpose: "Sehrabandi (8:00 AM) & Departure of Barat (10:00 AM)",
    mapsQuery: "71 Guru Road Dehradun Uttarakhand",
    icon: Home,
  },
];

export default function Venue() {
  const [selectedVenue, setSelectedVenue] = useState<VenueItem>(VENUES[0]);

  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    selectedVenue.mapsQuery
  )}&output=embed`;

  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f2c4d0]/20 to-transparent" />

      <Reveal className="mb-12 flex flex-col items-center gap-3 text-center">
        <span className="text-[11px] uppercase tracking-[0.4em] text-[#f2c4d0]/70">
          Locations & Travel
        </span>
        <h2 className="font-script text-5xl text-[#faf3eb] sm:text-6xl">The Venues</h2>
        <p className="max-w-md font-display text-sm tracking-wide text-[#e8dcc8]/75">
          Guiding your way to our celebrations across Dehradun.
        </p>
        <div className="mt-2 h-px w-24 bg-gradient-to-r from-transparent via-[#c9a86a]/50 to-transparent" />
      </Reveal>

      <div className="mx-auto flex max-w-2xl flex-col gap-6">
        {/* Venue Selectors */}
        <Reveal className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {VENUES.map((v) => {
            const Icon = v.icon;
            const isSelected = selectedVenue.id === v.id;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => setSelectedVenue(v)}
                className={`flex flex-col items-center sm:items-start rounded-2xl p-4 text-left transition-all ${
                  isSelected
                    ? "border border-[#f2c4d0]/40 bg-[#c45a7a]/20 shadow-lg ring-1 ring-[#f2c4d0]/25"
                    : "border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] text-[#e8dcc8]/70"
                }`}
              >
                <div className={`mb-2 flex h-8 w-8 items-center justify-center rounded-full ${isSelected ? "bg-[#c45a7a] text-[#faf3eb]" : "bg-white/10 text-[#e8dcc8]"}`}>
                  <Icon size={15} />
                </div>
                <span className="font-display text-base font-semibold text-[#faf3eb]">
                  {v.name}
                </span>
                <span className="mt-0.5 text-[10px] uppercase tracking-wider text-[#c9a86a]">
                  {v.title}
                </span>
              </button>
            );
          })}
        </Reveal>

        {/* Selected Venue Details Card */}
        <Reveal className="flex flex-col items-center gap-2 rounded-2xl border border-[#f2c4d0]/20 bg-white/[0.03] p-5 text-center backdrop-blur-md">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#faf3eb]">
            {selectedVenue.name}
          </h3>
          <p className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#e8dcc8]/85">
            <MapPin size={15} className="text-[#c45a7a] shrink-0" />
            {selectedVenue.address}
          </p>
          <span className="mt-1 rounded-full border border-[#c9a86a]/30 bg-[#c9a86a]/10 px-3 py-1 text-[11px] text-[#c9a86a]">
            {selectedVenue.purpose}
          </span>
        </Reveal>

        {/* Google Maps Embed */}
        <Reveal
          delay={0.08}
          className="overflow-hidden rounded-[2rem] border border-[#f2c4d0]/20 shadow-[0_24px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/10"
        >
          <iframe
            title={`Map of ${selectedVenue.name}`}
            src={embedUrl}
            className="h-72 w-full saturate-[0.85] contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>

        {/* Directions & Calendar CTAs */}
        <Reveal delay={0.12} className="flex flex-col gap-3">
          <a
            href={mapsDirectionsUrl(selectedVenue.mapsQuery)}
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#c45a7a] px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-[#faf3eb] shadow-[0_14px_36px_rgba(196,90,122,0.4)] transition-transform duration-300 ease-out active:scale-[0.98] hover:bg-[#a23d5d]"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent"
              style={{ animation: "sweep 3.6s ease-in-out infinite" }}
            />
            <Navigation size={15} />
            Navigate to {selectedVenue.name}
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0.5">
              ↗
            </span>
          </a>

          <div className="grid grid-cols-2 gap-3">
            <a
              href={googleCalendarUrl({
                title: `${wedding.groom} weds ${wedding.bride} — ${selectedVenue.name}`,
                dateISO: wedding.dateISO,
                venue: selectedVenue.address,
              })}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-[#f2c4d0]/20 bg-white/[0.04] px-4 py-3.5 text-[10px] uppercase tracking-[0.2em] text-[#faf3eb] transition-colors duration-300 hover:border-[#f2c4d0]/40 hover:bg-white/[0.08]"
            >
              <CalendarPlus size={14} /> Google Calendar
            </a>
            <button
              type="button"
              onClick={downloadICS}
              className="flex items-center justify-center gap-2 rounded-full border border-[#f2c4d0]/20 bg-white/[0.04] px-4 py-3.5 text-[10px] uppercase tracking-[0.2em] text-[#faf3eb] transition-colors duration-300 hover:border-[#f2c4d0]/40 hover:bg-white/[0.08]"
            >
              <CalendarPlus size={14} /> Apple / ICS
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
