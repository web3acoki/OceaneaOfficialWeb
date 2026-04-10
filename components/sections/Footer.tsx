const topNavItems = [
  { label: "Product", fml: "fml-[400/1260]" },
  { label: "Earn", fml: "fml-[600/1260]" },
  { label: "Build", fml: "fml-[750/1260]" },
  { label: "Learn", fml: "fml-[900/1260]" },
  { label: "Join Oceanea", fml: "fml-[1050/1260]" },
];

const linkColumns = [
  { links: ["Oceanea Device", "Oceanea Game", "Oceanea VR", "Oceanea Park"], fml: "fml-[400/1260]" },
  { links: ["Airdrop", "Game Arena"], fml: "fml-[600/1260]" },
  { links: ["RWA", "Dive Center"], fml: "fml-[750/1260]" },
  { links: ["Roadmap", "Whitepaper", "Blog"], fml: "fml-[900/1260]" },
];

const exploreText = "The Decentralized Ecosystem for Ocean Exploration";

export default function Footer() {
  return <>
    <div className="relative -translate-x-1/2 left-1/2 mt-[618px] w-[1320px] h-[746px] fr-[50/1320] bg-linear-to-b  @container-[size] from-[#0c0c0c] via-[#1e191f] to-[#222] shadow-md">
      
      <div className="fmx-[30/1320] fmt-[30/1320] aspect-1260/80 flex bg-white rounded-full relative">
        <img src="/logo.svg" className="fm-[25/1260]"/>
        {topNavItems.map(({ label, fml }) => (
          <p key={label} className={["absolute fmy-[25/1260] ft-[24/1320] font-bold", fml].join(" ")}>{label}</p>
        ))}
      </div>

      <div className="fml-[68/1320] fmt-[64/1320] w-177/1320 flex flex-col absolute">
        <p className=" ft-[24/1320] font-bold text-white">{exploreText}</p>
        <div className="fmt-[21/177] fg-[16/177] flex flex-row items-center">
          <img src="/Telegram.svg" className="w-48/177"/>
          <img src="/X.svg" className="w-48/177"/>  
        </div> 
      </div>

      <p className="absolute fml-[69/1320] fmt-[554/1320] ft-[24/1320] font-medium text-[#a9a9a9]">Copyright © 2026 Roam Networks</p>
      <p className="absolute right-0 fmr-[314/1320] fmt-[554/1320] ft-[24/1320] font-medium text-[#a9a9a9]">Terms of Service</p>
      <p className="absolute right-0 fmr-[113/1320] fmt-[554/1320] ft-[24/1320] font-medium text-[#a9a9a9]">Privacy Policy</p>
      
      <div className="fmt-[20/1320] fmx-[30/1320] aspect-1260/529 flex relative">
        {linkColumns.map(({ links, fml }) => (
          <div key={fml} className={["absolute ft-[20/1320] w-150/1320", fml].join(" ")}>
             {links.map((label) => (
               <p className=" text-white whitespace-nowrap fmt-[35/150]">{label}</p>
             ))}
          </div>
        ))}
      </div> 
    </div>

    <div className="mt-[300px]"/>
  </>;
}
