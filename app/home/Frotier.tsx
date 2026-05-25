"use client";

import { useEffect, useRef } from "react";
import { DebugBg } from "@/components/features/DebugMode";
import { useMobileMode } from "@/components/features/MobileMode";

export default function Frotier() {
  const isMobileMode = useMobileMode();
  const frontierVideoRef = useRef<HTMLVideoElement | null>(null);

  /** Figma node 3-177 — 副标题文案以稿为准，此处为占位 */
  const subtitleText = `Oceanea is building the world's most immersive ocean entertainment ecosystem — redefining how billions experience the ocean and opening humanity's next great frontier for exploration, innovation, and discovery.`;

  const renderDolphins = () => (
    <div
      className={
        isMobileMode
          ? "absolute inset-0 z-0 flex items-start justify-center pointer-events-none fpt-[205/340]"
          : "absolute inset-0 z-0 flex items-start justify-center pointer-events-none fpt-[410/1320]"
      }
      data-frontier-dolphin="static"
      style={{
        offsetPath: "none",
        offsetDistance: "0%",
        offsetRotate: "0deg",
        transform: "none",
      }}
    >
      <video
        ref={frontierVideoRef}
        className={
          isMobileMode
            ? "w-300/340 h-auto max-w-none object-contain"
            : "w-749/1320 h-auto max-w-none object-contain"
        }
        src="/frontier.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />
    </div>
  );

  /** frontier.mp4：淡入淡出 — 播放中用 rAF 每帧算 opacity（timeupdate 太稀会阶梯） */
  useEffect(() => {
    const v = frontierVideoRef.current;
    if (!v) return;
    const fadeSec = 1;
    let rafId = 0;

    const loop = () => {
      rafId = 0;
      const d = v.duration;
      if (!(d > 0) || !Number.isFinite(d)) {
        if (!v.paused) rafId = requestAnimationFrame(loop);
        return;
      }
      const t = v.currentTime;
      const edge = Math.min(fadeSec, Math.max(0.05, d / 2 - 0.01));
      v.style.opacity = String(
        t <= edge ? t / edge : t >= d - edge ? Math.max(0, (d - t) / edge) : 1,
      );
      if (!v.paused) rafId = requestAnimationFrame(loop);
    };

    const start = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(loop);
    };
    const stop = () => cancelAnimationFrame(rafId);

    v.addEventListener("play", start);
    v.addEventListener("playing", start);
    v.addEventListener("pause", stop);
    if (!v.paused) start();

    return () => {
      stop();
      v.removeEventListener("play", start);
      v.removeEventListener("playing", start);
      v.removeEventListener("pause", stop);
      v.style.opacity = "";
    };
  }, []);

  return <>
    <DebugBg className={isMobileMode
      ? "relative -translate-x-1/2 left-1/2 fmt-[60/340] aspect-340/400 flex flex-col"
      : "relative -translate-x-1/2 left-1/2 fmt-[160/1320] aspect-1320/920 flex flex-col"}>
      <img
        src="/frontier-title.png"
        alt=""
        loading="lazy"
        decoding="async"
        className={isMobileMode
          ? "absolute z-10 -translate-x-1/2 left-1/2 w-88/340 "
          : "absolute z-10 -translate-x-1/2 left-1/2 w-261/1320"}
      />
      <p className={isMobileMode
        ? "relative z-10 text-center fmt-[6/340] font-medium ft-[32/340] fls-[-0.96/340] flh-[35/340]"
        : "relative z-10 text-center fmt-[50/1320] font-medium ft-[96/1320] fls-[-2.88/1320]"}>Shape the Ocean&apos;s Future</p>
      <p className={isMobileMode
        ? "relative z-10 mx-auto fmt-[24/340] ft-[14/340] fls-[-0.42/340] text-center text-[#7D7D7D] flh-[15/340] fmx-[20/340]"
        : "relative z-10 fmx-[200/1320] fmt-[27/1320] ft-[28/1320] fls-[-0.84/1320] text-center text-[#7D7D7D] whitespace-pre-line"}>{subtitleText}</p>
      {renderDolphins()}
    </DebugBg>
  </>;
}
