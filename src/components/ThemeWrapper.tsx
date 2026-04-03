"use client";

import { usePath } from "@/context/PathContext";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { path } = usePath();

  const backgrounds: any = {
    pyromancer: "bg-gradient-to-br from-red-900 via-black to-black",
    knight: "bg-gradient-to-br from-blue-900 via-black to-black",
    cleric: "bg-gradient-to-br from-green-900 via-black to-black",
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        path ? backgrounds[path] : "bg-black"
      }`}
    >
      {children}
    </div>
  );
}