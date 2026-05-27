import { DebugBg } from "@/components/features/DebugMode";
import { useMobileMode } from "@/components/features/MobileMode";


export default function Bar() {
  const isMobileMode = useMobileMode();
  const barItems = [
    { src: "/frontier.svg", label: "Frontier" },
    { src: "/immersion.svg", label: "Immersion" },
    { src: "/innovation.svg", label: "Innovation" },
    { src: "/adventure.svg", label: "Adventure" },
    { src: "/community.svg", label: "Community" },
  ];
  return <>
    <DebugBg className={isMobileMode 
      ? "relative -translate-x-1/2 left-1/2 fmt-[18/340] aspect-1320/150" 
      : "relative left-1/2 mt-[35px] h-[111px] w-[1116px] -translate-x-1/2"}>
      <div className={isMobileMode
        ? "flex h-full w-full justify-between @container-[size]"
        : "grid h-full w-full grid-cols-5 items-start"}>
        {barItems.map((item) => <div key={item.label} className={isMobileMode
          ? "group flex flex-1 flex-col items-center"
          : "group flex h-[111px] flex-col items-center"}>
          <img src={item.src} alt="" className={isMobileMode
            ? "mt-[calc(8/340*100cqw)] size-[calc(20/340*100cqw)] transition-transform duration-100 ease-out group-hover:-translate-y-1"
            : "h-[64px] w-[64px] max-w-none object-contain transition-transform duration-100 ease-out group-hover:-translate-y-2"}/>
          <p className={isMobileMode
            ? "mt-[calc(8/340*100cqw)] text-center ft-[8/340] font-medium uppercase text-0"
            : "mt-[18px] text-center text-[18px] font-medium uppercase leading-[normal] text-0"}>{item.label}</p>
        </div>)}
      </div>
    </DebugBg>
  </>;
}
