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

  useEffect(() => {
  setPath(null);
}, []);

  return (
    <main
      className={`h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-zinc-900 to-black ${
        path ? themes[path] : "text-white"
      }`}
    >
      {!started ? (
        <>
          {/* <div className="mb-5 flex justify-center ">
            <img
              src="/images/title.png"
              alt="title"
              className=" object-contain "
            />
          </div> */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-wide"
          >
            Mateus Pitombeira Portfolio
          </motion.h1>

          <motion.p className="mt-4 text-gray-400">This is a portfolio website inspired by Dark Souls</motion.p>


          <motion.button
            onClick={() => setStarted(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 border border-white rounded-md hover:bg-white hover:text-black transition"
          >
            NEW GAME
          </motion.button>
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