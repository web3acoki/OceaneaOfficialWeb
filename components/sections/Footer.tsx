"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { navLinkColumns, navLinkHref, navTopLabels } from "../nav/siteNav";
import { useMobileMode } from "../features/MobileMode";

const topNavItems = [
  { label: navTopLabels[0], fml: "fml-[570/1260]", fmt: "fmt-[20/340]", desktopLeft: 344 },
  { label: navTopLabels[1], fml: "fml-[740/1260]", fmt: "fmt-[42/340]", desktopLeft: 514 },
  { label: navTopLabels[2], fml: "fml-[910/1260]", fmt: "fmt-[64/340]", desktopLeft: 667 },
  { label: navTopLabels[3], fml: "fml-[1080/1260]", fmt: "fmt-[86/340]", desktopLeft: 807 },
  { label: "Join Oceanea", fml: "fml-[1160/1260]", fmt: "fmt-[108/340]", desktopLeft: 952 },
];

const linkColumns = [
  { links: [...navLinkColumns[0]], fml: "fml-[570/1260]", fmt: "fmt-[20/340]", desktopLeft: 344 },
  { links: [...navLinkColumns[1]], fml: "fml-[740/1260]", fmt: "fmt-[42/340]", desktopLeft: 514 },
  { links: [...navLinkColumns[2]], fml: "fml-[910/1260]", fmt: "fmt-[64/340]", desktopLeft: 667 },
  { links: [...navLinkColumns[3]], fml: "fml-[1080/1260]", fmt: "fmt-[86/340]", desktopLeft: 807 },
  { links: [], fml: "fml-[1160/1260]", fmt: "fmt-[108/340]", desktopLeft: 952 },
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
    router.push("/");
  };

  if (isMobileMode) {
    return <>
      <div className="relative -translate-x-1/2 left-1/2 fmt-[37/340] aspect-340/200 fr-[20/340] bg-black shadow-[0px_6px_10px_10px_rgba(0,0,0,0.05)] overflow-hidden">
        <div className="absolute fmt-[18/340] right-0 w-87/340 flex fg-[50/340]">
          <img src="/Telegram.svg" alt="" className=" w-19/87"/>
          <img src="/X.svg" alt="" className="w-19/87" />
        </div> 

        <p className="absolute fml-[26/340] fmt-[175/340] ft-[8/340] text-[#a9a9a9]">Copyright © 2026 Oceanea</p>
        <p className="absolute fml-[198/340] fmt-[175/340] ft-[8/340] text-[#a9a9a9]">Terms of Service</p>
        <p className="absolute fml-[270/340] fmt-[175/340] ft-[8/340] text-[#a9a9a9]">Privacy Policy</p>
        
        <div className="fmt-[18/340] fml-[26/340] aspect-77/16 w-77/340 rounded-full bg-white cursor-pointer" onClick={goHome} >
          <img src="/logo.svg" alt="Oceanea" className="fp-[20/340]"/>
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
                <p key={t} className="fmt-[5/340] ft-[8/340] flex-1 min-w-18 whitespace-nowrap ">
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
    <div className={`relative left-1/2 ${desktopTopMarginClass} h-[469px] w-[1140px] -translate-x-1/2 overflow-hidden rounded-[40px] bg-[#0c0c0c] shadow-[0px_6px_10px_10px_rgba(0,0,0,0.05)]`}>
      
      <p className="absolute left-[58px] top-[414px] text-[20px] font-thin text-[#7d7d7d]">Copyright © 2026 <span className="cursor-pointer" onClick={goHome}>Oceanea</span></p>
      <p className="absolute left-[calc(50%+167px)] top-[417px] text-[20px] font-thin text-[#7d7d7d] opacity-80">Terms of Service</p>
      <p className="absolute left-[calc(50%+404px)] top-[417px] text-[20px] font-thin text-[#7d7d7d] opacity-80">Privacy Policy</p>
      
      <div className="relative h-[67px] w-full">
        <button
          type="button"
          aria-label="Go to home"
          onClick={goHome}
          className="absolute left-[29px] top-[23px] flex h-[42px] w-[178px] cursor-pointer items-center rounded-[40px] bg-white pl-[29px] pr-[25px] py-[8px]"
        >
          <img src="/logo.svg" className="h-[16px] w-[124px]" alt="Oceanea" />
        </button>
        <div className="absolute inset-x-0 top-[31px] text-[20px] font-semibold capitalize leading-[normal] text-white">
          {topNavItems.map(({ label, desktopLeft }) => (
            <p key={label} className="absolute whitespace-nowrap" style={{ left: desktopLeft }}>{label}</p>
          ))}
        </div>
      </div>

      <div className="absolute left-[58px] top-[80px] flex items-center gap-[16px]">
        <div className="flex size-[48px] items-center justify-center">
          <img src="/Telegram.svg" alt="" className="size-[36px]"/>
        </div>
        <div className="flex size-[48px] items-center justify-center opacity-60">
          <img src="/X.svg" alt="" className="size-[36px]"/>
        </div> 
      </div>

      
      <div className="absolute inset-x-0 top-[88px] text-[16px] font-normal capitalize leading-[normal] text-[#7d7d7d]">
        {linkColumns.map(({ links, desktopLeft }, i) => (
          <div key={i} className="absolute w-[136px]" style={{ left: desktopLeft }}>
             {links.map((label) => (
               <p key={label} className="mb-[6px] whitespace-nowrap">
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
