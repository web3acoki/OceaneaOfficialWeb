export default function Community() {
  const bodyText = `Oceanea brings together players, channels, investors,
  community members, and product partners to grow the ecosystem. Every action,
  from diving and playing to investing and co-creating, earns rewards, expands immersive experiences,
  and advances the exploration of the ocean's unknown.`;

  return <>
    <div className="relative -translate-x-1/2 left-1/2 fmt-[458/1320] aspect-1320/1209">
      <div className="flex w-full flex-row items-center justify-center fg-[24/1320]">
        <img src="/community.svg" alt="" className="block w-63/1320 aspect-63/63 shrink-0" />
        <p className="ft-[96/1320] font-medium fls-[-2.88/1320] capitalize text-[#0c0c0c] text-center">Unlock the ocean together</p>
      </div>
      <p className="fmt-[31/1320] ft-[32/1320] fls-[-0.84/1320] text-center text-[#626262]">{bodyText}</p>
      <div className="relative w-full fmt-[152/1320] aspect-1320/700 overflow-hidden fr-[50/1920]">
        <img src="/community-back.jpg" alt="" className="absolute top-[-25%]"/>
      </div>
    </div>
  </>;
}
