"use client";

import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import SoundControl from "./MuteButton";

export default function UIControls() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) return null;

  return (
    <div className="fixed top-4 left-4 z-50 flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-3 py-2 backdrop-blur-sm md:top-6 md:left-6">
      <LanguageSwitcher />
      <SoundControl />
    </div>
  );
}