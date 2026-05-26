import PlaySimulate from "@/components/common/PlaySimulate";
import { DebugBg } from "@/components/features/DebugMode";
import { useMobileMode } from "@/components/features/MobileMode";
import Button from "@/components/common/Button";

const playTitle = "Where Virtual Diving Meets the Real Ocean";

const playBody =
  "X-DIVER extends your adventure into real-life diving experiences. You can dive with your friends in the digital ocean, hunt for rare fish, explore uncharted waters and earn rewards.";

export default function Play() {
  const isMobileMode = useMobileMode();
  const displayPlayTitle = isMobileMode
    ? `Where Virtual Diving
Meets the Real Ocean`
    : playTitle;
  return <>
    <DebugBg className={isMobileMode
      ? "relative -translate-x-1/2 left-1/2 fmt-[48/340] "
      : "relative -translate-x-1/2 left-1/2 fmt-[125/1320]"}>
      <p className={isMobileMode
        ? "mx-auto w-[calc(260/340*100%)] min-w-0 whitespace-pre-line ft-[22/340] font-medium flh-[27/340] text-center"
        : "ft-[36/1320] font-medium flh-[43/1320] text-center"}>{displayPlayTitle}</p>
      <p className={isMobileMode
        ? "fmt-[12/340] mx-auto w-[calc(260/340*100%)] min-w-0 text-center ft-[11/340] font-normal flh-[14/340] text-[#626262]"
        : "fmt-[8/1320] text-center ft-[12/1320] font-normal flh-[16/1320] text-[#626262] fmx-[258/1320]"}>{playBody}</p>
      <Button
        text="Play"
        className={isMobileMode
          ? "fmt-[14/340] w-72/340 aspect-72/24 mx-auto"
          : "fmt-[13/1320] w-82/1320 aspect-82/30 mx-auto"}
        textClassName="text-[38cqh]"
        onClick={() => {
          window.open("https://game.oceanea.io/", "_blank", "noopener,noreferrer");
        }}
      />
    </DebugBg>
    <div className={isMobileMode ? "fmt-[24/340]" : "fmt-[120/1320]"}>
      <PlaySimulate />
    </div>
  </>;
}
