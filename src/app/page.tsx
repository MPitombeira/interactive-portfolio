"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import FogTransition from "@/components/FogTransition";
import { useRouter } from "next/navigation";
import { useTransition } from "@/context/TransitionContext";
import { useSearchParams } from "next/navigation";
import { playSound } from "@/lib/sound";

export default function Home() {
  const [stage, setStage] = useState<"start" | "bonfire">("start");
  const [bonfireLit, setBonfireLit] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isHolding, setIsHolding] = useState(false);
  const [showBonfireText, setShowBonfireText] = useState(false);
  const [holdProgress, setHoldProgress] = useState(0);
  const [fogActive, setFogActive] = useState(false);
  const [showPaths, setShowPaths] = useState(false);
  const router = useRouter();
  const holdTimer = useRef<NodeJS.Timeout | null>(null);
  const holdInterval = useRef<NodeJS.Timeout | null>(null);
  const { navigate } = useTransition();
  const searchParams = useSearchParams();

  const playClick = () => {
    playSound("/sounds/dark-souls-item-get.mp3", 0.35);
  };

  const playBonfire = () => {
    playSound("/sounds/new-area2.mp3", 0.3);
  };

  const resetBonfireState = () => {
    setBonfireLit(false);
    setShowMenu(false);
    setShowBonfireText(false);
    setIsHolding(false);
    setHoldProgress(0);
    setFogActive(false);

    if (holdTimer.current) {
      clearTimeout(holdTimer.current);
      holdTimer.current = null;
    }

    if (holdInterval.current) {
      clearInterval(holdInterval.current);
      holdInterval.current = null;
    }
  };

  const handleLightBonfire = () => {
    if (bonfireLit) return;

    if (holdInterval.current) {
      clearInterval(holdInterval.current);
      holdInterval.current = null;
    }

    if (holdTimer.current) {
      clearTimeout(holdTimer.current);
      holdTimer.current = null;
    }

    setBonfireLit(true);
    setIsHolding(false);
    setHoldProgress(100);
    playBonfire();
    setShowBonfireText(true);

    setTimeout(() => {
      setShowBonfireText(false);
    }, 2000);

    setTimeout(() => {
      setShowMenu(true);
    }, 1800);
  };

  const startHolding = () => {
    if (bonfireLit) return;

    setIsHolding(true);
    setHoldProgress(0);

    holdInterval.current = setInterval(() => {
      setHoldProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 10;
      });
    }, 100);

    holdTimer.current = setTimeout(() => {
      handleLightBonfire();
    }, 1000);
  };

  const stopHolding = () => {
    setIsHolding(false);
    setHoldProgress(0);

    if (holdTimer.current) {
      clearTimeout(holdTimer.current);
      holdTimer.current = null;
    }

    if (holdInterval.current) {
      clearInterval(holdInterval.current);
      holdInterval.current = null;
    }
  };

  const playRestSound = () => {
    playSound("/sounds/bonfireLit.mp3", 0.3);
  };

  const ambientRef = useRef<HTMLAudioElement | null>(null);

useEffect(() => {
  if (!bonfireLit) return;

  const audio = new Audio("/sounds/Bonfire_Lit_Ambient_No_copyright.mp3");
  audio.loop = true;
  audio.volume = 0.1;
  ambientRef.current = audio;

  const timeout = setTimeout(() => {
    if (!(window as any).isMuted) {
      audio.play().catch(() => {});
    }
  }, 1500);

  return () => {
    clearTimeout(timeout);
    audio.pause();
    audio.currentTime = 0;
  };
}, [bonfireLit]);

  useEffect(() => {
  const state = searchParams.get("state");

  if (state === "bonfire") {
    setStage("bonfire");
    setBonfireLit(true);
    setShowMenu(false);
    setShowPaths(true);
    setShowBonfireText(false);
    setIsHolding(false);
    setHoldProgress(0);
  }
}, [searchParams]);

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white flex flex-col items-center justify-center">
      {stage === "start" && (
        <>
          <motion.h1
            className="text-5xl md:text-7xl font-[Optimus] tracking-widest text-white text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
          >
            MATEUS PITOMBEIRA
          </motion.h1>

          <motion.p
            className="mt-4 text-gray-400 font-[Optimus] text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            PORTFOLIO
          </motion.p>

          <motion.button
            onClick={() => {
              playClick();
              setStage("bonfire");
            }}
            className="mt-10 text-lg tracking-widest text-gray-300 hover:text-white transition duration-300 font-[Optimus]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            PRESS ANY KEY
          </motion.button>
        </>
      )}

      {stage === "bonfire" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            scale: bonfireLit ? 0.9 : 1,
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="relative flex min-h-screen w-full flex-col items-center justify-center"
        >
          {/* fundo unificado */}
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,140,0,0.06),transparent_28%)]" />

          {/* BONFIRE LIT central */}
          {showBonfireText && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.85, 1, 1, 1.03],
              }}
              transition={{
                duration: 2,
                times: [0, 0.2, 0.65, 1],
                ease: "easeOut",
              }}
              className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center"
            >
              <h2 className="font-[Optimus] text-5xl md:text-8xl tracking-[0.25em] text-yellow-200 drop-shadow-[0_0_20px_rgba(255,200,120,0.8)]">
                BONFIRE LIT
              </h2>
            </motion.div>
          )}

          {/* fogueira */}
          <motion.div
            onMouseDown={startHolding}
            onMouseUp={stopHolding}
            onMouseLeave={stopHolding}
            onTouchStart={startHolding}
            onTouchEnd={stopHolding}
            whileHover={!bonfireLit ? { scale: 1.04 } : {}}
            animate={
              isHolding && !bonfireLit
                ? {
                    scale: [1, 1.03, 1.01],
                  }
                : {}
            }
            transition={{ duration: 0.35 }}
            className={`relative z-10 flex cursor-pointer flex-col items-center ${
              isHolding && !bonfireLit
                ? "drop-shadow-[0_0_20px_rgba(255,140,0,0.25)]"
                : ""
            }`}
          >
            {!bonfireLit ? (
              <img
                src="/images/bonfireOFF-removebg-preview.png"
                alt="Bonfire off"
                className="w-40 md:w-56 object-contain opacity-85"
              />
            ) : (
              <motion.img
                src="/images/bonfire2.gif"
                alt="Bonfire lit"
                animate={{
                  filter: [
                    "drop-shadow(0 0 6px rgba(255,140,0,0.18))",
                    "drop-shadow(0 0 12px rgba(255,140,0,0.28))",
                    "drop-shadow(0 0 6px rgba(255,140,0,0.18))",
                  ],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-44 md:w-60 object-contain"
              />
            )}

            {!bonfireLit && (
              <p className="mt-5 font-[Optimus] text-sm tracking-[0.2em] text-gray-400">
                {isHolding ? "LIGHTING..." : "HOLD TO LIGHT BONFIRE"}
              </p>
            )}

            {!bonfireLit && (
              <div className="mt-4 w-48">
                <div className="h-1.5 w-full rounded bg-zinc-800 overflow-hidden">
                  <motion.div
                    className="h-full bg-yellow-500"
                    animate={{ width: `${holdProgress}%` }}
                    transition={{ ease: "linear", duration: 0.1 }}
                  />
                </div>
              </div>
            )}
          </motion.div>

          {/* menu sobre a mesma cena */}
          {showMenu && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-20 z-20 flex flex-col items-center"
            >
              <div className="mb-6 flex flex-col items-center gap-4 font-[Optimus] tracking-[0.15em]">
                <button
                  onClick={() => {
                    playRestSound();
                    setFogActive(true);

                    setTimeout(() => {
                      setFogActive(false);
                      setShowMenu(false);
                      setShowPaths(true);
                    }, 1200);
                  }}
                  className="text-lg md:text-2xl text-gray-200 transition hover:scale-105 hover:text-yellow-300"
                >
                  REST AT BONFIRE
                </button>

                <button
                  onClick={() => {
                    resetBonfireState();
                    setStage("start");
                  }}
                  className="text-sm text-gray-500 transition hover:text-white"
                >
                  QUIT GAME
                </button>
              </div>
            </motion.div>
          )}

          {showPaths && (
            <>
              <div className="absolute inset-0 z-20">
                {/* Projects / topo */}
                <motion.button
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.08 }}
                  className="absolute top-[18%] left-1/2 -translate-x-1/2 font-[Optimus] tracking-[0.2em] text-gray-300 transition hover:tracking-[0.3em] hover:text-yellow-300"
                  onClick={() => {
                    setTimeout(() => navigate("/projects"), 200);
                  }}
                >
                  TRAVERSE THE FOG
                </motion.button>

                {/* About / esquerda */}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.08 }}
                  className="absolute left-[12%] top-[58%] -translate-y-1/2 font-[Optimus] tracking-[0.2em] text-gray-300 transition hover:tracking-[0.3em] hover:text-yellow-300"
                  onClick={() => {
                    setTimeout(() => navigate("/about"), 200);
                  }}
                >
                  VIEW CHARACTER
                </motion.button>

                {/* Contact / direita */}
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.08 }}
                  className="absolute right-[12%] top-[58%] -translate-y-1/2 font-[Optimus] tracking-[0.2em] text-gray-300 transition hover:tracking-[0.3em] hover:text-yellow-300"
                  onClick={() => {
                    setTimeout(() => navigate("/contact"), 200);
                  }}
                >
                  SUMMON SIGN
                </motion.button>
              </div>

              {/* botão separado e centralizado */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
              >
                <button
                  className="font-[Optimus] text-sm tracking-[0.2em] text-gray-500 hover:text-white transition"
                  onClick={() => {
                    setFogActive(true);

                    setTimeout(() => {
                      setFogActive(false);
                      setShowPaths(false);
                      setShowMenu(true);
                    }, 1200);
                  }}
                >
                  LEAVE BONFIRE
                </button>
              </motion.div>
            </>
          )}

          <FogTransition active={fogActive} />
        </motion.div>
      )}
    </main>
  );
}