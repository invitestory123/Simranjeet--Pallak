import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Heart, Sparkles, MapPin } from "lucide-react";
import Reveal from "../components/Reveal";
import { wedding } from "../config";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyHashtag = async () => {
    try {
      await navigator.clipboard.writeText(wedding.hashtag);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <footer className="relative overflow-hidden px-6 pb-20 pt-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f2c4d0]/20 to-transparent" />

      {/* Silhouette image */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-20 opacity-[0.09]">
        <img
          src="/assets/layers/03-couple.png"
          alt=""
          className="mx-auto h-full max-w-md object-contain object-bottom"
        />
      </div>

      {/* Animated Marquee */}
      <div className="relative z-10 mb-14 overflow-hidden py-3">
        <div
          className="flex w-max whitespace-nowrap"
          style={{ animation: "marquee 26s linear infinite" }}
        >
          {[0, 1].map((n) => (
            <span
              key={n}
              className="font-display px-4 text-xs sm:text-sm uppercase tracking-[0.35em] text-[#e8dcc8]/45"
            >
              {Array(4)
                .fill(`${wedding.groom} & ${wedding.bride}  ·  ${wedding.hashtag}  ·  14th & 15th November 2026  ·  Dehradun  ·  `)
                .join("")}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* RSVP & Compliments Grid */}
        <Reveal className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* R.S.V.P. Box */}
          <div className="flex flex-col rounded-3xl border border-[#f2c4d0]/20 bg-gradient-to-b from-[#2a1733]/90 to-[#1e1024]/95 p-6 backdrop-blur-md shadow-xl">
            <div className="mb-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[#c9a86a]">
              <span>✉</span>
              <span>R. S. V. P.</span>
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <p className="font-display text-base font-semibold text-[#faf3eb]">
                  Bhagat Singh Ratra · Pritpal Singh Ratra
                </p>
                <p className="font-display text-sm text-[#e8dcc8]/85">
                  Gurvinder Singh Ratra
                </p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  <a
                    href="tel:9997001579"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#f2c4d0]/20 bg-white/[0.04] px-3 py-1 text-[#f2c4d0] hover:bg-[#c45a7a]/20 transition-colors"
                  >
                    <Phone size={11} /> 9997001579
                  </a>
                  <a
                    href="tel:8006532613"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#f2c4d0]/20 bg-white/[0.04] px-3 py-1 text-[#f2c4d0] hover:bg-[#c45a7a]/20 transition-colors"
                  >
                    <Phone size={11} /> 8006532613
                  </a>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <p className="font-display text-base font-semibold text-[#faf3eb]">
                  Super Emporium, Rama Market
                </p>
                <p className="font-display text-sm text-[#e8dcc8]/85">
                  Super House, Rama Market
                </p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  <a
                    href="tel:9897773095"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#f2c4d0]/20 bg-white/[0.04] px-3 py-1 text-[#f2c4d0] hover:bg-[#c45a7a]/20 transition-colors"
                  >
                    <Phone size={11} /> 9897773095
                  </a>
                  <a
                    href="tel:9837304711"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#f2c4d0]/20 bg-white/[0.04] px-3 py-1 text-[#f2c4d0] hover:bg-[#c45a7a]/20 transition-colors"
                  >
                    <Phone size={11} /> 9837304711
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Compliments & Family Invitation Box */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#f2c4d0]/20 bg-gradient-to-b from-[#2a1733]/90 to-[#1e1024]/95 p-6 backdrop-blur-md shadow-xl">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[#c9a86a]">
                <Sparkles size={12} />
                <span>With Best Compliments From</span>
              </div>
              <p className="font-display text-lg font-semibold text-[#faf3eb]">
                {wedding.compliments.from}
              </p>

              <div className="mt-5 rounded-2xl border border-[#f2c4d0]/15 bg-white/[0.03] p-3.5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#c9a86a]">
                  Cute Invitation From
                </p>
                <p className="font-script text-2xl text-[#f2c4d0]">
                  {wedding.compliments.cuteFrom}
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#e8dcc8]/60">
                A Cordial Invitation From
              </p>
              <p className="font-display text-base font-semibold text-[#faf3eb]">
                {wedding.familyHost}
              </p>
              <p className="mt-0.5 flex items-center gap-1 text-xs text-[#e8dcc8]/75">
                <MapPin size={12} className="text-[#c45a7a]" />
                {wedding.familyAddress}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Central Call to Action */}
        <Reveal className="mx-auto flex max-w-md flex-col items-center gap-4 text-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2c4d0]/10 text-[#f2c4d0]">
            <Heart size={20} className="fill-[#c45a7a] text-[#c45a7a]" />
          </div>
          
          <h3 className="font-script text-4xl sm:text-5xl leading-tight text-[#faf3eb]">
            We can't wait to celebrate with you
          </h3>
          
          <p className="text-xs uppercase tracking-[0.3em] text-[#e8dcc8]/70">
            {wedding.groom} & {wedding.bride} · Ratra & Dhawan Families
          </p>

          <div className="h-px w-24 bg-[#f2c4d0]/25 my-1" />

          {/* Copy Hashtag */}
          <motion.button
            type="button"
            onClick={copyHashtag}
            whileTap={{ scale: 0.96 }}
            className={`rounded-full border px-6 py-2.5 text-[10px] uppercase tracking-[0.25em] transition-all duration-300 ${
              copied
                ? "border-[#f2c4d0]/60 bg-[#c45a7a] text-[#faf3eb]"
                : "border-[#f2c4d0]/30 bg-white/[0.04] text-[#e8dcc8]/80 hover:border-[#f2c4d0]/50 hover:text-[#faf3eb]"
            }`}
          >
            {copied ? "Copied to Clipboard ✓" : `${wedding.hashtag} · Tap to copy`}
          </motion.button>
        </Reveal>
      </div>
    </footer>
  );
}
