import { DebugBg } from "@/components/features/DebugMode";
import { useMobileMode } from "@/components/features/MobileMode";

/** Figma 1170:1114 — Mask group 1140×843, fr 50, 背景图偏移裁切 */
export default function Welcome() {
  const isMobileMode = useMobileMode();
  return (
    <DebugBg className={isMobileMode
          ? "relative -translate-x-1/2 left-1/2 fmt-[48/340] aspect-1140/843 w-full overflow-hidden fr-[15/340]"
          : "relative fml-[90/1320] fmt-[125/1320] w-1140/1320 aspect-1140/843 overflow-hidden fr-[50/1320] @container-[size]"
      }>
      <img
        src="/innovation/welcome-back.png"
        alt="Sea turtle and divers in open water"
        className="absolute max-w-none object-cover w-1419/1140 h-946/843 fml-[-266/1140] fmt-[-16/1140]"
      />
      <p className={isMobileMode
        ? "absolute fmt-[173/1320] fml-[600/1320] w-632/1320 text-right ft-[64/1320] font-medium flh-[70/1320] fls-[-1.92/1320] text-[#F5FDFF]"
        : "absolute fmt-[173/1140] fml-[510/1140] w-570/1140 text-right ft-[60/1140] font-medium flh-[65/1140] fls-[-1.8/1140] text-[#F5FDFF] whitespace-pre-line"
      }>{isMobileMode ? "Making open-water diving easier, safer, and more fun." : `Making open-water\ndiving easier, safer,\nand more fun.`}</p>
    </DebugBg>
  );
}
