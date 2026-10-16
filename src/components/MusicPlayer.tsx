import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Music, ExternalLink } from "lucide-react";
import { wedding } from "../config";

interface MusicPlayerProps {
  autoStart?: boolean;
}

export default function MusicPlayer({ autoStart = false }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (autoStart && audioRef.current && !isPlaying) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay blocked by browser policy until interaction
          setIsPlaying(false);
        });
    }
  }, [autoStart, isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={wedding.music.url}
        loop
        preload="auto"
        onEnded={() => setIsPlaying(false)}
      />

      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        {/* Expanded mini-card */}
        {isExpanded && (
          <div className="flex items-center gap-3 rounded-full border border-[#f2c4d0]/30 bg-[#2a1830]/90 px-4 py-2 text-left backdrop-blur-md shadow-2xl ring-1 ring-white/10 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#c45a7a]/30 text-[#f2c4d0]">
              <Music size={14} className={isPlaying ? "animate-spin" : ""} style={{ animationDuration: "6s" }} />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xs font-semibold tracking-wide text-[#faf3eb]">
                {wedding.music.title}
              </span>
              <span className="text-[10px] text-[#e8dcc8]/70">
                {wedding.music.artist}
              </span>
            </div>
            <a
              href={wedding.music.appleMusicUrl}
              target="_blank"
              rel="noreferrer"
              title="Open in Apple Music"
              className="ml-1 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[#f2c4d0] hover:bg-white/20 transition-colors"
            >
              <ExternalLink size={11} />
            </a>
          </div>
        )}

        {/* Floating Toggle Button */}
        <button
          type="button"
          onClick={togglePlay}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
          aria-label={isPlaying ? "Mute wedding music" : "Play wedding music"}
          className={`group relative flex h-12 items-center gap-2.5 rounded-full border px-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 ${
            isPlaying
              ? "border-[#f2c4d0]/40 bg-[#c45a7a]/85 text-[#faf3eb]"
              : "border-[#f2c4d0]/25 bg-[#2a1830]/85 text-[#e8dcc8]/80 hover:text-[#faf3eb]"
          }`}
        >
          {isPlaying ? (
            <>
              {/* Animated Sound Bars */}
              <div className="flex items-center gap-0.5">
                <span className="h-3 w-0.5 animate-[pulse_0.8s_ease-in-out_infinite] rounded-full bg-[#faf3eb]" />
                <span className="h-4.5 w-0.5 animate-[pulse_0.6s_ease-in-out_infinite_0.2s] rounded-full bg-[#faf3eb]" />
                <span className="h-2 w-0.5 animate-[pulse_0.7s_ease-in-out_infinite_0.4s] rounded-full bg-[#faf3eb]" />
              </div>
              <Volume2 size={16} />
              <span className="text-[10px] font-medium uppercase tracking-[0.2em]">Music On</span>
            </>
          ) : (
            <>
              <VolumeX size={16} />
              <span className="text-[10px] font-medium uppercase tracking-[0.2em]">Play Song</span>
            </>
          )}
        </button>
      </div>
    </>
  );
}
