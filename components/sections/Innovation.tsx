import Button from "../common/Button";

export default function Innovation() {

  const bodyLine1 = `Oceanea is already coming to life in the real world. From next-generation underwater mobility to
immersive ocean gameplay, what once was vision is now becoming reality`;

  const partClassName = "flex flex-col flex-1 items-center";

  const titleClassName = "aspect-650/60 flex flex-row justify-center fg-[41/650]";

  const iconClassName = "fmy-[5/650] w-55/650";

  const pillClassName = "w-338/650 fpy-[5/650] flex items-center justify-center border border-solid border-black bg-white rounded-full";

  const pillLabelClassName ="ft-[36/1920] font-bold whitespace-nowrap";  

  const cardStackClassName =
    "relative fmt-[78/650] aspect-650/900 fr-[50/1920] shadow-xl bg-[linear-gradient(180deg,rgba(173,166,177,0)_2.772%,rgba(251,251,251,0.5)_37.181%,#e3e3e3_71.59%)]";
  
  const innovationBackClassName ="absolute left-1/2 -translate-x-1/2 fmt-[-135/650]";
  const adventureBackClassName = "absolute fmt-[117/650] fml-[-64/650] max-w-none w-978/650";

  const descriptionClassName ="relative z-10 ft-[24/1920] fmt-[640/650] fmx-[80/650] fls-[-0.72/1320] text-center ";

  const innovationArturaDesc = `The World's First Exoskeleton-Based Underwater Propulsion Device, Redefining Human Movement Below the Surface`;
  const innovationDiverDesc = `An Evolving Ocean Game, Bringing Exploration, Play, and Progression Into an Emerging Digital Experience`;

  const buttonClassName =
    "absolute bottom-50/900 fmt-[52/650] fmx-[50/650] w-550/650 aspect-550/60";

  return <>
    <div className="fmx-[300/1920] fmt-[435/1920] aspect-1320/270 @container-[size]">
      <p className={"flh-[120/1320] font-medium ft-[96/1320] fls-[-2.88/1320] text-center"}>Bringing The Vision Alive</p>
      <p className={"fmx-[200/1320] fmt-[31/1320] ft-[28/1320] fls-[-0.84/1320] text-center text-[#a9a9a9]"}>{bodyLine1}</p>
    </div>

    <div className="fmx-[300/1920] fmt-[237/1920] flex flex-row justify-center fg-[20/1320]">

      <div className={partClassName}>

        <div className={titleClassName}>
          <img src="/innovation.svg" className={iconClassName} />
          <div className={pillClassName}>
            <p className={pillLabelClassName}>X-ARTURA</p>
          </div>
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
          <div className={pillClassName}>
            <p className={pillLabelClassName}>X-DIVER</p>
          </div>
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
