"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { navLinkColumns, navLinkHref, navTopLabels } from "../nav/siteNav";
import { useMobileMode } from "../features/MobileMode";

/** Earn / Build 暂时隐藏；不含 Join Oceanea */
const footerNavItems = [
  { label: navTopLabels[0], links: [...navLinkColumns[0]], fmt: "fmt-[20/340]", desktopLeft: 514 },
  { label: navTopLabels[3], links: [...navLinkColumns[3]], fmt: "fmt-[50/340]", desktopLeft: 664 },
];

const contactEmail = "official@oceanea.io";
const socialLinks = [
  { href: "https://t.me/oceanea2", icon: "/Telegram.svg", label: "Telegram" },
  { href: "https://x.com/Oceanea_global", icon: "/X.svg", label: "X" },
  { href: "https://medium.com/@oceaneanetwork", icon: "/Medium.svg", label: "Medium" },
  { href: "", icon: "/Email.svg", label: "Email" },
];

type FooterProps = {
  desktopTopMarginClass?: string;
};

export default function Footer({ desktopTopMarginClass = "fmt-[200/1320]" }: FooterProps) {
  const isMobileMode = useMobileMode();
  const router = useRouter();
  const pathname = usePathname();
  const [emailCopied, setEmailCopied] = useState(false);

  const copyContactEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = contactEmail;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setEmailCopied(true);
    window.setTimeout(() => setEmailCopied(false), 1600);
  };

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
        <div className="absolute right-[20px] top-[18px] flex flex-col items-end gap-[6px]">
          <div className="flex items-center gap-[10px]">
            {socialLinks.map(({ href, icon, label }) => (
              label === "Email" ? (
                <button
                  key={label}
                  type="button"
                  aria-label={`Copy ${contactEmail}`}
                  onClick={copyContactEmail}
                  className="flex size-[19px] cursor-pointer items-center justify-center"
                >
                  <img src={icon} alt="" className="size-full object-contain" />
                </button>
              ) : (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex size-[19px] items-center justify-center"
                >
                  <img src={icon} alt="" className="size-full object-contain" />
                </a>
              )
            ))}
          </div>
        </div> 

        <p className="absolute fml-[26/340] fmt-[175/340] ft-[8/340] text-[#a9a9a9]">Copyright © 2026 Oceanea</p>
        <p className="absolute fml-[198/340] fmt-[175/340] ft-[8/340] text-[#a9a9a9]">Terms of Service</p>
        <p className="absolute fml-[270/340] fmt-[175/340] ft-[8/340] text-[#a9a9a9]">Privacy Policy</p>
        
        <div className="fmt-[18/340] fml-[26/340] aspect-77/16 w-77/340 rounded-full bg-white cursor-pointer" onClick={goHome} >
          <img src="/logo.svg" alt="Oceanea" className="fp-[20/340]"/>
        </div>

        <div className="fml-[26/340] text-white">
          {footerNavItems.map(({ label, fmt }) => (
            <p key={label} className={["absolute ft-[12/340] font-bold ", fmt].join(" ")}>{label}</p>
          ))}
        </div>

        <div className="fml-[104/340] text-[rgba(255,255,255,0.6)]">
          {footerNavItems.map(({ links, fmt }) => (
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
          {footerNavItems.map(({ label, desktopLeft }) => (
            <p key={label} className="absolute whitespace-nowrap" style={{ left: desktopLeft }}>{label}</p>
          ))}
        </div>
      </div>

      <div className="absolute left-[58px] top-[80px] flex flex-col items-start gap-[10px]">
        <div className="flex items-center gap-[16px]">
          {socialLinks.map(({ href, icon, label }) => (
            label === "Email" ? (
              <button
                key={label}
                type="button"
                aria-label={`Copy ${contactEmail}`}
                onClick={copyContactEmail}
                className="group relative flex size-[48px] cursor-pointer items-center justify-center"
              >
                <img src={icon} alt="" className="size-[36px] object-contain" />
                <span className="pointer-events-none absolute left-[56px] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#181818] px-[14px] py-[8px] text-[18px] font-normal leading-[22px] text-[#d9d9d9]/60 opacity-0 shadow-[0px_8px_20px_rgba(0,0,0,0.28)] transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                  {emailCopied ? "Copied" : contactEmail}
                </span>
              </button>
            ) : (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="flex size-[48px] items-center justify-center"
              >
                <img src={icon} alt="" className="size-[36px] object-contain" />
              </a>
            )
          ))}
        </div>
      </div>

      
      <div className="absolute inset-x-0 top-[88px] text-[16px] font-normal capitalize leading-[normal] text-[#7d7d7d]">
        {footerNavItems.map(({ links, desktopLeft }, i) => (
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
