"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePath } from "@/context/PathContext";
import FireParticles from "./FireParticles";
import AmbientSound from "./AmbientSound";
import { useTransition } from "@/context/TransitionContext";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function BonfireMenu() {
    const [open, setOpen] = useState(false);
    const { navigate } = useTransition();
    const { path } = usePath();
    const themes: any = {
        frontend: "text-red-500 border-red-500",
        solver: "text-blue-400 border-blue-400",
        creative: "text-green-400 border-green-400",
    };
    const { language } = useLanguage();
    const t = translations[language];
    const { setLanguage } = useLanguage();

  return (
    <>
      {/* BOTÃO BONFIRE */}
      <div className="fixed bottom-6 right-6 z-50">
        <div
          className={`relative flex items-center justify-center rounded-full p-2 transition-all duration-300
                ${
                  path === "frontend" &&
                  "border border-red-500 shadow-[0_0_20px_rgba(255,0,0,0.6)]"
                }
                ${
                  path === "solver" &&
                  "border border-blue-500 shadow-[0_0_20px_rgba(0,0,255,0.6)]"
                }
                ${
                  path === "creative" &&
                  "border border-green-500 shadow-[0_0_20px_rgba(0,255,0,0.6)]"
                }
                ${!path && "border border-white"}
                `}
        >
          <FireParticles />

          <button onClick={() => setOpen(!open)}>
            <img
              src="/images/bonfire.gif"
              alt="bonfire"
              className="w-14 h-14 object-contain hover:scale-110 transition"
            />
          </button>
        </div>
      </div>

      <AmbientSound active={open} />

      {/* MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-40"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex flex-col items-center gap-6 text-2xl ${path ? themes[path] : "text-white"}`}
            >
              <button
                onClick={() => {
                  setOpen(false);
                  setTimeout(() => navigate("/"), 200);
                }}
              >
                Leave (Home)
              </button>

              <button
                onClick={() => {
                  setOpen(false);
                  setTimeout(() => navigate("/about"), 200);
                }}
              >
                {t.levelUp}
              </button>

              <button
                onClick={() => {
                  setOpen(false);
                  setTimeout(() => navigate("/projects"), 200);
                }}
              >
                {t.projects}
              </button>

              <button
                onClick={() => {
                  setOpen(false);
                  setTimeout(() => navigate("/contacts"), 200);
                }}
              >
                {t.summon}
              </button>

              <button
                onClick={() => setOpen(false)}
                className="mt-6 text-sm text-gray-400"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed top-6 left-6 z-50 flex gap-2">
        <button onClick={() => setLanguage("en")}>EN</button>
        <button onClick={() => setLanguage("ptbr")}>PT</button>
      </div>
    </>
  );
}