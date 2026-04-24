"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

const DebugModeContext = createContext(false);

export const useDebugMode = () => useContext(DebugModeContext);

type DebugModeProviderProps = {
  children: ReactNode;
};

type DebugBgProps = {
  className: string;
  children: ReactNode;
  bgClassName?: string;
};

export function DebugModeProvider({ children }: DebugModeProviderProps) {
  const [showPathDebug, setShowPathDebug] = useState(false);
  const keyBufferRef = useRef("");

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) return;

      const key = event.key.toUpperCase();
      if (key.length !== 1 || key < "A" || key > "Z") return;

      if (key === "D" && showPathDebug) {
        setShowPathDebug(false);
        keyBufferRef.current = "";
        return;
      }

      const next = (keyBufferRef.current + key).slice(-5);
      keyBufferRef.current = next;
      if (next === "DEBUG") {
        setShowPathDebug(true);
        keyBufferRef.current = "";
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showPathDebug]);

  return <DebugModeContext.Provider value={showPathDebug}>{children}</DebugModeContext.Provider>;
}

export function DebugBg({ className, children, bgClassName = "bg-amber-50" }: DebugBgProps) {
  const enabled = useDebugMode();
  return <div className={`${className} ${enabled ? bgClassName : ""}`.trim()}>{children}</div>;
}
