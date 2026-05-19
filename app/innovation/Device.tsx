import { DebugBg } from "@/components/features/DebugMode";
import { useMobileMode } from "@/components/features/MobileMode";

/**
 * Innovation 二级页面 Device section — X-Artura 产品介绍 + 圆环参数图。
 * Figma 节点：1170:1120 (chevron) / 1170:1129 (subtitle) / 1170:1130 (paragraph) /
 *            1170:1136 (圆环 section) 内含 1170:1160 (rings) / 1170:1190 (diver composite) /
 *            1170:1154 (lead lines) / 1170:1191 (curve)。
 * 移动端无 Figma 稿，只写桌面端（保留 useMobileMode 以备后续补稿）。
 */

export default function Device() {
  void useMobileMode();

  return (
    <DebugBg className="relative w-full aspect-1320/1476 fmt-[73/1320]">
      {/* 1170:1136 full ring/spec section export — 1180×1202 at frame (370, 1316) → section-local (70, 274) */}
      <img
        src="/innovation/device-section-full.png"
        alt="X-Artura performance specifications"
        className="absolute z-0 select-none pointer-events-none fml-[70/1320] fmt-[274/1320] w-1180/1320 aspect-1180/1202"
      />

      {/* 1170:1120 chevron decoration — SVG with gaussian blur, frame (832, 1042), 256×265 */}
      <img
        src="/innovation/device-symbol.svg"
        alt=""
        className="absolute z-10 select-none pointer-events-none w-256/1320 aspect-256/265 fml-[532/1320] fmt-[0/1320]"
      />

      {/* 1170:1129 subtitle — 60px Geologica Medium TITLE-case, centered */}
      <p className="absolute z-10 left-0 right-0 fmt-[102/1320] text-center font-medium ft-[60/1320] flh-[95/1320] fls-[-1.8/1320] text-[#0C0C0C] whitespace-nowrap">
        The World&rsquo;s First Exoskeleton-Powered Smart DPV
      </p>

      {/* 1170:1130 paragraph — 24px Geologica Regular, centered, #7D7D7D */}
      <p className="absolute z-10 left-1/2 -translate-x-1/2 fmt-[230/1320] w-1182/1320 text-center font-normal ft-[24/1320] fls-[-0.72/1320] text-[#7D7D7D] whitespace-pre-line leading-[1.3]">
        {`Powered by advanced exoskeleton-sensing control technology, X-Artura enables effortless underwater actions such as going straight, turning, sudden stopping, reversing, and backstroke floating.\n\nWith no need for hand-held operation, divers can fully free their hands and move underwater like a free fish—enjoying a far more immersive and delightful diving experience.`}
      </p>
    </DebugBg>
  );
}
