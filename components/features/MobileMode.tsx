"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

const MobileModeContext = createContext(false);

export const useMobileMode = () => useContext(MobileModeContext);

type MobileModeProviderProps = {
  children: ReactNode;
  maxWidthPx?: number;
};

export function MobileModeProvider({ children, maxWidthPx = 700 }: MobileModeProviderProps) {
  const query = useMemo(() => `(max-width: ${Math.max(0, Math.floor(maxWidthPx - 1))}px)`, [maxWidthPx]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setIsMobile(mql.matches);
    onChange();

    // Safari < 14 fallback
    if ("addEventListener" in mql) {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    }
    // eslint-disable-next-line deprecation/deprecation
    mql.addListener(onChange);
    // eslint-disable-next-line deprecation/deprecation
    return () => mql.removeListener(onChange);
  }, [query]);

  return <MobileModeContext.Provider value={isMobile}>{children}</MobileModeContext.Provider>;
}

