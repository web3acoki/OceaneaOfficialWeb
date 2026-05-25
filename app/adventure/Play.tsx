import PlaySimulate from "@/components/common/PlaySimulate";
import { DebugBg } from "@/components/features/DebugMode";
import { useMobileMode } from "@/components/features/MobileMode";
import Button from "@/components/common/Button";

const playTitle = "Where Virtual Diving Meets the Real Ocean";

const playBody =
  "X-DIVER extends your adventure into real-life diving experiences. You can dive with your friends in the digital ocean, hunt for rare fish, explore uncharted waters and earn rewards.";

export default function Play() {
  const isMobileMode = useMobileMode();
  return <>
    <DebugBg className={isMobileMode
      ? "relative -translate-x-1/2 left-1/2 fmt-[48/340] "
      : "relative -translate-x-1/2 left-1/2 fmt-[125/1320]"}>
      <p className={isMobileMode
        ? "ft-[32/340] font-medium fls-[-0.96/340] text-center"
        : "ft-[60/1320] font-medium fls-[-2.88/1320] text-center"}>{playTitle}</p>
      <p className={isMobileMode
        ? "fmt-[12/340] text-center ft-[14/340] font-medium fls-[-0.42/340] text-[#626262]"
        : "fmt-[18/1320] text-center ft-[24/1320] font-medium fls-[-0.6/1320] text-[#626262] fmx-[200/1320]"}>{playBody}</p>
      <Button
        text="Play Now"
        className={isMobileMode
          ? "fmt-[24/340] w-170/340 aspect-170/52 mx-auto"
          : "fmt-[30/1320] w-170/1320 aspect-170/58 mx-auto"}
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
