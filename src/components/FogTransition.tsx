"use client";

import { motion, AnimatePresence } from "framer-motion";

type Props = {
  active: boolean;
};

export default function FogTransition({ active }: Props) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[999] bg-black"
        >
          <video
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-110"
          >
            <source src="/videos/fog.mp4" type="video/mp4" />
          </video>

            <div className="absolute inset-0 overflow-hidden" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}