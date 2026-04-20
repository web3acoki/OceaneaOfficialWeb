"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Button from "../common/Button";

type Pt = [number, number];
type JellyPath = { p0: Pt; c1: Pt; c2: Pt; p1: Pt; c3: Pt; c4: Pt; p2: Pt };
type DebugPoint = readonly [string, Pt, string];
type Props = {
  showJellyPaths?: boolean;
};

export default function Real({ showJellyPaths = false }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerW, setContainerW] = useState(1320);
  const swimDurationMs = 7000;
  const jellyAnchorX = 50;
  const jellyAnchorY = 34;
  const jellyHeadOffsetDeg = 90;

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

  const jellyfishes = [
    {
      src: "/real-jellyfish.png",
      sizeClass: "w-414/1320",
      delayMs: 0,
      path: {
        p0: [440, 930],
        c1: [395, 750],
        c2: [285, 645],
        p1: [240, 470],
        c3: [204, 330],
        c4: [155, 278],
        p2: [40, 120],
      } as JellyPath,
    },
    {
      src: "/real-jellyfish.png",
      sizeClass: "w-303/1320",
      delayMs: -4000,
      path: {
        p0: [560, 910],
        c1: [540, 748],
        c2: [460, 666],
        p1: [440, 510],
        c3: [420, 354],
        c4: [395, 300],
        p2: [330, 130],
      } as JellyPath,
    },
    {
      src: "/real-jellyfish.png",
      sizeClass: "w-403/1320",
      delayMs: -2000,
      path: {
        p0: [700, 940],
        c1: [720, 776],
        c2: [800, 692],
        p1: [820, 530],
        c3: [840, 384],
        c4: [870, 314],
        p2: [940, 140],
      } as JellyPath,
    },
    {
      src: "/real-jellyfish.png",
      sizeClass: "w-346/1320",
      delayMs: -6000,
      path: {
        p0: [840, 890],
        c1: [870, 740],
        c2: [970, 652],
        p1: [1000, 500],
        c3: [1035, 348],
        c4: [1065, 309],
        p2: [1130, 160],
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
      className="absolute inset-0 z-20 pointer-events-none overflow-visible"
      viewBox="0 0 1320 1762"
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
    <div
      key={`jelly-${i}`}
      className={`absolute top-0 left-0 ${j.sizeClass}`}
      style={{
        offsetPath: `path("${pathD(j.path)}")`,
        offsetRotate: `auto ${jellyHeadOffsetDeg}deg`,
        offsetAnchor: `${jellyAnchorX}% ${jellyAnchorY}%`,
        animation: `jelly-swim ${swimDurationMs}ms linear ${j.delayMs}ms infinite`,
        willChange: "offset-distance, opacity",
      }}
    >
      {showJellyPaths && (
        <div
          className="absolute z-30 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-[#00d4ff] border border-black"
          style={{ left: `${jellyAnchorX}%`, top: `${jellyAnchorY}%` }}
        />
      )}
      <img
        src={j.src}
        alt=""
        className="block w-full h-auto max-w-none"
        style={{ animation: `jelly-pulse 1700ms ease-in-out ${j.delayMs}ms infinite` }}
      />
    </div>
  ));

  return <>
    <div ref={containerRef} className="relative -translate-x-1/2 left-1/2 fmt-[224/1320] aspect-1320/1163 flex flex-col items-center">

      <div className="absolute inset-0 z-0 pointer-events-none">
        {debugSvg}
        {jellyfishItems}
      </div>

      <p className="relative z-10 ft-[96/1320] font-medium fls-[-2.88/1320] text-center">Built on Real-World Value</p>
      <p className="relative z-10 w-1227/1320 fmt-[27/1320] ft-[28/1320] fls-[-0.84/1320] text-center text-[#626262] whitespace-pre-lin">{bodyText}</p>
      <Button text="Start Your Journey" className="relative z-10 fmt-[556/1320] w-497/1320 aspect-497/80"/>
      <style>{`
        @keyframes jelly-swim {
          0% { offset-distance: 0%; opacity: 0; }
          10% { offset-distance: 10%; opacity: 1; }
          90% { offset-distance: 90%; opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        @keyframes jelly-pulse {
          0%, 100% { transform: scaleX(1.02) scaleY(0.92); }
          50% { transform: scaleX(0.98) scaleY(1.08); }
        }
      `}</style>
    </div>
  </>;
}
