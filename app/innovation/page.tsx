"use client";

import { DebugModeProvider } from "../../components/features/DebugMode";
import { MobileModeProvider } from "../../components/features/MobileMode";
import Header from "../../components/sections/Header";
import Footer from "../../components/sections/Footer";
import Welcome from "./Welcome";
import Device from "./Device";
import Experience from "./Experience";
import World from "./World";

export default function InnovationPage() {
  return (
    <DebugModeProvider>
      <MobileModeProvider maxWidthPx={700}>
        <Header />
        <div className="relative -translate-x-1/2 left-1/2 w-[min(calc(100vw-80px),1320px)] @container-[size]">
          <Welcome />
          <Device />
          <Experience />
          <World />
          <Footer />
        </div>
      </MobileModeProvider>
    </DebugModeProvider>
  );
}
