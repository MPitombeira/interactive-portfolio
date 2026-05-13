"use client";

import { useEffect, useState } from "react";

export default function SoundControl() {
  const [muted, setMuted] = useState(false);

  // carregar preferência salva
  useEffect(() => {
    const saved = localStorage.getItem("muted");
    if (saved === "true") {
      setMuted(true);
    }
  }, []);

  // salvar preferência
  useEffect(() => {
    localStorage.setItem("muted", String(muted));
  }, [muted]);

  // função global pra verificar mute
  useEffect(() => {
    (window as any).isMuted = muted;
  }, [muted]);

  return (
    <button
      onClick={() => setMuted(!muted)}
      className="opacity-70 transition hover:opacity-100 hover:scale-110"
      aria-label={muted ? "Unmute sound" : "Mute sound"}
    >
      {muted ? (
        <img
          src="/icons/mute.png"
          alt="Muted"
          className="w-7 h-7 rounded-full"
        />
      ) : (
        <img
          src="/icons/som.png"
          alt="Sound on"
          className="w-7 h-7 rounded-full"
        />
      )}
    </button>
  );
}