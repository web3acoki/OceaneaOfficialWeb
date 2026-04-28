import { DebugBg } from "../features/DebugMode";
import { useMobileMode } from "../features/MobileMode"; 
export default function Community() {
  const isMobileMode = useMobileMode();
  const bodyText = `Oceanea brings together players, channels, investors,
  community members, and product partners to grow the ecosystem. Every action,
  from diving and playing to investing and co-creating, earns rewards, expands immersive experiences,
  and advances the exploration of the ocean's unknown.`;

  return <>
    <DebugBg className={isMobileMode
      ? "relative -translate-x-1/2 left-1/2 fmt-[77/340] aspect-340/580"
      : "relative -translate-x-1/2 left-1/2 fmt-[220/1320] aspect-1320/920"}>
      <div className={isMobileMode
        ? "flex w-full flex-row items-center justify-center fg-[10/340]"
        : "flex w-full flex-row items-center justify-center fg-[24/1320]"}>
        <img src="/community.svg" className={isMobileMode 
          ? "absolute left-60/340 top-7/580 block w-20/340 aspect-20/20 shrink-0" 
          : "block w-63/1320 aspect-63/63 shrink-0"} />
        <p className={isMobileMode
          ? "ft-[32/340] font-medium fls-[-0.96/340] text-center w-240/340 flh-[35/340]"
          : "ft-[96/1320] font-medium fls-[-2.88/1320] text-center"}>Unlock the Ocean Together</p>
      </div>
      <p className={isMobileMode
        ? "fmt-[24/340] ft-[14/340] fls-[-0.42/340] text-center text-[#626262] flh-[15/340]"
        : "fmt-[20/1320] ft-[32/1320] fls-[-0.84/1320] text-center text-[#626262]"}>{bodyText}</p>
      <div className={isMobileMode
        ? "relative w-full fmt-[25/340] aspect-340/360 overflow-hidden fr-[25/340]"
        : "relative w-full fmt-[40/1320] aspect-1320/600 overflow-hidden fr-[50/1920]"}>
        <img
          src="/community-back.png"
          className={isMobileMode
            ? "absolute h-[120%] w-auto min-w-full left-[-80%] max-w-none top-[-5%]"
            : "absolute top-[-10%]"}
        />
      </div>
    </DebugBg>
  </>;
}
