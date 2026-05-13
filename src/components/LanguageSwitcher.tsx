"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage("en")}
        className="opacity-70 hover:opacity-100 transition hover:scale-110"
        aria-label="Change language to English"
      >
        <img
          src="/icons/eua.png"
          alt="English"
          className="w-7 h-7 rounded-full"
        />
      </button>

      <button
        onClick={() => setLanguage("ptbr")}
        className="opacity-70 hover:opacity-100 transition hover:scale-110"
        aria-label="Mudar idioma para português"
      >
        <img
          src="/icons/br.png"
          alt="Português"
          className="w-7 h-7 rounded-full"
        />
      </button>
    </div>
  );
}