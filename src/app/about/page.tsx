"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import ReturnToBonfireButton from "@/components/ReturnToBonfireButton";
import SoapstoneMessage from "@/components/SoapstoneMessage";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];
  const accentColor =
  "bg-yellow-400";

  const [activeTab, setActiveTab] = useState<
    "lore" | "experience" | "skills" | "beyond"
  >("lore");


  const stats = [
    { label: "Backend", value: 9 },
    { label: "Frontend", value: 7 },
    { label: t.atributes1, value: 9 },
    { label: t.atributes2, value: 8 },
  ];

  const mainSkills = [
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "jQuery",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original-wordmark.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
  ];

  const studying = [
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    },
    {
      name: "React Native",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: ".NET Core",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
    },
  ];

  const tabs = [
    { id: "lore", label: t.lore || "Lore" },
    { id: "experience", label: t.experience },
    { id: "skills", label: "Skills" },
    { id: "beyond", label: t.beyondCode },
  ] as const;

  const birthDate = new Date("2000-12-18");
  const today = new Date();

  const age = 25;

  const souls = Math.floor(
    (today.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  const nextBirthday = new Date(
    today.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate()
  );

  if (nextBirthday < today) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  const lastBirthday = new Date(nextBirthday);
  lastBirthday.setFullYear(nextBirthday.getFullYear() - 1);

  const levelProgress = Math.round(
    ((today.getTime() - lastBirthday.getTime()) /
      (nextBirthday.getTime() - lastBirthday.getTime())) *
      100
  );

  return (
    <main className="min-h-screen bg-black px-4 py-20 text-white md:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.35fr_0.85fr]">
        {/* LEFT PANEL */}
        <section className="relative rounded-xl border border-white/10 bg-black/50 p-5 shadow-[0_0_35px_rgba(255,255,255,0.04)] md:p-8">
          <div className="mb-6 flex flex-wrap gap-3 border-b border-white/10 pb-4 font-[Optimus] tracking-[0.15em]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-sm transition hover:text-yellow-300 ${
                  activeTab === tab.id ? "text-yellow-300" : "text-gray-500"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "lore" && (
            <div className="space-y-6 leading-relaxed text-gray-300">

              <p>{t.aboutText}</p>
              <p>{t.aboutText1}</p>
              <p>{t.aboutText2}</p>
              <p>{t.aboutText3}</p>

              <div className="border-t border-white/10 pt-6">
                <h2 className="mb-3 font-[Optimus] text-xl tracking-[0.12em] text-yellow-300">
                  Visuals & Art
                </h2>
              <p className="leading-relaxed text-gray-400">
                  {t.websitedescription}
              </p>
                <p className="leading-relaxed text-gray-400">
                  {t.visualArt}{" "}
                  <a
                    href="LINK_DO_ARTISTA"
                    target="_blank"
                    className="text-yellow-300 transition hover:text-yellow-200"
                  >
                    DE ALMEIDA
                  </a>
                  .
                </p>

                <SoapstoneMessage
                  text="Praise the Sun! Essential person ahead"
                  image="/images/soapstone.png"
                  className="hidden md:block top-[90%] left-[85%]"
                />

              </div>
            </div>
          )}

          {activeTab === "experience" && (
            <div className="space-y-8 text-gray-300">
              <h2 className="font-[Optimus] text-2xl tracking-[0.12em] text-yellow-300">
                {t.experience}
              </h2>

              <div className="space-y-8">
                {t.experienceJobs.map((job: any, index: number) => (
                  <div
                    key={index}
                    className="border-l border-yellow-400/30 pl-5"
                  >
                    <h3 className="text-xl text-white">
                      {job.company}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {job.type}
                    </p>

                    <div className="mt-5 space-y-6">
                      {job.roles.map((role: any, roleIndex: number) => (
                        <div key={roleIndex}>
                          <h4 className="text-yellow-300">
                            {role.title}
                          </h4>

                          <p className="text-sm text-gray-500">
                            {role.period}
                          </p>

                          <p className="mt-2 leading-relaxed">
                            {role.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "skills" && (
            <div className="space-y-10">
              <div>
                <h2 className="mb-5 font-[Optimus] text-2xl tracking-[0.12em] text-yellow-300">
                  Main Skills
                </h2>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {mainSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-3 transition hover:border-yellow-400/50 hover:bg-yellow-400/[0.04]"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="h-8 w-8 object-contain"
                      />
                      <span className="text-sm text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-5 font-[Optimus] text-2xl tracking-[0.12em] text-yellow-300">
                  {t.study}
                </h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {studying.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-3 transition hover:border-yellow-400/50 hover:bg-yellow-400/[0.04]"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="h-8 w-8 object-contain"
                      />
                      <span className="text-sm text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "beyond" && (
            <div className="space-y-8 text-gray-300">
              <div>
                <h2 className="mb-4 font-[Optimus] text-2xl tracking-[0.12em] text-yellow-300">
                  {t.beyondCode}
                </h2>
                <p className="leading-relaxed">{t.beyondCodeText}</p>
              </div>

              <div>
                <h2 className="mb-4 font-[Optimus] text-2xl tracking-[0.12em] text-yellow-300">
                  {t.favoriteGames}
                </h2>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {[
                    { name: "Shadow of the Colossus", image: "/images/games/sotc.jpg" },
                    { name: "Dark Souls", image: "/images/games/darksouls1.png" },
                    { name: "Terraria", image: "/images/games/terraria.jpg" },
                    { name: "Hades", image: "/images/games/Hades-Cover-Art.jpg" },
                    { name: "Final Fantasy VII", image: "/images/games/ff7.jpg" },
                    { name: "Elden Ring", image: "/images/games/eldenring.jpg" },
                  ].map((game) => (
                    <div
                      key={game.name}
                      className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.02]"
                    >
                      <img
                        src={game.image}
                        alt={game.name}
                        className="h-10 w-full object-cover opacity-80 transition group-hover:scale-105 group-hover:opacity-100"
                      />
                      <p className="p-2 text-xs text-gray-400">{game.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-4 font-[Optimus] text-2xl tracking-[0.12em] text-yellow-300">
                  {t.playlist}
                </h2>

                <iframe
                  src="https://open.spotify.com/embed/playlist/4Vy8fEyPV5pKbYk1R3eMGU?si=a4c2e574e0d24606"
                  width="100%"
                  height="160"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-lg"
                />
              </div>
            </div>
          )}
        </section>

        {/* RIGHT PANEL */}
        <aside className="rounded-xl border border-white/10 bg-black/50 p-5 shadow-[0_0_35px_rgba(255,255,255,0.04)] md:p-6">
          <div
            className={`mx-auto mb-6 aspect-square w-56 overflow-hidden border-4 md:w-64`}
          >
            <img
              src="/images/avatar2.jfif"
              alt="Mateus Pitombeira"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="text-center">
            <h1 className="font-[Optimus] text-3xl tracking-[0.12em] text-white">
              Mateus Pitombeira
            </h1>
            <p className="mt-2 text-gray-400">Hollow Developer</p>
          </div>

          <div className="mt-8">
            <div className="mb-1 flex justify-between text-sm text-gray-400">
              <span>
                {t.level} {age}
              </span>

              <span>
                {souls.toLocaleString()} {t.souls}
              </span>
            </div>

            <div className="h-3 w-full overflow-hidden rounded bg-gray-800">
              <div
                className={`h-3 rounded ${accentColor} transition-all duration-1000 ease-out`}
                style={{ width: `${levelProgress}%` }}
              />
            </div>

            <p className="mt-2 text-center text-xs tracking-[0.15em] text-gray-500">
              {t.progressLevel} {age + 1}
            </p>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <div className="space-y-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-gray-400">
                    {stat.label}
                  </span>

                  <span className="font-[Optimus] text-yellow-300">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
      <ReturnToBonfireButton />
    </main>
  );
}