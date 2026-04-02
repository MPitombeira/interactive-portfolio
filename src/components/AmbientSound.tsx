"use client";

import { useEffect, useRef, useState } from "react";

export default function AmbientSound({ active }: { active: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(false);

    useEffect(() => {
      if (!audioRef.current) return;

      const audio = audioRef.current;
      let fadeInterval: NodeJS.Timeout;

      if (active && !muted) {
        audio.volume = 0;
        audio.play().catch(() => {});

        fadeInterval = setInterval(() => {
          if (audio.volume < 0.4) {
            audio.volume += 0.05;
          } else {
            clearInterval(fadeInterval);
          }
        }, 100);
      } else {
        fadeInterval = setInterval(() => {
          if (audio.volume > 0.05) {
            audio.volume -= 0.05;
          } else {
            audio.volume = 0;
            audio.pause();
            clearInterval(fadeInterval);
          }
        }, 100);
      }

      return () => clearInterval(fadeInterval);
    }, [active, muted]);

  return (
    <>
      <audio ref={audioRef} src="/sounds/Bonfire_Lit_Ambient_No_copyright.mp3" loop />

      <button
        onClick={() => setMuted(!muted)}
        className="fixed top-6 right-6 z-50 text-white text-sm border px-3 py-1 rounded"
      >
        {muted ? "🔇" : "🔊"}
      </button>
    </>
  );
}