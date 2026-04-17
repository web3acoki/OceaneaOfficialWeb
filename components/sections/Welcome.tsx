import Button from "../common/Button";

export default function Welcome() {

  /**
   * Figma：Divers 组先占 inset-[2.36%_18.65%_92.1%_18.85%]，五个 Object 的 inset 相对**该组**（见 cssComponents Welcome）。
   * 合成到 Welcome 容器（1320×978）：left = 18.85%·W + left%·W_d，top = 2.36%·H + top%·H_d（W_d≈825px，H_d≈54px）。
   * fmt/fml 分子为 px，与稿在 1320 宽时一致；横向差距大、纵向都在窄条里故 fmt 数值接近。
   */
  const divers = [
    {src: "/welcome-diver-1.png",imgClass:"absolute w-169/1320 fmt-[354/1320] fml-[62/1320]"},
    {src: "/welcome-diver-2.png",imgClass:"absolute w-125/1320 fmt-[28/1320] fml-[554/1320]"},
    {src: "/welcome-diver-5.png",imgClass:"absolute w-196/1320 fmt-[133/1320] fml-[829/1320]"},
    {src: "/welcome-diver-4.png",imgClass:"absolute w-196/1320 fmt-[420/1320] fml-[969/1320]"},
    {src: "/welcome-diver-3.png",imgClass:"absolute w-230/1320 fmt-[682/1320] fml-[1026/1320]"},
  ] as const;

  const titleText = "Experienced, Explore, and Own the Ocean";
  const subtitleText = `Oceanea is a decentralized ocean ecosystem,
redefining underwater experiences,
revealing uncharted depths,
and empowering everyone to cocreate and share in the ocean together.`;

  return <>
    <div className="relative -translate-x-1/2 left-1/2 fmt-[125/1320] aspect-1320/843 overflow-hidden fr-[64/1320] @container-[size]">
      <img src="/welcome-back.png" className="absolute top-[-79.38%] left-[-8.09%] w-[116.17%] max-w-none"/>
      <div className="absolute inset-0">
        {divers.map((d) => (<img key={d.src} src={d.src} className={d.imgClass} />))}
      </div>
      <div className="relative flex flex-col items-center text-center text-white">
        <p className={"fmt-[252/1320] fmx-[73/1320] ft-[82/1320] font-medium flh-[85/1320] tracking-[-0.03em]"}>{titleText}</p>
        <p className={"fmt-[23/1320] w-950/1320 ft-[32/1320] flh-[35/1320] tracking-[-0.03em"}>{subtitleText}</p>
        <Button text="Join Oceanea" className={"fmt-[75/1320] w-385/1320 aspect-385/60"}/>
      </div>
    </div>
  </>;
}