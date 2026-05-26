import Button from "@/components/common/Button";
import { DebugBg } from "@/components/features/DebugMode";
import { useMobileMode } from "@/components/features/MobileMode";

export default function Diving() {
  const isMobileMode = useMobileMode();

  const cardBlocks = [
    {
      title: "Map Unlocking",
      body: "Expand with the real diving network and unlock new underwater territories.",
      lines: [
        { part: "body", className: "text-right fml-[750/1320] ft-[20/1320] font-medium fls-[-0.6/1320] text-[#626262] flh-[25/1320]" },
        { part: "title", className: "text-right ft-[36/1320] font-medium fmt-[12/1320]" },
      ],
    },
    {
      title: "Ocean Governance",
      body: "Participate in open ocean governance and earn ecosystem rewards.",
      lines: [
        { part: "body", className: "text-left fmr-[750/1320] ft-[20/1320] font-medium fls-[-0.6/1320] text-[#626262] flh-[25/1320]" },
        { part: "title", className: "text-left ft-[36/1320] font-medium  fmt-[12/1320]" },
      ],
    },
    {
      title: "Fishing Arena",
      body: "Challenge the world's best hunters in thrilling fishing battles.",
      lines: [
        { part: "title", className: "text-right ft-[36/1320] font-medium" },
        { part: "body", className: "text-right fml-[750/1320] fmt-[12/1320] ft-[20/1320] font-medium fls-[-0.6/1320] text-[#626262] flh-[25/1320]" },
      ],
    },
    {
      title: "Diving Social",
      body: "Bridge virtual and real diving communities with lasting social connections.",
      lines: [
        { part: "title", className: "text-left ft-[36/1320] font-medium " },
        { part: "body", className: "text-left fmr-[750/1320] fmt-[12/1320] ft-[20/1320] font-medium fls-[-0.6/1320] text-[#626262] flh-[25/1320]" },
      ],
    },
  ];

  const mobileDivingCards = (
    <div
      className="relative left-1/2 fmt-[24/340] aspect-340/360 w-full -translate-x-1/2 overflow-hidden fr-[25/340] shadow-md"
      style={{
        background:
          "linear-gradient(180deg, rgba(22, 64, 114, 0.08) 0%, rgba(247, 252, 254, 0.78) 42%, rgba(255, 255, 255, 1) 62%, rgba(22, 64, 114, 0.18) 100%)",
      }}
    >
      <img src="/game/diving/diving-img-5.png" alt="" className="pointer-events-none absolute left-[-15%] top-[-3%] w-[44%] max-w-none select-none" />
      <img src="/game/diving/diving-002-1.png" alt="" className="pointer-events-none absolute right-[-12%] top-[2%] w-[38%] max-w-none select-none" />
      <img src="/game/diving/diving-002-2.png" alt="" className="pointer-events-none absolute left-[43%] top-[5%] w-[20%] max-w-none select-none" />
      <img src="/game/diving/diving-object.png" alt="" className="pointer-events-none absolute bottom-[-4%] left-[-8%] w-[34%] max-w-none select-none" />
      <img src="/game/diving/diving-img-4.png" alt="" className="pointer-events-none absolute bottom-[-6%] right-[-10%] w-[42%] max-w-none select-none" />

      <div className="relative z-10 grid grid-cols-2 gap-x-[10px] gap-y-[18px] px-[22px] pt-[104px] text-[#0c0c0c]">
        {cardBlocks.map((block, i) => (
          <div key={block.title} className={i % 2 === 0 ? "text-right" : "text-left"}>
            <p className="text-[15px] font-medium leading-[17px]">{block.title}</p>
            <p className="mt-[6px] text-[9px] font-normal leading-[11px] text-[#626262]">
              {block.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const desktopDivingCards = (
    <div className="relative mx-auto aspect-620/710 w-[calc(620/1140*100%)] overflow-visible @container-[size]">
      <div
        className="absolute inset-0 overflow-hidden rounded-[calc(34/620*100cqw)] shadow-md"
        style={{
          background:
            "linear-gradient(180deg, rgba(22, 64, 114, 0.1) 0%, rgba(247, 252, 254, 0.76) 42%, rgba(255, 255, 255, 1) 61%, rgba(22, 64, 114, 0.2) 100%)",
        }}
      />

      <img src="/game/diving/diving-img-5.png" alt="" className="pointer-events-none absolute left-[calc(-72/620*100cqw)] top-[calc(-24/620*100cqw)] z-20 w-[calc(302/620*100cqw)] max-w-none select-none" />
      <img src="/game/diving/diving-002-1.png" alt="" className="pointer-events-none absolute right-[calc(-72/620*100cqw)] top-[calc(-18/620*100cqw)] z-20 w-[calc(232/620*100cqw)] max-w-none select-none" />
      <img src="/game/diving/diving-002-2.png" alt="" className="pointer-events-none absolute left-[calc(326/620*100cqw)] top-[calc(130/620*100cqw)] z-20 w-[calc(86/620*100cqw)] max-w-none select-none opacity-58" />
      <img src="/game/diving/diving-object.png" alt="" className="pointer-events-none absolute bottom-[calc(78/620*100cqw)] left-[calc(0/620*100cqw)] z-20 w-[calc(178/620*100cqw)] max-w-none select-none" />
      <img src="/game/diving/diving-img-4.png" alt="" className="pointer-events-none absolute bottom-[calc(-30/620*100cqw)] right-[calc(-122/620*100cqw)] z-20 w-[calc(282/620*100cqw)] max-w-none select-none" />

      <FeatureBlock body={cardBlocks[0].body} title={cardBlocks[0].title} bodyFirst className="left-[calc(110/620*100cqw)] top-[calc(204/620*100cqw)]" />
      <FeatureBlock body={cardBlocks[1].body} title={cardBlocks[1].title} bodyFirst className="left-[calc(352/620*100cqw)] top-[calc(204/620*100cqw)]" />
      <FeatureBlock body={cardBlocks[2].body} title={cardBlocks[2].title} className="left-[calc(110/620*100cqw)] top-[calc(324/620*100cqw)]" />
      <FeatureBlock body={cardBlocks[3].body} title={cardBlocks[3].title} className="left-[calc(352/620*100cqw)] top-[calc(324/620*100cqw)]" />

      <div className="absolute left-1/2 top-[calc(238/620*100cqw)] z-30 h-[calc(146/620*100cqw)] w-px -translate-x-1/2 bg-[rgba(169,169,169,0.5)]" />
      <div className="absolute left-1/2 top-[calc(311/620*100cqw)] z-30 h-px w-[calc(116/620*100cqw)] -translate-x-1/2 bg-[rgba(169,169,169,0.5)]" />
    </div>
  );

  return <>
    <DebugBg className={isMobileMode
      ? "relative -translate-x-1/2 left-1/2 fmt-[48/340] "
      : "relative -translate-x-1/2 left-1/2 fmt-[125/1320]"}>
      <p className={isMobileMode
        ? "mx-auto w-[calc(260/340*100%)] min-w-0 ft-[22/340] font-medium flh-[27/340] text-center"
        : "ft-[36/1320] font-medium flh-[43/1320] text-center"}>Beyond diving.</p>
      <p className={isMobileMode
        ? "fmt-[12/340] mx-auto w-[calc(260/340*100%)] min-w-0 text-center ft-[11/340] font-normal flh-[14/340] text-[#626262]"
        : "fmt-[8/1320] text-center ft-[12/1320] font-normal flh-[16/1320] text-[#626262] fmx-[258/1320]"}>
        Explore, compete, govern, and connect—discover a vast undersea world.
      </p>
      <Button
        text="Play Now"
        className={isMobileMode
          ? "fmt-[14/340] mx-auto w-82/340 aspect-82/28"
          : "fmt-[13/1320] mx-auto w-100/1320 aspect-100/30"}
        textClassName="text-[38cqh]"
        onClick={() => window.open("https://game.oceanea.io/", "_blank", "noopener,noreferrer")}
      />
    </DebugBg>

    <DebugBg className={isMobileMode ? "fmt-[24/340]" : "relative left-1/2 w-[min(calc(100vw-80px),1140px)] -translate-x-1/2 fmt-[50/1320]"}>
      {isMobileMode ? mobileDivingCards : desktopDivingCards}
    </DebugBg>
  </>
}

function FeatureBlock({
  body,
  title,
  className,
  bodyFirst = false,
}: {
  body: string;
  title: string;
  className: string;
  bodyFirst?: boolean;
}) {
  const bodyNode = (
    <p className="text-center text-[calc(8/620*100cqw)] font-medium leading-[1.25] tracking-[-0.03em] text-[#626262]">
      {body}
    </p>
  );
  const titleNode = (
    <p className="mt-[calc(10/620*100cqw)] whitespace-nowrap text-center text-[calc(16/620*100cqw)] font-medium leading-[1.1] text-[#0c0c0c]">
      {title}
    </p>
  );

  return (
    <div className={`absolute z-30 w-[calc(158/620*100cqw)] ${className}`}>
      {bodyFirst ? (
        <>
          {bodyNode}
          {titleNode}
        </>
      ) : (
        <>
          <p className="whitespace-nowrap text-center text-[calc(16/620*100cqw)] font-medium leading-[1.1] text-[#0c0c0c]">
            {title}
          </p>
          <p className="mt-[calc(10/620*100cqw)] text-center text-[calc(8/620*100cqw)] font-medium leading-[1.25] tracking-[-0.03em] text-[#626262]">
            {body}
          </p>
        </>
      )}
    </div>
  );
}
