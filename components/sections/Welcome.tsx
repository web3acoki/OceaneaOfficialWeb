import Button from "../common/Button";

export default function Welcome() {
  const titleClassName =
    "fmt-[322/1320] fmx-[73/1320] text-[6.21cqw] font-medium leading-[1.04] tracking-[-0.03em]";
  const titleText = "Experienced, Explore, and Own the Ocean";
  const subtitleClassName =
    "fmt-[23/1320] fmx-[322/1320] text-[2.12cqw] font-normal leading-[1.07] tracking-[-0.03em]";
  const subtitleText = `Oceanea is a decentralized ocean ecosystem,
redefining underwater experiences,
revealing uncharted depths,
and empowering everyone to cocreate and share in the ocean together.`;
  const ctaWrapClassName = "fmt-[75/1320] w-385/1320 aspect-385/60";

  return <>
    <div className="relative fmt-[150/1920] fmx-[300/1920] aspect-1320/978 overflow-hidden fr-[50/1920] @container-[size] bg-0">
      <img src="/welcome-back.jpg" alt="" className="absolute top-[-79.38%] left-[-8.09%] w-[116.17%] h-[196%] max-w-none"/>
      <div className="absolute flex flex-col items-center text-center text-white">
        <p className={titleClassName}>{titleText}</p>
        <p className={subtitleClassName}>{subtitleText}</p>
        <Button text="Join Oceanea" className={ctaWrapClassName}/>
      </div>
    </div>
  </>;
}