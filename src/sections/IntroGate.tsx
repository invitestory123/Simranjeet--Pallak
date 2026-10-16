import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";
import { wedding } from "../config";

const ease: [number, number, number, number] = [0.65, 0, 0.35, 1];

export default function IntroGate({
  onOpening,
  onOpened,
}: {
  onOpening: () => void;
  onOpened: () => void;
}) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    onOpening();
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55 }}
    >
      {/* Left Curtain Veil */}
      <motion.div
        className="absolute inset-y-0 left-0 w-1/2 overflow-hidden bg-[#1a0f1f]"
        animate={opening ? { x: "-105%" } : { x: 0 }}
        transition={{ duration: 1.55, delay: 0.25, ease }}
      >
        <img
          src="/assets/layers/intro-veil.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-right opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0f1f] via-[#1a0f1f]/60 to-transparent" />
      </motion.div>

      {/* Right Curtain Veil */}
      <motion.div
        className="absolute inset-y-0 right-0 w-1/2 overflow-hidden bg-[#1a0f1f]"
        animate={opening ? { x: "105%" } : { x: 0 }}
        transition={{ duration: 1.55, delay: 0.25, ease }}
        onAnimationComplete={() => opening && onOpened()}
      >
        <img
          src="/assets/layers/intro-veil.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-left opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#1a0f1f] via-[#1a0f1f]/60 to-transparent" />
      </motion.div>

      {/* Central Light Beam on open */}
      <motion.div
        className="pointer-events-none absolute inset-y-0 left-1/2 w-16 -translate-x-1/2"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(242,196,208,0.85), transparent)",
          filter: "blur(14px)",
        }}
        initial={{ opacity: 0, scaleX: 0.1 }}
        animate={opening ? { opacity: [0, 1, 0.85], scaleX: [0.1, 1, 2.4] } : {}}
        transition={{ duration: 1.55, delay: 0.25, ease }}
      />

      {/* Invitation Card Presentation */}
      <motion.div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 sm:p-6"
        animate={
          opening
            ? { opacity: 0, y: -28, scale: 0.96 }
            : { opacity: 1, y: 0 }
        }
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.9 }}
          className="relative flex w-full max-w-md flex-col items-center text-center"
        >
          {/* Butter Paper / Vellum Envelope Card */}
          <div className="relative w-full overflow-hidden rounded-3xl border border-[#f2c4d0]/30 bg-gradient-to-b from-[#2e1a35]/85 via-[#23122c]/90 to-[#1c0d22]/95 p-6 sm:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.65)] backdrop-blur-xl ring-1 ring-white/10">
            {/* Subtle frosted butter paper texture effect */}
            <div className="pointer-events-none absolute inset-2 rounded-2xl border border-[#c9a86a]/25" />
            
            {/* Corner floral glyphs */}
            <div className="pointer-events-none absolute left-4 top-4 text-xs text-[#c9a86a]/60">❖</div>
            <div className="pointer-events-none absolute right-4 top-4 text-xs text-[#c9a86a]/60">❖</div>
            <div className="pointer-events-none absolute bottom-4 left-4 text-xs text-[#c9a86a]/60">❖</div>
            <div className="pointer-events-none absolute bottom-4 right-4 text-xs text-[#c9a86a]/60">❖</div>

            {/* Ek Onkar */}
            <div className="flex flex-col items-center gap-1">
              <span className="font-display text-base tracking-[0.35em] text-[#f2c4d0]">
                {wedding.verse.gurmukhi}
              </span>
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#c9a86a]">
                Wedding Invitation
              </span>
            </div>

            {/* Couple Illustration Miniature */}
            <motion.div
              className="relative my-3 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.9 }}
            >
              <div
                className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
                style={{
                  background: "rgba(196,90,122,0.3)",
                }}
              />
              <img
                src="/assets/layers/03-couple.png"
                alt={`${wedding.groom} & ${wedding.bride}`}
                className="relative h-28 w-auto object-contain sm:h-36 drop-shadow-lg"
                style={{ animation: "float-soft 4.5s ease-in-out infinite" }}
              />
            </motion.div>

            {/* Butter Paper Inscription */}
            <div className="relative my-2 rounded-xl border border-[#f2c4d0]/20 bg-white/[0.04] px-4 py-3">
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#e8dcc8]/60">
                To Our Dear Family & Friends
              </p>
              <h1 className="mt-1 font-script text-3xl sm:text-4xl leading-tight text-[#faf3eb]">
                {wedding.groom} <span className="text-[#f2c4d0]">&</span> {wedding.bride}
              </h1>
              <p className="mt-0.5 font-display text-xs italic tracking-wider text-[#f2c4d0]">
                weds
              </p>
            </div>

            <p className="mt-3 text-[11px] uppercase tracking-[0.28em] text-[#e8dcc8]/80">
              {wedding.dateLabel}
            </p>
            <p className="mt-0.5 text-[10px] uppercase tracking-[0.25em] text-[#c9a86a]">
              Dehradun, Uttarakhand
            </p>

            <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-[#e8dcc8]/60">
              A Cordial Invitation From
            </p>
            <p className="font-display text-sm tracking-widest text-[#faf3eb]">
              {wedding.familyHost}
            </p>

            {/* Open Invitation Action */}
            <motion.button
              type="button"
              onClick={handleOpen}
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.02 }}
              className="group relative mt-6 w-full overflow-hidden rounded-full border border-[#f2c4d0]/50 bg-gradient-to-r from-[#c45a7a] to-[#a23d5d] py-3.5 text-[11px] font-medium uppercase tracking-[0.35em] text-[#faf3eb] shadow-[0_12px_32px_rgba(196,90,122,0.4)] transition-all hover:brightness-110"
            >
              <span
                className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                style={{ animation: "sweep 3s ease-in-out infinite" }}
              />
              <span className="relative inline-flex items-center gap-2">
                <Sparkles size={13} className="text-[#f2c4d0]" />
                Open Invitation
                <Heart size={13} className="fill-[#faf3eb] text-[#faf3eb]" />
              </span>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
