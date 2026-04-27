"use client";

import { useEffect, useRef, useState } from "react";
import Button from "../common/Button";
import { DebugBg, useDebugMode } from "../features/DebugMode";

type Pt = [number, number];
type JellyPath = { p0: Pt; c1: Pt; c2: Pt; p1: Pt; c3: Pt; c4: Pt; p2: Pt };
type DebugPoint = readonly [string, Pt, string];
export default function Real() {
  const showJellyPaths = useDebugMode();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerW, setContainerW] = useState(1320);
  const swimDurationMs = 5000;
  const jellyHeadOffsetDeg = 90;
  // 严格模仿海豚：图片固定 top-0 left-0；锚点用「图片真实中心」投影到 overlay 百分比
  // 不猜纵横比：从图片 onLoad 的 naturalWidth/Height 获取
  const [imgAspectByIndex, setImgAspectByIndex] = useState<Record<number, number>>({});

  const scale = (v: number) => (v * containerW) / 1320;
  const spt = ([x, y]: Pt) => [scale(x), scale(y)] as const;
  const pathD = (pts: JellyPath) => {
    const [x0, y0] = spt(pts.p0);
    const [x1, y1] = spt(pts.c1);
    const [x2, y2] = spt(pts.c2);
    const [x3, y3] = spt(pts.p1);
    const [x4, y4] = spt(pts.c3);
    const [x5, y5] = spt(pts.c4);
    const [x6, y6] = spt(pts.p2);
    return `M ${x0} ${y0} C ${x1} ${y1}, ${x2} ${y2}, ${x3} ${y3} C ${x4} ${y4}, ${x5} ${y5}, ${x6} ${y6}`;
  };
  const debugViewBoxH = (920 * containerW) / 1320;

  const jellyfishes = [
    {
      src: "/real-jellyfish.png",
      sizeW: 414,
      sizeClass: "w-414/1320",
      delayMs: 0,
      path: {
        p0: [410, 855],
        c1: [380, 738],
        c2: [294, 669],
        p1: [260, 556],
        c3: [226, 442],
        c4: [180, 431],
        p2: [120, 328],
      } as JellyPath,
    },
    {
      src: "/real-jellyfish.png",
      sizeW: 303,
      sizeClass: "w-303/1320",
      delayMs: -3000,
      path: {
        p0: [550, 842],
        c1: [535, 736],
        c2: [475, 683],
        p1: [460, 582],
        c3: [445, 480],
        c4: [400, 445],
        p2: [378, 335],
      } as JellyPath,
    },
    {
      src: "/real-jellyfish.png",
      sizeW: 403,
      sizeClass: "w-403/1320",
      delayMs: -1000,
      path: {
        p0: [690, 861],
        c1: [705, 754],
        c2: [765, 700],
        p1: [780, 595],
        c3: [795, 489],
        c4: [840, 454],
        p2: [870, 341],
      } as JellyPath,
    },
    {
      src: "/real-jellyfish.png",
      sizeW: 346,
      sizeClass: "w-346/1320",
      delayMs: -4000,
      path: {
        p0: [880, 829],
        c1: [903, 731],
        c2: [978, 674],
        p1: [1000, 575],
        c3: [1023, 476],
        c4: [1060, 451],
        p2: [1080, 354],
      } as JellyPath,
    },
  ] as const;
  const bodyText = `Oceanea's value is built on real-world impact, providing a solid foundation for the ecosystem.
Its incentive system attracts diverse contributions, driving innovative experiences and rich engagement, lowering participation barriers, and welcoming more ocean enthusiasts while
generating tangible real-world outcomes. Together, participants share a mission to explore the
unknown and advance the ocean ecosystem.`;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setContainerW(el.clientWidth || 1320);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const debugSvg = showJellyPaths ? (
    <svg
      className="absolute inset-0 z-110 pointer-events-none overflow-visible"
      viewBox={`0 0 ${containerW} ${debugViewBoxH}`}
      preserveAspectRatio="none"
      style={{ overflow: "visible" }}
      aria-hidden
    >
      {jellyfishes.map((j, i) => {
        const points: readonly DebugPoint[] = [
          ["P0", j.path.p0, "#ef4444"],
          ["C1", j.path.c1, "#3b82f6"],
          ["C2", j.path.c2, "#3b82f6"],
          ["P1", j.path.p1, "#ef4444"],
          ["C3", j.path.c3, "#3b82f6"],
          ["C4", j.path.c4, "#3b82f6"],
          ["P2", j.path.p2, "#ef4444"],
        ] as const;

        return (
          <g key={`path-${i}`}>
            <path
              d={pathD(j.path)}
              fill="none"
              stroke="rgba(12,12,12,0.35)"
              strokeWidth="2.5"
              strokeDasharray="8 7"
            />
            {(
              [
                [j.path.p0, j.path.c1],
                [j.path.p1, j.path.c2],
                [j.path.p1, j.path.c3],
                [j.path.p2, j.path.c4],
              ] as const
            ).map(([[px, py], [cx, cy]], idx) => (
              <line
                key={`pc-line-${i}-${idx}`}
                x1={scale(px)}
                y1={scale(py)}
                x2={scale(cx)}
                y2={scale(cy)}
                stroke="rgba(59,130,246,0.7)"
                strokeWidth="1.6"
                strokeDasharray="4 4"
              />
            ))}
            {points.map(([name, [x0, y0], color]) => (
              <g key={`${i}-${name}`} transform={`translate(${scale(x0)} ${scale(y0)})`}>
                <circle r="5" fill={color} stroke="#fff" strokeWidth="1.8" />
                <text x="8" y="-8" fontSize="11" fill="#0c0c0c" stroke="#fff" strokeWidth="0.5">{`${name}-${i + 1}`}</text>
              </g>
            ))}
          </g>
        );
      })}
    </svg>
  ) : null;

  const jellyfishItems = jellyfishes.map((j, i) => (
    // 结构对齐海豚：同一个作用域里同时生成 path + anchor，并用于 offsetAnchor 与 debug 点位
    <div
      key={`jelly-${i}`}
      className="absolute inset-0"
      style={{
        offsetPath: `path("${pathD(j.path)}")`,
        offsetRotate: `auto ${jellyHeadOffsetDeg}deg`,
        // 图片固定 top-0 left-0，所以图片中心在 overlay 上的百分比 = (w/1320)*50, (h/1320)*50
        // h 由图片真实纵横比推导：h = w * aspect
        offsetAnchor: (() => {
          const aspect = imgAspectByIndex[i] ?? 1; // 图片未加载前先用 1，占位；加载后自动校正
          const xPct = (j.sizeW / 1320) * 50;
          const yPct = ((j.sizeW * aspect) / 1320) * 50;
          return `${xPct}% ${yPct}%`;
        })(),
        animation: `jelly-swim ${swimDurationMs}ms linear ${j.delayMs}ms infinite`,
        willChange: "offset-distance, opacity",
      }}
    >
      {showJellyPaths && (
        (() => {
          const aspect = imgAspectByIndex[i] ?? 1;
          const xPct = (j.sizeW / 1320) * 50;
          const yPct = ((j.sizeW * aspect) / 1320) * 50;
          return (
            <>
              <div
                className="absolute z-120 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-[#00d4ff] border border-black"
                style={{ left: `${xPct}%`, top: `${yPct}%` }}
              />
              <div
                className="absolute z-120 -translate-x-1/2 -translate-y-1/2 size-1.5 rounded-full bg-lime-400 border border-black"
                style={{ left: `${xPct}%`, top: `${yPct}%` }}
              />
            </>
          );
        })()
      )}
      <img
        src={j.src}
        alt=""
        className={`absolute top-0 left-0 block h-auto max-w-none ${j.sizeClass}`}
        onLoad={(e) => {
          const img = e.currentTarget;
          const nw = img.naturalWidth;
          const nh = img.naturalHeight;
          if (!nw || !nh) return;
          const aspect = nh / nw;
          setImgAspectByIndex((prev) => (prev[i] === aspect ? prev : { ...prev, [i]: aspect }));
        }}
        style={{ animation: `jelly-pulse 1700ms ease-in-out ${j.delayMs}ms infinite` }}
      />
    </div>
  ));

  return <>
    <DebugBg className="relative -translate-x-1/2 left-1/2 fmt-[224/1320] aspect-1320/920 flex flex-col items-center">

      <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none">
        {debugSvg}
        {jellyfishItems}
      </div>

      <p className="relative z-10 ft-[96/1320] font-medium fls-[-2.88/1320] text-center">Built on Real-World Value</p>
      <p className="relative z-10 w-1227/1320 fmt-[27/1320] ft-[28/1320] fls-[-0.84/1320] text-center text-[#626262] whitespace-pre-lin">{bodyText}</p>
      <Button text="Start Your Journey" className="relative z-10 fmt-[450/1320] w-497/1320 aspect-497/80"/>
      <style>{`
        @keyframes jelly-swim {
          0% { offset-distance: 0%; opacity: 0; }
          20% { offset-distance: 20%; opacity: 1; }
          60% { offset-distance: 60%; opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        @keyframes jelly-pulse {
          0%, 100% { transform: scaleX(1.02) scaleY(0.92); }
          50% { transform: scaleX(0.98) scaleY(1.08); }
        }
      `}</style>
    </DebugBg>
  </>;
}