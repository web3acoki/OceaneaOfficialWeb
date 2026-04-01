export default function Frotier() {
  const mainTitleClassName =
    "relative text-center font-medium fls-[-0.84/1320] ft-[96/1320] tracking-[-0.03em]";
  const sectionTitleClassName =
    "whitespace-pre-line ft-[40/1320] font-medium capitalize";
  const sectionBodyClassName =
    "whitespace-pre-line ft-[28/1320] tracking-[-0.03em] text-[#a9a9a9]";
  const fiveYearBody = `Oceanea will build the world's most immersive underwater entertainment ecosystem,
enabling millions to experience the ocean in entirely new ways.`;
  const thirtyYearBody = `Oceanea aims to unlock the ocean as humanity's next great frontier, opening new
possibilities for exploration, innovation, and discovery.`;

  return <>
    <div className="fmx-[300/1920] fmt-[388/1920] aspect-square flex flex-col @container-[size]">
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center fg-[40/1920]">
          <img src="/frontier-left.svg" className="w-126/1320" />
          <img src="/frontier-right.svg" className="w-126/1320" />
        </div>
        <p className={mainTitleClassName}>Shape the Ocean&apos;s Future</p>
      </div>
      <div className="fml-[42/1320] fmt-[171/1320] text-left">
        <p className={sectionTitleClassName}>5-Year Plan</p>
        <p className={sectionBodyClassName}>{fiveYearBody}</p>
      </div>
      <div className="fmt-[60/1920] aspect-1320/648 overflow-hidden fr-[50/1920] relative">
        <img src="/frontier-back.jpg" className="w-full h-full object-cover"/>
      </div>
      <div className="fmr-[30/1320] fmt-[38/1920] text-right">
        <p className={sectionTitleClassName}>30-Year Vision</p>
        <p className={sectionBodyClassName}>{thirtyYearBody}</p>
      </div>
    </div>
  </>;
}
