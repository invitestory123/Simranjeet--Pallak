import Reveal from "../components/Reveal";
import { wedding } from "../config";

export default function InviteMessage() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f2c4d0]/25 to-transparent" />
      
      <Reveal className="mx-auto flex max-w-xl flex-col items-center text-center">
        {/* Sacred Ik Onkar Invocation */}
        <div className="flex flex-col items-center gap-1.5">
          <p className="font-display text-2xl tracking-[0.3em] text-[#f2c4d0]">
            {wedding.verse.gurmukhi}
          </p>
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#c9a86a]">
            {wedding.verse.blessing}
          </span>
        </div>

        <div className="my-8 flex items-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#f2c4d0]/40" />
          <span className="text-sm text-[#f2c4d0]/60">❦</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#f2c4d0]/40" />
        </div>

        {/* Grandparents' Request */}
        <p className="text-[11px] uppercase tracking-[0.32em] text-[#f2c4d0]/80">
          With the divine blessings of Waheguru Ji
        </p>

        <p className="mt-4 font-display text-xl sm:text-2xl leading-relaxed text-[#faf3eb]">
          <span className="font-semibold text-[#f2c4d0]">{wedding.groomGrandParents}</span>
          <br />
          <span className="text-sm sm:text-base text-[#e8dcc8]/85 font-normal">
            request your gracious presence and blessings on the auspicious occasion of the wedding ceremony of their grandson
          </span>
        </p>

        {/* Groom Card */}
        <div className="mt-8 flex w-full flex-col items-center rounded-3xl border border-[#f2c4d0]/20 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8">
          <h2 className="font-script text-5xl sm:text-6xl text-[#faf3eb]">
            {wedding.groomFull}
          </h2>
          <div className="mt-3 flex flex-col gap-1 text-center">
            <p className="text-[12px] sm:text-[13px] tracking-wide text-[#e8dcc8]/90">
              (S/o {wedding.groomParents})
            </p>
            <p className="text-[11px] sm:text-[12px] italic tracking-wide text-[#f2c4d0]/80">
              (Grand S/o {wedding.groomLateGrandParents})
            </p>
          </div>

          <div className="my-5 flex items-center gap-3">
            <div className="h-px w-8 bg-[#f2c4d0]/25" />
            <span className="font-script text-2xl text-[#f2c4d0]">with</span>
            <div className="h-px w-8 bg-[#f2c4d0]/25" />
          </div>

          {/* Bride Card */}
          <h2 className="font-script text-5xl sm:text-6xl text-[#faf3eb]">
            {wedding.brideFull}
          </h2>
          <p className="mt-3 text-[12px] sm:text-[13px] tracking-wide text-[#e8dcc8]/90">
            (D/o {wedding.brideParents})
          </p>
        </div>

        {/* Date & Note */}
        <div className="mt-8 flex flex-col items-center gap-1.5">
          <p className="text-[12px] uppercase tracking-[0.3em] text-[#c9a86a] font-medium">
            {wedding.dateLabel}
          </p>
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#e8dcc8]/65">
            {wedding.familyHost} · {wedding.familyAddress}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
