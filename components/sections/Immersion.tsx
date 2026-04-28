import { DebugBg } from "../features/DebugMode";
import { useMobileMode } from "../features/MobileMode";

export default function Immersion() {
  const subtitleText = `Oceanea is transforming underwater entertainment with a four-in-one and multi-IP guided
  approach.One unified experience across real and virtual worlds, unlocking new ways to explore,
  play, and grow`;

  const isMobileMode = useMobileMode();

  const immersionCards = [
    {
      src: "/immersion-explore.png",
      title: "Oceanea Explore",
      desc: "Experience the ocean in real waters with smart devices",
    },
    {
      src: "/immersion-play.png",
      title: "Oceanea Play",
      desc: "Engage through games with shared progression",
    },
    {
      src: "/immersion-vr.png",
      title: "Oceanea VR",
      desc: "Immerse in virtual ocean worlds beyond physical limits",
    },
    {
      src: "/immersion-parks.png",
      title: "Oceanea Parks",
      desc: "Enter real underwater parks and enjoy ocean adventures",
    },
  ];

  return <>
    <DebugBg className={isMobileMode
      ? "relative -translate-x-1/2 left-1/2 fmt-[64/340] aspect-340/400"
      : "relative -translate-x-1/2 left-1/2 fmt-[220/1320] aspect-1320/920"}>
      <div className={isMobileMode
        ? "relative w-220/340 fmx-[56/340] aspect-220/100 flex flex-col items-center justify-center"
        : "relative w-1120/1320 fmx-[100/1320] aspect-1120/150 flex flex-col items-center justify-center "}>
        <img src="/immersion-left.svg" className={isMobileMode
          ? "absolute top-0 left-0 w-22/220"
          : "absolute top-0 left-0 w-45/1120"}/>
        <p className={isMobileMode
          ? "absolute ft-[32/340] fls-[-0.96/340] flh-[35/340] text-center"
          : "absolute ft-[96/1320] font-medium fls-[-2.88/1320] text-center "}>Enter The Oceanverse</p>
        <img src="/immersion-right.svg" className={isMobileMode
          ? "absolute bottom-0 right-0 w-22/220"
          : "absolute bottom-0 right-0 w-45/1120"}/>
      </div>
      <p className={isMobileMode
        ? "fmt-[18/340] ft-[14/340] fls-[-0.54/340] flh-[15/340] text-[#626262] text-center"
        : "fmt-[18/1320] ft-[28/1320] aspect-1320/119 fls-[-0.96/1320] text-[#626262] text-center"}>{subtitleText}</p>
      <div className={isMobileMode
        ? "fmt-[25/340] grid w-full grid-cols-2 fg-[10/340]"
        : "fmt-[30/1320] flex w-full justify-between"}>
        {immersionCards.map((card) => (
          <div key={card.title} className={isMobileMode
            ? "group relative aspect-165/267 w-full overflow-hidden fr-[15/340] shadow-[0px_4px_6px_rgba(0,0,0,0.10)]"
            : "group relative aspect-314/600 w-314/1320 overflow-hidden fr-[50/1320] shadow-[3px_6px_7.5px_rgba(0,0,0,0.20)]"}>
            <img src={card.src} className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-130"/>
            <div className="absolute bottom-[0%] h-[50%] from-[8.917%] from-[rgba(255,255,255,0)] overflow-clip size-full to-white via-[38.014%] via-[rgba(255,255,255,0.5)] bg-linear-to-b flex flex-col items-center z-10">
              <p className={isMobileMode
                ? "fmt-[60/165] ft-[15/340] font-medium text-center"
                : "fmt-[140/300] ft-[32/1320] font-medium text-center"}>{card.title}</p>
              <p className={isMobileMode
                ? "fmt-[10/165] fmx-[8/165] ft-[9/340] fls-[-0.42/340] flh-[10/340] text-center"
                : "fmt-[10/300] fmx-[35/300] ft-[24/1320] fls-[-0.72/1320] flh-[25/1320] text-[#626262] text-center"}>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </DebugBg>
  </>;
}