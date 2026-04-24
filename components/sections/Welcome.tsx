import Button from "../common/Button";
import { useDebugMode } from "../features/DebugMode";


export default function Welcome() {
  const showDebug = useDebugMode();

  /**
   * Figma：Divers 组先占 inset-[2.36%_18.65%_92.1%_18.85%]，五个 Object 的 inset 相对**该组**（见 cssComponents Welcome）。
   * 合成到 Welcome 容器（1320×978）：left = 18.85%·W + left%·W_d，top = 2.36%·H + top%·H_d（W_d≈825px，H_d≈54px）。
   * fmt/fml 分子为 px，与稿在 1320 宽时一致；横向差距大、纵向都在窄条里故 fmt 数值接近。
   */
  const divers = [
    { src: "/welcome-diver-1.png", imgClass: "absolute w-169/1320 fmt-[334/1320] fml-[62/1320]", delayMs: 0 },
    { src: "/welcome-diver-2.png", imgClass: "absolute w-125/1320 fmt-[28/1320] fml-[554/1320]", delayMs: 3000 },
    { src: "/welcome-diver-5.png", imgClass: "absolute w-196/1320 fmt-[133/1320] fml-[829/1320]", delayMs: 1000 },
    { src: "/welcome-diver-4.png", imgClass: "absolute w-196/1320 fmt-[400/1320] fml-[969/1320]", delayMs: 4000 },
    { src: "/welcome-diver-3.png", imgClass: "absolute w-230/1320 fmt-[642/1320] fml-[1026/1320]", delayMs: 2000 },
  ] as const;

  const titleText = "Experienced, Explore, and Own the Ocean";
  const subtitleText = `Oceanea is a decentralized ocean ecosystem,
redefining underwater experiences,
revealing uncharted depths,
and empowering everyone to cocreate and share in the ocean together.`;

  const diversKeyframes = `
    @keyframes divers-float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
  `;

  return <>
    <div className="relative -translate-x-1/2 left-1/2 fmt-[125/1320] aspect-1320/800 overflow-hidden fr-[64/1320] @container-[size]">
      {/* 背景水面波动（仅作用于背景图） */}
      <svg className="absolute size-0" aria-hidden focusable="false">
  <filter
    id="welcome-water-ripple"
    x="-20%"
    y="-20%"
    width="140%"
    height="140%"
  >
    <feTurbulence
      type="fractalNoise"
      baseFrequency="0.1 0.1"
      numOctaves="1"
      seed="0"
      result="noise"
    >
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
      <feDisplacementMap
        in="SourceGraphic"
        in2="noise"
        scale="30"
        xChannelSelector="R"
        yChannelSelector="G"
      >
        <animate
          attributeName="scale"
          dur="26s"
          values="4;7;4"
          repeatCount="indefinite"
        />
      </feDisplacementMap>
    )}
  </filter>
</svg>
      <img
        src="/welcome-back.png"
        className="absolute top-[-79.38%] left-[-8.09%] w-[116.17%] max-w-none"
        style={{ filter: "url(#welcome-water-ripple)" }}
      />
      <div className="absolute inset-0">
        {divers.map((d) => (
          <img
            key={d.src}
            src={d.src}
            className={`${d.imgClass} will-change-transform`}
            style={{ animation: `divers-float 5000ms ease-in-out ${d.delayMs}ms infinite` }}
          />
        ))}
      </div>
      <div className="relative flex flex-col items-center text-center text-white">
        <p className={"fmt-[252/1320] fmx-[73/1320] ft-[82/1320] font-medium flh-[85/1320] tracking-[-0.03em]"}>{titleText}</p>
        <p className={"fmt-[23/1320] w-950/1320 ft-[32/1320] flh-[35/1320] tracking-[-0.03em]"}>{subtitleText}</p>
        <Button text="Join Oceanea" className={"fmt-[75/1320] w-385/1320 aspect-385/60"}/>
      </div>
      <style>{diversKeyframes}</style>
    </div>
  </>;
}