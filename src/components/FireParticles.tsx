"use client";

import { useEffect, useState } from "react";

export default function FireParticles({ path }: { path: string | null }) {
  const [mounted, setMounted] = useState(false);
  const getColor = () => {
    switch (path) {
      case "pyromancer":
        return "bg-red-500";
      case "knight":
        return "bg-blue-500";
      case "cleric":
        return "bg-green-500";
      default:
        return "bg-orange-400";
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const particles = Array.from({ length: 6 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((_, i) => (
        <span
          key={i}
          className={`absolute bottom-0 w-1 h-3 ${getColor()} opacity-70 animate-rise`}
          
          style={{
            left: `${20 + Math.random() * 60}%`,
            animationDuration: `${1.5 + Math.random() * 2}s`,
            animationDelay: `${Math.random() * 0.5}s`,
            transform: `scale(${0.5 + Math.random()})`,
          }}
        />
      ))}
    </div>
  );
}