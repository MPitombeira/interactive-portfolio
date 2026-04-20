"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import FogTransition from "@/components/FogTransition";
import { playSound } from "@/lib/sound";

export default function ReturnToBonfireButton() {
  const router = useRouter();
  const [fogActive, setFogActive] = useState(false);

  const handleReturn = () => {
    playSound("/sounds/bonfireLit.mp3", 0.3);

    setFogActive(true);

    setTimeout(() => {
      router.push("/?state=bonfire")
    }, 1200);
  };

  return (
    <>
      <button
        onClick={handleReturn}
        className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 font-[Optimus] text-sm tracking-[0.2em] text-gray-500 transition hover:text-white"
      >
        RETURN TO BONFIRE
      </button>

      <FogTransition active={fogActive} />
    </>
  );
}