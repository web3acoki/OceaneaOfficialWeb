"use client";

import { DebugModeProvider } from "../../components/features/DebugMode";
import { MobileModeProvider, useMobileMode } from "../../components/features/MobileMode";
import Header from "../../components/sections/Header";
import Welcome from "./Welcome";
import Bar from "./Bar";
import Frotier from "./Frotier";
import Immersion from "./Immersion";
import Innovation from "./Innovation";
import Community from "./Community";
import Real from "./Real";
import Partner from "./Partner";
import News from "./News";
import Footer from "../../components/sections/Footer";

function HomeMain() {
  const isMobileMode = useMobileMode();
  return (
    <div
      className={
        isMobileMode
          ? "relative -translate-x-1/2 left-1/2 w-[min(calc(100vw-40px),1320px)] @container-[size]"
          : "relative -translate-x-1/2 left-1/2 w-[min(calc(100vw-80px),1320px)] @container-[size]"
      }>
      <Welcome />
      <Bar />
      <Frotier />
      <Immersion />
      <Innovation />
      <Community />
      <Real />
      <Partner />
      <News />
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <DebugModeProvider>
      <MobileModeProvider maxWidthPx={700}>
        <Header />
        <HomeMain />
      </MobileModeProvider>
    </DebugModeProvider>
  );
}
