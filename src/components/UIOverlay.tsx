"use client";

import { usePathname } from "next/navigation";
import MuteButton from "./MuteButton";
import LanguageSwitcher from "./LanguageSwitcher";

export default function UIOverlay() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) return null;

  return (
    <div className="fixed top-6 right-6 z-50 flex gap-4">
      <MuteButton />
      <LanguageSwitcher />
    </div>
  );
}