import Button from "@/components/common/Button";
import { DebugBg } from "@/components/features/DebugMode";
import { useMobileMode } from "@/components/features/MobileMode";

/**
 * Innovation 二级页面 World section — XDiving 全球潜点 + Channel Partner 招募。
 * Figma 节点：
 *   1170:1192 标题/副标题 frame
 *   1170:1117/1170:1118 dark teal card 1140×759 (#032D40, radius 50)
 *   1170:1119 card inner image 1128×659 — 世界地图 + 潜点 (radius 50)
 *   1170:1196 floating diver mask 836×443 — 漂浮在卡片底部 + 下沿外溢
 *   1170:1201 / 1170:1202 carousel 箭头 14×28
 *   1170:1125 Join Now button 179×50
 *   1170:1195 partner text 333×50
 */
export default function World() {
  void useMobileMode();

  return (
    <DebugBg className="relative w-full aspect-1320/1392 fmt-[196/1320]">
      {/* 1170:1193 title — 60px Geologica Medium #0C0C0C, centered */}
      <p className="absolute left-0 right-0 fmt-[0/1320] text-center font-medium ft-[60/1320] flh-[70/1320] fls-[-1.8/1320] text-[#0C0C0C] whitespace-pre-line">
        {`XDiving is coming to the world’s\nbest dive sites.`}
      </p>
      {/* 1170:1194 subtitle — 24px Geologica Regular #7D7D7D */}
      <p className="absolute left-0 right-0 fmt-[183/1320] text-center font-normal ft-[24/1320] text-[#7D7D7D]">
        Channel Partner Program
      </p>

      {/* 1170:1117 dark teal card expanded to the page shell width */}
      <div className="absolute fmt-[250/1320] w-full aspect-1320/759 fr-[50/1320] overflow-hidden bg-[#032D40]">
        {/* 1170:1119 inner world map image scaled with the wider card */}
        <img
          src="/innovation/world-card-bg.png"
          alt="Map of the world showing dive sites"
          className="absolute select-none pointer-events-none w-1306/1320 aspect-1306/659 fml-[7/1320] fmt-[45/1320] fr-[50/1320] object-cover"
        />
      </div>

      {/* 1170:1196 floating diver mask (836×443) at section-local (242, 787) — overlaps card bottom + sticks out */}
      <div className="absolute fml-[242/1320] fmt-[787/1320] w-836/1320 aspect-836/443 overflow-hidden fr-[40/1320]">
        <img
          src="/innovation/world-diver.png"
          alt="Diver underwater with bubbles"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />
      </div>

      {/* 1170:1202 left arrow (14×28 at frame (486, 4757)) — section-local (186, 1123) */}
      <Chevron direction="left"  wrap="absolute fml-[186/1320]  fmt-[1123/1320] w-14/1320 aspect-14/28" />
      {/* 1170:1201 right arrow (14×28 at frame (1434, 4729)) — section-local (1134, 1095) */}
      <Chevron direction="right" wrap="absolute fml-[1134/1320] fmt-[1095/1320] w-14/1320 aspect-14/28" />

      {/* 1170:1125 Join Now button (179×50) at section-local (571, 1274) */}
      <Button
        text="Join Now"
        className="absolute fml-[571/1320] fmt-[1274/1320] w-179/1320 aspect-179/50"
      />

      {/* 1170:1195 partner text (333×50) at section-local (494, 1342) */}
      <p className="absolute fml-[494/1320] fmt-[1342/1320] w-333/1320 text-center font-medium ft-[20/1320] text-[#7D7D7D] leading-[1.25]">
        Join us as a partner and enjoy early adopter rewards
      </p>
    </DebugBg>
  );
}

function Chevron({ direction, wrap }: { direction: "left" | "right"; wrap: string }) {
  return (
    <button type="button" aria-label={direction === "left" ? "Previous dive site" : "Next dive site"} className={wrap + " cursor-pointer"}>
      <svg viewBox="0 0 14 28" fill="none" className="w-full h-full block" aria-hidden focusable="false">
        {direction === "left" ? (
          <path d="M13 1 L1 14 L13 27" stroke="#C8C8C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M1 1 L13 14 L1 27" stroke="#C8C8C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}
