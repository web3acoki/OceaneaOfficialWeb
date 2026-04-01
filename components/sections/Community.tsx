export default function Community() {
  const bodyText = `Oceanea brings together players, channels, investors,
  community members, and product partners to grow the ecosystem. Every action,
  from diving and playing to investing and co-creating, earns rewards, expands immersive experiences,
  and advances the exploration of the ocean's unknown.`;

  return <>
    <div className="fmx-[300/1920] fmt-[458/1920] @container-[size]">
      <div className="flex w-full flex-row items-center justify-center fg-[24/1320]">
        <img src="/community.svg" alt="" className="block w-63/1320 aspect-63/63 shrink-0" />
        <p className="ft-[96/1320] font-medium fls-[-2.88/1320] capitalize text-[#0c0c0c] text-center">Unlock the ocean together</p>
      </div>
      <p className="fmx-[100/1320] fmt-[31/1320] ft-[28/1320] fls-[-0.84/1320] text-center text-[#a9a9a9]">{bodyText}</p>

      <div className="relative mt-[40/1920] flex w-full flex-col items-start overflow-visible">
        <img src="/community-dolphins.png" alt="" className="relative z-20 w-[calc(489/1320*100%)] fml-[-178/1320] fmb-[-245/1320]"/>
        <div className="relative z-10 w-full aspect-1320/700 overflow-hidden fr-[50/1920]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img src="/community-diver.jpg" alt="" className="absolute left-0 top-[-82.95%] h-[282.93%] w-full"/>
          </div>
        </div>
      </div>
    </div>
  </>;
}
