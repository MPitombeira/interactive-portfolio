"use client";

import { usePath } from "@/context/PathContext";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { useXP } from "@/context/XPContext";
import ReturnToBonfireButton from "@/components/ReturnToBonfireButton";

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
    <div className="min-h-screen text-white px-6 pt-20 pb-12 flex flex-col items-center">
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
        {path ? classes[path] : "Hollow Developer"}
      </h2>

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

      <div className="min-h-screen text-white px-6 py-12 flex flex-col items-center">
        {/* INTRO */}
        <p className="text-gray-300 max-w-2xl text-center mb-10 leading-relaxed whitespace-pre-line">
          {t.aboutText}
        </p>

        {/* EXPERIÊNCIA */}
        <div className="max-w-2xl w-full mb-10">
          <h2 className="text-2xl mb-4 text-white-400">{t.experience}</h2>
          <ul className="space-y-2 text-gray-300">
            <li>• {t.experienceText}</li>

            <div className="mt-6">
              <h3 className="text-xl mb-4 text-gray-300">Skills</h3>
              <div className="flex flex-wrap  gap-6 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                    className="w-10 h-10 object-contain"
                  />
                  PHP
                </span>

                <span className="flex items-center gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                    className="w-10 h-10 object-contain"
                  />
                  MySQL
                </span>

                <span className="flex items-center gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                    className="w-10 h-10 object-contain"
                  />
                  React
                </span>

                <span className="flex items-center gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                    className="w-10 h-10 object-contain"
                  />
                  Javascript
                </span>

                <span className="flex items-center gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original-wordmark.svg"
                    className="w-10 h-10 object-contain"
                  />
                  JQuery
                </span>

                <span className="flex items-center gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                    className="w-10 h-10 object-contain"
                  />
                  Next.js
                </span>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl mb-4 text-gray-300">{t.study}</h3>
              <div className="flex flex-wrap  gap-6 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                    className="w-10 h-10 object-contain"
                  />
                  Java
                </span>

                <span className="flex items-center gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original-wordmark.svg"
                    className="w-10 h-10 object-contain"
                  />
                  React Native
                </span>
              </div>
            </div>
          </ul>
        </div>

        {/* OBJETIVOS */}
        <div className="max-w-2xl w-full mb-10">
          <h2 className="text-2xl mb-4 text-white-400">{t.goals}</h2>
          <p className="text-gray-300">
            {t.goalsText}
          </p>
        </div>

        {/* HOBBIES */}
        <div className="max-w-2xl w-full mb-10">
          <h2 className="text-2xl mb-4 text-white-400">{t.beyondCode}</h2>
          <p className="text-gray-300">
            {t.beyondCodeText}
          </p>
        </div>

        {/* PLAYLIST */}
        <div className="max-w-2xl w-full">
          <h2 className="text-2xl mb-4 text-yellow-400">{t.playlist}</h2>

          <iframe
            src="https://open.spotify.com/embed/playlist/11Dcs0DhQddZcPeSrd5QqD?si=9437cbb30eb945b7"
            data-testid="embed-iframe"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <ReturnToBonfireButton />
    </div>
  );
}