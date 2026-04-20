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
      className="fixed top-6 right-6 z-50 text-sm text-gray-400 hover:text-white transition font-[Optimus]"
    >
      {muted ? "🔇" : "🔊"}
    </button>
  );
}