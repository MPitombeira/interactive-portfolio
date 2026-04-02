"use client";

import { motion } from "framer-motion";

type Props = {
  setPath: (path: string) => void;
};

export default function ChoosePath({ setPath }: Props) {
  const options = [
    {
      title: "⚔️ Frontend Specialist",
      value: "frontend",
      color: "hover:text-red-500",
    },
    {
      title: "🧠 Problem Solver",
      value: "solver",
      color: "hover:text-blue-400",
    },
    {
      title: "🎨 Creative Developer",
      value: "creative",
      color: "hover:text-green-400",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-3xl mb-4">Choose Your Path</h2>

      {options.map((opt) => (
        <motion.div
          key={opt.value}
          whileHover={{ scale: 1.1 }}
          onClick={() => setPath(opt.value)}
          className={`cursor-pointer text-xl transition ${opt.color}`}
        >
          {opt.title}
        </motion.div>
      ))}
    </div>
  );
}