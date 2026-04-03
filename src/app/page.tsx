"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ChoosePath from "@/components/ChoosePath";
import { usePath } from "@/context/PathContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const [started, setStarted] = useState(false);
  const { path, setPath } = usePath();
  
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
  const router = useRouter();
  const [burst, setBurst] = useState(false);

  useEffect(() => {
  setPath(null);
}, []);

  return (
    <main
      className={`h-screen flex flex-col items-center justify-center bg-[#0d0d0d] ${
        path ? themes[path] : "text-white"
      }`}
    >
      {!started ? (
        <>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-wide"
          >
            Mateus Pitombeira Portfolio
          </motion.h1>

          <motion.p className="mt-4 text-gray-400">
            Press Start
          </motion.p>

          <motion.button
            onClick={() => setStarted(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 border border-white rounded-md hover:bg-white hover:text-black transition"
          >
            START
          </motion.button>
        </>
      ) : !path ? (
        <ChoosePath setPath={setPath} />
      ) : (
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-4xl font-bold">
            You have chosen the class of the {path}.
          </h2>
          <p className="text-gray-400 mt-2">
            {path && classDescriptions[path]}
          </p>


          <button
            onClick={() => {
              if (path === "pyromancer") router.push("/projects");
              if (path === "knight") router.push("/about");
              if (path === "cleric") router.push("/contact");
            }}
            className="mt-4 px-4 py-2 border rounded hover:bg-white hover:text-black transition"
          >
            Continue
          </button>
        </div>
      )}
    </main>
  );
}