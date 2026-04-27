const topNavItems = [
  { label: "Product", fml: "fml-[600/1260]" },
  { label: "Build", fml: "fml-[800/1260]" },
  { label: "Learn", fml: "fml-[1000/1260]" },
];

const linkColumns = [
  { links: ["X-ARTURA", "X-DIVER"], fml: "fml-[600/1260]" },
  { links: ["Airdrop", "Game Arena"], fml: "fml-[800/1260]" },
  { links: ["Roadmap", "Whitepaper", "Blog"], fml: "fml-[1000/1260]" },
];

export default function Footer() {
  return <>
    <div className="relative -translate-x-1/2 left-1/2 fmt-[218/1320] aspect-1320/613 fr-[50/1320] bg-linear-to-b from-[#0c0c0c] via-[#1e191f] to-[#222] shadow-md @container-[size]">
      
      <div className="relative fmx-[30/1320] fmt-[30/1320] aspect-1260/67 flex bg-white rounded-full">
        <img src="/logo.svg" className="fm-[20/1260]"/>
        {topNavItems.map(({ label, fml }) => (
          <p key={label} className={["absolute fmy-[20/1260] ft-[24/1320] font-bold", fml].join(" ")}>{label}</p>
        ))}
      </div>

      <div className="fml-[98/1320] fmt-[51/1320] w-177/1320 flex flex-col absolute">
        <div className="fmt-[21/177] fg-[16/177] flex flex-row items-center">
          <img src="/Telegram.svg" className="w-48/177"/>
          <img src="/X.svg" className="w-48/177"/>
        </div> 
      </div>

      <p className="absolute fml-[40/1320] fmt-[460/1320] ft-[20/1320] font-thin text-[#a9a9a9]">Copyright © 2026 Oceanea</p>
      <p className="absolute right-0 fmr-[240/1320] fmt-[460/1320] ft-[20/1320] font-thin text-[#a9a9a9]">Terms of Service</p>
      <p className="absolute right-0 fmr-[40/1320] fmt-[460/1320] ft-[20/1320] font-thin text-[#a9a9a9]">Privacy Policy</p>
      
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

    <div className="aspect-1320/56"/>
  </>;
}
