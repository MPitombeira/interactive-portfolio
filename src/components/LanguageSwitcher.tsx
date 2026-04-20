"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
    const { setLanguage } = useLanguage();

  return (
    <>
      <div className="fixed top-6 left-6 z-50 flex gap-2">
        <button onClick={() => setLanguage("en")}>EN</button>
        <button onClick={() => setLanguage("ptbr")}>PT</button>
      </div>
    </>
  );
}