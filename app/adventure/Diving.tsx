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
      className="relative mt-[28px] ml-[max(0px,calc((100%_-_412px)/2_-_48px))] aspect-[412/480] w-[min(412px,100%)] overflow-visible"
    >
      <div
        className="absolute inset-0 overflow-hidden rounded-[14px]"
      style={{
        background:
            "linear-gradient(180deg, rgba(44, 90, 138, 0.21) 0%, rgba(245, 250, 252, 0.9) 34%, rgba(255, 255, 255, 1) 58%, rgba(34, 78, 128, 0.2) 100%)",
      }}
      />

      <img src="/game/diving/diving-img-5.png" alt="" className="pointer-events-none absolute left-[-54px] top-[30px] z-20 w-[176px] max-w-none select-none" />
      <img src="/game/diving/diving-002-1.png" alt="" className="pointer-events-none absolute right-[-50px] top-[24px] z-20 w-[166px] max-w-none select-none" />
      <img src="/game/diving/diving-002-2.png" alt="" className="pointer-events-none absolute left-[244px] top-[86px] z-20 w-[58px] max-w-none select-none opacity-70" />
      <img src="/game/diving/diving-object.png" alt="" className="pointer-events-none absolute bottom-[28px] left-[-2px] z-20 w-[128px] max-w-none select-none" />
      <img src="/game/diving/diving-img-4.png" alt="" className="pointer-events-none absolute bottom-[-6px] right-[-92px] z-20 w-[202px] max-w-none select-none" />

      <div className="absolute left-1/2 top-[224px] z-30 h-[76px] w-px -translate-x-1/2 bg-[rgba(169,169,169,0.55)]" />
      <div className="absolute left-1/2 top-[262px] z-30 h-px w-[68px] -translate-x-1/2 bg-[rgba(169,169,169,0.55)]" />

      <MobileFeatureBlock body={cardBlocks[0].body} title={cardBlocks[0].title} bodyFirst className="left-[72px] top-[164px]" />
      <MobileFeatureBlock body={cardBlocks[1].body} title={cardBlocks[1].title} bodyFirst className="left-[244px] top-[164px]" />
      <MobileFeatureBlock body={cardBlocks[2].body} title={cardBlocks[2].title} className="left-[72px] top-[254px]" />
      <MobileFeatureBlock body={cardBlocks[3].body} title={cardBlocks[3].title} className="left-[244px] top-[254px]" />
      </div>
  );

  const desktopDivingCards = (
    <div className="relative left-1/2 mt-[50px] aspect-[1140/1320] w-[min(calc(100vw-80px),1140px)] -translate-x-1/2 overflow-visible">
      <div
        className="absolute inset-0 overflow-hidden rounded-[34px] shadow-md"
        style={{
          background:
            "linear-gradient(180deg, rgba(44, 90, 138, 0.21) 0%, rgba(245, 250, 252, 0.9) 34%, rgba(255, 255, 255, 1) 58%, rgba(34, 78, 128, 0.2) 100%)",
        }}
      />

      <img src="/game/diving/diving-img-5.png" alt="" className="pointer-events-none absolute left-[-15.8%] top-[6%] z-20 w-[48%] max-w-none select-none" />
      <img src="/game/diving/diving-002-1.png" alt="" className="pointer-events-none absolute right-[-7%] top-[3.8%] z-20 w-[42%] max-w-none select-none" />
      <img src="/game/diving/diving-002-2.png" alt="" className="pointer-events-none absolute left-[55%] top-[22%] z-20 w-[11.6%] max-w-none select-none opacity-70" />
      <img src="/game/diving/diving-object.png" alt="" className="pointer-events-none absolute bottom-[6%] left-[-0.1%] z-20 w-[30%] max-w-none select-none" />
      <img src="/game/diving/diving-img-4.png" alt="" className="pointer-events-none absolute bottom-[2%] right-[-6%] z-20 w-[38%] max-w-none select-none" />

      <div className="absolute left-1/2 top-[43%] z-30 h-[14%] w-px -translate-x-1/2 bg-[rgba(169,169,169,0.55)]" />
      <div className="absolute left-1/2 top-[50%] z-30 h-px w-[10%] -translate-x-1/2 bg-[rgba(169,169,169,0.55)]" />

      <DesktopFeatureBlock body={cardBlocks[0].body} title={cardBlocks[0].title} bodyFirst className="left-[26%] top-[34%]" />
      <DesktopFeatureBlock body={cardBlocks[1].body} title={cardBlocks[1].title} bodyFirst className="left-[56%] top-[34%]" />
      <DesktopFeatureBlock body={cardBlocks[2].body} title={cardBlocks[2].title} className="left-[26%] top-[55%]" />
      <DesktopFeatureBlock body={cardBlocks[3].body} title={cardBlocks[3].title} className="left-[56%] top-[55%]" />
    </div>
  );

  return <>
    <DebugBg className={isMobileMode
      ? "relative mt-[48px] ml-[max(0px,calc((100%_-_412px)/2_-_48px))] w-[min(412px,100%)]"
      : "relative mx-auto mt-[125px] w-[760px]"}>
      <p className={isMobileMode
        ? "mx-auto w-[260px] min-w-0 text-center text-[22px] font-medium leading-[27px]"
        : "mx-auto w-full min-w-0 text-center text-[64px] font-semibold leading-[72px] text-[#0C0C0C]"}>Beyond Diving</p>
      <p className={isMobileMode
        ? "mx-auto mt-[10px] w-[260px] min-w-0 text-center text-[9px] font-normal leading-[11px] text-[#626262]"
        : "mx-auto mt-[20px] w-[560px] min-w-0 text-center text-[22px] font-normal leading-[28px] text-[#626262]"}>
        Explore, compete, govern, and connect—discover a vast undersea world.
      </p>
      <Button
        text="Play Now"
        className={isMobileMode ? "mx-auto mt-[12px] h-[20px] w-[80px]" : "mx-auto mt-[28px] h-[50px] w-[180px]"}
        textClassName={isMobileMode ? "text-[10px] font-bold leading-none" : "text-[22px] font-bold leading-none"}
        onClick={() => window.open("https://game.oceanea.io/", "_blank", "noopener,noreferrer")}
      />
    </DebugBg>

    <DebugBg className={isMobileMode ? "" : ""}>
      {isMobileMode ? mobileDivingCards : desktopDivingCards}
    </DebugBg>
  </>
}

function MobileFeatureBlock({
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
    <p className="text-center text-[6.2px] font-medium leading-[7.3px] tracking-[-0.03em] text-[#626262]">
      {body}
    </p>
  );
  const titleNode = (
    <p className="mt-[7px] whitespace-nowrap text-center text-[14px] font-medium leading-[15px] text-[#0c0c0c]">
      {title}
    </p>
  );

  return (
    <div className={`absolute z-30 w-[96px] ${className}`}>
      {bodyFirst ? (
        <>
          {bodyNode}
          {titleNode}
        </>
      ) : (
        <>
          <p className="whitespace-nowrap text-center text-[14px] font-medium leading-[15px] text-[#0c0c0c]">
            {title}
          </p>
          <p className="mt-[8px] text-center text-[6.2px] font-medium leading-[7.3px] tracking-[-0.03em] text-[#626262]">
            {body}
          </p>
        </>
      )}
    </div>
  );
}

function DesktopFeatureBlock({
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
    <p className="text-center text-[16px] font-medium leading-[20px] tracking-[-0.03em] text-[#626262]">
      {body}
    </p>
  );
  const titleNode = (
    <p className="mt-[12px] whitespace-nowrap text-center text-[30px] font-medium leading-[34px] text-[#0c0c0c]">
      {title}
    </p>
  );

  return (
    <div className={`absolute z-30 w-[18%] ${className}`}>
      {bodyFirst ? (
        <>
          {bodyNode}
          {titleNode}
        </>
      ) : (
        <>
          <p className="whitespace-nowrap text-center text-[30px] font-medium leading-[34px] text-[#0c0c0c]">
            {title}
          </p>
          <p className="mt-[12px] text-center text-[16px] font-medium leading-[20px] tracking-[-0.03em] text-[#626262]">
            {body}
          </p>
        </>
      )}
    </div>
  );
}
