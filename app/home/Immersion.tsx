import LoadedImage from "@/components/common/LoadedImage";
import { DebugBg } from "@/components/features/DebugMode";
import { useMobileMode } from "@/components/features/MobileMode";

export default function Immersion() {
  const subtitleText = `Smart ocean devices, games, future immersive VR journeys, and underwater ocean parks form the four core infrastructures of the Oceanea experience network. With a unified identity, users enter the network to experience, explore, and grow within the ocean ecosystem.`;

  const isMobileMode = useMobileMode();

  const immersionCards = [
    {
      src: "/immersion-explore.png",
      title: "Oceanea Devices",
      desc: "Experience the ocean firsthand with smart devices",
    },
    {
      src: "/immersion-play.png",
      title: "Oceanea Games",
      desc: "Play games with shared progression and growth",
    },
    {
      src: "/immersion-vr.png",
      title: "Oceanea VR",
      desc: "Immerse yourself in virtual ocean worlds beyond physical limits",
    },
    {
      src: "/immersion-parks.png",
      title: "Oceanea Parks",
      desc: "Explore real underwater parks and enjoy ocean adventures",
    },
  ];

  return <>
    <DebugBg className={isMobileMode
      ? "relative -translate-x-1/2 left-1/2 fmt-[64/340] aspect-340/400"
      : "relative left-1/2 mt-[220px] h-[920px] w-[1140px] -translate-x-1/2"}>
      <div className={isMobileMode
        ? "relative w-300/340 fmx-[20/340] aspect-300/100 flex flex-col items-center justify-center"
        : "relative mx-auto flex h-[120px] w-[900px] flex-col items-center justify-center"}>
        <img
          src="/immersion-left.svg"
          alt=""
          loading="lazy"
          decoding="async"
          className={isMobileMode
            ? "pointer-events-none absolute left-0 top-0 z-0 w-22/300"
            : "absolute left-[60px] top-0 w-[36px]"}
        />
        <p className={isMobileMode
          ? "relative z-10 w-[calc(240/300*100%)] ft-[32/340] fls-[-0.96/340] flh-[35/340] text-center"
          : "absolute text-center text-[60px] font-medium leading-[70px] tracking-[-1.8px]"}>Four Ways to Enter the Ocean World</p>
        <img
          src="/immersion-right.svg"
          alt=""
          loading="lazy"
          decoding="async"
          className={isMobileMode
            ? "pointer-events-none absolute bottom-0 right-0 z-0 w-22/300"
            : "absolute bottom-0 right-[60px] w-[36px]"}
        />
      </div>
      <p className={isMobileMode
        ? "fmt-[18/340] ft-[14/340] fls-[-0.54/340] flh-[15/340] text-[#7D7D7D] text-center"
        : "mx-auto mt-[24px] w-[920px] text-center text-[24px] font-normal leading-[30px] tracking-[-0.72px] text-[#7D7D7D]"}>{subtitleText}</p>
      <div className={isMobileMode
        ? "fmt-[25/340] grid w-full grid-cols-2 fg-[10/340]"
        : "mt-[55px] flex w-full gap-[18px]"}>
        {immersionCards.map((card) => (
          <div key={card.title} className={isMobileMode
            ? "group relative aspect-165/267 w-full overflow-hidden fr-[15/340]"
            : "group relative h-[662px] w-[266px] overflow-hidden rounded-[50px]"}>
            <LoadedImage
              src={card.src}
              alt=""
              loading="lazy"
              decoding="async"
              frameClassName="absolute inset-0"
              className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-130"
            />
            <div className={isMobileMode
              ? "absolute inset-x-0 bottom-0 h-1/2 overflow-hidden bg-linear-to-b from-[rgba(255,255,255,0)] from-[1%] via-[rgba(12,12,12,0.3)] via-[38%] to-[#0C0C0C] flex flex-col items-center z-10 fr-[0_0_27/165_27/165]"
              : "absolute inset-x-0 bottom-0 z-10 flex h-[299px] flex-col items-center overflow-hidden rounded-b-[50px] bg-linear-to-b from-[rgba(255,255,255,0)] from-[1%] via-[rgba(12,12,12,0.3)] via-[38%] to-[#0C0C0C]"}>
              <p className={isMobileMode
                ? "fmt-[60/165] ft-[15/340] font-medium text-center text-white"
                : "mt-[180px] w-[210px] text-center text-[24px] font-medium leading-[normal] text-white"}>{card.title}</p>
              <p className={isMobileMode
                ? "fmt-[10/165] fmx-[8/165] ft-[9/340] fls-[-0.42/340] flh-[10/340] text-center text-white"
                : "mt-[10px] w-[220px] text-center text-[16px] leading-[20px] tracking-[-0.48px] text-white"}>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </DebugBg>
  </>;
}
