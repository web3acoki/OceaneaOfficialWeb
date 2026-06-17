import type { CSSProperties } from "react";
import Button from "@/components/common/Button";
import LoadedImage from "@/components/common/LoadedImage";
import { useDebugMode } from "@/components/features/DebugMode";
import { useMobileMode } from "@/components/features/MobileMode";


export default function Welcome() {
  const showDebug = useDebugMode();
  const isMobileMode = useMobileMode();

  const mobileTitleLines = ["Experience", "Explore", "Own the Ocean"] as const;
  const mobileSubtitleText =
    "Oceanea is a global ocean experience network connecting digital and real-world encounters, opening a new way for people to experience the ocean and begin their ocean life.";

  const desktopDivers = [
    { src: "/figma/desktop-home/diver-1-371abd.png", className: "left-[calc(62/1320*100%)] top-[calc(353/843*100%)] w-[calc(169/1320*100%)]", imgClassName: "", delayMs: 2000 },
    { src: "/figma/desktop-home/diver-2-6e73a3.png", className: "left-[calc(561/1320*100%)] top-[calc(13/843*100%)] w-[calc(125/1320*100%)]", imgClassName: "", delayMs: 3000 },
    { src: "/figma/desktop-home/diver-3-2d7a53.png", className: "left-[calc(831/1320*100%)] top-[calc(86/843*100%)] w-[calc(196/1320*100%)]", imgClassName: "", delayMs: 0 },
    { src: "/figma/desktop-home/diver-4-275893.png", className: "left-[calc(973/1320*100%)] top-[calc(381/843*100%)] w-[calc(198/1320*100%)]", imgClassName: "", delayMs: 4000 },
    { src: "/figma/desktop-home/diver-5-6f5332.png", className: "left-[calc(1032/1320*100%)] top-[calc(666/843*100%)] w-[calc(230/1320*100%)]", imgClassName: "rotate-180", delayMs: 1000 },
  ] as const;

  const mobileDivers = [
    { src: "/figma/mobile-home/diver-top-left-6e73a3.png", className: "left-[calc(107/362*100%)] top-[calc(56/631*100%)] w-[calc(45/362*100%)]", imgClassName: "", delayMs: 0 },
    { src: "/figma/mobile-home/diver-top-right-2d7a53.png", className: "left-[calc(280/362*100%)] top-[calc(159/631*100%)] w-[calc(63/362*100%)]", imgClassName: "", delayMs: 3000 },
    { src: "/figma/mobile-home/diver-mid-left-new-6f5332.png", className: "left-[calc(39/362*100%)] top-[calc(335/631*100%)] w-[calc(95.51/362*100%)]", imgClassName: "rotate-180", delayMs: 1000 },
    { src: "/figma/mobile-home/diver-mid-right-275893.png", className: "left-[calc(246/362*100%)] top-[calc(290/631*100%)] w-[calc(72/362*100%)]", imgClassName: "", delayMs: 4000 },
    { src: "/figma/mobile-home/diver-bottom-left-final-371abd.png", className: "left-[calc(170/362*100%)] top-[calc(410/631*100%)] w-[calc(69/362*100%)]", imgClassName: "", delayMs: 2000 },
  ] as const;

  const diversKeyframes = `
    @keyframes divers-float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(calc(-1 * var(--diver-float-distance, calc(20 / 1320 * 100vw)))); }
    }
  `;
  
  const waterRippleBg = (
    <>
      <svg className="absolute size-0" aria-hidden focusable="false">
        <filter id="welcome-water-ripple" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.1 0.1" numOctaves="1" seed="0" result="noise">
            <animate
              attributeName="baseFrequency"
              dur="45s"
              values="0.03 0.03;0.0371 0.0371;0.04 0.04;0.0371 0.0371;0.03 0.03;0.0229 0.0229;0.02 0.02;0.0229 0.0229;0.03 0.03"
              keyTimes="0;0.125;0.25;0.375;0.5;0.625;0.75;0.875;1"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </feTurbulence>

          {!showDebug && (
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" xChannelSelector="R" yChannelSelector="G">
              <animate attributeName="scale" dur="26s" values="4;7;4" repeatCount="indefinite" />
            </feDisplacementMap>
          )}
        </filter>
      </svg>
      <LoadedImage
        src="/figma/desktop-home/welcome-back.png"
        alt=""
        fetchPriority="high"
        decoding="async"
        frameClassName="absolute inset-0"
        className="size-full object-cover"
        style={{ filter: "url(#welcome-water-ripple)" }}
      />
    </>
  );

  if (isMobileMode) {
    return (
      <div className="relative left-1/2 fmt-[50/362] aspect-[362/631] w-full -translate-x-1/2 overflow-hidden rounded-[15px] text-white">
        <img
          src="/figma/mobile-home/hero-bg-3798b0.png"
          alt=""
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 size-full rounded-[15px] object-cover"
        />
        {mobileDivers.map((diver) => (
          <div
            key={diver.src}
            className={`pointer-events-none absolute select-none ${diver.className}`}
            style={{
              "--diver-float-distance": "12px",
              animation: `divers-float 4600ms ease-in-out ${diver.delayMs}ms infinite`,
            } as CSSProperties}
          >
            <img
              src={diver.src}
              alt=""
              decoding="async"
              className={`block w-full max-w-none ${diver.imgClassName}`}
            />
          </div>
        ))}
        <div className="absolute left-[calc(29/362*100%)] top-[calc(153/631*100%)] w-[calc(336/362*100%)] text-left text-[32px] font-medium uppercase leading-[42px] tracking-[-0.03em]">
          {mobileTitleLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className="absolute left-1/2 top-[calc(507/631*100%)] flex w-[calc(316/362*100%)] -translate-x-1/2 items-start justify-center">
          <p className="text-center text-[clamp(10px,3.05vw,11.2px)] font-light leading-[1.18] tracking-[-0.03em]">
            {mobileSubtitleText}
          </p>
        </div>
        <Button
          text="Join Oceanea"
          className="absolute left-[calc(100/362*100%)] top-[calc(582/631*100%)] h-[31px] w-[163px] px-4 py-2"
          textClassName="!text-[15px] font-bold leading-[normal]"
          onClick={() => window.dispatchEvent(new Event("oceanea:auth-action"))}
        />
        <img
          src="/figma/mobile-home/logo-mark.svg"
          alt=""
          className="hidden"
        />
        <style>{diversKeyframes}</style>
      </div>
    );
  }

  return (
    <div className="relative left-1/2 mt-[111px] aspect-[1320/843] w-[min(calc(100vw-80px),1320px)] -translate-x-1/2 overflow-hidden rounded-[50px] text-white @container-[size]">
      {waterRippleBg}
      {desktopDivers.map((diver) => (
        <div
          key={diver.src}
          className={`pointer-events-none absolute select-none ${diver.className}`}
          style={{
            "--diver-float-distance": "calc(20 / 1320 * 100cqw)",
            animation: `divers-float 5000ms ease-in-out ${diver.delayMs}ms infinite`,
          } as CSSProperties}
        >
          <img
            src={diver.src}
            alt=""
            decoding="async"
            className={`block w-full max-w-none ${diver.imgClassName}`}
          />
        </div>
      ))}
      <div className="absolute left-[calc(239/1320*100%)] top-[calc(245/843*100%)] w-[calc(586/1320*100%)] text-left font-medium tracking-[-0.03em] [font-size:calc(82/1320*100cqw)] [line-height:calc(85/1320*100cqw)]">
        {mobileTitleLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <p className="absolute left-[calc(208/1320*100%)] top-[calc(552/843*100%)] w-[calc(905/1320*100%)] text-center font-normal tracking-[-0.03em] [font-size:calc(32/1320*100cqw)] [line-height:calc(35/1320*100cqw)]">
        {mobileSubtitleText}
      </p>
      <Button
        text="Join Oceanea"
        className="absolute left-[calc(468/1320*100%)] top-[calc(710/843*100%)] h-[calc(60/843*100%)] w-[calc(385/1320*100%)]"
        textClassName="!text-[clamp(20px,calc(36/1320*100cqw),36px)] font-bold leading-[normal]"
        onClick={() => window.dispatchEvent(new Event("oceanea:auth-action"))}
      />
      <style>{diversKeyframes}</style>
    </div>
  );
}
