"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Quest = {
  title: string;
  description: string;
  status: "locked" | "inProgress" | "completed";
  xp: number;
};

const XPContext = createContext<any>(null);

export function XPProvider({ children }: any) {
  const [quests, setQuests] = useState<Quest[]>([]);
  const [xp, setXP] = useState(0);

  useEffect(() => {
    const savedData = localStorage.getItem("gameData");

    if (savedData) {
      const parsed = JSON.parse(savedData);
      setQuests(parsed.quests);
      setXP(parsed.xp);
    } else {
      const initialQuests: Quest[] = [
        {
          title: "Portfolio Website",
          description: "Create a personal portfolio using Next.js",
          status: "inProgress",
          xp: 500,
        },
        {
          title: "UI Animation System",
          description: "Build animated UI inspired by games",
          status: "locked",
          xp: 300,
        },
      ];

      setQuests(initialQuests);
      setXP(0);
      localStorage.setItem(
        "gameData",
        JSON.stringify({ quests: initialQuests, xp: 0 })
      );
    }
  }, []);

  const completeQuest = (index: number) => {
    const updated = [...quests];

    if (updated[index].status !== "completed") {
      updated[index].status = "completed";

      // libera próxima quest
      if (updated[index + 1]) {
        updated[index + 1].status = "inProgress";
      }

      const newXP = xp + updated[index].xp;

      setQuests(updated);
      setXP(newXP);

      localStorage.setItem(
        "gameData",
        JSON.stringify({ quests: updated, xp: newXP })
      );
    }
  };

  return (
    <XPContext.Provider value={{ xp, quests, completeQuest }}>
      {children}
    </XPContext.Provider>
  );
}

export function useXP() {
  return useContext(XPContext);
}