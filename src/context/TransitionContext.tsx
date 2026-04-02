"use client";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

type TransitionContextType = {
  navigate: (path: string) => void;
};

const TransitionContext = createContext<TransitionContextType | null>(null);

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [transitioning, setTransitioning] = useState(false);
  const [message, setMessage] = useState("Entering Area...");

  const navigate = (path: string) => {
    const messages: any = {
      "/": "Returning to Bonfire...",
      "/about": "Viewing Character...",
      "/projects": "Traveling to...",
      "/contact": "Summoning...",
    };

    setMessage(messages[path] || "Entering Area...");
    setTransitioning(true);

    setTimeout(() => {
      router.push(path);

      setTimeout(() => {
        setTransitioning(false);
      }, 800);
    }, 800);
  };

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}

      <AnimatePresence>
        {transitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black flex items-center justify-center z-[999]"
          >
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-white text-3xl tracking-widest"
            >
              {message}
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  const context = useContext(TransitionContext);
  if (!context) throw new Error("useTransition must be used within provider");
  return context;
}