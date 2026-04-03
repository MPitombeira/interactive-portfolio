"use client";

import { useEffect, useState } from "react";

export default function BonfireSmoke() {
  const [smoke, setSmoke] = useState<any[]>([]);

  useEffect(() => {
    const generated = [...Array(5)].map(() => ({
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
      scale: 0.5 + Math.random(),
      left: 20 + Math.random() * 60,
    }));

    setSmoke(generated);
  }, []);

  return (
    <div className="absolute bottom-10 flex gap-2 pointer-events-none">
      {smoke.map((s, i) => (
        <span
          key={i}
          className="w-4 h-4 bg-gray-400 rounded-full opacity-20 animate-smoke absolute"
          style={{
            left: `${s.left}%`,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
            transform: `scale(${s.scale})`,
          }}
        />
      ))}
    </div>
  );
}