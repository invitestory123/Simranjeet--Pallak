import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Sparkles, Navigation } from "lucide-react";
import Reveal from "../components/Reveal";
import { wedding, googleCalendarUrl } from "../config";

function useCountdown(iso: string) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, new Date(iso).getTime() - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  return { days, hours, mins, secs };
}

export default function Events() {
  const c = useCountdown(wedding.dateISO);
  const [activeTab, setActiveTab] = useState<"all" | "dinner" | "wedding">("all");

  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32">
      {/* Decorative background light */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-[#c45a7a]/10 blur-[100px]" />
      <div className="pointer-events-none absolute left-0 bottom-1/4 h-96 w-96 rounded-full bg-[#c9a86a]/10 blur-[100px]" />

      <Reveal className="mb-12 flex flex-col items-center gap-3 text-center">
        <span className="text-[11px] uppercase tracking-[0.4em] text-[#f2c4d0]/80">
          Celebrations & Timelines
        </span>
        <h2 className="font-script text-5xl text-[#faf3eb] sm:text-6xl">The Itinerary</h2>
        <p className="max-w-md font-display text-sm tracking-wide text-[#e8dcc8]/75">
          Join us as two grand days of love, heritage, and joy unfold in the valley of Dehradun.
        </p>
        <div className="mt-2 h-px w-24 bg-gradient-to-r from-transparent via-[#c9a86a]/50 to-transparent" />
      </Reveal>

      {/* Countdown Timer */}
      {wedding.sections?.countdown !== false && (
        <Reveal className="mx-auto mb-16 max-w-sm">
          <div className="text-center mb-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9a86a]">
              Counting Down To The Sacred Vows
            </span>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[
              ["Days", c.days],
              ["Hrs", c.hours],
              ["Min", c.mins],
              ["Sec", c.secs],
            ].map(([label, value]) => (
              <div
                key={label as string}
                className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] px-2 py-3.5 backdrop-blur-md shadow-lg"
              >
                <span className="font-display text-3xl font-semibold text-[#faf3eb]">
                  {String(value).padStart(2, "0")}
                </span>
                <span className="mt-1 text-[9px] uppercase tracking-[0.25em] text-[#f2c4d0]/75">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      )}

      {/* Filter Tabs */}
      <Reveal className="mx-auto mb-12 flex max-w-xs justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-md">
        <button
          type="button"
          onClick={() => setActiveTab("all")}
          className={`flex-1 rounded-full py-2 text-[10px] font-medium uppercase tracking-[0.2em] transition-all ${
            activeTab === "all"
              ? "bg-[#c45a7a] text-[#faf3eb] shadow-md"
              : "text-[#e8dcc8]/70 hover:text-[#faf3eb]"
          }`}
        >
          Both Days
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("dinner")}
          className={`flex-1 rounded-full py-2 text-[10px] font-medium uppercase tracking-[0.2em] transition-all ${
            activeTab === "dinner"
              ? "bg-[#c45a7a] text-[#faf3eb] shadow-md"
              : "text-[#e8dcc8]/70 hover:text-[#faf3eb]"
          }`}
        >
          14 Nov · Dinner
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("wedding")}
          className={`flex-1 rounded-full py-2 text-[10px] font-medium uppercase tracking-[0.2em] transition-all ${
            activeTab === "wedding"
              ? "bg-[#c45a7a] text-[#faf3eb] shadow-md"
              : "text-[#e8dcc8]/70 hover:text-[#faf3eb]"
          }`}
        >
          15 Nov · Anand Karaj
        </button>
      </Reveal>

      {/* Events List */}
      <div className="mx-auto flex max-w-2xl flex-col gap-10">
        {/* EVENT 1: DINNER (14 NOV) */}
        {(activeTab === "all" || activeTab === "dinner") && (
          <Reveal className="relative overflow-hidden rounded-[2.5rem] border border-[#f2c4d0]/20 bg-gradient-to-b from-[#351e3c]/85 via-[#291730]/90 to-[#1e1024]/95 p-6 sm:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.45)] ring-1 ring-white/5">
            {/* Day Badge */}
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#f2c4d0]/15 pb-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#c9a86a]/30 bg-[#c9a86a]/10 px-3.5 py-1 text-[11px] uppercase tracking-[0.25em] text-[#c9a86a]">
                <Calendar size={13} />
                <span>Saturday, 14th November 2026</span>
              </div>
              <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-[#f2c4d0]">
                <Clock size={13} />
                <span>7:30 PM Onwards</span>
              </div>
            </div>

            {/* Event Name */}
            <h3 className="font-script text-4xl sm:text-5xl text-[#faf3eb]">
              Wedding Eve Dinner
            </h3>
            
            <p className="mt-3 font-display text-base leading-relaxed text-[#e8dcc8]/90">
              On the occasion of the Marriage of their grandson{" "}
              <strong className="text-[#faf3eb]">Simranjeet Singh</strong>
              <br />
              <span className="text-xs text-[#e8dcc8]/70">
                (S/o Sdn. Mandeep Kaur & S. Brijinder Singh Ratra · Grand S/o Late Sdn. & S. Jaswant Singh Ratra)
              </span>
            </p>

            <p className="mt-2 text-sm italic text-[#f2c4d0]/90">
              Ratra Family warmly invites you for a memorable evening of celebration & dinner.
            </p>

            {/* Venue Details */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 shrink-0 text-[#c45a7a]" size={18} />
                <div>
                  <h4 className="font-display text-lg font-semibold text-[#faf3eb]">
                    Grand Euphoria
                  </h4>
                  <p className="text-xs text-[#e8dcc8]/80">
                    Haridwar Bypass Road, Near-Kargi Chowk, Dehradun
                  </p>
                </div>
              </div>
            </div>

            {/* Compliments & Cute invitation tag */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#f2c4d0]/15 pt-4 text-xs">
              <span className="text-[#e8dcc8]/70">
                With Best Compliments: <strong className="text-[#faf3eb]">Ratra's Relatives & Friends</strong>
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-[#f2c4d0]/25 bg-white/[0.03] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#f2c4d0]">
                <Sparkles size={11} /> Cute Invite: Rajbir Kohli
              </span>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("Grand Euphoria Haridwar Bypass Road Near Kargi Chowk Dehradun")}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-[#c45a7a] px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[#faf3eb] shadow-md hover:bg-[#a23d5d] transition-colors"
              >
                <Navigation size={13} /> Get Directions
              </a>
              <a
                href={googleCalendarUrl({
                  title: "Simranjeet & Pallak — Wedding Eve Dinner",
                  dateISO: "2026-11-14T19:30:00+05:30",
                  venue: "Grand Euphoria, Haridwar Bypass Road, Near Kargi Chowk, Dehradun",
                })}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-[#f2c4d0]/30 bg-white/[0.05] px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] text-[#faf3eb] hover:bg-white/10 transition-colors"
              >
                <Calendar size={13} /> Add to Calendar
              </a>
            </div>
          </Reveal>
        )}

        {/* EVENT 2: WEDDING DAY (15 NOV) */}
        {(activeTab === "all" || activeTab === "wedding") && (
          <Reveal className="relative overflow-hidden rounded-[2.5rem] border border-[#f2c4d0]/25 bg-gradient-to-b from-[#3a2042]/90 via-[#2c1733]/90 to-[#1e1024]/95 p-6 sm:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.5)] ring-1 ring-white/10">
            {/* Day Badge */}
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#f2c4d0]/15 pb-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#c9a86a]/30 bg-[#c9a86a]/15 px-3.5 py-1 text-[11px] uppercase tracking-[0.25em] text-[#c9a86a]">
                <Calendar size={13} />
                <span>Sunday, 15th November 2026</span>
              </div>
              <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-[#f2c4d0]">
                <Clock size={13} />
                <span>Ceremony Day</span>
              </div>
            </div>

            {/* Event Name */}
            <h3 className="font-script text-4xl sm:text-5xl text-[#faf3eb]">
              The Wedding Ceremony & Anand Karaj
            </h3>

            <p className="mt-2 font-display text-base text-[#e8dcc8]/90">
              Bless the sacred union of <strong className="text-[#faf3eb]">Simranjeet Singh</strong> &{" "}
              <strong className="text-[#faf3eb]">Pallak</strong>
            </p>

            {/* Timeline Steps (As per programme) */}
            <div className="mt-8">
              <p className="mb-5 text-center text-[11px] uppercase tracking-[0.35em] text-[#c9a86a]">
                Wedding Day Programme
              </p>
              
              <div className="relative pl-6">
                {/* Timeline vertical connector */}
                <div className="absolute bottom-3 left-[9px] top-3 w-px bg-gradient-to-b from-[#c45a7a] via-[#c9a86a]/60 to-transparent" />

                <div className="flex flex-col gap-6">
                  {wedding.events[1].program?.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.55 }}
                      className="relative flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4"
                    >
                      {/* Node Bullet */}
                      <span className="absolute -left-[20px] top-1.5 h-3 w-3 rounded-full border-2 border-[#1a0f1f] bg-[#c45a7a] ring-2 ring-[#f2c4d0]/40" />

                      <div>
                        <p className="font-display text-lg font-semibold text-[#faf3eb]">
                          {item.name}
                        </p>
                        {item.note && (
                          <p className="text-xs text-[#e8dcc8]/75">{item.note}</p>
                        )}
                      </div>

                      <span className="shrink-0 font-display text-sm font-semibold tracking-wider text-[#c9a86a]">
                        {item.time}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="mt-8 rounded-2xl border border-[#c9a86a]/20 bg-[#c9a86a]/05 p-4 text-xs text-[#e8dcc8]/85">
              <p className="flex items-center gap-1.5 font-medium text-[#c9a86a]">
                <span>📍</span> Barat Assembly Note:
              </p>
              <p className="mt-1 leading-relaxed">
                Barat will reassemble near <strong>PNB Race Course</strong>, and will proceed to Gurudwara Sahib, Gobind Nagar, Race Course for the sacred Anand Karaj.
              </p>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={wedding.familyMapsUrl || "https://maps.app.goo.gl/P6GvRcxQmBP2NZ2a6"}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-[#f2c4d0]/30 bg-white/[0.05] px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] text-[#faf3eb] hover:bg-white/10 transition-colors"
              >
                <Navigation size={13} /> Home (Barat)
              </a>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("Gurudwara Sahib Gobind Nagar Race Course Dehradun")}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-[#c45a7a] px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[#faf3eb] shadow-md hover:bg-[#a23d5d] transition-colors"
              >
                <Navigation size={13} /> Gurudwara Sahib
              </a>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("Grand Euphoria Haridwar Bypass Road Near ISBT Dehradun")}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-[#f2c4d0]/30 bg-white/[0.05] px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] text-[#faf3eb] hover:bg-white/10 transition-colors"
              >
                <Navigation size={13} /> Lunch Venue
              </a>
              <a
                href={googleCalendarUrl({
                  title: "Simranjeet & Pallak Wedding — Anand Karaj",
                  dateISO: "2026-11-15T12:00:00+05:30",
                  venue: "Gurudwara Sahib, Gobind Nagar & Grand Euphoria, Dehradun",
                })}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-[#f2c4d0]/30 bg-white/[0.05] px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] text-[#faf3eb] hover:bg-white/10 transition-colors"
              >
                <Calendar size={13} /> Add to Calendar
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
