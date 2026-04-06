"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { useEffect, useState } from "react";
import { useXP } from "@/context/XPContext";
import ReturnToBonfireButton from "@/components/ReturnToBonfireButton";

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language];
  const statusStyles: any = {
    completed:
      "border-green-500 text-green-400 shadow-[0_0_15px_rgba(0,255,0,0.5)]",
    inProgress:
      "border-yellow-500 text-yellow-400 shadow-[0_0_15px_rgba(255,255,0,0.5)]",
  };

  const { quests, completeQuest } = useXP();
  const [visible, setVisible] = useState(false);
  const [completedIndex, setCompletedIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300); // delay pequeno

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen text-white px-6 py-12">
      <h1 className="text-4xl mb-10 text-center">{t.quests}</h1>

      <div className="max-w-2xl mx-auto space-y-6">
        {quests.map((quest, index) => (
          <div
            key={index}
              className={`border p-6 rounded-lg transition transform hover:scale-105
                ${statusStyles[quest.status]}
                ${
                  completedIndex === index
                    ? "animate-pulse border-yellow-400 shadow-[0_0_20px_rgba(255,215,0,0.8)]"
                    : ""
                }
              transition-all duration-700
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
            style={{
              transitionDelay: `${index * 150}ms`,
            }}
          >
            <h2 className="text-2xl mb-2">
              Quest {index + 1}: {quest.title}
            </h2>

            <p className="text-gray-400 mb-4">{quest.description}</p>

            <div className="flex justify-between text-sm">
              <span>
                {t.status}: {t[quest.status]}
              </span>
              <span>{quest.xp}</span>
            </div>

            {/* linha estilo RPG */}
            <div className="mt-4 h-[2px] bg-gray-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
            </div>

            <button
              onClick={() => {
                completeQuest(index);
                setCompletedIndex(index);

                setTimeout(() => {
                  setCompletedIndex(null);
                }, 1000);
              }}
              className="mt-4 px-3 py-1 border border-yellow-500 text-yellow-400 rounded hover:bg-yellow-500 hover:text-black transition"
            >
              Complete Quest
            </button>
          </div>
        ))}
      </div>
      <ReturnToBonfireButton />
    </div>
  );
}
