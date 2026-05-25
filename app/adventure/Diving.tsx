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

  const divingDesktopImages = [
    { src: "/game/diving/diving-img-5.png", layout: "left-0 top-[-10%] w-530/1320" },
    { src: "/game/diving/diving-002-1.png", layout: "right-0 top-[-5%] w-442/1320" },
    { src: "/game/diving/diving-002-2.png", layout: "left-[53%] top-[5%] w-194/1320" },
    { src: "/game/diving/diving-object.png", layout: "bottom-0 left-0 w-345/1320" },
    { src: "/game/diving/diving-img-4.png", layout: "bottom-0 right-0 w-473/1320" },
  ] as const;

  return <>
    <DebugBg className={isMobileMode
      ? "relative -translate-x-1/2 left-1/2 fmt-[48/340] "
      : "relative -translate-x-1/2 left-1/2 fmt-[125/1320]"}>
      <p className={isMobileMode
        ? "ft-[32/340] font-medium fls-[-0.96/340] text-center"
        : "ft-[60/1320] font-medium fls-[-2.88/1320] text-center"}>Beyond diving.</p>
      <p className={isMobileMode
        ? "fmt-[12/340] text-center ft-[14/340] font-medium fls-[-0.42/340] text-[#626262]"
        : "fmt-[18/1320] text-center ft-[24/1320] font-medium fls-[-0.6/1320] text-[#626262] fmx-[200/1320]"}>
        Explore, compete, govern, and connect—discover a vast undersea world.
      </p>
      <Button
        text="Play Now"
        className={isMobileMode
          ? "fmt-[24/340] mx-auto w-250/340 aspect-250/58"
          : "fmt-[33/1320] mx-auto w-270/1320 aspect-270/62"}
        onClick={() => window.open("https://game.oceanea.io/", "_blank", "noopener,noreferrer")}
      />
    </DebugBg>

    <DebugBg className={isMobileMode ? "fmt-[24/340]" : "fmt-[50/1320]"}>
      <div className="relative overflow-hidden fr-[50/1320] shadow-md aspect-1320/900 @container-[size]"
        style={{
          background:
            "linear-gradient(180deg, rgba(22, 64, 114, 0.1) 0%, rgba(247, 252, 254, 0.76) 42%, rgba(255, 255, 255, 1) 61%, rgba(22, 64, 114, 0.2) 100%)",
        }}>
        {divingDesktopImages.map((img) => (
          <img key={img.src} src={img.src} alt="" className={`pointer-events-none absolute max-w-none select-none ${img.layout}`}/>
        ))}

        <div className="relative z-10 grid min-h-0 grid-cols-2 fg-[28/1320] fmt-[300/1320]">
          {cardBlocks.flatMap((block, i) => {
            const cell = (
              <div key={block.title}>
                {block.lines.map((line, li) => (
                  <p key={`${block.title}-${li}`} className={line.className}>
                    {line.part === "title" ? block.title : block.body}
                  </p>
                ))}
              </div>
            );
            if (i === 1) {
              return [
                cell,
                <div key="diving-divider" className="col-span-2 flex items-center justify-center fmt-[12/1320]">
                  <div className="h-px w-185/1320 bg-[rgba(169,169,169,0.5)]" />
                </div>,
              ];
            }
            return [cell];
          })}
        </div>
      </div>
    </DebugBg>
  </>
}
