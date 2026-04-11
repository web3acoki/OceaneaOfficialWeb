export default function Frotier() {

  const dolphins = [
    {src: "/frontier-dolphin-1.png",imgClass:"absolute w-749/1320 fmt-[509/1320] fml-[-313/1320]"},
    {src: "/frontier-dolphin-2.png",imgClass:"absolute w-434/1320 fmt-[641/1320] fml-[-348/1320]"},
    {src: "/frontier-dolphin-3.png",imgClass:"absolute w-371/1320 fmt-[565/1320] fml-[-324/1320]"},
  ] as const;

  const fiveYearBody = `Oceanea will build the world's most immersive underwater entertainment ecosystem,
enabling millions to experience the ocean in entirely new ways.`;
  const thirtyYearBody = `Oceanea aims to unlock the ocean as humanity's next great frontier, opening new
possibilities for exploration, innovation, and discovery.`;

  return <>
    <div className="relative -translate-x-1/2 left-1/2 fmt-[346/1320] aspect-1320/1394 flex flex-col">
      <img src="/frontier-title.png" className="absolute -translate-x-1/2 left-1/2 w-261/1320" />
      <p className="relative text-center fmt-[60/1320] font-medium fls-[-0.84/1320] ft-[96/1320] tracking-[-0.03em]">Shape the Ocean&apos;s Future</p>
      
      <div className="absolute inset-0">
        {dolphins.map((d) => (<img key={d.src} src={d.src} className={d.imgClass} />))}
      </div>

      <p className={"fml-[42/1320] fmt-[171/1320] text-left ft-[40/1320] font-medium"}>5-Year Plan</p>
      <p className={"fml-[42/1320] text-left ft-[28/1320] tracking-[-0.03em] text-[#626262] w-913/1320"}>{fiveYearBody}</p>
      <p className={"fmr-[30/1320] fmt-[656/1320] text-right ft-[40/1320] font-medium"}>30-Year Vision</p>
      <p className={"ml-auto fmr-[30/1320] text-right ft-[28/1320] tracking-[-0.03em] text-[#626262] w-805/1320"}>{thirtyYearBody}</p>
    </div>
  </>;
}
