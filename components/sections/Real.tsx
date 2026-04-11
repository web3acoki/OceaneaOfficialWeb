import Button from "../common/Button";

export default function Real() {

  /** 第四只：fmt=327、fml=850（先纵后横）；相对稿第四只 (fml999,fmt1) 平移 Δfml=-149、Δfmt=+326 */
  const jellyfishes = [
    {src: "/real-jellyfish.png",imgClass:"absolute origin-center w-414/1320 fmt-[1278/1320] fml-[426/1320] rotate-[12.36deg]"},
    {src: "/real-jellyfish.png",imgClass:"absolute origin-center w-303/1320 fmt-[877/1320] fml-[594/1320] -rotate-[14.74deg]"},
    {src: "/real-jellyfish.png",imgClass:"absolute origin-center w-403/1320 fmt-[566/1320] fml-[-48/1320] -rotate-[5.28deg]"},
    {src: "/real-jellyfish.png",imgClass:"absolute origin-center w-346/1320 fmt-[327/1320] fml-[950/1320] rotate-[22.13deg]"},
  ]
  const bodyText = `Oceanea's value is built on real-world impact, providing a solid foundation for the ecosystem.
Its incentive system attracts diverse contributions, driving innovative experiences and rich engagement, lowering participation barriers, and welcoming more ocean enthusiasts while
generating tangible real-world outcomes. Together, participants share a mission to explore the
unknown and advance the ocean ecosystem.`;

  return <>
    <div className="relative -translate-x-1/2 left-1/2 fmt-[495/1320] aspect-1320/1762 flex flex-col items-center">

      <div className="absolute inset-0">
        {jellyfishes.map((j, i) => (<img key={i} src={j.src} className={j.imgClass} alt="" />))}
      </div>

      <p className="ft-[96/1320] font-medium fls-[-2.88/1320] text-center">Built on Real-World Value</p>
      <p className="w-1227/1320 fmt-[27/1320] ft-[28/1320] fls-[-0.84/1320] text-center text-[#626262] whitespace-pre-lin">{bodyText}</p>
      <Button text="Start Your Journey" className="relative fmt-[1259/1320] w-497/1320 aspect-497/80"/>
    </div>
  </>;
}
