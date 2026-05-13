"use client";

import ReturnToBonfireButton from "@/components/ReturnToBonfireButton";
import SoapstoneMessage from "@/components/SoapstoneMessage";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { useEffect, useState } from "react";

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const projects = t.projectsList;

const statusStyles: Record<string, string> = {
  completed: "text-green-400 border-green-500/60",
  inProgress: "text-yellow-400 border-yellow-500/60",
  planned: "text-blue-400 border-blue-500/60",
};

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <section className="mx-auto max-w-5xl">
        <h1 className="mb-4 text-center font-[Optimus] text-4xl tracking-[0.2em]">
          {t.projectsTitle}
        </h1>

        <SoapstoneMessage
          text="Likely JavaScript"
          image="/images/soapstone.png"
          className="top-[15%] left-[85%]"
        /> 

        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400 leading-relaxed">
          {t.projectsIntro}
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="rounded-lg border border-gray-800 bg-black/40 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-yellow-400/70 hover:shadow-[0_0_20px_rgba(255,200,120,0.12)]"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <h2 className="font-[Optimus] text-2xl tracking-wide text-gray-100">
                  {t.quest} {index + 1}: {project.title}
                </h2>

                <span
                  className={`shrink-0 rounded-full border px-3 py-1 text-xs ${
                    statusStyles[project.status]

                  }`}
                >
                  
                  {t.projectStatus[project.status as keyof typeof t.projectStatus]}
                </span>
              </div>
                 
                 
              <p className="mb-5 text-gray-400 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-gray-700 px-2 py-1 text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-yellow-300 transition hover:text-yellow-100"
                  >
                    GitHub
                  </a>
                ) : (
                  <span className="text-gray-600">GitHub soon</span>
                )}

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="text-yellow-300 transition hover:text-yellow-100"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="text-gray-600">Demo soon</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <ReturnToBonfireButton />
    </main>
  );

}