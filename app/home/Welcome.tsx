import type { CSSProperties } from "react";
import Button from "@/components/common/Button";
import LoadedImage from "@/components/common/LoadedImage";
import { useDebugMode } from "@/components/features/DebugMode";
import { useMobileMode } from "@/components/features/MobileMode";


export default function Welcome() {
  const showDebug = useDebugMode();
  const isMobileMode = useMobileMode();

  const mobileDivers = [
    { src: "/figma/mobile-home/diver-top-left.png", className: "left-[calc(107/362*100%)] top-[calc(56/631*100%)] w-[calc(45/362*100%)]", imgClassName: "", delayMs: 0 },
    { src: "/figma/mobile-home/diver-top-right.png", className: "left-[calc(280/362*100%)] top-[calc(159/631*100%)] w-[calc(63/362*100%)]", imgClassName: "", delayMs: 3000 },
    { src: "/figma/mobile-home/diver-mid-left-new.png", className: "left-[calc(19/362*100%)] top-[calc(305/631*100%)] w-[calc(96/362*100%)]", imgClassName: "rotate-[160.46deg]", delayMs: 1000 },
    { src: "/figma/mobile-home/diver-mid-right.png", className: "left-[calc(246/362*100%)] top-[calc(290/631*100%)] w-[calc(72/362*100%)]", imgClassName: "", delayMs: 4000 },
    { src: "/figma/mobile-home/diver-bottom-left-final.png", className: "left-[calc(170/362*100%)] top-[calc(441/631*100%)] w-[calc(69/362*100%)]", imgClassName: "", delayMs: 2000 },
  ] as const;

  const divers = [
    { src: "/welcome-diver-1.png", imgClass: isMobileMode
      ? "absolute w-46/340 fmt-[233/340] fml-[28/340]"
      : "absolute w-169/1320 fmt-[334/1320] fml-[62/1320]", delayMs: 0 },
    { src: "/welcome-diver-2.png", imgClass: isMobileMode
      ? "absolute w-33/340 fmt-[42/340] fml-[117/340]"
      : "absolute w-125/1320 fmt-[28/1320] fml-[554/1320]", delayMs: 3000 },
    { src: "/welcome-diver-5.png", imgClass: isMobileMode
      ? "absolute w-52/340 fmt-[133/340] fml-[199/340]"
      : "absolute w-196/1320 fmt-[133/1320] fml-[829/1320]", delayMs: 1000 },
    { src: "/welcome-diver-4.png", imgClass: isMobileMode
      ? "absolute w-54/340 fmt-[214/340] fml-[238/340]"
      : "absolute w-196/1320 fmt-[400/1320] fml-[969/1320]", delayMs: 4000 },
    { src: "/welcome-diver-3.png", imgClass: isMobileMode
      ? "absolute w-63/340 fmt-[289/340] fml-[265/340]"
      : "absolute w-230/1320 fmt-[642/1320] fml-[1026/1320]", delayMs: 2000 },
  ] as const;

  const titleText = "Experience, Explore, and Own the Ocean";
  const subtitleText = `Oceanea is a decentralized ocean ecosystem, redefining underwater experiences, revealing uncharted depths, and empowering everyone to cocreate and share in the ocean together.`;

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
        src="/welcome-back.png"
        alt=""
        fetchPriority="high"
        decoding="async"
        frameClassName={isMobileMode
          ? "absolute h-[156.6%] left-[-9.84%] top-[-33.15%] w-[127.19%]"
          : "absolute top-[-79.38%] left-[-8.09%] w-[116.17%]"}
        className="size-full max-w-none"
        style={{ filter: "url(#welcome-water-ripple)" }}
      />
    </>
  );

  if (isMobileMode) {
    return (
      <div className="relative left-1/2 fmt-[50/362] aspect-[362/631] w-full -translate-x-1/2 overflow-hidden rounded-[15px] text-white">
        <img
          src="/figma/mobile-home/hero-bg.png"
          alt=""
          fetchPriority="high"
          decoding="async"
          className="absolute left-[-5.41%] top-[-2.27%] h-[144.83%] w-[110.94%] max-w-none"
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
        <div className="absolute left-[calc(29/362*100%)] top-[calc(139/631*100%)] w-[calc(304/362*100%)] text-center text-[clamp(20px,6.08cqw,22px)] font-medium leading-[1.14] tracking-[-0.03em]">
          <p>Experience, Explore, and Own</p>
          <p>the Ocean</p>
        </div>
        <p className="absolute left-[calc(49/362*100%)] top-[calc(196/631*100%)] w-[calc(256/362*100%)] text-center text-[clamp(11px,3.32cqw,12px)] font-normal leading-[1.08] tracking-[-0.03em]">
          {subtitleText}
        </p>
        <Button
          text="Join Oceanea"
          className="absolute left-1/2 top-[calc(286/631*100%)] -translate-x-1/2 w-180/340 aspect-180/30"
          textClassName="text-[20px] font-bold leading-[normal]"
          onClick={() => window.dispatchEvent(new Event("oceanea:auth-action"))}
        />
        <img
          src="/figma/mobile-home/logo-mark.svg"
          alt=""
          className="absolute left-[calc(114/362*100%)] top-[calc(588/631*100%)] h-[calc(18/631*100%)] w-[calc(130/362*100%)] max-w-none"
        />
        <style>{diversKeyframes}</style>
      </div>
    );
  }

  return <>
    <div className={isMobileMode
      ? "relative -translate-x-1/2 left-1/2 fmt-[48/340] aspect-340/340 fr-[15/340] overflow-hidden"
      : "relative left-1/2 mt-[111px] h-[860px] w-[min(calc(100vw-80px),1140px)] -translate-x-1/2 overflow-hidden rounded-[50px]"}>
      {waterRippleBg}
      <div className="absolute inset-0">
        {divers.map((d) => (
          <LoadedImage
            key={d.src}
            src={d.src}
            alt=""
            decoding="async"
            frameClassName={d.imgClass}
            className="size-full max-w-none"
            style={{ animation: `divers-float 5000ms ease-in-out ${d.delayMs}ms infinite` }}
          />
        ))}
      </div>
      {isMobileMode ? (
        <div className="relative flex flex-col items-center text-center text-white">
          <p className="fmt-[100/340] fmx-[10/340] ft-[22/340] font-medium flh-[24/340] fls-[-0.66/340]">{titleText}</p>
          <p className="fmt-[23/340] w-260/340 font-light ft-[14/340] flh-[13/340] fls-[-0.42/340]">{subtitleText}</p>
          <Button text="Join Oceanea" className="fmt-[49/340] w-95/340 aspect-95/20" onClick={() => window.dispatchEvent(new Event("oceanea:auth-action"))} />
        </div>
      ) : (
        <div className="absolute left-[86px] top-[301px] flex w-[969px] flex-col items-center gap-[33px] rounded-[50px] text-center text-white">
          <div className="flex w-full flex-col items-center gap-[18px]">
            <div className="w-full text-[64px] font-medium leading-[70px] tracking-[-1.92px]">
              <p>Experience, Explore, and Own</p>
              <p>the Ocean</p>
            </div>
            <p className="w-[495px] text-[20px] font-medium leading-[26px] tracking-[-0.6px]">{subtitleText}</p>
          </div>
          <Button
            text="Join Oceanea"
            className="h-[50px] w-[195px]"
            textClassName="text-[20px] font-bold leading-[normal]"
            onClick={() => window.dispatchEvent(new Event("oceanea:auth-action"))}
          />
        </div>
      )}
      <style>{diversKeyframes}</style>
    </div>
  </>;
}
