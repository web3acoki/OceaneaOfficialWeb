import Button from "@/components/common/Button";
import LoadedImage from "@/components/common/LoadedImage";
import { DebugBg } from "@/components/features/DebugMode";
import { useMobileMode } from "@/components/features/MobileMode";

export default function Diving() {
  const isMobileMode = useMobileMode();

  const cardBlocks = [
    {
      title: "DIVE & CATCH",
      body: "Plunge into dynamic marine zones to hunt and gather resources. Every successful catch awards you Gold Coins, serving as your baseline proof of ecosystem contribution.",
      lines: [
        { part: "body", className: "text-right fml-[750/1320] ft-[20/1320] font-medium fls-[-0.6/1320] text-[#626262] flh-[25/1320]" },
        { part: "title", className: "text-right ft-[36/1320] font-medium fmt-[12/1320]" },
      ],
    },
    {
      title: "UPGRADE & EXPAND",
      body: "Reinvest your Gold Coins to upgrade your diving suits, specialized gear, and advanced thrusters. Maximize your hunting efficiency to venture into deadlier, high-yield abysses.",
      lines: [
        { part: "body", className: "text-left fmr-[750/1320] ft-[20/1320] font-medium fls-[-0.6/1320] text-[#626262] flh-[25/1320]" },
        { part: "title", className: "text-left ft-[36/1320] font-medium  fmt-[12/1320]" },
      ],
    },
    {
      title: "EMPIRE & AQUARIUM",
      body: "Decorate, stock, and optimize your personal Aquarium to rapidly boost its total asset value. Utilize your prestige to found powerful Ocean Guilds, pooling player strengths to expand your faction's territory and influence.",
      lines: [
        { part: "title", className: "text-right ft-[36/1320] font-medium" },
        { part: "body", className: "text-right fml-[750/1320] fmt-[12/1320] ft-[20/1320] font-medium fls-[-0.6/1320] text-[#626262] flh-[25/1320]" },
      ],
    },
    {
      title: "RANK & CONQUER",
      body: "Push your individual and guild standings to the limit on the global Seasonal Leaderboards. Out-hunt and out-strategize the competition to walk away with massive, exclusive seasonal prize pools.",
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

      <LoadedImage src="/game/diving/diving-img-5.png" alt="" frameClassName="pointer-events-none absolute left-[-54px] top-[30px] z-20 w-[176px] max-w-none select-none" className="size-full" />
      <LoadedImage src="/game/diving/diving-002-1.png" alt="" frameClassName="pointer-events-none absolute right-[-50px] top-[24px] z-20 w-[166px] max-w-none select-none" className="size-full" />
      <LoadedImage src="/game/diving/diving-002-2.png" alt="" frameClassName="pointer-events-none absolute left-[244px] top-[86px] z-20 w-[58px] max-w-none select-none opacity-70" className="size-full" />
      <LoadedImage src="/game/diving/diving-object.png" alt="" frameClassName="pointer-events-none absolute bottom-[28px] left-[-2px] z-20 w-[128px] max-w-none select-none" className="size-full" />
      <LoadedImage src="/game/diving/diving-img-4.png" alt="" frameClassName="pointer-events-none absolute bottom-[-6px] right-[-92px] z-20 w-[202px] max-w-none select-none" className="size-full" />

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

      <LoadedImage src="/game/diving/diving-img-5.png" alt="" frameClassName="pointer-events-none absolute left-[-15.8%] top-[6%] z-20 w-[48%] max-w-none select-none" className="size-full" />
      <LoadedImage src="/game/diving/diving-002-1.png" alt="" frameClassName="pointer-events-none absolute right-[-7%] top-[3.8%] z-20 w-[42%] max-w-none select-none" className="size-full" />
      <LoadedImage src="/game/diving/diving-002-2.png" alt="" frameClassName="pointer-events-none absolute left-[55%] top-[22%] z-20 w-[11.6%] max-w-none select-none opacity-70" className="size-full" />
      <LoadedImage src="/game/diving/diving-object.png" alt="" frameClassName="pointer-events-none absolute bottom-[-2%] left-[-0.1%] z-20 w-[30%] max-w-none select-none" className="size-full" />
      <LoadedImage src="/game/diving/diving-img-4.png" alt="" frameClassName="pointer-events-none absolute bottom-[2%] right-[-6%] z-20 w-[38%] max-w-none select-none" className="size-full" />

      <div className="absolute left-[10%] top-[32%] z-30 h-[40%] w-[80%]">
        <div className="absolute left-1/2 top-1/2 h-[24%] w-px -translate-x-1/2 -translate-y-1/2 bg-[rgba(169,169,169,0.55)]" />
        <div className="absolute left-1/2 top-1/2 h-px w-[16%] -translate-x-1/2 -translate-y-1/2 bg-[rgba(169,169,169,0.55)]" />

        <DesktopFeatureBlock body={cardBlocks[0].body} title={cardBlocks[0].title} bodyFirst className="left-[6%] top-[6%]" />
        <DesktopFeatureBlock body={cardBlocks[1].body} title={cardBlocks[1].title} bodyFirst className="right-[6%] top-[6%]" />
        <DesktopFeatureBlock body={cardBlocks[2].body} title={cardBlocks[2].title} className="left-[6%] top-[58%]" />
        <DesktopFeatureBlock body={cardBlocks[3].body} title={cardBlocks[3].title} className="right-[6%] top-[58%]" />
      </div>
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
    <p className="mt-[7px] text-center text-[14px] font-medium leading-[15px] text-[#0c0c0c]">
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
          <p className="text-center text-[14px] font-medium leading-[15px] text-[#0c0c0c]">
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
    <p className="text-center text-[20px] font-medium leading-[25px] tracking-[-0.03em] text-[#626262]">
      {body}
    </p>
  );
  const titleNode = (
    <p className="mt-[12px] whitespace-nowrap text-center text-[clamp(22px,9.5cqw,30px)] font-medium leading-[1.13] text-[#0c0c0c]">
      {title}
    </p>
  );

  return (
    <div className={`absolute w-[38%] @container ${className}`}>
      {bodyFirst ? (
        <>
          {bodyNode}
          {titleNode}
        </>
      ) : (
        <>
          <p className="whitespace-nowrap text-center text-[clamp(22px,9.5cqw,30px)] font-medium leading-[1.13] text-[#0c0c0c]">
            {title}
          </p>
          <p className="mt-[12px] text-center text-[20px] font-medium leading-[25px] tracking-[-0.03em] text-[#626262]">
            {body}
          </p>
        </>
      )}
    </div>
  );
}
