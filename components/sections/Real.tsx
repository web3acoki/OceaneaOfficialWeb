import Button from "../common/Button";

export default function Real() {
  const bodyText = `Oceanea's value is built on real-world impact, providing a solid foundation for the ecosystem.
Its incentive system attracts diverse contributions, driving innovative experiences and rich engagement, lowering participation barriers, and welcoming more ocean enthusiasts while
generating tangible real-world outcomes. Together, participants share a mission to explore the
unknown and advance the ocean ecosystem.`;

  return <>
    <div className="relative -translate-x-1/2 left-1/2 mt-[495px] w-[1320px] h-[1762px] flex flex-col items-center @container-[size]">
      <p className="ft-[96/1320] font-medium fls-[-2.88/1320] text-center">Built on Real-World Value</p>
      <p className="w-1227/1320 fmt-[27/1320] ft-[28/1320] fls-[-0.84/1320] text-center text-[#626262] whitespace-pre-lin">{bodyText}</p>
      <Button text="Start Your Journey" className="relative fmt-[1259/1320] w-497/1320 aspect-497/80"/>
    </div>
  </>;
}
