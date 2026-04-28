"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { DebugBg, useDebugMode } from "../features/DebugMode";
import { useMobileMode } from "../features/MobileMode";

export default function Frotier() {
  const showSwimPath = useDebugMode();
  const isMobileMode = useMobileMode();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pathScale, setPathScale] = useState({ w: 1320, h: 1394 });
  const [scrollProgress, setScrollProgress] = useState(0); // 0..100
  const scaleX = (x: number) => (x * pathScale.w) / 1320;
  // 与 fml/fmt 同一基准：纵向也按容器宽度比例缩放，避免小屏时路径与海豚偏移
  const pathYOffset = isMobileMode
    ? 550
    : 0;
  const scaleY = (y: number) => ((y + pathYOffset) * pathScale.w) / 1320;
  const pathPts = {
    p0: [-280, 180] as [number, number],
    c1: [-120, 380] as [number, number],
    c2: [120, 500] as [number, number],
    p1: [320, 500] as [number, number],
    c3: [520, 500] as [number, number],
    c4: [760, 440] as [number, number],
    p2: [940, 360] as [number, number],
    c5: [1120, 280] as [number, number],
    c6: [1320, 200] as [number, number],
    p3: [1600, 210] as [number, number],
  };
  const swimPath = useMemo(
    () =>
      `M ${scaleX(pathPts.p0[0])} ${scaleY(pathPts.p0[1])} C ${scaleX(pathPts.c1[0])} ${scaleY(pathPts.c1[1])}, ${scaleX(pathPts.c2[0])} ${scaleY(pathPts.c2[1])}, ${scaleX(pathPts.p1[0])} ${scaleY(pathPts.p1[1])} C ${scaleX(pathPts.c3[0])} ${scaleY(pathPts.c3[1])}, ${scaleX(pathPts.c4[0])} ${scaleY(pathPts.c4[1])}, ${scaleX(pathPts.p2[0])} ${scaleY(pathPts.p2[1])} C ${scaleX(pathPts.c5[0])} ${scaleY(pathPts.c5[1])}, ${scaleX(pathPts.c6[0])} ${scaleY(pathPts.c6[1])}, ${scaleX(pathPts.p3[0])} ${scaleY(pathPts.p3[1])}`,
    [pathScale],
  );
  // 与板块 aspect-1320/920 一致：SVG 与 CSS offset-path 共用同一套坐标范围
  const debugViewBoxH = (920 * pathScale.w) / 1320;
  const enableSwim = true;
  // 鱼头朝向相对图片的校准角：用于路径 auto 朝向，不是直接旋转图片
  const swimHeadOffsetDeg = -30;

  const dolphins = [
    // 第一只作为路径锚点（与红点重合）
    { src: "/frontier-dolphin-1.png", sizeClass: "w-749/1320", baseOffsetClass: "" },
    // 其余保持相对第一只的偏移（原始差值不变）
    { src: "/frontier-dolphin-2.png", sizeClass: "w-434/1320", baseOffsetClass: "fmt-[132/1320] fml-[-35/1320]" },
    { src: "/frontier-dolphin-3.png", sizeClass: "w-371/1320", baseOffsetClass: "fmt-[56/1320] fml-[-11/1320]" },
  ] as const;
  const dolphinOpacity =
    scrollProgress <= 8 ? scrollProgress / 8 : scrollProgress >= 92 ? (100 - scrollProgress) / 8 : 1;

  const renderDolphins = () => (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        ...(enableSwim
          ? {
              offsetPath: `path("${swimPath}")`,
              offsetRotate: `auto ${swimHeadOffsetDeg}deg`,
              offsetAnchor: "28.4% 14.4%",
              offsetDistance: `${scrollProgress}%`,
              opacity: dolphinOpacity,
              willChange: "offset-distance, opacity",
            }
          : {}),
      }}
    >
      {/* 路径锚点与海豚锚点：同一 DOM 位置（offsetAnchor 28.4% 14.4%），与海豚相对关系不变 */}
      {showSwimPath && (
        <div className="pointer-events-none absolute z-120 left-[28.4%] top-[14.4%] -translate-x-1/2 -translate-y-1/2 size-3">
          <div className="absolute inset-0 rounded-full border-2 border-lime-400 bg-transparent" aria-hidden />
          <div className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00d4ff] border border-black" aria-hidden />
        </div>
      )}
      {dolphins.map((d, i) => (
        <img
          key={`${d.src}-${i}`}
          src={d.src}
          alt=""
          className={`absolute top-0 left-0 ${d.sizeClass} ${d.baseOffsetClass}`}
        />
      ))}
    </div>
  );
  const renderSwimPath = () => (
    <svg
      className="absolute inset-0 z-110 pointer-events-none overflow-visible"
      viewBox={`0 0 ${pathScale.w} ${debugViewBoxH}`}
      preserveAspectRatio="none"
      aria-hidden
      style={{ overflow: "visible" }}
    >
      <path d={swimPath} fill="none" stroke="rgba(12,12,12,0.35)" strokeWidth="3" strokeDasharray="10 8" />

      {(
        [
          [pathPts.p0, pathPts.c1],
          [pathPts.p1, pathPts.c2],
          [pathPts.p1, pathPts.c3],
          [pathPts.p2, pathPts.c4],
          [pathPts.p2, pathPts.c5],
          [pathPts.p3, pathPts.c6],
        ] as const
      ).map(([[px, py], [cx, cy]], idx) => (
        <line
          key={`pc-line-${idx}`}
          x1={scaleX(px)}
          y1={scaleY(py)}
          x2={scaleX(cx)}
          y2={scaleY(cy)}
          stroke="rgba(59,130,246,0.7)"
          strokeWidth="1.8"
          strokeDasharray="4 4"
        />
      ))}
      {(
        [
          ["P0", pathPts.p0, "#ef4444"],
          ["C1", pathPts.c1, "#3b82f6"],
          ["C2", pathPts.c2, "#3b82f6"],
          ["P1", pathPts.p1, "#ef4444"],
          ["C3", pathPts.c3, "#3b82f6"],
          ["C4", pathPts.c4, "#3b82f6"],
          ["P2", pathPts.p2, "#ef4444"],
          ["C5", pathPts.c5, "#3b82f6"],
          ["C6", pathPts.c6, "#3b82f6"],
          ["P3", pathPts.p3, "#ef4444"],
        ] as const
      ).map(([name, [x0, y0], color]) => {
        const x = scaleX(x0);
        const y = scaleY(y0);
        return (
          <g key={name} transform={`translate(${x} ${y})`}>
            <circle r="6" fill={color} stroke="#fff" strokeWidth="2" />
            <text x="9" y="-9" fontSize="13" fill="#0c0c0c" stroke="#fff" strokeWidth="0.6">
              {name}
            </text>
          </g>
        );
      })}
    </svg>
  );

  const fiveYearBody = `Oceanea will build the world's most immersive underwater entertainment ecosystem,
enabling millions to experience the ocean in entirely new ways.`;
  const thirtyYearBody = `Oceanea aims to unlock the ocean as humanity's next great frontier, opening new
possibilities for exploration, innovation, and discovery.`;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setPathScale({ w: el.clientWidth || 1320, h: el.clientHeight || 1394 });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let raf = 0;
    const calc = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // 进入视口到离开视口的全过程映射到 0..100
      const total = rect.height + vh;
      const passed = vh - rect.top;
      const p = (passed / total) * 100;
      const clamped = Math.max(0, Math.min(100, p));
      setScrollProgress(clamped);
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(calc);
    };

    calc();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return <>
    <DebugBg className={isMobileMode
      ? "relative -translate-x-1/2 left-1/2 fmt-[60/340] aspect-340/400 flex flex-col"
      : "relative -translate-x-1/2 left-1/2 fmt-[160/1320] aspect-1320/920 flex flex-col"}>
      <div ref={containerRef} className="absolute inset-0 pointer-events-none" />
      <img src="/frontier-title.png" className={isMobileMode
        ? "absolute z-10 -translate-x-1/2 left-1/2 w-88/340 "
        : "absolute z-10 -translate-x-1/2 left-1/2 w-261/1320"} />
      <p className={isMobileMode
        ? "relative z-10 text-center fmt-[6/340] font-medium ft-[32/340] fls-[-0.96/340] flh-[35/340]"
        : "relative z-10 text-center fmt-[50/1320] font-medium ft-[96/1320] fls-[-2.88/1320]"}>Shape the Ocean&apos;s Future</p>
      
      {showSwimPath && renderSwimPath()}
      {renderDolphins()}

      <p className={isMobileMode
        ? "relative z-10 fmt-[23/340] text-left ft-[18/340]  font-medium"
        : "relative z-10 fml-[42/1320] fmt-[30/1320] text-left ft-[40/1320] font-medium"}>5-Year Plan</p>
      <p className={isMobileMode
        ? "relative z-10 text-left ft-[14/340] fls-[-0.42/340] flh-[15/340] text-[#626262]"
        : "relative z-10 fml-[42/1320] text-left ft-[28/1320] tracking-[-0.03em] text-[#626262] w-913/1320"}>{fiveYearBody}</p>
      <p className={isMobileMode
        ? "relative z-10 fmt-[182/340] text-right ft-[18/340] font-medium"
        : "relative z-10 fmr-[30/1320] fmt-[357/1320] text-right ft-[40/1320] font-medium"}>30-Year Vision</p>
      <p className={isMobileMode
        ? "relative z-10 text-right ft-[14/340] fls-[-0.42/340] flh-[15/340] text-[#626262]"
        : "relative z-10 ml-auto fmr-[30/1320] text-right ft-[28/1320] tracking-[-0.03em] text-[#626262] w-805/1320"}>{thirtyYearBody}</p>
    </DebugBg>
  </>;
}
