import Button from "@/components/common/Button";
import { DebugBg } from "@/components/features/DebugMode";
import { useMobileMode } from "@/components/features/MobileMode";

/**
 * Innovation 二级页面 Experience section — 潜水员+鱼图 mask + 玻璃感播放按钮 + Book CTA。
 * Figma 1170:1133（mask group 1140×700）、1170:1200（玻璃感播放按钮 100×100）、1170:1123（Book button 366×50）。
 */
export default function Experience() {
  void useMobileMode();

  return (
    <DebugBg className="relative w-full aspect-1320/774 fmt-[146/1320]">
      <div className="absolute fmt-[0/1320] w-full aspect-1320/700 overflow-hidden fr-[50/1320]">
        <img
          src="/innovation/experience-fish.png"
          alt="Diver swimming alongside a school of yellow fish"
          className="absolute inset-0 select-none pointer-events-none w-full h-full object-cover"
        />

        <button
          type="button"
          aria-label="Play video"
          className="absolute group flex items-center justify-center fml-[610/1320] fmt-[314/1320] w-100/1320 aspect-square rounded-full bg-white cursor-pointer duration-200 hover:scale-105"
        >
          <span
            aria-hidden
            className="block w-0 h-0"
            style={{
              borderTop: "1.4cqw solid transparent",
              borderBottom: "1.4cqw solid transparent",
              borderLeft: "2.2cqw solid #052927",
              marginLeft: "0.5cqw",
            }}
          />
        </button>
      </div>

      <Button
        text="Book A Dive Experience"
        className="absolute fml-[477/1320] fmt-[724/1320] w-366/1320 aspect-366/50"
      />
    </DebugBg>
  );
}
