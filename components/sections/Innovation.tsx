"use client";

import Button from "../common/Button";
import { DebugBg } from "../features/DebugMode";
import { useMobileMode } from "../features/MobileMode";

type InnovationPart = {
  key: string;
  iconSrc: string;
  pillLabel: string;
  backSrc: string;
  backImgClassName: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
};

export default function Innovation() {
  const isMobileMode = useMobileMode();
  const onDiscoverXDiverClick = () => window.open("https://game.oceanea.io/", "_blank");

  const bodyLine1 = `Oceanea is already coming to life in the real world. From next-generation underwater mobility to
immersive ocean gameplay, what once was vision is now becoming reality`;

  const innovationParts: InnovationPart[] = [
    {
      key: "artura",
      iconSrc: "/innovation.svg",
      pillLabel: "X-ARTURA",
      backSrc: "/innovation-back.png",
      backImgClassName: isMobileMode 
      ? "absolute left-1/2 -translate-x-1/2 fmt-[-75/340] w-275/340" 
      : "absolute left-1/2 -translate-x-1/2 fmt-[-160/650] w-610/650",
      description: `The world's first exoskeleton-based underwater propulsion device, redefining human movement below the surface`,
      buttonText: "Discover X-ARTURA",
    },
    {
      key: "diver",
      iconSrc: "/adventure.svg",
      pillLabel: "X-DIVER",
      backSrc: "/adventure-back.png",
      backImgClassName: isMobileMode 
      ? "absolute fmt-[10/340] fml-[-41/650]" 
      : "absolute fmt-[40/650] fml-[-41/650]",
      description: `An evolving ocean game, bringing exploration, play, and progression into an emerging digital experience`,
      buttonText: "Discover X-DIVER",
      onButtonClick: onDiscoverXDiverClick,
    },
  ];

  return <>
    <DebugBg className={isMobileMode
      ? "relative -translate-x-1/2 left-1/2 fmt-[60/340] aspect-340/170"
      : "relative -translate-x-1/2 left-1/2 fmt-[220/1320] aspect-1320/270"}>
      <p className={isMobileMode
        ? "font-medium ft-[32/340] fls-[-0.96/340] fmx-[70/340] text-center"
        : "font-medium ft-[96/1320] fls-[-2.88/1320] flh-[120/1320] text-center"}>Bringing the Vision Alive</p>
      <p className={isMobileMode
        ? "fmt-[25/340] flh-[15/340] ft-[14/340] fls-[-0.42/340] text-center text-[#626262]"
        : "fmx-[200/1320] fmt-[31/1320] ft-[28/1320] fls-[-0.84/1320] text-center text-[#626262]"}>{bodyLine1}</p>
    </DebugBg>

    <DebugBg className={isMobileMode
      ? "relative -translate-x-1/2 left-1/2 fmt-[20/340] aspect-340/400 flex flex-col items-center fg-[20/340]"
      : "relative -translate-x-1/2 left-1/2 fmt-[20/1320] aspect-1320/920 flex flex-row justify-center fg-[20/1320]"}>

      {innovationParts.map((part) => (
        <div key={part.key} className={"flex flex-1 flex-col"}>
          <div className={isMobileMode
            ? "flex flex-row justify-center fg-[8/340]"
            : "flex flex-row justify-center fg-[41/1320] fmt-[10/650]"}>
            <img src={part.iconSrc} className={isMobileMode ? 
              "w-20/340" : 
              "w-55/650"}/>
            <p className={isMobileMode
              ? "ft-[15/340] fmy-[2/340] font-bold"
              : "ft-[36/1320] fmy-[10/650] font-bold whitespace-nowrap"}>{part.pillLabel}</p>
          </div>
          <div className={isMobileMode
            ? "relative fmt-[20/340] aspect-340/340 fr-[25/340] shadow-[0px_4px_10.3px_3px_rgba(0,0,0,0.1)] bg-[linear-gradient(180deg,rgba(245,253,255,0.46)_2.772%,#f5fdff_37.181%,#d4f1f8_71.59%)]"
            : "relative fmt-[90/650] aspect-650/750 fr-[50/1320] shadow-[0px_4px_10.3px_3px_rgba(0,0,0,0.1)] bg-[linear-gradient(180deg,rgba(245,253,255,0.46)_2.772%,#f5fdff_37.181%,#d4f1f8_71.59%)]"}>
            <img src={part.backSrc} className={part.backImgClassName} alt="" />
            <p className={isMobileMode
              ? "relative z-10 ft-[12/340] fmt-[240/340] fmx-[35/340] fls-[-0.36/340] text-center flh-[12/340]"
              : "relative z-10 ft-[24/1320] fmt-[520/650] fmx-[80/650] fls-[-0.72/1320] text-center"}>{part.description}</p>
            <Button text={part.buttonText} className={isMobileMode
              ? "absolute fmx-[80/340] fmt-[10/340] w-180/340 aspect-180/30"
              : "absolute fmx-[50/650] fmt-[20/650] w-550/650 aspect-550/60"} onClick={part.onButtonClick} />
          </div>
        </div>
      ))}
    </DebugBg>
  </>;
}
