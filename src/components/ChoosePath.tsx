"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  setPath: (path: string) => void;
  onPathSelected: (path: string) => void;
};

export default function ChoosePath({ setPath, onPathSelected }: Props) {
  const [burst, setBurst] = useState(false);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const options = [
    {
      title: "Pyromancer",
      value: "pyromancer",
      description: "Master of flame and creation.",
      color:
        "hover:border-orange-400 hover:shadow-[0_0_20px_rgba(255,120,0,0.35)]",
      avatar: "/images/pyromancer.jpg",
    },
    {
      title: "Knight",
      value: "knight",
      description: "A warrior of structure and resolve.",
      color:
        "hover:border-blue-300 hover:shadow-[0_0_20px_rgba(120,160,255,0.35)]",
      avatar: "/images/knight.jpg",
    },
    {
      title: "Cleric",
      value: "cleric",
      description: "A guide of connection and invocation.",
      color:
        "hover:border-yellow-200 hover:shadow-[0_0_20px_rgba(255,230,160,0.35)]",
      avatar: "/images/cleric.jpg",
    },
  ];

  return (
    <div className="relative flex flex-col items-center px-6">
      <h2 className="mb-8 text-3xl md:text-4xl tracking-wide text-gray-100 font-serif">
        Choose Your Class
      </h2>

      {burst && (
        <div className="absolute inset-0 pointer-events-none z-50 flex items-center justify-center">
          {[...Array(12)].map((_, i) => (
            <motion.span
              key={i}
              className={`absolute h-3 w-3 rounded-full ${
                selectedClass === "knight"
                  ? "bg-blue-400"
                  : selectedClass === "pyromancer"
                    ? "bg-orange-500"
                    : "bg-yellow-200"
              }`}
              initial={{ opacity: 1, scale: 0.5 }}
              animate={{
                opacity: 0,
                scale: 1.5,
                x: Math.cos((i * 30 * Math.PI) / 180) * 70,
                y: Math.sin((i * 30 * Math.PI) / 180) * 70,
              }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </div>
      )}

      <div className="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
        {options.map((opt) => (
          <motion.button
            key={opt.value}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setSelectedClass(opt.value);
              setBurst(true);

              setTimeout(() => {
                setPath(opt.value);
                setBurst(false);
                onPathSelected(opt.value);
              }, 400);
            }}
            className={`group rounded-xlborder border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.05)] bg-black/40 p-6 text-left backdrop-blur-sm transition-all duration-300 ${opt.color}`}
            
          >
            <div className="mb-5 flex justify-center ">
              <img
                src={opt.avatar}
                alt={opt.title}
                className="h-28 w-28 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <h3 className="mb-2 text-center text-2xl tracking-wide text-white">
              {opt.title}
            </h3>

            <p className="text-center text-sm leading-relaxed text-gray-400">
              {opt.description}
            </p>
          </motion.button>
        ))}
      </div>
    </div>
  );
}