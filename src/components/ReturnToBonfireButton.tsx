"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import FogTransition from "@/components/FogTransition";
import { playSound } from "@/lib/sound";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function ReturnToBonfireButton() {
  const router = useRouter();
  const [fogActive, setFogActive] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];
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
        className="
          mx-auto mt-12 block w-fit
     
          px-4 py-2
          font-[Optimus] text-xs tracking-[0.15em] text-gray-400
          backdrop-blur-sm transition hover:text-white

          md:fixed md:bottom-6 md:left-1/2 md:z-40 md:mt-0 md:-translate-x-1/2
        "
      >
        {t.returnbonfire}
      </button>

      <FogTransition active={fogActive} />
    </>
  );
}