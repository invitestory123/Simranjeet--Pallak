import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";

import IntroGate from "../sections/IntroGate";
import InviteMessage from "../sections/InviteMessage";
import Events from "../sections/Events";
import PetStory from "../sections/PetStory";
import Venue from "../sections/Venue";
import Footer from "../sections/Footer";
import ParallaxStage from "../components/ParallaxStage";
import FallingPetals from "../components/FallingPetals";
import ScrollProgress from "../components/ScrollProgress";
import MusicPlayer from "../components/MusicPlayer";
import { wedding } from "../config";

type Stage = "closed" | "opening" | "open";

export default function Home() {
  const [stage, setStage] = useState<Stage>("closed");
  const [playMusic, setPlayMusic] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.085, smoothWheel: true });
    let id = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      id = requestAnimationFrame(loop);
    };
    id = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = stage === "open" ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [stage]);

  const handleOpening = () => {
    setStage("opening");
    setPlayMusic(true);
  };

  const handleOpened = () => {
    setStage("open");
  };

  return (
    <main className="relative min-h-svh bg-[#1a0f1f]">
      <ScrollProgress />

      <ParallaxStage active={stage !== "closed"} />
      <InviteMessage />
      {wedding.sections?.events !== false && <Events />}
      {wedding.sections?.pets !== false && <PetStory />}
      {wedding.sections?.venue !== false && <Venue />}
      <Footer />

      {stage === "open" && <FallingPetals count={26} />}

      <MusicPlayer autoStart={playMusic} />

      <AnimatePresence>
        {stage !== "open" && (
          <IntroGate
            onOpening={handleOpening}
            onOpened={handleOpened}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
