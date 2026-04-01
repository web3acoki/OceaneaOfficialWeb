import Button from "../common/Button";

export default function Real() {
  const bodyText = `Oceanea's value is built on real-world impact, providing a solid foundation for the ecosystem.
Its incentive system attracts diverse contributions, driving innovative experiences and rich engagement, lowering participation barriers, and welcoming more ocean enthusiasts while
generating tangible real-world outcomes. Together, participants share a mission to explore the
unknown and advance the ocean ecosystem.`;

  return <>
    <div className="fmx-[300/1920] fmt-[1641/1920] aspect-1320/1666 relative flex flex-col items-center @container-[size]">
      <img  src="/real-fish.png" className="fmr-[-300/1320] fmt-[150/1320] overflow-hidden absolute top-0 right-0 w-480/1320"/>
      <p className="ft-[96/1320] font-medium fls-[-2.88/1320] text-center">Built on Real-World Value</p>
      <p className="w-1227/1320 fmt-[27/1320] ft-[28/1320] fls-[-0.84/1320] text-center text-[#a9a9a9] whitespace-pre-lin">{bodyText}</p>
      <img src="/real-devices.jpg" className="relative w-1211/1320 aspect-1211/1210" />
      <Button text="Start Your Journey" className="relative fmt-[42/1320] w-497/1320 aspect-497/80"/>
    </div>
  </>;
}
