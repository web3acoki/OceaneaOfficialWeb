"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { navLinkColumns, navLinkHref, navTopLabels } from "../nav/siteNav";
import { useMobileMode } from "../features/MobileMode";

const topNavItems = [
  { label: navTopLabels[0], fml: "fml-[600/1260]", fmt: "fmt-[20/340]" },
  { label: navTopLabels[1], fml: "fml-[800/1260]", fmt: "fmt-[50/340]" },
  { label: navTopLabels[2], fml: "fml-[1000/1260]", fmt: "fmt-[80/340]" },
];

const linkColumns = [
  { links: [...navLinkColumns[0]], fml: "fml-[600/1260]", fmt: "fmt-[20/340]" },
  { links: [...navLinkColumns[1]], fml: "fml-[800/1260]", fmt: "fmt-[50/340]" },
  { links: [...navLinkColumns[2]], fml: "fml-[1000/1260]", fmt: "fmt-[80/340]" },
];

type FooterProps = {
  desktopTopMarginClass?: string;
};

export default function Footer({ desktopTopMarginClass = "fmt-[200/1320]" }: FooterProps) {
  const isMobileMode = useMobileMode();
  const router = useRouter();
  const pathname = usePathname();

  const goHome = () => {
    if (pathname === "/home" || pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    router.push("/home");
  };

  if (isMobileMode) {
    return <>
      <div className="relative -translate-x-1/2 left-1/2 fmt-[37/340] aspect-340/200 fr-[20/340] bg-black shadow-[0px_6px_10px_10px_rgba(0,0,0,0.05)] overflow-hidden">
        <div className="absolute fmt-[18/340] right-0 w-87/340 flex fg-[50/340]">
          <img src="/Telegram.svg" className=" w-19/87"/>
          <img src="/X.svg" className="w-19/87" />
        </div> 

        <p className="absolute fml-[26/340] fmt-[175/340] ft-[8/340] text-[#a9a9a9]"> Copyright © 2026 Roam Networks</p>
        <p className="absolute fml-[195/340] fmt-[175/340] ft-[8/340] text-[#a9a9a9]">Terms of Service</p>
        <p className="absolute fml-[269/340] fmt-[175/340] ft-[8/340] text-[#a9a9a9]">Privacy Policy</p>
        
        <div className="fmt-[18/340] fml-[26/340] aspect-77/16 w-77/340 rounded-full bg-white cursor-pointer" onClick={goHome} >
          <img src="/logo.svg" className="fp-[20/340]"/>
        </div>

        <div className="fml-[26/340] text-white">
          {topNavItems.map(({ label, fmt }) => (
            <p key={label} className={["absolute ft-[12/340] font-bold ", fmt].join(" ")}>{label}</p>
          ))}
        </div>

        <div className="fml-[104/340] text-[rgba(255,255,255,0.6)]">
          {linkColumns.map(({ links, fmt }) => (
            <div key={fmt} className={["absolute flex fg-[13/340]", fmt].join(" ")}>
              {links.map((t) => (
                <p key={t} className="fmt-[5/340] ft-[9/340] flex-1 min-w-20  whitespace-nowrap ">
                  {navLinkHref[t] ? (
                    <Link href={navLinkHref[t]!} className="text-inherit no-underline">
                      {t}
                    </Link>
                  ) : (
                    t
                  )}
                </p>
              ))}
            </div>
          ))}
        </div>

      </div>
      <div className="aspect-340/26" />
    </>;
  }

  return <>
    <div className={`relative -translate-x-1/2 left-1/2 ${desktopTopMarginClass} aspect-1320/470 fr-[50/1320] bg-black shadow-md @container-[size]`}>
      
      <p className="absolute fml-[40/1320] fmt-[420/1320] ft-[20/1320] font-thin text-[#a9a9a9]">Copyright © 2026 <span className="cursor-pointer" onClick={goHome}>Oceanea</span></p>
      <p className="absolute right-0 fmr-[240/1320] fmt-[420/1320] ft-[20/1320] font-thin text-[#a9a9a9]">Terms of Service</p>
      <p className="absolute right-0 fmr-[40/1320] fmt-[420/1320] ft-[20/1320] font-thin text-[#a9a9a9]">Privacy Policy</p>
      
      <div className="relative fmx-[30/1320] fmt-[30/1320] aspect-1260/67 flex">
        <button
          type="button"
          aria-label="Go to home"
          onClick={goHome}
          className="absolute fml-[0/1260] fmt-[0/1260] flex aspect-207/42 w-207/1260 cursor-pointer items-center justify-center rounded-full bg-white"
        >
          <img src="/logo.svg" className="w-148/207" alt="Oceanea" />
        </button>
        {topNavItems.map(({ label, fml }) => (
          <p key={label} className={["absolute fmy-[20/1260] ft-[24/1320] font-bold text-white", fml].join(" ")}>{label}</p>
        ))}
      </div>

      <div className="fml-[98/1320] fmt-[51/1320] w-177/1320 flex flex-col absolute">
        <div className="fmt-[21/177] fg-[16/177] flex flex-row items-center">
          <img src="/Telegram.svg" className="w-48/177"/>
          <img src="/X.svg" className="w-48/177"/>
        </div> 
      </div>

      
      <div className="fmt-[20/1320] fmx-[30/1320] aspect-1260/529 flex relative">
        {linkColumns.map(({ links, fml }) => (
          <div key={fml} className={["absolute ft-[20/1320] w-150/1320", fml].join(" ")}>
             {links.map((label) => (
               <p key={label} className=" text-white whitespace-nowrap fmt-[35/150]">
                 {navLinkHref[label] ? (
                   <Link href={navLinkHref[label]!} className="text-inherit no-underline">
                     {label}
                   </Link>
                 ) : (
                   label
                 )}
               </p>
             ))}
          </div>
        ))}
      </div> 
    </div>
    <div className="aspect-1320/56"/>
  </>;
}
