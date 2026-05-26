import { DebugBg } from "@/components/features/DebugMode";
import { useMobileMode } from "@/components/features/MobileMode";
import AdventureButton from "./AdventureButton";

const titleText = `World's First Diving game
Integrated with Real-World Diving`;

const subtitleText = "Play for Free. Explore. Earn";

export default function Welcome() {
  const isMobileMode = useMobileMode();
  const displayTitleText = isMobileMode
    ? `World's First Diving game
Integrated with
Real-World Diving`
    : titleText;
  return <>
    <DebugBg className={isMobileMode
      ? "relative -translate-x-1/2 left-1/2 fmt-[48/340] aspect-340/480 overflow-hidden fr-[15/340]"
      : "relative -translate-x-1/2 left-1/2 fmt-[125/1320] aspect-1140/800 w-[min(calc(100vw-80px),1140px)] fr-[50/1320] overflow-hidden"}>
      <img src="/game/welcome-back.jpg" alt="" className="absolute left-0 top-0 h-full w-full object-cover"/>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
        <p className={isMobileMode
          ? "w-[calc(260/340*100%)] min-w-0 whitespace-pre-line text-center ft-[19/340] font-medium flh-[23/340]"
          : "fmx-[156/1320] whitespace-pre-line text-center ft-[64/1320] font-medium flh-[70/1320] fls-[-1.92/1320]"}>{displayTitleText}</p>
        <p className={isMobileMode
          ? "fmt-[12/340] w-[calc(250/340*100%)] min-w-0 text-center ft-[12/340] font-medium flh-[15/340]"
          : "fmt-[18/1320] text-center ft-[20/1320] font-medium fls-[-0.6/1320]"}>{subtitleText}</p>
        <AdventureButton
          className={isMobileMode
            ? "fmt-[20/340] w-82/340 aspect-82/28 mx-auto"
            : "fmt-[24/1320] w-90/1320 aspect-90/38 mx-auto"}
          onClick={() => {
            window.open("https://game.oceanea.io/", "_blank", "noopener,noreferrer");
          }}
        />
      </div>
    </DebugBg>
  </>;
}
