"use client";

import { usePath } from "@/context/PathContext";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { useXP } from "@/context/XPContext";

export default function About() {
  const { path } = usePath();

  const classes: any = {
    pyromancer: "Pyromancer",
    knight: "Knight",
    cleric: "Cleric",
  };

  const stats: any = {
    pyromancer: {
      UI: 9,
      UX: 8,
      Performance: 7,
    },
    knight: {
      Logic: 9,
      ProblemSolving: 10,
      Algorithms: 8,
    },
    cleric: {
      Design: 9,
      Creativity: 10,
      Animation: 8,
    },
  };

  const { language } = useLanguage();
  const t = translations[language];
  const colors: any = {
    pyromancer: "bg-red-500",
    knight: "bg-blue-500",
    cleric: "bg-green-500",
  };


    const { xp } = useXP();
    const level = Math.floor(xp / 500) + 1;
    const xpPercentage = (xp % 500) / 500 * 100;

    const maxXP = 1000;

    const xpColors: any = {
    pyromancer: "bg-red-400",
    knight: "bg-blue-400",
    cleric: "bg-green-400",
    };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white px-6">
      <h2>{t.about}</h2>

      <div className="mb-6">
        <div
          className={`w-75 h-75 rounded-none border-4 flex items-center justify-center overflow-hidden
      ${path === "pyromancer" && "border-red-500 shadow-[0_0_25px_rgba(255,0,0,0.6)]"}
      ${path === "knight" && "border-blue-500 shadow-[0_0_25px_rgba(0,0,255,0.6)]"}
      ${path === "cleric" && "border-green-500 shadow-[0_0_25px_rgba(0,255,0,0.6)]"}
      ${!path && "border-white"}
      hover:scale-105 transition-transform duration-300
    `}
        >
          <img
            src="/images/me.jfif"
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <h1 className="text-5xl font-bold mb-2 tracking-wider">
        Mateus Pitombeira
      </h1>

      <h2 className={`text-xl mb-6 ${colors[path]?.replace("bg", "text")}`}>
        {path ? classes[path] : "Wandering Developer"}
      </h2>

      <p className="max-w-xl text-center mb-10 text-gray-300">
        Passionate developer focused on creating interactive and immersive web
        experiences.
      </p>

      <div className="w-full max-w-md mb-8">
        <div className="flex justify-between text-sm mb-1 text-gray-400">
          <span>
            {t.level} {level}
          </span>
          <span>
            {xp} / {maxXP} XP
          </span>
        </div>
        <div className="w-full bg-gray-800 h-4 rounded">
          <div
            className={`h-4 ${xpColors[path] || "bg-yellow-400"} rounded transition-all duration-1000 ease-out`}
            style={{ width: `${xpPercentage}%` }}
          />
        </div>
      </div>
      {path && (
        <div className="grid grid-cols-1 gap-4 w-full max-w-md">
          {Object.entries(stats[path]).map(([key, value]) => (
            <div key={key}>
              <p className="mb-1">{t.stats[key]}</p>
              <div className="w-full bg-gray-800 h-3 rounded">
                <div
                  className={`h-3 rounded ${colors[path]} transition-all duration-1000`}
                  style={{ width: `${value * 10}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}