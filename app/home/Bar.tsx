import { DebugBg } from "@/components/features/DebugMode";
import { useMobileMode } from "@/components/features/MobileMode";


export default function Bar() {
  const isMobileMode = useMobileMode();
  const barItems = [
    { src: "/frontier.svg", label: "Frontier", itemClass: "w-[94px]", imgClass: "left-[16px] top-0 h-[63px] w-[65px]", labelClass: "top-[88px] w-[94px]" },
    { src: "/immersion.svg", label: "Immersion", itemClass: "w-[121px]", imgClass: "left-[5px] top-0 h-[87px] w-[121px]", labelClass: "top-[111px] w-[112px]" },
    { src: "/innovation.svg", label: "Innovation", itemClass: "w-[120px]", imgClass: "left-[26px] top-0 h-[68px] w-[67px]", labelClass: "top-[90px] w-[120px]" },
    { src: "/adventure.svg", label: "Adventure", itemClass: "w-[114px]", imgClass: "left-[23px] top-0 h-[68px] w-[69px]", labelClass: "top-[90px] w-[114px]" },
    { src: "/community.svg", label: "Community", itemClass: "w-[119px]", imgClass: "left-[29px] top-0 h-[65px] w-[64px]", labelClass: "top-[89px] w-[119px]" },
  ];
  return <>
    <DebugBg className={isMobileMode 
      ? "relative -translate-x-1/2 left-1/2 fmt-[18/340] aspect-1320/150" 
      : "relative left-1/2 mt-[35px] h-[111px] w-[1116px] -translate-x-1/2"}>
      <div className={isMobileMode
        ? "flex h-full w-full justify-between @container-[size]"
        : "flex h-full w-full items-end gap-[135px]"}>
        {barItems.map((item) => <div key={item.label} className={isMobileMode
          ? "group flex flex-1 flex-col items-center"
          : `group relative h-[111px] shrink-0 ${item.itemClass}`}>
          <img src={item.src} alt="" className={isMobileMode
            ? "mt-[calc(8/340*100cqw)] size-[calc(20/340*100cqw)] transition-transform duration-100 ease-out group-hover:-translate-y-1"
            : `absolute max-w-none transition-transform duration-100 ease-out group-hover:-translate-y-2 ${item.imgClass}`}/>
          <p className={isMobileMode
            ? "mt-[calc(8/340*100cqw)] text-center ft-[8/340] font-medium uppercase text-0"
            : `absolute left-0 text-center text-[18px] font-medium uppercase leading-[normal] text-0 ${item.labelClass}`}>{item.label}</p>
        </div>)}
      </div>
    </DebugBg>
  </>;
}
