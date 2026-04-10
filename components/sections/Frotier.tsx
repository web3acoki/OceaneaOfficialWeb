export default function Frotier() {
  const sectionTitleClassName =
    "whitespace-pre-line ft-[40/1320] font-medium";
  const sectionBodyClassName =
    "whitespace-pre-line ft-[28/1320] tracking-[-0.03em] text-[#626262]";
  const fiveYearBody = `Oceanea will build the world's most immersive underwater entertainment ecosystem,
enabling millions to experience the ocean in entirely new ways.`;
  const thirtyYearBody = `Oceanea aims to unlock the ocean as humanity's next great frontier, opening new
possibilities for exploration, innovation, and discovery.`;

  return <>
    <div className="relative -translate-x-1/2 left-1/2 mt-[388px] w-[1320px] h-[1394px] flex flex-col @container-[size]">
      <img src="/frontier-title.png" className="absolute -translate-x-1/2 left-1/2 w-261/1320" />
      <p className="relative text-center mt-[64px] font-medium fls-[-0.84/1320] ft-[96/1320] tracking-[-0.03em]">Shape the Ocean&apos;s Future</p>
      
      <div className="fml-[42/1320] fmt-[171/1320] text-left">
        <p className={sectionTitleClassName}>5-Year Plan</p>
        <p className={sectionBodyClassName}>{fiveYearBody}</p>
      </div>
      <div className="fmr-[30/1320] fmt-[656/1320] text-right">
        <p className={sectionTitleClassName}>30-Year Vision</p>
        <p className={sectionBodyClassName}>{thirtyYearBody}</p>
      </div>
    </div>
  </>;
}
