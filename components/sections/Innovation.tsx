import Button from "../common/Button";

export default function Innovation() {

  const bodyLine1 = `Oceanea is already coming to life in the real world. From next-generation underwater mobility to
immersive ocean gameplay, what once was vision is now becoming reality`;

  const partClassName = "flex flex-col flex-1 items-center";

  const titleClassName = "aspect-650/60 flex flex-row justify-center fg-[41/650]";

  const iconClassName = "fmy-[5/650] w-55/650";

  const pillLabelClassName ="ft-[36/1320] font-bold whitespace-nowrap";  

  const cardStackClassName =
  //"relative backdrop-blur-[2px] bg-[rgba(73,187,206,0.1)] border border-[#49bbce] border-dashed h-[108.142px] left-[calc(50%+438.14px)] top-[6240px] w-[189.719px]" 
  "relative fmt-[78/650] aspect-650/900 fr-[50/1320] shadow-[0px_4px_10.3px_3px_rgba(0,0,0,0.1)] bg-[linear-gradient(180deg,rgba(245,253,255,0.46)_2.772%,#f5fdff_37.181%,#d4f1f8_71.59%)]";
  //"relative fmt-[78/650] aspect-650/900 fr-[50/1920] shadow-xl bg-[linear-gradient(180deg,rgba(173,166,177,0)_2.772%,rgba(251,251,251,0.5)_37.181%,#e3e3e3_71.59%)]";
  
  const innovationBackClassName ="absolute left-1/2 -translate-x-1/2 fmt-[-135/650]";
  const adventureBackClassName = "absolute fmt-[117/650] fml-[-41/650]";

  const descriptionClassName ="relative z-10 ft-[24/1320] fmt-[640/650] fmx-[80/650] fls-[-0.72/1320] text-center ";

  const innovationArturaDesc = `The World's First Exoskeleton-Based Underwater Propulsion Device, Redefining Human Movement Below the Surface`;
  const innovationDiverDesc = `An Evolving Ocean Game, Bringing Exploration, Play, and Progression Into an Emerging Digital Experience`;

  const buttonClassName ="absolute bottom-50/900 fmt-[52/650] fmx-[50/650] w-550/650 aspect-550/60";

  return <>
    <div className="relative -translate-x-1/2 left-1/2 fmt-[435/1320] aspect-1320/270">
      <p className={"flh-[120/1320] font-medium ft-[96/1320] fls-[-2.88/1320] text-center"}>Bringing The Vision Alive</p>
      <p className={"fmx-[200/1320] fmt-[31/1320] ft-[28/1320] fls-[-0.84/1320] text-center text-[#626262]"}>{bodyLine1}</p>
    </div>

    <div className="relative -translate-x-1/2 left-1/2 fmt-[230/1320] aspect-1320/1047 flex flex-row justify-center fg-[20/1320]">

      <div className={partClassName}>
        <div className={titleClassName}>
          <img src="/innovation.svg" className={iconClassName} />
          <p className={pillLabelClassName}>X-ARTURA</p>
        </div>
        <div className={cardStackClassName}>
          <img src="/innovation-back.png" className={innovationBackClassName}/>
          <p className={descriptionClassName}>{innovationArturaDesc}</p>
          <Button text="Discover X-ARTURA" className={buttonClassName} />
        </div>
      </div>

      <div className={partClassName}>
        <div className={titleClassName}>
          <img src="/adventure.svg" className={iconClassName}/>
          <p className={pillLabelClassName}>X-DIVER</p>
        </div>
        <div className={cardStackClassName}>
          <img src="/adventure-back.png" className={adventureBackClassName} />
          <p className={descriptionClassName}>{innovationDiverDesc}</p>
          <Button text="Discover X-DIVER" className={buttonClassName} />
        </div>

      </div>
    </div>
  </>;
}
