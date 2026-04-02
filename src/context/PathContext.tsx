"use client";

import { createContext, useContext, useState } from "react";

type PathType = "frontend" | "solver" | "creative" | null;

type PathContextType = {
  path: PathType;
  setPath: (path: PathType) => void;
};

const PathContext = createContext<PathContextType | undefined>(undefined);

export function PathProvider({ children }: { children: React.ReactNode }) {
  const [path, setPath] = useState<PathType>(null);

  return (
    <PathContext.Provider value={{ path, setPath }}>
      {children}
    </PathContext.Provider>
  );
}

export function usePath() {
  const context = useContext(PathContext);

  if (!context) {
    throw new Error("usePath must be used within PathProvider");
  }

  return context;
}