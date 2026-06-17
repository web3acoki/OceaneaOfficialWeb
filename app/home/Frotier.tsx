"use client";

import { useEffect, useRef } from "react";
import { DebugBg } from "@/components/features/DebugMode";
import { useMobileMode } from "@/components/features/MobileMode";

export default function Frotier() {
  const isMobileMode = useMobileMode();
  const frontierVideoRef = useRef<HTMLVideoElement | null>(null);

  const subtitleText = `Oceanea is leading billions of ocean enthusiasts worldwide into a new era of ocean experiences, enabling everyone to approach, experience, and explore the ocean in more diverse, accessible, and evolving ways.`;

  const renderDolphins = () => (
    <div
      className={
        isMobileMode
          ? "absolute inset-0 z-0 flex items-start justify-center pointer-events-none fpt-[205/340]"
          : "absolute inset-0 z-0 flex items-start justify-center pointer-events-none pt-[410px]"
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
            : "w-[749px] h-auto max-w-none object-contain"
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
      : "relative left-1/2 mt-[160px] h-[920px] w-[1140px] -translate-x-1/2 flex flex-col"}>
      <img
        src="/frontier-title.png"
        alt=""
        loading="lazy"
        decoding="async"
        style={{ filter: "brightness(0) opacity(0.14)" }}
        className={isMobileMode
          ? "absolute z-10 -translate-x-1/2 left-1/2 w-88/340 "
          : "absolute z-10 -translate-x-1/2 left-1/2 w-[225px]"}
      />
      <p className={isMobileMode
        ? "relative z-10 text-center fmt-[6/340] font-medium ft-[32/340] fls-[-0.96/340] flh-[35/340]"
        : "relative z-10 mt-[50px] text-center text-[60px] font-medium leading-[70px] tracking-[-1.8px]"}>Shape the Future of Ocean Experiences</p>
      <p className={isMobileMode
        ? "relative z-10 mx-auto fmt-[24/340] ft-[14/340] fls-[-0.42/340] text-center text-[#7D7D7D] flh-[15/340] fmx-[20/340]"
        : "relative z-10 mx-auto mt-[24px] w-[920px] text-center text-[24px] font-normal leading-[30px] tracking-[-0.72px] text-[#7D7D7D] whitespace-pre-line"}>{subtitleText}</p>
      {renderDolphins()}
    </DebugBg>
  </>;
}
