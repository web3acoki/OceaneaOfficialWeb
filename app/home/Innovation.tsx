"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/common/Button";
import { DebugBg } from "@/components/features/DebugMode";
import { useMobileMode } from "@/components/features/MobileMode";

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
  const router = useRouter();
  const isMobileMode = useMobileMode();
  const onDiscoverXArturaClick = () => router.push("/x-artura");
  const onDiscoverXDiverClick = () => router.push("/x-diver");

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
      : "absolute left-1/2 -translate-x-1/2 top-[-135px] w-[516px]",
      description: `The world's first exoskeleton-based underwater propulsion device, redefining human movement below the surface`,
      buttonText: "Discover X-ARTURA",
      onButtonClick: onDiscoverXArturaClick,
    },
    {
      key: "diver",
      iconSrc: "/adventure.svg",
      pillLabel: "X-DIVER",
      backSrc: "/adventure-back.png",
      backImgClassName: isMobileMode 
      ? "absolute fmt-[10/340] fml-[-41/650]" 
      : "absolute left-[-35px] top-[34px]",
      description: `An evolving ocean game, bringing exploration, play, and progression into an emerging digital experience`,
      buttonText: "Discover X-DIVER",
      onButtonClick: onDiscoverXDiverClick,
    },
  ];

  return <>
    <DebugBg className={isMobileMode
      ? "relative -translate-x-1/2 left-1/2 fmt-[60/340] aspect-340/170"
      : "relative left-1/2 mt-[220px] h-[210px] w-[1140px] -translate-x-1/2"}>
      <p className={isMobileMode
        ? "font-medium ft-[32/340] fls-[-0.96/340] fmx-[70/340] text-center"
        : "text-center text-[60px] font-medium leading-[70px] tracking-[-1.8px]"}>Bringing the Vision Alive</p>
      <p className={isMobileMode
        ? "fmt-[25/340] flh-[15/340] ft-[14/340] fls-[-0.42/340] text-center text-[#7D7D7D]"
        : "mx-auto mt-[24px] w-[920px] text-center text-[24px] font-normal leading-[30px] tracking-[-0.72px] text-[#7D7D7D]"}>{bodyLine1}</p>
    </DebugBg>

    <DebugBg className={isMobileMode
      ? "relative -translate-x-1/2 left-1/2 fmt-[20/340] aspect-340/400 flex flex-col items-center fg-[20/340]"
      : "relative left-1/2 mt-[20px] flex h-[760px] w-[1140px] -translate-x-1/2 flex-row justify-center gap-[40px]"}>

      {innovationParts.map((part) => (
        <div key={part.key} className={"flex flex-1 flex-col"}>
          <div className={isMobileMode
            ? "flex flex-row justify-center fg-[8/340]"
            : "flex flex-row justify-center gap-[34px] pt-[10px]"}>
            <img
              src={part.iconSrc}
              alt=""
              loading="lazy"
              decoding="async"
              className={isMobileMode ?
                "w-20/340" :
                "w-[47px]"}
            />
            <p className={isMobileMode
              ? "ft-[15/340] fmy-[2/340] font-bold"
              : "py-[8px] text-[24px] font-bold whitespace-nowrap"}>{part.pillLabel}</p>
          </div>
          <div className={isMobileMode
            ? "relative fmt-[20/340] aspect-340/340 fr-[25/340] shadow-[0px_4px_10.3px_3px_rgba(0,0,0,0.1)] bg-[linear-gradient(180deg,rgba(245,253,255,0.46)_2.772%,#f5fdff_37.181%,#d4f1f8_71.59%)]"
            : "relative mt-[75px] h-[635px] w-[550px] overflow-visible rounded-[42px] bg-[linear-gradient(180deg,rgba(245,253,255,0.46)_2.772%,#f5fdff_37.181%,#d4f1f8_71.59%)]"}>
            <img src={part.backSrc} className={part.backImgClassName} alt="" loading="lazy" decoding="async" />
            <p className={isMobileMode
              ? "relative z-10 ft-[12/340] fmt-[240/340] fmx-[35/340] fls-[-0.36/340] text-center flh-[12/340]"
              : "relative z-10 mx-auto mt-[440px] w-[392px] text-center text-[20px] leading-[26px] tracking-[-0.6px]"}>{part.description}</p>
            <Button text={part.buttonText} className={isMobileMode
              ? "absolute fmx-[80/340] fmt-[10/340] w-180/340 aspect-180/30"
              : "absolute bottom-[20px] left-1/2 h-[50px] w-[457px] -translate-x-1/2"} textClassName="text-[20px] font-bold leading-[normal]" onClick={part.onButtonClick} />
          </div>
        </div>
      ))}
    </DebugBg>
  </>;
}
