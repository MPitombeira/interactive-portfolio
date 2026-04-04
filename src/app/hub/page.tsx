"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { usePath } from "@/context/PathContext";

export default function Hub() {
  const router = useRouter();
  const { path } = usePath();

const hubContent = {
  knight: {
    area: "Majula",
    subtitle: "A place of reflection and resolve.",
    accent: "text-blue-300",
    avatar: "/images/knight.jpg",
    video: "/videos/output1.mp4",
  },
  pyromancer: {
    area: "Firelink Shrine",
    subtitle: "Where embers gather and paths begin.",
    accent: "text-orange-300",
    avatar: "/images/pyromancer.jpg",
    video: "/videos/output1.mp4",
  },
  cleric: {
    area: "Chapel of Summoning",
    subtitle: "A sacred place for connection and guidance.",
    accent: "text-yellow-200",
    avatar: "/images/cleric.jpg",
    video: "/videos/output1.mp4",
  },
};

  const current = hubContent[path as keyof typeof hubContent] ?? {
    area: "Firelink Shrine",
    subtitle: "Where paths converge.",
    accent: "text-white",
    avatar: "/images/placeholder-avatar.png",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative min-h-screen overflow-hidden text-white"
    >
      {/* vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/output1.mp4" type="video/mp4" />
      </video>

      {/* overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* conteúdo */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className={`text-3xl md:text-5xl font-semibold tracking-wide ${current.accent}`}>
          {current.area}
        </h1>

        <p className="mt-3 max-w-xl text-sm md:text-base text-gray-300">
          {current.subtitle}
        </p>

        {/* avatar */}
        <div className="mt-8 mb-6">
          <img
            src={current.avatar}
            alt={path ?? "class avatar"}
            className="w-32 h-32 md:w-44 md:h-44 object-contain"
          />
        </div>



        {/* menu */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-lg md:text-xl">
          <button
            onClick={() => router.push("/projects")}
            className="transition hover:scale-110 hover:text-white/80"
          >
            Projects
          </button>

          <button
            onClick={() => router.push("/about")}
            className="transition hover:scale-110 hover:text-white/80"
          >
            About
          </button>

          <button
            onClick={() => router.push("/contact")}
            className="transition hover:scale-110 hover:text-white/80"
          >
            Summon
          </button>
        </div>

        <p className="mt-10 text-sm italic text-gray-400">
          Rest at bonfire.
        </p>
      </div>
    </motion.div>
  );
}