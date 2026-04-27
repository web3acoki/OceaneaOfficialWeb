import Button from "../common/Button";
import { useDebugMode } from "../features/DebugMode";
import { useMobileMode } from "../features/MobileMode";


export default function Welcome() {
  const showDebug = useDebugMode();
  const isMobileMode = useMobileMode();

  /**
   * Figma：Divers 组先占 inset-[2.36%_18.65%_92.1%_18.85%]，五个 Object 的 inset 相对**该组**（见 cssComponents Welcome）。
   * 合成到 Welcome 容器（1320×978）：left = 18.85%·W + left%·W_d，top = 2.36%·H + top%·H_d（W_d≈825px，H_d≈54px）。
   * fmt/fml 分子为 px，与稿在 1320 宽时一致；横向差距大、纵向都在窄条里故 fmt 数值接近。
   */
  const divers = [
    // mobile 参数来自 Figma 1020:1382 metadata（frame 300×282），按子节点相对 frame 的 px 位置换算到 /340
    { src: "/welcome-diver-1.png", imgClass: isMobileMode ? "absolute w-46/340 fmt-[233/340] fml-[28/340]" :
    "absolute w-169/1320 fmt-[334/1320] fml-[62/1320]", delayMs: 0 },
    { src: "/welcome-diver-2.png", imgClass: isMobileMode ? "absolute w-33/340 fmt-[42/340] fml-[117/340]" :
    "absolute w-125/1320 fmt-[28/1320] fml-[554/1320]", delayMs: 3000 },
    { src: "/welcome-diver-5.png", imgClass: isMobileMode ? "absolute w-52/340 fmt-[133/340] fml-[199/340]" :
    "absolute w-196/1320 fmt-[133/1320] fml-[829/1320]", delayMs: 1000 },
    { src: "/welcome-diver-4.png", imgClass: isMobileMode ? "absolute w-54/340 fmt-[214/340] fml-[238/340]" :
    "absolute w-196/1320 fmt-[400/1320] fml-[969/1320]", delayMs: 4000 },
    { src: "/welcome-diver-3.png", imgClass: isMobileMode ? "absolute w-63/340 fmt-[289/340] fml-[265/340]" :
    "absolute w-230/1320 fmt-[642/1320] fml-[1026/1320]", delayMs: 2000 },
  ] as const;

  const titleText = "Experience, Explore, and Own the Ocean";
  const subtitleText = `Oceanea is a decentralized ocean ecosystem,
redefining underwater experiences,
revealing uncharted depths,
and empowering everyone to cocreate and share in the ocean together.`;

  const diversKeyframes = `
    @keyframes divers-float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(calc(-20 / 1320 * 100vw)); }
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
      <img
        src="/welcome-back.png"
        className={isMobileMode ? "absolute h-[156.6%] left-[-9.84%] top-[-33.15%] w-[127.19%] max-w-none" : 
        "absolute top-[-79.38%] left-[-8.09%] w-[116.17%] max-w-none"}
        style={ { filter: "url(#welcome-water-ripple)" }}
      />
    </>
  );

  return <>
    <div className={isMobileMode ? "relative -translate-x-1/2 left-1/2 fmt-[48/340] aspect-340/340 fr-[15/340] overflow-hidden" :
    "relative -translate-x-1/2 left-1/2 fmt-[125/1320] aspect-1320/800 fr-[64/1320] overflow-hidden"}>
      {waterRippleBg}
      <div className="absolute inset-0">
        {divers.map((d) => (<img key={d.src} src={d.src} className={`${d.imgClass}`} 
        style={{ animation: `divers-float 5000ms ease-in-out ${d.delayMs}ms infinite` }}/>))}
      </div>
      <div className="relative flex flex-col items-center text-center text-white">
        <p className={isMobileMode ? "fmt-[100/340] fmx-[10/340] ft-[22/340] font-medium flh-[24/340] fls-[-0.66/340]" : 
        "fmt-[252/1320] fmx-[73/1320] ft-[82/1320] font-medium flh-[85/1320] fls-[-2.46/1320]"}>{titleText}</p>
        <p className={isMobileMode ? "fmt-[23/340] w-260/340 font-light ft-[14/340] flh-[13/340] fls-[-0.42/340]" :
        "fmt-[23/1320] w-950/1320 ft-[32/1320] flh-[35/1320] fls-[-0.96/1320]"}>{subtitleText}</p>
        <Button text="Join Oceanea" className={isMobileMode ? "fmt-[49/340] w-95/340 aspect-95/20" :
        "fmt-[75/1320] w-385/1320 aspect-385/60"}/>
      </div>
      <style>{diversKeyframes}</style>
    </div>
  </>;
}