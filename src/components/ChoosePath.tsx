"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  setPath: (path: string) => void;
};

export default function ChoosePath({ setPath }: Props) {
  const options = [
    {
      title: "Pyromancer",
      value: "pyromancer",
      color: "hover:text-red-500",
    },
    {
      title: "Knight",
      value: "knight",
      color: "hover:text-blue-400",
    },
    {
      title: "Cleric",
      value: "cleric",
      color: "hover:text-green-400",
    },
  ];
  const [burst, setBurst] = useState(false);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  return (
    <div className="relative flex flex-col items-center gap-6">
      <h2 className="text-3xl mb-4">Choose Your Class</h2>

      {burst && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
          {[...Array(12)].map((_, i) => (
            <motion.span
              key={i}
              className={`absolute w-3 h-3 rounded-full ${
                selectedClass === "knight"
                  ? "bg-blue-400"
                  : selectedClass === "pyromancer"
                    ? "bg-red-500"
                    : "bg-green-400"
              }`}
              initial={{ opacity: 1, scale: 0.5 }}
              animate={{
                opacity: 0,
                scale: 1.5,
                x: Math.cos((i * 30 * Math.PI) / 180) * 60,
                y: Math.sin((i * 30 * Math.PI) / 180) * 60,
              }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </div>
      )}

      {options.map((opt) => (
        <motion.div
          key={opt.value}
          whileHover={{ scale: 1.1 }}
          onClick={() => {
            setSelectedClass(opt.value);
            setBurst(true);

            setTimeout(() => {
              setPath(opt.value);
              setBurst(false);
            }, 400);
          }}
          className={`cursor-pointer text-xl transition ${opt.color}`}
        >
          {opt.title}
        </motion.div>
      ))}
    </div>
  );
}