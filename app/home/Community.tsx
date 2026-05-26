import { DebugBg } from "@/components/features/DebugMode";
import { useMobileMode } from "@/components/features/MobileMode"; 
export default function Community() {
  const isMobileMode = useMobileMode();
  const bodyText = `Oceanea brings together players, partners, communities, and creators to build the ecosystem together. Every dive, game, exploration, and contribution unlocks rewards, expands immersive experiences, and drives humanity further into the unknown ocean frontier.`;

  return <>
    <DebugBg className={isMobileMode
      ? "relative -translate-x-1/2 left-1/2 fmt-[77/340] aspect-340/580"
      : "relative -translate-x-1/2 left-1/2 fmt-[220/1320] aspect-1320/920"}>
      <div className={isMobileMode
        ? "flex w-full flex-row items-center justify-center fg-[10/340]"
        : "flex w-full flex-row items-center justify-center fg-[24/1320]"}>
        <img
          src="/community.svg"
          alt=""
          loading="lazy"
          decoding="async"
          className={isMobileMode
            ? "absolute left-60/340 top-7/580 block w-20/340 aspect-20/20 shrink-0"
            : "block w-63/1320 aspect-63/63 shrink-0"}
        />
        <p className={isMobileMode
          ? "ft-[32/340] font-medium fls-[-0.96/340] text-center w-240/340 flh-[35/340]"
          : "ft-[60/1320] font-medium flh-[70/1320] text-center"}>Unlock the Ocean Together</p>
      </div>
      <p className={isMobileMode
        ? "fmt-[24/340] ft-[14/340] fls-[-0.42/340] text-center text-[#7D7D7D] flh-[15/340]"
        : "fmt-[18/1320] fmx-[140/1320] ft-[24/1320] flh-[30/1320] text-center text-[#7D7D7D]"}>{bodyText}</p>
      <div className={isMobileMode
        ? "relative w-full fmt-[25/340] aspect-340/360 overflow-hidden fr-[25/340]"
        : "relative w-full fmt-[40/1320] aspect-1320/600 overflow-hidden fr-[50/1920]"}>
        <img
          src="/community-back.png"
          alt=""
          loading="lazy"
          decoding="async"
          className={isMobileMode
            ? "absolute h-[120%] w-auto min-w-full left-[-80%] max-w-none top-[-5%]"
            : "absolute top-[-10%]"}
        />
      </div>
    </DebugBg>
  </>;
}
