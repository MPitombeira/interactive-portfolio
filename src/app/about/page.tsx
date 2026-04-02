"use client";

import { usePath } from "@/context/PathContext";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function About() {
  const { path } = usePath();

  const classes: any = {
    frontend: "Frontend Warrior",
    solver: "Logic Mage",
    creative: "Creative Bard",
  };

  const stats: any = {
    frontend: {
      UI: 9,
      UX: 8,
      Performance: 7,
    },
    solver: {
      Logic: 9,
      ProblemSolving: 10,
      Algorithms: 8,
    },
    creative: {
      Design: 9,
      Creativity: 10,
      Animation: 8,
    },
  };

  const { language } = useLanguage();
  const t = translations[language];
  const colors: any = {
    frontend: "bg-red-500",
    solver: "bg-blue-500",
    creative: "bg-green-500",
  };

    const level = 12;
    const currentXP = 1200;
    const maxXP = 2000;

    const xpPercentage = (currentXP / maxXP) * 100;
    const xpColors: any = {
    frontend: "bg-red-400",
    solver: "bg-blue-400",
    creative: "bg-green-400",
    };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white px-6">
      <h2>{t.about}</h2>

      <div className="mb-6">
        <div
          className={`w-75 h-75 rounded-none border-4 flex items-center justify-center overflow-hidden
      ${path === "frontend" && "border-red-500 shadow-[0_0_25px_rgba(255,0,0,0.6)]"}
      ${path === "solver" && "border-blue-500 shadow-[0_0_25px_rgba(0,0,255,0.6)]"}
      ${path === "creative" && "border-green-500 shadow-[0_0_25px_rgba(0,255,0,0.6)]"}
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
            {currentXP} / {maxXP} XP
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