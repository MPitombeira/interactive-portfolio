"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ChoosePath from "@/components/ChoosePath";
import { usePath } from "@/context/PathContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import FogTransition from "@/components/FogTransition";

export default function Home() {
  const [started, setStarted] = useState(false);
  const { path, setPath } = usePath();
  const router = useRouter();
  const [fogActive, setFogActive] = useState(false);

  const themes: any = {
    pyromancer: "text-red-500",
    knight: "text-blue-400",
    cleric: "text-green-400",
  };
  const classDescriptions = {
    knight: "A warrior of code and structure.",
    pyromancer: "Master of creative flames and UI.",
    cleric: "A summoner of connections and communication."
  };
  const [burst, setBurst] = useState(false);

  const playClick = () => {
    const audio = new Audio("/sounds/dark-souls-item-get.mp3");
    audio.volume = 0.4;
    audio.play();
  };


  useEffect(() => {
  setPath(null);
}, []);

  return (
    <main
      className={`min-h-screen bg-black flex flex-col items-center justify-center ${
        path ? themes[path] : "text-white"
      }`}
    >
      {!started ? (
        <>
          <motion.h1
            className="text-5xl md:text-7xl font-[Optimus] tracking-widest text-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            MATEUS PITOMBEIRA PORTFOLIO
          </motion.h1>

          <motion.p
            className="mt-4 text-gray-400 font-[Optimus]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            THIS IS A PORTFOLIO WEBSITE INSPIRED BY DARK SOULS
          </motion.p>

          <button
            onClick={() => {
              setStarted(true);
              playClick();
            }}
            className="mt-10 text-lg tracking-widest text-gray-300 
            hover:text-white transition duration-300 font-[Optimus]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            PRESS ANY KEY
          </button>
        </>
      ) : !path ? (
        <ChoosePath
          setPath={setPath}
          onPathSelected={(selectedPath) => {
            setPath(selectedPath);
            setFogActive(true);

            setTimeout(() => {
              router.push("/hub");
            }, 1800);
          }}
        />
      ) : (
        <div className="flex flex-col items-center gap-4">
          {/* <h2 className="text-4xl font-bold">
            You have chosen the class of the {path}.
          </h2>
          <p className="text-gray-400 mt-2">
            {path && classDescriptions[path]}
          </p> */}

          {/* <button
            onClick={() => {
              setTransition(true);

              setTimeout(() => {
                router.push("/hub");
              }, 800);
            }}
            className="mt-4 px-4 py-2 border rounded hover:bg-white hover:text-black transition"
          >
            Continue
          </button> */}
          <FogTransition active={fogActive} />
        </div>
      )}
    </main>
  );
}