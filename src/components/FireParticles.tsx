"use client";

import { useEffect, useState } from "react";

export default function FireParticles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const particles = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((_, i) => (
        <span
          key={i}
          className="absolute bottom-0 w-1 h-3 bg-orange-400 opacity-70 animate-rise"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${1 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}