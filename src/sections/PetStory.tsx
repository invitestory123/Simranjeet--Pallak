import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import Reveal from "../components/Reveal";
import { wedding } from "../config";

export default function PetStory() {
  const { petStory } = wedding;

  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-28">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c45a7a]/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f2c4d0]/20 to-transparent" />

      <div className="relative mx-auto max-w-2xl">
        {/* Section Header */}
        <Reveal className="mb-12 flex flex-col items-center gap-3 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f2c4d0]/25 bg-white/[0.04] px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] text-[#f2c4d0]/90">
            <span>🐾</span>
            <span>A Special Note From Bruno & Rambo</span>
            <span>🐾</span>
          </div>
          <h2 className="font-script text-4xl text-[#faf3eb] sm:text-6xl">
            A Conversation Between Two Brothers
          </h2>
          <p className="max-w-md font-display text-sm tracking-wide text-[#e8dcc8]/75">
            Because a family's love is felt in every wag, every paw, and every shared moment.
          </p>
          <div className="mt-2 h-px w-24 bg-gradient-to-r from-transparent via-[#c9a86a]/50 to-transparent" />
        </Reveal>

        {/* Dialogue Card Container */}
        <Reveal className="relative overflow-hidden rounded-[2.5rem] border border-[#f2c4d0]/20 bg-gradient-to-b from-[#2a1733]/90 via-[#23122b]/95 to-[#1a0f1f]/95 p-6 sm:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.55)] backdrop-blur-xl">
          {/* Decorative Corner Ornaments */}
          <div className="pointer-events-none absolute left-4 top-4 text-xs text-[#c9a86a]/40">❦</div>
          <div className="pointer-events-none absolute right-4 top-4 text-xs text-[#c9a86a]/40">❦</div>

          {/* Dialogue exchange */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {petStory.dialogue.map((turn, i) => {
              const isBruno = turn.speaker === "Bruno";
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: i * 0.08, duration: 0.55 }}
                  className={`flex flex-col ${isBruno ? "items-start" : "items-end"}`}
                >
                  {/* Speaker Label */}
                  <div
                    className={`mb-1 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] ${
                      isBruno ? "text-[#f2c4d0]/80 pl-2" : "text-[#c9a86a]/90 pr-2"
                    }`}
                  >
                    <span>{isBruno ? "🐕 Bruno" : "🦮 Rambo"}</span>
                  </div>

                  {/* Bubble */}
                  <div
                    className={`relative max-w-[88%] sm:max-w-[80%] rounded-2xl px-5 py-3.5 shadow-md ${
                      isBruno
                        ? "rounded-tl-sm border border-[#f2c4d0]/20 bg-white/[0.05] text-[#faf3eb]"
                        : "rounded-tr-sm border border-[#c9a86a]/25 bg-[#c45a7a]/20 text-[#faf3eb]"
                    }`}
                  >
                    <p className="font-display text-[15px] sm:text-[17px] leading-relaxed tracking-wide">
                      "{turn.text}"
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Emotional Heartfelt Closing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-10 rounded-2xl border border-[#c9a86a]/30 bg-gradient-to-r from-[#c45a7a]/20 via-[#c9a86a]/15 to-[#c45a7a]/20 p-6 text-center"
          >
            <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#f2c4d0]/10 text-[#f2c4d0]">
              <Heart size={16} className="fill-[#c45a7a] text-[#c45a7a]" />
            </div>
            <p className="font-display text-lg italic leading-relaxed text-[#faf3eb] sm:text-xl">
              "{petStory.closing}"
            </p>
            <div className="mt-3 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#e8dcc8]/75">
              <Sparkles size={12} className="text-[#c9a86a]" />
              <span>With unconditioned love from Bruno & Rambo</span>
              <Sparkles size={12} className="text-[#c9a86a]" />
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
