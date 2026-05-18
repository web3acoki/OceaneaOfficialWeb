import { DebugBg } from "@/components/features/DebugMode";
import { useMobileMode } from "@/components/features/MobileMode";
import Button from "@/components/common/Button";

const titleText = `World's First Diving game
Integrated with Real-World Diving`;

const subtitleText = "Play for Free. Explore. Earn";

export default function Welcome() {
  const isMobileMode = useMobileMode();
  return <>
    <DebugBg className={isMobileMode
      ? "relative -translate-x-1/2 left-1/2 fmt-[48/340] aspect-340/480 overflow-hidden fr-[15/340]"
      : "relative -translate-x-1/2 left-1/2 fmt-[125/1320] aspect-1320/800 fr-[50/1320] overflow-hidden"}>
      <img src="/game/welcome-back.jpg" alt="" className="absolute left-0 top-0 h-full w-full object-cover"/>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
        <p className={isMobileMode
          ? "fmx-[24/340] whitespace-pre-line text-center ft-[24/340] font-medium flh-[28/340] fls-[-0.72/340]"
          : "fmx-[156/1320] whitespace-pre-line text-center ft-[64/1320] font-medium flh-[70/1320] fls-[-1.92/1320]"}>{titleText}</p>
        <p className={isMobileMode
          ? "fmt-[12/340] text-center ft-[14/340] font-medium fls-[-0.42/340]"
          : "fmt-[18/1320] text-center ft-[20/1320] font-medium fls-[-0.6/1320]"}>{subtitleText}</p>
        <Button
          text="Play Now"
          className="fmt-[30/1320] w-160/1320 aspect-160/50 mx-auto"
          onClick={() => {
            window.open("https://game.oceanea.io/", "_blank", "noopener,noreferrer");
          }}
        />
      </div>
    </DebugBg>
  </>;
}
