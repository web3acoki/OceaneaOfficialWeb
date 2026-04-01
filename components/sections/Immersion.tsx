export default function Immersion() {
  const subtitleText = `Oceanea is transforming underwater entertainment with a four-in-one and multi-IP guided
  approach.One unified experience across real and virtual worlds, unlocking new ways to explore,
  play, and grow`;

  const immersionCards = [
    {
      src: "/immersion-explore.jpg",
      title: "Oceanea Explore",
      desc: "Experience the ocean in real waters with smart devices",
      imageClassName:
        "absolute top-[0.04%] left-[-106.52%] w-[361.84%] h-[102.42%] max-w-none object-cover",
    },
    {
      src: "/immersion-play.jpg",
      title: "Oceanea Play",
      desc: "Engage through games with shared progression",
      imageClassName: "absolute inset-0 h-full w-full object-cover",
    },
    {
      src: "/immersion-vr.jpg",
      title: "Oceanea VR",
      desc: "Immerse in virtual ocean worlds beyond physical limits",
      imageClassName:
        "absolute top-[-3.49%] left-[-177.58%] w-[373.24%] h-[105.65%] max-w-none object-cover",
    },
    {
      src: "/immersion-parks.jpg",
      title: "Oceanea Parks",
      desc: "Enter real underwater parks and enjoy ocean adventures",
      imageClassName: "absolute inset-0 h-full w-full object-cover",
    },
  ];

  return <>
    <div className="fmx-[300/1920] fmt-[430/1920] aspect-1320/1200 @container-[size]">
      <div className="relative w-1120/1320 fmx-[100/1320] aspect-1120/150 flex flex-col items-center justify-center">
        <img src="/immersion-left.svg" className="absolute top-0 left-0 w-45/1120"/>
        <p className={"absolute ft-[96/1320] font-medium fls-[-2.88/1320] text-center"}>Enter The Oceanverse</p>
        <img src="/immersion-right.svg" className="absolute bottom-0 right-0 w-45/1120"/>
      </div>
      <p className={"fmt-[18/1320] ft-[28/1320] aspect-1320/134 fls-[-0.84/1320] text-[#a9a9a9] whitespace-pre-line text-center"}>{subtitleText}</p>
      <div className="fmt-[136/1320] flex w-full justify-between">
        {immersionCards.map((card) => (
          <div key={card.title} className="relative aspect-314/741 w-314/1320 overflow-hidden rounded-[3.788cqw]">
            <img src={card.src} className={card.imageClassName} />
            <div className="absolute bottom-[1.6%] left-[3.7%] right-[3.7%] h-[31.6%] rounded-[3.788cqw] bg-[rgba(255,255,255,0.1)] flex flex-col items-center z-10">
              <p className={"fmt-[35/300] ft-[32/1320] fls-[-0.96/1320] text-white text-center"}>{card.title}</p>
              <p className={`fmt-[10/300] fmx-[35/300] ft-[24/1320] fls-[-0.72/1320] flh-[25/1320] text-[rgba(255,255,255,0.6)] text-center`}>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>;
}