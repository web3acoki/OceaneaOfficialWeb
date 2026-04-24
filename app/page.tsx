"use client";

import { DebugModeProvider } from "../components/features/DebugMode";
import Header from "../components/sections/Header";
import Welcome from "../components/sections/Welcome";
import Bar from "../components/sections/Bar";
import Frotier from "../components/sections/Frotier";
import Immersion from "../components/sections/Immersion";
import Innovation from "../components/sections/Innovation";
import Community from "../components/sections/Community";
import Real from "../components/sections/Real";
import Partner from "../components/sections/Partner";
import News from "../components/sections/News";
import Footer from "../components/sections/Footer";

export default function Home() {
  return <>
    <DebugModeProvider>
      <Header />
      <div className="relative -translate-x-1/2 left-1/2 w-[min(calc(100vw-80px),1320px)] @container-[size]">
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
    </DebugModeProvider>
  </>;
}
