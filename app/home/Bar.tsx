import { DebugBg } from "@/components/features/DebugMode";
import { useMobileMode } from "@/components/features/MobileMode";


export default function Bar() {
  const isMobileMode = useMobileMode();
  const barItems = [
    { src: isMobileMode ? "/figma/mobile-home/frontier.svg" : "/frontier.svg", label: "Frontier", mobileIconClass: "h-[calc(21/362*100cqw)] w-[calc(22/362*100cqw)]" },
    { src: isMobileMode ? "/figma/mobile-home/immersion.svg" : "/immersion.svg", label: "Immersion", mobileIconClass: "h-[calc(22/362*100cqw)] w-[calc(24/362*100cqw)]" },
    { src: isMobileMode ? "/figma/mobile-home/innovation.svg" : "/innovation.svg", label: "Innovation", mobileIconClass: "h-[calc(22/362*100cqw)] w-[calc(21/362*100cqw)]" },
    { src: isMobileMode ? "/figma/mobile-home/adventure.svg" : "/adventure.svg", label: "Adventure", mobileIconClass: "size-[calc(22/362*100cqw)]" },
    { src: isMobileMode ? "/figma/mobile-home/community.svg" : "/community.svg", label: "Community", mobileIconClass: "size-[calc(21/362*100cqw)]" },
  ];
  return <>
    <DebugBg className={isMobileMode 
      ? "relative left-1/2 fmt-[23/362] h-[50px] w-full -translate-x-1/2 @container-[size]" 
      : "relative left-1/2 mt-[35px] h-[111px] w-[1116px] -translate-x-1/2"}>
      <div className={isMobileMode
        ? "flex h-full w-full items-start justify-between px-[calc(8/362*100cqw)]"
        : "grid h-full w-full grid-cols-5 items-start"}>
        {barItems.map((item) => <div key={item.label} className={isMobileMode
          ? "group flex w-[calc(55/362*100cqw)] flex-col items-center"
          : "group flex h-[111px] flex-col items-center"}>
          <img src={item.src} alt="" className={isMobileMode
            ? `max-w-none object-contain transition-transform duration-100 ease-out group-hover:-translate-y-1 ${item.mobileIconClass}`
            : "h-[64px] w-[64px] max-w-none object-contain transition-transform duration-100 ease-out group-hover:-translate-y-2"}/>
          <p className={isMobileMode
            ? "mt-[calc(7/362*100cqw)] text-center text-[clamp(7px,2.21cqw,8px)] font-medium uppercase leading-none text-0"
            : "mt-[18px] text-center text-[18px] font-medium uppercase leading-[normal] text-0"}>{item.label}</p>
        </div>)}
      </div>
    </DebugBg>
  </>;
}
