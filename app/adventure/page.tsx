"use client";

import { DebugModeProvider } from "../../components/features/DebugMode";
import { MobileModeProvider } from "../../components/features/MobileMode";
import Header from "../../components/sections/Header";
import Footer from "../../components/sections/Footer";
import Welcome from "./Welcome";
import Play from "./Play";
import Diving from "./Diving";

export default function Adventure() {
  return <>
    <DebugModeProvider>
      <MobileModeProvider maxWidthPx={700}>
        <Header />
        <div className="relative -translate-x-1/2 left-1/2 w-[min(calc(100vw-80px),1320px)] @container-[size]">
          <Welcome />
          <Play />
          <Diving />
          <Footer />
        </div>
      </MobileModeProvider>
    </DebugModeProvider>
  </>;
}
