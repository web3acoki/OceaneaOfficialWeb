import { DebugBg } from "../features/DebugMode";
import { useMobileMode } from "../features/MobileMode";


export default function Bar() {
  const isMobileMode = useMobileMode();
  const barItems = [
    { src: "/frontier.svg", label: "Frontier" },
    { src: "/innovation.svg", label: "Innovation" },
    { src: "/adventure.svg", label: "Adventure" },
    { src: "/immersion.svg", label: "Immersion" },
    { src: "/community.svg", label: "Community" },
  ];
  return <>
    <DebugBg className={isMobileMode 
      ? "relative -translate-x-1/2 left-1/2 fmt-[18/340] aspect-1320/150" 
      : "relative -translate-x-1/2 left-1/2 fmt-[65/1320] aspect-1320/150"}>
      <div className="flex w-full justify-between @container-[size]">
        {barItems.map((item) => <div key={item.label} className="group flex flex-col items-center">
          <img src={item.src} alt="" className="h-[7cqw] w-full transition-transform duration-100 ease-out group-hover:-translate-y-3"/>
          <p className={isMobileMode
            ? "fmt-[156/1320] text-center ft-[8/340] font-medium uppercase text-0"
            : "fmt-[156/1320] text-center ft-[24/1320] font-medium uppercase text-0"}>{item.label}</p>
        </div>)}
      </div>
    </DebugBg>
  </>;
}
